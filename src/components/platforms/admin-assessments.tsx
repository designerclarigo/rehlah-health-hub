import { useState } from "react";
import { L, useI18n } from "@/lib/i18n";
import { Badge, Button, Card, Field, Input, ProgressBar, Select, Textarea } from "@/components/rehlah/primitives";
import { ChartCard, Line1, Bars, Modal, PageHeader, Tabs } from "@/components/rehlah/blocks";
import { DataGrid } from "@/components/rehlah/datagrid";
import { useToast } from "@/components/rehlah/toast";
import { assessments, doc, pat, spec, SPECIALTIES, SPECIALISTS } from "@/lib/rehlah-data";
import { statusTone, RowActions, A } from "./admin-modules";
import { ClipboardList, Download, Eye, Pencil, Plus, Save, Trash2, PlayCircle, Printer } from "lucide-react";
import { downloadCsv, printView } from "@/lib/module-state";

const progressSeries = [
  { day: "Jan", visits: 42 },
  { day: "Feb", visits: 48 },
  { day: "Mar", visits: 55 },
  { day: "Apr", visits: 61 },
  { day: "May", visits: 68 },
  { day: "Jun", visits: 74 },
  { day: "Jul", visits: 79 },
];

const domainScores = [
  { m: "Motor", revenue: 74 },
  { m: "Speech", revenue: 68 },
  { m: "Sensory", revenue: 81 },
  { m: "Social", revenue: 62 },
  { m: "Cognitive", revenue: 70 },
];

const REPORT_DEFS = [
  { title: L("Initial assessment summary", "ملخص التقييم الأولي"), desc: L("Per-patient baseline report", "تقرير خط الأساس لكل مريض") },
  { title: L("Re-assessment comparison", "مقارنة إعادة التقييم"), desc: L("Baseline vs latest scores", "خط الأساس مقابل آخر الدرجات") },
  { title: L("Domain breakdown", "تفصيل المجالات"), desc: L("Scores by clinical domain", "الدرجات حسب المجال السريري") },
  { title: L("Specialist output", "إنتاجية الأخصائي"), desc: L("Assessments completed per specialist", "التقييمات المنجزة لكل أخصائي") },
  { title: L("Follow-up required", "بحاجة متابعة"), desc: L("Cases flagged for review", "الحالات المُعلّمة للمراجعة") },
  { title: L("Outcome trends", "اتجاهات النتائج"), desc: L("Score movement over time", "تغير الدرجات عبر الزمن") },
];

export function AssessmentsModule() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("results");
  const [newOpen, setNewOpen] = useState(false);
  const [view, setView] = useState<number | null>(null);
  const [items, setItems] = useState(assessments);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editDraft, setEditDraft] = useState<{ score: number; duration: string; status: string } | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [domains, setDomains] = useState<string[]>([
    "Articulation clarity",
    "Receptive language",
    "Expressive language",
    "Oral motor control",
    "Social communication",
  ]);
  const [templates, setTemplates] = useState<{ name: string; specialty: string; scoring: string }[]>([]);
  const [templateName, setTemplateName] = useState("Paediatric speech screening");
  const [templateSpecialty, setTemplateSpecialty] = useState<string>(t(SPECIALTIES[0]!));
  const [templateScoring, setTemplateScoring] = useState<string>(t(L("Percentage", "نسبة مئوية")));
  const [runReport, setRunReport] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Assessments", "التقييمات")}
        description={L(
          "Standardised assessment builder, results, progress tracking and reports",
          "منشئ التقييمات والنتائج وتتبع التقدم والتقارير",
        )}
        actions={
          <>
            <Button variant="outline" onClick={() => toast.push("success", L("Assessment report exported", "تم تصدير تقرير التقييم"))}>
              <Download className="size-4" aria-hidden />
              {t(L("Export", "تصدير"))}
            </Button>
            <Button onClick={() => setNewOpen(true)}>
              <Plus className="size-4" aria-hidden />
              {t(L("New assessment", "تقييم جديد"))}
            </Button>
          </>
        }
      />

      <Tabs
        value={tab}
        onChange={setTab}
        label={t(L("Assessment sections", "أقسام التقييم"))}
        tabs={[
          { id: "results", label: L("Results", "النتائج"), count: items.length },
          { id: "builder", label: L("Builder", "المنشئ") },
          { id: "progress", label: L("Progress", "التقدم") },
          { id: "reports", label: L("Reports", "التقارير") },
        ]}
      />

      {tab === "results" && (
        <DataGrid
          caption={L("Assessment results", "نتائج التقييم")}
          rows={items}
          rowKey={(r, i) => `${r.patient}-${r.date}-${i}`}
          exportName="rehlah-assessments"
          search={(r) => `${pat(r.patient).name.en} ${pat(r.patient).name.ar} ${r.date}`}
          searchPlaceholder={L("Search by patient or date", "بحث بالمريض أو التاريخ")}
          filters={[
            {
              id: "specialty",
              label: L("Specialty", "التخصص"),
              options: SPECIALTIES.map((s, i) => ({ value: String(i), label: s })),
              match: (r, v) => String(r.specialty) === v,
            },
            {
              id: "specialist",
              label: L("Specialist", "الأخصائي"),
              options: SPECIALISTS.map((s, i) => ({ value: String(i), label: s })),
              match: (r, v) => String(r.specialist) === v,
            },
            {
              id: "status",
              label: L("Status", "الحالة"),
              options: [
                { value: "Completed", label: L("Completed", "مكتمل") },
                { value: "Under review", label: L("Under review", "قيد المراجعة") },
                { value: "Needs follow-up", label: L("Needs follow-up", "يحتاج متابعة") },
              ],
              match: (r, v) => r.status.en === v,
            },
          ]}
          bulkActions={[
            { id: "export", label: L("Export selected", "تصدير المحدد"), tone: "outline" },
            { id: "review", label: L("Mark reviewed", "تعليم كمراجَع"), tone: "primary" },
          ]}
          onBulkAction={(id, sel) =>
            toast.push(
              "success",
              id === "export"
                ? L(`${sel.length} assessments exported`, `تم تصدير ${sel.length} تقييم`)
                : L(`${sel.length} assessments marked reviewed`, `تم تعليم ${sel.length} تقييم كمراجَع`),
            )
          }
          columns={[
            {
              id: "patient",
              header: L("Patient", "المريض"),
              sort: (r) => pat(r.patient).name.en,
              csv: (r) => pat(r.patient).name.en,
              cell: (r) => <span className="font-medium">{t(pat(r.patient).name)}</span>,
            },
            {
              id: "specialty",
              header: L("Specialty", "التخصص"),
              sort: (r) => spec(r.specialty).en,
              csv: (r) => spec(r.specialty).en,
              hideBelow: "md",
              cell: (r) => t(spec(r.specialty)),
            },
            {
              id: "specialist",
              header: L("Specialist", "الأخصائي"),
              csv: (r) => doc(r.specialist).en,
              hideBelow: "lg",
              cell: (r) => t(doc(r.specialist)),
            },
            { id: "date", header: L("Date", "التاريخ"), sort: (r) => r.date, csv: (r) => r.date, cell: (r) => r.date },
            {
              id: "score",
              header: L("Score", "الدرجة"),
              sort: (r) => r.score,
              csv: (r) => String(r.score),
              cell: (r) => (
                <span className="flex w-32 items-center gap-2">
                  <ProgressBar value={r.score} tone={r.score >= 70 ? "success" : r.score >= 50 ? "accent" : "danger"} />
                  <span className="text-xs font-semibold tabular-nums">{r.score}</span>
                </span>
              ),
            },
            {
              id: "status",
              header: L("Status", "الحالة"),
              sort: (r) => r.status.en,
              csv: (r) => r.status.en,
              cell: (r) => <Badge tone={statusTone(r.status.en)}>{t(r.status)}</Badge>,
            },
            {
              id: "actions",
              header: L("Actions", "إجراءات"),
              align: "end",
              cell: (r, i) => (
                <span className="flex justify-end gap-2">
                  <Button size="sm" variant="outline" onClick={() => setView(i)}>
                    <Eye className="size-4" aria-hidden />
                    {t(L("View", "عرض"))}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    aria-label={t(L("Edit", "تعديل"))}
                    onClick={() => {
                      setEditIndex(i);
                      setEditDraft({ score: r.score, duration: r.duration, status: r.status.en });
                    }}
                  >
                    <Pencil className="size-4" aria-hidden />
                  </Button>
                  <Button size="sm" variant="ghost" aria-label={t(L("Delete", "حذف"))} onClick={() => setDeleteIndex(i)}>
                    <Trash2 className="size-4" aria-hidden />
                  </Button>
                </span>
              ),
            },
          ]}
          emptyTitle={L("No assessments yet", "لا توجد تقييمات")}
          emptyDescription={L("Create the first assessment for this clinic.", "أنشئ أول تقييم في المركز.")}
          emptyAction={<Button onClick={() => setNewOpen(true)}>{t(L("New assessment", "تقييم جديد"))}</Button>}
        />
      )}

      {tab === "builder" && (
        <div className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <Card className="space-y-4">
              <h3 className="text-[15px] font-semibold">{t(L("Assessment template", "قالب التقييم"))}</h3>
              <Field label={L("Template name", "اسم القالب")} required>
                <Input value={templateName} onChange={(e) => setTemplateName(e.target.value)} />
              </Field>
              <Field label={L("Specialty", "التخصص")}>
                <Select options={SPECIALTIES} value={templateSpecialty} onChange={(e) => setTemplateSpecialty(e.target.value)} />
              </Field>
              <Field label={L("Scoring method", "طريقة التقييم")}>
                <Select
                  options={[L("Percentage", "نسبة مئوية"), L("Likert 1–5", "ليكرت ١–٥"), L("Pass / fail", "نجاح / رسوب")]}
                  value={templateScoring}
                  onChange={(e) => setTemplateScoring(e.target.value)}
                />
              </Field>
              <Field label={L("Instructions", "التعليمات")}>
                <Textarea defaultValue={t(L("Complete each domain during the initial session.", "أكمل كل مجال خلال الجلسة الأولى."))} />
              </Field>
              <Button
                onClick={() => {
                  if (templateName.trim().length < 3) {
                    toast.push("error", L("Enter a template name", "أدخل اسم القالب"));
                    return;
                  }
                  setTemplates((s) => [{ name: templateName.trim(), specialty: templateSpecialty, scoring: templateScoring }, ...s]);
                  toast.push("success", L("Template saved", "تم حفظ القالب"));
                }}
              >
                <Save className="size-4" aria-hidden />
                {t(L("Save template", "حفظ القالب"))}
              </Button>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-[15px] font-semibold">{t(L("Domains & items", "المجالات والبنود"))}</h3>
              {domains.map((d, i) => (
                <div key={i} className="grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-3 rounded-2xl border border-border p-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-tint-green text-xs font-bold text-[var(--primary-deep)]">
                    {i + 1}
                  </span>
                  <span className="min-w-0 truncate text-sm font-medium">{t(L(d, d))}</span>
                  <Badge tone="neutral">{t(L("Scored", "مُقيّم"))}</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    aria-label={t(L("Remove domain", "إزالة المجال"))}
                    onClick={() => setDomains((s) => s.filter((_, idx) => idx !== i))}
                  >
                    <Trash2 className="size-4" aria-hidden />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  const n = domains.length + 1;
                  setDomains((s) => [...s, L(`New domain ${n}`, `مجال جديد ${n}`).en]);
                  toast.push("info", L("Domain added to template", "تمت إضافة مجال للقالب"));
                }}
              >
                <Plus className="size-4" aria-hidden />
                {t(L("Add domain", "إضافة مجال"))}
              </Button>
            </Card>
          </div>

          <Card className="space-y-3">
            <h3 className="text-[15px] font-semibold">{t(L("Saved templates", "القوالب المحفوظة"))}</h3>
            {templates.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t(L("No templates saved yet.", "لا توجد قوالب محفوظة بعد."))}</p>
            ) : (
              <ul className="space-y-2">
                {templates.map((tpl, i) => (
                  <li key={i} className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-2xl border border-border p-3">
                    <span className="min-w-0 truncate text-sm font-medium">{tpl.name}</span>
                    <Badge tone="info">{tpl.specialty}</Badge>
                    <Badge tone="neutral">{tpl.scoring}</Badge>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      )}

      {tab === "progress" && (
        <div className="grid gap-4 lg:grid-cols-2">
          <ChartCard
            title={L("Average score trend", "اتجاه متوسط الدرجات")}
            summary="Line chart of average assessment scores per month"
          >
            <Line1 data={progressSeries} x="day" y="visits" />
          </ChartCard>
          <ChartCard title={L("Domain performance", "أداء المجالات")} summary="Bar chart of average score by domain">
            <Bars data={domainScores} x="m" keys={["revenue"]} />
          </ChartCard>
          <Card className="space-y-4 lg:col-span-2">
            <h3 className="text-[15px] font-semibold">{t(L("Patient progress", "تقدم المرضى"))}</h3>
            {items.map((a, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="truncate font-medium">{t(pat(a.patient).name)}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">{a.score}%</span>
                </div>
                <ProgressBar value={a.score} />
              </div>
            ))}
          </Card>
        </div>
      )}

      {tab === "reports" && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {REPORT_DEFS.map((r, i) => (
              <Card key={i} className="flex flex-col gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]">
                  <ClipboardList className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{t(r.title)}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t(r.desc)}</p>
                </div>
                <div className="mt-auto flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setRunReport(i);
                      toast.push("success", L("Report generated", "تم إنشاء التقرير"));
                    }}
                  >
                    <PlayCircle className="size-4" aria-hidden />
                    {t(L("Run", "تشغيل"))}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      downloadCsv(
                        `rehlah-${r.title.en.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                        [t(L("Patient", "المريض")), t(L("Domain", "المجال")), t(L("Score", "الدرجة"))],
                        items.map((a) => [t(pat(a.patient).name), t(spec(a.specialty)), a.score]),
                      );
                      toast.push("success", L("Report exported as CSV", "تم تصدير التقرير CSV"));
                    }}
                  >
                    <Download className="size-4" aria-hidden />
                    CSV
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {runReport !== null && (
            <Card className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-[15px] font-semibold">{t(REPORT_DEFS[runReport]!.title)}</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={printView}>
                    <Printer className="size-4" aria-hidden />
                    {t(L("Print", "طباعة"))}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      downloadCsv(
                        "rehlah-assessment-report",
                        [t(L("Patient", "المريض")), t(L("Specialty", "التخصص")), t(L("Score", "الدرجة")), t(L("Status", "الحالة"))],
                        items.map((a) => [t(pat(a.patient).name), t(spec(a.specialty)), a.score, t(a.status)]),
                      )
                    }
                  >
                    <Download className="size-4" aria-hidden />
                    {t(L("Export CSV", "تصدير CSV"))}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <caption className="sr-only">{t(REPORT_DEFS[runReport]!.title)}</caption>
                    <thead className="bg-muted/60 text-xs text-muted-foreground">
                      <tr>
                        <th scope="col" className="p-3 text-start">{t(L("Patient", "المريض"))}</th>
                        <th scope="col" className="p-3 text-start">{t(L("Specialty", "التخصص"))}</th>
                        <th scope="col" className="p-3 text-end">{t(L("Score", "الدرجة"))}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((a, i) => (
                        <tr key={i} className="border-t border-border">
                          <td className="p-3">{t(pat(a.patient).name)}</td>
                          <td className="p-3">{t(spec(a.specialty))}</td>
                          <td className="p-3 text-end tabular-nums">{a.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Bars data={domainScores} x="m" keys={["revenue"]} />
              </div>
            </Card>
          )}
        </div>
      )}

      {/* New assessment modal */}
      <Modal
        open={newOpen}
        onClose={() => setNewOpen(false)}
        title={L("New assessment", "تقييم جديد")}
        subtitle={L("Record a standardised assessment result", "تسجيل نتيجة تقييم معياري")}
        footer={
          <>
            <Button variant="outline" onClick={() => setNewOpen(false)}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                setItems((s) => [
                  {
                    patient: 0,
                    specialty: 2,
                    date: "20 Jul 2026",
                    specialist: 0,
                    score: 71,
                    duration: "35 min",
                    status: L("Under review", "قيد المراجعة"),
                  },
                  ...s,
                ]);
                setNewOpen(false);
                setTab("results");
                toast.push("success", L("Assessment saved and added to results", "تم حفظ التقييم وإضافته للنتائج"));
              }}
            >
              {t(L("Save assessment", "حفظ التقييم"))}
            </Button>
          </>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={L("Patient", "المريض")} required>
            <Select options={[L("Sara Al-Otaibi", "سارة العتيبي"), L("Yousef Al-Dossary", "يوسف الدوسري")]} />
          </Field>
          <Field label={L("Specialty", "التخصص")} required>
            <Select options={SPECIALTIES} />
          </Field>
          <Field label={L("Specialist", "الأخصائي")}>
            <Select options={SPECIALISTS} />
          </Field>
          <Field label={L("Date", "التاريخ")}>
            <Input type="date" defaultValue="2026-07-20" />
          </Field>
          <Field label={L("Score", "الدرجة")} hint={L("0 – 100", "٠ – ١٠٠")}>
            <Input type="number" min={0} max={100} defaultValue={71} />
          </Field>
          <Field label={L("Duration", "المدة")}>
            <Input defaultValue="35 min" />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Clinical notes", "الملاحظات السريرية")}>
              <Textarea placeholder={t(L("Observations, recommendations and next steps", "الملاحظات والتوصيات والخطوات التالية"))} />
            </Field>
          </div>
        </div>
      </Modal>

      {/* View assessment modal */}
      <Modal
        open={view !== null}
        onClose={() => setView(null)}
        title={L("Assessment detail", "تفاصيل التقييم")}
        {...(view !== null ? { subtitle: pat(items[view]!.patient).name } : {})}
        footer={
          <>
            <Button variant="outline" onClick={() => toast.push("success", L("Assessment PDF downloaded", "تم تنزيل ملف التقييم"))}>
              <Download className="size-4" aria-hidden />
              {t(L("Download PDF", "تنزيل PDF"))}
            </Button>
            <Button onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>
          </>
        }
      >
        {view !== null && (
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: L("Patient", "المريض"), v: t(pat(items[view]!.patient).name) },
                { k: L("Specialty", "التخصص"), v: t(spec(items[view]!.specialty)) },
                { k: L("Specialist", "الأخصائي"), v: t(doc(items[view]!.specialist)) },
                { k: L("Date", "التاريخ"), v: items[view]!.date },
                { k: L("Duration", "المدة"), v: items[view]!.duration },
                { k: L("Overall score", "الدرجة الكلية"), v: `${items[view]!.score}%` },
              ].map((kv, i) => (
                <div key={i}>
                  <p className="text-xs font-medium text-muted-foreground">{t(kv.k)}</p>
                  <p className="mt-0.5 text-sm font-semibold">{kv.v}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">{t(L("Domain scores", "درجات المجالات"))}</h4>
              {domainScores.map((d) => (
                <div key={d.m} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">{d.m}</span>
                    <span className="tabular-nums text-muted-foreground">{d.revenue}%</span>
                  </div>
                  <ProgressBar value={d.revenue} />
                </div>
              ))}
            </div>
            <RowActions items={[A.print, A.pdf, A.send]} />
          </div>
        )}
      </Modal>

      {/* Edit assessment modal */}
      <Modal
        open={editIndex !== null}
        onClose={() => { setEditIndex(null); setEditDraft(null); }}
        title={L("Edit assessment", "تعديل التقييم")}
        {...(editIndex !== null ? { subtitle: pat(items[editIndex]!.patient).name } : {})}
        footer={
          <>
            <Button variant="outline" onClick={() => { setEditIndex(null); setEditDraft(null); }}>
              {t(L("Cancel", "إلغاء"))}
            </Button>
            <Button
              onClick={() => {
                if (editIndex === null || !editDraft) return;
                setItems((s) =>
                  s.map((it, i) =>
                    i === editIndex
                      ? { ...it, score: editDraft.score, duration: editDraft.duration, status: L(editDraft.status, editDraft.status) }
                      : it,
                  ),
                );
                setEditIndex(null);
                setEditDraft(null);
                toast.push("success", L("Assessment updated", "تم تحديث التقييم"));
              }}
            >
              {t(L("Save changes", "حفظ التغييرات"))}
            </Button>
          </>
        }
      >
        {editIndex !== null && editDraft && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={L("Score", "الدرجة")} hint={L("0 – 100", "٠ – ١٠٠")}>
              <Input
                type="number"
                min={0}
                max={100}
                value={editDraft.score}
                onChange={(e) => setEditDraft((d) => (d ? { ...d, score: Number(e.target.value) } : d))}
              />
            </Field>
            <Field label={L("Duration", "المدة")}>
              <Input value={editDraft.duration} onChange={(e) => setEditDraft((d) => (d ? { ...d, duration: e.target.value } : d))} />
            </Field>
            <div className="sm:col-span-2">
              <Field label={L("Status", "الحالة")}>
                <Select
                  options={[L("Completed", "مكتمل"), L("Under review", "قيد المراجعة"), L("Needs follow-up", "يحتاج متابعة")]}
                  value={editDraft.status}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, status: e.target.value } : d))}
                />
              </Field>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete confirmation */}
      <Modal
        open={deleteIndex !== null}
        onClose={() => setDeleteIndex(null)}
        title={L("Delete assessment?", "حذف التقييم؟")}
        {...(deleteIndex !== null ? { subtitle: pat(items[deleteIndex]!.patient).name } : {})}
        footer={
          <>
            <Button variant="outline" onClick={() => setDeleteIndex(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                if (deleteIndex === null) return;
                setItems((s) => s.filter((_, i) => i !== deleteIndex));
                setDeleteIndex(null);
                toast.push("success", L("Assessment deleted", "تم حذف التقييم"));
              }}
            >
              {t(L("Delete", "حذف"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t(L("This will permanently remove the assessment result. This action cannot be undone.", "سيؤدي هذا إلى حذف نتيجة التقييم نهائياً. لا يمكن التراجع عن هذا الإجراء."))}
        </p>
      </Modal>
    </div>
  );
}
