import { useEffect, useRef, useState, type ReactNode } from "react";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Badge, Button, Field, Input, ProgressBar, EmptyState } from "@/components/rehlah/primitives";
import {
  appointments,
  assessments,
  doc,
  documents,
  invoices,
  notifications,
  pat,
  spec,
  treatmentPlans,
} from "@/lib/rehlah-data";
import { statusTone } from "./admin-modules";
import { BrandLockup, BrandSymbol } from "@/components/rehlah/brand";
import {
  ArtAuth,
  ArtBooked,
  ArtCare,
  ArtCelebrate,
  ArtJourney,
  ArtProgress,
  ArtSchedule,
  ArtDocuments,
  ArtVerify,
  ArtWelcome,
} from "@/components/rehlah/mobile-art";
import {
  ArrowRight,
  Activity,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  ClipboardList,
  CreditCard,
  Download,
  FileText,
  Globe,
  Home,
  LifeBuoy,
  Lock,
  LogOut,
  MessageCircle,
  MessageSquare,
  PenLine,
  Plus,
  Send,
  Sparkles,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Stethoscope,
  Trash2,
  User,
  X,
} from "lucide-react";

/* ────────────────────────── screen registry ────────────────────────── */

type ScreenId =
  | "splash" | "welcome" | "onboarding" | "language" | "login" | "register"
  | "otp" | "forgot" | "reset" | "authSuccess"
  | "home" | "appointments" | "plan" | "chat" | "profileTab" | "wallet" | "more"
  | "book" | "bookSuccess" | "apptDetail" | "reschedule" | "cancel"
  | "planDetail" | "assessments" | "assessmentDetail" | "assessmentProgress"
  | "documents" | "docViewer" | "invoices" | "invoiceDetail" | "payment" | "paymentSuccess"
  | "consents" | "consentDetail" | "consentSign" | "consentSigned"
  | "sickLeave" | "pdfViewer" | "notifications" | "profile" | "settings"
  | "langSettings" | "notifPrefs" | "privacy" | "help" | "logout" | "deleteAccount";

type Frame = { id: ScreenId; arg?: number | undefined };
const TAB_IDS: ScreenId[] = ["home", "appointments", "plan", "chat", "profileTab"];

const TABS = [
  { id: "home" as ScreenId, label: L("Home", "الرئيسية"), icon: Home },
  { id: "appointments" as ScreenId, label: L("Visits", "المواعيد"), icon: CalendarDays },
  { id: "plan" as ScreenId, label: L("Treatment", "العلاج"), icon: Stethoscope },
  { id: "chat" as ScreenId, label: L("Chat", "المحادثة"), icon: MessageCircle },
  { id: "profileTab" as ScreenId, label: L("Profile", "الحساب"), icon: User },
];

const SCREEN_TITLES: Partial<Record<ScreenId, Loc>> = {
  book: L("Book a session", "حجز جلسة"),
  bookSuccess: L("Booking confirmed", "تم تأكيد الحجز"),
  apptDetail: L("Appointment", "الموعد"),
  reschedule: L("Reschedule", "إعادة جدولة"),
  cancel: L("Cancel appointment", "إلغاء الموعد"),
  planDetail: L("Treatment plan", "الخطة العلاجية"),
  assessments: L("Assessments", "التقييمات"),
  assessmentDetail: L("Assessment", "التقييم"),
  assessmentProgress: L("Progress", "التقدم"),
  documents: L("Documents", "المستندات"),
  docViewer: L("Document", "المستند"),
  invoices: L("Invoices", "الفواتير"),
  invoiceDetail: L("Invoice", "الفاتورة"),
  payment: L("Payment", "الدفع"),
  paymentSuccess: L("Payment", "الدفع"),
  consents: L("Consents", "الموافقات"),
  consentDetail: L("Consent", "الموافقة"),
  consentSign: L("Sign consent", "توقيع الموافقة"),
  consentSigned: L("Consent", "الموافقة"),
  sickLeave: L("Sick leave", "الإجازات المرضية"),
  pdfViewer: L("PDF viewer", "عارض PDF"),
  notifications: L("Notifications", "الإشعارات"),
  profile: L("Profile", "الملف الشخصي"),
  settings: L("Settings", "الإعدادات"),
  langSettings: L("Language", "اللغة"),
  notifPrefs: L("Notifications", "الإشعارات"),
  privacy: L("Privacy & security", "الخصوصية والأمان"),
  help: L("Help & support", "المساعدة والدعم"),
  deleteAccount: L("Delete account", "حذف الحساب"),
  authSuccess: L("Welcome", "مرحباً"),
  chat: L("Care team", "فريق الرعاية"),
  profileTab: L("Profile", "الحساب"),
  wallet: L("Wallet", "المحفظة"),
  more: L("More", "المزيد"),
};

const consents = [
  { name: L("Treatment consent", "الموافقة على العلاج"), date: "01 Mar 2026", status: L("Signed", "موقّعة"), body: L("I authorise the Rehlah clinical team to deliver the agreed rehabilitation programme.", "أفوض الفريق الطبي في رحلة بتقديم البرنامج التأهيلي المتفق عليه.") },
  { name: L("Data sharing consent", "موافقة مشاركة البيانات"), date: "01 Mar 2026", status: L("Pending", "قيد الانتظار"), body: L("I agree that my child's clinical records may be shared with referring providers.", "أوافق على مشاركة السجلات السريرية لطفلي مع الجهات المحيلة.") },
  { name: L("Media & photography", "التصوير والوسائط"), date: "12 Apr 2026", status: L("Expired", "منتهية"), body: L("I permit session photography for clinical documentation purposes only.", "أسمح بتصوير الجلسات لأغراض التوثيق السريري فقط.") },
];

const sickLeaves = [
  { number: "SL-2026-0091", date: "12 Jul 2026", days: 2, status: L("Issued", "صادرة") },
  { number: "SL-2026-0064", date: "28 Jun 2026", days: 1, status: L("Issued", "صادرة") },
];

/* ────────────────────────── small UI atoms ────────────────────────── */

function Tile({ children, tint, className }: { children: ReactNode; tint?: string; className?: string }) {
  return <div className={cn("rounded-2xl border border-border bg-surface p-4", tint, className)}>{children}</div>;
}

function ListRow({ title, meta, right, onClick, icon }: { title: ReactNode; meta?: ReactNode; right?: ReactNode; onClick?: () => void; icon?: ReactNode }) {
  const Cmp = onClick ? "button" : "div";
  return (
    <Cmp
      {...(onClick ? { onClick, type: "button" as const } : {})}
      className={cn(
        "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-3 text-start last:border-0",
        onClick && "min-h-12 rounded-lg transition-colors hover:bg-tint-green/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
      )}
    >
      <span className="shrink-0 text-primary">{icon}</span>
      <span className="min-w-0">
        <span className="block truncate text-[13px] font-medium">{title}</span>
        {meta && <span className="block truncate text-[11px] text-muted-foreground">{meta}</span>}
      </span>
      <span className="shrink-0">{right ?? (onClick ? <ChevronRight className="size-4 text-muted-foreground rtl:rotate-180" aria-hidden /> : null)}</span>
    </Cmp>
  );
}

function Screen({ title, subtitle, children }: { title: Loc; subtitle?: Loc; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-balance">{t(title)}</h2>
        {subtitle && <p className="mt-0.5 text-[13px] text-muted-foreground">{t(subtitle)}</p>}
      </div>
      {children}
    </div>
  );
}

function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: Loc; children: ReactNode }) {
  const { t } = useI18n();
  if (!open) return null;
  return (
    <div className="absolute inset-0 z-20 flex items-end" role="dialog" aria-modal="true" aria-label={t(title)}>
      <button type="button" aria-label={t(L("Close", "إغلاق"))} onClick={onClose} className="absolute inset-0 bg-foreground/30" />
      <div className="animate-in-soft relative w-full rounded-t-3xl border-t border-border bg-surface p-5 shadow-[var(--shadow-lifted)]">
        <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
          <h3 className="min-w-0 truncate text-[15px] font-bold">{t(title)}</h3>
          <button type="button" onClick={onClose} aria-label={t(L("Close", "إغلاق"))} className="grid size-9 place-items-center rounded-xl border border-border">
            <X className="size-4" aria-hidden />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/** Modern iOS-style checkbox used across the auth forms. */
function CheckBox({
  label,
  defaultChecked,
  required,
  align = "center",
}: {
  label: ReactNode;
  defaultChecked?: boolean;
  required?: boolean;
  align?: "center" | "start";
}) {
  return (
    <label
      className={cn(
        "group flex min-h-11 cursor-pointer gap-2.5 text-[13px] leading-relaxed select-none",
        align === "start" ? "items-start pt-0.5 text-muted-foreground" : "items-center",
      )}
    >
      <span className="relative grid size-[22px] shrink-0 place-items-center">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          required={required}
          className="peer absolute inset-0 size-full cursor-pointer appearance-none rounded-[8px] border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-200 checked:border-primary checked:bg-primary focus-visible:ring-4 focus-visible:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] focus-visible:outline-none"
        />
        <Check
          className="pointer-events-none relative size-[14px] scale-50 text-primary-foreground opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"
          aria-hidden
        />
      </span>
      <span className="min-w-0">{label}</span>
    </label>
  );
}

function Success({
  title,
  body,
  action,
  onAction,
  art,
  eyebrow,
  details,
  secondary,
  onSecondary,
}: {
  title: Loc;
  body: Loc;
  action: Loc;
  onAction: () => void;
  art?: ReactNode;
  eyebrow?: Loc;
  details?: ReactNode;
  secondary?: Loc;
  onSecondary?: () => void;
}) {
  const { t } = useI18n();
  return (
    <div className="flex min-h-[460px] flex-col">
      <div className="art-in flex justify-center">
        {art ?? <ArtCelebrate className="w-full max-w-[300px]" />}
      </div>
      <div className="copy-in mt-2 flex flex-col items-center gap-2 text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-tint-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[var(--primary-deep)] uppercase">
            {t(eyebrow)}
          </span>
        )}
        <h2 className="text-[24px] leading-[1.15] font-bold tracking-tight text-balance">{t(title)}</h2>
        <p className="max-w-[19rem] text-[13.5px] leading-relaxed text-muted-foreground text-pretty">{t(body)}</p>
      </div>
      {details && <div className="mt-5">{details}</div>}
      <div className="mt-auto space-y-2 pt-6">
        <Button size="lg" className="w-full" onClick={onAction}>{t(action)}</Button>
        {secondary && (
          <Button size="lg" variant="outline" className="w-full" onClick={onSecondary}>{t(secondary)}</Button>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────── main ────────────────────────── */

function ProgressRing({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid size-[68px] shrink-0 place-items-center">
      <svg viewBox="0 0 64 64" className="size-[68px] -rotate-90" aria-hidden>
        <circle cx="32" cy="32" r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
          className="draw-ring"
          style={{ ["--dash" as string]: c, ["--dash-to" as string]: c - (c * value) / 100 }}
        />
      </svg>
      <span className="absolute text-[13px] font-bold tabular-nums">{value}%</span>
    </div>
  );
}

function AuthPage({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow?: Loc;
  title: Loc;
  body?: Loc;
  children: React.ReactNode;
}) {
  const { t } = useI18n();
  return (
    <div className="relative flex min-h-[700px] flex-col overflow-hidden bg-surface">
      <div className="mesh-hero relative flex h-[176px] shrink-0 items-center justify-center overflow-hidden rounded-b-[2.5rem]">
        <span
          className="animate-orb absolute -end-10 -top-10 size-44 rounded-full bg-[color-mix(in_oklab,var(--wellness)_26%,transparent)] blur-3xl"
          aria-hidden
        />
        <span
          className="animate-orb absolute -start-12 -bottom-6 size-40 rounded-full bg-[color-mix(in_oklab,var(--primary)_24%,transparent)] blur-3xl [animation-delay:2.4s]"
          aria-hidden
        />
        <ArtAuth className="absolute inset-x-0 bottom-0 w-full opacity-70" />
        <BrandLockup className="mark-in relative h-11 w-auto" />
      </div>

      <div className="flex flex-1 flex-col px-7 pt-8 pb-10">
        <div className="copy-in flex flex-col items-start gap-2">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-tint-green px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--primary-deep)] uppercase">
              {t(eyebrow)}
            </span>
          )}
          <h2 className="text-[27px] leading-[1.14] font-bold tracking-tight text-balance">
            {t(title)}
          </h2>
          {body && (
            <p className="max-w-[19rem] text-[14px] leading-relaxed text-muted-foreground text-pretty">
              {t(body)}
            </p>
          )}
        </div>
        <div className="screen-in mt-8 flex-1 [animation-delay:180ms]">{children}</div>
      </div>
    </div>
  );
}

export type Booking = { specialty: number; specialist: number; date: string; time: string; notes: string };

const BOOK_DATES = [
  { key: "2026-08-10", d: L("Sun", "أحد"), n: "10", m: L("Aug", "أغسطس"), slots: ["09:15", "11:00", "15:00"] },
  { key: "2026-08-11", d: L("Mon", "إثنين"), n: "11", m: L("Aug", "أغسطس"), slots: ["08:30", "10:00", "13:45"] },
  { key: "2026-08-12", d: L("Tue", "ثلاثاء"), n: "12", m: L("Aug", "أغسطس"), slots: ["08:30", "09:15", "10:00", "11:00", "12:30", "15:00", "16:15"] },
  { key: "2026-08-13", d: L("Wed", "أربعاء"), n: "13", m: L("Aug", "أغسطس"), slots: ["10:00", "16:15"] },
  { key: "2026-08-14", d: L("Thu", "خميس"), n: "14", m: L("Aug", "أغسطس"), slots: [] },
  { key: "2026-08-17", d: L("Sun", "أحد"), n: "17", m: L("Aug", "أغسطس"), slots: ["08:30", "11:00", "12:30", "15:00"] },
];

/** Step header used by the booking flow. */
function StepHead({ n, title, hint }: { n: number; title: Loc; hint?: Loc }) {
  const { t } = useI18n();
  return (
    <div className="mb-2.5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5">
      <span className="grid size-6 place-items-center rounded-full bg-[var(--primary-deep)] text-[11px] font-bold text-primary-foreground tabular-nums">{n}</span>
      <span className="min-w-0">
        <span className="block truncate text-[13.5px] font-bold">{t(title)}</span>
        {hint && <span className="block truncate text-[11px] text-muted-foreground">{t(hint)}</span>}
      </span>
    </div>
  );
}

function BookScreen({ onConfirm }: { onConfirm: (b: Booking) => void }) {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState(2);
  const [specialist, setSpecialist] = useState(0);
  const [dateKey, setDateKey] = useState(BOOK_DATES[2]!.key);
  const [time, setTime] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const day = BOOK_DATES.find((d) => d.key === dateKey) ?? BOOK_DATES[0]!;
  const specialties = [0, 1, 2, 3, 4].filter((i) => t(spec(i)).toLowerCase().includes(query.trim().toLowerCase()));
  const specialists = [0, 1, 2];
  const morning = day.slots.filter((s) => Number(s.slice(0, 2)) < 12);
  const afternoon = day.slots.filter((s) => Number(s.slice(0, 2)) >= 12);

  const slotBtn = (s: string) => (
    <button
      key={s}
      onClick={() => setTime(s)}
      aria-pressed={time === s}
      className={cn(
        "min-h-11 rounded-xl border text-[13px] font-semibold tabular-nums transition-all duration-200",
        time === s
          ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_22px_-14px_var(--primary-deep)]"
          : "border-border bg-surface hover:border-primary/50",
      )}
    >
      {s}
    </button>
  );

  return (
    <div className="stagger space-y-5">
      <div>
        <h2 className="text-[22px] leading-tight font-bold tracking-tight text-balance">{t(L("Book a session", "حجز جلسة"))}</h2>
        <p className="mt-1 text-[13px] text-muted-foreground">
          {t(L("Four quick steps — specialty, specialist, day, time.", "أربع خطوات سريعة: التخصص، الأخصائي، اليوم، الوقت."))}
        </p>
      </div>

      <section>
        <StepHead n={1} title={L("Choose a specialty", "اختر التخصص")} />
        <div className="relative mb-2.5">
          <Search className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t(L("Search specialty", "بحث التخصص"))}
            placeholder={t(L("Search specialty", "بحث التخصص"))}
            className="h-11 w-full rounded-2xl border border-border bg-surface ps-9 pe-3 text-sm shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_14%,transparent)]"
          />
        </div>
        {specialties.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-5 text-center text-[12px] text-muted-foreground">
            {t(L("No specialty matches your search.", "لا يوجد تخصص مطابق للبحث."))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {specialties.map((i) => (
              <button
                key={i}
                onClick={() => setSpecialty(i)}
                aria-pressed={specialty === i}
                className={cn(
                  "rise min-h-[62px] rounded-2xl border p-3 text-start transition-colors",
                  specialty === i ? "border-primary bg-tint-green" : "border-border bg-surface",
                )}
              >
                <span className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2">
                  <span className={cn("grid size-8 place-items-center rounded-xl", specialty === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
                    <Stethoscope className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0 text-[12.5px] leading-tight font-semibold text-balance">{t(spec(i))}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      <section>
        <StepHead n={2} title={L("Pick your specialist", "اختر الأخصائي")} hint={L("Care team available for this specialty", "فريق الرعاية المتاح لهذا التخصص")} />
        <div className="space-y-2">
          {specialists.map((i) => (
            <button
              key={i}
              onClick={() => setSpecialist(i)}
              aria-pressed={specialist === i}
              className={cn(
                "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-3 text-start transition-colors",
                specialist === i ? "border-primary bg-tint-green" : "border-border bg-surface",
              )}
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-surface text-[13px] font-bold text-[var(--primary-deep)] ring-1 ring-border">
                {t(doc(i)).replace(/^(Dr\.|د\.)\s*/, "").slice(0, 1)}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[13.5px] font-semibold">{t(doc(i))}</span>
                <span className="block truncate text-[11.5px] text-muted-foreground">
                  {t(spec(specialty))} · {8 + i} {t(L("yrs", "سنوات"))} · 4.{9 - i} ★
                </span>
              </span>
              <span className={cn("grid size-6 place-items-center rounded-full border", specialist === i ? "border-primary bg-primary text-primary-foreground" : "border-border")}>
                {specialist === i && <Check className="size-3.5" aria-hidden />}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <StepHead n={3} title={L("Select a day", "اختر اليوم")} />
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {BOOK_DATES.map((d) => {
            const on = d.key === dateKey;
            const full = d.slots.length === 0;
            return (
              <button
                key={d.key}
                disabled={full}
                onClick={() => { setDateKey(d.key); setTime(null); }}
                aria-pressed={on}
                className={cn(
                  "flex min-h-[74px] w-[62px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-2xl border transition-all duration-200",
                  full && "cursor-not-allowed opacity-40",
                  on ? "border-primary bg-primary text-primary-foreground shadow-[0_12px_24px_-16px_var(--primary-deep)]" : "border-border bg-surface",
                )}
              >
                <span className="text-[10.5px] font-semibold uppercase opacity-80">{t(d.d)}</span>
                <span className="text-[18px] leading-none font-bold tabular-nums">{d.n}</span>
                <span className="text-[10px] opacity-75">{full ? t(L("Full", "مكتمل")) : `${d.slots.length} ${t(L("slots", "موعد"))}`}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <StepHead n={4} title={L("Choose a time", "اختر الوقت")} hint={L("All times are Riyadh time (GMT+3)", "جميع الأوقات بتوقيت الرياض (جرينتش+٣)")} />
        {day.slots.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-6 text-center">
            <p className="text-[13px] font-semibold">{t(L("Fully booked", "محجوز بالكامل"))}</p>
            <p className="mt-1 text-[12px] text-muted-foreground">{t(L("Try another day from the strip above.", "جرّب يوماً آخر من الأعلى."))}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {morning.length > 0 && (
              <div>
                <p className="mb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">{t(L("Morning", "صباحاً"))}</p>
                <div className="grid grid-cols-3 gap-2">{morning.map(slotBtn)}</div>
              </div>
            )}
            {afternoon.length > 0 && (
              <div>
                <p className="mb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">{t(L("Afternoon", "مساءً"))}</p>
                <div className="grid grid-cols-3 gap-2">{afternoon.map(slotBtn)}</div>
              </div>
            )}
          </div>
        )}
      </section>

      <section>
        <StepHead n={5} title={L("Anything we should know?", "هل من ملاحظات؟")} hint={L("Optional note for the specialist", "ملاحظة اختيارية للأخصائي")} />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          aria-label={t(L("Notes", "ملاحظات"))}
          placeholder={t(L("e.g. sensory sensitivity, preferred room…", "مثال: حساسية حسية، غرفة مفضلة…"))}
          className="w-full rounded-2xl border border-border bg-surface p-3 text-[13px] shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_14%,transparent)]"
        />
      </section>

      {/* sticky summary */}
      <div className="sticky -bottom-5 z-10 -mx-5 rounded-t-3xl border-t border-border bg-surface px-5 pt-3 pb-6 shadow-[0_-14px_30px_-24px_rgba(48,50,51,0.5)]">
        <div className="mb-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
          <p className="min-w-0 truncate text-[12px] text-muted-foreground">
            {t(spec(specialty))} · {t(day.d)} {day.n} {t(day.m)}
            {time ? ` · ${time}` : ""}
          </p>
          <p className="text-[13px] font-bold tabular-nums">SAR 320</p>
        </div>
        <Button
          size="lg"
          className="w-full"
          disabled={!time}
          onClick={() => time && onConfirm({ specialty, specialist, date: `${day.n} ${t(day.m)}`, time, notes })}
        >
          {time ? t(L("Confirm booking", "تأكيد الحجز")) : t(L("Select a time to continue", "اختر وقتاً للمتابعة"))}
        </Button>
      </div>
    </div>
  );
}

export function MobileApp() {
  const { t, lang, setLang } = useI18n();
  const [stack, setStack] = useState<Frame[]>([{ id: "splash" }]);
  const [signedIn, setSignedIn] = useState(false);
  const [sheet, setSheet] = useState<null | "quick" | "confirmCancel" | "confirmDelete" | "confirmLogout">(null);
  const [toast, setToast] = useState<Loc | null>(null);
  const [onboardStep, setOnboardStep] = useState(0);
  const [booking, setBooking] = useState<Booking | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const cur = stack[stack.length - 1]!;
  const push = (id: ScreenId, arg?: number) => setStack((s) => [...s, { id, arg }]);
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const reset = (id: ScreenId) => setStack([{ id }]);
  const goTab = (id: ScreenId) => setStack([{ id }]);
  const notify = (m: Loc) => setToast(m);

  useEffect(() => { bodyRef.current?.scrollTo({ top: 0 }); }, [stack]);
  useEffect(() => {
    if (cur.id !== "splash") return;
    const timer = setTimeout(() => setStack([{ id: "welcome" }]), 2300);
    return () => clearTimeout(timer);
  }, [cur.id]);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const p = pat(0);
  const plan = treatmentPlans[0]!;
  const isTab = TAB_IDS.includes(cur.id);
  const chromeless = !signedIn;

  /* ─────────── auth screens ─────────── */
  function AuthScreen() {
    switch (cur.id) {
      case "splash":
        return (
          <div className="relative flex min-h-[700px] flex-col items-center justify-center overflow-hidden bg-surface">
            <span className="mesh-hero absolute inset-0" aria-hidden />
            <span
              className="animate-orb absolute -start-16 top-10 size-64 rounded-full bg-[color-mix(in_oklab,var(--primary)_26%,transparent)] blur-3xl"
              aria-hidden
            />
            <span
              className="animate-orb absolute -end-20 bottom-14 size-72 rounded-full bg-[color-mix(in_oklab,var(--wellness)_22%,transparent)] blur-3xl [animation-delay:2.2s]"
              aria-hidden
            />

            <div className="relative flex flex-col items-center px-10">
              {/* one single brand presentation: the bilingual lockup, haloed */}
              <span
                className="pulse-ring absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--primary)_38%,transparent)]"
                aria-hidden
              />
              <span
                className="pulse-ring absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--wellness)_30%,transparent)] [animation-delay:1300ms]"
                aria-hidden
              />
              <span
                className="splash-fade absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--surface)_92%,transparent),transparent_70%)]"
                aria-hidden
              />
              <BrandLockup className="mark-in relative h-20 w-auto drop-shadow-[0_30px_50px_color-mix(in_oklab,var(--primary-deep)_28%,transparent)]" />
              <span
                className="splash-fade relative mt-8 h-px w-16 bg-[color-mix(in_oklab,var(--primary)_38%,transparent)] [animation-delay:600ms]"
                aria-hidden
              />
              <p className="word-in relative mt-6 max-w-[16rem] text-center text-[13px] leading-relaxed tracking-wide text-muted-foreground [animation-delay:700ms]">
                {t(L("Paediatric rehabilitation, beautifully connected", "تأهيل الأطفال، متصل بعناية"))}
              </p>
            </div>

            <div className="splash-fade absolute bottom-14 h-[3px] w-32 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--primary)_16%,transparent)] [animation-delay:900ms]">
              <span className="sheen block h-full w-1/3 rounded-full bg-primary" />
            </div>
          </div>
        );

      case "welcome":
        return (
          <div className="relative flex min-h-[700px] flex-col overflow-hidden bg-surface">
            <div className="mesh-hero relative flex h-[352px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-b-[2.75rem] px-6">
              <span
                className="animate-orb absolute -end-12 -top-8 size-52 rounded-full bg-[color-mix(in_oklab,var(--wellness)_28%,transparent)] blur-3xl"
                aria-hidden
              />
              <button
                type="button"
                onClick={() => push("language")}
                className="absolute end-5 top-5 z-10 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border/70 bg-surface/85 px-3.5 text-[12px] font-semibold backdrop-blur"
              >
                <Globe className="size-3.5" aria-hidden />
                {lang === "en" ? "العربية" : "English"}
              </button>
              <BrandLockup className="mark-in absolute top-6 start-6 h-8 w-auto" />
              <ArtWelcome className="art-in relative mt-6 w-full max-w-[290px]" />
            </div>

            <div className="stagger flex flex-1 flex-col justify-end gap-3 px-7 pt-7 pb-9">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-tint-green px-3 py-1.5 text-[11px] font-semibold text-[var(--primary-deep)]">
                <Sparkles className="size-3.5" aria-hidden />
                {t(L("MOH & CBAHI licensed care", "رعاية مرخصة من وزارة الصحة"))}
              </span>
              <h2 className="text-[30px] leading-[1.1] font-bold tracking-tight text-balance">
                {t(L("Every small step, beautifully tracked.", "كل خطوة صغيرة، موثقة بعناية."))}
              </h2>
              <p className="text-[14px] leading-relaxed text-muted-foreground text-pretty">
                {t(
                  L(
                    "Appointments, treatment plans, assessments and payments for your child — in one calm place.",
                    "المواعيد والخطط العلاجية والتقييمات والمدفوعات لطفلك — في مكان واحد هادئ.",
                  ),
                )}
              </p>
              <Button size="lg" className="mt-2 w-full" onClick={() => { setOnboardStep(0); push("onboarding"); }}>
                {t(L("Get started", "ابدأ الآن"))}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </Button>
              <button
                className="min-h-11 w-full text-[13px] font-semibold text-primary"
                onClick={() => push("login")}
              >
                {t(L("I already have an account", "لدي حساب بالفعل"))}
              </button>
            </div>
          </div>
        );

      case "onboarding": {
        const steps = [
          {
            t: L("Welcome to Rehlah", "مرحباً بك في رحلة"),
            b: L(
              "One calm home for your child's rehabilitation — built with Saudi paediatric care teams.",
              "مكان واحد هادئ لتأهيل طفلك — بُني مع فرق رعاية الأطفال في السعودية.",
            ),
            Art: ArtCare,
            tag: L("Welcome", "أهلاً"),
          },
          {
            t: L("Child progress tracking", "متابعة تقدم الطفل"),
            b: L(
              "Goal-by-goal progress, therapist notes and home exercises updated after every session.",
              "تقدم لكل هدف وملاحظات المعالج والتمارين المنزلية بعد كل جلسة.",
            ),
            Art: ArtProgress,
            tag: L("Progress", "التقدم"),
          },
          {
            t: L("Appointment management", "إدارة المواعيد"),
            b: L(
              "See open slots, book, reschedule or cancel in seconds — reminders included.",
              "اطلع على الأوقات المتاحة واحجز أو أعد الجدولة أو ألغِ في ثوانٍ — مع التذكيرات.",
            ),
            Art: ArtSchedule,
            tag: L("Scheduling", "الجدولة"),
          },
          {
            t: L("Reports & assessments", "التقارير والتقييمات"),
            b: L(
              "Every assessment, medical report, consent and sick-leave note, archived and shareable.",
              "كل تقييم وتقرير طبي وموافقة وإجازة مرضية، مؤرشفة وقابلة للمشاركة.",
            ),
            Art: ArtDocuments,
            tag: L("Records", "السجلات"),
          },
          {
            t: L("Get started", "لنبدأ"),
            b: L(
              "Set up your guardian account and bring your child's whole care team together.",
              "جهّز حساب ولي الأمر واجمع فريق رعاية طفلك في مكان واحد.",
            ),
            Art: ArtJourney,
            tag: L("Together", "معاً"),
          },
        ];
        const last = steps.length - 1;
        const s = steps[onboardStep]!;
        const Art = s.Art;
        return (
          <div className="relative flex min-h-[700px] flex-col overflow-hidden bg-surface">
            {/* fixed brand rail — identical on every step */}
            <div className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-6 pt-6 pb-2">
              <BrandLockup className="h-7 w-auto" />
              <button
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-4 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground",
                  onboardStep === last && "pointer-events-none opacity-0",
                )}
                onClick={() => setOnboardStep(last)}
                tabIndex={onboardStep === last ? -1 : 0}
                aria-hidden={onboardStep === last}
              >
                {t(L("Skip", "تخطي"))}
              </button>
            </div>

            {/* illustration stage — fixed height, one art per step, never crops */}
            <div className="flex h-[318px] shrink-0 items-center justify-center px-6">
              <Art key={onboardStep} className="art-in h-full w-full max-w-[320px] object-contain" />
            </div>

            {/* copy block — fixed height so nothing jumps between steps */}
            <div key={onboardStep} className="copy-in flex h-[188px] flex-col items-start gap-2.5 px-7 pt-6">
              <span className="inline-flex items-center rounded-full bg-tint-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[var(--primary-deep)] uppercase">
                {t(s.tag)}
              </span>
              <h2 className="text-[27px] leading-[1.14] font-bold tracking-tight text-balance">{t(s.t)}</h2>
              <p className="max-w-[20rem] text-[14px] leading-relaxed text-muted-foreground text-pretty">
                {t(s.b)}
              </p>
            </div>

            {/* controls — one consistent footer */}
            <div className="mt-auto px-7 pb-8">
              {onboardStep === last ? (
                <Button size="lg" className="w-full" onClick={() => push("language")}>
                  {t(L("Get started", "ابدأ الآن"))}
                  <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
                </Button>
              ) : (
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                  <div className="-ms-1 flex items-center" role="tablist" aria-label={t(L("Onboarding steps", "خطوات التعريف"))}>
                    {steps.map((st, i) => (
                      <button
                        key={i}
                        role="tab"
                        aria-selected={i === onboardStep}
                        aria-label={t(st.tag)}
                        onClick={() => setOnboardStep(i)}
                        className="grid h-11 place-items-center px-1"
                      >
                        <span
                          className={cn(
                            "block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            i === onboardStep ? "w-7 bg-primary" : "w-1.5 bg-border",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setOnboardStep(onboardStep + 1)}
                    aria-label={t(L("Next", "التالي"))}
                    className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_32px_-18px_color-mix(in_oklab,var(--primary)_90%,transparent)] transition-transform active:scale-95"
                  >
                    <ArrowRight className="size-5 rtl:rotate-180" aria-hidden />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      }

      case "language":
        return (
          <AuthPage
            eyebrow={L("Step 1 of 2", "الخطوة ١ من ٢")}
            title={L("Choose your language", "اختر لغتك")}
            body={L("You can change this any time in settings.", "يمكنك تغييرها في أي وقت من الإعدادات.")}
          >
            <div className="space-y-2.5">
              {([["en", "English", "Left-to-right"], ["ar", "العربية", "من اليمين إلى اليسار"]] as const).map(
                ([code, label, hint]) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={cn(
                      "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-4 text-start transition-all duration-300",
                      lang === code
                        ? "border-primary bg-tint-green shadow-[0_18px_32px_-26px_color-mix(in_oklab,var(--primary)_90%,transparent)]"
                        : "border-border bg-surface hover:border-primary/40",
                    )}
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-surface text-[13px] font-bold text-[var(--primary-deep)]">
                      {code === "en" ? "EN" : "ع"}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{label}</span>
                      <span className="block text-[11px] text-muted-foreground">{hint}</span>
                    </span>
                    {lang === code && <Check className="size-5 text-primary" aria-hidden />}
                  </button>
                ),
              )}
            </div>
            <Button size="lg" className="mt-6 w-full" onClick={() => push("login")}>
              {t(L("Continue", "متابعة"))}
            </Button>
          </AuthPage>
        );

      case "login":
        return (
          <AuthPage
            eyebrow={L("Welcome back", "مرحباً بعودتك")}
            title={L("Sign in to Rehlah", "تسجيل الدخول إلى رحلة")}
            body={L("Use your registered mobile number or email.", "استخدم رقم جوالك أو بريدك المسجل.")}
          >
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); push("otp"); }}>
              <Field label={L("Mobile or email", "الجوال أو البريد")} required>
                <Input type="text" placeholder="+966 5X XXX XXXX" autoComplete="username" />
              </Field>
              <Field label={L("Password", "كلمة المرور")} required>
                <Input type="password" placeholder={t(L("Enter your password", "أدخل كلمة المرور"))} autoComplete="current-password" />
              </Field>
              <div className="flex items-center justify-between gap-3">
                <CheckBox defaultChecked label={t(L("Remember me", "تذكرني"))} />
                <button type="button" className="min-h-11 text-[13px] font-semibold text-primary" onClick={() => push("forgot")}>
                  {t(L("Forgot password?", "نسيت كلمة المرور؟"))}
                </button>
              </div>
              <Button size="lg" type="submit" className="w-full">{t(L("Sign in", "تسجيل الدخول"))}</Button>
            </form>
            <div className="my-6 flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              {t(L("or", "أو"))}
              <span className="h-px flex-1 bg-border" />
            </div>
            <Button variant="outline" size="lg" className="w-full" onClick={() => push("otp")}>
              <Shield className="size-4" aria-hidden />
              {t(L("Continue with Nafath", "المتابعة عبر نفاذ"))}
            </Button>
            <p className="mt-6 text-center text-[13px] text-muted-foreground">
              {t(L("New to Rehlah?", "جديد في رحلة؟"))}{" "}
              <button className="font-semibold text-primary" onClick={() => push("register")}>
                {t(L("Create account", "إنشاء حساب"))}
              </button>
            </p>
          </AuthPage>
        );

      case "register":
        return (
          <AuthPage
            eyebrow={L("Guardian registration", "تسجيل ولي الأمر")}
            title={L("Create your account", "إنشاء حسابك")}
            body={L("Takes about a minute. Your child is added after verification.", "يستغرق دقيقة تقريباً. يضاف طفلك بعد التحقق.")}
          >
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); push("otp"); }}>
              <Field label={L("Guardian full name", "اسم ولي الأمر")} required><Input placeholder={t(L("e.g. Sara Al-Otaibi", "مثال: سارة العتيبي"))} autoComplete="name" /></Field>
              <Field label={L("National ID / Iqama", "الهوية / الإقامة")} required><Input inputMode="numeric" maxLength={10} placeholder="1XXXXXXXXX" /></Field>
              <Field label={L("Mobile number", "رقم الجوال")} required><Input inputMode="tel" placeholder="+966 5X XXX XXXX" autoComplete="tel" /></Field>
              <Field label={L("Password", "كلمة المرور")} hint={L("Minimum 8 characters with a number.", "٨ أحرف على الأقل مع رقم.")} required>
                <Input type="password" placeholder="••••••••" autoComplete="new-password" />
              </Field>
              <CheckBox
                required
                align="start"
                label={t(L("I accept the terms of service and privacy policy.", "أوافق على شروط الخدمة وسياسة الخصوصية."))}
              />
              <Button size="lg" type="submit" className="w-full">{t(L("Create account", "إنشاء حساب"))}</Button>
            </form>
          </AuthPage>
        );

      case "otp":
        return (
          <AuthPage
            eyebrow={L("Security", "الأمان")}
            title={L("Verify your number", "تحقق من رقمك")}
            body={L("We sent a 4-digit code to +966 5X XXX 4821. It expires in 10 minutes.", "أرسلنا رمزاً من ٤ أرقام إلى ٤٨٢١ XXX 5X ٩٦٦+. ينتهي خلال ١٠ دقائق.")}
          >
            <ArtVerify className="mx-auto -mt-5 w-full max-w-[240px]" />

            <div className="mt-1 flex justify-center gap-3" dir="ltr">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`${t(L("Digit", "رقم"))} ${i + 1}`}
                  onChange={(e) => {
                    const next = e.currentTarget.parentElement?.children[i + 1];
                    if (e.currentTarget.value && next instanceof HTMLInputElement) next.focus();
                  }}
                  className="size-[58px] rounded-2xl border border-border bg-surface text-center text-2xl font-bold tabular-nums shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] duration-200 outline-none focus:scale-[1.04] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
                />
              ))}
            </div>

            <div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-border bg-tint-green/70 p-3.5">
              <span className="grid size-10 place-items-center rounded-xl bg-surface text-primary">
                <ShieldCheck className="size-5" aria-hidden />
              </span>
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                {t(L("Rehlah never asks for this code by phone or message. Keep it private.", "لن تطلب رحلة هذا الرمز عبر الهاتف أو الرسائل. احتفظ به لنفسك."))}
              </p>
            </div>

            <Button size="lg" className="mt-6 w-full" onClick={() => { setSignedIn(true); reset("authSuccess"); }}>
              {t(L("Verify and continue", "تحقق وتابع"))}
            </Button>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[13px] text-muted-foreground">
              <Clock className="size-3.5" aria-hidden />
              {t(L("Didn't get it?", "لم يصلك الرمز؟"))}
              <button className="font-semibold text-primary" onClick={() => notify(L("Code resent", "أعيد إرسال الرمز"))}>
                {t(L("Resend code", "إعادة إرسال الرمز"))}
              </button>
            </div>
          </AuthPage>
        );

      case "forgot":
        return (
          <AuthPage
            eyebrow={L("Account recovery", "استعادة الحساب")}
            title={L("Forgot password", "نسيت كلمة المرور")}
            body={L("Enter your registered mobile number and we will send a reset code.", "أدخل رقم جوالك المسجل وسنرسل رمز إعادة التعيين.")}
          >
            <Field label={L("Mobile number", "رقم الجوال")} required><Input inputMode="tel" placeholder="+966 5X XXX XXXX" autoComplete="tel" /></Field>
            <Button size="lg" className="mt-6 w-full" onClick={() => push("reset")}>{t(L("Send reset code", "إرسال الرمز"))}</Button>
            <button className="mt-3 min-h-11 w-full text-[13px] font-semibold text-muted-foreground" onClick={pop}>
              {t(L("Back to sign in", "العودة لتسجيل الدخول"))}
            </button>
          </AuthPage>
        );

      case "reset":
        return (
          <AuthPage
            eyebrow={L("Account recovery", "استعادة الحساب")}
            title={L("Set a new password", "تعيين كلمة مرور جديدة")}
            body={L("Choose a strong password you have not used before.", "اختر كلمة مرور قوية لم تستخدمها من قبل.")}
          >
            <div className="space-y-4">
              <Field label={L("New password", "كلمة المرور الجديدة")} required><Input type="password" placeholder="••••••••" autoComplete="new-password" /></Field>
              <Field label={L("Confirm password", "تأكيد كلمة المرور")} required><Input type="password" placeholder="••••••••" autoComplete="new-password" /></Field>
            </div>
            <Button size="lg" className="mt-6 w-full" onClick={() => { setSignedIn(true); reset("authSuccess"); }}>
              {t(L("Reset password", "إعادة التعيين"))}
            </Button>
          </AuthPage>
        );

      case "authSuccess":
        return (
          <div className="px-7 py-8">
            <Success
              eyebrow={L("Account verified", "تم توثيق الحساب")}
              title={L("You're all set, welcome to Rehlah", "تم كل شيء، أهلاً بك في رحلة")}
              body={L("Your guardian account is verified and your child's care team is connected. Everything lives in one calm place from here.", "تم توثيق حساب ولي الأمر وربط فريق رعاية طفلك. كل شيء الآن في مكان واحد هادئ.")}
              action={L("Go to dashboard", "الذهاب للوحة")}
              onAction={() => goTab("home")}
              details={
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { i: <CalendarDays className="size-4" aria-hidden />, l: L("Book visits", "احجز المواعيد") },
                    { i: <Activity className="size-4" aria-hidden />, l: L("Track progress", "تابع التقدم") },
                    { i: <FileText className="size-4" aria-hidden />, l: L("Get reports", "استلم التقارير") },
                  ].map((c, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-surface p-3 text-center">
                      <span className="mx-auto mb-1.5 grid size-9 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]">{c.i}</span>
                      <p className="text-[11px] font-semibold text-balance">{t(c.l)}</p>
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        );
      default:
        return null;
    }
  }

  /* ─────────── app screens ─────────── */
  function AppScreen() {
    switch (cur.id) {
      case "authSuccess":
        return (
          <Success
            eyebrow={L("Account verified", "تم توثيق الحساب")}
            title={L("You're all set", "تم كل شيء")}
            body={L("Your account is verified and your child's care team is connected.", "تم توثيق حسابك وربط فريق رعاية طفلك.")}
            action={L("Go to dashboard", "الذهاب للوحة")}
            onAction={() => goTab("home")}
          />
        );

      case "home":
        return (
          <div className="stagger space-y-4 pb-2">
            <section className="mesh-hero relative overflow-hidden rounded-[1.75rem] border border-border p-5">
              <span className="animate-orb absolute -end-10 -top-10 size-36 rounded-full bg-[color-mix(in_oklab,var(--wellness)_28%,transparent)] blur-2xl" aria-hidden />
              <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                    {t(L("Good morning", "صباح الخير"))}
                  </p>
                  <h2 className="mt-1 truncate text-[22px] font-bold tracking-tight">{t(p.name)}</h2>
                  <p className="mt-0.5 text-[12px] text-muted-foreground">
                    {t(L("Week", "الأسبوع"))} 6 · {plan.sessions} {t(L("sessions completed", "جلسة مكتملة"))}
                  </p>
                </div>
                <ProgressRing value={plan.progress} />
              </div>
              <div className="relative mt-4 rounded-2xl border border-border/70 bg-surface/85 p-3.5 backdrop-blur">
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]">
                    <Stethoscope className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                      {t(L("Next session", "الجلسة القادمة"))}
                    </span>
                    <span className="block truncate text-[15px] font-bold tabular-nums">
                      08:30 · {t(spec(2))}
                    </span>
                    <span className="block truncate text-[12px] text-muted-foreground">{t(doc(0))}</span>
                  </span>
                  <Badge tone="success">{t(L("Today", "اليوم"))}</Badge>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" className="flex-1" onClick={() => notify(L("Checked in", "تم تسجيل الحضور"))}>
                    {t(L("Check in", "تسجيل حضور"))}
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => push("apptDetail", 0)}>
                    {t(L("Details", "التفاصيل"))}
                  </Button>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-4 gap-2.5">
              {[
                { l: L("Book", "حجز"), i: <Plus className="size-5" aria-hidden />, go: () => push("book"), tint: "bg-tint-green text-[var(--primary-deep)]" },
                { l: L("Pay", "دفع"), i: <CreditCard className="size-5" aria-hidden />, go: () => push("invoices"), tint: "bg-tint-yellow text-[oklch(0.5_0.09_92)]" },
                { l: L("Files", "الملفات"), i: <FileText className="size-5" aria-hidden />, go: () => push("documents"), tint: "bg-tint-blue text-info" },
                { l: L("Tests", "التقييمات"), i: <ClipboardList className="size-5" aria-hidden />, go: () => push("assessments"), tint: "bg-tint-purple text-wellness" },
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={q.go}
                  className="rise flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-surface px-1 py-3 text-[11px] font-semibold"
                >
                  <span className={cn("grid size-10 place-items-center rounded-xl", q.tint)}>{q.i}</span>
                  <span className="truncate">{t(q.l)}</span>
                </button>
              ))}
            </div>

            <Tile>
              <button className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-start" onClick={() => push("planDetail", 0)}>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold">{t(L("Treatment plan progress", "تقدم الخطة العلاجية"))}</span>
                  <span className="block text-xs text-muted-foreground">
                    {plan.sessions} {t(L("sessions", "جلسة"))} · {plan.progress}%
                  </span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground rtl:rotate-180" aria-hidden />
              </button>
              <div className="mt-2.5"><ProgressBar value={plan.progress} /></div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { l: L("Attendance", "الحضور"), v: "94%", tone: "text-success" },
                  { l: L("Goals met", "الأهداف"), v: "7/9", tone: "text-primary" },
                  { l: L("Home plan", "المنزلي"), v: "82%", tone: "text-wellness" },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl bg-tint-blue/70 p-2.5 text-center">
                    <p className={cn("text-[15px] font-bold tabular-nums", m.tone)}>{m.v}</p>
                    <p className="text-[10px] text-muted-foreground">{t(m.l)}</p>
                  </div>
                ))}
              </div>
            </Tile>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => push("invoices")}
                className="rise rounded-2xl border border-border bg-surface p-3.5 text-start"
              >
                <span className="mb-2 grid size-9 place-items-center rounded-xl bg-tint-yellow text-[oklch(0.5_0.09_92)]">
                  <CreditCard className="size-4" aria-hidden />
                </span>
                <span className="block text-[11px] text-muted-foreground">{t(L("Outstanding balance", "الرصيد المستحق"))}</span>
                <span className="block text-[17px] font-bold tabular-nums">SAR 640</span>
                <span className="block text-[11px] text-muted-foreground">{t(L("1 invoice due", "فاتورة واحدة مستحقة"))}</span>
              </button>
              <button
                onClick={() => push("consents")}
                className="rise rounded-2xl border border-border bg-surface p-3.5 text-start"
              >
                <span className="mb-2 grid size-9 place-items-center rounded-xl bg-tint-purple text-wellness">
                  <PenLine className="size-4" aria-hidden />
                </span>
                <span className="block text-[11px] text-muted-foreground">{t(L("Consents", "الموافقات"))}</span>
                <span className="block text-[17px] font-bold tabular-nums">1</span>
                <span className="block text-[11px] text-muted-foreground">{t(L("Awaiting signature", "بانتظار التوقيع"))}</span>
              </button>
            </div>

            <Tile>
              <button className="mb-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center text-start text-[13px] font-semibold" onClick={() => push("documents")}>
                {t(L("Latest reports", "أحدث التقارير"))}
                <ChevronRight className="size-4 text-muted-foreground rtl:rotate-180" aria-hidden />
              </button>
              {documents.slice(0, 2).map((d, i) => (
                <ListRow
                  key={i}
                  icon={<FileText className="size-4" aria-hidden />}
                  title={t(d.name)}
                  meta={`${t(d.type)} · ${d.date}`}
                  onClick={() => push("docViewer", i)}
                />
              ))}
            </Tile>

            <Tile>
              <button className="mb-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center text-start text-[13px] font-semibold" onClick={() => push("notifications")}>
                {t(L("Notifications", "الإشعارات"))}
                <ChevronRight className="size-4 text-muted-foreground rtl:rotate-180" aria-hidden />
              </button>
              {notifications.slice(0, 3).map((n, i) => (
                <ListRow key={i} title={t(n.title)} meta={t(n.body)} onClick={() => push("notifications")} />
              ))}
            </Tile>
          </div>
        );

      case "chat":
        return (
          <Screen title={L("Care team", "فريق الرعاية")} subtitle={L("Secure messaging with your clinicians", "مراسلة آمنة مع فريقك الطبي")}>
            <Tile tint="bg-tint-green">
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-surface text-[var(--primary-deep)]">
                  <Activity className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold">{t(doc(0))}</span>
                  <span className="block text-[11px] text-success">{t(L("Usually replies within 2 hours", "يرد عادة خلال ساعتين"))}</span>
                </span>
                <Badge tone="success">{t(L("Online", "متصل"))}</Badge>
              </div>
            </Tile>
            <div className="space-y-2.5">
              {[
                { me: false, m: L("Good morning! Layan did really well in yesterday's session.", "صباح الخير! أدت ليان أداءً ممتازاً في جلسة الأمس."), at: "08:12" },
                { me: true, m: L("That's wonderful — should we continue the home exercises?", "هذا رائع — هل نستمر في التمارين المنزلية؟"), at: "08:20" },
                { me: false, m: L("Yes, three sets daily. I have attached the updated home plan.", "نعم، ثلاث مجموعات يومياً. أرفقت الخطة المنزلية المحدثة."), at: "08:24" },
                { me: true, m: L("Received, thank you.", "استلمتها، شكراً لك."), at: "08:26" },
              ].map((msg, i) => (
                <div key={i} className={cn("flex", msg.me ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-[var(--shadow-soft)]",
                      msg.me
                        ? "rounded-ee-md bg-primary text-primary-foreground"
                        : "rounded-es-md border border-border bg-surface",
                    )}
                  >
                    <p>{t(msg.m)}</p>
                    <p className={cn("mt-1 text-[10px] tabular-nums", msg.me ? "text-primary-foreground/70" : "text-muted-foreground")}>
                      {msg.at}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <form
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-2"
              onSubmit={(e) => { e.preventDefault(); notify(L("Message sent", "تم إرسال الرسالة")); }}
            >
              <Input aria-label={t(L("Message", "رسالة"))} placeholder={t(L("Write a message", "اكتب رسالة"))} />
              <Button size="icon" type="submit" aria-label={t(L("Send", "إرسال"))}>
                <Send className="size-4 rtl:rotate-180" aria-hidden />
              </Button>
            </form>
          </Screen>
        );

      case "appointments":
        return (
          <Screen title={L("Appointments", "المواعيد")} subtitle={L("Upcoming and past visits", "المواعيد القادمة والسابقة")}>
            <Button className="w-full" onClick={() => push("book")}><CalendarDays className="size-4" aria-hidden />{t(L("Book new appointment", "حجز موعد جديد"))}</Button>
            <Tile>
              {appointments.map((a, i) => (
                <ListRow key={i} onClick={() => push("apptDetail", i)}
                  title={<>{a.time} · {t(spec(a.specialty))}</>}
                  meta={<>{t(doc(a.specialist))} · {t(a.type)}</>}
                  right={<Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge>} />
              ))}
            </Tile>
          </Screen>
        );

      case "apptDetail": {
        const a = appointments[cur.arg ?? 0]!;
        return (
          <Screen title={L("Appointment details", "تفاصيل الموعد")}>
            <Tile tint="bg-tint-green">
              <p className="text-2xl font-bold tabular-nums">{a.time}</p>
              <p className="text-[13px] text-muted-foreground">{t(spec(a.specialty))} · {t(doc(a.specialist))}</p>
              <div className="mt-2"><Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge></div>
            </Tile>
            <Tile>
              {[
                [L("Type", "النوع"), t(a.type)],
                [L("Location", "الموقع"), t(L("Riyadh centre · Room 4", "مركز الرياض · غرفة ٤"))],
                [L("Notes", "ملاحظات"), t(a.notes)],
                [L("Duration", "المدة"), "45 min"],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-[13px] last:border-0">
                  <span className="text-muted-foreground">{t(k as Loc)}</span>
                  <span className="min-w-0 text-end font-medium">{v as string}</span>
                </div>
              ))}
            </Tile>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => push("reschedule", cur.arg)}>{t(L("Reschedule", "إعادة جدولة"))}</Button>
              <Button variant="danger" onClick={() => push("cancel", cur.arg)}>{t(L("Cancel", "إلغاء"))}</Button>
            </div>
          </Screen>
        );
      }

      case "reschedule":
        return (
          <Screen title={L("Reschedule", "إعادة جدولة")} subtitle={L("Pick a new date and time", "اختر تاريخاً ووقتاً جديدين")}>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {["Sun 10", "Mon 11", "Tue 12", "Wed 13", "Thu 14"].map((d, i) => (
                <button key={d} className={cn("min-h-11 shrink-0 rounded-2xl border border-border px-4 text-[13px] font-medium", i === 2 ? "bg-primary text-primary-foreground" : "bg-surface")}>{d}</button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["08:30", "09:15", "10:00", "11:00", "12:30", "15:00"].map((s, i) => (
                <button key={s} className={cn("min-h-11 rounded-xl border border-border text-[13px] font-medium tabular-nums", i === 1 ? "bg-tint-green text-[var(--primary-deep)]" : "bg-surface")}>{s}</button>
              ))}
            </div>
            <Button className="w-full" onClick={() => { notify(L("Appointment rescheduled", "تمت إعادة الجدولة")); pop(); }}>{t(L("Confirm new time", "تأكيد الوقت الجديد"))}</Button>
          </Screen>
        );

      case "cancel":
        return (
          <Screen title={L("Cancel appointment", "إلغاء الموعد")} subtitle={L("Tell us why so the clinic can follow up", "أخبرنا بالسبب لمتابعة العيادة")}>
            <Tile>
              {[L("Schedule conflict", "تعارض في الجدول"), L("Child is unwell", "الطفل مريض"), L("Travelling", "سفر"), L("Other", "أخرى")].map((r, i) => (
                <label key={i} className="flex min-h-12 items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-0">
                  <input type="radio" name="cancel-reason" defaultChecked={i === 0} className="size-[18px] rounded-[6px] accent-[var(--primary)]" />{t(r)}
                </label>
              ))}
            </Tile>
            <Button variant="danger" className="w-full" onClick={() => setSheet("confirmCancel")}>{t(L("Cancel appointment", "إلغاء الموعد"))}</Button>
          </Screen>
        );

      case "book":
        return (
          <BookScreen
            onConfirm={(b) => {
              setBooking(b);
              push("bookSuccess");
            }}
          />
        );

      case "bookSuccess": {
        const b = booking;
        return (
          <Success
            art={<ArtBooked className="w-full max-w-[300px]" />}
            eyebrow={L("Confirmed", "تم التأكيد")}
            title={L("Your session is booked", "تم حجز جلستك")}
            body={L("We've added it to your calendar. A reminder arrives 24 hours before.", "أضفناها إلى تقويمك، وسيصلك تذكير قبل ٢٤ ساعة.")}
            action={L("Back to appointments", "العودة للمواعيد")}
            onAction={() => goTab("appointments")}
            secondary={L("Add another session", "حجز جلسة أخرى")}
            onSecondary={() => reset("book")}
            details={
              <div className="rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]">
                {[
                  { l: L("Specialty", "التخصص"), v: t(spec(b?.specialty ?? 2)) },
                  { l: L("Specialist", "الأخصائي"), v: t(doc(b?.specialist ?? 0)) },
                  { l: L("Date", "التاريخ"), v: b?.date ?? "12 Aug" },
                  { l: L("Time", "الوقت"), v: `${b?.time ?? "08:30"} · 45 ${t(L("min", "دقيقة"))}` },
                  { l: L("Location", "الموقع"), v: t(L("Rehlah Centre — Riyadh", "مركز رحلة — الرياض")) },
                  { l: L("Total", "الإجمالي"), v: "SAR 320" },
                ].map((r, i) => (
                  <div key={i} className={cn("grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-2", i > 0 && "border-t border-border/70")}>
                    <span className="text-[11.5px] text-muted-foreground">{t(r.l)}</span>
                    <span className="truncate text-end text-[12.5px] font-semibold">{r.v}</span>
                  </div>
                ))}
                {b?.notes ? (
                  <p className="mt-2 rounded-xl bg-tint-blue/70 p-2.5 text-[11.5px] text-muted-foreground">{b.notes}</p>
                ) : null}
              </div>
            }
          />
        );
      }

      case "plan":
        return (
          <Screen title={L("Treatment plans", "الخطط العلاجية")} subtitle={L("Goals, sessions and home exercises", "الأهداف والجلسات والتمارين المنزلية")}>
            {treatmentPlans.map((pl, i) => (
              <Tile key={i} className="cursor-pointer" >
                <button className="w-full text-start" onClick={() => push("planDetail", i)}>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                    <span className="min-w-0"><span className="block truncate text-[13px] font-semibold">{t(spec(pl.specialty))}</span>
                    <span className="block truncate text-[11px] text-muted-foreground">{t(doc(pl.specialist))} · {pl.start} → {pl.end}</span></span>
                    <Badge tone={statusTone(pl.status.en)}>{t(pl.status)}</Badge>
                  </div>
                  <div className="mt-3"><ProgressBar value={pl.progress} tone="wellness" /></div>
                </button>
              </Tile>
            ))}
            <Button variant="outline" className="w-full" onClick={() => push("assessments")}><ClipboardList className="size-4" aria-hidden />{t(L("View assessments", "عرض التقييمات"))}</Button>
          </Screen>
        );

      case "planDetail": {
        const pl = treatmentPlans[cur.arg ?? 0]!;
        return (
          <Screen title={L("Treatment plan", "الخطة العلاجية")} subtitle={L("Goals and home exercises", "الأهداف والتمارين المنزلية")}>
            <Tile tint="bg-tint-purple">
              <p className="text-[13px] font-semibold">{t(spec(pl.specialty))}</p>
              <p className="text-[11px] text-muted-foreground">{t(doc(pl.specialist))} · {pl.start} → {pl.end}</p>
              <p className="mt-2 text-xs text-muted-foreground">{pl.sessions} {t(L("sessions", "جلسة"))}</p>
              <div className="mt-3"><ProgressBar value={pl.progress} tone="wellness" /></div>
            </Tile>
            {pl.goals.map((g, i) => (
              <Tile key={i}>
                <div className="flex items-center justify-between gap-2">
                  <p className="min-w-0 truncate text-[13px] font-medium">{t(g.goal)}</p>
                  <span className="text-[11px] text-muted-foreground tabular-nums">{g.progress}%</span>
                </div>
                <div className="mt-2"><ProgressBar value={g.progress} /></div>
              </Tile>
            ))}
            <Tile>
              <p className="mb-2 text-[13px] font-semibold">{t(L("Home exercise programme", "برنامج التمارين المنزلية"))}</p>
              {[
                L("Blowing bubbles — 5 min daily", "نفخ الفقاعات — ٥ دقائق يومياً"),
                L("Mirror sound practice — 10 min", "تمرين الأصوات أمام المرآة — ١٠ دقائق"),
                L("Picture naming cards — 15 cards", "بطاقات تسمية الصور — ١٥ بطاقة"),
              ].map((e, i) => (
                <label key={i} className="flex min-h-12 items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-0">
                  <input type="checkbox" defaultChecked={i === 0} className="size-[18px] rounded-[6px] accent-[var(--primary)]" />{t(e)}
                </label>
              ))}
            </Tile>
          </Screen>
        );
      }

      case "assessments":
        return (
          <Screen title={L("Assessments", "التقييمات")} subtitle={L("Clinical evaluations over time", "التقييمات السريرية عبر الزمن")}>
            <Tile>
              {assessments.map((a, i) => (
                <ListRow key={i} onClick={() => push("assessmentDetail", i)}
                  title={<>{t(spec(a.specialty))} · {a.date}</>}
                  meta={<>{t(doc(a.specialist))} · {a.duration}</>}
                  right={<Badge tone={statusTone(a.status.en)}>{a.score}</Badge>} />
              ))}
            </Tile>
            <Button variant="outline" className="w-full" onClick={() => push("assessmentProgress")}>{t(L("View progress over time", "عرض التقدم عبر الزمن"))}</Button>
          </Screen>
        );

      case "assessmentDetail": {
        const a = assessments[cur.arg ?? 0]!;
        return (
          <Screen title={L("Assessment details", "تفاصيل التقييم")}>
            <Tile tint="bg-tint-blue">
              <p className="text-3xl font-bold tabular-nums">{a.score}<span className="text-base text-muted-foreground">/100</span></p>
              <p className="text-[13px] text-muted-foreground">{t(spec(a.specialty))} · {a.date}</p>
              <div className="mt-2"><Badge tone={statusTone(a.status.en)}>{t(a.status)}</Badge></div>
            </Tile>
            <Tile>
              <p className="mb-2 text-[13px] font-semibold">{t(L("Domain scores", "درجات المجالات"))}</p>
              {[
                { d: L("Receptive language", "اللغة الاستقبالية"), v: 78 },
                { d: L("Expressive language", "اللغة التعبيرية"), v: 64 },
                { d: L("Articulation", "النطق"), v: 88 },
                { d: L("Social communication", "التواصل الاجتماعي"), v: 71 },
              ].map((r, i) => (
                <div key={i} className="border-b border-border py-2.5 last:border-0">
                  <div className="flex items-center justify-between text-[13px]"><span>{t(r.d)}</span><span className="tabular-nums text-muted-foreground">{r.v}%</span></div>
                  <div className="mt-1.5"><ProgressBar value={r.v} /></div>
                </div>
              ))}
            </Tile>
            <Tile>
              <p className="text-[13px] font-semibold">{t(L("Specialist notes", "ملاحظات الأخصائي"))}</p>
              <p className="mt-1 text-[13px] text-muted-foreground">{t(L("Steady improvement in articulation. Continue home programme and reassess in 6 weeks.", "تحسن مطرد في النطق. استمر في البرنامج المنزلي وأعد التقييم بعد ٦ أسابيع."))}</p>
            </Tile>
            <Button variant="outline" className="w-full" onClick={() => push("pdfViewer")}><Download className="size-4" aria-hidden />{t(L("Download report", "تنزيل التقرير"))}</Button>
          </Screen>
        );
      }

      case "assessmentProgress":
        return (
          <Screen title={L("Assessment progress", "تقدم التقييمات")} subtitle={L("Scores across the last four assessments", "الدرجات عبر آخر أربعة تقييمات")}>
            <Tile>
              <div className="flex h-44 items-end gap-3">
                {assessments.map((a, i) => (
                  <div key={i} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end">
                      <div className="w-full rounded-t-xl bg-primary transition-all" style={{ height: `${a.score}%` }} role="img" aria-label={`${a.date}: ${a.score}`} />
                    </div>
                    <span className="text-[10px] text-muted-foreground tabular-nums">{a.score}</span>
                  </div>
                ))}
              </div>
            </Tile>
            <Tile><p className="text-[13px] text-muted-foreground">{t(L("Average improvement of 11 points per quarter across all domains.", "متوسط تحسن ١١ نقطة كل ربع سنة عبر جميع المجالات."))}</p></Tile>
          </Screen>
        );

      case "documents":
        return (
          <Screen title={L("Documents", "المستندات")} subtitle={L("Reports, results and contracts", "التقارير والنتائج والعقود")}>
            <Tile>
              {documents.map((d, i) => (
                <ListRow key={i} icon={<FileText className="size-4" aria-hidden />} onClick={() => push("docViewer", i)}
                  title={t(d.name)} meta={`${d.date} · ${d.size} · ${t(d.type)}`} />
              ))}
            </Tile>
            <Button variant="outline" className="w-full" onClick={() => notify(L("Upload started", "بدأ الرفع"))}>{t(L("Upload a document", "رفع مستند"))}</Button>
          </Screen>
        );

      case "docViewer": {
        const d = documents[cur.arg ?? 0]!;
        return (
          <Screen title={L("Document viewer", "عارض المستندات")}>
            <Tile>
              <p className="truncate text-[13px] font-semibold">{t(d.name)}</p>
              <p className="text-[11px] text-muted-foreground">{d.date} · {d.size} · {t(d.by)}</p>
            </Tile>
            <div className="grid h-72 place-items-center rounded-2xl border border-border bg-muted text-muted-foreground">
              <div className="text-center"><FileText className="mx-auto size-10" aria-hidden /><p className="mt-2 text-[13px]">{t(L("Preview — page 1 of 3", "معاينة — صفحة ١ من ٣"))}</p></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => notify(L("Downloaded", "تم التنزيل"))}><Download className="size-4" aria-hidden />{t(L("Download", "تنزيل"))}</Button>
              <Button variant="outline" onClick={() => notify(L("Link shared", "تمت المشاركة"))}>{t(L("Share", "مشاركة"))}</Button>
            </div>
          </Screen>
        );
      }

      case "wallet":
        return (
          <Screen title={L("Wallet", "المحفظة")} subtitle={L("Invoices, payments and packages", "الفواتير والمدفوعات والباقات")}>
            <Tile tint="bg-tint-yellow">
              <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">{t(L("Balance due", "الرصيد المستحق"))}</p>
              <p className="mt-1 text-2xl font-bold">{p.due}</p>
              <Button size="sm" className="mt-3" onClick={() => push("payment", 3)}>{t(L("Pay now", "ادفع الآن"))}</Button>
            </Tile>
            <Tile>
              <p className="mb-1 text-[13px] font-semibold">{t(L("Active package", "الباقة النشطة"))}</p>
              <p className="text-[11px] text-muted-foreground">{t(L("Speech therapy — 24 of 36 sessions used", "علاج النطق — ٢٤ من ٣٦ جلسة مستخدمة"))}</p>
              <div className="mt-2"><ProgressBar value={67} tone="accent" /></div>
            </Tile>
            <Tile>
              <p className="mb-1 text-[13px] font-semibold">{t(L("Invoices", "الفواتير"))}</p>
              {invoices.map((inv, i) => (
                <ListRow key={i} onClick={() => push("invoiceDetail", i)} title={inv.number}
                  meta={`${inv.date} · ${inv.total.toLocaleString()} SAR`}
                  right={<Badge tone={statusTone(inv.status.en)}>{t(inv.status)}</Badge>} />
              ))}
            </Tile>
            <Button variant="outline" className="w-full" onClick={() => push("sickLeave")}>{t(L("Sick leave certificates", "الإجازات المرضية"))}</Button>
          </Screen>
        );

      case "invoices":
        return (
          <Screen title={L("Invoices", "الفواتير")} subtitle={L("All billing documents", "جميع مستندات الفوترة")}>
            <Tile>
              {invoices.map((inv, i) => (
                <ListRow key={i} onClick={() => push("invoiceDetail", i)} title={inv.number}
                  meta={`${inv.date} · ${inv.total.toLocaleString()} SAR`}
                  right={<Badge tone={statusTone(inv.status.en)}>{t(inv.status)}</Badge>} />
              ))}
            </Tile>
          </Screen>
        );

      case "invoiceDetail": {
        const inv = invoices[cur.arg ?? 0]!;
        const balance = inv.total - inv.paid;
        return (
          <Screen title={L("Invoice details", "تفاصيل الفاتورة")}>
            <Tile tint="bg-tint-green">
              <p className="text-[13px] font-semibold">{inv.number}</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">{inv.total.toLocaleString()} SAR</p>
              <div className="mt-2"><Badge tone={statusTone(inv.status.en)}>{t(inv.status)}</Badge></div>
            </Tile>
            <Tile>
              {[
                [L("Issued", "تاريخ الإصدار"), inv.date],
                [L("Paid", "المدفوع"), `${inv.paid.toLocaleString()} SAR`],
                [L("Balance", "المتبقي"), `${balance.toLocaleString()} SAR`],
                [L("Method", "طريقة الدفع"), t(inv.method)],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-[13px] last:border-0">
                  <span className="text-muted-foreground">{t(k as Loc)}</span>
                  <span className="text-end font-medium">{v as string}</span>
                </div>
              ))}
            </Tile>
            <Tile>
              <p className="mb-2 text-[13px] font-semibold">{t(L("Line items", "بنود الفاتورة"))}</p>
              {[
                { d: L("Speech therapy session ×4", "جلسة نطق ×٤"), a: 800 },
                { d: L("Initial assessment", "تقييم أولي"), a: 300 },
                { d: L("VAT 15%", "ضريبة القيمة المضافة ١٥٪"), a: 100 },
              ].map((li, i) => (
                <div key={i} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border py-2.5 text-[13px] last:border-0">
                  <span className="min-w-0 truncate">{t(li.d)}</span><span className="tabular-nums">{li.a} SAR</span>
                </div>
              ))}
            </Tile>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => push("pdfViewer")}>{t(L("View PDF", "عرض PDF"))}</Button>
              <Button disabled={balance === 0} onClick={() => push("payment", cur.arg)}>{t(L("Pay now", "ادفع الآن"))}</Button>
            </div>
          </Screen>
        );
      }

      case "payment": {
        const inv = invoices[cur.arg ?? 0]!;
        return (
          <Screen title={L("Payment", "الدفع")} subtitle={L("Secure checkout", "دفع آمن")}>
            <Tile tint="bg-tint-green">
              <p className="text-[11px] text-muted-foreground">{t(L("Amount due", "المبلغ المستحق"))}</p>
              <p className="text-2xl font-bold tabular-nums">{(inv.total - inv.paid).toLocaleString()} SAR</p>
            </Tile>
            <Tile>
              <p className="mb-2 text-[13px] font-semibold">{t(L("Payment method", "طريقة الدفع"))}</p>
              {[L("Mada card", "بطاقة مدى"), L("Apple Pay", "أبل باي"), L("Credit card", "بطاقة ائتمانية"), L("Bank transfer", "تحويل بنكي")].map((m, i) => (
                <label key={i} className="flex min-h-12 items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-0">
                  <input type="radio" name="pay-method" defaultChecked={i === 0} className="size-[18px] rounded-[6px] accent-[var(--primary)]" />{t(m)}
                </label>
              ))}
            </Tile>
            <div className="space-y-3">
              <Field label={L("Card number", "رقم البطاقة")} required><Input inputMode="numeric" placeholder="•••• •••• •••• 4242" /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label={L("Expiry", "تاريخ الانتهاء")} required><Input placeholder="MM/YY" /></Field>
                <Field label={L("CVV", "رمز التحقق")} required><Input inputMode="numeric" placeholder="•••" /></Field>
              </div>
            </div>
            <Button className="w-full" onClick={() => push("paymentSuccess")}><Lock className="size-4" aria-hidden />{t(L("Pay securely", "ادفع بأمان"))}</Button>
          </Screen>
        );
      }

      case "paymentSuccess":
        return <Success title={L("Payment successful", "تم الدفع بنجاح")} body={L("Your receipt has been emailed and saved to your documents.", "تم إرسال الإيصال إلى بريدك وحفظه في مستنداتك.")} action={L("Back to wallet", "العودة للمحفظة")} onAction={() => goTab("wallet")} />;

      case "consents":
        return (
          <Screen title={L("Consents", "الموافقات")} subtitle={L("Signed and pending authorisations", "الموافقات الموقعة والمعلقة")}>
            <Tile>
              {consents.map((c, i) => (
                <ListRow key={i} onClick={() => push("consentDetail", i)} title={t(c.name)} meta={c.date}
                  right={<Badge tone={statusTone(c.status.en)}>{t(c.status)}</Badge>} />
              ))}
            </Tile>
          </Screen>
        );

      case "consentDetail": {
        const c = consents[cur.arg ?? 0]!;
        return (
          <Screen title={L("Consent details", "تفاصيل الموافقة")}>
            <Tile><p className="text-[13px] font-semibold">{t(c.name)}</p><p className="mt-0.5 text-[11px] text-muted-foreground">{c.date}</p>
              <div className="mt-2"><Badge tone={statusTone(c.status.en)}>{t(c.status)}</Badge></div></Tile>
            <Tile><p className="text-[13px] leading-relaxed text-muted-foreground">{t(c.body)}</p></Tile>
            <Button className="w-full" onClick={() => push("consentSign", cur.arg)}><PenLine className="size-4" aria-hidden />{t(L("Review and sign", "مراجعة وتوقيع"))}</Button>
          </Screen>
        );
      }

      case "consentSign":
        return (
          <Screen title={L("Sign consent", "توقيع الموافقة")} subtitle={L("Draw your signature below", "ارسم توقيعك أدناه")}>
            <div className="grid h-40 place-items-center rounded-2xl border-2 border-dashed border-border bg-surface text-muted-foreground">
              <span className="text-[13px]">{t(L("Signature area", "منطقة التوقيع"))}</span>
            </div>
            <label className="flex items-start gap-2 text-[12px] text-muted-foreground">
              <input type="checkbox" className="mt-0.5 size-[18px] rounded-[6px] accent-[var(--primary)]" />
              {t(L("I confirm I am the legal guardian and agree to the terms above.", "أؤكد أنني ولي الأمر القانوني وأوافق على الشروط أعلاه."))}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={pop}>{t(L("Clear", "مسح"))}</Button>
              <Button onClick={() => push("consentSigned")}>{t(L("Submit signature", "إرسال التوقيع"))}</Button>
            </div>
          </Screen>
        );

      case "consentSigned":
        return <Success title={L("Consent signed", "تم توقيع الموافقة")} body={L("A signed copy has been added to your documents.", "تمت إضافة نسخة موقعة إلى مستنداتك.")} action={L("Back to consents", "العودة للموافقات")} onAction={() => { setStack([{ id: "more" }, { id: "consents" }]); }} />;

      case "sickLeave":
        return (
          <Screen title={L("Sick leave", "الإجازات المرضية")} subtitle={L("Issued certificates", "الشهادات الصادرة")}>
            {sickLeaves.length === 0 ? (
              <EmptyState icon={<FileText className="size-6" />} title={L("No certificates yet", "لا توجد شهادات")} description={L("Certificates issued by your specialist appear here.", "تظهر هنا الشهادات الصادرة من أخصائيك.")} />
            ) : (
              <Tile>
                {sickLeaves.map((s, i) => (
                  <ListRow key={i} icon={<FileText className="size-4" aria-hidden />} onClick={() => push("pdfViewer")}
                    title={s.number} meta={`${s.date} · ${s.days} ${t(L("days", "أيام"))}`}
                    right={<Badge tone="success">{t(s.status)}</Badge>} />
                ))}
              </Tile>
            )}
          </Screen>
        );

      case "pdfViewer":
        return (
          <Screen title={L("PDF viewer", "عارض PDF")}>
            <div className="space-y-3">
              {[1, 2].map((n) => (
                <div key={n} className="grid h-64 place-items-center rounded-2xl border border-border bg-surface text-muted-foreground shadow-[var(--shadow-soft)]">
                  <span className="text-[13px]">{t(L("Page", "صفحة"))} {n}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => notify(L("Downloaded", "تم التنزيل"))}><Download className="size-4" aria-hidden />{t(L("Download", "تنزيل"))}</Button>
              <Button variant="outline" onClick={() => notify(L("Sent to printer", "أُرسل للطباعة"))}>{t(L("Print", "طباعة"))}</Button>
            </div>
          </Screen>
        );

      case "notifications":
        return (
          <Screen title={L("Notifications", "الإشعارات")} subtitle={L("Reminders and clinic updates", "التذكيرات وتحديثات العيادة")}>
            <Tile>
              {notifications.map((n, i) => (
                <ListRow key={i} icon={<Bell className={cn("size-4", n.unread ? "text-primary" : "text-muted-foreground")} aria-hidden />}
                  title={t(n.title)} meta={`${t(n.body)} · ${t(n.time)}`} onClick={() => notify(L("Marked as read", "تم وضع علامة مقروء"))} />
              ))}
            </Tile>
            <Button variant="outline" className="w-full" onClick={() => push("notifPrefs")}>{t(L("Notification preferences", "تفضيلات الإشعارات"))}</Button>
          </Screen>
        );

      case "profileTab":
      case "more":
        return (
          <Screen title={L("More", "المزيد")} subtitle={L("Profile, documents and settings", "الملف والمستندات والإعدادات")}>
            <Tile>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-tint-green text-base font-bold text-[var(--primary-deep)]">{t(p.name).slice(0, 1)}</span>
                <span className="min-w-0"><span className="block truncate text-[13px] font-semibold">{t(p.name)}</span>
                <span className="block truncate text-[11px] text-muted-foreground">{p.file}</span></span>
              </div>
            </Tile>
            <Tile>
              {[
                { l: L("Profile & guardian info", "الملف وبيانات ولي الأمر"), go: "profile" as ScreenId, i: <User className="size-4" aria-hidden /> },
                { l: L("Documents", "المستندات"), go: "documents" as ScreenId, i: <FileText className="size-4" aria-hidden /> },
                { l: L("Assessments", "التقييمات"), go: "assessments" as ScreenId, i: <ClipboardList className="size-4" aria-hidden /> },
                { l: L("Consents", "الموافقات"), go: "consents" as ScreenId, i: <PenLine className="size-4" aria-hidden /> },
                { l: L("Sick leave", "الإجازات المرضية"), go: "sickLeave" as ScreenId, i: <FileText className="size-4" aria-hidden /> },
                { l: L("Notifications", "الإشعارات"), go: "notifications" as ScreenId, i: <Bell className="size-4" aria-hidden /> },
                { l: L("Settings", "الإعدادات"), go: "settings" as ScreenId, i: <Settings className="size-4" aria-hidden /> },
                { l: L("Help & support", "المساعدة والدعم"), go: "help" as ScreenId, i: <LifeBuoy className="size-4" aria-hidden /> },
              ].map((item, i) => (
                <ListRow key={i} icon={item.i} title={t(item.l)} onClick={() => push(item.go)} />
              ))}
            </Tile>
            <Tile>
              <ListRow icon={<MessageSquare className="size-4" aria-hidden />} title={t(L("Message care team", "مراسلة فريق الرعاية"))} onClick={() => notify(L("Message thread opened", "تم فتح المحادثة"))} />
              <ListRow icon={<LogOut className="size-4" aria-hidden />} title={t(L("Sign out", "تسجيل الخروج"))} onClick={() => setSheet("confirmLogout")} />
            </Tile>
          </Screen>
        );

      case "profile":
        return (
          <Screen title={L("Profile", "الملف الشخصي")} subtitle={L("Patient and guardian information", "بيانات المريض وولي الأمر")}>
            <Tile>
              {[
                [L("Patient name", "اسم المريض"), t(p.name)],
                [L("File number", "رقم الملف"), p.file],
                [L("Date of birth", "تاريخ الميلاد"), "14 Mar 2019"],
                [L("Guardian", "ولي الأمر"), t(L("Nouf Al-Otaibi", "نوف العتيبي"))],
                [L("Mobile", "الجوال"), "+966 55 123 4567"],
                [L("Insurance", "التأمين"), t(L("Bupa Arabia — Class A", "بوبا العربية — فئة أ"))],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-[13px] last:border-0">
                  <span className="text-muted-foreground">{t(k as Loc)}</span><span className="min-w-0 truncate text-end font-medium">{v as string}</span>
                </div>
              ))}
            </Tile>
            <Button variant="outline" className="w-full" onClick={() => notify(L("Edit request sent to reception", "تم إرسال طلب التعديل للاستقبال"))}>{t(L("Request an update", "طلب تحديث"))}</Button>
          </Screen>
        );

      case "settings":
        return (
          <Screen title={L("Settings", "الإعدادات")}>
            <Tile>
              <ListRow icon={<Globe className="size-4" aria-hidden />} title={t(L("Language", "اللغة"))} meta={lang === "en" ? "English" : "العربية"} onClick={() => push("langSettings")} />
              <ListRow icon={<Bell className="size-4" aria-hidden />} title={t(L("Notification preferences", "تفضيلات الإشعارات"))} onClick={() => push("notifPrefs")} />
              <ListRow icon={<Shield className="size-4" aria-hidden />} title={t(L("Privacy & security", "الخصوصية والأمان"))} onClick={() => push("privacy")} />
              <ListRow icon={<LifeBuoy className="size-4" aria-hidden />} title={t(L("Help & support", "المساعدة والدعم"))} onClick={() => push("help")} />
            </Tile>
            <Tile>
              <ListRow icon={<LogOut className="size-4" aria-hidden />} title={t(L("Sign out", "تسجيل الخروج"))} onClick={() => setSheet("confirmLogout")} />
              <ListRow icon={<Trash2 className="size-4 text-destructive" aria-hidden />} title={t(L("Delete account", "حذف الحساب"))} onClick={() => push("deleteAccount")} />
            </Tile>
          </Screen>
        );

      case "langSettings":
        return (
          <Screen title={L("Language", "اللغة")} subtitle={L("Interface language and direction", "لغة الواجهة والاتجاه")}>
            <Tile>
              {([["en", "English"], ["ar", "العربية"]] as const).map(([code, label]) => (
                <button key={code} onClick={() => { setLang(code); notify(L("Language updated", "تم تحديث اللغة")); }}
                  className="grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border py-3 text-start text-[13px] last:border-0" aria-pressed={lang === code}>
                  {label}{lang === code && <Check className="size-4 text-primary" aria-hidden />}
                </button>
              ))}
            </Tile>
          </Screen>
        );

      case "notifPrefs":
        return (
          <Screen title={L("Notification preferences", "تفضيلات الإشعارات")}>
            <Tile>
              {[
                L("Appointment reminders", "تذكيرات المواعيد"),
                L("Invoice and payment alerts", "تنبيهات الفواتير والمدفوعات"),
                L("Treatment plan updates", "تحديثات الخطة العلاجية"),
                L("Clinic announcements", "إعلانات المركز"),
                L("WhatsApp messages", "رسائل واتساب"),
                L("SMS messages", "الرسائل النصية"),
              ].map((n, i) => (
                <label key={i} className="flex min-h-12 items-center justify-between gap-3 border-b border-border py-3 text-[13px] last:border-0">
                  <span className="min-w-0">{t(n)}</span>
                  <input type="checkbox" defaultChecked={i < 4} className="size-5 shrink-0 accent-[var(--primary)]" />
                </label>
              ))}
            </Tile>
          </Screen>
        );

      case "privacy":
        return (
          <Screen title={L("Privacy & security", "الخصوصية والأمان")}>
            <Tile>
              <ListRow icon={<Lock className="size-4" aria-hidden />} title={t(L("Change password", "تغيير كلمة المرور"))} onClick={() => push("reset")} />
              <ListRow icon={<Shield className="size-4" aria-hidden />} title={t(L("Two-factor authentication", "المصادقة الثنائية"))} meta={t(L("Enabled via SMS", "مفعلة عبر الرسائل"))} onClick={() => notify(L("Two-factor settings opened", "تم فتح إعدادات المصادقة"))} />
              <ListRow icon={<FileText className="size-4" aria-hidden />} title={t(L("Download my data", "تنزيل بياناتي"))} onClick={() => notify(L("Export requested", "تم طلب التصدير"))} />
            </Tile>
            <Tile><p className="text-[13px] text-muted-foreground">{t(L("Rehlah stores clinical data in the Kingdom of Saudi Arabia in line with PDPL and MOH requirements.", "تخزن رحلة البيانات السريرية داخل المملكة العربية السعودية وفق متطلبات نظام حماية البيانات ووزارة الصحة."))}</p></Tile>
          </Screen>
        );

      case "help":
        return (
          <Screen title={L("Help & support", "المساعدة والدعم")}>
            <Tile>
              <ListRow icon={<MessageSquare className="size-4" aria-hidden />} title={t(L("Chat with support", "الدردشة مع الدعم"))} onClick={() => notify(L("Support chat opened", "تم فتح دردشة الدعم"))} />
              <ListRow icon={<LifeBuoy className="size-4" aria-hidden />} title={t(L("Call the clinic", "الاتصال بالمركز"))} meta="+966 11 000 0000" onClick={() => notify(L("Calling clinic", "جارٍ الاتصال"))} />
            </Tile>
            <Tile>
              <p className="mb-2 text-[13px] font-semibold">{t(L("Frequently asked", "الأسئلة الشائعة"))}</p>
              {[
                L("How do I reschedule a session?", "كيف أعيد جدولة الجلسة؟"),
                L("When are invoices issued?", "متى تصدر الفواتير؟"),
                L("How do I add a second child?", "كيف أضيف طفلاً آخر؟"),
              ].map((q, i) => (
                <details key={i} className="border-b border-border py-2.5 text-[13px] last:border-0">
                  <summary className="min-h-11 cursor-pointer py-2 font-medium">{t(q)}</summary>
                  <p className="pt-1 text-muted-foreground">{t(L("Open the relevant screen and use the primary action button; reception is notified automatically.", "افتح الشاشة المعنية واستخدم الزر الرئيسي؛ يتم إشعار الاستقبال تلقائياً."))}</p>
                </details>
              ))}
            </Tile>
          </Screen>
        );

      case "deleteAccount":
        return (
          <Screen title={L("Delete account", "حذف الحساب")} subtitle={L("This action is permanent", "هذا الإجراء نهائي")}>
            <Tile tint="bg-tint-yellow">
              <p className="text-[13px] text-muted-foreground">{t(L("Clinical records are retained for the legally required period. Your portal access and personal profile will be removed.", "يتم الاحتفاظ بالسجلات السريرية للمدة النظامية. سيتم حذف وصولك للبوابة وملفك الشخصي."))}</p>
            </Tile>
            <Field label={L("Type DELETE to confirm", "اكتب DELETE للتأكيد")} required><Input placeholder="DELETE" /></Field>
            <Button variant="danger" className="w-full" onClick={() => setSheet("confirmDelete")}>{t(L("Delete my account", "حذف حسابي"))}</Button>
          </Screen>
        );

      default:
        return null;
    }
  }

  const headerTitle = TABS.find((tb) => tb.id === cur.id)?.label ?? SCREEN_TITLES[cur.id];

  return (
    <div className="bg-tint-blue/60 px-4 py-8">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-[oklch(0.28_0.01_229)] bg-background shadow-[var(--shadow-lifted)]">
          {/* status bar */}
          <div className="flex items-center justify-between bg-surface px-6 pt-3 pb-1 text-[11px] font-semibold text-muted-foreground">
            <span>9:41</span><span>Rehlah</span><span>100%</span>
          </div>

          {/* app header */}
          {!chromeless && (
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border/60 bg-surface px-4 pb-3">
              {isTab ? (
                <span className="grid size-10 place-items-center rounded-2xl bg-tint-green text-sm font-bold text-[var(--primary-deep)] ring-1 ring-border">
                  {t(p.name).slice(0, 1)}
                </span>
              ) : (
                <button
                  onClick={pop}
                  aria-label={t(L("Back", "رجوع"))}
                  className="grid size-10 place-items-center rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-x-0.5 hover:bg-muted active:scale-95 rtl:hover:translate-x-0.5"
                >
                  <ChevronRight className="size-[18px] rotate-180 rtl:rotate-0" aria-hidden />
                </button>
              )}
              <div className={cn("min-w-0", !isTab && "text-center")}>
                {isTab ? (
                  <>
                    <p className="truncate text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {t(L("Guardian", "ولي الأمر"))}
                    </p>
                    <p className="truncate text-[14px] leading-tight font-bold">{t(p.name)}</p>
                  </>
                ) : (
                  <>
                    <p className="truncate text-[14px] leading-tight font-bold">{t(headerTitle ?? L("Rehlah", "رحلة"))}</p>
                    <p className="truncate text-[11px] text-muted-foreground">{t(p.name)}</p>
                  </>
                )}
              </div>
              <button
                onClick={() => push("notifications")}
                aria-label={t(L("Notifications", "الإشعارات"))}
                className="relative grid size-10 place-items-center rounded-2xl border border-border bg-surface transition-all duration-200 hover:bg-muted active:scale-95"
              >
                <Bell className="size-[18px]" aria-hidden />
                <span className="absolute end-2.5 top-2.5 size-2 rounded-full bg-destructive ring-2 ring-surface" />
              </button>
            </div>
          )}

          {/* body */}
          <div ref={bodyRef} data-screen={cur.id} key={cur.id + String(cur.arg)} className={cn("screen-in overflow-y-auto", chromeless ? "h-[700px] bg-surface" : "h-[620px] bg-tint-green/40 px-5 py-5")}>
            {chromeless ? <AuthScreen /> : <AppScreen />}
          </div>

          {/* tab bar */}
          {!chromeless && (
            <nav
              aria-label={t(L("App navigation", "تنقل التطبيق"))}
              className="glass-nav grid grid-cols-5 border-t border-border px-2 pt-2 pb-4"
            >
              {TABS.map((item) => {
                const Icon = item.icon;
                const active = cur.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => goTab(item.id)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex min-h-12 flex-col items-center gap-1 rounded-2xl py-1.5 text-[10px] font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-9 place-items-center rounded-xl transition-all duration-300",
                        active ? "-translate-y-0.5 bg-tint-green" : "bg-transparent",
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="truncate">{t(item.label)}</span>
                    {active && <span className="absolute -bottom-0.5 h-1 w-6 rounded-full bg-primary" />}
                  </button>
                );
              })}
            </nav>
          )}

          {/* sheets */}
          <Sheet open={sheet === "confirmCancel"} onClose={() => setSheet(null)} title={L("Cancel this appointment?", "إلغاء هذا الموعد؟")}>
            <p className="mb-4 text-[13px] text-muted-foreground">{t(L("Cancelling within 24 hours may incur a fee as per clinic policy.", "الإلغاء خلال ٢٤ ساعة قد يترتب عليه رسوم حسب سياسة المركز."))}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => setSheet(null)}>{t(L("Keep it", "الاحتفاظ"))}</Button>
              <Button variant="danger" onClick={() => { setSheet(null); notify(L("Appointment cancelled", "تم إلغاء الموعد")); goTab("appointments"); }}>{t(L("Confirm", "تأكيد"))}</Button>
            </div>
          </Sheet>
          <Sheet open={sheet === "confirmLogout"} onClose={() => setSheet(null)} title={L("Sign out?", "تسجيل الخروج؟")}>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => setSheet(null)}>{t(L("Stay signed in", "البقاء"))}</Button>
              <Button onClick={() => { setSheet(null); setSignedIn(false); reset("login"); }}>{t(L("Sign out", "تسجيل الخروج"))}</Button>
            </div>
          </Sheet>
          <Sheet open={sheet === "confirmDelete"} onClose={() => setSheet(null)} title={L("Delete account permanently?", "حذف الحساب نهائياً؟")}>
            <p className="mb-4 text-[13px] text-muted-foreground">{t(L("You will lose access to appointments, invoices and documents.", "ستفقد الوصول للمواعيد والفواتير والمستندات."))}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => setSheet(null)}>{t(L("Keep account", "الاحتفاظ بالحساب"))}</Button>
              <Button variant="danger" onClick={() => { setSheet(null); setSignedIn(false); reset("welcome"); }}>{t(L("Delete", "حذف"))}</Button>
            </div>
          </Sheet>

          {/* toast */}
          {toast && (
            <div role="status" aria-live="polite" className="animate-in-soft absolute inset-x-6 bottom-24 z-30 rounded-2xl bg-foreground px-4 py-3 text-center text-[13px] font-medium text-background shadow-[var(--shadow-lifted)]">
              {t(toast)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
