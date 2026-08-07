import { useMemo, useState } from "react";
import { BrandPlate } from "@/components/rehlah/brand";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  Badge,
  Button,
  Card,
  Field,
  Input,
  ProgressBar,
  Select,
  Textarea,
} from "@/components/rehlah/primitives";
import { ChartCard, KeyValue, Line1, Modal, PageHeader, StatCard, Tabs } from "@/components/rehlah/blocks";
import { DataGrid } from "@/components/rehlah/datagrid";
import { useToast } from "@/components/rehlah/toast";
import { doc, spec } from "@/lib/rehlah-data";
import { downloadCsv } from "@/lib/module-state";
import {
  assessmentTrend,
  portalAppointments,
  portalAssessments,
  portalInvoices,
  portalNotifications,
  portalPlans,
  portalReports,
  portalSlots,
  type PortalAppointment,
  type PortalAssessment,
  type PortalPlan,
} from "@/lib/portal-data";
import {
  PortalConsents,
  PortalDocuments,
  PortalInvoices,
  PortalNotifications,
  PortalProfile,
  PortalProgressRing,
  PortalSettings,
  PortalSickLeave,
  ProgressList,
  portalTone,
} from "./portal-modules";
import {
  Activity,
  Bell,
  CalendarDays,
  CalendarPlus,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Download,
  FileText,
  Gauge,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Receipt,
  Settings,
  ShieldCheck,
  Stethoscope,
  User,
  X,
} from "lucide-react";

const CHILD = L("Sara Al-Otaibi", "سارة العتيبي");
const GUARDIAN = L("Mohammed Al-Otaibi", "محمد العتيبي");

type PageId =
  | "home" | "appointments" | "plan" | "assessments" | "reports" | "documents"
  | "invoices" | "consents" | "sickleave" | "messages" | "notifications" | "profile" | "settings";

const NAV: { group: Loc; items: { id: PageId; label: Loc; icon: React.ReactNode }[] }[] = [
  {
    group: L("Care", "الرعاية"),
    items: [
      { id: "home", label: L("Home", "الرئيسية"), icon: <Home className="size-4" aria-hidden /> },
      { id: "appointments", label: L("Appointments", "المواعيد"), icon: <CalendarDays className="size-4" aria-hidden /> },
      { id: "plan", label: L("Treatment plans", "الخطط العلاجية"), icon: <Stethoscope className="size-4" aria-hidden /> },
      { id: "assessments", label: L("Assessments", "التقييمات"), icon: <ClipboardList className="size-4" aria-hidden /> },
      { id: "reports", label: L("Reports & progress", "التقارير والتقدم"), icon: <Gauge className="size-4" aria-hidden /> },
    ],
  },
  {
    group: L("Records", "السجلات"),
    items: [
      { id: "documents", label: L("Documents", "المستندات"), icon: <FileText className="size-4" aria-hidden /> },
      { id: "consents", label: L("Consents", "الموافقات"), icon: <ShieldCheck className="size-4" aria-hidden /> },
      { id: "sickleave", label: L("Sick leave", "الإجازات المرضية"), icon: <Activity className="size-4" aria-hidden /> },
      { id: "invoices", label: L("Invoices & payments", "الفواتير والمدفوعات"), icon: <Receipt className="size-4" aria-hidden /> },
    ],
  },
  {
    group: L("Account", "الحساب"),
    items: [
      { id: "messages", label: L("Messages", "الرسائل"), icon: <MessageSquare className="size-4" aria-hidden /> },
      { id: "notifications", label: L("Notifications", "الإشعارات"), icon: <Bell className="size-4" aria-hidden /> },
      { id: "profile", label: L("Profile", "الملف الشخصي"), icon: <User className="size-4" aria-hidden /> },
      { id: "settings", label: L("Settings", "الإعدادات"), icon: <Settings className="size-4" aria-hidden /> },
    ],
  },
];

const labelOf = (id: PageId): Loc =>
  NAV.flatMap((g) => g.items).find((i) => i.id === id)?.label ?? L("Home", "الرئيسية");

export function PatientPortal() {
  const { t } = useI18n();
  const [page, setPage] = useState<PageId>("home");
  const [navOpen, setNavOpen] = useState(false);
  const unread = portalNotifications.filter((n) => n.unread).length;

  const go = (id: PageId) => {
    setPage(id);
    setNavOpen(false);
  };

  return (
    <div className="min-h-[70vh] bg-[var(--background)]">
      <div className="mx-auto flex w-full max-w-[1600px] gap-6 px-4 py-6 sm:px-6">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <nav
            aria-label={t(L("Portal navigation", "تنقل البوابة"))}
            className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]"
          >
            <SidebarBody page={page} go={go} unread={unread} />
          </nav>
        </aside>

        {/* Mobile drawer */}
        {navOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button className="absolute inset-0 bg-foreground/30" aria-label={t(L("Close menu", "إغلاق القائمة"))} onClick={() => setNavOpen(false)} />
            <nav aria-label={t(L("Portal navigation", "تنقل البوابة"))} className="animate-in-soft absolute inset-y-0 start-0 w-72 overflow-y-auto border-e border-border bg-surface p-4 shadow-[var(--shadow-card)]">
              <div className="mb-3 flex justify-end">
                <Button variant="ghost" size="sm" aria-label={t(L("Close menu", "إغلاق القائمة"))} onClick={() => setNavOpen(false)}>
                  <X className="size-4" aria-hidden />
                </Button>
              </div>
              <SidebarBody page={page} go={go} unread={unread} />
            </nav>
          </div>
        )}

        <main className="min-w-0 flex-1 space-y-5">
          <div className="flex items-center gap-3 rounded-3xl border border-border bg-surface p-3 shadow-[var(--shadow-soft)] lg:hidden">
            <button
              onClick={() => setNavOpen(true)}
              aria-label={t(L("Open menu", "فتح القائمة"))}
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-border"
            >
              <Menu className="size-4" aria-hidden />
            </button>
            <span className="truncate text-sm font-semibold">{t(labelOf(page))}</span>
          </div>

          <div className="min-w-0">
            <nav aria-label={t(L("Breadcrumb", "مسار التنقل"))} className="mb-4 hidden items-center gap-1.5 px-1 text-xs text-muted-foreground lg:flex">
              <span>{t(L("Patient portal", "بوابة المريض"))}</span>
              <ChevronRight className="size-3 rtl:rotate-180" aria-hidden />
              <span className="font-medium text-foreground">{t(labelOf(page))}</span>
            </nav>

            {page === "home" && <PortalHome go={go} />}
            {page === "appointments" && <PortalAppointments />}
            {page === "plan" && <PortalPlans />}
            {page === "assessments" && <PortalAssessments />}
            {page === "reports" && <PortalReports />}
            {page === "documents" && <PortalDocuments />}
            {page === "consents" && <PortalConsents />}
            {page === "sickleave" && <PortalSickLeave />}
            {page === "invoices" && <PortalInvoices />}
            {page === "messages" && <PortalMessages />}
            {page === "notifications" && <PortalNotifications />}
            {page === "profile" && <PortalProfile childName={t(CHILD)} />}
            {page === "settings" && <PortalSettings />}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarBody({ page, go, unread }: { page: PageId; go: (p: PageId) => void; unread: number }) {
  const { t } = useI18n();
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2.5 px-1">
        <BrandPlate className="size-9" />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{t(CHILD)}</p>
          <p className="truncate text-[11px] text-muted-foreground">{t(L("File RH-10241", "ملف RH-10241"))}</p>
        </div>
      </div>

      <div className="rounded-xl bg-tint-green px-3 py-2.5">
        <p className="text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
          {t(L("Guardian", "ولي الأمر"))}
        </p>
        <p className="mt-0.5 truncate text-[13px] font-semibold text-[var(--primary-deep)]">{t(GUARDIAN)}</p>
      </div>

      <div className="space-y-6">
      {NAV.map((group) => (
        <div key={group.group.en} className="space-y-1">
          <p className="px-3 pb-1 text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase">{t(group.group)}</p>
          {group.items.map((item) => {
            const active = page === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-[13px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                  active
                    ? "bg-tint-green text-[var(--primary-deep)] shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "absolute start-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-e-full bg-primary transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />
                <span className="shrink-0">{item.icon}</span>
                <span className="min-w-0 flex-1 truncate">{t(item.label)}</span>
                {item.id === "notifications" && unread > 0 && (
                  <span className="shrink-0 rounded-full bg-primary px-1.5 py-0.5 text-[11px] text-primary-foreground">{unread}</span>
                )}
              </button>
            );
          })}
        </div>
      ))}
      </div>

      <Button variant="ghost" className="w-full justify-start">
        <LogOut className="size-4 rtl:rotate-180" aria-hidden /> {t(L("Sign out", "تسجيل الخروج"))}
      </Button>
    </div>
  );
}

/* ============================ HOME ============================ */

function PortalHome({ go }: { go: (p: PageId) => void }) {
  const { t } = useI18n();
  const next = portalAppointments.find((a) => a.upcoming)!;
  const plan = portalPlans[0]!;
  const due = portalInvoices.reduce((s, i) => s + (i.total - i.paid), 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title={L(`Welcome back, Mohammed`, "أهلاً بعودتك، محمد")}
        description={L("Here is Sara's care summary for this week", "هذا ملخص رعاية سارة لهذا الأسبوع")}
        actions={<Button onClick={() => go("appointments")}><CalendarPlus className="size-4" aria-hidden /> {t(L("Book appointment", "حجز موعد"))}</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Next session", "الجلسة القادمة")} value={`${next.date} · ${next.time}`} icon={<CalendarDays className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Plan progress", "تقدم الخطة")} value={`${plan.progress}%`} change="+6%" icon={<Gauge className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Sessions completed", "الجلسات المكتملة")} value={plan.sessions} icon={<Stethoscope className="size-5" aria-hidden />} tint="purple" />
        <StatCard label={L("Outstanding balance", "الرصيد المستحق")} value={`${due.toLocaleString()} SAR`} icon={<CreditCard className="size-5" aria-hidden />} tint="yellow" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 space-y-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold">{t(L("Upcoming appointments", "المواعيد القادمة"))}</h2>
            <Button variant="ghost" size="sm" onClick={() => go("appointments")}>{t(L("View all", "عرض الكل"))}</Button>
          </div>
          <ul className="space-y-3">
            {portalAppointments.filter((a) => a.upcoming).map((a) => (
              <li key={a.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]">
                  <CalendarDays className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{t(a.type)} · {t(spec(a.specialty))}</span>
                  <span className="block truncate text-xs text-muted-foreground">{a.date} · {a.time} · {t(doc(a.specialist))}</span>
                </span>
                <Badge tone={portalTone(a.status.en)}>{t(a.status)}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-base font-semibold">{t(L("Overall progress", "التقدم العام"))}</h2>
          <PortalProgressRing value={plan.progress} />
          <p className="text-sm text-muted-foreground">{t(plan.title)}</p>
          <Button variant="outline" size="sm" onClick={() => go("plan")}>{t(L("View plan", "عرض الخطة"))}</Button>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard
          title={L("Assessment score trend", "اتجاه درجات التقييم")}
          subtitle={L("Last 7 months", "آخر ٧ أشهر")}
          summary={t(L("Assessment scores improved from 66 to 82 over seven months.", "تحسنت درجات التقييم من ٦٦ إلى ٨٢ خلال سبعة أشهر."))}
        >
          <Line1 data={assessmentTrend} x="period" y="score" />
        </ChartCard>
        <Card className="space-y-5">
          <h2 className="text-base font-semibold">{t(L("Goal progress", "تقدم الأهداف"))}</h2>
          <ProgressList items={plan.goals.map((g) => ({ label: g.goal, value: g.progress }))} />
        </Card>
      </div>

      <Card className="space-y-4">
        <h2 className="text-base font-semibold">{t(L("Quick actions", "إجراءات سريعة"))}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {([
            { id: "invoices" as PageId, label: L("Pay an invoice", "دفع فاتورة"), icon: <Receipt className="size-4" aria-hidden /> },
            { id: "consents" as PageId, label: L("Sign a consent", "توقيع موافقة"), icon: <ShieldCheck className="size-4" aria-hidden /> },
            { id: "documents" as PageId, label: L("Upload a document", "رفع مستند"), icon: <FileText className="size-4" aria-hidden /> },
            { id: "messages" as PageId, label: L("Message the team", "مراسلة الفريق"), icon: <MessageSquare className="size-4" aria-hidden /> },
          ]).map((q) => (
            <button
              key={q.id}
              onClick={() => go(q.id)}
              className="flex items-center gap-3 rounded-2xl border border-border p-4 text-start text-sm font-medium transition-colors hover:bg-muted/60"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]">{q.icon}</span>
              <span className="min-w-0 truncate">{t(q.label)}</span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ============================ APPOINTMENTS ============================ */

function PortalAppointments() {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("upcoming");
  const [book, setBook] = useState(false);
  const [step, setStep] = useState(1);
  const [slot, setSlot] = useState<string | null>(null);
  const [view, setView] = useState<PortalAppointment | null>(null);
  const [reschedule, setReschedule] = useState<PortalAppointment | null>(null);
  const [cancel, setCancel] = useState<PortalAppointment | null>(null);
  const [list, setList] = useState(portalAppointments);

  const rows = useMemo(() => list.filter((a) => (tab === "upcoming" ? a.upcoming : !a.upcoming)), [list, tab]);

  const confirmBooking = () => {
    setBook(false);
    setStep(1);
    setSlot(null);
    toast.push("success", L("Appointment request submitted", "تم إرسال طلب الموعد"));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Appointments", "المواعيد")}
        description={L("Book, reschedule and review every visit", "احجز وأعد الجدولة وراجع كل زيارة")}
        actions={<Button onClick={() => { setBook(true); setStep(1); }}><CalendarPlus className="size-4" aria-hidden /> {t(L("Book appointment", "حجز موعد"))}</Button>}
      />
      <Tabs
        label={t(L("Appointment filters", "تصفية المواعيد"))}
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "upcoming", label: L("Upcoming", "القادمة"), count: list.filter((a) => a.upcoming).length },
          { id: "history", label: L("History", "السجل"), count: list.filter((a) => !a.upcoming).length },
        ]}
      />
      <DataGrid
        caption={L("Appointments", "المواعيد")}
        rows={rows}
        rowKey={(a) => a.id}
        exportName="rehlah-portal-appointments"
        search={(a) => `${a.id} ${a.type.en} ${a.type.ar}`}
        searchPlaceholder={L("Search appointments", "بحث في المواعيد")}
        filters={[
          {
            id: "status", label: L("Status", "الحالة"),
            options: [
              { value: "Confirmed", label: L("Confirmed", "مؤكد") },
              { value: "Pending", label: L("Pending", "قيد الانتظار") },
              { value: "Present", label: L("Attended", "حضر") },
              { value: "Cancelled", label: L("Cancelled", "ملغي") },
            ],
            match: (a, v) => a.status.en === v,
          },
        ]}
        columns={[
          { id: "date", header: L("Date", "التاريخ"), sort: (a) => a.iso, csv: (a) => a.date, cell: (a) => <span className="font-medium">{a.date}</span> },
          { id: "time", header: L("Time", "الوقت"), csv: (a) => a.time, cell: (a) => a.time },
          { id: "type", header: L("Type", "النوع"), csv: (a) => a.type.en, hideBelow: "md", cell: (a) => t(a.type) },
          { id: "specialty", header: L("Specialty", "التخصص"), csv: (a) => spec(a.specialty).en, hideBelow: "lg", cell: (a) => t(spec(a.specialty)) },
          { id: "specialist", header: L("Specialist", "الأخصائي"), csv: (a) => doc(a.specialist).en, hideBelow: "lg", cell: (a) => t(doc(a.specialist)) },
          { id: "status", header: L("Status", "الحالة"), csv: (a) => a.status.en, cell: (a) => <Badge tone={portalTone(a.status.en)}>{t(a.status)}</Badge> },
          {
            id: "actions", header: L("Actions", "إجراءات"), align: "end",
            cell: (a) => (
              <span className="flex justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => setView(a)}>{t(L("Details", "التفاصيل"))}</Button>
                {a.upcoming && <Button size="sm" variant="ghost" onClick={() => setReschedule(a)}>{t(L("Reschedule", "إعادة جدولة"))}</Button>}
                {a.upcoming && <Button size="sm" variant="ghost" onClick={() => setCancel(a)}>{t(L("Cancel", "إلغاء"))}</Button>}
              </span>
            ),
          },
        ]}
        emptyTitle={L("No appointments", "لا توجد مواعيد")}
        emptyDescription={L("Book a session to get started.", "احجز جلسة للبدء.")}
        emptyAction={<Button onClick={() => setBook(true)}>{t(L("Book appointment", "حجز موعد"))}</Button>}
      />

      {/* Booking wizard */}
      <Modal
        open={book}
        onClose={() => setBook(false)}
        size="lg"
        title={L("Book an appointment", "حجز موعد")}
        subtitle={L(`Step ${step} of 3`, `الخطوة ${step} من ٣`)}
        footer={
          <>
            <Button variant="outline" onClick={() => (step === 1 ? setBook(false) : setStep(step - 1))}>
              {t(step === 1 ? L("Cancel", "إلغاء") : L("Back", "رجوع"))}
            </Button>
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)} disabled={step === 2 && !slot}>{t(L("Continue", "متابعة"))}</Button>
            ) : (
              <Button onClick={confirmBooking}>{t(L("Confirm booking", "تأكيد الحجز"))}</Button>
            )}
          </>
        }
      >
        <div className="space-y-5">
          <ol className="flex items-center gap-2" aria-label={t(L("Booking steps", "خطوات الحجز"))}>
            {[L("Service", "الخدمة"), L("Date & time", "التاريخ والوقت"), L("Confirm", "التأكيد")].map((s, i) => (
              <li key={i} className="flex min-w-0 flex-1 items-center gap-2">
                <span className={cn("grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold", i + 1 <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>{i + 1}</span>
                <span className="min-w-0 truncate text-xs font-medium">{t(s)}</span>
              </li>
            ))}
          </ol>

          {step === 1 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={L("Specialty", "التخصص")} required>
                <Select options={[spec(2), spec(1), spec(0), spec(3)]} />
              </Field>
              <Field label={L("Specialist", "الأخصائي")}>
                <Select options={[L("Any available", "أي متاح"), doc(0), doc(2)]} />
              </Field>
              <Field label={L("Session type", "نوع الجلسة")}>
                <Select options={[L("Individual session", "جلسة فردية"), L("Assessment", "تقييم"), L("Consultation", "استشارة")]} />
              </Field>
              <Field label={L("Branch", "الفرع")}>
                <Select options={[L("Riyadh centre", "مركز الرياض"), L("Jeddah centre", "مركز جدة")]} />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <Field label={L("Preferred date", "التاريخ المفضل")} required>
                <Input type="date" defaultValue="2026-09-02" />
              </Field>
              <fieldset>
                <legend className="mb-2 text-sm font-medium">{t(L("Available times", "الأوقات المتاحة"))}</legend>
                <div className="flex flex-wrap gap-2">
                  {portalSlots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      aria-pressed={slot === s}
                      className={cn(
                        "min-h-11 rounded-xl border px-4 text-sm font-medium transition-colors",
                        slot === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <KeyValue
                items={[
                  { k: L("Patient", "المريض"), v: t(CHILD) },
                  { k: L("Specialty", "التخصص"), v: t(spec(2)) },
                  { k: L("Date", "التاريخ"), v: "02 Sep 2026" },
                  { k: L("Time", "الوقت"), v: slot ?? "—" },
                ]}
              />
              <Field label={L("Notes for the team", "ملاحظات للفريق")}>
                <Textarea rows={3} placeholder={t(L("Anything the specialist should know?", "هل هناك ما يجب أن يعرفه الأخصائي؟"))} />
              </Field>
            </div>
          )}
        </div>
      </Modal>

      <Modal open={!!view} onClose={() => setView(null)} title={L("Appointment details", "تفاصيل الموعد")} subtitle={view?.id}
        footer={<Button variant="outline" onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>}>
        {view && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Date", "التاريخ"), v: view.date },
                { k: L("Time", "الوقت"), v: view.time },
                { k: L("Type", "النوع"), v: t(view.type) },
                { k: L("Specialty", "التخصص"), v: t(spec(view.specialty)) },
                { k: L("Specialist", "الأخصائي"), v: t(doc(view.specialist)) },
                { k: L("Location", "الموقع"), v: t(view.location) },
                { k: L("Status", "الحالة"), v: <Badge tone={portalTone(view.status.en)}>{t(view.status)}</Badge> },
              ]}
            />
            <p className="rounded-2xl border border-border bg-muted/40 p-4 text-sm">{t(view.notes)}</p>
          </div>
        )}
      </Modal>

      <Modal open={!!reschedule} onClose={() => setReschedule(null)} title={L("Reschedule appointment", "إعادة جدولة الموعد")} subtitle={reschedule?.id}
        footer={
          <>
            <Button variant="outline" onClick={() => setReschedule(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={() => { setReschedule(null); toast.push("success", L("Reschedule request sent", "تم إرسال طلب إعادة الجدولة")); }}>{t(L("Send request", "إرسال الطلب"))}</Button>
          </>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={L("New date", "التاريخ الجديد")} required><Input type="date" defaultValue="2026-09-09" /></Field>
          <Field label={L("New time", "الوقت الجديد")} required><Select options={portalSlots.map((s) => L(s, s))} /></Field>
          <div className="sm:col-span-2">
            <Field label={L("Reason", "السبب")}><Textarea rows={3} placeholder={t(L("Why are you rescheduling?", "لماذا تعيد الجدولة؟"))} /></Field>
          </div>
        </div>
      </Modal>

      <Modal open={!!cancel} onClose={() => setCancel(null)} title={L("Cancel appointment", "إلغاء الموعد")} subtitle={cancel?.id}
        footer={
          <>
            <Button variant="outline" onClick={() => setCancel(null)}>{t(L("Keep appointment", "الاحتفاظ بالموعد"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                setList((s) => s.map((a) => (a.id === cancel?.id ? { ...a, status: L("Cancelled", "ملغي"), upcoming: false } : a)));
                setCancel(null);
                toast.push("success", L("Appointment cancelled", "تم إلغاء الموعد"));
              }}
            >
              {t(L("Cancel appointment", "إلغاء الموعد"))}
            </Button>
          </>
        }
      >
        <div className="space-y-5">
          <p className="text-sm text-muted-foreground">
            {t(L("Cancellations within 24 hours of the session may be charged.", "قد يتم احتساب رسوم على الإلغاء خلال ٢٤ ساعة من الجلسة."))}
          </p>
          <Field label={L("Reason for cancellation", "سبب الإلغاء")} required>
            <Select options={[L("Illness", "مرض"), L("Travel", "سفر"), L("Schedule conflict", "تعارض المواعيد"), L("Other", "أخرى")]} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}

/* ============================ TREATMENT PLANS ============================ */

function PortalPlans() {
  const { t } = useI18n();
  const toast = useToast();
  const [active, setActive] = useState<PortalPlan>(portalPlans[0]!);

  return (
    <div className="space-y-6">
      <PageHeader title={L("Treatment plans", "الخطط العلاجية")} description={L("Goals, progress and the home programme", "الأهداف والتقدم والبرنامج المنزلي")} />
      <div className="flex flex-wrap gap-2">
        {portalPlans.map((p) => (
          <Button key={p.id} variant={active.id === p.id ? "primary" : "outline"} onClick={() => setActive(p)} aria-pressed={active.id === p.id}>
            {t(p.title)}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base font-semibold">{t(active.title)}</h2>
            <Badge tone={portalTone(active.status.en)}>{t(active.status)}</Badge>
          </div>
          <KeyValue
            items={[
              { k: L("Specialty", "التخصص"), v: t(spec(active.specialty)) },
              { k: L("Specialist", "الأخصائي"), v: t(doc(active.specialist)) },
              { k: L("Start date", "تاريخ البدء"), v: active.start },
              { k: L("End date", "تاريخ الانتهاء"), v: active.end },
              { k: L("Sessions", "الجلسات"), v: active.sessions },
              { k: L("Frequency", "التكرار"), v: t(active.frequency) },
            ]}
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{t(L("Overall progress", "التقدم العام"))}</span>
              <span className="tabular-nums text-muted-foreground">{active.progress}%</span>
            </div>
            <ProgressBar value={active.progress} />
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-base font-semibold">{t(L("Completion", "الإنجاز"))}</h2>
          <PortalProgressRing value={active.progress} />
          <Button variant="outline" size="sm" onClick={() => toast.push("success", L("Plan summary downloaded", "تم تنزيل ملخص الخطة"))}>
            <Download className="size-4" aria-hidden /> {t(L("Download plan", "تنزيل الخطة"))}
          </Button>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-5">
          <h2 className="text-base font-semibold">{t(L("Goals", "الأهداف"))}</h2>
          <div className="space-y-5">
            {active.goals.map((g, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span className="min-w-0">
                    <span className="block font-medium">{t(g.goal)}</span>
                    <span className="block text-xs text-muted-foreground">{t(L("Target", "الهدف"))}: {t(g.target)}</span>
                  </span>
                  <span className="shrink-0 tabular-nums text-muted-foreground">{g.progress}%</span>
                </div>
                <ProgressBar value={g.progress} />
              </div>
            ))}
          </div>
        </Card>
        <Card className="space-y-4">
          <h2 className="text-base font-semibold">{t(L("Home programme", "البرنامج المنزلي"))}</h2>
          <ul className="space-y-3">
            {active.homeProgramme.map((h, i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl border border-border p-4 text-sm">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-tint-green text-[11px] font-bold text-[var(--primary-deep)]">{i + 1}</span>
                <span className="min-w-0">{t(h)}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

/* ============================ ASSESSMENTS ============================ */

function PortalAssessments() {
  const { t } = useI18n();
  const [view, setView] = useState<PortalAssessment | null>(null);

  return (
    <div className="space-y-6">
      <PageHeader title={L("Assessments", "التقييمات")} description={L("Clinical assessment results and score history", "نتائج التقييمات السريرية وسجل الدرجات")} />
      <ChartCard
        title={L("Score progression", "تطور الدرجات")}
        subtitle={L("Composite score across all domains", "الدرجة المجمعة لكل المجالات")}
        summary={t(L("Composite assessment score rose steadily from 66 to 82.", "ارتفعت الدرجة المجمعة بثبات من ٦٦ إلى ٨٢."))}
      >
        <Line1 data={assessmentTrend} x="period" y="score" />
      </ChartCard>
      <DataGrid
        caption={L("Assessments", "التقييمات")}
        rows={portalAssessments}
        rowKey={(a) => a.id}
        exportName="rehlah-portal-assessments"
        search={(a) => `${a.id} ${a.name.en} ${a.name.ar}`}
        searchPlaceholder={L("Search assessments", "بحث في التقييمات")}
        columns={[
          { id: "name", header: L("Assessment", "التقييم"), sort: (a) => a.name.en, csv: (a) => a.name.en, cell: (a) => <span className="font-medium">{t(a.name)}</span> },
          { id: "date", header: L("Date", "التاريخ"), sort: (a) => a.date, csv: (a) => a.date, cell: (a) => a.date },
          { id: "specialist", header: L("Specialist", "الأخصائي"), csv: (a) => doc(a.specialist).en, hideBelow: "lg", cell: (a) => t(doc(a.specialist)) },
          { id: "score", header: L("Score", "الدرجة"), sort: (a) => a.score, csv: (a) => String(a.score), cell: (a) => (
            <span className="flex items-center gap-2">
              <span className="font-semibold tabular-nums">{a.score}</span>
              {a.previous > 0 && <Badge tone="success">+{a.score - a.previous}</Badge>}
            </span>
          ) },
          { id: "status", header: L("Status", "الحالة"), csv: (a) => a.status.en, hideBelow: "md", cell: (a) => <Badge tone={portalTone(a.status.en)}>{t(a.status)}</Badge> },
          { id: "actions", header: L("Actions", "إجراءات"), align: "end", cell: (a) => (
            <span className="flex justify-end"><Button size="sm" variant="outline" onClick={() => setView(a)}>{t(L("View results", "عرض النتائج"))}</Button></span>
          ) },
        ]}
        emptyTitle={L("No assessments", "لا توجد تقييمات")}
        emptyDescription={L("Completed assessments will appear here.", "ستظهر هنا التقييمات المكتملة.")}
      />

      <Modal open={!!view} onClose={() => setView(null)} size="lg" title={view ? view.name : ""} subtitle={view?.date}
        footer={<Button variant="outline" onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>}>
        {view && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Specialist", "الأخصائي"), v: t(doc(view.specialist)) },
                { k: L("Composite score", "الدرجة المجمعة"), v: `${view.score} / 100` },
                { k: L("Previous score", "الدرجة السابقة"), v: view.previous || "—" },
                { k: L("Status", "الحالة"), v: <Badge tone={portalTone(view.status.en)}>{t(view.status)}</Badge> },
              ]}
            />
            <ProgressList items={view.domains.map((d) => ({ label: d.name, value: d.score }))} />
            <p className="rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed">{t(view.summary)}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

/* ============================ REPORTS ============================ */

function PortalReports() {
  const { t } = useI18n();
  const toast = useToast();
  const plan = portalPlans[0]!;

  return (
    <div className="space-y-6">
      <PageHeader title={L("Reports & progress", "التقارير والتقدم")} description={L("Periodic clinical reports shared by the care team", "التقارير السريرية الدورية من فريق الرعاية")} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard
          title={L("Progress over time", "التقدم عبر الوقت")}
          subtitle={L("Composite score", "الدرجة المجمعة")}
          summary={t(L("Progress trend rising month over month.", "اتجاه التقدم يرتفع شهراً بعد شهر."))}
        >
          <Line1 data={assessmentTrend} x="period" y="score" />
        </ChartCard>
        <Card className="space-y-5">
          <h2 className="text-base font-semibold">{t(L("Current goal attainment", "تحقيق الأهداف الحالية"))}</h2>
          <ProgressList items={plan.goals.map((g) => ({ label: g.goal, value: g.progress }))} />
        </Card>
      </div>
      <DataGrid
        caption={L("Reports", "التقارير")}
        rows={portalReports}
        rowKey={(r) => r.id}
        exportName="rehlah-portal-reports"
        search={(r) => `${r.name.en} ${r.name.ar}`}
        searchPlaceholder={L("Search reports", "بحث في التقارير")}
        columns={[
          { id: "name", header: L("Report", "التقرير"), sort: (r) => r.name.en, csv: (r) => r.name.en, cell: (r) => <span className="font-medium">{t(r.name)}</span> },
          { id: "period", header: L("Period", "الفترة"), csv: (r) => r.period.en, cell: (r) => t(r.period) },
          { id: "date", header: L("Issued", "تاريخ الإصدار"), sort: (r) => r.date, csv: (r) => r.date, hideBelow: "md", cell: (r) => r.date },
          { id: "specialist", header: L("Specialist", "الأخصائي"), csv: (r) => doc(r.specialist).en, hideBelow: "lg", cell: (r) => t(doc(r.specialist)) },
          { id: "type", header: L("Type", "النوع"), csv: (r) => r.type.en, cell: (r) => <Badge tone="info">{t(r.type)}</Badge> },
          { id: "actions", header: L("Actions", "إجراءات"), align: "end", cell: (r) => (
            <span className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  downloadCsv(
                    `rehlah-report-${r.id}`,
                    [t(L("Report", "التقرير")), t(L("Period", "الفترة")), t(L("Issued", "تاريخ الإصدار")), t(L("Specialist", "الأخصائي"))],
                    [[t(r.name), t(r.period), r.date, t(doc(r.specialist))]],
                  );
                  toast.push("success", L("Report downloaded", "تم تنزيل التقرير"));
                }}
              >
                <Download className="size-4" aria-hidden /> {t(L("Download", "تنزيل"))}
              </Button>
            </span>
          ) },
        ]}
        emptyTitle={L("No reports yet", "لا توجد تقارير")}
        emptyDescription={L("Progress reports will be published here monthly.", "ستُنشر تقارير التقدم هنا شهرياً.")}
      />
    </div>
  );
}

/* ============================ MESSAGES ============================ */

type Msg = { id: number; from: "me" | "team"; author: Loc; body: Loc; time: Loc };

const THREADS: { id: string; title: Loc; with: Loc; messages: Msg[] }[] = [
  {
    id: "TH-1",
    title: L("Speech therapy — Sara", "علاج النطق — سارة"),
    with: L("Dr. Layla Al-Harbi", "د. ليلى الحربي"),
    messages: [
      { id: 1, from: "team", author: L("Dr. Layla Al-Harbi", "د. ليلى الحربي"), body: L("Sara did really well today — please keep the /s/ cards going at home.", "أبلت سارة بلاءً حسناً اليوم — يرجى الاستمرار في بطاقات حرف السين بالمنزل."), time: L("Yesterday 14:20", "أمس ١٤:٢٠") },
      { id: 2, from: "me", author: GUARDIAN, body: L("Thank you. We practise every evening after dinner.", "شكراً لك. نتمرن كل مساء بعد العشاء."), time: L("Yesterday 18:05", "أمس ١٨:٠٥") },
    ],
  },
  {
    id: "TH-2",
    title: L("Billing enquiry", "استفسار عن الفواتير"),
    with: L("Accounts team", "قسم الحسابات"),
    messages: [
      { id: 1, from: "me", author: GUARDIAN, body: L("Could you confirm the insurance coverage for August?", "هل يمكن تأكيد تغطية التأمين لشهر أغسطس؟"), time: L("2 days ago", "قبل يومين") },
      { id: 2, from: "team", author: L("Accounts team", "قسم الحسابات"), body: L("Coverage is approved at 80% for 12 sessions.", "تمت الموافقة على تغطية ٨٠٪ لـ ١٢ جلسة."), time: L("2 days ago", "قبل يومين") },
    ],
  },
];

function PortalMessages() {
  const { t } = useI18n();
  const toast = useToast();
  const [threads, setThreads] = useState(THREADS);
  const [activeId, setActiveId] = useState(THREADS[0]!.id);
  const [draft, setDraft] = useState("");
  const active = threads.find((th) => th.id === activeId)!;

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setThreads((s) =>
      s.map((th) =>
        th.id === activeId
          ? { ...th, messages: [...th.messages, { id: th.messages.length + 1, from: "me" as const, author: GUARDIAN, body: L(draft.trim(), draft.trim()), time: L("Just now", "الآن") }] }
          : th,
      ),
    );
    setDraft("");
    toast.push("success", L("Message sent", "تم إرسال الرسالة"));
  };

  return (
    <div className="space-y-6">
      <PageHeader title={L("Messages", "الرسائل")} description={L("Secure conversations with your care team", "محادثات آمنة مع فريق الرعاية")} />
      <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Card className="space-y-2">
          <h2 className="px-1 pb-1 text-sm font-semibold">{t(L("Conversations", "المحادثات"))}</h2>
          <ul className="space-y-2">
            {threads.map((th) => (
              <li key={th.id}>
                <button
                  onClick={() => setActiveId(th.id)}
                  aria-current={th.id === activeId ? "true" : undefined}
                  className={cn("w-full rounded-2xl border p-3 text-start transition-colors", th.id === activeId ? "border-primary bg-tint-green" : "border-border hover:bg-muted/60")}
                >
                  <span className="block truncate text-sm font-medium">{t(th.title)}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t(th.with)}</span>
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex min-h-[420px] flex-col">
          <h2 className="border-b border-border pb-3 text-base font-semibold">{t(active.title)}</h2>
          <ul className="flex-1 space-y-4 overflow-y-auto py-4">
            {active.messages.map((m) => (
              <li key={m.id} className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[80%] rounded-2xl px-4 py-3 text-sm", m.from === "me" ? "bg-primary text-primary-foreground" : "bg-muted")}>
                  <p className="text-[11px] font-semibold opacity-80">{t(m.author)}</p>
                  <p className="mt-1 leading-relaxed">{t(m.body)}</p>
                  <p className="mt-1 text-[11px] opacity-70">{t(m.time)}</p>
                </div>
              </li>
            ))}
          </ul>
          <form className="flex items-end gap-2 border-t border-border pt-4" onSubmit={send}>
            <div className="min-w-0 flex-1">
              <Field label={L("Message", "الرسالة")}>
                <Textarea rows={2} value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t(L("Write a message…", "اكتب رسالة…"))} />
              </Field>
            </div>
            <Button type="submit">{t(L("Send", "إرسال"))}</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
