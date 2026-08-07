import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { useI18n, type Loc } from "@/lib/i18n";
import { Button, Card, Badge, type Tone } from "./primitives";
import { X, TrendingUp, TrendingDown, Check, AlertTriangle, Info } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function Tabs({
  tabs,
  value,
  onChange,
  label,
}: {
  tabs: { id: string; label: Loc | string; count?: number }[];
  value: string;
  onChange: (id: string) => void;
  label?: string;
}) {
  const { t } = useI18n();
  return (
    <div
      role="tablist"
      aria-label={label ?? "Tabs"}
      className="flex gap-1 overflow-x-auto rounded-2xl border border-border bg-surface p-1.5"
    >
      {tabs.map((tab) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex h-10 shrink-0 items-center gap-2 rounded-xl px-4 text-[13px] font-medium transition-all duration-200",
              active
                ? "bg-tint-green text-[var(--primary-deep)] shadow-[var(--shadow-soft)]"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {t(tab.label)}
            {typeof tab.count === "number" && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[11px]",
                  active ? "bg-white/80" : "bg-muted",
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function StatCard({
  label,
  value,
  change,
  icon,
  tint = "none",
  tone = "primary",
}: {
  label: Loc | string;
  value: string;
  change?: string;
  icon: ReactNode;
  tint?: "green" | "blue" | "yellow" | "purple" | "none";
  tone?: Tone;
}) {
  const { t } = useI18n();
  const up = change?.startsWith("+");
  return (
    <Card tint={tint} className="rise flex min-h-[124px] flex-col justify-between">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[12.5px] leading-snug font-medium text-balance text-muted-foreground">{t(label)}</p>
          <p className="mt-1.5 text-xl font-bold tracking-tight text-balance sm:text-[22px]">{value}</p>
        </div>
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-primary shadow-[var(--shadow-soft)]">
          {icon}
        </div>
      </div>
      {change && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <Badge tone={up ? "success" : "danger"}>
            {up ? (
              <TrendingUp className="size-3" aria-hidden />
            ) : (
              <TrendingDown className="size-3" aria-hidden />
            )}
            {change}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {t({ en: "vs last period", ar: "مقارنة بالفترة السابقة" })}
          </span>
        </div>
      )}
      <span className="sr-only">{tone}</span>
    </Card>
  );
}

export function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = "md",
}: {
  open: boolean;
  onClose: () => void;
  title: Loc | string;
  subtitle?: Loc | string | undefined;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!mounted || !open) return null;
  const widths = { sm: "max-w-md", md: "max-w-2xl", lg: "max-w-4xl" };
  return createPortal(
    <div className="fixed inset-0 z-100 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-[oklch(0.32_0.01_229_/_0.35)] backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t(title)}
        className={cn(
          "animate-in-soft relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-border bg-surface shadow-[var(--shadow-lifted)] sm:rounded-3xl",
          widths[size],
        )}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border px-6 py-5">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold">{t(title)}</h2>
            {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{t(subtitle)}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label={t({ en: "Close dialog", ar: "إغلاق النافذة" })}
            className="tap-target grid place-items-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">{children}</div>
        {footer && (
          <div className="flex flex-wrap justify-end gap-2 border-t border-border bg-tint-blue/60 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

export function Toast({
  kind,
  message,
}: {
  kind: "success" | "error" | "info";
  message: Loc | string;
}) {
  const { t } = useI18n();
  const map = {
    success: { icon: <Check className="size-4" aria-hidden />, tone: "success" as Tone },
    error: { icon: <AlertTriangle className="size-4" aria-hidden />, tone: "danger" as Tone },
    info: { icon: <Info className="size-4" aria-hidden />, tone: "info" as Tone },
  }[kind];
  return (
    <div
      role="status"
      className="animate-pop flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-lifted)]"
    >
      <Badge tone={map.tone}>{map.icon}</Badge>
      <p className="text-sm font-medium">{t(message)}</p>
    </div>
  );
}

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const axis = { stroke: "var(--muted-foreground)", fontSize: 12 };

export function ChartCard({
  title,
  subtitle,
  children,
  action,
  height = 260,
  summary,
}: {
  title: Loc | string;
  subtitle?: Loc | string | undefined;
  children: ReactNode;
  action?: ReactNode;
  height?: number;
  summary: string;
}) {
  const { t } = useI18n();
  return (
    <Card>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold">{t(title)}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{t(subtitle)}</p>}
        </div>
        {action}
      </div>
      <div className="mt-4" style={{ height }} role="img" aria-label={summary}>
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
      <p className="sr-only">{summary}</p>
    </Card>
  );
}

export function Line1({ data, x, y }: { data: Record<string, unknown>[]; x: string; y: string }) {
  return (
    <LineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
      <CartesianGrid stroke="var(--border)" vertical={false} />
      <XAxis dataKey={x} tickLine={false} axisLine={false} tick={axis} />
      <YAxis tickLine={false} axisLine={false} tick={axis} />
      <Tooltip
        contentStyle={{
          borderRadius: 16,
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
      />
      <Line
        type="monotone"
        dataKey={y}
        stroke="var(--chart-1)"
        strokeWidth={2.5}
        dot={false}
        activeDot={{ r: 5 }}
        animationDuration={900}
      />
    </LineChart>
  );
}

export function Bars({
  data,
  x,
  keys,
}: {
  data: Record<string, unknown>[];
  x: string;
  keys: string[];
}) {
  return (
    <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
      <CartesianGrid stroke="var(--border)" vertical={false} />
      <XAxis dataKey={x} tickLine={false} axisLine={false} tick={axis} />
      <YAxis tickLine={false} axisLine={false} tick={axis} />
      <Tooltip
        cursor={{ fill: "var(--tint-green)" }}
        contentStyle={{ borderRadius: 16, border: "1px solid var(--border)" }}
      />
      {keys.length > 1 && <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />}
      {keys.map((k, i) => (
        <Bar
          key={k}
          dataKey={k}
          fill={CHART_COLORS[i % CHART_COLORS.length] ?? "var(--chart-1)"}
          radius={[8, 8, 0, 0]}
          animationDuration={900}
        />
      ))}
    </BarChart>
  );
}

export function Donut({ data }: { data: { name: string; value: number }[] }) {
  return (
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius="58%"
        outerRadius="86%"
        paddingAngle={3}
        animationDuration={900}
      >
        {data.map((_, i) => (
          <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length] ?? "var(--chart-1)"} stroke="var(--surface)" />
        ))}
      </Pie>
      <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
      <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid var(--border)" }} />
    </PieChart>
  );
}

export function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface p-3">
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: Loc | string;
  description?: Loc | string;
  actions?: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <header className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div className="min-w-0">
        <h1 className="text-2xl font-bold tracking-tight sm:text-[28px]">{t(title)}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{t(description)}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}

export function KeyValue({ items }: { items: { k: Loc | string; v: ReactNode }[] }) {
  const { t } = useI18n();
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((it, i) => (
        <div key={i} className="min-w-0">
          <dt className="text-xs font-medium text-muted-foreground">{t(it.k)}</dt>
          <dd className="mt-0.5 text-sm font-medium break-words">{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export { Button, Card };