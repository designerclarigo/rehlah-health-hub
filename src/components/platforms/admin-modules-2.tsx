import { useMemo, useState } from "react";
import { L, useI18n, type Loc } from "@/lib/i18n";
import {
  Badge,
  Button,
  Card,
  DataTable,
  EmptyState,
  Field,
  Input,
  Pagination,
  ProgressBar,
  SearchBar,
  SectionTitle,
  Select,
  Textarea,
} from "@/components/rehlah/primitives";
import {
  Bars,
  ChartCard,
  Donut,
  KeyValue,
  Line1,
  Modal,
  PageHeader,
  StatCard,
  Tabs,
  Toolbar,
} from "@/components/rehlah/blocks";
import { useToast } from "@/components/rehlah/toast";
import { statusTone, Money, A } from "./admin-modules";
import { useCollection, useFilters, matches, downloadCsv, printView } from "@/lib/module-state";
import {
  SPECIALTIES,
  SPECIALISTS,
  spec,
  doc,
  pat,
  patients,
  appointments,
  assessments,
  invoices,
  payments,
  treatmentPlans,
  plans,
  services,
  documents,
  revenueMonthly,
  specialtyDistribution,
  attendanceStatus,
  monthlyComparison,
  visits30,
} from "@/lib/rehlah-data";
import {
  Plus,
  Printer,
  Download,
  Upload,
  FileText,
  Filter,
  RefreshCw,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Send,
  ArrowLeftRight,
  ShieldCheck,
  Signature,
  ClipboardList,
  Receipt,
  Wallet,
  Users,
  Activity,
  Gauge,
  Database,
  Palette,
  History,
  Layers,
  Stethoscope,
  CheckCircle2,
  BadgeCheck,
  CircleDollarSign,
  Eye,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

/* ------------------------------ shared types ------------------------------ */
type Appt = {
  id: number;
  date: string;
  time: string;
  patient: number;
  specialty: number;
  specialist: number;
  type: Loc;
  status: Loc;
  notes: Loc;
};

const ALL_SPECIALTIES = [L("All specialties", "كل التخصصات"), ...SPECIALTIES];
const ALL_SPECIALISTS = [L("All specialists", "كل الأخصائيين"), ...SPECIALISTS];
const STATUS_OPTIONS: Loc[] = [
  L("Confirmed", "مؤكد"),
  L("Pending", "قيد الانتظار"),
  L("Present", "حضر"),
  L("Rescheduled", "أعيد جدولته"),
  L("Excused absence", "غياب بعذر"),
  L("Cancelled", "ملغي"),
];
const ALL_STATUSES = [L("All statuses", "كل الحالات"), ...STATUS_OPTIONS];

const APPT_DATES = ["2026-07-12", "2026-07-12", "2026-07-16", "2026-07-20", "2026-07-12"];

function initialAppointments(): Appt[] {
  return appointments.map((a, i) => ({ ...a, id: i, date: APPT_DATES[i % APPT_DATES.length]! }));
}

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d).padStart(2, "0")} ${months[(m ?? 1) - 1]} ${y}`;
}

/* Local row actions with real handlers (can't extend admin-modules' RowActions). */
function ActionButtons({
  items,
}: {
  items: { icon: React.ReactNode; label: Loc; onClick: () => void; tone?: "danger" }[];
}) {
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-1">
      {items.map((a, i) => (
        <button
          key={i}
          type="button"
          aria-label={t(a.label)}
          title={t(a.label)}
          onClick={a.onClick}
          className={[
            "grid size-9 place-items-center rounded-lg transition-colors",
            a.tone === "danger"
              ? "text-destructive hover:bg-[color-mix(in_oklab,var(--destructive)_12%,white)]"
              : "text-muted-foreground hover:bg-tint-green hover:text-[var(--primary-deep)]",
          ].join(" ")}
        >
          {a.icon}
        </button>
      ))}
    </div>
  );
}

function ConfirmDialog({
  open,
  onClose,
  title,
  description,
  confirmLabel,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  title: Loc;
  description: Loc | string;
  confirmLabel: Loc;
  onConfirm: () => void;
}) {
  const { t } = useI18n();
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="sm"
      title={title}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>{t(L("Keep it", "الإبقاء عليه"))}</Button>
          <Button variant="danger" onClick={onConfirm}>{t(confirmLabel)}</Button>
        </>
      }
    >
      <p className="text-sm text-muted-foreground">{t(description)}</p>
    </Modal>
  );
}

/* ------------------------------ 3. Scheduling ---------------------------- */
export function SchedulingModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [view, setView] = useState("day");
  const [addOpen, setAddOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusTarget, setStatusTarget] = useState<number | null>(null);
  const [newStatus, setNewStatus] = useState<Loc>(STATUS_OPTIONS[0]!);
  const [conflictOpen, setConflictOpen] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);
  const [cancelIndex, setCancelIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];

  const collection = useCollection<Appt>(useMemo(initialAppointments, []));
  const { filters, set } = useFilters({
    date: "",
    search: "",
    specialty: ALL_SPECIALTIES[0]!.en,
    specialist: ALL_SPECIALISTS[0]!.en,
    status: ALL_STATUSES[0]!.en,
  });

  const specialtyLabel = (i: number) => t(spec(i));
  const specialistLabel = (i: number) => t(doc(i));

  const filteredRows = collection.items.filter((a) => {
    if (filters.date && a.date !== filters.date) return false;
    if (!matches(filters.search, t(pat(a.patient).name))) return false;
    if (filters.specialty !== ALL_SPECIALTIES[0]!.en && specialtyLabel(a.specialty) !== filters.specialty) return false;
    if (filters.specialist !== ALL_SPECIALISTS[0]!.en && specialistLabel(a.specialist) !== filters.specialist) return false;
    if (filters.status !== ALL_STATUSES[0]!.en && t(a.status) !== filters.status) return false;
    return true;
  });

  const conflicts = useMemo(() => {
    const list: { a: Appt; b: Appt }[] = [];
    const items = collection.items;
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i]!;
        const b = items[j]!;
        if (a.date === b.date && a.time === b.time && a.specialist === b.specialist) {
          list.push({ a, b });
        }
      }
    }
    return list;
  }, [collection.items]);

  const detailsAppt = detailsIndex != null ? collection.items[detailsIndex] : null;
  const cancelAppt = cancelIndex != null ? collection.items[cancelIndex] : null;

  function findIndexById(id: number) {
    return collection.items.findIndex((r) => r.id === id);
  }

  function toggleSelect(id: number) {
    setSelected((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }
  function toggleSelectAll() {
    setSelected((p) => (p.length === filteredRows.length ? [] : filteredRows.map((r) => r.id)));
  }

  function setStatusByIndex(index: number, status: Loc) {
    collection.update(index, { status });
  }

  function handleBatchConfirm() {
    selected.forEach((id) => {
      const idx = findIndexById(id);
      if (idx >= 0) setStatusByIndex(idx, L("Confirmed", "مؤكد"));
    });
    toast.push("success", L("Batch confirm — completed", "تأكيد جماعي — تم بنجاح"));
    setSelected([]);
  }
  function handleBatchCancel() {
    selected.forEach((id) => {
      const idx = findIndexById(id);
      if (idx >= 0) setStatusByIndex(idx, L("Cancelled", "ملغي"));
    });
    toast.push("success", L("Batch cancel — completed", "إلغاء جماعي — تم بنجاح"));
    setSelected([]);
  }

  function handleExport() {
    downloadCsv(
      "appointments",
      [
        t(L("Date", "التاريخ")),
        t(L("Time", "الوقت")),
        t(L("Patient", "المريض")),
        t(L("Specialty", "التخصص")),
        t(L("Specialist", "الأخصائي")),
        t(L("Type", "النوع")),
        t(L("Status", "الحالة")),
      ],
      filteredRows.map((a) => [a.date, a.time, t(pat(a.patient).name), specialtyLabel(a.specialty), specialistLabel(a.specialist), t(a.type), t(a.status)]),
    );
    toast.push("success", L("Export CSV — completed", "تصدير CSV — تم بنجاح"));
  }

  function openAdd() {
    setEditIndex(null);
    setAddOpen(true);
  }
  function openEdit(id: number) {
    setEditIndex(findIndexById(id));
    setAddOpen(true);
  }

  function saveAppointment(data: Omit<Appt, "id">) {
    if (editIndex != null) {
      collection.update(editIndex, data);
      toast.push("success", L("Appointment updated — completed", "تحديث الموعد — تم بنجاح"));
    } else {
      const nextId = collection.items.reduce((m, r) => Math.max(m, r.id), 0) + 1;
      collection.add({ ...data, id: nextId });
      toast.push("success", L("Appointment created — completed", "إنشاء الموعد — تم بنجاح"));
    }
    setAddOpen(false);
    setEditIndex(null);
  }

  const editingAppt = editIndex != null ? collection.items[editIndex] ?? null : null;

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Scheduling", "الجدولة")}
        description={L("Manage appointments across the clinic", "إدارة المواعيد في المركز")}
        actions={
          <>
            <Button variant="outline" onClick={() => setConflictOpen(true)}>
              {t(L("Check conflicts", "فحص التعارضات"))}
            </Button>
            <Button onClick={openAdd}>
              <Plus className="size-4" aria-hidden /> {t(L("Add appointment", "إضافة موعد"))}
            </Button>
          </>
        }
      />
      <Toolbar>
        <Input
          type="date"
          className="w-44"
          aria-label={t(L("Pick date", "اختر التاريخ"))}
          value={filters.date}
          onChange={(e) => set("date", e.target.value)}
        />
        <SearchBar
          placeholder={L("Search by patient name", "بحث باسم المريض")}
          value={filters.search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => set("search", e.target.value)}
        />
        <Select className="w-40" options={ALL_SPECIALTIES} value={filters.specialty} onChange={(e) => set("specialty", e.target.value)} />
        <Select className="w-44" options={ALL_SPECIALISTS} value={filters.specialist} onChange={(e) => set("specialist", e.target.value)} />
        <Select className="w-36" options={ALL_STATUSES} value={filters.status} onChange={(e) => set("status", e.target.value)} />
        <Button variant="secondary" onClick={() => set("date", "2026-07-12")}>{t(L("Today", "اليوم"))}</Button>
        <Button variant="outline" onClick={handleExport}>
          <Download className="size-4" aria-hidden /> {t(L("Export CSV", "تصدير CSV"))}
        </Button>
      </Toolbar>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Total", "الإجمالي")} value={String(filteredRows.length)} tint="blue" icon={<CalendarDays className="size-5" aria-hidden />} />
        <StatCard label={L("Confirmed", "مؤكدة")} value={String(filteredRows.filter((a) => a.status.en === "Confirmed").length)} tint="green" icon={<CheckCircle2 className="size-5" aria-hidden />} />
        <StatCard label={L("Pending", "قيد الانتظار")} value={String(filteredRows.filter((a) => a.status.en === "Pending").length)} tint="yellow" icon={<History className="size-5" aria-hidden />} />
        <StatCard label={L("Present", "حضروا")} value={String(filteredRows.filter((a) => a.status.en === "Present").length)} tint="purple" icon={<Users className="size-5" aria-hidden />} />
      </div>
      <Tabs
        label="Schedule views"
        value={view}
        onChange={setView}
        tabs={[
          { id: "day", label: L("Day view", "عرض اليوم") },
          { id: "week", label: L("Week view", "عرض الأسبوع") },
          { id: "month", label: L("Month view", "عرض الشهر") },
          { id: "list", label: L("List view", "عرض القائمة") },
          { id: "pending", label: L("Pending", "قيد الانتظار"), count: collection.items.filter((a) => a.status.en === "Pending").length },
        ]}
      />
      <div key={view} className="animate-in-soft space-y-4">
        {(view === "day" || view === "week") && (
          <Card>
            <SectionTitle
              title={view === "day" ? L("Daily timeline", "الجدول اليومي") : L("Weekly timeline", "الجدول الأسبوعي")}
              subtitle={L("Drag to move, resize to change duration, click to open", "اسحب للنقل، غيّر الحجم للمدة، انقر للفتح")}
            />
            <div className="mt-4 space-y-0">
              {hours.map((h, i) => (
                <div key={h} className="grid grid-cols-[64px_minmax(0,1fr)] gap-3 border-t border-border py-3 first:border-0">
                  <span className="pt-1 font-mono text-xs text-muted-foreground">{h}</span>
                  <div className="min-w-0 space-y-2">
                    {filteredRows
                      .filter((_, idx) => idx % hours.length === i % hours.length)
                      .map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setDetailsIndex(findIndexById(a.id))}
                          className="w-full rounded-2xl border border-border bg-tint-green p-3 text-start transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                        >
                          <span className="block truncate text-sm font-semibold">
                            {t(pat(a.patient).name)} · {a.time}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {specialtyLabel(a.specialty)} · {specialistLabel(a.specialist)} · {t(a.type)}
                          </span>
                        </button>
                      ))}
                    <button
                      onClick={openAdd}
                      className="tap-target w-full rounded-2xl border border-dashed border-border text-xs text-muted-foreground hover:bg-muted"
                    >
                      + {t(L("Add here", "إضافة هنا"))}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
        {view === "month" && (
          <MonthGrid appointments={filteredRows} monthIso="2026-07" onDay={(id) => setDetailsIndex(findIndexById(id))} />
        )}
        {(view === "list" || view === "pending") && (
          <>
            {selected.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-tint-blue p-3">
                <span className="text-sm font-medium">
                  {selected.length} {t(L("selected", "محددة"))}
                </span>
                <Button size="sm" variant="secondary" onClick={handleBatchConfirm}>{t(L("Batch confirm", "تأكيد جماعي"))}</Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setStatusTarget(null);
                    setStatusOpen(true);
                  }}
                >
                  {t(L("Change status", "تغيير الحالة"))}
                </Button>
                <Button size="sm" variant="danger" onClick={handleBatchCancel}>{t(L("Batch cancel", "إلغاء جماعي"))}</Button>
              </div>
            )}
            <DataTable
              caption={L("Appointments list", "قائمة المواعيد")}
              columns={[
                "",
                L("Time", "الوقت"),
                L("Patient", "المريض"),
                L("Specialty", "التخصص"),
                L("Specialist", "الأخصائي"),
                L("Type", "النوع"),
                L("Status", "الحالة"),
                L("Notes", "ملاحظات"),
                L("Actions", "إجراءات"),
              ]}
              rows={(view === "pending" ? filteredRows.filter((a) => a.status.en === "Pending") : filteredRows).map((a) => [
                <input
                  key="chk"
                  type="checkbox"
                  aria-label={t(L("Select row", "تحديد الصف"))}
                  className="size-4 accent-[var(--primary)]"
                  checked={selected.includes(a.id)}
                  onChange={() => toggleSelect(a.id)}
                />,
                <span className="font-mono text-xs">{a.time}</span>,
                t(pat(a.patient).name),
                <Badge tone="primary">{specialtyLabel(a.specialty)}</Badge>,
                specialistLabel(a.specialist),
                t(a.type),
                <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>,
                t(a.notes),
                <ActionButtons
                  items={[
                    { ...A.view, onClick: () => setDetailsIndex(findIndexById(a.id)) },
                    { ...A.edit, onClick: () => openEdit(a.id) },
                    { ...A.cancel, tone: "danger", onClick: () => setCancelIndex(findIndexById(a.id)) },
                  ]}
                />,
              ])}
            />
            <Pagination total={filteredRows.length} />
          </>
        )}
      </div>
      <AppointmentModal
        open={addOpen}
        onClose={() => {
          setAddOpen(false);
          setEditIndex(null);
        }}
        initial={editingAppt}
        onSave={saveAppointment}
      />
      <Modal
        open={statusOpen}
        onClose={() => setStatusOpen(false)}
        size="sm"
        title={L("Change appointment status", "تغيير حالة الموعد")}
        footer={
          <Button
            onClick={() => {
              if (statusTarget != null) {
                setStatusByIndex(statusTarget, newStatus);
              } else {
                selected.forEach((id) => {
                  const idx = findIndexById(id);
                  if (idx >= 0) setStatusByIndex(idx, newStatus);
                });
                setSelected([]);
              }
              setStatusOpen(false);
              toast.push("success", L("Update status — completed", "تحديث الحالة — تم بنجاح"));
            }}
          >
            {t(L("Update status", "تحديث الحالة"))}
          </Button>
        }
      >
        <Field label={L("New status", "الحالة الجديدة")}>
          <Select options={STATUS_OPTIONS} value={t(newStatus)} onChange={(e) => {
            const found = STATUS_OPTIONS.find((s) => t(s) === e.target.value);
            if (found) setNewStatus(found);
          }} />
        </Field>
      </Modal>
      <Modal
        open={conflictOpen}
        onClose={() => setConflictOpen(false)}
        size="sm"
        title={L("Appointment conflict", "تعارض في المواعيد")}
        footer={<Button onClick={() => setConflictOpen(false)}>{t(L("Close", "إغلاق"))}</Button>}
      >
        {conflicts.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            {t(L("No overlapping appointments found for the same specialist and time.", "لا توجد مواعيد متعارضة لنفس الأخصائي والوقت."))}
          </p>
        ) : (
          <ul className="space-y-3">
            {conflicts.map((c, i) => (
              <li key={i} className="rounded-xl border border-destructive/40 bg-[color-mix(in_oklab,var(--destructive)_6%,white)] p-3 text-sm">
                {t(L("Conflict", "تعارض"))}: {specialistLabel(c.a.specialist)} · {fmtDate(c.a.date)} {c.a.time} — {t(pat(c.a.patient).name)} {t(L("and", "و"))} {t(pat(c.b.patient).name)}
              </li>
            ))}
          </ul>
        )}
      </Modal>
      <Modal
        open={detailsIndex != null}
        onClose={() => setDetailsIndex(null)}
        title={L("Appointment details", "تفاصيل الموعد")}
        footer={
          detailsAppt && (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  if (detailsIndex != null) openEdit(collection.items[detailsIndex]!.id);
                  setDetailsIndex(null);
                }}
              >
                {t(L("Reschedule", "إعادة جدولة"))}
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  if (detailsIndex != null) setCancelIndex(detailsIndex);
                }}
              >
                {t(L("Cancel appointment", "إلغاء الموعد"))}
              </Button>
              <Button
                onClick={() => {
                  if (detailsIndex != null) setStatusByIndex(detailsIndex, L("Confirmed", "مؤكد"));
                  setDetailsIndex(null);
                  toast.push("success", L("Confirm — completed", "تأكيد — تم بنجاح"));
                }}
              >
                {t(L("Confirm", "تأكيد"))}
              </Button>
            </>
          )
        }
      >
        {detailsAppt && (
          <KeyValue
            items={[
              { k: L("Patient", "المريض"), v: t(pat(detailsAppt.patient).name) },
              { k: L("File no.", "رقم الملف"), v: pat(detailsAppt.patient).file },
              { k: L("Date & time", "التاريخ والوقت"), v: `${fmtDate(detailsAppt.date)} · ${detailsAppt.time}` },
              { k: L("Specialty", "التخصص"), v: specialtyLabel(detailsAppt.specialty) },
              { k: L("Specialist", "الأخصائي"), v: specialistLabel(detailsAppt.specialist) },
              { k: L("Status", "الحالة"), v: <Badge tone={statusTone(detailsAppt.status.en)}>{t(detailsAppt.status)}</Badge> },
            ]}
          />
        )}
      </Modal>
      <ConfirmDialog
        open={cancelIndex != null}
        onClose={() => setCancelIndex(null)}
        title={L("Cancel appointment", "إلغاء الموعد")}
        description={L("This will mark the appointment as cancelled. This action can be reversed by editing the appointment later.", "سيؤدي هذا إلى وضع الموعد كملغي. يمكن التراجع عن هذا لاحقاً بتعديل الموعد.")}
        confirmLabel={L("Cancel appointment", "إلغاء الموعد")}
        onConfirm={() => {
          if (cancelIndex != null) setStatusByIndex(cancelIndex, L("Cancelled", "ملغي"));
          setCancelIndex(null);
          setDetailsIndex(null);
          toast.push("success", L("Appointment cancelled — completed", "إلغاء الموعد — تم بنجاح"));
        }}
      />
    </div>
  );
}

function AppointmentModal({
  open,
  onClose,
  initial,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial: Appt | null;
  onSave: (data: Omit<Appt, "id">) => void;
}) {
  const { t } = useI18n();
  const [patientQuery, setPatientQuery] = useState("");
  const [typeVal, setTypeVal] = useState<Loc>(L("Individual session", "جلسة فردية"));
  const [date, setDate] = useState("2026-07-12");
  const [time, setTime] = useState("08:30");
  const [specialty, setSpecialty] = useState(0);
  const [specialist, setSpecialist] = useState(0);
  const [notes, setNotes] = useState("");
  const [patientIndex, setPatientIndex] = useState(0);

  useMemo(() => {
    if (open) {
      setPatientIndex(initial?.patient ?? 0);
      setPatientQuery(initial ? t(pat(initial.patient).name) : "");
      setTypeVal(initial?.type ?? L("Individual session", "جلسة فردية"));
      setDate(initial?.date ?? "2026-07-12");
      setTime(initial?.time ?? "08:30");
      setSpecialty(initial?.specialty ?? 0);
      setSpecialist(initial?.specialist ?? 0);
      setNotes(initial ? t(initial.notes) : "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initial]);

  const typeOptions: Loc[] = [
    L("Individual session", "جلسة فردية"),
    L("Group session", "جلسة جماعية"),
    L("Treatment program", "برنامج علاجي"),
    L("Consultation", "استشارة"),
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initial ? L("Edit appointment", "تعديل موعد") : L("Add appointment", "إضافة موعد")}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>{t(L("Cancel", "إلغاء"))}</Button>
          <Button
            onClick={() =>
              onSave({
                date,
                time,
                patient: patientIndex,
                specialty,
                specialist,
                type: typeVal,
                status: initial?.status ?? L("Pending", "قيد الانتظار"),
                notes: L(notes || "—", notes || "—"),
              })
            }
          >
            {t(L("Save appointment", "حفظ الموعد"))}
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={L("Patient", "المريض")} required>
          <Input
            placeholder={t(L("Search patient…", "ابحث عن مريض…"))}
            value={patientQuery}
            onChange={(e) => {
              setPatientQuery(e.target.value);
              const idx = patients.findIndex((p) => t(p.name).toLowerCase().includes(e.target.value.toLowerCase()));
              if (idx >= 0) setPatientIndex(idx);
            }}
            list="patient-list"
          />
          <datalist id="patient-list">
            {patients.map((p, i) => (
              <option key={i} value={t(p.name)} />
            ))}
          </datalist>
        </Field>
        <Field label={L("Type", "النوع")}>
          <Select
            options={typeOptions}
            value={t(typeVal)}
            onChange={(e) => {
              const found = typeOptions.find((o) => t(o) === e.target.value);
              if (found) setTypeVal(found);
            }}
          />
        </Field>
        <Field label={L("Date", "التاريخ")} required>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field label={L("Time", "الوقت")} required>
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
        <Field label={L("Specialty", "التخصص")}>
          <Select
            options={SPECIALTIES}
            value={t(spec(specialty))}
            onChange={(e) => {
              const idx = SPECIALTIES.findIndex((s) => t(s) === e.target.value);
              if (idx >= 0) setSpecialty(idx);
            }}
          />
        </Field>
        <Field label={L("Specialist", "الأخصائي")}>
          <Select
            options={SPECIALISTS}
            value={t(doc(specialist))}
            onChange={(e) => {
              const idx = SPECIALISTS.findIndex((s) => t(s) === e.target.value);
              if (idx >= 0) setSpecialist(idx);
            }}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label={L("Notes", "ملاحظات")}>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </Field>
        </div>
      </div>
    </Modal>
  );
}

function dayIso(monthIso: string, day: number) {
  const [y, m] = monthIso.split("-").map(Number);
  return `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function daysInMonth(monthIso: string) {
  const [y, m] = monthIso.split("-").map(Number);
  return new Date(y!, m!, 0).getDate();
}

function firstWeekday(monthIso: string) {
  const [y, m] = monthIso.split("-").map(Number);
  return new Date(y!, m! - 1, 1).getDay();
}

function MonthGrid({
  onDay,
  appointments: appts,
  monthIso,
}: {
  onDay: (apptId: number) => void;
  appointments: Appt[];
  monthIso: string;
}) {
  const { t } = useI18n();
  const total = daysInMonth(monthIso);
  const lead = firstWeekday(monthIso);
  const cells = Array.from({ length: Math.ceil((total + lead) / 7) * 7 }, (_, i) => i - lead + 1);
  const today = "2026-07-12";
  const weekdays = [
    L("Sun", "أحد"),
    L("Mon", "إثنين"),
    L("Tue", "ثلاثاء"),
    L("Wed", "أربعاء"),
    L("Thu", "خميس"),
    L("Fri", "جمعة"),
    L("Sat", "سبت"),
  ];
  return (
    <Card className="p-3 sm:p-4">
      <div className="grid grid-cols-7 gap-1">
        {weekdays.map((w, i) => (
          <div key={i} className="px-2 py-2 text-center text-xs font-semibold text-muted-foreground">
            {t(w)}
          </div>
        ))}
        {cells.map((d, i) => {
          const inMonth = d > 0 && d <= total;
          const iso = inMonth ? dayIso(monthIso, d) : "";
          const isToday = iso === today;
          const weekend = i % 7 === 5 || i % 7 === 6;
          const dayAppts = inMonth ? appts.filter((a) => a.date === iso) : [];
          return (
            <button
              key={i}
              onClick={() => {
                if (inMonth && dayAppts.length > 0) onDay(dayAppts[0]!.id);
                else if (inMonth) onDay(-1);
              }}
              disabled={!inMonth}
              className={[
                "min-h-[84px] rounded-xl border p-2 text-start transition-colors sm:min-h-[104px]",
                inMonth ? "border-border bg-surface hover:bg-tint-green" : "border-transparent bg-muted/40",
                weekend && inMonth ? "bg-tint-blue/60" : "",
                isToday ? "border-primary ring-2 ring-primary/25" : "",
              ].join(" ")}
            >
              <span className={["text-xs font-semibold", inMonth ? "" : "text-muted-foreground"].join(" ")}>
                {inMonth ? d : ""}
              </span>
              {dayAppts.slice(0, 2).map((a, j) => (
                <span
                  key={j}
                  className={[
                    "mt-1 block truncate rounded-md px-1.5 py-0.5 text-[10px]",
                    j === 0 ? "bg-primary/15 text-[var(--primary-deep)]" : "bg-accent/30",
                  ].join(" ")}
                >
                  {a.time} · {t(pat(a.patient).name)}
                </span>
              ))}
            </button>
          );
        })}
      </div>
    </Card>
  );
}

/* ------------------------------- 4. Calendar ----------------------------- */
export function CalendarModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [dayOpen, setDayOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("2026-07-12");
  const [editOpen, setEditOpen] = useState(false);
  const [editApptId, setEditApptId] = useState<number | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [monthIso, setMonthIso] = useState("2026-07");
  const [specialtyFilter, setSpecialtyFilter] = useState(ALL_SPECIALTIES[0]!.en);
  const [specialistFilter, setSpecialistFilter] = useState(ALL_SPECIALISTS[0]!.en);

  const collection = useCollection<Appt>(useMemo(initialAppointments, []));

  const filteredAppts = collection.items.filter((a) => {
    if (specialtyFilter !== ALL_SPECIALTIES[0]!.en && t(spec(a.specialty)) !== specialtyFilter) return false;
    if (specialistFilter !== ALL_SPECIALISTS[0]!.en && t(doc(a.specialist)) !== specialistFilter) return false;
    return true;
  });

  function findIndexById(id: number) {
    return collection.items.findIndex((r) => r.id === id);
  }

  const monthLabel = () => {
    const [y, m] = monthIso.split("-").map(Number);
    const months = [
      L("January", "يناير"), L("February", "فبراير"), L("March", "مارس"), L("April", "أبريل"),
      L("May", "مايو"), L("June", "يونيو"), L("July", "يوليو"), L("August", "أغسطس"),
      L("September", "سبتمبر"), L("October", "أكتوبر"), L("November", "نوفمبر"), L("December", "ديسمبر"),
    ];
    return `${t(months[(m ?? 1) - 1]!)} ${y}`;
  };

  function shiftMonth(delta: number) {
    const [y, m] = monthIso.split("-").map(Number);
    const d = new Date(y!, (m ?? 1) - 1 + delta, 1);
    setMonthIso(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
  }

  function handleExportMonth() {
    downloadCsv(
      `calendar-${monthIso}`,
      [t(L("Date", "التاريخ")), t(L("Time", "الوقت")), t(L("Patient", "المريض")), t(L("Specialty", "التخصص")), t(L("Specialist", "الأخصائي")), t(L("Status", "الحالة"))],
      filteredAppts
        .filter((a) => a.date.startsWith(monthIso))
        .map((a) => [a.date, a.time, t(pat(a.patient).name), t(spec(a.specialty)), t(doc(a.specialist)), t(a.status)]),
    );
    toast.push("success", L("Export CSV — completed", "تصدير CSV — تم بنجاح"));
  }

  const dayAppts = filteredAppts.filter((a) => a.date === selectedDay);

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Calendar", "التقويم")}
        actions={
          <>
            <Select className="w-40" options={ALL_SPECIALTIES} value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)} />
            <Select className="w-44" options={ALL_SPECIALISTS} value={specialistFilter} onChange={(e) => setSpecialistFilter(e.target.value)} />
            <Button variant="outline" onClick={handleExportMonth}>
              <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
            </Button>
            <Button variant="outline" onClick={() => printView()}>
              <Printer className="size-4" aria-hidden /> {t(L("Print", "طباعة"))}
            </Button>
            <Button onClick={() => setAddOpen(true)}>
              <Plus className="size-4" aria-hidden /> {t(L("Add appointment", "إضافة موعد"))}
            </Button>
          </>
        }
      />
      <Card className="p-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <h2 className="truncate text-lg font-bold">{monthLabel()}</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label={t(L("Previous month", "الشهر السابق"))} onClick={() => shiftMonth(-1)}>
              <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
            <Button variant="secondary" onClick={() => setMonthIso("2026-07")}>{t(L("Today", "اليوم"))}</Button>
            <Button variant="outline" size="icon" aria-label={t(L("Next month", "الشهر التالي"))} onClick={() => shiftMonth(1)}>
              <ChevronRight className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
          </div>
        </div>
      </Card>
      <MonthGrid
        appointments={filteredAppts}
        monthIso={monthIso}
        onDay={(id) => {
          const appt = filteredAppts.find((a) => a.id === id);
          setSelectedDay(appt ? appt.date : dayIso(monthIso, 12));
          setDayOpen(true);
        }}
      />
      <Card>
        <SectionTitle title={L("Color legend", "دليل الألوان")} />
        <div className="mt-4 flex flex-wrap gap-3">
          {SPECIALTIES.map((s, i) => (
            <Badge key={i} tone={(["primary", "accent", "wellness", "info", "success"] as const)[i % 5]!}>
              {t(s)}
            </Badge>
          ))}
          <span className="w-full" />
          {[
            L("Confirmed", "مؤكد"),
            L("Pending", "قيد الانتظار"),
            L("Present", "حضر"),
            L("Cancelled", "ملغي"),
          ].map((s, i) => (
            <Badge key={i} tone={statusTone(s.en)}>
              {t(s)}
            </Badge>
          ))}
        </div>
      </Card>
      <Modal
        open={dayOpen}
        onClose={() => setDayOpen(false)}
        title={L("Appointments", "مواعيد")}
        subtitle={fmtDate(selectedDay)}
        footer={<Button variant="outline" onClick={() => setDayOpen(false)}>{t(L("Close", "إغلاق"))}</Button>}
      >
        {dayAppts.length === 0 ? (
          <EmptyState
            icon={<CalendarDays className="size-6" aria-hidden />}
            title={L("No appointments", "لا توجد مواعيد")}
            description={L("There are no appointments on this day for the selected filters.", "لا توجد مواعيد في هذا اليوم وفق عوامل التصفية المحددة.")}
          />
        ) : (
          <ul className="space-y-3">
            {dayAppts.map((a) => (
              <li key={a.id} className="rounded-2xl border border-border p-4">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {a.time} · {t(pat(a.patient).name)}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {t(spec(a.specialty))} · {t(doc(a.specialist))}
                    </p>
                  </div>
                  <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      const idx = findIndexById(a.id);
                      if (idx >= 0) collection.update(idx, { status: L("Confirmed", "مؤكد") });
                      toast.push("success", L("Confirm — completed", "تأكيد — تم بنجاح"));
                    }}
                  >
                    {t(L("Confirm", "تأكيد"))}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditApptId(a.id);
                      setEditOpen(true);
                    }}
                  >
                    {t(L("Reschedule", "إعادة جدولة"))}
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      const idx = findIndexById(a.id);
                      if (idx >= 0) collection.update(idx, { status: L("Cancelled", "ملغي") });
                      toast.push("success", L("Cancel — completed", "إلغاء — تم بنجاح"));
                    }}
                  >
                    {t(L("Cancel", "إلغاء"))}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal>
      <Modal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        title={L("Edit / cancel appointment", "تعديل / إلغاء الموعد")}
        footer={
          <>
            <Button
              variant="danger"
              onClick={() => {
                if (editApptId != null) {
                  const idx = findIndexById(editApptId);
                  if (idx >= 0) collection.update(idx, { status: L("Cancelled", "ملغي") });
                }
                setEditOpen(false);
                toast.push("success", L("Appointment cancelled — completed", "إلغاء الموعد — تم بنجاح"));
              }}
            >
              {t(L("Cancel appointment", "إلغاء الموعد"))}
            </Button>
            <Button
              onClick={() => {
                setEditOpen(false);
                toast.push("success", L("Save changes — completed", "حفظ التغييرات — تم بنجاح"));
              }}
            >
              {t(L("Save changes", "حفظ التغييرات"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("New date", "التاريخ الجديد")}>
            <Input type="date" />
          </Field>
          <Field label={L("New time", "الوقت الجديد")}>
            <Input type="time" />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Cancellation reason", "سبب الإلغاء")}>
              <Textarea />
            </Field>
          </div>
          <Field label={L("Send notification", "إرسال إشعار")}>
            <Select options={[L("SMS + Email", "رسالة + بريد"), L("SMS only", "رسالة فقط"), L("None", "بدون")]} />
          </Field>
        </div>
      </Modal>
      <AppointmentModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        initial={null}
        onSave={(data) => {
          const nextId = collection.items.reduce((m, r) => Math.max(m, r.id), 0) + 1;
          collection.add({ ...data, id: nextId });
          setAddOpen(false);
          toast.push("success", L("Appointment created — completed", "إنشاء الموعد — تم بنجاح"));
        }}
      />
    </div>
  );
}

/* ---------------------------- 5. Treatment Plans -------------------------- */
type Goal = { goal: Loc; progress: number };
type SoapNote = { subjective: string; objective: string; assessment: string; plan: string; date: string };
type Plan = {
  id: number;
  patient: number;
  specialty: number;
  specialist: number;
  start: string;
  end: string;
  progress: number;
  sessions: string;
  status: Loc;
  goals: Goal[];
  notes: SoapNote[];
};

function initialPlans(): Plan[] {
  return treatmentPlans.map((p, i) => ({ ...p, id: i, notes: [] }));
}

export function TreatmentPlansModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("active");
  const [planOpen, setPlanOpen] = useState(false);
  const [editPlanId, setEditPlanId] = useState<number | null>(null);
  const [soapOpen, setSoapOpen] = useState(false);
  const [soapPlanId, setSoapPlanId] = useState<number | null>(null);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const collection = useCollection<Plan>(useMemo(initialPlans, []));
  const [completed, setCompleted] = useState<Plan[]>([]);

  const [search, setSearch] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState(ALL_SPECIALTIES[0]!.en);
  const [specialistFilter, setSpecialistFilter] = useState(ALL_SPECIALISTS[0]!.en);
  const [statusFilter, setStatusFilter] = useState(L("All statuses", "كل الحالات").en);

  const passStatusAll = L("All statuses", "كل الحالات").en;
  const activeLabel = L("Active", "نشطة").en;
  const completedLabel = L("Completed", "مكتملة").en;

  function matchesFilters(p: Plan) {
    if (!matches(search, t(pat(p.patient).name))) return false;
    if (specialtyFilter !== ALL_SPECIALTIES[0]!.en && t(spec(p.specialty)) !== specialtyFilter) return false;
    if (specialistFilter !== ALL_SPECIALISTS[0]!.en && t(doc(p.specialist)) !== specialistFilter) return false;
    if (statusFilter !== passStatusAll && t(p.status) !== statusFilter) return false;
    return true;
  }

  const activePlans = collection.items.filter(matchesFilters);
  const completedPlans = completed.filter(matchesFilters);

  function findIndexById(id: number) {
    return collection.items.findIndex((r) => r.id === id);
  }
  const detailsPlan =
    (detailsId != null && collection.items.find((p) => p.id === detailsId)) ||
    (detailsId != null && completed.find((p) => p.id === detailsId)) ||
    null;
  const editingPlan = editPlanId != null ? collection.items.find((p) => p.id === editPlanId) ?? null : null;

  function openCreate() {
    setEditPlanId(null);
    setPlanOpen(true);
  }
  function openEdit(id: number) {
    setEditPlanId(id);
    setPlanOpen(true);
  }

  function savePlan(data: Omit<Plan, "id" | "notes">) {
    if (editPlanId != null) {
      const idx = findIndexById(editPlanId);
      if (idx >= 0) collection.update(idx, data);
      toast.push("success", L("Plan updated — completed", "تحديث الخطة — تم بنجاح"));
    } else {
      const nextId = Math.max(0, ...collection.items.map((p) => p.id), ...completed.map((p) => p.id)) + 1;
      collection.add({ ...data, id: nextId, notes: [] });
      toast.push("success", L("Plan created — completed", "إنشاء الخطة — تم بنجاح"));
    }
    setPlanOpen(false);
    setEditPlanId(null);
  }

  function dischargePlan(id: number) {
    const idx = findIndexById(id);
    if (idx < 0) return;
    const p = collection.items[idx]!;
    collection.remove(idx);
    setCompleted((prev) => [{ ...p, status: L("Completed", "مكتملة"), progress: 100 }, ...prev]);
    toast.push("success", L("Plan discharged — completed", "تخريج الخطة — تم بنجاح"));
  }

  function deletePlan(id: number) {
    const idx = findIndexById(id);
    if (idx >= 0) {
      collection.remove(idx);
    } else {
      setCompleted((prev) => prev.filter((p) => p.id !== id));
    }
    setDeleteId(null);
    toast.push("success", L("Plan deleted — completed", "حذف الخطة — تم بنجاح"));
  }

  function addSoapNote(planId: number, note: SoapNote) {
    const idx = findIndexById(planId);
    if (idx >= 0) {
      const plan = collection.items[idx]!;
      collection.update(idx, { notes: [note, ...plan.notes] });
    }
  }

  function exportPlan(p: Plan) {
    downloadCsv(
      `plan-${pat(p.patient).file}`,
      [t(L("Field", "الحقل")), t(L("Value", "القيمة"))],
      [
        [t(L("Patient", "المريض")), t(pat(p.patient).name)],
        [t(L("Specialty", "التخصص")), t(spec(p.specialty))],
        [t(L("Specialist", "الأخصائي")), t(doc(p.specialist))],
        [t(L("Period", "الفترة")), `${p.start} → ${p.end}`],
        [t(L("Progress", "التقدم")), `${p.progress}%`],
        ...p.goals.map((g) => [t(L("Goal", "الهدف")), t(g.goal)]),
      ],
    );
    toast.push("success", L("Export CSV — completed", "تصدير CSV — تم بنجاح"));
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Treatment Plans", "الخطط العلاجية")}
        actions={
          <>
            <Button
              variant="outline"
              onClick={() => {
                setSoapPlanId(collection.items[0]?.id ?? null);
                setSoapOpen(true);
              }}
            >
              <ClipboardList className="size-4" aria-hidden /> {t(L("SOAP note", "ملاحظة SOAP"))}
            </Button>
            <Button onClick={openCreate}>
              <Plus className="size-4" aria-hidden /> {t(L("Create plan", "إنشاء خطة"))}
            </Button>
          </>
        }
      />
      <Toolbar>
        <SearchBar placeholder={L("Search plans or patients", "بحث في الخطط أو المرضى")} value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
        <Select className="w-40" options={ALL_SPECIALTIES} value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)} />
        <Select className="w-44" options={ALL_SPECIALISTS} value={specialistFilter} onChange={(e) => setSpecialistFilter(e.target.value)} />
        <Select
          className="w-36"
          options={[L("All statuses", "كل الحالات"), L("Active", "نشطة"), L("Completed", "مكتملة")]}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        />
      </Toolbar>
      <Tabs
        label="Treatment plan tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "active", label: L("Active plans", "الخطط النشطة"), count: activePlans.length },
          { id: "completed", label: L("Completed plans", "الخطط المكتملة"), count: completedPlans.length },
          { id: "templates", label: L("Plan templates", "قوالب الخطط"), count: 5 },
        ]}
      />
      <div key={tab} className="animate-in-soft">
        {tab === "active" && (
          activePlans.length === 0 ? (
            <EmptyState
              icon={<ClipboardList className="size-6" aria-hidden />}
              title={L("No plans found", "لا توجد خطط")}
              description={L("Try adjusting your filters or create a new plan.", "حاول تعديل عوامل التصفية أو أنشئ خطة جديدة.")}
              action={<Button onClick={openCreate}>{t(L("Create plan", "إنشاء خطة"))}</Button>}
            />
          ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {activePlans.map((p) => (
              <Card key={p.id} className="flex flex-col">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{t(pat(p.patient).name)}</p>
                    <p className="truncate font-mono text-xs text-muted-foreground">{pat(p.patient).file}</p>
                  </div>
                  <Badge tone="success">{t(p.status)}</Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge tone="primary">{t(spec(p.specialty))}</Badge>
                  <Badge tone="neutral">{t(doc(p.specialist))}</Badge>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {p.start} → {p.end} · {p.sessions} {t(L("sessions", "جلسة"))}
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-xs">
                    <span>{t(L("Progress", "التقدم"))}</span>
                    <span className="tabular-nums">{p.progress}%</span>
                  </div>
                  <div className="mt-1.5">
                    <ProgressBar value={p.progress} />
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {p.goals.map((g, j) => (
                    <li key={j} className="truncate">• {t(g.goal)}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button size="sm" variant="secondary" className="flex-1" onClick={() => setDetailsId(p.id)}>
                    {t(L("View", "عرض"))}
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => openEdit(p.id)}>
                    {t(L("Edit", "تعديل"))}
                  </Button>
                  <Button size="sm" variant="wellness" className="flex-1" onClick={() => dischargePlan(p.id)}>
                    {t(L("Discharge", "تخريج"))}
                  </Button>
                  <Button size="sm" variant="danger" onClick={() => setDeleteId(p.id)} aria-label={t(L("Delete plan", "حذف الخطة"))}>
                    <Trash2 className="size-4" aria-hidden />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          )
        )}
        {tab === "completed" && (
          completedPlans.length === 0 ? (
            <EmptyState
              icon={<CheckCircle2 className="size-6" aria-hidden />}
              title={L("No completed plans", "لا توجد خطط مكتملة")}
              description={L("Discharged plans will appear here.", "ستظهر هنا الخطط بعد تخريجها.")}
            />
          ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {completedPlans.map((p) => (
              <Card key={p.id} tint="green">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{t(pat(p.patient).name)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t(L("Completed", "مكتملة"))} · {p.end}
                    </p>
                  </div>
                  <Badge tone="success">100%</Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t(L("All goals achieved; discharged with home programme.", "تحققت جميع الأهداف، وتم التخريج مع برنامج منزلي."))}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="secondary" onClick={() => setDetailsId(p.id)}>
                    {t(L("View", "عرض"))}
                  </Button>
                  <Button size="sm" variant="danger" onClick={() => setDeleteId(p.id)}>
                    {t(L("Delete", "حذف"))}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          )
        )}
        {tab === "templates" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SPECIALTIES.map((s, i) => (
              <Card key={i} interactive>
                <Badge tone="primary">{t(s)}</Badge>
                <p className="mt-3 font-semibold">
                  {t(L("Standard 12-week programme", "برنامج قياسي ١٢ أسبوعاً"))}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t(L("6 goals · 24 sessions", "٦ أهداف · ٢٤ جلسة"))}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1" onClick={openCreate}>
                    {t(L("Create from template", "إنشاء من القالب"))}
                  </Button>
                </div>
              </Card>
            ))}
            <button
              onClick={openCreate}
              className="grid min-h-[168px] place-items-center rounded-3xl border border-dashed border-border text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              + {t(L("Add new template", "إضافة قالب جديد"))}
            </button>
          </div>
        )}
      </div>
      <PlanModal open={planOpen} onClose={() => setPlanOpen(false)} initial={editingPlan} onSave={savePlan} />
      <SoapModal
        open={soapOpen}
        onClose={() => setSoapOpen(false)}
        planId={soapPlanId}
        plans={collection.items}
        onSelectPlan={setSoapPlanId}
        onSave={(note) => {
          if (soapPlanId != null) addSoapNote(soapPlanId, note);
          setSoapOpen(false);
          toast.push("success", L("Save note — completed", "حفظ الملاحظة — تم بنجاح"));
        }}
      />
      <Modal
        open={detailsId != null}
        onClose={() => setDetailsId(null)}
        size="lg"
        title={L("Plan details", "تفاصيل الخطة")}
        footer={
          detailsPlan && (
            <>
              <Button variant="outline" onClick={() => detailsPlan && exportPlan(detailsPlan)}>
                <Download className="size-4" aria-hidden /> {t(L("Export CSV", "تصدير CSV"))}
              </Button>
              <Button variant="outline" onClick={() => printView()}>
                <Printer className="size-4" aria-hidden /> {t(L("Print", "طباعة"))}
              </Button>
            </>
          )
        }
      >
        {detailsPlan && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Patient", "المريض"), v: t(pat(detailsPlan.patient).name) },
                { k: L("Specialty", "التخصص"), v: t(spec(detailsPlan.specialty)) },
                { k: L("Specialist", "الأخصائي"), v: t(doc(detailsPlan.specialist)) },
                { k: L("Period", "الفترة"), v: `${detailsPlan.start} → ${detailsPlan.end}` },
              ]}
            />
            <ChartCard
              title={L("Progress chart", "مخطط التقدم")}
              height={200}
              summary="Line chart showing plan progress rising over months."
            >
              <Line1
                data={[
                  { day: "Mar", visits: 20 },
                  { day: "Apr", visits: 38 },
                  { day: "May", visits: 52 },
                  { day: "Jun", visits: 61 },
                  { day: "Jul", visits: detailsPlan.progress },
                ]}
                x="day"
                y="visits"
              />
            </ChartCard>
            <div>
              <h3 className="text-sm font-semibold">{t(L("Goals", "الأهداف"))}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {detailsPlan.goals.map((g, j) => (
                  <li key={j}>• {t(g.goal)} — {g.progress}%</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{t(L("SOAP notes", "ملاحظات SOAP"))}</h3>
              {detailsPlan.notes.length === 0 ? (
                <p className="mt-2 text-sm text-muted-foreground">{t(L("No notes recorded yet.", "لا توجد ملاحظات بعد."))}</p>
              ) : (
                <ul className="mt-2 space-y-3">
                  {detailsPlan.notes.map((n, j) => (
                    <li key={j} className="rounded-xl border border-border p-3 text-sm">
                      <p className="text-xs font-semibold text-muted-foreground">{n.date}</p>
                      <p className="mt-1"><b>{t(L("S", "ذ"))}:</b> {n.subjective}</p>
                      <p><b>{t(L("O", "م"))}:</b> {n.objective}</p>
                      <p><b>{t(L("A", "ت"))}:</b> {n.assessment}</p>
                      <p><b>{t(L("P", "خ"))}:</b> {n.plan}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <DataTable
              caption={L("Plan sessions", "جلسات الخطة")}
              columns={[L("Date", "التاريخ"), L("Specialist", "الأخصائي"), L("Status", "الحالة")]}
              rows={appointments.slice(0, 3).map((a) => [
                `12 Jul 2026 · ${a.time}`,
                t(doc(a.specialist)),
                <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>,
              ])}
            />
          </div>
        )}
      </Modal>
      <ConfirmDialog
        open={deleteId != null}
        onClose={() => setDeleteId(null)}
        title={L("Delete plan", "حذف الخطة")}
        description={L("This will permanently remove the treatment plan. This action cannot be undone.", "سيؤدي هذا إلى حذف الخطة العلاجية نهائياً. لا يمكن التراجع عن هذا الإجراء.")}
        confirmLabel={L("Delete", "حذف")}
        onConfirm={() => deleteId != null && deletePlan(deleteId)}
      />
    </div>
  );
}

function PlanModal({
  open,
  onClose,
  initial,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  initial: Plan | null;
  onSave: (data: Omit<Plan, "id" | "notes">) => void;
}) {
  const { t } = useI18n();
  const [patientIndex, setPatientIndex] = useState(0);
  const [patientQuery, setPatientQuery] = useState("");
  const [specialty, setSpecialty] = useState(0);
  const [specialist, setSpecialist] = useState(0);
  const [start, setStart] = useState("2026-03-01");
  const [end, setEnd] = useState("2026-09-01");
  const [sessions, setSessions] = useState(24);
  const [goals, setGoals] = useState<{ goal: string; criteria: string; date: string }[]>([
    { goal: "", criteria: "", date: "" },
  ]);

  useMemo(() => {
    if (open) {
      setPatientIndex(initial?.patient ?? 0);
      setPatientQuery(initial ? t(pat(initial.patient).name) : "");
      setSpecialty(initial?.specialty ?? 0);
      setSpecialist(initial?.specialist ?? 0);
      setStart(initial?.start ?? "2026-03-01");
      setEnd(initial?.end ?? "2026-09-01");
      setSessions(initial ? Number(initial.sessions.split("/")[1]?.trim() ?? 24) : 24);
      setGoals(
        initial && initial.goals.length > 0
          ? initial.goals.map((g) => ({ goal: t(g.goal), criteria: "", date: "" }))
          : [{ goal: "", criteria: "", date: "" }],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initial]);

  function addGoal() {
    setGoals((p) => [...p, { goal: "", criteria: "", date: "" }]);
  }
  function removeGoal(i: number) {
    setGoals((p) => p.filter((_, j) => j !== i));
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      title={initial ? L("Edit treatment plan", "تعديل خطة علاجية") : L("Create treatment plan", "إنشاء خطة علاجية")}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>{t(L("Cancel", "إلغاء"))}</Button>
          <Button
            onClick={() =>
              onSave({
                patient: patientIndex,
                specialty,
                specialist,
                start,
                end,
                progress: initial?.progress ?? 0,
                sessions: `0 / ${sessions}`,
                status: L("Active", "نشطة"),
                goals: goals.filter((g) => g.goal.trim()).map((g) => ({ goal: L(g.goal, g.goal), progress: 0 })),
              })
            }
          >
            {t(L("Save plan", "حفظ الخطة"))}
          </Button>
        </>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Patient", "المريض")} required>
            <Input
              placeholder={t(L("Search patient…", "ابحث عن مريض…"))}
              value={patientQuery}
              onChange={(e) => {
                setPatientQuery(e.target.value);
                const idx = patients.findIndex((p) => t(p.name).toLowerCase().includes(e.target.value.toLowerCase()));
                if (idx >= 0) setPatientIndex(idx);
              }}
              list="plan-patient-list"
            />
            <datalist id="plan-patient-list">
              {patients.map((p, i) => (
                <option key={i} value={t(p.name)} />
              ))}
            </datalist>
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select
              options={SPECIALTIES}
              value={t(spec(specialty))}
              onChange={(e) => {
                const idx = SPECIALTIES.findIndex((s) => t(s) === e.target.value);
                if (idx >= 0) setSpecialty(idx);
              }}
            />
          </Field>
          <Field label={L("Specialist", "الأخصائي")}>
            <Select
              options={SPECIALISTS}
              value={t(doc(specialist))}
              onChange={(e) => {
                const idx = SPECIALISTS.findIndex((s) => t(s) === e.target.value);
                if (idx >= 0) setSpecialist(idx);
              }}
            />
          </Field>
          <Field label={L("Start date", "تاريخ البدء")}>
            <Input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
          </Field>
          <Field label={L("End date", "تاريخ الانتهاء")}>
            <Input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
          </Field>
          <Field label={L("Planned sessions", "الجلسات المخططة")}>
            <Input type="number" value={sessions} onChange={(e) => setSessions(Number(e.target.value))} />
          </Field>
        </div>
        <div className="rounded-2xl border border-border p-4">
          <h3 className="text-sm font-semibold">{t(L("Goals", "الأهداف"))}</h3>
          <div className="mt-3 space-y-3">
            {goals.map((g, i) => (
              <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto]">
                <Input
                  placeholder={t(L("Goal", "الهدف"))}
                  value={g.goal}
                  onChange={(e) => setGoals((p) => p.map((x, j) => (j === i ? { ...x, goal: e.target.value } : x)))}
                />
                <Input
                  placeholder={t(L("Measurement criteria", "معيار القياس"))}
                  value={g.criteria}
                  onChange={(e) => setGoals((p) => p.map((x, j) => (j === i ? { ...x, criteria: e.target.value } : x)))}
                />
                <Input
                  type="date"
                  aria-label={t(L("Target date", "التاريخ المستهدف"))}
                  value={g.date}
                  onChange={(e) => setGoals((p) => p.map((x, j) => (j === i ? { ...x, date: e.target.value } : x)))}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t(L("Remove goal", "إزالة الهدف"))}
                  onClick={() => removeGoal(i)}
                  disabled={goals.length === 1}
                >
                  <X className="size-4" aria-hidden />
                </Button>
              </div>
            ))}
            <Button size="sm" variant="outline" onClick={addGoal}>
              <Plus className="size-4" aria-hidden /> {t(L("Add goal", "إضافة هدف"))}
            </Button>
          </div>
        </div>
        <Field label={L("Home exercises", "التمارين المنزلية")}>
          <Textarea />
        </Field>
        <Field label={L("Notes", "ملاحظات")}>
          <Textarea />
        </Field>
      </div>
    </Modal>
  );
}

function SoapModal({
  open,
  onClose,
  planId,
  plans: planList,
  onSelectPlan,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  planId: number | null;
  plans: Plan[];
  onSelectPlan: (id: number) => void;
  onSave: (note: SoapNote) => void;
}) {
  const { t } = useI18n();
  const [subjective, setSubjective] = useState("");
  const [objective, setObjective] = useState("");
  const [assessment, setAssessment] = useState("");
  const [plan, setPlan] = useState("");

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={L("SOAP note quick entry", "إدخال سريع لملاحظة SOAP")}
      footer={
        <Button
          onClick={() => {
            onSave({ subjective, objective, assessment, plan, date: new Date().toISOString().slice(0, 10) });
            setSubjective("");
            setObjective("");
            setAssessment("");
            setPlan("");
          }}
        >
          {t(L("Save note", "حفظ الملاحظة"))}
        </Button>
      }
    >
      <div className="space-y-4">
        <Field label={L("Plan", "الخطة")}>
          <Select
            options={planList.map((p) => t(pat(p.patient).name))}
            value={planId != null ? t(pat(planList.find((p) => p.id === planId)?.patient ?? 0).name) : ""}
            onChange={(e) => {
              const found = planList.find((p) => t(pat(p.patient).name) === e.target.value);
              if (found) onSelectPlan(found.id);
            }}
          />
        </Field>
        <Field label={L("Subjective", "الذاتي")}>
          <Textarea rows={2} value={subjective} onChange={(e) => setSubjective(e.target.value)} />
        </Field>
        <Field label={L("Objective", "الموضوعي")}>
          <Textarea rows={2} value={objective} onChange={(e) => setObjective(e.target.value)} />
        </Field>
        <Field label={L("Assessment", "التقييم")}>
          <Textarea rows={2} value={assessment} onChange={(e) => setAssessment(e.target.value)} />
        </Field>
        <Field label={L("Plan", "الخطة")}>
          <Textarea rows={2} value={plan} onChange={(e) => setPlan(e.target.value)} />
        </Field>
      </div>
    </Modal>
  );
}
