import { useMemo, useRef, useState } from "react";
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
import { DataGrid } from "@/components/rehlah/datagrid";
import { useToast } from "@/components/rehlah/toast";
import { statusTone, Money, RowActions, A } from "./admin-modules";
import { useCollection, matches, passes, downloadCsv, printView } from "@/lib/module-state";
import {
  SPECIALTIES,
  SPECIALISTS,
  spec,
  doc,
  pat,
  patients,
  invoices,
  payments,
  services,
  documents,
  revenueMonthly,
  specialtyDistribution,
  attendanceStatus,
  monthlyComparison,
} from "@/lib/rehlah-data";
import {
  Plus,
  Printer,
  Download,
  Upload,
  FileText,
  Inbox,
  Send,
  ShieldCheck,
  Signature,
  Receipt,
  Wallet,
  Users,
  Gauge,
  Database,
  Palette,
  History,
  Layers,
  Stethoscope,
  CircleDollarSign,
  Eye,
  Trash2,
  GripVertical,
  Type as TypeIcon,
  ListChecks,
  Calendar as CalendarIcon,
  Hash,
  ToggleLeft,
  PenLine,
  Paperclip,
  Filter,
  Copy,
  Search,
  Building2,
  XCircle,
  CheckCircle2,
} from "lucide-react";


function Switch({ label, defaultChecked }: { label: Loc; defaultChecked?: boolean }) {
  const { t } = useI18n();
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3">
      <span className="min-w-0 truncate text-sm">{t(label)}</span>
      <input type="checkbox" defaultChecked={defaultChecked} className="size-5 shrink-0 accent-[var(--primary)]" />
    </label>
  );
}

/* ------------------------------ 6. Form Builder --------------------------- */
type FBField = { label: string; type: string; required: boolean; help: string; validation: string };

const FIELD_TYPES: { label: Loc; icon: React.ReactNode }[] = [
  { label: L("Short text", "نص قصير"), icon: <TypeIcon className="size-4" aria-hidden /> },
  { label: L("Long text", "نص طويل"), icon: <TypeIcon className="size-4" aria-hidden /> },
  { label: L("Number / score", "رقم / درجة"), icon: <Hash className="size-4" aria-hidden /> },
  { label: L("Single choice", "اختيار واحد"), icon: <ListChecks className="size-4" aria-hidden /> },
  { label: L("Multiple choice", "اختيار متعدد"), icon: <ListChecks className="size-4" aria-hidden /> },
  { label: L("Yes / No", "نعم / لا"), icon: <ToggleLeft className="size-4" aria-hidden /> },
  { label: L("Date", "تاريخ"), icon: <CalendarIcon className="size-4" aria-hidden /> },
  { label: L("File upload", "رفع ملف"), icon: <Paperclip className="size-4" aria-hidden /> },
  { label: L("Signature", "توقيع"), icon: <PenLine className="size-4" aria-hidden /> },
];
type FBFormMeta = { name: string; specialty: string; status: "Draft" | "Published"; fields: number; responses: number };

export function FormBuilderModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("builder");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [formName, setFormName] = useState(t(L("Initial assessment form", "نموذج التقييم المبدئي")));
  const [fields, setFields] = useState<FBField[]>([
    { label: t(L("Patient main complaint", "الشكوى الرئيسية للمريض")), type: t(L("Long text", "نص طويل")), required: true, help: "", validation: t(L("None", "بدون")) },
    { label: t(L("Pain level (0-10)", "مستوى الألم (٠-١٠)")), type: t(L("Number / score", "رقم / درجة")), required: true, help: "", validation: t(L("None", "بدون")) },
    { label: t(L("Onset date", "تاريخ البدء")), type: t(L("Date", "تاريخ")), required: false, help: "", validation: t(L("None", "بدون")) },
    { label: t(L("Previous treatment?", "علاج سابق؟")), type: t(L("Yes / No", "نعم / لا")), required: false, help: "", validation: t(L("None", "بدون")) },
    { label: t(L("Guardian signature", "توقيع ولي الأمر")), type: t(L("Signature", "توقيع")), required: true, help: "", validation: t(L("None", "بدون")) },
  ]);
  const library = useCollection<FBFormMeta>(
    SPECIALTIES.concat(SPECIALTIES.slice(0, 1)).map((s, i) => ({
      name: t(L("Assessment form", "نموذج تقييم")),
      specialty: t(s),
      status: i % 2 ? "Draft" : "Published",
      fields: 14,
      responses: 32,
    })),
  );
  const [published, setPublished] = useState(false);
  const [responseSearch, setResponseSearch] = useState("");

  const patch = (i: number, patch: Partial<FBField>) =>
    setFields((p) => p.map((f, idx) => (idx === i ? { ...f, ...patch } : f)));

  const addField = (typeLabel: Loc) => {
    setFields((p) => {
      const next = [...p, { label: t(L("New field", "حقل جديد")), type: t(typeLabel), required: false, help: "", validation: t(L("None", "بدون")) }];
      setSelected(next.length - 1);
      return next;
    });
  };

  const deleteField = (i: number) => {
    setFields((p) => p.filter((_, idx) => idx !== i));
    setSelected((s) => Math.max(0, s - (s >= i ? 1 : 0)));
  };

  const publish = () => {
    setPublished(true);
    library.add({ name: formName, specialty: t(L("General", "عام")), status: "Published", fields: fields.length, responses: 0 });
    toast.push("success", L("Form published", "تم نشر النموذج"));
  };

  const responseRows = patients.slice(0, 6).map((p, i) => ({
    patient: t(p.name),
    form: t(L("Initial assessment", "التقييم المبدئي")),
    specialist: t(doc(i % 4)),
    date: "10 Jul 2026",
    status: i % 3 === 0 ? L("Pending review", "بانتظار المراجعة") : L("Completed", "مكتمل"),
  }));
  const filteredResponses = responseRows.filter((r) => matches(responseSearch, r.patient, r.form, r.specialist));

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Form Builder", "منشئ النماذج")}
        description={L("Design assessment forms without writing code", "صمم نماذج التقييم دون كتابة أي كود")}
        actions={
          <>
            <Button variant="outline" onClick={() => setPreviewOpen(true)}>
              <Eye className="size-4" aria-hidden /> {t(L("Preview", "معاينة"))}
            </Button>
            <Button onClick={publish}>
              {published ? t(L("Published", "منشور")) : t(L("Publish form", "نشر النموذج"))}
            </Button>
          </>
        }
      />
      <Tabs
        label="Form builder tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "builder", label: L("Builder", "المنشئ") },
          { id: "library", label: L("Form library", "مكتبة النماذج"), count: library.items.length },
          { id: "responses", label: L("Responses", "الردود"), count: responseRows.length },
          { id: "settings", label: L("Settings", "الإعدادات") },
        ]}
      />
      <div key={tab} className="animate-in-soft">
        {tab === "builder" && (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[220px_minmax(0,1fr)_300px]">
            <Card className="h-fit">
              <SectionTitle title={L("Field types", "أنواع الحقول")} />
              <ul className="mt-4 space-y-2">
                {FIELD_TYPES.map((f, i) => (
                  <li key={i}>
                    <button
                      onClick={() => addField(f.label)}
                      className="tap-target flex w-full items-center gap-2 rounded-xl border border-border px-3 text-start text-sm transition-colors hover:bg-tint-green"
                    >
                      {f.icon}
                      <span className="truncate">{t(f.label)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <SectionTitle
                title={formName}
                subtitle={L("Click a field type to add it, then edit its properties", "انقر على نوع حقل لإضافته، ثم عدّل خصائصه")}
              />
              <ul className="mt-4 space-y-3">
                {fields.map((f, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setSelected(i)}
                      className={[
                        "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-4 text-start transition-colors",
                        selected === i ? "border-primary bg-tint-green" : "border-border hover:bg-muted",
                      ].join(" ")}
                    >
                      <GripVertical className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{f.label}</span>
                        <span className="block truncate text-xs text-muted-foreground">{f.type}</span>
                      </span>
                      {f.required && <Badge tone="warning">{t(L("Required", "مطلوب"))}</Badge>}
                    </button>
                  </li>
                ))}
                {fields.length === 0 && (
                  <EmptyState title={L("No fields yet", "لا توجد حقول بعد")} description={L("Add a field from the palette on the left", "أضف حقلاً من اللوحة على اليسار")} />
                )}
              </ul>
            </Card>
            <Card className="h-fit">
              <SectionTitle title={L("Field properties", "خصائص الحقل")} />
              {fields[selected] ? (
                <div className="mt-4 space-y-4">
                  <Field label={L("Label", "التسمية")}>
                    <Input value={fields[selected]!.label} onChange={(e) => patch(selected, { label: e.target.value })} />
                  </Field>
                  <Field label={L("Help text", "نص المساعدة")}>
                    <Input value={fields[selected]!.help} onChange={(e) => patch(selected, { help: e.target.value })} />
                  </Field>
                  <Field label={L("Validation", "التحقق")}>
                    <Select
                      options={[L("None", "بدون"), L("Required", "مطلوب"), L("Range 0–10", "المدى ٠–١٠")]}
                      value={fields[selected]!.validation}
                      onChange={(e) => {
                        const opts = [t(L("None", "بدون")), t(L("Required", "مطلوب")), t(L("Range 0–10", "المدى ٠–١٠"))];
                        const v = opts[(e.target as HTMLSelectElement).selectedIndex] ?? opts[0]!;
                        patch(selected, { validation: v, required: v === opts[1] || fields[selected]!.required });
                      }}
                    />
                  </Field>
                  <Switch label={L("Show in patient portal", "إظهار في بوابة المريض")} defaultChecked />
                  <Switch label={L("Include in printed report", "تضمين في التقرير المطبوع")} />
                  <Button variant="danger" size="sm" onClick={() => deleteField(selected)}>
                    <Trash2 className="size-4" aria-hidden /> {t(L("Delete field", "حذف الحقل"))}
                  </Button>
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">{t(L("No field selected", "لم يتم اختيار حقل"))}</p>
              )}
            </Card>
          </div>
        )}
        {tab === "library" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {library.items.map((f, i) => (
              <Card key={i} interactive>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                  <p className="truncate font-semibold">{f.name}</p>
                  <Badge tone={f.status === "Draft" ? "neutral" : "success"}>
                    {t(f.status === "Draft" ? L("Draft", "مسودة") : L("Published", "منشور"))}
                  </Badge>
                </div>
                <p className="mt-1 truncate text-xs text-muted-foreground">{f.specialty}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {f.fields} {t(L("fields", "حقلاً"))} · {f.responses} {t(L("responses", "رداً"))}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex-1"
                    onClick={() => {
                      setFormName(f.name);
                      setTab("builder");
                      toast.push("info", L("Form opened", "تم فتح النموذج"));
                    }}
                  >
                    {t(L("Open", "فتح"))}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      library.add({ ...f, name: `${f.name} (${t(L("copy", "نسخة"))})`, status: "Draft" });
                      toast.push("success", L("Form duplicated", "تم نسخ النموذج"));
                    }}
                  >
                    <Copy className="size-4" aria-hidden /> {t(L("Duplicate", "نسخ"))}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
        {tab === "responses" && (
          <>
            <Toolbar>
              <SearchBar
                placeholder={L("Search responses", "بحث في الردود")}
                value={responseSearch}
                onChange={(e) => setResponseSearch(e.target.value)}
              />
              <Button
                variant="outline"
                onClick={() =>
                  downloadCsv(
                    "rehlah-form-responses",
                    ["Patient", "Form", "Specialist", "Submitted", "Status"],
                    filteredResponses.map((r) => [r.patient, r.form, r.specialist, r.date, t(r.status)]),
                  )
                }
              >
                <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
              </Button>
            </Toolbar>
            <DataTable
              caption={L("Form responses", "ردود النماذج")}
              columns={[
                L("Patient", "المريض"),
                L("Form", "النموذج"),
                L("Specialist", "الأخصائي"),
                L("Submitted", "تاريخ الإرسال"),
                L("Status", "الحالة"),
                L("Actions", "إجراءات"),
              ]}
              rows={filteredResponses.map((r) => [
                r.patient,
                r.form,
                r.specialist,
                r.date,
                <Badge tone={r.status === responseRows[0]!.status && r.status !== L("Completed", "مكتمل") ? "warning" : "success"}>
                  {t(r.status)}
                </Badge>,
                <RowActions items={[A.view, A.print, A.down]} />,
              ])}
            />
            <Pagination total={filteredResponses.length} />
          </>
        )}
        {tab === "settings" && (
          <Card className="max-w-2xl">
            <SectionTitle title={L("Form settings", "إعدادات النموذج")} />
            <div className="mt-4 space-y-4">
              <Field label={L("Form name", "اسم النموذج")}>
                <Input value={formName} onChange={(e) => setFormName(e.target.value)} />
              </Field>
              <Field label={L("Assign to specialty", "ربط بالتخصص")}>
                <Select options={SPECIALTIES} />
              </Field>
              <Switch label={L("Allow patient self-completion", "السماح للمريض بالتعبئة")} defaultChecked />
              <Switch label={L("Require specialist signature", "اشتراط توقيع الأخصائي")} defaultChecked />
              <Switch label={L("Auto-attach to patient file", "إرفاق تلقائي بملف المريض")} defaultChecked />
            </div>
          </Card>
        )}
      </div>
      <Modal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title={L("Form preview", "معاينة النموذج")}
        footer={<Button onClick={() => setPreviewOpen(false)}>{t(L("Close preview", "إغلاق المعاينة"))}</Button>}
      >
        <div className="space-y-4">
          {fields.map((f, i) => (
            <Field key={i} label={f.label} required={f.required}>
              {f.type === t(L("Signature", "توقيع")) ? (
                <div className="grid h-24 place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground">
                  {t(L("Sign here", "وقّع هنا"))}
                </div>
              ) : f.type === t(L("Long text", "نص طويل")) ? (
                <Textarea rows={3} />
              ) : f.type === t(L("Date", "تاريخ")) ? (
                <Input type="date" />
              ) : f.type === t(L("Number / score", "رقم / درجة")) ? (
                <Input type="number" />
              ) : (
                <Input />
              )}
            </Field>
          ))}
        </div>
      </Modal>
    </div>
  );
}

/* ------------------------------- 7. Referrals ----------------------------- */
type Referral = {
  patient: string;
  from: string;
  to: string;
  specialty: string;
  reason: string;
  date: string;
  priority: string;
  status: string;
  kind: "incoming" | "outgoing" | "internal";
  attachment: string;
};

function emptyReferralForm() {
  return { patient: "", type: "Internal", specialty: 0, specialist: 0, priority: 0, date: "", reason: "", attachment: "" };
}

export function ReferralsModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState<"incoming" | "outgoing" | "internal">("incoming");
  const [search, setSearch] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [newOpen, setNewOpen] = useState(false);
  const [detailIndex, setDetailIndex] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [form, setForm] = useState(emptyReferralForm());
  const fileRef = useRef<HTMLInputElement | null>(null);

  const collection = useCollection<Referral>(
    patients.slice(0, 9).map((p, i) => ({
      patient: t(p.name),
      from: i % 3 === 0 ? t(L("Al-Noor Medical Center", "مركز النور الطبي")) : t(doc(i % 4)),
      to: i % 3 === 0 ? t(doc(i % 4)) : t(L("King Fahad Hospital", "مستشفى الملك فهد")),
      specialty: t(spec(i % SPECIALTIES.length)),
      reason: t(L("Speech assessment", "تقييم النطق")),
      date: "08 Jul 2026",
      priority: t(i % 3 === 0 ? L("Urgent", "عاجلة") : i % 3 === 1 ? L("High", "مرتفعة") : L("Routine", "روتينية")),
      status: t(i % 2 ? L("Accepted", "مقبولة") : L("Pending", "قيد الانتظار")),
      kind: i % 3 === 0 ? "internal" : i % 2 === 0 ? "outgoing" : "incoming",
      attachment: "",
    })),
  );

  const withIndex = collection.items.map((r, i) => ({ r, i }));
  const filtered = withIndex.filter(
    ({ r }) =>
      r.kind === tab &&
      matches(search, r.patient, r.from, r.to, r.reason) &&
      passes(specialtyFilter, r.specialty) &&
      passes(statusFilter, r.status),
  );

  const specialtyOptions = ["all", ...SPECIALTIES.map((s) => t(s))];
  const statusOptions = ["all", t(L("Pending", "قيد الانتظار")), t(L("Accepted", "مقبولة")), t(L("Rejected", "مرفوضة"))];

  const openEdit = (i: number) => {
    const r = collection.items[i]!;
    setForm({
      patient: r.patient,
      type: r.kind === "internal" ? "Internal" : "External",
      specialty: Math.max(0, SPECIALTIES.findIndex((s) => t(s) === r.specialty)),
      specialist: 0,
      priority: Math.max(0, [t(L("Routine", "روتينية")), t(L("High", "مرتفعة")), t(L("Urgent", "عاجلة"))].indexOf(r.priority)),
      date: "",
      reason: r.reason,
      attachment: r.attachment,
    });
    setEditIndex(i);
    setNewOpen(true);
  };

  const submit = () => {
    if (!form.patient.trim() || !form.reason.trim()) {
      toast.push("error", L("Patient and reason are required", "المريض والسبب مطلوبان"));
      return;
    }
    const priorityLabels = [L("Routine", "روتينية"), L("High", "مرتفعة"), L("Urgent", "عاجلة")];
    const payload: Referral = {
      patient: form.patient,
      from: t(L("Rehlah Center", "مركز رحلة")),
      to: t(SPECIALISTS[form.specialist] ?? SPECIALISTS[0]!),
      specialty: t(SPECIALTIES[form.specialty] ?? SPECIALTIES[0]!),
      reason: form.reason,
      date: form.date || "—",
      priority: t(priorityLabels[form.priority] ?? priorityLabels[0]!),
      status: t(L("Pending", "قيد الانتظار")),
      kind: form.type === "Internal" ? "internal" : "outgoing",
      attachment: form.attachment,
    };
    if (editIndex !== null) {
      collection.update(editIndex, payload);
      toast.push("success", L("Referral updated", "تم تحديث الإحالة"));
    } else {
      collection.add(payload);
      toast.push("success", L("Referral sent", "تم إرسال الإحالة"));
    }
    setNewOpen(false);
    setEditIndex(null);
    setForm(emptyReferralForm());
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Referrals", "الإحالات")}
        description={L("Internal and external patient referrals", "الإحالات الداخلية والخارجية للمرضى")}
        actions={
          <>
            <Button
              variant="outline"
              onClick={() =>
                downloadCsv(
                  "rehlah-referrals",
                  ["Patient", "From", "To", "Specialty", "Reason", "Date", "Priority", "Status"],
                  filtered.map(({ r }) => [r.patient, r.from, r.to, r.specialty, r.reason, r.date, r.priority, r.status]),
                )
              }
            >
              <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
            </Button>
            <Button
              onClick={() => {
                setForm(emptyReferralForm());
                setEditIndex(null);
                setNewOpen(true);
              }}
            >
              <Plus className="size-4" aria-hidden /> {t(L("New referral", "إحالة جديدة"))}
            </Button>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Incoming", "واردة")} value={String(collection.items.filter((r) => r.kind === "incoming").length)} tint="blue" icon={<Inbox className="size-5" aria-hidden />} />
        <StatCard label={L("Outgoing", "صادرة")} value={String(collection.items.filter((r) => r.kind === "outgoing").length)} tint="purple" icon={<Send className="size-5" aria-hidden />} />
        <StatCard label={L("Accepted", "مقبولة")} value={String(collection.items.filter((r) => r.status === t(L("Accepted", "مقبولة"))).length)} tint="green" icon={<ShieldCheck className="size-5" aria-hidden />} />
        <StatCard label={L("Awaiting response", "بانتظار الرد")} value={String(collection.items.filter((r) => r.status === t(L("Pending", "قيد الانتظار"))).length)} tint="yellow" icon={<History className="size-5" aria-hidden />} />
      </div>
      <Toolbar>
        <SearchBar placeholder={L("Search referrals", "بحث في الإحالات")} value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select
          className="w-40"
          options={[L("All specialties", "كل التخصصات"), ...SPECIALTIES]}
          onChange={(e) => setSpecialtyFilter(specialtyOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")}
        />
        <Select
          className="w-36"
          options={[L("All statuses", "كل الحالات"), L("Pending", "قيد الانتظار"), L("Accepted", "مقبولة"), L("Rejected", "مرفوضة")]}
          onChange={(e) => setStatusFilter(statusOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")}
        />
      </Toolbar>
      <Tabs
        label="Referral tabs"
        value={tab}
        onChange={(id) => setTab(id as typeof tab)}
        tabs={[
          { id: "incoming", label: L("Incoming", "الواردة"), count: collection.items.filter((r) => r.kind === "incoming").length },
          { id: "outgoing", label: L("Outgoing", "الصادرة"), count: collection.items.filter((r) => r.kind === "outgoing").length },
          { id: "internal", label: L("Internal", "الداخلية"), count: collection.items.filter((r) => r.kind === "internal").length },
        ]}
      />
      <div key={tab} className="animate-in-soft space-y-4">
        {filtered.length === 0 ? (
          <EmptyState title={L("No referrals found", "لا توجد إحالات")} description={L("Try adjusting your filters", "حاول تعديل عوامل التصفية")} />
        ) : (
          <DataTable
            caption={L("Referrals", "الإحالات")}
            columns={[
              L("Patient", "المريض"),
              L("From", "من"),
              L("To", "إلى"),
              L("Reason", "السبب"),
              L("Date", "التاريخ"),
              L("Priority", "الأولوية"),
              L("Status", "الحالة"),
              L("Actions", "إجراءات"),
            ]}
            rows={filtered.map(({ r, i }) => [
              r.patient,
              r.from,
              r.to,
              r.reason,
              r.date,
              <Badge tone={r.priority === t(L("Urgent", "عاجلة")) ? "danger" : r.priority === t(L("High", "مرتفعة")) ? "warning" : "neutral"}>{r.priority}</Badge>,
              <Badge tone={statusTone(r.status === t(L("Accepted", "مقبولة")) ? "Accepted" : r.status === t(L("Rejected", "مرفوضة")) ? "Cancelled" : "Pending")}>{r.status}</Badge>,
              <RowActions
                items={[
                  { ...A.view, onClick: () => setDetailIndex(i) } as any,
                  { ...A.edit, onClick: () => openEdit(i) } as any,
                  { ...A.del, onClick: () => setDeleteIndex(i) } as any,
                ]}
              />,
            ])}
          />
        )}
        <Pagination total={filtered.length} />
      </div>
      <Modal
        open={newOpen}
        onClose={() => { setNewOpen(false); setEditIndex(null); }}
        title={editIndex !== null ? L("Edit referral", "تعديل الإحالة") : L("New referral", "إحالة جديدة")}
        footer={
          <>
            <Button variant="outline" onClick={() => { setNewOpen(false); setEditIndex(null); }}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={submit}>{editIndex !== null ? t(L("Save changes", "حفظ التغييرات")) : t(L("Send referral", "إرسال الإحالة"))}</Button>
          </>
        }
      >
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          aria-hidden
          tabIndex={-1}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setForm((p) => ({ ...p, attachment: file.name }));
          }}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Patient", "المريض")} required>
            <Input
              placeholder={t(L("Search patient…", "ابحث عن مريض…"))}
              value={form.patient}
              onChange={(e) => setForm((p) => ({ ...p, patient: e.target.value }))}
            />
          </Field>
          <Field label={L("Referral type", "نوع الإحالة")}>
            <Select
              options={[L("Internal", "داخلية"), L("External", "خارجية")]}
              value={form.type}
              onChange={(e) => setForm((p) => ({ ...p, type: (e.target as HTMLSelectElement).selectedIndex === 0 ? "Internal" : "External" }))}
            />
          </Field>
          <Field label={L("Refer to specialty", "إحالة إلى تخصص")}>
            <Select options={SPECIALTIES} onChange={(e) => setForm((p) => ({ ...p, specialty: (e.target as HTMLSelectElement).selectedIndex }))} />
          </Field>
          <Field label={L("Specialist / facility", "الأخصائي / المنشأة")}>
            <Select options={SPECIALISTS} onChange={(e) => setForm((p) => ({ ...p, specialist: (e.target as HTMLSelectElement).selectedIndex }))} />
          </Field>
          <Field label={L("Priority", "الأولوية")}>
            <Select
              options={[L("Routine", "روتينية"), L("High", "مرتفعة"), L("Urgent", "عاجلة")]}
              onChange={(e) => setForm((p) => ({ ...p, priority: (e.target as HTMLSelectElement).selectedIndex }))}
            />
          </Field>
          <Field label={L("Preferred date", "التاريخ المفضل")}>
            <Input type="date" value={form.date} onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))} />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Clinical reason", "السبب السريري")} required>
              <Textarea value={form.reason} onChange={(e) => setForm((p) => ({ ...p, reason: e.target.value }))} />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label={L("Attachments", "المرفقات")}>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="grid h-24 w-full place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground hover:bg-muted"
              >
                <span className="flex items-center gap-2">
                  <Upload className="size-4" aria-hidden /> {form.attachment || t(L("Attach reports or images", "أرفق تقارير أو صوراً"))}
                </span>
              </button>
            </Field>
          </div>
        </div>
      </Modal>
      <Modal
        open={detailIndex !== null}
        onClose={() => setDetailIndex(null)}
        title={L("Referral details", "تفاصيل الإحالة")}
        footer={
          detailIndex !== null ? (
            <>
              <Button
                variant="danger"
                onClick={() => {
                  collection.update(detailIndex, { status: t(L("Rejected", "مرفوضة")) });
                  toast.push("success", L("Referral rejected", "تم رفض الإحالة"));
                  setDetailIndex(null);
                }}
              >
                {t(L("Reject", "رفض"))}
              </Button>
              <Button
                onClick={() => {
                  collection.update(detailIndex, { status: t(L("Accepted", "مقبولة")) });
                  toast.push("success", L("Referral accepted", "تم قبول الإحالة"));
                  setDetailIndex(null);
                }}
              >
                {t(L("Accept & schedule", "قبول وجدولة"))}
              </Button>
            </>
          ) : null
        }
      >
        {detailIndex !== null && (
          <KeyValue
            items={[
              { k: L("Patient", "المريض"), v: collection.items[detailIndex]!.patient },
              { k: L("Referring party", "الجهة المحيلة"), v: collection.items[detailIndex]!.from },
              { k: L("Specialty", "التخصص"), v: collection.items[detailIndex]!.specialty },
              { k: L("Priority", "الأولوية"), v: <Badge tone="danger">{collection.items[detailIndex]!.priority}</Badge> },
              { k: L("Reason", "السبب"), v: collection.items[detailIndex]!.reason },
            ]}
          />
        )}
      </Modal>
      <Modal
        open={deleteIndex !== null}
        onClose={() => setDeleteIndex(null)}
        size="sm"
        title={L("Delete referral", "حذف الإحالة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setDeleteIndex(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                if (deleteIndex === null) return;
                collection.remove(deleteIndex);
                setDeleteIndex(null);
                toast.push("success", L("Referral deleted", "تم حذف الإحالة"));
              }}
            >
              {t(L("Delete permanently", "حذف نهائي"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t(L("This will permanently remove this referral.", "سيؤدي هذا إلى حذف هذه الإحالة نهائياً."))}
        </p>
      </Modal>
    </div>
  );
}

/* ------------------------------- 8. Documents ----------------------------- */
type Doc = { name: string; type: string; patient: string; date: string; size: string; by: string };
type Transfer = { doc: string; facility: string; date: string; notes: string };

export function DocumentsModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState<"documents" | "transfers">("documents");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [patientFilter, setPatientFilter] = useState("all");
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [transferIndex, setTransferIndex] = useState<number | null>(null);
  const [uploadPatient, setUploadPatient] = useState(0);
  const [uploadCategory, setUploadCategory] = useState(0);
  const [uploadDesc, setUploadDesc] = useState("");
  const [uploadFileName, setUploadFileName] = useState("");
  const [transferFacility, setTransferFacility] = useState("");
  const [transferNotes, setTransferNotes] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  const collection = useCollection<Doc>(
    documents.map((d) => ({ name: t(d.name), type: t(d.type), patient: t(pat(d.patient).name), date: d.date, size: d.size, by: t(d.by) })),
  );
  const transfers = useCollection<Transfer>([]);

  const categoryOptions = ["all", t(L("Medical reports", "تقارير طبية")), t(L("Assessments", "تقييمات")), t(L("Consents", "موافقات")), t(L("Invoices", "فواتير")), t(L("Identity", "هوية"))];
  const patientOptions = ["all", ...patients.slice(0, 4).map((p) => t(p.name))];

  const filtered = collection.items
    .map((d, i) => ({ d, i }))
    .filter(({ d }) => matches(search, d.name, d.patient) && passes(categoryFilter, d.type) && passes(patientFilter, d.patient));

  return (
    <div className="space-y-6">
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        aria-hidden
        tabIndex={-1}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setUploadFileName(file.name);
        }}
      />
      <PageHeader
        title={L("Documents", "المستندات")}
        description={L("Central archive for patient and clinic files", "أرشيف مركزي لملفات المرضى والمركز")}
        actions={
          <>
            <Button
              variant="outline"
              onClick={() =>
                downloadCsv(
                  "rehlah-documents",
                  ["Name", "Patient", "Category", "Uploaded by", "Date", "Size"],
                  filtered.map(({ d }) => [d.name, d.patient, d.type, d.by, d.date, d.size]),
                )
              }
            >
              <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
            </Button>
            <Button onClick={() => { setUploadFileName(""); setUploadDesc(""); setUploadOpen(true); }}>
              <Upload className="size-4" aria-hidden /> {t(L("Upload document", "رفع مستند"))}
            </Button>
          </>
        }
      />
      <Tabs
        label="Document tabs"
        value={tab}
        onChange={(id) => setTab(id as typeof tab)}
        tabs={[
          { id: "documents", label: L("Documents", "المستندات"), count: collection.items.length },
          { id: "transfers", label: L("Transfers", "التحويلات"), count: transfers.items.length },
        ]}
      />
      {tab === "documents" ? (
        <>
          <Toolbar>
            <SearchBar placeholder={L("Search documents", "بحث في المستندات")} value={search} onChange={(e) => setSearch(e.target.value)} />
            <Select
              className="w-44"
              options={[
                L("All categories", "كل الفئات"),
                L("Medical reports", "تقارير طبية"),
                L("Assessments", "تقييمات"),
                L("Consents", "موافقات"),
                L("Invoices", "فواتير"),
                L("Identity", "هوية"),
              ]}
              onChange={(e) => setCategoryFilter(categoryOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")}
            />
            <Select
              className="w-40"
              options={[L("All patients", "كل المرضى"), ...patients.slice(0, 4).map((p) => p.name)]}
              onChange={(e) => setPatientFilter(patientOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")}
            />
            <Input type="date" className="w-40" aria-label={t(L("From date", "من تاريخ"))} />
            <Button variant="outline" onClick={() => setView(view === "grid" ? "list" : "grid")}>
              {t(view === "grid" ? L("List view", "عرض القائمة") : L("Grid view", "عرض الشبكة"))}
            </Button>
          </Toolbar>
          {filtered.length === 0 ? (
            <EmptyState title={L("No documents found", "لا توجد مستندات")} description={L("Try adjusting your filters", "حاول تعديل عوامل التصفية")} />
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map(({ d, i }) => (
                <Card key={i} interactive>
                  <div className="grid size-11 place-items-center rounded-2xl bg-tint-blue">
                    <FileText className="size-5 text-[var(--info-deep)]" aria-hidden />
                  </div>
                  <p className="mt-3 truncate font-semibold">{d.name}</p>
                  <p className="mt-1 truncate text-xs text-muted-foreground">{d.patient}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge tone="neutral">{d.type}</Badge>
                    <span className="text-xs text-muted-foreground">{d.size}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary" className="flex-1" onClick={() => setPreviewIndex(i)}>{t(L("Preview", "معاينة"))}</Button>
                    <Button size="sm" variant="outline" aria-label={t(L("Download", "تنزيل"))} onClick={() => toast.push("success", L("Download — completed", "تنزيل — تم بنجاح"))}>
                      <Download className="size-4" aria-hidden />
                    </Button>
                    <Button size="sm" variant="outline" aria-label={t(L("Transfer", "تحويل"))} onClick={() => setTransferIndex(i)}>
                      <Building2 className="size-4" aria-hidden />
                    </Button>
                    <Button size="sm" variant="outline" aria-label={t(L("Delete", "حذف"))} onClick={() => setDeleteIndex(i)}>
                      <Trash2 className="size-4" aria-hidden />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <DataTable
              caption={L("Documents", "المستندات")}
              columns={[
                L("Name", "الاسم"),
                L("Patient", "المريض"),
                L("Category", "الفئة"),
                L("Uploaded by", "رفع بواسطة"),
                L("Date", "التاريخ"),
                L("Size", "الحجم"),
                L("Actions", "إجراءات"),
              ]}
              rows={filtered.map(({ d, i }) => [
                d.name,
                d.patient,
                <Badge tone="neutral">{d.type}</Badge>,
                d.by,
                d.date,
                d.size,
                <RowActions
                  items={[
                    { ...A.view, onClick: () => setPreviewIndex(i) } as any,
                    { ...A.down, onClick: () => toast.push("success", L("Download — completed", "تنزيل — تم بنجاح")) } as any,
                    { ...A.del, onClick: () => setDeleteIndex(i) } as any,
                  ]}
                />,
              ])}
            />
          )}
        </>
      ) : (
        <>
          {transfers.items.length === 0 ? (
            <EmptyState title={L("No transfers yet", "لا توجد تحويلات بعد")} description={L("Transfer a document to a facility to see it here", "قم بتحويل مستند إلى منشأة ليظهر هنا")} />
          ) : (
            <DataTable
              caption={L("Transfers", "التحويلات")}
              columns={[L("Document", "المستند"), L("Facility", "المنشأة"), L("Date", "التاريخ"), L("Notes", "ملاحظات")]}
              rows={transfers.items.map((tr) => [tr.doc, tr.facility, tr.date, tr.notes])}
            />
          )}
        </>
      )}
      <Modal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        title={L("Upload document", "رفع مستند")}
        footer={
          <>
            <Button variant="outline" onClick={() => setUploadOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              onClick={() => {
                collection.add({
                  name: uploadFileName || t(L("Untitled document", "مستند بدون عنوان")),
                  type: t([L("Medical reports", "تقارير طبية"), L("Assessments", "تقييمات"), L("Consents", "موافقات")][uploadCategory] ?? L("Medical reports", "تقارير طبية")),
                  patient: t(patients[uploadPatient]?.name ?? patients[0]!.name),
                  date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
                  size: "—",
                  by: t(L("You", "أنت")),
                });
                setUploadOpen(false);
                toast.push("success", L("Document uploaded", "تم رفع المستند"));
              }}
            >
              {t(L("Upload", "رفع"))}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="grid h-36 w-full place-items-center rounded-3xl border border-dashed border-border bg-muted/40 text-center"
          >
            <div>
              <Upload className="mx-auto size-6 text-muted-foreground" aria-hidden />
              <p className="mt-2 text-sm font-medium">{uploadFileName || t(L("Drag & drop files here", "اسحب الملفات وأفلتها هنا"))}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {t(L("PDF, JPG, PNG, DOCX up to 20 MB", "PDF، JPG، PNG، DOCX حتى ٢٠ ميجابايت"))}
              </p>
            </div>
          </button>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label={L("Patient", "المريض")}>
              <Select options={patients.slice(0, 5).map((p) => p.name)} onChange={(e) => setUploadPatient((e.target as HTMLSelectElement).selectedIndex)} />
            </Field>
            <Field label={L("Category", "الفئة")}>
              <Select
                options={[L("Medical reports", "تقارير طبية"), L("Assessments", "تقييمات"), L("Consents", "موافقات")]}
                onChange={(e) => setUploadCategory((e.target as HTMLSelectElement).selectedIndex)}
              />
            </Field>
          </div>
          <Field label={L("Description", "الوصف")}>
            <Textarea rows={2} value={uploadDesc} onChange={(e) => setUploadDesc(e.target.value)} />
          </Field>
        </div>
      </Modal>
      <Modal
        open={previewIndex !== null}
        onClose={() => setPreviewIndex(null)}
        title={L("Document preview", "معاينة المستند")}
        footer={<Button onClick={() => setPreviewIndex(null)}>{t(L("Close", "إغلاق"))}</Button>}
      >
        {previewIndex !== null && (
          <KeyValue
            items={[
              { k: L("Name", "الاسم"), v: collection.items[previewIndex]!.name },
              { k: L("Patient", "المريض"), v: collection.items[previewIndex]!.patient },
              { k: L("Category", "الفئة"), v: collection.items[previewIndex]!.type },
              { k: L("Uploaded by", "رفع بواسطة"), v: collection.items[previewIndex]!.by },
              { k: L("Date", "التاريخ"), v: collection.items[previewIndex]!.date },
              { k: L("Size", "الحجم"), v: collection.items[previewIndex]!.size },
            ]}
          />
        )}
      </Modal>
      <Modal
        open={deleteIndex !== null}
        onClose={() => setDeleteIndex(null)}
        size="sm"
        title={L("Delete document", "حذف المستند")}
        footer={
          <>
            <Button variant="outline" onClick={() => setDeleteIndex(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                if (deleteIndex === null) return;
                collection.remove(deleteIndex);
                setDeleteIndex(null);
                toast.push("success", L("Document deleted", "تم حذف المستند"));
              }}
            >
              {t(L("Delete permanently", "حذف نهائي"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">{t(L("This will permanently remove this document.", "سيؤدي هذا إلى حذف هذا المستند نهائياً."))}</p>
      </Modal>
      <Modal
        open={transferIndex !== null}
        onClose={() => setTransferIndex(null)}
        title={L("Transfer to facility", "تحويل إلى منشأة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setTransferIndex(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              onClick={() => {
                if (transferIndex === null || !transferFacility.trim()) {
                  toast.push("error", L("Facility name is required", "اسم المنشأة مطلوب"));
                  return;
                }
                transfers.add({
                  doc: collection.items[transferIndex]!.name,
                  facility: transferFacility,
                  date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
                  notes: transferNotes,
                });
                setTransferIndex(null);
                setTransferFacility("");
                setTransferNotes("");
                toast.push("success", L("Document transferred", "تم تحويل المستند"));
              }}
            >
              <Building2 className="size-4" aria-hidden /> {t(L("Transfer", "تحويل"))}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Field label={L("Target facility", "المنشأة المستهدفة")} required>
            <Input value={transferFacility} onChange={(e) => setTransferFacility(e.target.value)} placeholder={t(L("e.g. King Fahad Hospital", "مثال: مستشفى الملك فهد"))} />
          </Field>
          <Field label={L("Notes", "ملاحظات")}>
            <Textarea rows={3} value={transferNotes} onChange={(e) => setTransferNotes(e.target.value)} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}

/* -------------------------------- 9. Consents ----------------------------- */
type Consent = { patient: string; type: string; signedBy: string; date: string; expiry: string; status: "Signed" | "Awaiting signature" | "Void" };

export function ConsentsModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("signed");
  const [signOpen, setSignOpen] = useState(false);
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [voidIndex, setVoidIndex] = useState<number | null>(null);
  const [templateEditOpen, setTemplateEditOpen] = useState(false);
  const [templateIndex, setTemplateIndex] = useState<number | null>(null);
  const [signName, setSignName] = useState("");
  const [templates, setTemplates] = useState(
    [
      L("Treatment consent", "الموافقة على العلاج"),
      L("Photography consent", "الموافقة على التصوير"),
      L("Data sharing consent", "الموافقة على مشاركة البيانات"),
      L("Minor guardian consent", "موافقة ولي أمر القاصر"),
      L("Telehealth consent", "موافقة الرعاية عن بُعد"),
      L("Research participation", "المشاركة البحثية"),
    ].map((c) => t(c)),
  );
  const [templateDraft, setTemplateDraft] = useState("");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const collection = useCollection<Consent>(
    patients.slice(0, 8).map((p, i) => ({
      patient: t(p.name),
      type: t(L("Treatment consent", "الموافقة على العلاج")),
      signedBy: t(L("Guardian", "ولي الأمر")),
      date: i % 4 === 3 ? "—" : "02 Jul 2026",
      expiry: "02 Jul 2027",
      status: i % 4 === 3 ? "Awaiting signature" : "Signed",
    })),
  );

  const typeOptions = ["all", ...templates];
  const statusOptions = ["all", t(L("Signed", "موقعة")), t(L("Awaiting signature", "بانتظار التوقيع")), t(L("Void", "ملغاة"))];

  const rows = collection.items
    .map((c, i) => ({ c, i }))
    .filter(({ c }) => c.status !== "Void" === (tab !== "templates"))
    .filter(({ c }) => (tab === "signed" ? c.status === "Signed" : tab === "pending" ? c.status === "Awaiting signature" : true))
    .filter(({ c }) => matches(search, c.patient, c.type))
    .filter(({ c }) => passes(typeFilter, c.type))
    .filter(({ c }) => passes(statusFilter, c.status === "Signed" ? t(L("Signed", "موقعة")) : c.status === "Void" ? t(L("Void", "ملغاة")) : t(L("Awaiting signature", "بانتظار التوقيع"))));

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Consents", "الموافقات")}
        description={L("Digital consent forms with e-signature", "نماذج موافقة رقمية مع توقيع إلكتروني")}
        actions={
          <Button onClick={() => { setSignName(""); setSignOpen(true); }}>
            <Signature className="size-4" aria-hidden /> {t(L("Request signature", "طلب توقيع"))}
          </Button>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label={L("Signed", "موقعة")} value={String(collection.items.filter((c) => c.status === "Signed").length)} tint="green" icon={<ShieldCheck className="size-5" aria-hidden />} />
        <StatCard label={L("Awaiting signature", "بانتظار التوقيع")} value={String(collection.items.filter((c) => c.status === "Awaiting signature").length)} tint="yellow" icon={<History className="size-5" aria-hidden />} />
        <StatCard label={L("Expired", "منتهية")} value={String(collection.items.filter((c) => c.status === "Void").length)} tint="purple" icon={<FileText className="size-5" aria-hidden />} />
      </div>
      <Toolbar>
        <SearchBar placeholder={L("Search consents", "بحث في الموافقات")} value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select className="w-48" options={[L("All types", "كل الأنواع"), ...templates.map((tp) => L(tp, tp))]} onChange={(e) => setTypeFilter(typeOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")} />
        <Select
          className="w-44"
          options={[L("All statuses", "كل الحالات"), L("Signed", "موقعة"), L("Awaiting signature", "بانتظار التوقيع"), L("Void", "ملغاة")]}
          onChange={(e) => setStatusFilter(statusOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")}
        />
        <Button
          variant="outline"
          onClick={() =>
            downloadCsv(
              "rehlah-consents",
              ["Patient", "Type", "Signed by", "Date", "Expiry", "Status"],
              rows.map(({ c }) => [c.patient, c.type, c.signedBy, c.date, c.expiry, c.status]),
            )
          }
        >
          <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
        </Button>
      </Toolbar>
      <Tabs
        label="Consent tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "signed", label: L("Signed", "الموقعة"), count: collection.items.filter((c) => c.status === "Signed").length },
          { id: "pending", label: L("Awaiting signature", "بانتظار التوقيع"), count: collection.items.filter((c) => c.status === "Awaiting signature").length },
          { id: "templates", label: L("Templates", "القوالب"), count: templates.length },
        ]}
      />
      <div key={tab} className="animate-in-soft space-y-4">
        {tab === "templates" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {templates.map((c, i) => (
              <Card key={i} interactive>
                <p className="truncate font-semibold">{c}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t(L("Arabic & English versions", "نسخة عربية وإنجليزية"))}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1" onClick={() => { setTemplateIndex(i); setTemplateDraft(c); setTemplateEditOpen(true); }}>
                    {t(L("Edit", "تعديل"))}
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => { setSignName(""); setSignOpen(true); }}>
                    {t(L("Send", "إرسال"))}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {rows.length === 0 ? (
              <EmptyState title={L("No consents found", "لا توجد موافقات")} description={L("Try adjusting your filters", "حاول تعديل عوامل التصفية")} />
            ) : (
              <DataTable
                caption={L("Consent records", "سجلات الموافقات")}
                columns={[
                  L("Patient", "المريض"),
                  L("Consent type", "نوع الموافقة"),
                  L("Signed by", "وقّع بواسطة"),
                  L("Date", "التاريخ"),
                  L("Expiry", "الانتهاء"),
                  L("Status", "الحالة"),
                  L("Actions", "إجراءات"),
                ]}
                rows={rows.map(({ c, i }) => [
                  c.patient,
                  c.type,
                  c.signedBy,
                  c.date,
                  c.expiry,
                  <Badge tone={c.status === "Signed" ? "success" : c.status === "Void" ? "danger" : "warning"}>
                    {t(c.status === "Signed" ? L("Signed", "موقعة") : c.status === "Void" ? L("Void", "ملغاة") : L("Awaiting signature", "بانتظار التوقيع"))}
                  </Badge>,
                  <RowActions
                    items={[
                      { ...A.view, onClick: () => setViewIndex(i) } as any,
                      ...(c.status !== "Signed" ? [{ icon: <Signature className="size-4" aria-hidden />, label: L("Sign", "توقيع"), onClick: () => { setViewIndex(i); setSignName(""); setSignOpen(true); } } as any] : []),
                      { ...A.del, label: L("Void", "إلغاء"), onClick: () => setVoidIndex(i) } as any,
                    ]}
                  />,
                ])}
              />
            )}
            <Pagination total={rows.length} />
          </>
        )}
      </div>
      <Modal
        open={signOpen}
        onClose={() => setSignOpen(false)}
        title={L("Digital consent signature", "التوقيع الرقمي للموافقة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setSignOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              onClick={() => {
                if (viewIndex !== null) {
                  collection.update(viewIndex, { status: "Signed", signedBy: signName || collection.items[viewIndex]!.signedBy, date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) });
                }
                setSignOpen(false);
                setViewIndex(null);
                toast.push("success", L("Consent signed", "تم توقيع الموافقة"));
              }}
            >
              {t(L("Confirm signature", "تأكيد التوقيع"))}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="max-h-48 overflow-auto rounded-2xl border border-border p-4 text-sm leading-6 text-muted-foreground">
            {t(
              L(
                "I authorise Rehlah Center to provide the assessment and therapy services described in the treatment plan. I understand the goals, duration, and expected outcomes, and I may withdraw consent at any time in writing.",
                "أفوض مركز رحلة بتقديم خدمات التقييم والعلاج الموضحة في الخطة العلاجية. وأدرك الأهداف والمدة والنتائج المتوقعة، ويحق لي سحب الموافقة كتابياً في أي وقت.",
              ),
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label={L("Signatory name", "اسم الموقع")} required>
              <Input value={signName} onChange={(e) => setSignName(e.target.value)} />
            </Field>
            <Field label={L("Relationship", "صلة القرابة")}>
              <Select options={[L("Patient", "المريض"), L("Father", "الأب"), L("Mother", "الأم"), L("Guardian", "ولي الأمر")]} />
            </Field>
          </div>
          <Field label={L("Signature", "التوقيع")} required>
            <div className="grid h-28 place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground">
              {t(L("Draw signature here", "ارسم التوقيع هنا"))}
            </div>
          </Field>
        </div>
      </Modal>
      <Modal
        open={viewIndex !== null && !signOpen}
        onClose={() => setViewIndex(null)}
        title={L("Consent details", "تفاصيل الموافقة")}
        footer={<Button onClick={() => setViewIndex(null)}>{t(L("Close", "إغلاق"))}</Button>}
      >
        {viewIndex !== null && (
          <KeyValue
            items={[
              { k: L("Patient", "المريض"), v: collection.items[viewIndex]!.patient },
              { k: L("Consent type", "نوع الموافقة"), v: collection.items[viewIndex]!.type },
              { k: L("Signed by", "وقّع بواسطة"), v: collection.items[viewIndex]!.signedBy },
              { k: L("Date", "التاريخ"), v: collection.items[viewIndex]!.date },
              { k: L("Expiry", "الانتهاء"), v: collection.items[viewIndex]!.expiry },
              {
                k: L("Status", "الحالة"),
                v: (
                  <Badge tone={collection.items[viewIndex]!.status === "Signed" ? "success" : collection.items[viewIndex]!.status === "Void" ? "danger" : "warning"}>
                    {collection.items[viewIndex]!.status}
                  </Badge>
                ),
              },
            ]}
          />
        )}
      </Modal>
      <Modal
        open={voidIndex !== null}
        onClose={() => setVoidIndex(null)}
        size="sm"
        title={L("Void consent", "إلغاء الموافقة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setVoidIndex(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                if (voidIndex === null) return;
                collection.update(voidIndex, { status: "Void" });
                setVoidIndex(null);
                toast.push("success", L("Consent voided", "تم إلغاء الموافقة"));
              }}
            >
              {t(L("Void permanently", "إلغاء نهائي"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">{t(L("This will mark the consent record as void.", "سيؤدي هذا إلى وضع علامة إلغاء على سجل الموافقة."))}</p>
      </Modal>
      <Modal
        open={templateEditOpen}
        onClose={() => setTemplateEditOpen(false)}
        title={L("Edit consent template", "تعديل قالب الموافقة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setTemplateEditOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              onClick={() => {
                if (templateIndex === null) return;
                setTemplates((p) => p.map((tp, idx) => (idx === templateIndex ? templateDraft : tp)));
                setTemplateEditOpen(false);
                toast.push("success", L("Template saved", "تم حفظ القالب"));
              }}
            >
              {t(L("Save changes", "حفظ التغييرات"))}
            </Button>
          </>
        }
      >
        <Field label={L("Template name", "اسم القالب")} required>
          <Input value={templateDraft} onChange={(e) => setTemplateDraft(e.target.value)} />
        </Field>
      </Modal>
    </div>
  );
}

/* ------------------------------ 10. Sick Leave ---------------------------- */
type Certificate = { no: string; patient: string; issuedBy: string; from: string; to: string; days: number; status: "Active" | "Cancelled" };

function emptySickForm() {
  return { patient: "", specialist: 0, start: "", end: "", employer: "", language: 0, reason: "" };
}

export function SickLeaveModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [issueOpen, setIssueOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [cancelIndex, setCancelIndex] = useState<number | null>(null);
  const [form, setForm] = useState(emptySickForm());
  const [search, setSearch] = useState("");
  const [specialistFilter, setSpecialistFilter] = useState("all");
  const [verifyNo, setVerifyNo] = useState("");
  const [verifyResult, setVerifyResult] = useState<Certificate | null | "notfound">(null);

  const collection = useCollection<Certificate>(
    patients.slice(0, 6).map((p, i) => ({
      no: `SL-2026-${1200 + i}`,
      patient: t(p.name),
      issuedBy: t(doc(i % 4)),
      from: "05 Jul 2026",
      to: "08 Jul 2026",
      days: 2 + (i % 4),
      status: i % 4 === 0 ? "Cancelled" : "Active",
    })),
  );

  const specialistOptions = ["all", ...SPECIALISTS.map((s) => t(s))];
  const filtered = collection.items
    .map((c, i) => ({ c, i }))
    .filter(({ c }) => matches(search, c.no, c.patient) && passes(specialistFilter, c.issuedBy));

  const daysBetween = (from: string, to: string) => {
    const d1 = new Date(from);
    const d2 = new Date(to);
    const diff = Math.round((d2.getTime() - d1.getTime()) / 86400000);
    return Number.isFinite(diff) && diff > 0 ? diff : 1;
  };

  const openEdit = (i: number) => {
    const c = collection.items[i]!;
    setForm({ patient: c.patient, specialist: Math.max(0, SPECIALISTS.findIndex((s) => t(s) === c.issuedBy)), start: "", end: "", employer: "", language: 0, reason: "" });
    setEditIndex(i);
    setIssueOpen(true);
  };

  const submit = (andPrint: boolean) => {
    if (!form.patient.trim() || !form.start || !form.end) {
      toast.push("error", L("Patient and dates are required", "المريض والتواريخ مطلوبة"));
      return;
    }
    const days = daysBetween(form.start, form.end);
    if (editIndex !== null) {
      collection.update(editIndex, {
        patient: form.patient,
        issuedBy: t(SPECIALISTS[form.specialist] ?? SPECIALISTS[0]!),
        from: form.start,
        to: form.end,
        days,
      });
      toast.push("success", L("Certificate updated", "تم تحديث الشهادة"));
    } else {
      collection.add({
        no: `SL-2026-${1200 + collection.items.length}`,
        patient: form.patient,
        issuedBy: t(SPECIALISTS[form.specialist] ?? SPECIALISTS[0]!),
        from: form.start,
        to: form.end,
        days,
        status: "Active",
      });
      toast.push("success", L("Sick leave issued", "تم إصدار الإجازة المرضية"));
    }
    setIssueOpen(false);
    setEditIndex(null);
    setForm(emptySickForm());
    if (andPrint) printView();
  };

  const verify = () => {
    const found = collection.items.find((c) => c.no.toLowerCase() === verifyNo.trim().toLowerCase());
    setVerifyResult(found ?? "notfound");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Sick Leave", "الإجازات المرضية")}
        description={L("Issue and verify medical leave certificates", "إصدار الإجازات المرضية والتحقق منها")}
        actions={
          <>
            <Button variant="outline" onClick={() => { setVerifyNo(""); setVerifyResult(null); setVerifyOpen(true); }}>
              <ShieldCheck className="size-4" aria-hidden /> {t(L("Verify certificate", "التحقق من شهادة"))}
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                downloadCsv(
                  "rehlah-sick-leave",
                  ["Certificate no.", "Patient", "Issued by", "From", "To", "Days", "Status"],
                  filtered.map(({ c }) => [c.no, c.patient, c.issuedBy, c.from, c.to, c.days, c.status]),
                )
              }
            >
              <Download className="size-4" aria-hidden /> {t(L("Export", "تصدير"))}
            </Button>
            <Button onClick={() => { setForm(emptySickForm()); setEditIndex(null); setIssueOpen(true); }}>
              <Plus className="size-4" aria-hidden /> {t(L("Issue sick leave", "إصدار إجازة"))}
            </Button>
          </>
        }
      />
      <Toolbar>
        <SearchBar placeholder={L("Search by patient or certificate no.", "بحث بالمريض أو رقم الشهادة")} value={search} onChange={(e) => setSearch(e.target.value)} />
        <Input type="date" className="w-40" aria-label={t(L("From date", "من تاريخ"))} />
        <Input type="date" className="w-40" aria-label={t(L("To date", "إلى تاريخ"))} />
        <Select
          className="w-44"
          options={[L("All specialists", "كل الأخصائيين"), ...SPECIALISTS]}
          onChange={(e) => setSpecialistFilter(specialistOptions[(e.target as HTMLSelectElement).selectedIndex] ?? "all")}
        />
      </Toolbar>
      {filtered.length === 0 ? (
        <EmptyState title={L("No certificates found", "لا توجد شهادات")} description={L("Try adjusting your filters", "حاول تعديل عوامل التصفية")} />
      ) : (
        <DataTable
          caption={L("Issued sick leave certificates", "شهادات الإجازات المرضية المصدرة")}
          columns={[
            L("Certificate no.", "رقم الشهادة"),
            L("Patient", "المريض"),
            L("Issued by", "صادرة عن"),
            L("From", "من"),
            L("To", "إلى"),
            L("Days", "الأيام"),
            L("Status", "الحالة"),
            L("Actions", "إجراءات"),
          ]}
          rows={filtered.map(({ c, i }) => [
            <span className="font-mono text-xs">{c.no}</span>,
            c.patient,
            c.issuedBy,
            c.from,
            c.to,
            <span className="tabular-nums">{c.days}</span>,
            <Badge tone={c.status === "Cancelled" ? "danger" : "success"}>
              {t(c.status === "Cancelled" ? L("Cancelled", "ملغاة") : L("Active", "سارية"))}
            </Badge>,
            <RowActions
              items={[
                { ...A.print, onClick: () => printView() } as any,
                { ...A.edit, onClick: () => openEdit(i) } as any,
                ...(c.status === "Active" ? [{ ...A.cancel, onClick: () => setCancelIndex(i) } as any] : []),
              ]}
            />,
          ])}
        />
      )}
      <Pagination total={filtered.length} />
      <Modal
        open={issueOpen}
        onClose={() => { setIssueOpen(false); setEditIndex(null); }}
        title={editIndex !== null ? L("Edit certificate", "تعديل الشهادة") : L("Issue sick leave", "إصدار إجازة مرضية")}
        footer={
          <>
            <Button variant="outline" onClick={() => { setIssueOpen(false); setEditIndex(null); }}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={() => submit(true)}>
              <Printer className="size-4" aria-hidden /> {t(editIndex !== null ? L("Save & print", "حفظ وطباعة") : L("Issue & print", "إصدار وطباعة"))}
            </Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Patient", "المريض")} required>
            <Input placeholder={t(L("Search patient…", "ابحث عن مريض…"))} value={form.patient} onChange={(e) => setForm((p) => ({ ...p, patient: e.target.value }))} />
          </Field>
          <Field label={L("Issuing specialist", "الأخصائي المصدر")}>
            <Select options={SPECIALISTS} onChange={(e) => setForm((p) => ({ ...p, specialist: (e.target as HTMLSelectElement).selectedIndex }))} />
          </Field>
          <Field label={L("Start date", "تاريخ البدء")} required>
            <Input type="date" value={form.start} onChange={(e) => setForm((p) => ({ ...p, start: e.target.value }))} />
          </Field>
          <Field label={L("End date", "تاريخ الانتهاء")} required>
            <Input type="date" value={form.end} onChange={(e) => setForm((p) => ({ ...p, end: e.target.value }))} />
          </Field>
          <Field label={L("Employer / school", "جهة العمل / المدرسة")}>
            <Input value={form.employer} onChange={(e) => setForm((p) => ({ ...p, employer: e.target.value }))} />
          </Field>
          <Field label={L("Certificate language", "لغة الشهادة")}>
            <Select options={[L("Arabic", "العربية"), L("English", "الإنجليزية"), L("Bilingual", "ثنائية اللغة")]} onChange={(e) => setForm((p) => ({ ...p, language: (e.target as HTMLSelectElement).selectedIndex }))} />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Medical justification", "المبرر الطبي")}>
              <Textarea value={form.reason} onChange={(e) => setForm((p) => ({ ...p, reason: e.target.value }))} />
            </Field>
          </div>
        </div>
      </Modal>
      <Modal
        open={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        size="sm"
        title={L("Verify certificate", "التحقق من الشهادة")}
        footer={<Button onClick={verify}>{t(L("Verify", "تحقق"))}</Button>}
      >
        <Field label={L("Certificate number", "رقم الشهادة")}>
          <Input placeholder="SL-2026-1200" value={verifyNo} onChange={(e) => setVerifyNo(e.target.value)} />
        </Field>
        {verifyResult && (
          <div className={["mt-4 rounded-2xl p-4 text-sm", verifyResult === "notfound" ? "bg-tint-yellow" : "bg-tint-green"].join(" ")}>
            {verifyResult === "notfound"
              ? t(L("No certificate found with this number.", "لا توجد شهادة بهذا الرقم."))
              : t(
                  L(
                    `Certificate ${verifyResult.no} is ${verifyResult.status === "Cancelled" ? "cancelled" : "valid"} and was issued for ${verifyResult.patient} from ${verifyResult.from} to ${verifyResult.to}.`,
                    `الشهادة ${verifyResult.no} ${verifyResult.status === "Cancelled" ? "ملغاة" : "سارية"} وصدرت لـ ${verifyResult.patient} من ${verifyResult.from} إلى ${verifyResult.to}.`,
                  ),
                )}
          </div>
        )}
      </Modal>
      <Modal
        open={cancelIndex !== null}
        onClose={() => setCancelIndex(null)}
        size="sm"
        title={L("Cancel certificate", "إلغاء الشهادة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setCancelIndex(null)}>{t(L("Back", "رجوع"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                if (cancelIndex === null) return;
                collection.update(cancelIndex, { status: "Cancelled" });
                setCancelIndex(null);
                toast.push("success", L("Certificate cancelled", "تم إلغاء الشهادة"));
              }}
            >
              {t(L("Cancel certificate", "إلغاء الشهادة"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">{t(L("This will mark the certificate as cancelled.", "سيؤدي هذا إلى وضع علامة إلغاء على الشهادة."))}</p>
      </Modal>
    </div>
  );
}

/* ------------------------------- 11. Invoices ----------------------------- */
export function InvoicesModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("invoices");
  const [newOpen, setNewOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Invoices & Payments", "الفواتير والمدفوعات")}
        actions={
          <>
            <Button variant="outline" onClick={() => setPayOpen(true)}>
              <Wallet className="size-4" aria-hidden /> {t(L("Record payment", "تسجيل دفعة"))}
            </Button>
            <Button onClick={() => setNewOpen(true)}>
              <Plus className="size-4" aria-hidden /> {t(L("New invoice", "فاتورة جديدة"))}
            </Button>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Billed this month", "المفوتر هذا الشهر")} value="284,500" tint="green" icon={<Receipt className="size-5" aria-hidden />} />
        <StatCard label={L("Collected", "المحصّل")} value="231,900" tint="blue" icon={<CircleDollarSign className="size-5" aria-hidden />} />
        <StatCard label={L("Outstanding", "المستحق")} value="52,600" tint="yellow" icon={<History className="size-5" aria-hidden />} />
        <StatCard label={L("Insurance claims", "مطالبات التأمين")} value="38" tint="purple" icon={<ShieldCheck className="size-5" aria-hidden />} />
      </div>
      <Tabs
        label="Billing tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "invoices", label: L("Invoices", "الفواتير"), count: 128 },
          { id: "payments", label: L("Payments", "المدفوعات"), count: 96 },
          { id: "insurance", label: L("Insurance claims", "مطالبات التأمين"), count: 38 },
        ]}
      />
      <div key={tab} className="animate-in-soft space-y-4">
        {tab === "invoices" && (
          <DataGrid
            caption={L("Invoices", "الفواتير")}
            rows={invoices}
            rowKey={(inv) => inv.number}
            exportName="rehlah-invoices"
            search={(inv) => `${inv.number} ${pat(inv.patient).name.en} ${pat(inv.patient).name.ar}`}
            searchPlaceholder={L("Search invoice no. or patient", "بحث برقم الفاتورة أو المريض")}
            filters={[
              {
                id: "status",
                label: L("Status", "الحالة"),
                options: [
                  { value: "Paid", label: L("Paid", "مدفوعة") },
                  { value: "Partial", label: L("Partial", "جزئية") },
                  { value: "Unpaid", label: L("Unpaid", "غير مدفوعة") },
                ],
                match: (inv, v) => inv.status.en === v,
              },
              {
                id: "method",
                label: L("Payment method", "طريقة الدفع"),
                options: [
                  { value: "Mada", label: L("Mada", "مدى") },
                  { value: "Cash", label: L("Cash", "نقدي") },
                  { value: "Credit card", label: L("Credit card", "بطاقة ائتمانية") },
                  { value: "Bank transfer", label: L("Bank transfer", "تحويل بنكي") },
                  { value: "Insurance", label: L("Insurance", "تأمين") },
                ],
                match: (inv, v) => inv.method.en === v,
              },
            ]}
            bulkActions={[
              { id: "remind", label: L("Send reminder", "إرسال تذكير"), tone: "primary" },
              { id: "print", label: L("Print", "طباعة"), tone: "outline" },
            ]}
            onBulkAction={(id, sel) =>
              toast.push(
                "success",
                id === "remind"
                  ? L(`Reminders sent for ${sel.length} invoices`, `تم إرسال تذكير لـ ${sel.length} فاتورة`)
                  : L(`${sel.length} invoices queued for print`, `${sel.length} فاتورة في قائمة الطباعة`),
              )
            }
            columns={[
              { id: "no", header: L("Invoice no.", "رقم الفاتورة"), sort: (i) => i.number, csv: (i) => i.number, cell: (i) => <span className="font-mono text-xs">{i.number}</span> },
              { id: "patient", header: L("Patient", "المريض"), sort: (i) => pat(i.patient).name.en, csv: (i) => pat(i.patient).name.en, cell: (i) => t(pat(i.patient).name) },
              { id: "date", header: L("Date", "التاريخ"), sort: (i) => i.date, csv: (i) => i.date, hideBelow: "md", cell: (i) => i.date },
              { id: "amount", header: L("Amount", "المبلغ"), sort: (i) => i.total, csv: (i) => String(i.total), cell: (i) => <Money v={i.total} /> },
              { id: "vat", header: L("VAT 15%", "ضريبة ١٥٪"), csv: (i) => String(Math.round(i.total * 0.15)), hideBelow: "lg", cell: (i) => <Money v={Math.round(i.total * 0.15)} /> },
              { id: "paid", header: L("Paid", "المدفوع"), sort: (i) => i.paid, csv: (i) => String(i.paid), cell: (i) => <Money v={i.paid} /> },
              { id: "status", header: L("Status", "الحالة"), sort: (i) => i.status.en, csv: (i) => i.status.en, cell: (i) => <Badge tone={statusTone(i.status.en)}>{t(i.status)}</Badge> },
              {
                id: "actions",
                header: L("Actions", "إجراءات"),
                align: "end",
                cell: (inv) => (
                  <span className="flex justify-end gap-2">
                    <Button size="sm" variant="outline" onClick={() => setViewOpen(true)}>
                      {t(L("View", "عرض"))}
                    </Button>
                    {inv.paid < inv.total && (
                      <Button size="sm" onClick={() => setPayOpen(true)}>
                        {t(L("Collect", "تحصيل"))}
                      </Button>
                    )}
                  </span>
                ),
              },
            ]}
            emptyTitle={L("No invoices found", "لا توجد فواتير")}
            emptyDescription={L("Create an invoice or adjust your filters.", "أنشئ فاتورة أو عدّل التصفية.")}
            emptyAction={<Button onClick={() => setNewOpen(true)}>{t(L("New invoice", "فاتورة جديدة"))}</Button>}
          />
        )}
        {tab === "payments" && (
          <DataTable
            caption={L("Payments", "المدفوعات")}
            columns={[
              L("Receipt no.", "رقم السند"),
              L("Invoice", "الفاتورة"),
              L("Patient", "المريض"),
              L("Method", "طريقة الدفع"),
              L("Amount", "المبلغ"),
              L("Date", "التاريخ"),
              L("Actions", "إجراءات"),
            ]}
            rows={payments.map((p, i) => [
              <span className="font-mono text-xs">RC-{5400 + i}</span>,
              <span className="font-mono text-xs">{p.txn}</span>,
              t(pat(i % 6).name),
              <Badge tone="neutral">{t(p.method)}</Badge>,
              <Money v={p.amount} />,
              p.date,
              <RowActions items={[A.view, A.print]} />,
            ])}
          />
        )}
        {tab === "insurance" && (
          <DataTable
            caption={L("Insurance claims", "مطالبات التأمين")}
            columns={[
              L("Claim no.", "رقم المطالبة"),
              L("Patient", "المريض"),
              L("Insurer", "شركة التأمين"),
              L("Policy no.", "رقم الوثيقة"),
              L("Claimed", "المطالب به"),
              L("Approved", "المعتمد"),
              L("Status", "الحالة"),
              L("Actions", "إجراءات"),
            ]}
            rows={patients.slice(0, 6).map((p, i) => [
              <span className="font-mono text-xs">CL-2026-{300 + i}</span>,
              t(p.name),
              t(L("Bupa Arabia", "بوبا العربية")),
              <span className="font-mono text-xs">POL-{88400 + i}</span>,
              <Money v={1800 + i * 250} />,
              <Money v={1500 + i * 200} />,
              <Badge tone={i % 3 === 0 ? "warning" : "success"}>
                {t(i % 3 === 0 ? L("Under review", "قيد المراجعة") : L("Approved", "معتمدة"))}
              </Badge>,
              <RowActions items={[A.view, A.print]} />,
            ])}
          />
        )}
        {tab !== "invoices" && (
          <Pagination total={tab === "payments" ? 96 : 38} />
        )}
      </div>
      <Modal
        open={newOpen}
        onClose={() => setNewOpen(false)}
        size="lg"
        title={L("Create invoice", "إنشاء فاتورة")}
        footer={
          <>
            <Button variant="outline" onClick={() => { setNewOpen(false); toast.push("success", L("Save as draft — completed", "حفظ كمسودة — تم بنجاح")); }}>{t(L("Save as draft", "حفظ كمسودة"))}</Button>
            <Button onClick={() => { setNewOpen(false); toast.push("success", L("Issue invoice — completed", "إصدار الفاتورة — تم بنجاح")); }}>{t(L("Issue invoice", "إصدار الفاتورة"))}</Button>
          </>
        }
      >
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label={L("Patient", "المريض")} required>
              <Input placeholder={t(L("Search patient…", "ابحث عن مريض…"))} />
            </Field>
            <Field label={L("Invoice date", "تاريخ الفاتورة")}>
              <Input type="date" />
            </Field>
            <Field label={L("Payer", "جهة الدفع")}>
              <Select options={[L("Self-pay", "دفع ذاتي"), L("Insurance", "تأمين"), L("Corporate", "جهة تعاقدية")]} />
            </Field>
            <Field label={L("Due date", "تاريخ الاستحقاق")}>
              <Input type="date" />
            </Field>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <h3 className="text-sm font-semibold">{t(L("Line items", "بنود الفاتورة"))}</h3>
            <div className="mt-3 space-y-3">
              {[0, 1].map((i) => (
                <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
                  <Select options={services.map((s) => s.name)} />
                  <Input type="number" defaultValue={1} aria-label={t(L("Quantity", "الكمية"))} />
                  <Input type="number" defaultValue={350} aria-label={t(L("Unit price", "سعر الوحدة"))} />
                </div>
              ))}
              <Button size="sm" variant="outline">
                <Plus className="size-4" aria-hidden /> {t(L("Add item", "إضافة بند"))}
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-muted p-4">
            <KeyValue
              items={[
                { k: L("Subtotal", "المجموع الفرعي"), v: <Money v={700} /> },
                { k: L("Discount", "الخصم"), v: <Money v={50} /> },
                { k: L("VAT 15%", "ضريبة القيمة المضافة ١٥٪"), v: <Money v={97.5} /> },
                { k: L("Total", "الإجمالي"), v: <Money v={747.5} /> },
              ]}
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={payOpen}
        onClose={() => setPayOpen(false)}
        size="sm"
        title={L("Record payment", "تسجيل دفعة")}
        footer={<Button onClick={() => { setPayOpen(false); toast.push("success", L("Save payment — completed", "حفظ الدفعة — تم بنجاح")); }}>{t(L("Save payment", "حفظ الدفعة"))}</Button>}
      >
        <div className="space-y-4">
          <Field label={L("Invoice", "الفاتورة")} required>
            <Select options={invoices.map((i) => ({ en: i.number, ar: i.number }))} />
          </Field>
          <Field label={L("Payment method", "طريقة الدفع")}>
            <Select options={[L("Cash", "نقداً"), L("Card", "بطاقة"), L("Bank transfer", "تحويل بنكي"), L("Insurance", "تأمين")]} />
          </Field>
          <Field label={L("Amount", "المبلغ")} required>
            <Input type="number" />
          </Field>
          <Field label={L("Payment date", "تاريخ الدفع")}>
            <Input type="date" />
          </Field>
        </div>
      </Modal>
      <Modal
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        title={L("Invoice details", "تفاصيل الفاتورة")}
        footer={
          <>
            <Button variant="outline">
              <Printer className="size-4" aria-hidden /> {t(L("Print", "طباعة"))}
            </Button>
            <Button onClick={() => { setViewOpen(false); toast.push("success", L("Record payment — completed", "تسجيل دفعة — تم بنجاح")); }}>{t(L("Record payment", "تسجيل دفعة"))}</Button>
          </>
        }
      >
        <KeyValue
          items={[
            { k: L("Invoice no.", "رقم الفاتورة"), v: "INV-2026-0412" },
            { k: L("Patient", "المريض"), v: t(pat(0).name) },
            { k: L("Issued", "تاريخ الإصدار"), v: "10 Jul 2026" },
            { k: L("Total", "الإجمالي"), v: <Money v={1207.5} /> },
            { k: L("Paid", "المدفوع"), v: <Money v={700} /> },
            { k: L("Status", "الحالة"), v: <Badge tone="warning">{t(L("Partial", "جزئية"))}</Badge> },
          ]}
        />
      </Modal>
    </div>
  );
}

/* -------------------------------- 12. Reports ----------------------------- */
export function ReportsModule() {
  const { t } = useI18n();
  const [tab, setTab] = useState("operational");
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Reports", "التقارير")}
        description={L("Operational, clinical and financial insight", "رؤى تشغيلية وسريرية ومالية")}
        actions={
          <>
            <Button variant="outline">
              <Printer className="size-4" aria-hidden /> {t(L("Print", "طباعة"))}
            </Button>
            <Button variant="outline">
              <Download className="size-4" aria-hidden /> {t(L("Export Excel", "تصدير Excel"))}
            </Button>
            <Button>
              <Download className="size-4" aria-hidden /> {t(L("Export PDF", "تصدير PDF"))}
            </Button>
          </>
        }
      />
      <Toolbar>
        <Input type="date" className="w-40" aria-label={t(L("From date", "من تاريخ"))} />
        <Input type="date" className="w-40" aria-label={t(L("To date", "إلى تاريخ"))} />
        <Select className="w-40" options={[L("All specialties", "كل التخصصات"), ...SPECIALTIES]} />
        <Select className="w-44" options={[L("All specialists", "كل الأخصائيين"), ...SPECIALISTS]} />
      </Toolbar>
      <Tabs
        label="Report tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "operational", label: L("Operational", "تشغيلية") },
          { id: "clinical", label: L("Clinical", "سريرية") },
          { id: "financial", label: L("Financial", "مالية") },
          { id: "custom", label: L("Custom report", "تقرير مخصص") },
        ]}
      />
      <div key={tab} className="animate-in-soft space-y-6">
        {tab === "operational" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard label={L("Appointments", "المواعيد")} value="1,284" tint="green" icon={<CalendarIcon className="size-5" aria-hidden />} />
              <StatCard label={L("Attendance rate", "نسبة الحضور")} value="87%" tint="blue" icon={<Gauge className="size-5" aria-hidden />} />
              <StatCard label={L("New patients", "مرضى جدد")} value="142" tint="purple" icon={<Users className="size-5" aria-hidden />} />
              <StatCard label={L("Utilisation", "معدل الإشغال")} value="76%" tint="yellow" icon={<Layers className="size-5" aria-hidden />} />
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <ChartCard title={L("Attendance breakdown", "توزيع الحضور")} summary="Donut chart of attendance statuses.">
                <Donut data={attendanceStatus} />
              </ChartCard>
              <ChartCard title={L("Appointments per specialty", "المواعيد حسب التخصص")} summary="Bar chart of appointment counts per specialty.">
                <Bars data={specialtyDistribution} x="name" keys={["value"]} />
              </ChartCard>
            </div>
          </>
        )}
        {tab === "clinical" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatCard label={L("Active plans", "خطط نشطة")} value="96" tint="green" icon={<Stethoscope className="size-5" aria-hidden />} />
              <StatCard label={L("Goals achieved", "أهداف محققة")} value="412" tint="blue" icon={<ShieldCheck className="size-5" aria-hidden />} />
              <StatCard label={L("Avg. plan progress", "متوسط تقدم الخطط")} value="64%" tint="purple" icon={<Gauge className="size-5" aria-hidden />} />
            </div>
            <Card>
              <SectionTitle title={L("Progress by specialty", "التقدم حسب التخصص")} />
              <div className="mt-4 space-y-4">
                {SPECIALTIES.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm">
                      <span className="truncate">{t(s)}</span>
                      <span className="tabular-nums text-muted-foreground">{58 + i * 6}%</span>
                    </div>
                    <div className="mt-1.5">
                      <ProgressBar value={58 + i * 6} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
        {tab === "financial" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard label={L("Revenue", "الإيرادات")} value="1.92M" tint="green" icon={<CircleDollarSign className="size-5" aria-hidden />} />
              <StatCard label={L("Collections", "التحصيل")} value="1.64M" tint="blue" icon={<Wallet className="size-5" aria-hidden />} />
              <StatCard label={L("Outstanding", "المستحقات")} value="280K" tint="yellow" icon={<Receipt className="size-5" aria-hidden />} />
              <StatCard label={L("Insurance share", "حصة التأمين")} value="34%" tint="purple" icon={<ShieldCheck className="size-5" aria-hidden />} />
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <ChartCard title={L("Revenue trend", "اتجاه الإيرادات")} summary="Line chart of monthly revenue.">
                <Line1 data={revenueMonthly} x="m" y="revenue" />
              </ChartCard>
              <ChartCard title={L("This year vs last year", "هذا العام مقابل العام الماضي")} summary="Bar chart comparing monthly revenue year over year.">
                <Bars data={monthlyComparison} x="m" keys={["current", "previous"]} />
              </ChartCard>
            </div>
          </>
        )}
        {tab === "custom" && (
          <Card className="max-w-3xl">
            <SectionTitle
              title={L("Build a custom report", "إنشاء تقرير مخصص")}
              subtitle={L("Pick the data, grouping and format", "اختر البيانات والتجميع والصيغة")}
            />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={L("Data source", "مصدر البيانات")}>
                <Select options={[L("Appointments", "المواعيد"), L("Patients", "المرضى"), L("Invoices", "الفواتير"), L("Treatment plans", "الخطط العلاجية")]} />
              </Field>
              <Field label={L("Group by", "تجميع حسب")}>
                <Select options={[L("Specialty", "التخصص"), L("Specialist", "الأخصائي"), L("Month", "الشهر"), L("Status", "الحالة")]} />
              </Field>
              <Field label={L("Chart type", "نوع المخطط")}>
                <Select options={[L("Bar", "أعمدة"), L("Line", "خطي"), L("Donut", "دائري")]} />
              </Field>
              <Field label={L("Output format", "صيغة المخرجات")}>
                <Select options={[L("On screen", "على الشاشة"), L("PDF", "PDF"), L("Excel", "Excel")]} />
              </Field>
            </div>
            <div className="mt-5">
              <Button>{t(L("Generate report", "إنشاء التقرير"))}</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- 13. Administration ------------------------- */
export function AdministrationModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("users");
  const [userOpen, setUserOpen] = useState(false);
  const ROLES = [
    L("Administrator", "مدير النظام"),
    L("Specialist", "أخصائي"),
    L("Receptionist", "موظف استقبال"),
    L("Accountant", "محاسب"),
    L("Assistant", "مساعد"),
  ];
  const PERMS = [
    L("View patients", "عرض المرضى"),
    L("Edit patients", "تعديل المرضى"),
    L("Manage appointments", "إدارة المواعيد"),
    L("Clinical notes", "الملاحظات السريرية"),
    L("Issue invoices", "إصدار الفواتير"),
    L("View reports", "عرض التقارير"),
    L("System settings", "إعدادات النظام"),
  ];
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Administration", "الإدارة")}
        description={L("Users, roles, settings and audit trail", "المستخدمون والصلاحيات والإعدادات وسجل التدقيق")}
        actions={
          <Button onClick={() => setUserOpen(true)}>
            <Plus className="size-4" aria-hidden /> {t(L("Add user", "إضافة مستخدم"))}
          </Button>
        }
      />
      <Tabs
        label="Administration tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "users", label: L("Users", "المستخدمون"), count: 24 },
          { id: "roles", label: L("Roles & permissions", "الأدوار والصلاحيات") },
          { id: "settings", label: L("Clinic settings", "إعدادات المركز") },
          { id: "notifications", label: L("Notifications", "الإشعارات") },
          { id: "audit", label: L("Audit log", "سجل التدقيق") },
          { id: "backup", label: L("Backup", "النسخ الاحتياطي") },
        ]}
      />
      <div key={tab} className="animate-in-soft space-y-4">
        {tab === "users" && (
          <>
            <Toolbar>
              <SearchBar placeholder={L("Search users", "بحث في المستخدمين")} />
              <Select className="w-44" options={[L("All roles", "كل الأدوار"), ...ROLES]} />
              <Select className="w-36" options={[L("All statuses", "كل الحالات"), L("Active", "نشط"), L("Suspended", "موقوف")]} />
            </Toolbar>
            <DataTable
              caption={L("System users", "مستخدمو النظام")}
              columns={[
                L("Name", "الاسم"),
                L("Email", "البريد الإلكتروني"),
                L("Role", "الدور"),
                L("Specialty", "التخصص"),
                L("Last login", "آخر دخول"),
                L("Status", "الحالة"),
                L("Actions", "إجراءات"),
              ]}
              rows={SPECIALISTS.concat(SPECIALISTS.slice(0, 2)).map((s, i) => [
                t(s),
                <span className="font-mono text-xs">user{i + 1}@rehlah.sa</span>,
                <Badge tone="primary">{t(ROLES[i % ROLES.length]!)}</Badge>,
                t(spec(i % 5)),
                "12 Jul 2026 · 08:14",
                <Badge tone={i % 5 === 0 ? "warning" : "success"}>
                  {t(i % 5 === 0 ? L("Suspended", "موقوف") : L("Active", "نشط"))}
                </Badge>,
                <RowActions items={[A.edit, A.view, A.del]} />,
              ])}
            />
            <Pagination total={24} />
          </>
        )}
        {tab === "roles" && (
          <Card className="overflow-x-auto">
            <SectionTitle title={L("Permission matrix", "مصفوفة الصلاحيات")} />
            <table className="mt-4 w-full min-w-[720px] border-collapse text-sm">
              <caption className="sr-only">{t(L("Permission matrix", "مصفوفة الصلاحيات"))}</caption>
              <thead>
                <tr>
                  <th scope="col" className="px-3 py-3 text-start text-xs font-semibold text-muted-foreground">
                    {t(L("Permission", "الصلاحية"))}
                  </th>
                  {ROLES.map((r, i) => (
                    <th key={i} scope="col" className="px-3 py-3 text-center text-xs font-semibold text-muted-foreground">
                      {t(r)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PERMS.map((p, i) => (
                  <tr key={i} className="border-t border-border">
                    <th scope="row" className="px-3 py-3 text-start font-medium">{t(p)}</th>
                    {ROLES.map((_, j) => (
                      <td key={j} className="px-3 py-3 text-center">
                        <input
                          type="checkbox"
                          defaultChecked={j === 0 || (i + j) % 3 !== 0}
                          className="size-4 accent-[var(--primary)]"
                          aria-label={`${t(p)} — ${t(ROLES[j]!)}`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
        {tab === "settings" && (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Card>
              <SectionTitle title={L("Clinic profile", "بيانات المركز")} />
              <div className="mt-4 space-y-4">
                <Field label={L("Clinic name", "اسم المركز")}>
                  <Input defaultValue={t(L("Rehlah Center", "مركز رحلة"))} />
                </Field>
                <Field label={L("Commercial registration", "السجل التجاري")}>
                  <Input defaultValue="4030-889-221" />
                </Field>
                <Field label={L("VAT number", "الرقم الضريبي")}>
                  <Input defaultValue="310-2288-4400003" />
                </Field>
                <Field label={L("Address", "العنوان")}>
                  <Textarea rows={2} defaultValue={t(L("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية"))} />
                </Field>
              </div>
            </Card>
            <Card>
              <SectionTitle title={L("Working hours & preferences", "ساعات العمل والتفضيلات")} />
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field label={L("Opening time", "وقت الفتح")}>
                    <Input type="time" defaultValue="08:00" />
                  </Field>
                  <Field label={L("Closing time", "وقت الإغلاق")}>
                    <Input type="time" defaultValue="20:00" />
                  </Field>
                </div>
                <Field label={L("Default session length", "المدة الافتراضية للجلسة")}>
                  <Select options={[L("30 minutes", "٣٠ دقيقة"), L("45 minutes", "٤٥ دقيقة"), L("60 minutes", "٦٠ دقيقة")]} />
                </Field>
                <Field label={L("Default language", "اللغة الافتراضية")}>
                  <Select options={[L("Arabic", "العربية"), L("English", "الإنجليزية")]} />
                </Field>
                <Switch label={L("Enable online booking", "تفعيل الحجز الإلكتروني")} defaultChecked />
                <Switch label={L("Require insurance verification", "اشتراط التحقق من التأمين")} />
              </div>
            </Card>
          </div>
        )}
        {tab === "notifications" && (
          <Card className="max-w-2xl">
            <SectionTitle title={L("Notification templates", "قوالب الإشعارات")} />
            <div className="mt-4 space-y-4">
              {[
                L("Appointment confirmation (SMS)", "تأكيد الموعد (رسالة نصية)"),
                L("Appointment reminder — 24h", "تذكير بالموعد — ٢٤ ساعة"),
                L("Invoice issued (Email)", "إصدار فاتورة (بريد)"),
                L("Plan progress update", "تحديث تقدم الخطة"),
              ].map((n, i) => (
                <div key={i} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border p-4">
                  <span className="min-w-0 truncate text-sm font-medium">{t(n)}</span>
                  <Switch label={L("Enabled", "مفعّل")} defaultChecked={i !== 3} />
                </div>
              ))}
            </div>
          </Card>
        )}
        {tab === "audit" && (
          <>
            <Toolbar>
              <SearchBar placeholder={L("Search audit log", "بحث في سجل التدقيق")} />
              <Input type="date" className="w-40" aria-label={t(L("From date", "من تاريخ"))} />
              <Select className="w-44" options={[L("All actions", "كل الإجراءات"), L("Create", "إنشاء"), L("Update", "تعديل"), L("Delete", "حذف"), L("Login", "تسجيل دخول")]} />
            </Toolbar>
            <DataTable
              caption={L("Audit log", "سجل التدقيق")}
              columns={[
                L("Timestamp", "الوقت"),
                L("User", "المستخدم"),
                L("Action", "الإجراء"),
                L("Entity", "العنصر"),
                L("IP address", "عنوان IP"),
              ]}
              rows={Array.from({ length: 8 }, (_, i) => [
                <span className="font-mono text-xs">12 Jul 2026 · 09:{10 + i}</span>,
                t(doc(i % 4)),
                <Badge tone={i % 3 === 0 ? "danger" : "neutral"}>
                  {t(i % 3 === 0 ? L("Delete", "حذف") : i % 2 ? L("Update", "تعديل") : L("Create", "إنشاء"))}
                </Badge>,
                t(L("Patient record", "سجل مريض")),
                <span className="font-mono text-xs">10.4.2.{20 + i}</span>,
              ])}
            />
            <Pagination total={1240} />
          </>
        )}
        {tab === "backup" && (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Card>
              <SectionTitle title={L("Automatic backup", "النسخ الاحتياطي التلقائي")} />
              <div className="mt-4 space-y-4">
                <Switch label={L("Daily automatic backup", "نسخ احتياطي يومي")} defaultChecked />
                <Field label={L("Backup time", "وقت النسخ")}>
                  <Input type="time" defaultValue="02:00" />
                </Field>
                <Field label={L("Retention period", "مدة الاحتفاظ")}>
                  <Select options={[L("30 days", "٣٠ يوماً"), L("90 days", "٩٠ يوماً"), L("1 year", "سنة واحدة")]} />
                </Field>
                <Button variant="secondary">
                  <Database className="size-4" aria-hidden /> {t(L("Run backup now", "تشغيل النسخ الآن"))}
                </Button>
              </div>
            </Card>
            <Card>
              <SectionTitle title={L("Recent backups", "النسخ الأخيرة")} />
              <ul className="mt-4 space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-4">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">rehlah-backup-2026-07-{12 - i}.sql</p>
                      <p className="text-xs text-muted-foreground">248 MB · 02:00</p>
                    </div>
                    <Button size="sm" variant="outline" aria-label={t(L("Download", "تنزيل"))}>
                      <Download className="size-4" aria-hidden />
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}
      </div>
      <Modal
        open={userOpen}
        onClose={() => setUserOpen(false)}
        title={L("Add user", "إضافة مستخدم")}
        footer={
          <>
            <Button variant="outline" onClick={() => setUserOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={() => { setUserOpen(false); toast.push("success", L("Create user — completed", "إنشاء المستخدم — تم بنجاح")); }}>{t(L("Create user", "إنشاء المستخدم"))}</Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Full name", "الاسم الكامل")} required>
            <Input />
          </Field>
          <Field label={L("Email", "البريد الإلكتروني")} required>
            <Input type="email" />
          </Field>
          <Field label={L("Mobile", "الجوال")}>
            <Input type="tel" placeholder="+966 5X XXX XXXX" />
          </Field>
          <Field label={L("Role", "الدور")}>
            <Select options={ROLES} />
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select options={SPECIALTIES} />
          </Field>
          <Field label={L("Status", "الحالة")}>
            <Select options={[L("Active", "نشط"), L("Suspended", "موقوف")]} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}

/* -------------------------------- 14. Pricing ----------------------------- */
export function PricingModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("services");
  const [serviceOpen, setServiceOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Pricing", "التسعير")}
        description={L("Service catalogue, packages and insurance rates", "دليل الخدمات والباقات وأسعار التأمين")}
        actions={
          <Button onClick={() => setServiceOpen(true)}>
            <Plus className="size-4" aria-hidden /> {t(L("Add service", "إضافة خدمة"))}
          </Button>
        }
      />
      <Tabs
        label="Pricing tabs"
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "services", label: L("Services", "الخدمات"), count: services.length },
          { id: "packages", label: L("Packages", "الباقات"), count: 4 },
          { id: "insurance", label: L("Insurance rates", "أسعار التأمين"), count: 6 },
          { id: "discounts", label: L("Discounts", "الخصومات") },
        ]}
      />
      <div key={tab} className="animate-in-soft space-y-4">
        {tab === "services" && (
          <>
            <Toolbar>
              <SearchBar placeholder={L("Search services", "بحث في الخدمات")} />
              <Select className="w-40" options={[L("All specialties", "كل التخصصات"), ...SPECIALTIES]} />
            </Toolbar>
            <DataTable
              caption={L("Service catalogue", "دليل الخدمات")}
              columns={[
                L("Code", "الرمز"),
                L("Service", "الخدمة"),
                L("Specialty", "التخصص"),
                L("Duration", "المدة"),
                L("Price", "السعر"),
                L("VAT", "الضريبة"),
                L("Status", "الحالة"),
                L("Actions", "إجراءات"),
              ]}
              rows={services.map((s, i) => [
                <span className="font-mono text-xs">{`SRV-${String(i + 1).padStart(3, "0")}`}</span>,
                t(s.name),
                <Badge tone="primary">{t(spec(i % 5))}</Badge>,
                `45 ${t(L("min", "دقيقة"))}`,
                <Money v={s.single} />,
                "15%",
                <Badge tone="success">{t(L("Active", "نشطة"))}</Badge>,
                <RowActions items={[A.edit, A.view, A.del]} />,
              ])}
            />
          </>
        )}
        {tab === "packages" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { n: L("Starter — 4 sessions", "البداية — ٤ جلسات"), p: 1200 },
              { n: L("Standard — 8 sessions", "القياسية — ٨ جلسات"), p: 2240 },
              { n: L("Intensive — 12 sessions", "المكثفة — ١٢ جلسة"), p: 3180 },
              { n: L("Family programme", "برنامج الأسرة"), p: 4500 },
            ].map((pk, i) => (
              <Card key={i} tint={i === 1 ? "green" : "none"}>
                <p className="truncate font-semibold">{t(pk.n)}</p>
                <p className="mt-3 text-2xl font-bold tabular-nums">
                  <Money v={pk.p} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t(L("Valid 6 months · transferable", "صالحة ٦ أشهر · قابلة للتحويل"))}
                </p>
                <div className="mt-4">
                  <Button size="sm" variant="secondary" className="w-full">{t(L("Edit package", "تعديل الباقة"))}</Button>
                </div>
              </Card>
            ))}
          </div>
        )}
        {tab === "insurance" && (
          <DataTable
            caption={L("Insurance rates", "أسعار التأمين")}
            columns={[
              L("Insurer", "شركة التأمين"),
              L("Service", "الخدمة"),
              L("Contract rate", "السعر التعاقدي"),
              L("Patient share", "حصة المريض"),
              L("Approval required", "يتطلب موافقة"),
              L("Actions", "إجراءات"),
            ]}
            rows={services.map((s, i) => [
              t(L("Bupa Arabia", "بوبا العربية")),
              t(s.name),
              <Money v={Math.round(s.single * 0.85)} />,
              "20%",
              <Badge tone={i % 2 ? "warning" : "neutral"}>
                {t(i % 2 ? L("Yes", "نعم") : L("No", "لا"))}
              </Badge>,
              <RowActions items={[A.edit, A.view]} />,
            ])}
          />
        )}
        {tab === "discounts" && (
          <Card className="max-w-2xl">
            <SectionTitle title={L("Discount rules", "قواعد الخصم")} />
            <div className="mt-4 space-y-4">
              <Field label={L("Discount name", "اسم الخصم")}>
                <Input defaultValue={t(L("Sibling discount", "خصم الإخوة"))} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label={L("Type", "النوع")}>
                  <Select options={[L("Percentage", "نسبة مئوية"), L("Fixed amount", "مبلغ ثابت")]} />
                </Field>
                <Field label={L("Value", "القيمة")}>
                  <Input type="number" defaultValue={10} />
                </Field>
              </div>
              <Switch label={L("Requires manager approval", "يتطلب موافقة المدير")} defaultChecked />
              <Switch label={L("Stackable with packages", "قابل للدمج مع الباقات")} />
            </div>
          </Card>
        )}
      </div>
      <Modal
        open={serviceOpen}
        onClose={() => setServiceOpen(false)}
        title={L("Add / edit service", "إضافة / تعديل خدمة")}
        footer={
          <>
            <Button variant="outline" onClick={() => setServiceOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={() => { setServiceOpen(false); toast.push("success", L("Save service — completed", "حفظ الخدمة — تم بنجاح")); }}>{t(L("Save service", "حفظ الخدمة"))}</Button>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={L("Service code", "رمز الخدمة")} required>
            <Input placeholder="SRV-001" />
          </Field>
          <Field label={L("Service name", "اسم الخدمة")} required>
            <Input />
          </Field>
          <Field label={L("Specialty", "التخصص")}>
            <Select options={SPECIALTIES} />
          </Field>
          <Field label={L("Duration (minutes)", "المدة (دقائق)")}>
            <Input type="number" defaultValue={45} />
          </Field>
          <Field label={L("Price (SAR)", "السعر (ر.س)")} required>
            <Input type="number" defaultValue={350} />
          </Field>
          <Field label={L("VAT", "الضريبة")}>
            <Select options={[L("15% standard", "١٥٪ قياسية"), L("Exempt", "معفاة")]} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}