import { useEffect, useState } from "react";
import { BrandPlate } from "@/components/rehlah/brand";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  Badge,
  Button,
  Card,
  DataTable,
  Field,
  Input,
  ProgressBar,
  SearchBar,
  Select,
  Textarea,
  type Tone,
} from "@/components/rehlah/primitives";
import {
  Bars,
  ChartCard,
  Donut,
  KeyValue,
  Line1,
  PageHeader,
  StatCard,
  Tabs,
  Toolbar,
} from "@/components/rehlah/blocks";
import {
  ROLES,
  type RoleId,
  appointments,
  attendanceStatus,
  doc,
  invoices,
  notifications,
  pat,
  patients,
  payments,
  revenueMonthly,
  spec,
  specialtyDistribution,
  treatmentPlans,
  visits30,
} from "@/lib/rehlah-data";
import {
  DashboardModule,
  PatientRegistryModule,
  PatientProfileModule,
  Money,
  statusTone,
} from "./admin-modules";
import { SchedulingModule, CalendarModule, TreatmentPlansModule } from "./admin-modules-2";
import { AssessmentsModule } from "./admin-assessments";
import { ExecutiveDashboard } from "./admin-dashboard";
import { ToastProvider, useToast } from "@/components/rehlah/toast";
import {
  FormBuilderModule,
  ReferralsModule,
  DocumentsModule,
  ConsentsModule,
  SickLeaveModule,
  InvoicesModule,
  ReportsModule,
  AdministrationModule,
  PricingModule,
} from "./admin-modules-3";
import {
  Activity,
  Bell,
  BellRing,
  CalendarDays,
  CalendarClock,
  ClipboardList,
  CreditCard,
  FileSignature,
  FileText,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Menu,
  MessageSquare,
  Receipt,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Tags,
  Users,
  UserSquare2,
  Wallet,
  X,
  ChevronDown,
} from "lucide-react";

/* ------------------------- 16. Notifications hub ------------------------- */
function NotificationsModule() {
  const { t } = useI18n();
  const [tab, setTab] = useState("inbox");
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Notifications & communication", "الإشعارات والتواصل")}
        description={L(
          "Cross-cutting reminders, SMS/WhatsApp templates and delivery log",
          "التذكيرات وقوالب الرسائل وسجل الإرسال",
        )}
        actions={
          <Button>
            <Send className="size-4" aria-hidden />
            {t(L("New broadcast", "رسالة جماعية"))}
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Sent today", "أُرسلت اليوم")} value="418" change="+8.2%" icon={<Send className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Delivered", "تم التسليم")} value="97.4%" change="+0.6%" icon={<BellRing className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Unread in app", "غير مقروءة")} value="12" icon={<Bell className="size-5" aria-hidden />} tint="yellow" />
        <StatCard label={L("Templates", "القوالب")} value="24" icon={<MessageSquare className="size-5" aria-hidden />} tint="purple" />
      </div>
      <Tabs
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "inbox", label: L("Inbox", "الوارد"), count: notifications.length },
          { id: "templates", label: L("Templates", "القوالب") },
          { id: "rules", label: L("Reminder rules", "قواعد التذكير") },
        ]}
      />
      {tab === "inbox" && (
        <Card className="space-y-3">
          {notifications.map((n, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-2xl border border-border p-4",
                n.unread ? "bg-tint-green" : "bg-surface",
              )}
            >
              <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-xl bg-surface text-primary">
                <Bell className="size-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{t(n.title)}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{t(n.body)}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{t(n.time)}</span>
            </div>
          ))}
        </Card>
      )}
      {tab === "templates" && (
        <DataTable
          caption={L("Message templates", "قوالب الرسائل")}
          columns={[
            L("Template", "القالب"),
            L("Channel", "القناة"),
            L("Language", "اللغة"),
            L("Status", "الحالة"),
          ]}
          rows={[
            [t(L("Appointment reminder", "تذكير بالموعد")), "SMS", "EN / AR", <Badge key="a" tone="success">{t(L("Active", "نشط"))}</Badge>],
            [t(L("Invoice due", "استحقاق فاتورة")), "WhatsApp", "EN / AR", <Badge key="b" tone="success">{t(L("Active", "نشط"))}</Badge>],
            [t(L("Consent expiring", "انتهاء موافقة")), "Email", "EN / AR", <Badge key="c" tone="warning">{t(L("Draft", "مسودة"))}</Badge>],
            [t(L("Session cancelled", "إلغاء جلسة")), "Push", "EN / AR", <Badge key="d" tone="success">{t(L("Active", "نشط"))}</Badge>],
          ]}
        />
      )}
      {tab === "rules" && (
        <Card className="grid gap-5 sm:grid-cols-2">
          <Field label={L("Send appointment reminder", "إرسال تذكير الموعد")}>
            <Select options={[L("24 hours before", "قبل ٢٤ ساعة"), L("2 hours before", "قبل ساعتين")]} />
          </Field>
          <Field label={L("Channel", "القناة")}>
            <Select options={["SMS", "WhatsApp", "Email", L("Push", "إشعار")]} />
          </Field>
          <Field label={L("Invoice follow-up after", "متابعة الفاتورة بعد")}>
            <Select options={[L("3 days", "٣ أيام"), L("7 days", "٧ أيام")]} />
          </Field>
          <Field label={L("Quiet hours", "ساعات الصمت")}>
            <Input defaultValue="22:00 – 07:00" />
          </Field>
          <div className="sm:col-span-2">
            <Field label={L("Default message body", "نص الرسالة الافتراضي")}>
              <Textarea defaultValue={t(L("Reminder: your session at Rehlah is tomorrow.", "تذكير: جلستك في رحلة غداً."))} />
            </Field>
          </div>
        </Card>
      )}
    </div>
  );
}

/* --------------------- 17. Patient portal management --------------------- */
function PortalManagementModule() {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Patient portal management", "إدارة بوابة المريض")}
        description={L("Guardian accounts, access rights and portal activity", "حسابات أولياء الأمور والصلاحيات والنشاط")}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Portal accounts", "حسابات البوابة")} value="412" change="+5.1%" icon={<UserSquare2 className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Mobile app installs", "تثبيتات التطبيق")} value="286" change="+11.4%" icon={<Smartphone className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Pending invites", "دعوات معلقة")} value="18" icon={<Send className="size-5" aria-hidden />} tint="yellow" />
        <StatCard label={L("Weekly logins", "دخول أسبوعي")} value="1,204" change="+3.8%" icon={<Activity className="size-5" aria-hidden />} tint="purple" />
      </div>
      <Toolbar>
        <SearchBar placeholder={L("Search guardians", "بحث أولياء الأمور")} />
        <Button variant="outline">{t(L("Invite guardian", "دعوة ولي أمر"))}</Button>
      </Toolbar>
      <DataTable
        caption={L("Portal accounts", "حسابات البوابة")}
        columns={[
          L("Guardian", "ولي الأمر"),
          L("Linked patient", "المريض المرتبط"),
          L("Access", "الصلاحية"),
          L("Last login", "آخر دخول"),
          L("Status", "الحالة"),
        ]}
        rows={patients.slice(0, 6).map((p, i) => [
          <span key="g" className="font-medium">{t(p.name)}</span>,
          t(p.name),
          i % 2 === 0 ? t(L("Full", "كاملة")) : t(L("View only", "عرض فقط")),
          p.lastVisit,
          <Badge key="s" tone={i % 3 === 0 ? "warning" : "success"}>
            {i % 3 === 0 ? t(L("Invited", "مدعو")) : t(L("Active", "نشط"))}
          </Badge>,
        ])}
      />
    </div>
  );
}

/* ---------------------------- Role dashboards ---------------------------- */
type Nav = (id: string) => void;

function QuickLinks({
  items,
  onNavigate,
}: {
  items: { id: string; label: Loc; icon: React.ReactNode }[];
  onNavigate: Nav;
}) {
  const { t } = useI18n();
  return (
    <Card className="space-y-4">
      <h3 className="text-[15px] font-semibold">{t(L("Quick actions", "إجراءات سريعة"))}</h3>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((q, i) => (
          <button
            key={`${q.id}-${i}`}
            onClick={() => onNavigate(q.id)}
            className="flex min-h-11 items-center gap-3 rounded-2xl border border-border p-4 text-start text-sm font-medium transition-colors hover:bg-tint-green/70 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]">{q.icon}</span>
            <span className="min-w-0 truncate">{t(q.label)}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}

function SpecialistDashboard({ onNavigate }: { onNavigate: Nav }) {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Specialist dashboard", "لوحة الأخصائي")}
        description={L("Your caseload, today's sessions and pending notes", "حالاتك وجلسات اليوم والملاحظات المعلقة")}
        actions={
          <>
            <Button variant="outline" onClick={() => onNavigate("calendar")}>{t(L("My schedule", "جدولي"))}</Button>
            <Button onClick={() => onNavigate("plans")}>{t(L("Open treatment plans", "الخطط العلاجية"))}</Button>
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Today's sessions", "جلسات اليوم")} value="7" icon={<CalendarClock className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Active caseload", "الحالات النشطة")} value="23" change="+2" icon={<Stethoscope className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Notes pending", "ملاحظات معلقة")} value="4" icon={<ClipboardList className="size-5" aria-hidden />} tint="yellow" />
        <StatCard label={L("Goal achievement", "تحقيق الأهداف")} value="72%" change="+4.5%" icon={<Gauge className="size-5" aria-hidden />} tint="purple" />
      </div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Card className="space-y-4">
          <h3 className="text-[15px] font-semibold">{t(L("Today's schedule", "جدول اليوم"))}</h3>
          <div className="space-y-2">
            {appointments.map((a, i) => (
              <div key={i} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-3">
                <span className="rounded-xl bg-tint-green px-2.5 py-1 text-sm font-semibold text-[var(--primary-deep)] tabular-nums">{a.time}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{t(pat(a.patient).name)}</p>
                  <p className="truncate text-xs text-muted-foreground">{t(a.type)} · {t(spec(a.specialty))}</p>
                </div>
                <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-[15px] font-semibold">{t(L("Treatment goal progress", "تقدم الأهداف العلاجية"))}</h3>
          {treatmentPlans.map((p, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="truncate font-medium">{t(pat(p.patient).name)}</span>
                <span className="text-muted-foreground tabular-nums">{p.progress}%</span>
              </div>
              <ProgressBar value={p.progress} />
            </div>
          ))}
        </Card>
      </div>
      <QuickLinks
        onNavigate={onNavigate}
        items={[
          { id: "calendar", label: L("My schedule", "جدولي"), icon: <CalendarDays className="size-4" aria-hidden /> },
          { id: "registry", label: L("My patients", "مرضاي"), icon: <Users className="size-4" aria-hidden /> },
          { id: "assessments", label: L("Assessments", "التقييمات"), icon: <ListChecks className="size-4" aria-hidden /> },
          { id: "reports", label: L("Reports", "التقارير"), icon: <Gauge className="size-4" aria-hidden /> },
        ]}
      />
      <ChartCard
        title={L("Sessions delivered (30 days)", "الجلسات المنفذة (٣٠ يوماً)")}
        summary="Line chart of sessions delivered over the last 30 days"
      >
        <Line1 data={visits30} x="day" y="visits" />
      </ChartCard>
    </div>
  );
}

function ReceptionistDashboard({ onNavigate }: { onNavigate: Nav }) {
  const { t } = useI18n();
  const toast = useToast();
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Reception dashboard", "لوحة الاستقبال")}
        description={L("Check-ins, waiting list and today's arrivals", "تسجيل الحضور وقائمة الانتظار")}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Checked in", "تم الحضور")} value="18" icon={<ListChecks className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Waiting", "قيد الانتظار")} value="5" icon={<CalendarClock className="size-5" aria-hidden />} tint="yellow" />
        <StatCard label={L("No-shows", "لم يحضر")} value="2" icon={<X className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Calls handled", "المكالمات")} value="46" change="+9%" icon={<MessageSquare className="size-5" aria-hidden />} tint="purple" />
      </div>
      <Toolbar>
        <SearchBar placeholder={L("Search by file number or name", "بحث برقم الملف أو الاسم")} />
        <Button onClick={() => onNavigate("scheduling")}>{t(L("Quick booking", "حجز سريع"))}</Button>
        <Button variant="outline" onClick={() => onNavigate("registry")}>{t(L("Register patient", "تسجيل مريض"))}</Button>
      </Toolbar>
      <QuickLinks
        onNavigate={onNavigate}
        items={[
          { id: "registry", label: L("Patient registration", "تسجيل المرضى"), icon: <Users className="size-4" aria-hidden /> },
          { id: "scheduling", label: L("Scheduling", "الحجوزات"), icon: <CalendarClock className="size-4" aria-hidden /> },
          { id: "calendar", label: L("Calendar", "التقويم"), icon: <CalendarDays className="size-4" aria-hidden /> },
          { id: "invoices", label: L("Billing", "الفوترة"), icon: <Receipt className="size-4" aria-hidden /> },
        ]}
      />
      <DataTable
        caption={L("Today's arrivals", "حضور اليوم")}
        columns={[
          L("Time", "الوقت"),
          L("Patient", "المريض"),
          L("Specialist", "الأخصائي"),
          L("Status", "الحالة"),
          L("Action", "إجراء"),
        ]}
        rows={appointments.map((a) => [
          <span key="t" className="tabular-nums">{a.time}</span>,
          t(pat(a.patient).name),
          t(doc(a.specialist)),
          <Badge key="s" tone={statusTone(a.status.en)}>{t(a.status)}</Badge>,
          <Button key="b" size="sm" variant="outline" onClick={() => toast.push("success", L("Patient checked in", "تم تسجيل حضور المريض"))}>{t(L("Check in", "تسجيل حضور"))}</Button>,
        ])}
      />
    </div>
  );
}

function AccountantDashboard({ onNavigate }: { onNavigate: Nav }) {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Accounting dashboard", "لوحة المحاسبة")}
        description={L("Revenue, collections and outstanding balances", "الإيرادات والتحصيل والأرصدة المستحقة")}
        actions={<Button onClick={() => onNavigate("invoices")}>{t(L("Open invoices", "فتح الفواتير"))}</Button>}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Revenue this month", "إيراد الشهر")} value="311K SAR" change="+6.5%" icon={<Wallet className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Collected", "المحصّل")} value="284K SAR" change="+4.1%" icon={<CreditCard className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Outstanding", "المستحق")} value="27K SAR" change="-2.3%" icon={<Receipt className="size-5" aria-hidden />} tint="yellow" />
        <StatCard label={L("Unpaid invoices", "فواتير غير مدفوعة")} value="9" icon={<FileText className="size-5" aria-hidden />} tint="purple" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title={L("Monthly revenue (K SAR)", "الإيراد الشهري (ألف ريال)")} summary="Bar chart of monthly revenue">
          <Bars data={revenueMonthly} x="m" keys={["revenue"]} />
        </ChartCard>
        <ChartCard title={L("Attendance mix", "توزيع الحضور")} summary="Donut chart of attendance status distribution">
          <Donut data={attendanceStatus} />
        </ChartCard>
      </div>
      <QuickLinks
        onNavigate={onNavigate}
        items={[
          { id: "invoices", label: L("Invoices", "الفواتير"), icon: <Receipt className="size-4" aria-hidden /> },
          { id: "invoices", label: L("Payments", "المدفوعات"), icon: <CreditCard className="size-4" aria-hidden /> },
          { id: "pricing", label: L("Pricing & packages", "التسعير والباقات"), icon: <Tags className="size-4" aria-hidden /> },
          { id: "reports", label: L("Financial reports", "التقارير المالية"), icon: <Gauge className="size-4" aria-hidden /> },
        ]}
      />
      <DataTable
        caption={L("Latest transactions", "أحدث الحركات")}
        columns={[
          L("Transaction", "الحركة"),
          L("Date", "التاريخ"),
          L("Patient", "المريض"),
          L("Type", "النوع"),
          L("Amount", "المبلغ"),
          L("Method", "الوسيلة"),
        ]}
        rows={payments.map((p) => [
          <span key="x" className="font-medium">{p.txn}</span>,
          p.date,
          t(pat(p.patient).name),
          t(p.type),
          <Money key="m" v={p.amount} />,
          t(p.method),
        ])}
      />
    </div>
  );
}

function AssistantDashboard({ onNavigate }: { onNavigate: Nav }) {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Assistant dashboard", "لوحة المساعد")}
        description={L("Session preparation, rooms and equipment", "تجهيز الجلسات والغرف والأجهزة")}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={L("Rooms prepared", "غرف مجهزة")} value="6 / 8" icon={<ListChecks className="size-5" aria-hidden />} tint="green" />
        <StatCard label={L("Sessions supported", "جلسات مدعومة")} value="11" icon={<Stethoscope className="size-5" aria-hidden />} tint="blue" />
        <StatCard label={L("Equipment issues", "أعطال الأجهزة")} value="1" icon={<ShieldCheck className="size-5" aria-hidden />} tint="yellow" />
        <StatCard label={L("Documents uploaded", "مستندات مرفوعة")} value="14" icon={<FileText className="size-5" aria-hidden />} tint="purple" />
      </div>
      <Card className="space-y-3">
        <h3 className="text-[15px] font-semibold">{t(L("Preparation checklist", "قائمة التجهيز"))}</h3>
        {[
          L("Sensory room 2 — mats sanitised", "غرفة الحس ٢ — تعقيم الحصائر"),
          L("Gait trainer calibrated", "معايرة جهاز المشي"),
          L("Speech cards set for 08:30 session", "بطاقات النطق لجلسة ٨:٣٠"),
          L("Guardian waiting area restocked", "تجهيز منطقة انتظار أولياء الأمور"),
        ].map((item, i) => (
          <label key={i} className="flex items-center gap-3 rounded-2xl border border-border p-3 text-sm">
            <input type="checkbox" defaultChecked={i < 2} className="size-4 accent-[var(--primary)]" />
            <span>{t(item)}</span>
          </label>
        ))}
      </Card>
      <QuickLinks
        onNavigate={onNavigate}
        items={[
          { id: "registry", label: L("Patients", "المرضى"), icon: <Users className="size-4" aria-hidden /> },
          { id: "scheduling", label: L("Scheduling", "الحجوزات"), icon: <CalendarClock className="size-4" aria-hidden /> },
          { id: "documents", label: L("Documents", "المستندات"), icon: <FileText className="size-4" aria-hidden /> },
          { id: "consents", label: L("Consents", "الموافقات"), icon: <ShieldCheck className="size-4" aria-hidden /> },
        ]}
      />
      <ChartCard title={L("Specialty load", "الحمل حسب التخصص")} summary="Donut chart of session distribution by specialty">
        <Donut data={specialtyDistribution} />
      </ChartCard>
    </div>
  );
}

/* ------------------------------- Navigation ------------------------------ */
type ModuleId =
  | "dashboard" | "registry" | "profile" | "scheduling" | "calendar" | "plans"
  | "assessments" | "forms" | "referrals" | "documents" | "consents" | "sickleave"
  | "invoices" | "reports" | "administration" | "pricing" | "notifications" | "portal";

const NAV: { group: Loc; items: { id: ModuleId; label: Loc; icon: React.ReactNode }[] }[] = [
  {
    group: L("Overview", "نظرة عامة"),
    items: [
      { id: "dashboard", label: L("Dashboard", "لوحة التحكم"), icon: <LayoutDashboard className="size-4" aria-hidden /> },
      { id: "reports", label: L("Reports", "التقارير"), icon: <Gauge className="size-4" aria-hidden /> },
    ],
  },
  {
    group: L("Clinical", "السريري"),
    items: [
      { id: "registry", label: L("Patient registry", "سجل المرضى"), icon: <Users className="size-4" aria-hidden /> },
      { id: "profile", label: L("Patient profile", "ملف المريض"), icon: <UserSquare2 className="size-4" aria-hidden /> },
      { id: "scheduling", label: L("Scheduling", "الحجوزات"), icon: <CalendarClock className="size-4" aria-hidden /> },
      { id: "calendar", label: L("Calendar", "التقويم"), icon: <CalendarDays className="size-4" aria-hidden /> },
      { id: "plans", label: L("Treatment plans", "الخطط العلاجية"), icon: <Stethoscope className="size-4" aria-hidden /> },
      { id: "assessments", label: L("Assessments", "التقييمات"), icon: <ListChecks className="size-4" aria-hidden /> },
      { id: "forms", label: L("Form builder", "منشئ النماذج"), icon: <ClipboardList className="size-4" aria-hidden /> },
      { id: "referrals", label: L("Referrals", "الإحالات"), icon: <Send className="size-4" aria-hidden /> },
      { id: "sickleave", label: L("Sick leave", "الإجازات المرضية"), icon: <FileSignature className="size-4" aria-hidden /> },
    ],
  },
  {
    group: L("Records", "السجلات"),
    items: [
      { id: "documents", label: L("Documents", "المستندات"), icon: <FileText className="size-4" aria-hidden /> },
      { id: "consents", label: L("Consents", "الموافقات"), icon: <ShieldCheck className="size-4" aria-hidden /> },
    ],
  },
  {
    group: L("Finance", "المالية"),
    items: [
      { id: "invoices", label: L("Invoices & payments", "الفواتير والمدفوعات"), icon: <Receipt className="size-4" aria-hidden /> },
      { id: "pricing", label: L("Pricing & packages", "التسعير والباقات"), icon: <Tags className="size-4" aria-hidden /> },
    ],
  },
  {
    group: L("System", "النظام"),
    items: [
      { id: "notifications", label: L("Notifications", "الإشعارات"), icon: <Bell className="size-4" aria-hidden /> },
      { id: "portal", label: L("Portal management", "إدارة البوابة"), icon: <Smartphone className="size-4" aria-hidden /> },
      { id: "administration", label: L("Administration", "الإدارة"), icon: <Settings2 className="size-4" aria-hidden /> },
    ],
  },
];

const ALL_ITEMS = NAV.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group })));

const ROLE_MODULES: Record<RoleId, ModuleId[]> = {
  admin: ALL_ITEMS.map((i) => i.id),
  specialist: ["dashboard", "registry", "profile", "scheduling", "calendar", "plans", "assessments", "forms", "referrals", "sickleave", "documents", "consents", "reports"],
  receptionist: ["dashboard", "registry", "profile", "scheduling", "calendar", "documents", "consents", "invoices", "notifications", "portal"],
  accountant: ["dashboard", "invoices", "pricing", "reports", "registry", "notifications"],
  assistant: ["dashboard", "registry", "profile", "scheduling", "calendar", "documents", "consents", "assessments"],
  patient: ["dashboard"],
};

/* ---------------------------- Command palette ---------------------------- */
function CommandPalette({
  open,
  onClose,
  items,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  items: { id: ModuleId; label: Loc; group: Loc; icon: React.ReactNode }[];
  onPick: (id: ModuleId) => void;
}) {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  useEffect(() => {
    if (!open) setQ("");
  }, [open]);
  if (!open) return null;
  const term = q.trim().toLowerCase();
  const results = items.filter(
    (i) => !term || i.label.en.toLowerCase().includes(term) || i.label.ar.includes(term),
  );
  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center p-4 pt-[12vh]">
      <div className="absolute inset-0 bg-[oklch(0.32_0.01_229_/_0.4)] backdrop-blur-[2px]" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t(L("Command palette", "لوحة الأوامر"))}
        className="animate-in-soft relative flex max-h-[70vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-lifted)]"
      >
        <div className="relative border-b border-border">
          <Search className="pointer-events-none absolute top-1/2 start-5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label={t(L("Search modules", "بحث في الوحدات"))}
            placeholder={t(L("Jump to a module…", "انتقل إلى وحدة…"))}
            className="h-14 w-full bg-transparent ps-12 pe-4 text-[15px] outline-none"
          />
        </div>
        <ul className="min-h-0 flex-1 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">
              {t(L("No matching module", "لا توجد وحدة مطابقة"))}
            </li>
          )}
          {results.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => {
                  onPick(r.id);
                  onClose();
                }}
                className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-tint-green/70 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <span className="text-primary">{r.icon}</span>
                <span className="min-w-0 truncate font-medium">{t(r.label)}</span>
                <span className="text-xs text-muted-foreground">{t(r.group)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AdminConsoleInner() {
  const { t, lang } = useI18n();
  const [role, setRole] = useState<RoleId>("admin");
  const [module, setModule] = useState<ModuleId>("dashboard");
  const [navOpen, setNavOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const allowed = ROLE_MODULES[role];
  const current = allowed.includes(module) ? module : "dashboard";
  const currentItem = ALL_ITEMS.find((i) => i.id === current)!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((s) => !s);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id: string) => {
    if (ALL_ITEMS.some((i) => i.id === id) && allowed.includes(id as ModuleId)) {
      setModule(id as ModuleId);
      setNavOpen(false);
    }
  };

  const roleDashboards: Partial<Record<RoleId, React.ReactNode>> = {
    specialist: <SpecialistDashboard onNavigate={go} />,
    receptionist: <ReceptionistDashboard onNavigate={go} />,
    accountant: <AccountantDashboard onNavigate={go} />,
    assistant: <AssistantDashboard onNavigate={go} />,
  };

  const render = () => {
    if (current === "dashboard") return roleDashboards[role] ?? <ExecutiveDashboard onNavigate={go} />;
    switch (current) {
      case "registry": return <PatientRegistryModule onOpenProfile={() => setModule("profile")} />;
      case "profile": return <PatientProfileModule />;
      case "scheduling": return <SchedulingModule />;
      case "calendar": return <CalendarModule />;
      case "plans": return <TreatmentPlansModule />;
      case "assessments": return <AssessmentsModule />;
      case "forms": return <FormBuilderModule />;
      case "referrals": return <ReferralsModule />;
      case "documents": return <DocumentsModule />;
      case "consents": return <ConsentsModule />;
      case "sickleave": return <SickLeaveModule />;
      case "invoices": return <InvoicesModule />;
      case "reports": return <ReportsModule />;
      case "administration": return <AdministrationModule />;
      case "pricing": return <PricingModule />;
      case "notifications": return <NotificationsModule />;
      case "portal": return <PortalManagementModule />;
      default: return <ExecutiveDashboard onNavigate={go} />;
    }
  };

  const sidebar = (
    <nav aria-label={t(L("Console modules", "وحدات النظام"))} className="space-y-6">
      {NAV.map((group) => {
        const items = group.items.filter((i) => allowed.includes(i.id));
        if (!items.length) return null;
        return (
          <div key={group.group.en} className="space-y-1">
            <p className="px-3 pb-1 text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
              {t(group.group)}
            </p>
            {items.map((item) => {
              const active = item.id === current;
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
                  <span className="min-w-0 truncate">{t(item.label)}</span>
                </button>
              );
            })}
          </div>
        );
      })}
    </nav>
  );

  const roleSelect = (id: string) => (
    <div>
      <label htmlFor={id} className="text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        {t(L("Signed in as", "تسجيل الدخول كـ"))}
      </label>
      <div className="relative mt-1.5 flex w-full items-center">
        <select
          id={id}
          value={role}
          onChange={(e) => setRole(e.target.value as RoleId)}
          className="h-11 w-full appearance-none truncate rounded-xl border border-border bg-surface ps-3.5 pe-10 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
        >
          {ROLES.filter((r) => r.id !== "patient").map((r) => (
            <option key={r.id} value={r.id}>
              {t(r.label)}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute end-3 size-4 text-muted-foreground" aria-hidden />
      </div>
    </div>
  );

  return (
    <div className="min-h-[70vh] bg-[var(--background)]">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-6 sm:px-6">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] space-y-5 overflow-y-auto rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2.5 px-1">
              <BrandPlate className="size-9" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{t(L("Rehlah Console", "لوحة رحلة"))}</p>
                <p className="truncate text-[11px] text-muted-foreground">{t(L("Riyadh centre", "مركز الرياض"))}</p>
              </div>
            </div>
            {roleSelect("role-switch")}
            {sidebar}
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-5">
          <div className="sticky top-20 z-40 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-3xl border border-border bg-surface/95 p-3 shadow-[var(--shadow-soft)] backdrop-blur lg:grid-cols-[minmax(0,1fr)_auto]">
            <button
              onClick={() => setNavOpen(true)}
              aria-label={t(L("Open modules menu", "فتح قائمة الوحدات"))}
              className="grid size-11 place-items-center rounded-xl border border-border lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
            <button
              onClick={() => setPaletteOpen(true)}
              className="relative hidden min-w-0 items-center gap-2 rounded-xl border border-border bg-tint-blue/60 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 lg:flex lg:h-11"
            >
              <Search className="size-4" aria-hidden />
              <span className="min-w-0 truncate">
                {t(L("Search patients, invoices, sessions…", "ابحث في المرضى والفواتير والجلسات…"))}
              </span>
              <kbd className="ms-auto rounded-md border border-border bg-surface px-1.5 py-0.5 text-[11px] font-semibold">⌘K</kbd>
            </button>
            <p className="min-w-0 truncate text-sm font-semibold lg:hidden">{t(currentItem.label)}</p>
            <div className="flex shrink-0 items-center gap-2">
              <Badge tone="primary">{t(ROLES.find((r) => r.id === role)!.label)}</Badge>
              <button
                aria-label={t(L("Notifications", "الإشعارات"))}
                onClick={() => go("notifications")}
                className="relative grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <Bell className="size-5" aria-hidden />
                <span className="absolute end-2.5 top-2.5 size-2 rounded-full bg-destructive" />
              </button>
              <span className="grid size-11 place-items-center rounded-xl bg-tint-green text-sm font-bold text-[var(--primary-deep)]">
                {lang === "ar" ? "ن" : "N"}
              </span>
            </div>
          </div>

          <nav aria-label={t(L("Breadcrumb", "مسار التنقل"))} className="px-1">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <button onClick={() => go("dashboard")} className="rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
                  {t(L("Console", "اللوحة"))}
                </button>
              </li>
              <li aria-hidden>/</li>
              <li>{t(currentItem.group)}</li>
              <li aria-hidden>/</li>
              <li className="font-semibold text-foreground" aria-current="page">{t(currentItem.label)}</li>
            </ol>
          </nav>

          {render()}
        </main>
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        items={ALL_ITEMS.filter((i) => allowed.includes(i.id))}
        onPick={(id) => go(id)}
      />

      {navOpen && (
        <div className="fixed inset-0 z-90 lg:hidden">
          <div className="absolute inset-0 bg-[oklch(0.32_0.01_229_/_0.35)]" onClick={() => setNavOpen(false)} aria-hidden />
          <div className="animate-in-soft absolute inset-y-0 start-0 w-72 overflow-y-auto border-e border-border bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold">{t(L("Modules", "الوحدات"))}</p>
              <button onClick={() => setNavOpen(false)} aria-label={t(L("Close menu", "إغلاق القائمة"))} className="grid size-10 place-items-center rounded-xl hover:bg-muted">
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <div className="mb-4">{roleSelect("role-switch-mobile")}</div>
            {sidebar}
          </div>
        </div>
      )}
    </div>
  );
}

export function AdminConsole() {
  return (
    <ToastProvider>
      <AdminConsoleInner />
    </ToastProvider>
  );
}

export const __unusedAdminHelpers = { invoices, KeyValue, Card, statusTone } as unknown;
