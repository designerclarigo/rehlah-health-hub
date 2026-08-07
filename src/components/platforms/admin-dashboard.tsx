import { useState, type ReactNode } from "react";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Badge, Button, Card, ProgressBar, Select } from "@/components/rehlah/primitives";
import { Bars, ChartCard, Donut, Line1, Modal, PageHeader } from "@/components/rehlah/blocks";
import { useToast } from "@/components/rehlah/toast";
import {
  appointments,
  assessments,
  attendanceStatus,
  doc,
  invoices,
  notifications,
  pat,
  patients,
  revenueMonthly,
  spec,
  specialtyDistribution,
  treatmentPlans,
  visits30,
} from "@/lib/rehlah-data";
import { statusTone } from "./admin-modules";
import { downloadCsv, printView } from "@/lib/module-state";
import {
  ArrowUpRight,
  Bell,
  CalendarClock,
  ClipboardList,
  Download,
  Plus,
  Receipt,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

/* ------------------------------- Metric tile ----------------------------- */
function Metric({
  label,
  value,
  sub,
  delta,
  icon,
  spark,
  onClick,
}: {
  label: Loc;
  value: string;
  sub?: Loc;
  delta?: number;
  icon: ReactNode;
  spark?: number[];
  onClick?: () => void;
}) {
  const { t } = useI18n();
  const up = (delta ?? 0) >= 0;
  const points = spark ?? [];
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const path = points
    .map((p, i) => {
      const x = (i / Math.max(points.length - 1, 1)) * 100;
      const y = 30 - ((p - min) / Math.max(max - min, 1)) * 26;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const Wrapper = onClick ? "button" : "div";
  return (
    <Wrapper
      {...(onClick ? { onClick, type: "button" as const } : {})}
      className={cn(
        "group card-surface relative overflow-hidden p-5 text-start",
        onClick && "rise cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-balance text-muted-foreground">{t(label)}</p>
          <p className="mt-2 text-[28px] leading-none font-bold tracking-tight">{value}</p>
          {sub && <p className="mt-2 text-xs text-muted-foreground">{t(sub)}</p>}
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]">
          {icon}
        </span>
      </div>
      {typeof delta === "number" && (
        <div className="mt-3 flex items-center gap-1.5">
          <Badge tone={up ? "success" : "danger"}>
            {up ? <TrendingUp className="size-3" aria-hidden /> : <TrendingDown className="size-3" aria-hidden />}
            {up ? "+" : ""}
            {delta}%
          </Badge>
          <span className="text-xs text-muted-foreground">{t(L("vs last period", "مقارنة بالفترة السابقة"))}</span>
        </div>
      )}
      {points.length > 1 && (
        <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="mt-3 h-8 w-full" aria-hidden>
          <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </Wrapper>
  );
}

/* ----------------------------- Executive view ---------------------------- */
export function ExecutiveDashboard({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const { t } = useI18n();
  const toast = useToast();
  const [quickOpen, setQuickOpen] = useState(false);
  const [period, setPeriod] = useState(0);

  const unpaid = invoices.filter((i) => i.paid < i.total);
  const pendingTotal = unpaid.reduce((s, i) => s + (i.total - i.paid), 0);

  /* Period drives every series and headline figure on this page. */
  const periodDays = [30, 1, 7, 90][period] ?? 30;
  const periodMonths = periodDays >= 90 ? 7 : periodDays >= 30 ? 3 : 1;
  const visitSeries = visits30.slice(-Math.min(periodDays, visits30.length));
  const revenueSeries = revenueMonthly.slice(-periodMonths);
  const spark = visitSeries.slice(-12).map((v) => v.visits);
  const sessionsInPeriod = visitSeries.reduce((s, v) => s + v.visits, 0);
  const revenueInPeriod = revenueSeries.reduce((s, r) => s + r.revenue, 0);
  const scale = Math.min(periodDays / 30, 3);
  const scaled = (base: number) => Math.max(1, Math.round(base * scale)).toLocaleString();

  const exportDashboard = () => {
    downloadCsv(
      "rehlah-dashboard",
      ["Metric", "Value"],
      [
        ["Sessions delivered", sessionsInPeriod],
        ["Revenue (K SAR)", revenueInPeriod],
        ["Active cases", scaled(412)],
        ["Upcoming appointments", scaled(96)],
        ["Pending payments (SAR)", pendingTotal],
        ...visitSeries.map((v) => [`Day ${v.day} sessions`, v.visits] as [string, number]),
      ],
    );
    toast.push("success", L("Dashboard exported as CSV", "تم تصدير اللوحة كملف CSV"));
  };

  const insights: { title: Loc; body: Loc; tone: "warning" | "success" | "info"; go: string }[] = [
    {
      title: L("3 invoices overdue > 7 days", "٣ فواتير متأخرة أكثر من ٧ أيام"),
      body: L("Send a payment reminder to guardians.", "أرسل تذكير دفع لأولياء الأمور."),
      tone: "warning",
      go: "invoices",
    },
    {
      title: L("Goal achievement up 4.5%", "ارتفاع تحقيق الأهداف ٤.٥٪"),
      body: L("Speech therapy leads improvement this month.", "علاج النطق يتصدر التحسن هذا الشهر."),
      tone: "success",
      go: "plans",
    },
    {
      title: L("2 consents expire this week", "موافقتان تنتهيان هذا الأسبوع"),
      body: L("Renew before the next session.", "جدّدها قبل الجلسة القادمة."),
      tone: "info",
      go: "consents",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Executive overview", "النظرة التنفيذية")}
        description={L(
          "Clinic performance, clinical activity and financial health",
          "أداء المركز والنشاط السريري والوضع المالي",
        )}
        actions={
          <>
            <Select
              aria-label={t(L("Period filter", "تصفية الفترة"))}
              className="w-36"
              value={undefined}
              onChange={(e) => setPeriod(e.target.selectedIndex)}
              options={[
                L("This month", "هذا الشهر"),
                L("Today", "اليوم"),
                L("This week", "هذا الأسبوع"),
                L("This quarter", "هذا الربع"),
              ]}
            />
            <Button
              variant="outline"
              onClick={exportDashboard}
            >
              <Download className="size-4" aria-hidden />
              {t(L("Export", "تصدير"))}
            </Button>
            <Button variant="outline" onClick={printView}>
              {t(L("Print", "طباعة"))}
            </Button>
            <Button onClick={() => setQuickOpen(true)}>
              <Plus className="size-4" aria-hidden />
              {t(L("Quick action", "إجراء سريع"))}
            </Button>
          </>
        }
      />

      {/* hero metrics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          label={L("Total patients", "إجمالي المرضى")}
          value="1,284"
          delta={6.2}
          spark={spark}
          icon={<Users className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("registry")}
        />
        <Metric
          label={L("Active cases", "الحالات النشطة")}
          value={scaled(412)}
          delta={3.1}
          sub={L("Across 5 specialties", "عبر ٥ تخصصات")}
          icon={<Stethoscope className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("registry")}
        />
        <Metric
          label={L("Upcoming appointments", "المواعيد القادمة")}
          value={scaled(96)}
          delta={8.4}
          sub={L("Next 7 days", "خلال ٧ أيام")}
          icon={<CalendarClock className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("scheduling")}
        />
        <Metric
          label={L("Revenue this month", "إيراد الشهر")}
          value={`${revenueInPeriod}K SAR`}
          delta={6.5}
          spark={revenueSeries.map((r) => r.revenue)}
          icon={<Wallet className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("invoices")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          label={L("Treatment plans", "الخطط العلاجية")}
          value={String(treatmentPlans.length * 46)}
          sub={L("Average progress 70%", "متوسط التقدم ٧٠٪")}
          icon={<ClipboardList className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("plans")}
        />
        <Metric
          label={L("Assessments", "التقييمات")}
          value={String(assessments.length * 32)}
          delta={2.4}
          icon={<ClipboardList className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("assessments")}
        />
        <Metric
          label={L("Pending payments", "المدفوعات المعلقة")}
          value={`${pendingTotal.toLocaleString()} SAR`}
          sub={L("Across unpaid invoices", "على الفواتير غير المسددة")}
          delta={-2.3}
          icon={<Receipt className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("invoices")}
        />
        <Metric
          label={L("Unread notifications", "إشعارات غير مقروءة")}
          value={String(notifications.filter((n) => n.unread).length)}
          sub={L("Reminders and alerts", "التذكيرات والتنبيهات")}
          icon={<Bell className="size-5" aria-hidden />}
          onClick={() => onNavigate?.("notifications")}
        />
      </div>

      {/* charts */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <ChartCard
          title={L(`Sessions delivered (${visitSeries.length} days)`, `الجلسات المنفذة (${visitSeries.length} يوماً)`)}
          subtitle={L("Daily attended sessions across all specialties", "الجلسات اليومية لكل التخصصات")}
          summary="Line chart of sessions delivered per day over the last 30 days"
          height={280}
        >
          <Line1 data={visitSeries} x="day" y="visits" />
        </ChartCard>
        <ChartCard
          title={L("Specialty mix", "توزيع التخصصات")}
          summary="Donut chart of session distribution by specialty"
          height={280}
        >
          <Donut data={specialtyDistribution} />
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <ChartCard
          title={L("Monthly revenue (K SAR)", "الإيراد الشهري (ألف ريال)")}
          summary="Bar chart of monthly revenue in thousands of Saudi riyals"
        >
          <Bars data={revenueSeries} x="m" keys={["revenue"]} />
        </ChartCard>
        <ChartCard title={L("Attendance mix", "توزيع الحضور")} summary="Donut chart of attendance outcomes">
          <Donut data={attendanceStatus} />
        </ChartCard>
      </div>

      {/* insights + activity */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[15px] font-semibold">{t(L("Actionable insights", "رؤى قابلة للتنفيذ"))}</h3>
            <Badge tone="primary">{insights.length}</Badge>
          </div>
          <ul className="space-y-2">
            {insights.map((i, k) => (
              <li key={k}>
                <button
                  onClick={() => onNavigate?.(i.go)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-4 text-start transition-colors hover:bg-tint-green/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <Badge tone={i.tone === "warning" ? "warning" : i.tone === "success" ? "success" : "info"}>
                        {t(
                          i.tone === "warning"
                            ? L("Action", "إجراء")
                            : i.tone === "success"
                              ? L("Positive", "إيجابي")
                              : L("Reminder", "تذكير"),
                        )}
                      </Badge>
                      <span className="truncate text-sm font-semibold">{t(i.title)}</span>
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{t(i.body)}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground rtl:-scale-x-100" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[15px] font-semibold">{t(L("Staff activity", "نشاط الفريق"))}</h3>
            <Button size="sm" variant="ghost" onClick={() => onNavigate?.("administration")}>
              {t(L("Manage users", "إدارة المستخدمين"))}
            </Button>
          </div>
          <ul className="space-y-3">
            {[
              { n: 0, load: 92, sessions: 7 },
              { n: 1, load: 78, sessions: 6 },
              { n: 2, load: 64, sessions: 5 },
              { n: 3, load: 45, sessions: 3 },
            ].map((s) => (
              <li key={s.n} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="truncate font-medium">{t(doc(s.n))}</span>
                  <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                    {s.sessions} {t(L("sessions", "جلسة"))} · {s.load}%
                  </span>
                </div>
                <ProgressBar value={s.load} tone={s.load > 85 ? "accent" : "primary"} />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* today's schedule */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[15px] font-semibold">{t(L("Today's schedule", "جدول اليوم"))}</h3>
          <Button size="sm" variant="outline" onClick={() => onNavigate?.("calendar")}>
            {t(L("Open calendar", "فتح التقويم"))}
          </Button>
        </div>
        <ul className="grid gap-2 md:grid-cols-2">
          {appointments.map((a, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-3"
            >
              <span className="rounded-xl bg-tint-green px-2.5 py-1 text-sm font-semibold text-[var(--primary-deep)] tabular-nums">
                {a.time}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{t(pat(a.patient).name)}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {t(a.type)} · {t(spec(a.specialty))}
                </span>
              </span>
              <Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>
            </li>
          ))}
        </ul>
      </Card>

      <Modal
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
        title={L("Quick action", "إجراء سريع")}
        subtitle={L("Jump straight into a common workflow", "انتقل مباشرة إلى إجراء شائع")}
        size="sm"
      >
        <div className="grid gap-2">
          {[
            { id: "registry", label: L("Register new patient", "تسجيل مريض جديد") },
            { id: "scheduling", label: L("Book an appointment", "حجز موعد") },
            { id: "invoices", label: L("Create invoice", "إنشاء فاتورة") },
            { id: "sickleave", label: L("Issue sick leave", "إصدار إجازة مرضية") },
            { id: "reports", label: L("Run a report", "تشغيل تقرير") },
          ].map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setQuickOpen(false);
                onNavigate?.(a.id);
              }}
              className="rounded-xl border border-border px-4 py-3 text-start text-sm font-medium transition-colors hover:bg-tint-green/70 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              {t(a.label)}
            </button>
          ))}
        </div>
      </Modal>

      <p className="sr-only">{patients.length}</p>
    </div>
  );
}
