import { type ReactNode, type ButtonHTMLAttributes, type InputHTMLAttributes, useId } from "react";
import { cn } from "@/lib/utils";
import { useI18n, type Loc } from "@/lib/i18n";
import { Search, ChevronLeft, ChevronRight, ChevronDown, X, Inbox } from "lucide-react";

export function Card({
  className,
  children,
  tint,
  interactive,
  ...rest
}: {
  className?: string;
  children: ReactNode;
  tint?: "green" | "blue" | "yellow" | "purple" | "none";
  interactive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  const tints: Record<string, string> = {
    green: "bg-tint-green",
    blue: "bg-tint-blue",
    yellow: "bg-tint-yellow",
    purple: "bg-tint-purple",
    none: "bg-surface",
  };
  return (
    <div
      {...rest}
      className={cn(
        "card-surface p-4 sm:p-5",
        tints[tint ?? "none"],
        interactive && "rise cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: Loc | string;
  subtitle?: Loc | string;
  action?: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        <h2 className="truncate text-lg font-bold sm:text-xl">{t(title)}</h2>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{t(subtitle)}</p>}
      </div>
      {action}
    </div>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "accent" | "danger" | "wellness";
  size?: "sm" | "md" | "lg" | "icon";
};

export function Button({ className, variant = "primary", size = "md", ...rest }: BtnProps) {
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:brightness-105 shadow-[var(--shadow-soft)]",
    secondary: "bg-tint-green text-[var(--primary-deep)] hover:bg-[color-mix(in_oklab,var(--primary)_14%,white)]",
    ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
    outline: "border border-border bg-surface text-foreground hover:bg-muted",
    accent: "bg-accent text-accent-foreground hover:brightness-105",
    wellness: "bg-wellness text-wellness-foreground hover:brightness-110",
    danger: "bg-destructive text-destructive-foreground hover:brightness-110",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-[13px] rounded-xl",
    md: "h-11 px-4 text-sm rounded-xl",
    lg: "h-12 px-6 text-[15px] rounded-2xl",
    icon: "h-11 w-11 rounded-xl",
  };
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
    />
  );
}

export type Tone =
  | "primary"
  | "accent"
  | "wellness"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "info";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const tones: Record<Tone, string> = {
    primary: "bg-[color-mix(in_oklab,var(--primary)_16%,white)] text-[var(--primary-deep)]",
    accent: "bg-tint-yellow text-[oklch(0.5_0.09_92)]",
    wellness: "bg-tint-purple text-wellness",
    success: "bg-[color-mix(in_oklab,var(--success)_14%,white)] text-success",
    warning: "bg-[color-mix(in_oklab,var(--warning)_18%,white)] text-[oklch(0.52_0.11_81)]",
    danger: "bg-[color-mix(in_oklab,var(--destructive)_12%,white)] text-destructive",
    info: "bg-tint-blue text-info",
    neutral: "bg-muted text-muted-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Field({
  label,
  children,
  hint,
  required,
}: {
  label: Loc | string;
  children: ReactNode;
  hint?: Loc | string | undefined;
  required?: boolean;
}) {
  const { t } = useI18n();
  return (
    <label className="block space-y-2">
      <span className="flex items-center gap-1 text-[13px] leading-none font-semibold text-foreground">
        {t(label)}
        {required && (
          <span className="text-destructive" aria-hidden>
            *
          </span>
        )}
      </span>
      {children}
      {hint && <span className="block text-[12px] leading-snug text-muted-foreground">{t(hint)}</span>}
    </label>
  );
}

export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={cn(
        "h-11 px-3.5 text-sm",
        "w-full rounded-xl border border-border bg-surface text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow,background-color] duration-200 outline-none placeholder:text-muted-foreground/80 hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_16%,transparent)]",
        className,
      )}
    />
  );
}

export function Select({
  className,
  options,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: (Loc | string)[] }) {
  const { t } = useI18n();
  return (
    <div className={cn("relative flex w-full min-w-0 items-center", className)}>
    <select
      {...rest}
      className={cn(
        "h-11 appearance-none truncate ps-3.5 pe-10 text-sm",
        "w-full rounded-xl border border-border bg-surface text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow,background-color] duration-200 outline-none hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_16%,transparent)]",
      )}
    >
      {options.map((o, i) => (
        <option key={i}>{t(o)}</option>
      ))}
    </select>
    <ChevronDown
      className="pointer-events-none absolute end-3 size-4 text-muted-foreground"
      aria-hidden
    />
    </div>
  );
}

export function Textarea({
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...rest}
      rows={rest.rows ?? 3}
      className={cn(
        "px-3.5 py-2.5 text-sm leading-relaxed",
        "w-full rounded-xl border border-border bg-surface text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow,background-color] duration-200 outline-none placeholder:text-muted-foreground/80 hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_16%,transparent)]",
        className,
      )}
    />
  );
}

export function SearchBar({
  placeholder,
  className,
  ...rest
}: {
  placeholder?: Loc | string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder" | "className" | "type">) {
  const { t } = useI18n();
  const id = useId();
  const ph = t(placeholder ?? { en: "Search", ar: "بحث" });
  return (
    <div className={cn("relative min-w-0 flex-1", className)}>
      <Search
        className="pointer-events-none absolute top-1/2 start-3.5 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <input
        id={id}
        {...rest}
        type="search"
        aria-label={ph}
        placeholder={ph}
        className="h-11 w-full rounded-xl border border-border bg-surface ps-10 pe-3.5 text-sm shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground/80 hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
      />
    </div>
  );
}

export function FilterChip({ label }: { label: string }) {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-green px-3 py-1.5 text-xs font-medium text-[var(--primary-deep)]">
      {label}
      <button
        type="button"
        aria-label={`${t({ en: "Remove filter", ar: "إزالة عامل التصفية" })}: ${label}`}
        className="rounded-full p-0.5 hover:bg-white/70"
      >
        <X className="size-3" aria-hidden />
      </button>
    </span>
  );
}

export function DataTable({
  columns,
  rows,
  selectable,
  caption,
}: {
  columns: (Loc | string)[];
  rows: ReactNode[][];
  selectable?: boolean;
  caption?: Loc | string;
}) {
  const { t } = useI18n();
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
      <table className="w-full min-w-[720px] text-sm">
        {caption && <caption className="sr-only">{t(caption)}</caption>}
        <thead>
          <tr className="border-b border-border bg-tint-blue/70">
            {selectable && (
              <th scope="col" className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  aria-label={t({ en: "Select all rows", ar: "تحديد كل الصفوف" })}
                  className="size-4 accent-[var(--primary)]"
                />
              </th>
            )}
            {columns.map((c, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-3 text-start text-xs font-semibold tracking-wide text-muted-foreground uppercase"
              >
                {t(c)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-border/70 transition-colors last:border-0 hover:bg-tint-green/70"
            >
              {selectable && (
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    aria-label={t({ en: "Select row", ar: "تحديد الصف" })}
                    className="size-4 accent-[var(--primary)]"
                  />
                </td>
              )}
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-middle whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Pagination({ total }: { total: number }) {
  const { t } = useI18n();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
      <p className="min-w-0 truncate text-xs text-muted-foreground">
        {t({ en: "Showing 1–10 of", ar: "عرض ١–١٠ من" })} {total}
      </p>
      <div className="flex items-center gap-2">
        <label className="sr-only" htmlFor="per-page">
          {t({ en: "Items per page", ar: "عناصر لكل صفحة" })}
        </label>
        <select
          id="per-page"
          className="h-9 rounded-lg border border-border bg-surface px-2 text-xs"
          defaultValue="10"
        >
          {["10", "20", "50", "100"].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
        <Button
          variant="outline"
          size="sm"
          aria-label={t({ en: "Previous page", ar: "الصفحة السابقة" })}
        >
          <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden />
        </Button>
        {[1, 2, 3].map((p) => (
          <Button key={p} size="sm" variant={p === 1 ? "primary" : "outline"}>
            {p}
          </Button>
        ))}
        <Button variant="outline" size="sm" aria-label={t({ en: "Next page", ar: "الصفحة التالية" })}>
          <ChevronRight className="size-4 rtl:rotate-180" aria-hidden />
        </Button>
      </div>
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: Loc | string;
  description: Loc | string;
  action?: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-tint-blue/60 px-6 py-14 text-center">
      <div className="grid size-14 place-items-center rounded-2xl bg-surface text-primary shadow-[var(--shadow-card)]">
        {icon ?? <Inbox className="size-5" aria-hidden />}
      </div>
      <h3 className="mt-4 text-base font-semibold">{t(title)}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{t(description)}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton h-4 w-full", className)} aria-hidden />;
}

export function ProgressBar({ value, tone = "primary" }: { value: number; tone?: Tone }) {
  const colors: Partial<Record<Tone, string>> = {
    primary: "bg-primary",
    accent: "bg-accent",
    wellness: "bg-wellness",
    success: "bg-success",
    danger: "bg-destructive",
  };
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-muted"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-700",
          colors[tone] ?? "bg-primary",
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}