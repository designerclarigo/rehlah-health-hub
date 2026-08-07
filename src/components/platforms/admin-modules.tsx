import { useState } from "react";
import { useCollection, downloadCsv, printView } from "@/lib/module-state";
import { L, useI18n, type Loc } from "@/lib/i18n";
import {
  Badge,
  Button,
  Card,
  DataTable,
  EmptyState,
  Field,
  FilterChip,
  Input,
  Pagination,
  ProgressBar,
  SearchBar,
  Select,
  SectionTitle,
  Skeleton,
  Textarea,
  type Tone,
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
  Toast,
  Toolbar,
} from "@/components/rehlah/blocks";
import { DataGrid } from "@/components/rehlah/datagrid";
import { useToast } from "@/components/rehlah/toast";
import {
  SPECIALTIES,
  SPECIALISTS,
  spec,
  doc,
  pat,
  plan0,
  patients,
  appointments,
  visits30,
  specialtyDistribution,
  monthlyComparison,
  attendanceStatus,
  revenueMonthly,
  assessments,
  invoices,
  payments,
  treatmentPlans,
  plans,
  services,
  documents,
} from "@/lib/rehlah-data";
import {
  Users,
  CalendarDays,
  Calendar,
  Activity,
  Wallet,
  Gauge,
  Plus,
  Download,
  Printer,
  RefreshCw,
  Upload,
  Trash2,
  Eye,
  Pencil,
  FileText,
  Filter,
  Send,
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  Signature,
  Receipt,
  ArrowLeftRight,
  Database,
  Palette,
  History,
  KeyRound,
  Inbox,
  CalendarClock,
  CheckCircle2,
  BadgeCheck,
  Layers,
} from "lucide-react";

/* ------------------------------- helpers -------------------------------- */
export const statusTone = (s: string): Tone => {
  const map: Record<string, Tone> = {
    Active: "success",
    Confirmed: "primary",
    Present: "success",
    Pending: "warning",
    Paid: "success",
    Partial: "warning",
    Unpaid: "danger",
    Inactive: "neutral",
    Withdrawn: "neutral",
    Completed: "success",
    "Under review": "warning",
    "Needs follow-up": "danger",
    Rescheduled: "info",
    "Excused absence": "info",
    Cancelled: "danger",
  };
  return map[s] ?? "neutral";
};

export function Money({ v }: { v: number }) {
  return <span className="font-semibold tabular-nums">{v.toLocaleString()} SAR</span>;
}

export function RowActions({ items }: { items: { icon: React.ReactNode; label: Loc }[] }) {
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-1">
      {items.map((a, i) => (
        <button
          key={i}
          aria-label={t(a.label)}
          title={t(a.label)}
          className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-tint-green hover:text-[var(--primary-deep)]"
        >
          {a.icon}
        </button>
      ))}
    </div>
  );
}

export const A = {
  view: { icon: <Eye className="size-4" aria-hidden />, label: L("View", "عرض") },
  edit: { icon: <Pencil className="size-4" aria-hidden />, label: L("Edit", "تعديل") },
  print: { icon: <Printer className="size-4" aria-hidden />, label: L("Print", "طباعة") },
  pdf: { icon: <FileText className="size-4" aria-hidden />, label: L("PDF", "PDF") },
  del: { icon: <Trash2 className="size-4" aria-hidden />, label: L("Delete", "حذف") },
  down: { icon: <Download className="size-4" aria-hidden />, label: L("Download", "تنزيل") },
  pay: { icon: <Wallet className="size-4" aria-hidden />, label: L("Pay", "دفع") },
  cancel: { icon: <Trash2 className="size-4" aria-hidden />, label: L("Cancel", "إلغاء") },
  send: { icon: <Send className="size-4" aria-hidden />, label: L("Send", "إرسال") },
  key: { icon: <KeyRound className="size-4" aria-hidden />, label: L("Reset password", "إعادة تعيين كلمة المرور") },
};

function useTabs(ids: { id: string; label: Loc; count?: number }[]) {
  const [tab, setTab] = useState(ids[0]!.id);
  return { tab, setTab, ids };
}

/* ------------------------------ 0. Dashboard ----------------------------- */
const PERIOD_OPTIONS = [
  L("This month", "هذا الشهر"),
  L("Today", "اليوم"),
  L("This week", "هذا الأسبوع"),
  L("This quarter", "هذا الربع"),
  L("This year", "هذه السنة"),
];
const PERIOD_DAYS = [30, 1, 7, 30, 30];

export function DashboardModule({ onNavigate }: { onNavigate?: (id: string) => void } = {}) {
  const { t } = useI18n();
  const nav = (id: string) => onNavigate?.(id);
  const [period, setPeriod] = useState(0);
  const visitsSliced = visits30.slice(-PERIOD_DAYS[period]!);
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Dashboard", "لوحة التحكم")}
        description={L(
          "Clinic-wide activity at a glance",
          "نظرة شاملة على نشاط المركز",
        )}
        actions={
          <>
            <Select
              aria-label={t(L("Period filter", "تصفية الفترة"))}
              className="w-36"
              value={t(PERIOD_OPTIONS[period]!)}
              onChange={(e) => {
                const idx = PERIOD_OPTIONS.findIndex((o) => t(o) === e.target.value);
                if (idx >= 0) setPeriod(idx);
              }}
              options={PERIOD_OPTIONS}
            />
            <Select
              aria-label={t(L("Specialty filter", "تصفية التخصص"))}
              className="w-44"
              options={[L("All specialties", "كل التخصصات"), ...SPECIALTIES]}
            />
            <Button variant="outline" size="icon" aria-label={t(L("Refresh", "تحديث"))}>
              <RefreshCw className="size-4" aria-hidden />
            </Button>
            <Button variant="outline">
              <Download className="size-4" aria-hidden /> {t(L("Export PDF", "تصدير PDF"))}
            </Button>
            <Button variant="secondary" onClick={() => nav("registry")}>
              <CalendarClock className="size-4" aria-hidden />{" "}
              {t(L("Quick appointment", "موعد سريع"))}
            </Button>
            <Button onClick={() => nav("registry")}>
              <Plus className="size-4" aria-hidden /> {t(L("New patient", "مريض جديد"))}
            </Button>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard
          label={L("Total patients", "إجمالي المرضى")}
          value="1,284"
          change="+4.2%"
          tint="green"
          icon={<Users className="size-5" aria-hidden />}
        />
        <StatCard
          label={L("Today's appointments", "مواعيد اليوم")}
          value="46"
          change="+8"
          tint="blue"
          icon={<CalendarDays className="size-5" aria-hidden />}
        />
        <StatCard
          label={L("Today's sessions", "جلسات اليوم")}
          value="38"
          change="+3"
          tint="purple"
          icon={<Activity className="size-5" aria-hidden />}
        />
        <StatCard
          label={L("Revenue", "الإيرادات")}
          value="311K SAR"
          change="+6.5%"
          tint="yellow"
          icon={<Wallet className="size-5" aria-hidden />}
        />
        <StatCard
          label={L("Occupancy rate", "معدل الإشغال")}
          value="86%"
          change="-1.1%"
          icon={<Gauge className="size-5" aria-hidden />}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <ChartCard
          title={L("Visits over 30 days", "الزيارات خلال ٣٠ يوماً")}
          subtitle={L("Daily completed visits", "الزيارات المكتملة يومياً")}
          summary="Line chart of daily visits over the last 30 days, ranging from 22 to 40 visits."
        >
          <Line1 data={visitsSliced} x="day" y="visits" />
        </ChartCard>
        <ChartCard
          title={L("Specialty distribution", "توزيع التخصصات")}
          summary="Pie chart: Physical 34%, Occupational 26%, Speech 22%, Behavioral 11%, Psychology 7%."
        >
          <Donut data={specialtyDistribution} />
        </ChartCard>
        <ChartCard
          title={L("Monthly appointments comparison", "مقارنة المواعيد الشهرية")}
          summary="Bar chart comparing current and previous year monthly appointments, growing from 320 to 478."
        >
          <Bars data={monthlyComparison} x="m" keys={["current", "previous"]} />
        </ChartCard>
        <ChartCard
          title={L("Attendance status", "حالة الحضور")}
          summary="Pie chart: Present 72%, Excused 12%, Unexcused 8%, Cancelled 8%."
        >
          <Donut data={attendanceStatus} />
        </ChartCard>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <SectionTitle
            title={L("Active patients", "المرضى النشطون")}
            subtitle={L("Last 8 patients", "آخر ٨ مرضى")}
            action={
              <Button variant="ghost" size="sm" onClick={() => nav("registry")}>
                {t(L("View all", "عرض الكل"))}
              </Button>
            }
          />
          <div className="mt-4">
            <DataTable
              caption={L("Active patients", "المرضى النشطون")}
              columns={[
                L("File no.", "رقم الملف"),
                L("Name", "الاسم"),
                L("Specialty", "التخصص"),
                L("Last visit", "آخر زيارة"),
                L("Status", "الحالة"),
              ]}
              rows={patients.map((p) => [
                <span className="font-mono text-xs">{p.file}</span>,
                t(p.name),
                <Badge tone="primary">{t(spec(p.specialty))}</Badge>,
                p.lastVisit,
                <Badge tone={statusTone(p.status.en)}>{t(p.status)}</Badge>,
              ])}
            />
          </div>
        </Card>
        <div className="space-y-4">
          <Card tint="green">
            <SectionTitle
              title={L("Upcoming appointments", "المواعيد القادمة")}
              subtitle={L("Next 5", "الخمسة القادمة")}
            />
            <ul className="mt-4 space-y-3">
              {appointments.map((a, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-surface p-3"
                >
                  <span className="rounded-xl bg-tint-blue px-2.5 py-1.5 font-mono text-xs font-semibold">
                    {a.time}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{t(pat(a.patient).name)}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {t(spec(a.specialty))} · {t(doc(a.specialist))}
                    </p>
                  </div>
                  <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>
                </li>
              ))}
            </ul>
          </Card>
          <Card tint="yellow">
            <SectionTitle
              title={L("Alerts & notifications", "التنبيهات والإشعارات")}
              action={
                <Button variant="ghost" size="sm" onClick={() => nav("registry")}>
                  {t(L("View all", "عرض الكل"))}
                </Button>
              }
            />
            <ul className="mt-3 space-y-2 text-sm">
              <li className="rounded-xl bg-surface p-3">
                {t(L("3 consents expire today", "٣ موافقات تنتهي اليوم"))}
              </li>
              <li className="rounded-xl bg-surface p-3">
                {t(L("2 invoices overdue > 30 days", "فاتورتان متأخرتان أكثر من ٣٠ يوماً"))}
              </li>
              <li className="rounded-xl bg-surface p-3">
                {t(L("1 urgent incoming referral", "إحالة واردة عاجلة واحدة"))}
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <Card>
        <SectionTitle
          title={L("Recent assessments", "التقييمات الأخيرة")}
          subtitle={L("Summary", "ملخص")}
        />
        <div className="mt-4">
          <DataTable
            caption={L("Recent assessments", "التقييمات الأخيرة")}
            columns={[
              L("Patient", "المريض"),
              L("Specialty", "التخصص"),
              L("Date", "التاريخ"),
              L("Score", "الدرجة"),
              L("Status", "الحالة"),
            ]}
            rows={assessments.map((a) => [
              t(pat(a.patient).name),
              t(spec(a.specialty)),
              a.date,
              <div className="flex w-32 items-center gap-2">
                <ProgressBar
                  value={a.score}
                  tone={a.score > 70 ? "success" : a.score > 55 ? "accent" : "danger"}
                />
                <span className="text-xs tabular-nums">{a.score}</span>
              </div>,
              <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>,
            ])}
          />
        </div>
      </Card>
    </div>
  );
}

/* --------------------------- 1. Patient Registry -------------------------- */
type Patient = (typeof patients)[number];

function emptyPatientForm() {
  return {
    file: "",
    name: "",
    dob: "",
    gender: "Male" as "Male" | "Female",
    nationality: "",
    diagnosis: "",
    specialtyIdx: 0,
    status: "Active" as "Active" | "Inactive" | "Withdrawn",
  };
}

function makePatient(f: ReturnType<typeof emptyPatientForm>, fallbackIndex: number): Patient {
  return {
    file: f.file || `RH-${10300 + fallbackIndex}`,
    name: L(f.name || "New patient", f.name || "مريض جديد"),
    age: 0,
    gender: f.gender === "Female" ? L("Female", "أنثى") : L("Male", "ذكر"),
    nationality: L(f.nationality || "—", f.nationality || "—"),
    diagnosis: L(f.diagnosis || "—", f.diagnosis || "—"),
    specialty: f.specialtyIdx,
    lastVisit: "—",
    status:
      f.status === "Inactive"
        ? L("Inactive", "غير نشط")
        : f.status === "Withdrawn"
          ? L("Withdrawn", "منسحب")
          : L("Active", "نشط"),
    payments: "0 SAR",
    due: "0 SAR",
  };
}

function PatientFormFields({
  form,
  setForm,
}: {
  form: ReturnType<typeof emptyPatientForm>;
  setForm: (f: ReturnType<typeof emptyPatientForm>) => void;
}) {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <section>
        <h3 className="mb-3 text-sm font-semibold text-[var(--primary-deep)]">
          {t(L("Personal information", "المعلومات الشخصية"))}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Full name", "الاسم الكامل")} required>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t(L("Full name", "الاسم الكامل"))}
            />
          </Field>
          <Field label={L("Date of birth", "تاريخ الميلاد")}>
            <Input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
          </Field>
          <Field label={L("Gender", "الجنس")}>
            <Select
              value={t(form.gender === "Female" ? L("Female", "أنثى") : L("Male", "ذكر"))}
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value === t(L("Female", "أنثى")) ? "Female" : "Male" })
              }
              options={[L("Male", "ذكر"), L("Female", "أنثى")]}
            />
          </Field>
          <Field label={L("Nationality", "الجنسية")}>
            <Input
              value={form.nationality}
              onChange={(e) => setForm({ ...form, nationality: e.target.value })}
              placeholder={t(L("Nationality", "الجنسية"))}
            />
          </Field>
        </div>
      </section>
      <section>
        <h3 className="mb-3 text-sm font-semibold text-[var(--primary-deep)]">
          {t(L("Medical information", "المعلومات الطبية"))}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Diagnosis", "التشخيص")}>
            <Input
              value={form.diagnosis}
              onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
              placeholder={t(L("Diagnosis", "التشخيص"))}
            />
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select
              value={t(SPECIALTIES[form.specialtyIdx]!)}
              onChange={(e) =>
                setForm({ ...form, specialtyIdx: SPECIALTIES.findIndex((s) => t(s) === e.target.value) })
              }
              options={SPECIALTIES}
            />
          </Field>
        </div>
      </section>
      <section>
        <h3 className="mb-3 text-sm font-semibold text-[var(--primary-deep)]">
          {t(L("File information", "معلومات الملف"))}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("File number", "رقم الملف")}>
            <Input
              value={form.file}
              onChange={(e) => setForm({ ...form, file: e.target.value })}
              placeholder={t(L("File number", "رقم الملف"))}
            />
          </Field>
          <Field label={L("Status", "الحالة")}>
            <Select
              value={t(
                form.status === "Inactive"
                  ? L("Inactive", "غير نشط")
                  : form.status === "Withdrawn"
                    ? L("Withdrawn", "منسحب")
                    : L("Active", "نشط"),
              )}
              onChange={(e) => {
                const v = e.target.value;
                const status =
                  v === t(L("Inactive", "غير نشط"))
                    ? "Inactive"
                    : v === t(L("Withdrawn", "منسحب"))
                      ? "Withdrawn"
                      : "Active";
                setForm({ ...form, status });
              }}
              options={[L("Active", "نشط"), L("Inactive", "غير نشط"), L("Withdrawn", "منسحب")]}
            />
          </Field>
        </div>
      </section>
    </div>
  );
}

function parseCsvPatients(text: string): Patient[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return [];
  const rows = lines.slice(1);
  return rows.map((line, i) => {
    const cells = line.split(",").map((c) => c.trim());
    const [file, name, diagnosis] = cells;
    return makePatient(
      { ...emptyPatientForm(), file: file ?? "", name: name ?? "", diagnosis: diagnosis ?? "" },
      i,
    );
  });
}

export function PatientRegistryModule({ onOpenProfile }: { onOpenProfile: () => void }) {
  const { t } = useI18n();
  const toast = useToast();
  const collection = useCollection<Patient>(patients);
  const [addOpen, setAddOpen] = useState(false);
  const [advOpen, setAdvOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  const [bulkSelection, setBulkSelection] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [rowDeleteIndex, setRowDeleteIndex] = useState<number | null>(null);
  const [form, setForm] = useState(emptyPatientForm());
  const fileInputRef = useState(() => ({ current: null as HTMLInputElement | null }))[0];

  const openEdit = (index: number) => {
    const row = collection.items[index]!;
    setForm({
      file: row.file,
      name: t(row.name),
      dob: "",
      gender: row.gender.en === "Female" ? "Female" : "Male",
      nationality: t(row.nationality),
      diagnosis: t(row.diagnosis),
      specialtyIdx: row.specialty,
      status:
        row.status.en === "Inactive" ? "Inactive" : row.status.en === "Withdrawn" ? "Withdrawn" : "Active",
    });
    setEditIndex(index);
  };

  const handleCsvSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result ?? "");
        const rows = parseCsvPatients(text);
        if (rows.length === 0) {
          toast.push("error", L("No valid rows found in file", "لا توجد صفوف صالحة في الملف"));
          return;
        }
        rows.forEach((r) => collection.add(r));
        toast.push(
          "success",
          L(`${rows.length} patients imported`, `تم استيراد ${rows.length} مريض`),
        );
      } catch {
        toast.push("error", L("Failed to import file", "فشل استيراد الملف"));
      }
    };
    reader.onerror = () => toast.push("error", L("Failed to import file", "فشل استيراد الملف"));
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <input
        ref={(el) => {
          fileInputRef.current = el;
        }}
        type="file"
        accept=".csv,.xlsx"
        className="hidden"
        aria-hidden
        tabIndex={-1}
        onChange={handleCsvSelected}
      />
      <PageHeader
        title={L("Patient Registry", "سجل المرضى")}
        description={L(`${collection.items.length} registered patients`, `${collection.items.length} مريضاً مسجلاً`)}
        actions={
          <>
            <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
              <Upload className="size-4" aria-hidden /> {t(L("Import Excel/CSV", "استيراد Excel/CSV"))}
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                downloadCsv(
                  "rehlah-patients",
                  ["File", "Name", "Diagnosis", "Status"],
                  collection.items.map((p) => [p.file, t(p.name), t(p.diagnosis), t(p.status)]),
                )
              }
            >
              <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
            </Button>
            <Button variant="outline" size="icon" aria-label={t(L("Print", "طباعة"))} onClick={() => printView()}>
              <Printer className="size-4" aria-hidden />
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (bulkSelection.length === 0) {
                  toast.push("error", L("Select at least one patient", "اختر مريضاً واحداً على الأقل"));
                  return;
                }
                setDelOpen(true);
              }}
            >
              <Trash2 className="size-4" aria-hidden /> {t(L("Delete selected", "حذف المحدد"))}
            </Button>
            <Button
              onClick={() => {
                setForm(emptyPatientForm());
                setAddOpen(true);
              }}
            >
              <Plus className="size-4" aria-hidden /> {t(L("Add patient", "إضافة مريض"))}
            </Button>
          </>
        }
      />
      <DataGrid
        caption={L("Patient registry table", "جدول سجل المرضى")}
        rows={collection.items}
        rowKey={(p) => p.file}
        exportName="rehlah-patients"
        pageSize={10}
        search={(p) => `${p.file} ${p.name.en} ${p.name.ar} ${p.diagnosis.en} ${p.diagnosis.ar}`}
        searchPlaceholder={L("Search by name, file number or phone", "بحث بالاسم أو رقم الملف أو الجوال")}
        toolbarExtra={
          <Button variant="outline" onClick={() => setAdvOpen(true)}>
            <Filter className="size-4" aria-hidden /> {t(L("Advanced search", "بحث متقدم"))}
          </Button>
        }
        filters={[
          {
            id: "specialty",
            label: L("Specialty", "التخصص"),
            options: SPECIALTIES.map((sp, i) => ({ value: String(i), label: sp })),
            match: (p, v) => String(p.specialty) === v,
          },
          {
            id: "status",
            label: L("Status", "الحالة"),
            options: [
              { value: "Active", label: L("Active", "نشط") },
              { value: "Inactive", label: L("Inactive", "غير نشط") },
              { value: "Withdrawn", label: L("Withdrawn", "منسحب") },
            ],
            match: (p, v) => p.status.en === v,
          },
          {
            id: "gender",
            label: L("Gender", "الجنس"),
            options: [
              { value: "Male", label: L("Male", "ذكر") },
              { value: "Female", label: L("Female", "أنثى") },
            ],
            match: (p, v) => p.gender.en === v,
          },
          {
            id: "age",
            label: L("Age range", "الفئة العمرية"),
            options: [
              { value: "0-5", label: "0–5" },
              { value: "6-12", label: "6–12" },
              { value: "13-18", label: "13–18" },
            ],
            match: (p, v) => {
              const [a, b] = v.split("-").map(Number);
              return p.age >= (a ?? 0) && p.age <= (b ?? 200);
            },
          },
        ]}
        bulkActions={[
          { id: "export", label: L("Export selected", "تصدير المحدد"), tone: "outline" },
          { id: "sms", label: L("Send SMS", "إرسال رسالة"), tone: "primary" },
          { id: "delete", label: L("Delete", "حذف"), tone: "danger" },
        ]}
        onBulkAction={(id, sel) => {
          setBulkSelection(sel.map((p) => p.file));
          if (id === "delete") setDelOpen(true);
          else
            toast.push(
              "success",
              id === "export"
                ? L(`${sel.length} patients exported`, `تم تصدير ${sel.length} مريض`)
                : L(`SMS queued for ${sel.length} guardians`, `تم جدولة رسالة لـ ${sel.length} ولي أمر`),
            );
        }}
        columns={[
          {
            id: "file",
            header: L("File no.", "رقم الملف"),
            sort: (p) => p.file,
            csv: (p) => p.file,
            cell: (p) => (
              <button onClick={onOpenProfile} className="font-mono text-xs text-primary underline-offset-4 hover:underline">
                {p.file}
              </button>
            ),
          },
          {
            id: "name",
            header: L("Name", "الاسم"),
            sort: (p) => p.name.en,
            csv: (p) => p.name.en,
            cell: (p) => (
              <button onClick={onOpenProfile} className="font-semibold hover:underline">
                {t(p.name)}
              </button>
            ),
          },
          {
            id: "age",
            header: L("Age / Gender", "العمر / الجنس"),
            sort: (p) => p.age,
            csv: (p) => `${p.age} ${p.gender.en}`,
            hideBelow: "md",
            cell: (p) => `${p.age} · ${t(p.gender)}`,
          },
          {
            id: "nat",
            header: L("Nationality", "الجنسية"),
            csv: (p) => p.nationality.en,
            hideBelow: "lg",
            cell: (p) => t(p.nationality),
          },
          {
            id: "dx",
            header: L("Diagnosis", "التشخيص"),
            sort: (p) => p.diagnosis.en,
            csv: (p) => p.diagnosis.en,
            cell: (p) => t(p.diagnosis),
          },
          {
            id: "spec",
            header: L("Specialty", "التخصص"),
            csv: (p) => spec(p.specialty).en,
            hideBelow: "md",
            cell: (p) => <Badge tone="primary">{t(spec(p.specialty))}</Badge>,
          },
          {
            id: "last",
            header: L("Last visit", "آخر زيارة"),
            sort: (p) => p.lastVisit,
            csv: (p) => p.lastVisit,
            hideBelow: "lg",
            cell: (p) => p.lastVisit,
          },
          {
            id: "status",
            header: L("Status", "الحالة"),
            sort: (p) => p.status.en,
            csv: (p) => p.status.en,
            cell: (p) => <Badge tone={statusTone(p.status.en)}>{t(p.status)}</Badge>,
          },
          {
            id: "pay",
            header: L("Payments", "المدفوعات"),
            csv: (p) => p.payments,
            hideBelow: "lg",
            cell: (p) => p.payments,
          },
          {
            id: "actions",
            header: L("Actions", "إجراءات"),
            align: "end",
            cell: (p) => {
              const index = collection.items.findIndex((r) => r.file === p.file);
              return (
                <span className="flex justify-end gap-1">
                  <Button size="sm" variant="outline" onClick={onOpenProfile}>
                    {t(L("Open", "فتح"))}
                  </Button>
                  <button
                    aria-label={t(L("Edit", "تعديل"))}
                    title={t(L("Edit", "تعديل"))}
                    onClick={() => openEdit(index)}
                    className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-tint-green hover:text-[var(--primary-deep)]"
                  >
                    <Pencil className="size-4" aria-hidden />
                  </button>
                  <button
                    aria-label={t(L("Delete", "حذف"))}
                    title={t(L("Delete", "حذف"))}
                    onClick={() => setRowDeleteIndex(index)}
                    className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="size-4" aria-hidden />
                  </button>
                </span>
              );
            },
          },
        ]}
        emptyTitle={L("No patients match", "لا يوجد مرضى مطابقون")}
        emptyDescription={L("Try clearing filters or register a new patient.", "امسح عوامل التصفية أو سجّل مريضاً جديداً.")}
        emptyAction={<Button onClick={() => setAddOpen(true)}>{t(L("Add patient", "إضافة مريض"))}</Button>}
      />
      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title={L("Add patient", "إضافة مريض")}
        subtitle={L("Personal, contact, medical, file and guardian information", "المعلومات الشخصية والاتصال والطبية والملف وولي الأمر")}
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setAddOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (!form.name.trim()) {
                  toast.push("error", L("Full name is required", "الاسم الكامل مطلوب"));
                  return;
                }
                collection.add(makePatient(form, collection.items.length));
                setAddOpen(false);
                toast.push("success", L("Patient added", "تمت إضافة المريض"));
              }}
            >
              {t(L("Save patient", "حفظ المريض"))}
            </Button>
          </>
        }
      >
        <PatientFormFields form={form} setForm={setForm} />
      </Modal>
      <Modal
        open={editIndex !== null}
        onClose={() => setEditIndex(null)}
        title={L("Edit patient", "تعديل المريض")}
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setEditIndex(null)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (editIndex === null) return;
                collection.update(editIndex, makePatient(form, editIndex));
                setEditIndex(null);
                toast.push("success", L("Patient updated", "تم تحديث بيانات المريض"));
              }}
            >
              {t(L("Save changes", "حفظ التغييرات"))}
            </Button>
          </>
        }
      >
        <PatientFormFields form={form} setForm={setForm} />
      </Modal>
      <Modal
        open={rowDeleteIndex !== null}
        onClose={() => setRowDeleteIndex(null)}
        title={L("Delete patient", "حذف المريض")}
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setRowDeleteIndex(null)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (rowDeleteIndex === null) return;
                collection.remove(rowDeleteIndex);
                setRowDeleteIndex(null);
                toast.push("success", L("Patient deleted", "تم حذف المريض"));
              }}
            >
              {t(L("Delete permanently", "حذف نهائي"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t(
            L(
              "This will permanently remove this patient file and all linked records.",
              "سيؤدي هذا إلى حذف ملف هذا المريض وكل السجلات المرتبطة نهائياً.",
            ),
          )}
        </p>
      </Modal>
      <Modal
        open={advOpen}
        onClose={() => setAdvOpen(false)}
        title={L("Advanced search", "بحث متقدم")}
        footer={
          <>
            <Button variant="outline" onClick={() => setAdvOpen(false)}>
              {t(L("Reset", "إعادة تعيين"))}
            </Button>
            <Button onClick={() => { setAdvOpen(false); toast.push("success", L("Apply filters — completed", "تطبيق — تم بنجاح")); }}>{t(L("Apply filters", "تطبيق"))}</Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Diagnosis contains", "التشخيص يحتوي")}>
            <Input />
          </Field>
          <Field label={L("Registered between", "مسجل بين")}>
            <Input type="date" />
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select options={SPECIALTIES} />
          </Field>
          <Field label={L("Outstanding balance", "رصيد مستحق")}>
            <Select options={[L("Any", "الكل"), L("With dues", "عليه مستحقات"), L("Settled", "مسدد")]} />
          </Field>
        </div>
      </Modal>
      <Modal
        open={delOpen}
        onClose={() => setDelOpen(false)}
        title={L("Delete selected patients", "حذف المرضى المحددين")}
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setDelOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                const indexes = collection.items
                  .map((p, i) => (bulkSelection.includes(p.file) ? i : -1))
                  .filter((i) => i >= 0);
                collection.removeMany(indexes);
                setBulkSelection([]);
                setDelOpen(false);
                toast.push("success", L("Delete permanently — completed", "حذف نهائي — تم بنجاح"));
              }}
            >
              {t(L("Delete permanently", "حذف نهائي"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t(
            L(
              "This will permanently remove the selected patient files and all linked records. This action is logged in the activity log.",
              "سيؤدي هذا إلى حذف ملفات المرضى المحددين وكل السجلات المرتبطة نهائياً. يُسجل هذا الإجراء في سجل النشاط.",
            ),
          )}
        </p>
      </Modal>
    </div>
  );
}

/* ---------------------------- 2. Patient Profile -------------------------- */
type SessionRow = { date: string; time: string; specialty: number; specialist: number; status: Loc; notes: Loc };
type DocRow = { name: Loc; type: Loc; date: string; size: string; by: Loc };
type PlanRow = { title: Loc; range: string; status: Loc };
type NoteRow = { text: Loc; date: string; by: Loc };
type InvoiceRow = (typeof invoices)[number];

export function PatientProfileModule() {
  const { t } = useI18n();
  const toast = useToast();
  const p = pat(0);
  const [apptOpen, setApptOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: t(p.name),
    age: p.age,
    gender: t(p.gender),
    diagnosis: t(p.diagnosis),
    mobile: "+966 55 214 8890",
    email: "guardian.sara@example.sa",
    guardian: t(L("Fatimah Al-Otaibi (Mother)", "فاطمة العتيبي (الأم)")),
  });
  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState(profile);

  const [statusFilter, setStatusFilter] = useState("all");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const apptStatuses = Array.from(new Set(appointments.map((a) => a.status.en)));
  const filteredAppointments = appointments.filter(
    (a) => (statusFilter === "all" || a.status.en === statusFilter) && (specialtyFilter === "all" || String(a.specialty) === specialtyFilter),
  );

  const sessions = useCollection<SessionRow>(
    appointments.map((a) => ({ date: "12 Jul 2026", time: a.time, specialty: a.specialty, specialist: a.specialist, status: a.status, notes: a.notes })),
  );
  const [sessionOpen, setSessionOpen] = useState(false);
  const [sessionForm, setSessionForm] = useState({ date: "", time: "", specialtyIdx: 0, specialistIdx: 0, notes: "" });
  const [notesViewIndex, setNotesViewIndex] = useState<number | null>(null);

  const docs = useCollection<DocRow>(documents.map((d) => ({ name: d.name, type: d.type, date: d.date, size: d.size, by: d.by })));
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTypeIdx, setUploadTypeIdx] = useState(0);
  const [docDeleteIndex, setDocDeleteIndex] = useState<number | null>(null);
  const docTypes = [L("Medical report", "تقرير طبي"), L("X-ray", "أشعة"), L("Assessment", "تقييم"), L("Other", "أخرى")];

  const plansList = useCollection<PlanRow>([
    { title: L("Speech plan cycle 1", "دورة خطة النطق ١"), range: "01 Jul 2025 – 01 Jan 2026", status: L("Completed", "مكتملة") },
    { title: L("Speech plan cycle 2", "دورة خطة النطق ٢"), range: "01 Jul 2025 – 01 Jan 2026", status: L("Completed", "مكتملة") },
  ]);
  const [planOpen, setPlanOpen] = useState(false);
  const [planForm, setPlanForm] = useState({ title: "", start: "", end: "" });

  const invoiceList = useCollection<InvoiceRow>(invoices);
  const [issueOpen, setIssueOpen] = useState(false);
  const [issueForm, setIssueForm] = useState({ date: "", total: "" });
  const [payOpen, setPayOpen] = useState(false);
  const [payForm, setPayForm] = useState({ invoiceIdx: 0, amount: "" });

  const notesList = useCollection<NoteRow>([
    { text: L("Improved /s/ production in initial position; continue drills at home.", "تحسن نطق حرف السين في بداية الكلمة، يستمر التدريب في المنزل."), date: "12 Jul 2026", by: doc(0) },
    { text: L("Improved /s/ production in initial position; continue drills at home.", "تحسن نطق حرف السين في بداية الكلمة، يستمر التدريب في المنزل."), date: "10 Jul 2026", by: doc(0) },
    { text: L("Improved /s/ production in initial position; continue drills at home.", "تحسن نطق حرف السين في بداية الكلمة، يستمر التدريب في المنزل."), date: "08 Jul 2026", by: doc(0) },
  ]);
  const [noteDraft, setNoteDraft] = useState("");

  const { tab, setTab, ids } = useTabs([
    { id: "overview", label: L("Overview", "نظرة عامة") },
    { id: "appointments", label: L("Appointments", "المواعيد") },
    { id: "assessments", label: L("Assessments", "التقييمات") },
    { id: "plans", label: L("Treatment plans", "الخطط العلاجية") },
    { id: "sessions", label: L("Sessions", "الجلسات") },
    { id: "invoices", label: L("Invoices", "الفواتير") },
    { id: "documents", label: L("Documents", "المستندات") },
    { id: "referrals", label: L("Referrals", "الإحالات") },
    { id: "notes", label: L("Notes", "الملاحظات") },
    { id: "activity", label: L("Activity log", "سجل النشاط") },
  ]);
  return (
    <div className="space-y-6">
      <Card className="bg-tint-green">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <div className="grid size-16 shrink-0 place-items-center rounded-3xl bg-surface text-xl font-bold text-primary shadow-[var(--shadow-card)]">
              {profile.name.slice(0, 1)}
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-bold sm:text-2xl">{profile.name}</h1>
              <p className="mt-1 truncate text-sm text-muted-foreground">
                {p.file} · {profile.age} · {profile.gender} · {profile.diagnosis}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge tone="primary">{t(spec(p.specialty))}</Badge>
                <Badge tone="success">{t(p.status)}</Badge>
                <Badge tone="info">{t(L("Registered 12 Jan 2026", "مسجل ١٢ يناير ٢٠٢٦"))}</Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() => {
                printView();
                toast.push("info", L("Preparing patient file for print", "تجهيز ملف المريض للطباعة"));
              }}
            >
              <Printer className="size-4" aria-hidden /> {t(L("Print file", "طباعة الملف"))}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setEditForm(profile);
                setEditOpen(true);
              }}
            >
              <Pencil className="size-4" aria-hidden /> {t(L("Edit", "تعديل"))}
            </Button>
            <Button onClick={() => setApptOpen(true)}>
              <Plus className="size-4" aria-hidden /> {t(L("Add appointment", "إضافة موعد"))}
            </Button>
          </div>
        </div>
        <div className="mt-5 border-t border-border pt-5">
          <KeyValue
            items={[
              { k: L("Mobile", "الجوال"), v: profile.mobile },
              { k: L("Email", "البريد الإلكتروني"), v: profile.email },
              { k: L("Guardian", "ولي الأمر"), v: profile.guardian },
              { k: L("Registration date", "تاريخ التسجيل"), v: "12 Jan 2026" },
            ]}
          />
        </div>
      </Card>
      <Tabs tabs={ids} value={tab} onChange={setTab} label="Patient profile sections" />
      <div key={tab} className="animate-in-soft space-y-4">
        {tab === "overview" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card tint="blue">
              <SectionTitle title={L("Appointments", "المواعيد")} />
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">{t(L("Last", "الأخير"))}</dt>
                  <dd className="font-medium">12 Jul 2026 · 08:30</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">{t(L("Current", "الحالي"))}</dt>
                  <dd className="font-medium">{t(L("In session", "في جلسة"))}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">{t(L("Next", "القادم"))}</dt>
                  <dd className="font-medium">19 Jul 2026 · 08:30</dd>
                </div>
              </dl>
            </Card>
            <Card tint="green">
              <SectionTitle title={L("Treatment progress", "تقدم العلاج")} />
              <p className="mt-4 text-3xl font-bold">68%</p>
              <div className="mt-3">
                <ProgressBar value={68} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t(L("24 of 36 sessions completed", "٢٤ من ٣٦ جلسة مكتملة"))}
              </p>
            </Card>
            <Card tint="yellow">
              <SectionTitle title={L("Financial dues", "المستحقات المالية")} />
              <p className="mt-4 text-3xl font-bold">0 SAR</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(L("Last assessment score", "درجة آخر تقييم"))}: 82
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(L("Total sessions", "إجمالي الجلسات"))}: 24
              </p>
            </Card>
            <Card className="lg:col-span-3">
              <SectionTitle title={L("Case summary", "ملخص الحالة")} />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(
                  L(
                    "7-year-old presenting with expressive speech delay. Responding well to articulation drills; guardian reports improved intelligibility at home. Plan continues twice weekly with quarterly reassessment.",
                    "طفلة عمرها ٧ سنوات لديها تأخر في النطق التعبيري. تستجيب جيداً لتمارين المخارج، ويفيد ولي الأمر بتحسن الوضوح في المنزل. تستمر الخطة بمعدل جلستين أسبوعياً مع إعادة تقييم ربع سنوية.",
                  ),
                )}
              </p>
            </Card>
          </div>
        )}
        {tab === "appointments" && (
          <>
            <Toolbar>
              <Select
                className="w-40"
                value={specialtyFilter === "all" ? t(L("All specialties", "كل التخصصات")) : t(SPECIALTIES[Number(specialtyFilter)]!)}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === t(L("All specialties", "كل التخصصات"))) setSpecialtyFilter("all");
                  else setSpecialtyFilter(String(SPECIALTIES.findIndex((s) => t(s) === v)));
                }}
                options={[L("All specialties", "كل التخصصات"), ...SPECIALTIES]}
              />
              <Select
                className="w-48"
                value={statusFilter === "all" ? t(L("All statuses", "كل الحالات")) : t(L(apptStatuses.find((s) => s === statusFilter) ?? "", ""))}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === t(L("All statuses", "كل الحالات"))) setStatusFilter("all");
                  else {
                    const match = appointments.find((a) => t(a.status) === v);
                    setStatusFilter(match ? match.status.en : "all");
                  }
                }}
                options={[L("All statuses", "كل الحالات"), ...appointments.map((a) => a.status).filter((s, i, arr) => arr.findIndex((x) => x.en === s.en) === i)]}
              />
              <Button className="ms-auto" onClick={() => setApptOpen(true)}>
                <Plus className="size-4" aria-hidden /> {t(L("New appointment", "موعد جديد"))}
              </Button>
            </Toolbar>
            <DataTable
              caption={L("Patient appointments", "مواعيد المريض")}
              columns={[
                L("Date", "التاريخ"),
                L("Specialty", "التخصص"),
                L("Specialist", "الأخصائي"),
                L("Status", "الحالة"),
                L("Notes", "ملاحظات"),
              ]}
              rows={filteredAppointments.map((a) => [
                `12 Jul 2026 · ${a.time}`,
                t(spec(a.specialty)),
                t(doc(a.specialist)),
                <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>,
                t(a.notes),
              ])}
            />
            {filteredAppointments.length === 0 && (
              <EmptyState
                icon={<Calendar className="size-5" aria-hidden />}
                title={L("No appointments match", "لا توجد مواعيد مطابقة")}
                description={L("Try clearing the filters above.", "امسح عوامل التصفية أعلاه.")}
              />
            )}
          </>
        )}
        {tab === "assessments" && (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <DataTable
                caption={L("Patient assessments", "تقييمات المريض")}
                columns={[
                  L("Name", "الاسم"),
                  L("Specialty", "التخصص"),
                  L("Date", "التاريخ"),
                  L("Score", "الدرجة"),
                  L("Specialist", "الأخصائي"),
                  L("Status", "الحالة"),
                  L("Actions", "إجراءات"),
                ]}
                rows={assessments.map((a) => [
                  t(L("Speech clarity scale", "مقياس وضوح النطق")),
                  t(spec(a.specialty)),
                  a.date,
                  a.score,
                  t(doc(a.specialist)),
                  <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>,
                  <RowActions items={[A.view, A.pdf]} />,
                ])}
              />
            </div>
            <ChartCard
              title={L("Assessment comparison over time", "مقارنة التقييمات عبر الزمن")}
              summary="Line chart showing assessment scores improving from 48 to 82 over four assessments."
            >
              <Line1
                data={[
                  { day: "Mar", visits: 48 },
                  { day: "Apr", visits: 61 },
                  { day: "May", visits: 70 },
                  { day: "Jul", visits: 82 },
                ]}
                x="day"
                y="visits"
              />
            </ChartCard>
          </div>
        )}
        {tab === "plans" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card tint="green">
              <SectionTitle
                title={L("Current active plan", "الخطة النشطة الحالية")}
                action={<Badge tone="success">{t(L("Active", "نشطة"))}</Badge>}
              />
              <div className="mt-4 space-y-4">
                <ProgressBar value={68} />
                {plan0.goals.map((g, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm">
                      <span className="min-w-0 truncate">{t(g.goal)}</span>
                      <span className="tabular-nums">{g.progress}%</span>
                    </div>
                    <div className="mt-1.5">
                      <ProgressBar value={g.progress} tone="wellness" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SectionTitle
                title={L("Previous plans", "الخطط السابقة")}
                action={
                  <Button size="sm" onClick={() => setPlanOpen(true)}>
                    <Plus className="size-4" aria-hidden /> {t(L("Add plan", "إضافة خطة"))}
                  </Button>
                }
              />
              <ul className="mt-4 space-y-3">
                {plansList.items.map((pl, i) => (
                  <li key={i} className="rounded-2xl border border-border p-4">
                    <p className="text-sm font-semibold">{t(pl.title)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pl.range} · {t(pl.status)}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}
        {tab === "sessions" && (
          <>
            <Toolbar>
              <SearchBar placeholder={L("Search sessions", "بحث في الجلسات")} />
              <Button onClick={() => setSessionOpen(true)}>
                <Plus className="size-4" aria-hidden /> {t(L("Add session", "إضافة جلسة"))}
              </Button>
            </Toolbar>
            <DataTable
              caption={L("Session log", "سجل الجلسات")}
              columns={[
                L("Date", "التاريخ"),
                L("Time", "الوقت"),
                L("Specialty", "التخصص"),
                L("Specialist", "الأخصائي"),
                L("Status", "الحالة"),
                L("Notes", "ملاحظات"),
              ]}
              rows={sessions.items.map((s, i) => [
                s.date,
                s.time,
                t(spec(s.specialty)),
                t(doc(s.specialist)),
                <Badge tone={statusTone(s.status.en)}>{t(s.status)}</Badge>,
                <button
                  onClick={() => setNotesViewIndex(i)}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {t(L("View session notes", "عرض ملاحظات الجلسة"))}
                </button>,
              ])}
            />
          </>
        )}
        {tab === "invoices" && (
          <>
            <Toolbar>
              <Button variant="outline" onClick={() => setIssueOpen(true)}>
                <Receipt className="size-4" aria-hidden /> {t(L("Issue invoice", "إصدار فاتورة"))}
              </Button>
              <Button onClick={() => setPayOpen(true)}>
                <Wallet className="size-4" aria-hidden /> {t(L("Make payment", "تسجيل دفعة"))}
              </Button>
            </Toolbar>
            <DataTable
              caption={L("Invoice history", "سجل الفواتير")}
              columns={[
                L("Number", "الرقم"),
                L("Date", "التاريخ"),
                L("Amount", "المبلغ"),
                L("Paid", "المدفوع"),
                L("Remaining", "المتبقي"),
                L("Status", "الحالة"),
              ]}
              rows={invoiceList.items.map((iv) => [
                <span className="font-mono text-xs">{iv.number}</span>,
                iv.date,
                <Money v={iv.total} />,
                <Money v={iv.paid} />,
                <Money v={iv.total - iv.paid} />,
                <Badge tone={statusTone(iv.status.en)}>{t(iv.status)}</Badge>,
              ])}
            />
          </>
        )}
        {tab === "documents" && (
          <>
            <Toolbar>
              <SearchBar placeholder={L("Search documents", "بحث في المستندات")} />
              <Button onClick={() => setUploadOpen(true)}>
                <Upload className="size-4" aria-hidden /> {t(L("Upload new", "رفع جديد"))}
              </Button>
            </Toolbar>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {docs.items.map((d, i) => (
                <Card key={i} interactive>
                  <div className="flex items-start gap-3">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-tint-blue text-info">
                      <FileText className="size-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{t(d.name)}</p>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        {t(d.type)} · {d.size} · {d.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast.push("success", L("Document downloaded", "تم تنزيل المستند"))}
                    >
                      <Download className="size-4" aria-hidden /> {t(L("Download", "تنزيل"))}
                    </Button>
                    <button
                      aria-label={t(L("Delete", "حذف"))}
                      title={t(L("Delete", "حذف"))}
                      onClick={() => setDocDeleteIndex(i)}
                      className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
            {docs.items.length === 0 && (
              <EmptyState
                icon={<FileText className="size-5" aria-hidden />}
                title={L("No documents yet", "لا توجد مستندات بعد")}
                description={L("Upload the first document for this patient.", "ارفع أول مستند لهذا المريض.")}
                action={<Button onClick={() => setUploadOpen(true)}>{t(L("Upload new", "رفع جديد"))}</Button>}
              />
            )}
          </>
        )}
        {tab === "referrals" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card>
              <SectionTitle title={L("Incoming referrals", "الإحالات الواردة")} />
              <ul className="mt-4 space-y-3 text-sm">
                <li className="rounded-2xl border border-border p-4">
                  <p className="font-semibold">{t(L("King Fahad Hospital", "مستشفى الملك فهد"))}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    02 Jun 2026 · {t(spec(2))} · <Badge tone="success">{t(L("Accepted", "مقبولة"))}</Badge>
                  </p>
                </li>
              </ul>
            </Card>
            <Card>
              <SectionTitle title={L("Outgoing transfers", "التحويلات الصادرة")} />
              <ul className="mt-4 space-y-3 text-sm">
                <li className="rounded-2xl border border-border p-4">
                  <p className="font-semibold">{t(L("Al Noor Audiology Center", "مركز النور للسمعيات"))}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    18 Jun 2026 · <Badge tone="info">{t(L("Sent", "مرسلة"))}</Badge>
                  </p>
                </li>
              </ul>
            </Card>
          </div>
        )}
        {tab === "notes" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[380px_minmax(0,1fr)]">
            <Card>
              <SectionTitle title={L("Add clinical note", "إضافة ملاحظة سريرية")} />
              <div className="mt-4 space-y-4">
                <Field label={L("Note", "الملاحظة")} required>
                  <Textarea
                    rows={5}
                    value={noteDraft}
                    onChange={(e) => setNoteDraft(e.target.value)}
                    placeholder={t(L("Write a clinical note…", "اكتب ملاحظة سريرية…"))}
                  />
                </Field>
                <Button
                  className="w-full"
                  onClick={() => {
                    if (!noteDraft.trim()) {
                      toast.push("error", L("Write a note before saving", "اكتب ملاحظة قبل الحفظ"));
                      return;
                    }
                    notesList.add({ text: L(noteDraft, noteDraft), date: "12 Jul 2026", by: doc(0) });
                    setNoteDraft("");
                    toast.push("success", L("Note saved", "تم حفظ الملاحظة"));
                  }}
                >
                  {t(L("Save note", "حفظ الملاحظة"))}
                </Button>
              </div>
            </Card>
            <Card>
              <SectionTitle title={L("Notes log", "سجل الملاحظات")} />
              <ol className="mt-4 space-y-4">
                {notesList.items.map((n, i) => (
                  <li key={i} className="border-s-2 border-primary/40 ps-4">
                    <p className="text-sm">{t(n.text)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {n.date} · {t(n.by)}
                    </p>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        )}
        {tab === "activity" && (
          <DataTable
            caption={L("Activity log", "سجل النشاط")}
            columns={[
              L("Date / time", "التاريخ / الوقت"),
              L("User", "المستخدم"),
              L("Action", "الإجراء"),
              L("Details", "التفاصيل"),
            ]}
            rows={[
              ["12 Jul 2026 · 08:41", t(doc(0)), t(L("Edit", "تعديل")), t(L("Updated treatment plan goals", "تحديث أهداف الخطة العلاجية"))],
              ["12 Jul 2026 · 08:32", t(L("Reem (Reception)", "ريم (الاستقبال)")), t(L("Add", "إضافة")), t(L("Checked in appointment", "تسجيل حضور الموعد"))],
              ["10 Jul 2026 · 15:02", t(L("Admin", "مدير النظام")), t(L("View", "عرض")), t(L("Opened patient file", "فتح ملف المريض"))],
            ]}
          />
        )}
      </div>
      <Modal
        open={apptOpen}
        onClose={() => setApptOpen(false)}
        title={L("Add appointment", "إضافة موعد")}
        footer={
          <>
            <Button variant="outline" onClick={() => setApptOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button onClick={() => { setApptOpen(false); toast.push("success", L("Save appointment — completed", "حفظ الموعد — تم بنجاح")); }}>{t(L("Save appointment", "حفظ الموعد"))}</Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Date", "التاريخ")} required>
            <Input type="date" />
          </Field>
          <Field label={L("Time", "الوقت")} required>
            <Input type="time" />
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select options={SPECIALTIES} />
          </Field>
          <Field label={L("Specialist", "الأخصائي")}>
            <Select options={SPECIALISTS} />
          </Field>
          <Field label={L("Type", "النوع")}>
            <Select
              options={[
                L("Individual session", "جلسة فردية"),
                L("Group session", "جلسة جماعية"),
                L("Treatment program", "برنامج علاجي"),
                L("Consultation", "استشارة"),
              ]}
            />
          </Field>
          <Field label={L("Send reminder", "إرسال تذكير")}>
            <Select options={[L("Yes — SMS + Email", "نعم — رسالة وبريد"), L("No", "لا")]} />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Notes", "ملاحظات")}>
              <Textarea />
            </Field>
          </div>
        </div>
      </Modal>
      <Modal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        title={L("Edit patient", "تعديل المريض")}
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (!editForm.name.trim()) {
                  toast.push("error", L("Full name is required", "الاسم الكامل مطلوب"));
                  return;
                }
                setProfile(editForm);
                setEditOpen(false);
                toast.push("success", L("Patient updated", "تم تحديث بيانات المريض"));
              }}
            >
              {t(L("Save changes", "حفظ التغييرات"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Full name", "الاسم الكامل")} required>
            <Input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
          </Field>
          <Field label={L("Age", "العمر")}>
            <Input
              type="number"
              value={editForm.age}
              onChange={(e) => setEditForm({ ...editForm, age: Number(e.target.value) || 0 })}
            />
          </Field>
          <Field label={L("Gender", "الجنس")}>
            <Input value={editForm.gender} onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })} />
          </Field>
          <Field label={L("Diagnosis", "التشخيص")}>
            <Input value={editForm.diagnosis} onChange={(e) => setEditForm({ ...editForm, diagnosis: e.target.value })} />
          </Field>
          <Field label={L("Mobile", "الجوال")}>
            <Input value={editForm.mobile} onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })} />
          </Field>
          <Field label={L("Email", "البريد الإلكتروني")}>
            <Input value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Guardian", "ولي الأمر")}>
              <Input value={editForm.guardian} onChange={(e) => setEditForm({ ...editForm, guardian: e.target.value })} />
            </Field>
          </div>
        </div>
      </Modal>
      <Modal
        open={sessionOpen}
        onClose={() => setSessionOpen(false)}
        title={L("Add session", "إضافة جلسة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setSessionOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (!sessionForm.date || !sessionForm.time) {
                  toast.push("error", L("Date and time are required", "التاريخ والوقت مطلوبان"));
                  return;
                }
                sessions.add({
                  date: sessionForm.date,
                  time: sessionForm.time,
                  specialty: sessionForm.specialtyIdx,
                  specialist: sessionForm.specialistIdx,
                  status: L("Confirmed", "مؤكد"),
                  notes: L(sessionForm.notes || "—", sessionForm.notes || "—"),
                });
                setSessionOpen(false);
                setSessionForm({ date: "", time: "", specialtyIdx: 0, specialistIdx: 0, notes: "" });
                toast.push("success", L("Session added", "تمت إضافة الجلسة"));
              }}
            >
              {t(L("Save session", "حفظ الجلسة"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Date", "التاريخ")} required>
            <Input type="date" value={sessionForm.date} onChange={(e) => setSessionForm({ ...sessionForm, date: e.target.value })} />
          </Field>
          <Field label={L("Time", "الوقت")} required>
            <Input type="time" value={sessionForm.time} onChange={(e) => setSessionForm({ ...sessionForm, time: e.target.value })} />
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select
              value={t(SPECIALTIES[sessionForm.specialtyIdx]!)}
              onChange={(e) => setSessionForm({ ...sessionForm, specialtyIdx: SPECIALTIES.findIndex((s) => t(s) === e.target.value) })}
              options={SPECIALTIES}
            />
          </Field>
          <Field label={L("Specialist", "الأخصائي")}>
            <Select
              value={t(SPECIALISTS[sessionForm.specialistIdx]!)}
              onChange={(e) => setSessionForm({ ...sessionForm, specialistIdx: SPECIALISTS.findIndex((s) => t(s) === e.target.value) })}
              options={SPECIALISTS}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Notes", "ملاحظات")}>
              <Textarea value={sessionForm.notes} onChange={(e) => setSessionForm({ ...sessionForm, notes: e.target.value })} />
            </Field>
          </div>
        </div>
      </Modal>
      <Modal
        open={notesViewIndex !== null}
        onClose={() => setNotesViewIndex(null)}
        title={L("Session notes", "ملاحظات الجلسة")}
        size="sm"
        footer={
          <Button onClick={() => setNotesViewIndex(null)}>{t(L("Close", "إغلاق"))}</Button>
        }
      >
        <p className="text-sm text-muted-foreground">
          {notesViewIndex !== null ? t(sessions.items[notesViewIndex]!.notes) : ""}
        </p>
      </Modal>
      <Modal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        title={L("Upload document", "رفع مستند")}
        footer={
          <>
            <Button variant="outline" onClick={() => setUploadOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (!uploadFile) {
                  toast.push("error", L("Choose a file to upload", "اختر ملفاً للرفع"));
                  return;
                }
                docs.add({
                  name: L(uploadFile.name, uploadFile.name),
                  type: docTypes[uploadTypeIdx]!,
                  date: "12 Jul 2026",
                  size: `${(uploadFile.size / (1024 * 1024)).toFixed(1)} MB`,
                  by: doc(0),
                });
                setUploadOpen(false);
                setUploadFile(null);
                setUploadTypeIdx(0);
                toast.push("success", L("Document uploaded", "تم رفع المستند"));
              }}
            >
              {t(L("Upload", "رفع"))}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Field label={L("File", "الملف")} required>
            <Input type="file" onChange={(e) => setUploadFile(e.target.files?.[0] ?? null)} />
          </Field>
          <Field label={L("Document type", "نوع المستند")}>
            <Select
              value={t(docTypes[uploadTypeIdx]!)}
              onChange={(e) => setUploadTypeIdx(docTypes.findIndex((d) => t(d) === e.target.value))}
              options={docTypes}
            />
          </Field>
        </div>
      </Modal>
      <Modal
        open={docDeleteIndex !== null}
        onClose={() => setDocDeleteIndex(null)}
        title={L("Delete document", "حذف المستند")}
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setDocDeleteIndex(null)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (docDeleteIndex === null) return;
                docs.remove(docDeleteIndex);
                setDocDeleteIndex(null);
                toast.push("success", L("Document deleted", "تم حذف المستند"));
              }}
            >
              {t(L("Delete permanently", "حذف نهائي"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t(L("This will permanently remove this document.", "سيؤدي هذا إلى حذف هذا المستند نهائياً."))}
        </p>
      </Modal>
      <Modal
        open={planOpen}
        onClose={() => setPlanOpen(false)}
        title={L("Add plan", "إضافة خطة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setPlanOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (!planForm.title.trim()) {
                  toast.push("error", L("Plan title is required", "عنوان الخطة مطلوب"));
                  return;
                }
                plansList.add({
                  title: L(planForm.title, planForm.title),
                  range: `${planForm.start || "—"} – ${planForm.end || "—"}`,
                  status: L("Active", "نشطة"),
                });
                setPlanOpen(false);
                setPlanForm({ title: "", start: "", end: "" });
                toast.push("success", L("Plan added", "تمت إضافة الخطة"));
              }}
            >
              {t(L("Save plan", "حفظ الخطة"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field label={L("Plan title", "عنوان الخطة")} required>
              <Input value={planForm.title} onChange={(e) => setPlanForm({ ...planForm, title: e.target.value })} />
            </Field>
          </div>
          <Field label={L("Start date", "تاريخ البدء")}>
            <Input type="date" value={planForm.start} onChange={(e) => setPlanForm({ ...planForm, start: e.target.value })} />
          </Field>
          <Field label={L("End date", "تاريخ الانتهاء")}>
            <Input type="date" value={planForm.end} onChange={(e) => setPlanForm({ ...planForm, end: e.target.value })} />
          </Field>
        </div>
      </Modal>
      <Modal
        open={issueOpen}
        onClose={() => setIssueOpen(false)}
        title={L("Issue invoice", "إصدار فاتورة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setIssueOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                const total = Number(issueForm.total);
                if (!issueForm.date || !total) {
                  toast.push("error", L("Date and amount are required", "التاريخ والمبلغ مطلوبان"));
                  return;
                }
                invoiceList.add({
                  number: `INV-2026-${(1000 + invoiceList.items.length).toString().padStart(4, "0")}`,
                  date: issueForm.date,
                  patient: 0,
                  total,
                  paid: 0,
                  method: L("Bank transfer", "تحويل بنكي"),
                  status: L("Unpaid", "غير مدفوعة"),
                });
                setIssueOpen(false);
                setIssueForm({ date: "", total: "" });
                toast.push("success", L("Invoice issued", "تم إصدار الفاتورة"));
              }}
            >
              {t(L("Issue invoice", "إصدار فاتورة"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Invoice date", "تاريخ الفاتورة")} required>
            <Input type="date" value={issueForm.date} onChange={(e) => setIssueForm({ ...issueForm, date: e.target.value })} />
          </Field>
          <Field label={L("Amount (SAR)", "المبلغ (ريال)")} required>
            <Input type="number" value={issueForm.total} onChange={(e) => setIssueForm({ ...issueForm, total: e.target.value })} />
          </Field>
        </div>
      </Modal>
      <Modal
        open={payOpen}
        onClose={() => setPayOpen(false)}
        title={L("Make payment", "تسجيل دفعة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setPayOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                const amount = Number(payForm.amount);
                const invoice = invoiceList.items[payForm.invoiceIdx];
                if (!amount || !invoice) {
                  toast.push("error", L("Choose an invoice and amount", "اختر فاتورة ومبلغاً"));
                  return;
                }
                const paid = Math.min(invoice.total, invoice.paid + amount);
                invoiceList.update(payForm.invoiceIdx, {
                  paid,
                  status: paid >= invoice.total ? L("Paid", "مدفوعة") : L("Partially paid", "مدفوعة جزئياً"),
                });
                setPayOpen(false);
                setPayForm({ invoiceIdx: 0, amount: "" });
                toast.push("success", L("Payment recorded", "تم تسجيل الدفعة"));
              }}
            >
              {t(L("Record payment", "تسجيل الدفعة"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field label={L("Invoice", "الفاتورة")} required>
              <Select
                value={invoiceList.items[payForm.invoiceIdx]?.number ?? ""}
                onChange={(e) => setPayForm({ ...payForm, invoiceIdx: invoiceList.items.findIndex((iv) => iv.number === e.target.value) })}
                options={invoiceList.items.map((iv) => L(iv.number, iv.number))}
              />
            </Field>
          </div>
          <Field label={L("Amount (SAR)", "المبلغ (ريال)")} required>
            <Input type="number" value={payForm.amount} onChange={(e) => setPayForm({ ...payForm, amount: e.target.value })} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}
