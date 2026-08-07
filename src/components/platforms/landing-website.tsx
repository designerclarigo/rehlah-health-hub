import { useEffect, useState } from "react";
import { BrandSymbol, BrandLogo } from "@/components/rehlah/brand";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button, Card, Field, Input, Select, Textarea } from "@/components/rehlah/primitives";
import { SPECIALTIES, plans, services, spec } from "@/lib/rehlah-data";
import { Counter, Reveal, useInView, usePointerSpot } from "@/hooks/use-reveal";
import {
  Activity,
  ArrowRight,
  Award,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

const PAGES = [
  { id: "home", label: L("Home", "الرئيسية") },
  { id: "services", label: L("Services", "الخدمات") },
  { id: "about", label: L("About", "من نحن") },
  { id: "pricing", label: L("Pricing", "الأسعار") },
  { id: "contact", label: L("Contact", "تواصل معنا") },
];

const SERVICE_ICONS = [Activity, HeartHandshake, MessageSquare, Brain, Stethoscope];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[var(--primary-deep)] uppercase">
      {children}
    </span>
  );
}

function Section({
  title,
  sub,
  eyebrow,
  children,
  tint,
}: {
  title: Loc;
  sub?: Loc;
  eyebrow?: Loc;
  children: React.ReactNode;
  tint?: boolean;
}) {
  const { t } = useI18n();
  return (
    <section className={cn(tint && "bg-tint-green/50")}>
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && <Eyebrow>{t(eyebrow)}</Eyebrow>}
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-[2.6rem]">
            {t(title)}
          </h2>
          {sub && <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{t(sub)}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function SpotlightCard({
  children,
  className,
  tint,
}: {
  children: React.ReactNode;
  className?: string;
  tint?: "green" | "yellow" | "purple" | "none";
}) {
  const { ref, spot, handlers } = usePointerSpot<HTMLDivElement>();
  return (
    <div ref={ref} {...handlers} className={cn("group relative", className)}>
      <Card tint={tint ?? "none"} className="lift relative h-full overflow-hidden">
        {spot && (
          <span
            aria-hidden
            className="pointer-events-none absolute -z-0 size-56 rounded-full opacity-60 blur-3xl"
            style={{
              left: spot.x - 112,
              top: spot.y - 112,
              background: "color-mix(in oklab, var(--primary) 24%, transparent)",
            }}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </Card>
    </div>
  );
}

/** Animated bar that fills once in view. */
function ProgressBar({ value, label, tone = "primary" }: { value: number; label: Loc; tone?: "primary" | "accent" | "wellness" }) {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const bg = tone === "accent" ? "var(--accent)" : tone === "wellness" ? "var(--wellness)" : "var(--primary)";
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-muted-foreground">{t(label)}</span>
        <span className="text-sm font-bold tabular-nums">
          <Counter to={value} suffix="%" />
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border/70">
        <span
          className="block h-full rounded-full transition-[width] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: inView ? `${value}%` : "0%", background: bg }}
        />
      </div>
    </div>
  );
}

/** Frosted floating card used in the hero collage. */
function GlassCard({
  className,
  style,
  children,
  delay = 0,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "glass-nav animate-in-soft rounded-3xl border border-border/70 p-4 shadow-[0_28px_60px_-32px_rgba(48,50,51,0.45)]",
        className,
      )}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

function HeroVisual() {
  const { t } = useI18n();
  return (
    <div className="relative mx-auto my-14 w-full max-w-[500px]">
      {/* soft branded shapes */}
      <span
        aria-hidden
        className="animate-orb pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 20%, color-mix(in oklab, var(--primary) 34%, transparent), transparent 70%), radial-gradient(55% 55% at 85% 75%, color-mix(in oklab, var(--wellness) 30%, transparent), transparent 70%)",
        }}
      />

      {/* main progress card */}
      <div className="animate-float rounded-[2rem] border border-border bg-surface p-6 shadow-[0_50px_100px_-45px_rgba(48,50,51,0.55)]">
        <div className="flex items-center gap-3">
          <BrandSymbol className="size-9" />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold">{t(L("Layan's journey", "رحلة ليان"))}</p>
            <p className="truncate text-xs text-muted-foreground">
              {t(L("Speech & occupational therapy", "علاج النطق والوظيفي"))}
            </p>
          </div>
          <span className="ms-auto rounded-full bg-tint-green px-2.5 py-1 text-[11px] font-bold text-[var(--primary-deep)]">
            {t(L("On track", "على المسار"))}
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <ProgressBar value={78} label={L("Communication goals", "أهداف التواصل")} />
          <ProgressBar value={64} label={L("Fine motor skills", "المهارات الحركية الدقيقة")} tone="wellness" />
          <ProgressBar value={91} label={L("Session attendance", "حضور الجلسات")} tone="accent" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
          {[
            { v: 24, k: L("Sessions", "جلسة") },
            { v: 6, k: L("Goals met", "أهداف محققة") },
            { v: 4, k: L("Reports", "تقارير") },
          ].map((m, i) => (
            <div key={i}>
              <p className="text-xl font-bold tracking-tight">
                <Counter to={m.v} />
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{t(m.k)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* floating glass cards */}
      <GlassCard delay={260} className="absolute -top-12 -start-8 hidden w-[210px] sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]">
            <CalendarCheck className="size-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold">{t(L("Next session", "الجلسة القادمة"))}</p>
            <p className="truncate text-[11px] text-muted-foreground">
              {t(L("Sun · 10:30 · Room 4", "الأحد · ١٠:٣٠ · غرفة ٤"))}
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard delay={420} className="absolute hidden w-[200px] lg:block" style={{ top: "-3.5rem", insetInlineEnd: "-1.5rem" }}>
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-tint-purple text-wellness">
            <ClipboardList className="size-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold">{t(L("Progress report", "تقرير التقدم"))}</p>
            <p className="truncate text-[11px] text-muted-foreground">{t(L("Ready to view", "جاهز للاطلاع"))}</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard delay={560} className="absolute -bottom-12 -start-6 hidden w-[230px] sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-tint-yellow text-[color-mix(in_oklab,var(--accent)_70%,var(--foreground))]">
            <Sparkles className="size-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold">{t(L("Goal achieved", "تم تحقيق هدف"))}</p>
            <p className="truncate text-[11px] text-muted-foreground">
              {t(L("Two-word phrases", "جمل من كلمتين"))}
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function Hero({ onNav }: { onNav: (p: string) => void }) {
  const { t } = useI18n();
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="mesh-hero relative overflow-hidden">
      <span
        aria-hidden
        className="animate-orb pointer-events-none absolute -top-44 -end-32 size-[36rem] rounded-full opacity-45 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--primary) 42%, transparent)" }}
      />
      <span
        aria-hidden
        className="animate-orb pointer-events-none absolute -bottom-56 -start-28 size-[30rem] rounded-full opacity-35 blur-3xl"
        style={{
          background: "color-mix(in oklab, var(--accent) 48%, transparent)",
          animationDelay: "-6s",
        }}
      />
      <div className="mx-auto grid max-w-[1200px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-32">
        <div className="copy-in" style={{ transform: `translateY(${Math.min(y * 0.05, 36)}px)` }}>
          <Eyebrow>
            <Sparkles className="size-3.5" aria-hidden />
            {t(L("Paediatric rehabilitation, reimagined", "إعادة تأهيل الأطفال بمفهوم جديد"))}
          </Eyebrow>
          <h1 className="mt-7 text-[2.9rem] leading-[1.02] font-bold tracking-[-0.03em] text-balance sm:text-[4.1rem]">
            {t(L("Every child deserves a", "كل طفل يستحق"))}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, var(--primary-deep), var(--wellness) 55%, color-mix(in oklab, var(--accent) 80%, var(--foreground)))",
              }}
            >
              {t(L("confident journey", "رحلة واثقة"))}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted-foreground">
            {t(
              L(
                "Rehlah unites physical, occupational, speech, behavioural and psychological therapy in one connected care platform — for families, specialists and clinics.",
                "تجمع رحلة العلاج الطبيعي والوظيفي والنطق والسلوكي والنفسي في منصة رعاية واحدة متصلة للأسر والأخصائيين والمراكز.",
              ),
            )}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" className="group shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--primary)_85%,transparent)] transition-transform active:scale-[0.98]">
              {t(L("Book an assessment", "احجز تقييماً"))}
              <ArrowRight
                className="ms-2 size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180"
                aria-hidden
              />
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNav("services")}>
              {t(L("Explore services", "استكشف الخدمات"))}
            </Button>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" aria-hidden />
              {t(L("MoH licensed", "مرخص من وزارة الصحة"))}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="size-3.5 text-primary" aria-hidden />
              {t(L("CBAHI aligned", "متوافق مع سباهي"))}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-primary" aria-hidden />
              {t(L("PDPL compliant", "متوافق مع حماية البيانات"))}
            </span>
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/80 pt-8">
            {[
              { k: L("Families served", "أسرة"), v: 2400, s: "+" },
              { k: L("Specialists", "أخصائي"), v: 48, s: "" },
              { k: L("Satisfaction", "رضا"), v: 97, s: "%" },
            ].map((s, i) => (
              <div key={i}>
                <dd className="text-2xl font-bold tracking-tight sm:text-3xl">
                  <Counter to={s.v} suffix={s.s} />
                </dd>
                <dt className="mt-1 text-xs text-muted-foreground">{t(s.k)}</dt>
              </div>
            ))}
          </dl>
        </div>

        <Reveal delay={160}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function CallbackCard() {
  const { t } = useI18n();
  return (
    <Card className="space-y-4 shadow-[0_40px_80px_-45px_rgba(48,50,51,0.45)]">
      <div>
        <h3 className="text-lg font-semibold">{t(L("Request a call back", "اطلب اتصالاً"))}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(L("A care advisor replies within one business day.", "يرد مستشار الرعاية خلال يوم عمل واحد."))}
        </p>
      </div>
      <Field label={L("Guardian name", "اسم ولي الأمر")}>
        <Input placeholder={t(L("Full name", "الاسم الكامل"))} />
      </Field>
      <Field label={L("Mobile", "الجوال")}>
        <Input placeholder="+966 5X XXX XXXX" />
      </Field>
      <Field label={L("Service needed", "الخدمة المطلوبة")}>
        <Select options={SPECIALTIES} />
      </Field>
      <Button className="w-full">{t(L("Send request", "إرسال الطلب"))}</Button>
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 shrink-0 text-primary" aria-hidden />
        {t(L("PDPL compliant · Your data stays private.", "متوافق مع نظام حماية البيانات · بياناتك محمية."))}
      </p>
    </Card>
  );
}

function HomePage({ onNav }: { onNav: (p: string) => void }) {
  const { t } = useI18n();
  return (
    <>
      <Hero onNav={onNav} />

      {/* PROBLEM */}
      <Section
        eyebrow={L("The problem", "التحدي")}
        title={L("Therapy shouldn't be scattered across paper files", "لا ينبغي أن يكون العلاج مبعثراً في ملفات ورقية")}
        sub={L("Families lose track between clinics, notes and invoices — and progress becomes invisible.", "تفقد الأسر المتابعة بين المراكز والملاحظات والفواتير — فيصبح التقدم غير مرئي.")}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { i: ClipboardList, t: L("Disconnected records", "سجلات غير مترابطة"), d: L("Assessments, notes and home programmes live in different places.", "التقييمات والملاحظات والبرامج المنزلية في أماكن متفرقة.") },
            { i: LineChart, t: L("Invisible progress", "تقدم غير مرئي"), d: L("Without shared measures, families can't tell what is improving.", "بدون مقاييس مشتركة لا تستطيع الأسر معرفة ما يتحسن.") },
            { i: MessageSquare, t: L("Slow communication", "تواصل بطيء"), d: L("Every question turns into a phone call and a waiting queue.", "كل سؤال يتحول إلى اتصال هاتفي وانتظار.") },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 90}>
              <Card className="lift h-full space-y-3 border-dashed bg-surface">
                <span className="grid size-11 place-items-center rounded-2xl bg-muted text-muted-foreground">
                  <f.i className="size-5" aria-hidden />
                </span>
                <h3 className="text-[16px] font-semibold">{t(f.t)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(f.d)}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section
        tint
        eyebrow={L("The solution", "الحل")}
        title={L("One connected platform, from first call to final report", "منصة واحدة متصلة من أول اتصال إلى التقرير النهائي")}
        sub={L("Every appointment, note, report and invoice connected — so nothing is lost between visits.", "كل موعد وملاحظة وتقرير وفاتورة متصلة — حتى لا يضيع شيء بين الزيارات.")}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { i: Users, t: L("Family-first portal", "بوابة تركز على الأسرة"), d: L("Guardians see goals, session notes, home programmes and invoices in real time.", "يرى أولياء الأمور الأهداف وملاحظات الجلسات والبرامج المنزلية والفواتير لحظياً.") },
              { i: LineChart, t: L("Measurable outcomes", "نتائج قابلة للقياس"), d: L("Standardised assessments and progress charts make improvement visible week by week.", "تقييمات معيارية ورسوم تقدم تجعل التحسن مرئياً أسبوعاً بأسبوع.") },
              { i: CalendarCheck, t: L("Effortless scheduling", "جدولة سهلة"), d: L("Book, reschedule and confirm sessions with reminders on every channel.", "احجز وأعد الجدولة وأكد الجلسات مع تذكيرات عبر كل القنوات.") },
              { i: ShieldCheck, t: L("Compliant by design", "امتثال بالتصميم"), d: L("MoH licensed, CBAHI aligned and PDPL compliant data handling across the platform.", "مرخص من وزارة الصحة ومتوافق مع سباهي ونظام حماية البيانات.") },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <SpotlightCard tint="none" className="h-full">
                  <span className="grid size-12 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]">
                    <f.i className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold">{t(f.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(f.d)}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <CallbackCard />
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow={L("Our care", "رعايتنا")}
        title={L("Therapy services built around the child", "خدمات علاجية مصممة حول الطفل")}
        sub={L("Multi-disciplinary care under one roof, with measurable goals for every session.", "رعاية متعددة التخصصات تحت سقف واحد، بأهداف قابلة للقياس لكل جلسة.")}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((s, i) => {
            const Icon = SERVICE_ICONS[i] ?? Stethoscope;
            return (
              <Reveal key={i} delay={i * 70}>
                <SpotlightCard className="h-full">
                  <span className="grid size-12 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold">{t(s)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(L("Individual and group sessions led by licensed specialists with measurable goals.", "جلسات فردية وجماعية بإشراف أخصائيين مرخصين وبأهداف قابلة للقياس."))}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-deep)]">
                    {t(L("Learn more", "اعرف المزيد"))}
                    <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden />
                  </span>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section
        tint
        eyebrow={L("The journey", "الرحلة")}
        title={L("Four steps from first call to visible progress", "أربع خطوات من أول اتصال إلى تقدم ملموس")}
      >
        <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-[38px] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 45%, transparent), transparent)",
            }}
          />
          {[
            { s: L("Book an initial assessment", "احجز التقييم الأولي"), i: CalendarCheck },
            { s: L("Receive a personalised plan", "استلم خطة مخصصة"), i: ClipboardList },
            { s: L("Attend therapy sessions", "احضر الجلسات العلاجية"), i: HeartHandshake },
            { s: L("Track progress in the app", "تابع التقدم في التطبيق"), i: LineChart },
          ].map((step, i) => (
            <Reveal as="li" key={i} delay={i * 90}>
              <Card className="lift relative h-full space-y-3 bg-surface">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)] ring-4 ring-surface">
                    <step.i className="size-5" aria-hidden />
                  </span>
                  <span className="text-xs font-bold text-primary">0{i + 1}</span>
                </div>
                <p className="text-[15px] font-semibold">{t(step.s)}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* RESULTS */}
      <Section
        eyebrow={L("Results", "النتائج")}
        title={L("Progress you can measure, week after week", "تقدم يمكن قياسه أسبوعاً بعد أسبوع")}
        sub={L("Standardised outcome measures across every discipline, reported back to the family.", "مقاييس نتائج معيارية في كل تخصص، تُعرض للأسرة.")}
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card tint="green" className="h-full space-y-5">
              <ProgressBar value={92} label={L("Plans reviewed on schedule", "خطط تُراجع في موعدها")} />
              <ProgressBar value={86} label={L("Goals met within the cycle", "أهداف تتحقق ضمن الدورة")} tone="wellness" />
              <ProgressBar value={97} label={L("Guardian satisfaction", "رضا أولياء الأمور")} tone="accent" />
            </Card>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { v: 2400, s: "+", k: L("Families served", "أسرة مخدومة") },
              { v: 96000, s: "+", k: L("Sessions delivered", "جلسة مقدمة") },
              { v: 48, s: "", k: L("Licensed specialists", "أخصائي مرخص") },
              { v: 12, s: "", k: L("Years of experience", "سنة من الخبرة") },
            ].map((n, i) => (
              <Reveal key={i} delay={i * 80}>
                <Card className="lift h-full bg-surface">
                  <p className="text-3xl font-bold tracking-tight">
                    <Counter to={n.v} suffix={n.s} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{t(n.k)}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* TRUST */}
      <Section
        tint
        eyebrow={L("Trust", "الثقة")}
        title={L("Regulated, licensed and privacy-first", "منظم ومرخص وخصوصية أولاً")}
        sub={L("Care and data governance held to national and international standards.", "حوكمة الرعاية والبيانات وفق معايير وطنية ودولية.")}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: ShieldCheck, t: L("MoH compliance", "امتثال وزارة الصحة"), d: L("Licensed paediatric rehabilitation facility.", "منشأة إعادة تأهيل أطفال مرخصة.") },
            { i: Award, t: L("CBAHI aligned", "متوافق مع سباهي"), d: L("Quality and patient-safety standards.", "معايير الجودة وسلامة المرضى.") },
            { i: Stethoscope, t: L("Licensed specialists", "أخصائيون مرخصون"), d: L("Every clinician verified and credentialed.", "كل أخصائي موثق ومعتمد.") },
            { i: CheckCircle2, t: L("HIPAA & PDPL", "هيبا ونظام حماية البيانات"), d: L("Encrypted records with audited access.", "سجلات مشفرة مع تدقيق للوصول.") },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <SpotlightCard className="h-full">
                <span className="grid size-12 place-items-center rounded-2xl bg-surface text-[var(--primary-deep)] ring-1 ring-border">
                  <c.i className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold">{t(c.t)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.d)}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow={L("Families", "الأسر")}
        title={L("Trusted by families across the Kingdom", "ثقة الأسر في جميع أنحاء المملكة")}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            L("Rehlah made therapy simple — we finally see the progress week by week.", "رحلة جعلت العلاج بسيطاً — أصبحنا نرى التقدم أسبوعاً بأسبوع."),
            L("The guardian portal keeps us involved in every goal and every session.", "بوابة ولي الأمر تبقينا مشاركين في كل هدف وكل جلسة."),
            L("Booking, invoices and reports in one place. It saved us so much time.", "الحجز والفواتير والتقارير في مكان واحد. وفّرت علينا وقتاً كبيراً."),
          ].map((q, i) => (
            <Reveal key={i} delay={i * 90}>
              <Card
                className="lift h-full space-y-4 bg-surface"
                tint={i === 1 ? "green" : "none"}
              >
                <Quote className="size-6 text-primary" aria-hidden />
                <p className="text-[15px] leading-relaxed">{t(q)}</p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-9 place-items-center rounded-full bg-tint-green text-xs font-bold text-[var(--primary-deep)]">
                    {["AS", "MK", "RH"][i]}
                  </span>
                  <p className="text-xs text-muted-foreground">{t(L("Guardian, Riyadh", "ولي أمر، الرياض"))}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="mesh-hero lift relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16">
            <span
              aria-hidden
              className="animate-orb pointer-events-none absolute -top-24 start-1/3 size-[24rem] rounded-full opacity-40 blur-3xl"
              style={{ background: "color-mix(in oklab, var(--wellness) 35%, transparent)" }}
            />
            <div className="relative">
              <BrandSymbol className="mx-auto size-12" />
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-[2.75rem]">
                {t(L("Start your child's journey today", "ابدأ رحلة طفلك اليوم"))}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] text-muted-foreground">
                {t(L("Book an assessment and receive a personalised therapy plan within 48 hours.", "احجز تقييماً واستلم خطة علاجية مخصصة خلال ٤٨ ساعة."))}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" className="transition-transform active:scale-[0.98]">
                  {t(L("Book an assessment", "احجز تقييماً"))}
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNav("contact")}>
                  {t(L("Talk to us", "تحدث إلينا"))}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export function LandingWebsite() {
  const { t } = useI18n();
  const [page, setPage] = useState("home");

  const nav = (p: string) => {
    setPage(p);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <button onClick={() => nav("home")} className="flex min-w-0 items-center gap-2 text-start">
            <BrandLogo className="h-9 w-auto" />
          </button>
          <nav aria-label={t(L("Site navigation", "تنقل الموقع"))} className="flex items-center gap-1 overflow-x-auto">
            {PAGES.map((pg) => (
              <button
                key={pg.id}
                onClick={() => nav(pg.id)}
                aria-current={page === pg.id ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors",
                  page === pg.id
                    ? "bg-tint-green text-[var(--primary-deep)]"
                    : "text-muted-foreground hover:bg-tint-green/60 hover:text-foreground",
                )}
              >
                {t(pg.label)}
              </button>
            ))}
            <Button size="sm" className="ms-2 hidden shrink-0 sm:inline-flex">
              {t(L("Book now", "احجز الآن"))}
            </Button>
          </nav>
        </div>
      </header>

      {page === "home" && <HomePage onNav={nav} />}

      {page === "services" && (
        <Section
          eyebrow={L("Services", "الخدمات")}
          title={L("Services & programmes", "الخدمات والبرامج")}
          sub={L("Session types, durations, settings and transparent per-session pricing.", "أنواع الجلسات والمدد والأماكن وأسعار واضحة لكل جلسة.")}
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <SpotlightCard>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[16px] font-semibold">{t(s.name)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{t(spec(s.specialty))}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-tint-green px-3 py-1 text-xs font-semibold text-[var(--primary-deep)]">
                      {s.single} SAR
                    </span>
                  </div>
                  <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-sm">
                    {[
                      { k: L("10 sessions", "١٠ جلسات"), v: s.pack10 },
                      { k: L("20 sessions", "٢٠ جلسة"), v: s.pack20 },
                      { k: L("Home visit", "زيارة منزلية"), v: s.home },
                    ].map((row, j) => (
                      <div key={j}>
                        <dt className="text-xs text-muted-foreground">{t(row.k)}</dt>
                        <dd className="font-semibold">{row.v} SAR</dd>
                      </div>
                    ))}
                  </dl>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {page === "about" && (
        <>
          <Section
            eyebrow={L("About", "عن رحلة")}
            title={L("Care that follows the child, not the clinic", "رعاية تتبع الطفل لا المركز")}
            sub={L("Our mission, values and the multi-disciplinary team behind every plan.", "رسالتنا وقيمنا والفريق متعدد التخصصات خلف كل خطة.")}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                { t: L("Our mission", "رسالتنا"), d: L("To make world-class paediatric rehabilitation accessible, measurable and family-centred.", "جعل إعادة التأهيل العالمية للأطفال متاحة وقابلة للقياس ومتمحورة حول الأسرة.") },
                { t: L("Our approach", "منهجنا"), d: L("Evidence-based assessment, individualised goals and continuous progress tracking.", "تقييم قائم على الأدلة وأهداف فردية ومتابعة مستمرة للتقدم.") },
                { t: L("Our promise", "وعدنا"), d: L("Transparent pricing, licensed specialists and full data privacy for every family.", "أسعار شفافة وأخصائيون مرخصون وخصوصية كاملة للبيانات.") },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 90}>
                  <SpotlightCard tint={i === 1 ? "green" : "none"}>
                    <h3 className="text-[16px] font-semibold">{t(c.t)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.d)}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <Card className="mt-6 flex flex-wrap items-center gap-3">
                <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden />
                <p className="text-sm text-muted-foreground">
                  {t(L("Licensed by the Ministry of Health · CBAHI aligned · PDPL compliant data handling.", "مرخص من وزارة الصحة · متوافق مع سباهي · معالجة بيانات وفق نظام حماية البيانات."))}
                </p>
              </Card>
            </Reveal>
          </Section>

          <Section tint title={L("By the numbers", "بالأرقام")}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { v: 2400, s: "+", k: L("Families served", "أسرة مخدومة") },
                { v: 48, s: "", k: L("Licensed specialists", "أخصائي مرخص") },
                { v: 96000, s: "+", k: L("Sessions delivered", "جلسة مقدمة") },
                { v: 97, s: "%", k: L("Guardian satisfaction", "رضا أولياء الأمور") },
              ].map((n, i) => (
                <Reveal key={i} delay={i * 80}>
                  <Card className="lift h-full bg-surface text-center">
                    <p className="text-3xl font-bold tracking-tight">
                      <Counter to={n.v} suffix={n.s} />
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{t(n.k)}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Section>
        </>
      )}

      {page === "pricing" && (
        <Section
          eyebrow={L("Pricing", "الأسعار")}
          title={L("Packages & pricing", "الباقات والأسعار")}
          sub={L("Transparent monthly and yearly journeys. Cancel or switch at any time.", "باقات شهرية وسنوية بأسعار واضحة. يمكن الإلغاء أو التغيير في أي وقت.")}
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((pl, i) => (
              <Reveal key={i} delay={i * 90}>
                <Card tint={i === 1 ? "green" : "none"} className="lift relative flex h-full flex-col gap-5">
                  {i === 1 && (
                    <span className="absolute end-5 top-5 rounded-full bg-surface px-3 py-1 text-[11px] font-bold text-[var(--primary-deep)]">
                      {t(L("Most chosen", "الأكثر اختياراً"))}
                    </span>
                  )}
                  <div>
                    <h3 className="text-base font-bold">{t(pl.name)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t(pl.desc)}</p>
                  </div>
                  <p className="text-4xl font-bold tracking-tight">
                    {pl.price}{" "}
                    <span className="text-sm font-medium text-muted-foreground">SAR / {t(pl.period)}</span>
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    {pl.features.map((f, j) => (
                      <li key={j} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        <span>{t(f)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={i === 1 ? "primary" : "outline"} className="mt-auto">
                    {t(L("Get started", "ابدأ الآن"))}
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {page === "contact" && (
        <Section
          eyebrow={L("Contact", "تواصل")}
          title={L("Contact us", "تواصل معنا")}
          sub={L("We reply within one business day.", "نرد خلال يوم عمل واحد.")}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Card className="space-y-4">
                <Field label={L("Full name", "الاسم الكامل")}><Input /></Field>
                <Field label={L("Email", "البريد الإلكتروني")}><Input type="email" /></Field>
                <Field label={L("Mobile", "الجوال")}><Input /></Field>
                <Field label={L("Message", "الرسالة")}><Textarea /></Field>
                <Button>{t(L("Send message", "إرسال"))}</Button>
              </Card>
            </Reveal>
            <Reveal delay={120}>
              <Card className="space-y-4 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                  {t(L("King Abdulaziz Rd, Riyadh 12313, Saudi Arabia", "طريق الملك عبدالعزيز، الرياض ١٢٣١٣، السعودية"))}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden />+966 11 234 5678
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden />care@rehlah.health
                </p>
                <div className="rounded-2xl bg-tint-green p-4">
                  <p className="font-semibold">{t(L("Opening hours", "ساعات العمل"))}</p>
                  <p className="mt-1 text-muted-foreground">
                    {t(L("Sunday – Thursday · 08:00 – 20:00", "الأحد – الخميس · ٠٨:٠٠ – ٢٠:٠٠"))}
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </Section>
      )}

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <BrandLogo className="h-9 w-auto dark:invert" />
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t(L("Connected paediatric rehabilitation for families and clinics.", "إعادة تأهيل الأطفال بشكل متصل للأسر والمراكز."))}
            </p>
          </div>
          <nav aria-label={t(L("Footer navigation", "تنقل التذييل"))} className="flex flex-col gap-2 text-sm">
            {PAGES.map((pg) => (
              <button
                key={pg.id}
                onClick={() => nav(pg.id)}
                className="text-start text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(pg.label)}
              </button>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © 2026 Rehlah Health. {t(L("All rights reserved.", "جميع الحقوق محفوظة."))}
          </p>
        </div>
      </footer>
    </div>
  );
}
