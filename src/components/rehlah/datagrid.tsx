import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useI18n, L, type Loc } from "@/lib/i18n";
import { Badge, Button, EmptyState, Skeleton } from "./primitives";
import { useToast } from "./toast";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
  Filter,
  Inbox,
  Search,
  X,
} from "lucide-react";

export type GridColumn<T> = {
  id: string;
  header: Loc | string;
  cell: (row: T, index: number) => ReactNode;
  sort?: (row: T) => string | number;
  csv?: (row: T) => string;
  align?: "start" | "end";
  hideBelow?: "sm" | "md" | "lg";
};

export type GridFilter<T> = {
  id: string;
  label: Loc | string;
  options: { value: string; label: Loc | string }[];
  match: (row: T, value: string) => boolean;
};

export type BulkAction = {
  id: string;
  label: Loc | string;
  icon?: ReactNode;
  tone?: "primary" | "outline" | "danger";
};

export function DataGrid<T>({
  caption,
  rows,
  columns,
  filters = [],
  search,
  searchPlaceholder,
  bulkActions = [],
  onBulkAction,
  rowKey,
  loading,
  emptyTitle,
  emptyDescription,
  emptyAction,
  toolbarExtra,
  pageSize: initialPageSize = 10,
  exportName = "rehlah-export",
}: {
  caption: Loc | string;
  rows: T[];
  columns: GridColumn<T>[];
  filters?: GridFilter<T>[];
  search?: (row: T) => string;
  searchPlaceholder?: Loc | string;
  bulkActions?: BulkAction[];
  onBulkAction?: (actionId: string, selected: T[]) => void;
  rowKey: (row: T, index: number) => string;
  loading?: boolean;
  emptyTitle?: Loc | string;
  emptyDescription?: Loc | string;
  emptyAction?: ReactNode;
  toolbarExtra?: ReactNode;
  pageSize?: number;
  exportName?: string;
}) {
  const { t } = useI18n();
  const toast = useToast();
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Record<string, string>>({});
  const [sort, setSort] = useState<{ id: string; dir: "asc" | "desc" } | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let out = rows;
    const term = q.trim().toLowerCase();
    if (term && search) out = out.filter((r) => search(r).toLowerCase().includes(term));
    for (const f of filters) {
      const v = active[f.id];
      if (v && v !== "__all") out = out.filter((r) => f.match(r, v));
    }
    if (sort) {
      const col = columns.find((c) => c.id === sort.id);
      if (col?.sort) {
        out = [...out].sort((a, b) => {
          const av = col.sort!(a);
          const bv = col.sort!(b);
          const c = typeof av === "number" && typeof bv === "number"
            ? av - bv
            : String(av).localeCompare(String(bv));
          return sort.dir === "asc" ? c : -c;
        });
      }
    }
    return out;
  }, [rows, q, active, filters, sort, columns, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const pageRows = filtered.slice((current - 1) * pageSize, current * pageSize);

  const allOnPageSelected =
    pageRows.length > 0 && pageRows.every((r, i) => selected.has(rowKey(r, i)));

  const toggleAll = () => {
    const next = new Set(selected);
    pageRows.forEach((r, i) => {
      const k = rowKey(r, i);
      if (allOnPageSelected) next.delete(k);
      else next.add(k);
    });
    setSelected(next);
  };

  const selectedRows = filtered.filter((r, i) => selected.has(rowKey(r, i)));

  const exportCsv = () => {
    const head = columns.map((c) => t(c.header)).join(",");
    const body = filtered
      .map((r, i) =>
        columns
          .map((c) => {
            const raw = c.csv ? c.csv(r) : c.sort ? String(c.sort(r)) : "";
            return `"${raw.replace(/"/g, '""')}"`;
          })
          .join(","),
      )
      .join("\n");
    const blob = new Blob([`\uFEFF${head}\n${body}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportName}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.push("success", L("Export ready — CSV downloaded", "تم التصدير — تم تنزيل الملف"));
  };

  const activeChips = filters
    .map((f) => ({ f, v: active[f.id] }))
    .filter((x) => x.v && x.v !== "__all");

  const hideCls = { sm: "hidden sm:table-cell", md: "hidden md:table-cell", lg: "hidden lg:table-cell" };

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
      {/* toolbar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
        <div className="relative min-w-0 flex-1 basis-56">
          <Search className="pointer-events-none absolute top-1/2 start-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            aria-label={t(searchPlaceholder ?? L("Search", "بحث"))}
            placeholder={t(searchPlaceholder ?? L("Search", "بحث"))}
            className="h-11 w-full rounded-xl border border-border bg-surface ps-10 pe-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
          />
        </div>
        {filters.length > 0 && (
          <Button
            variant="outline"
            aria-expanded={showFilters}
            onClick={() => setShowFilters((s) => !s)}
          >
            <Filter className="size-4" aria-hidden />
            {t(L("Filters", "التصفية"))}
            {activeChips.length > 0 && <Badge tone="primary">{activeChips.length}</Badge>}
          </Button>
        )}
        {toolbarExtra}
        <Button variant="outline" onClick={exportCsv}>
          <Download className="size-4" aria-hidden />
          {t(L("Export CSV", "تصدير CSV"))}
        </Button>
      </div>

      {showFilters && filters.length > 0 && (
        <div className="grid gap-3 border-b border-border bg-tint-blue/50 px-3 py-3 sm:grid-cols-2 xl:grid-cols-4">
          {filters.map((f) => (
            <label key={f.id} className="block space-y-1.5">
              <span className="text-[11.5px] font-semibold text-muted-foreground">{t(f.label)}</span>
              <span className="relative flex w-full items-center">
              <select
                value={active[f.id] ?? "__all"}
                onChange={(e) => {
                  setActive((s) => ({ ...s, [f.id]: e.target.value }));
                  setPage(1);
                }}
                className="h-11 w-full appearance-none truncate rounded-xl border border-border bg-surface ps-3.5 pe-10 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
              >
                <option value="__all">{t(L("All", "الكل"))}</option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {t(o.label)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute end-3 size-4 text-muted-foreground" aria-hidden />
              </span>
            </label>
          ))}
        </div>
      )}

      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
          {activeChips.map(({ f, v }) => (
            <span
              key={f.id}
              className="inline-flex items-center gap-1.5 rounded-full bg-tint-green px-3 py-1.5 text-xs font-medium text-[var(--primary-deep)]"
            >
              {t(f.label)}: {t(f.options.find((o) => o.value === v)?.label ?? v!)}
              <button
                type="button"
                onClick={() => setActive((s) => ({ ...s, [f.id]: "__all" }))}
                aria-label={`${t(L("Remove filter", "إزالة عامل التصفية"))}: ${t(f.label)}`}
                className="rounded-full p-0.5 hover:bg-white/70"
              >
                <X className="size-3" aria-hidden />
              </button>
            </span>
          ))}
          <button
            onClick={() => setActive({})}
            className="text-xs font-semibold text-primary underline-offset-2 hover:underline"
          >
            {t(L("Clear all", "مسح الكل"))}
          </button>
        </div>
      )}

      {bulkActions.length > 0 && selected.size > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-border bg-tint-green/70 px-4 py-3">
          <p className="text-sm font-semibold text-[var(--primary-deep)]">
            {selected.size} {t(L("selected", "محدد"))}
          </p>
          <div className="flex flex-wrap gap-2 ms-auto">
            {bulkActions.map((a) => (
              <Button
                key={a.id}
                size="sm"
                variant={a.tone === "danger" ? "danger" : a.tone === "primary" ? "primary" : "outline"}
                onClick={() => {
                  onBulkAction?.(a.id, selectedRows);
                  setSelected(new Set());
                }}
              >
                {a.icon}
                {t(a.label)}
              </Button>
            ))}
            <Button size="sm" variant="ghost" onClick={() => setSelected(new Set())}>
              {t(L("Clear", "إلغاء التحديد"))}
            </Button>
          </div>
        </div>
      )}

      {/* table */}
      {loading ? (
        <div className="space-y-3 p-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-10 rounded-xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-5">
          <EmptyState
            icon={<Inbox className="size-6" aria-hidden />}
            title={emptyTitle ?? L("Nothing to show", "لا توجد بيانات")}
            description={
              emptyDescription ??
              L("Adjust your search or filters to see results.", "عدّل البحث أو التصفية لعرض النتائج.")
            }
            action={emptyAction}
          />
        </div>
      ) : (
        <div className="max-h-[68vh] overflow-auto">
          <table className="w-full min-w-[680px] text-sm">
            <caption className="sr-only">{t(caption)}</caption>
            <thead className="sticky top-0 z-10">
              <tr className="border-b border-border bg-[color-mix(in_oklab,var(--tint-blue)_88%,white)] backdrop-blur">
                {bulkActions.length > 0 && (
                  <th scope="col" className="w-12 px-4 py-3">
                    <input
                      type="checkbox"
                      checked={allOnPageSelected}
                      onChange={toggleAll}
                      aria-label={t(L("Select all rows on page", "تحديد كل صفوف الصفحة"))}
                      className="size-[18px] rounded-[6px] accent-[var(--primary)]"
                    />
                  </th>
                )}
                {columns.map((c) => {
                  const sorted = sort?.id === c.id;
                  return (
                    <th
                      key={c.id}
                      scope="col"
                      aria-sort={sorted ? (sort!.dir === "asc" ? "ascending" : "descending") : undefined}
                      className={cn(
                        "px-4 py-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase",
                        c.align === "end" ? "text-end" : "text-start",
                        c.hideBelow && hideCls[c.hideBelow],
                      )}
                    >
                      {c.sort ? (
                        <button
                          onClick={() =>
                            setSort((s) =>
                              s?.id === c.id
                                ? { id: c.id, dir: s.dir === "asc" ? "desc" : "asc" }
                                : { id: c.id, dir: "asc" },
                            )
                          }
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 uppercase transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                            sorted && "text-foreground",
                          )}
                        >
                          {t(c.header)}
                          <ArrowUpDown className="size-3.5" aria-hidden />
                        </button>
                      ) : (
                        t(c.header)
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {pageRows.map((r, i) => {
                const key = rowKey(r, i);
                const isSel = selected.has(key);
                return (
                  <tr
                    key={key}
                    className={cn(
                      "border-b border-border/70 transition-colors last:border-0 hover:bg-tint-green/60",
                      isSel && "bg-tint-green/70",
                    )}
                  >
                    {bulkActions.length > 0 && (
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isSel}
                          onChange={() => {
                            const next = new Set(selected);
                            if (isSel) next.delete(key);
                            else next.add(key);
                            setSelected(next);
                          }}
                          aria-label={`${t(L("Select row", "تحديد الصف"))} ${key}`}
                          className="size-[18px] rounded-[6px] accent-[var(--primary)]"
                        />
                      </td>
                    )}
                    {columns.map((c) => (
                      <td
                        key={c.id}
                        className={cn(
                          "px-4 py-3 align-middle whitespace-nowrap",
                          c.align === "end" && "text-end",
                          c.hideBelow && hideCls[c.hideBelow],
                        )}
                      >
                        {c.cell(r, i)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* pagination */}
      {!loading && filtered.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
          <p className="text-xs text-muted-foreground">
            {t(L("Showing", "عرض"))} {(current - 1) * pageSize + 1}–
            {Math.min(current * pageSize, filtered.length)} {t(L("of", "من"))} {filtered.length}
          </p>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor={`pp-${exportName}`}>
              {t(L("Rows per page", "صفوف لكل صفحة"))}
            </label>
            <span className="relative flex items-center">
            <select
              id={`pp-${exportName}`}
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="h-9 appearance-none rounded-lg border border-border bg-surface ps-2.5 pe-7 text-xs outline-none focus:border-primary"
            >
              {[10, 20, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute end-2 size-3.5 text-muted-foreground" aria-hidden />
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={current === 1}
              onClick={() => setPage(current - 1)}
              aria-label={t(L("Previous page", "الصفحة السابقة"))}
            >
              <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
            <span className="text-xs font-semibold tabular-nums">
              {current} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={current === totalPages}
              onClick={() => setPage(current + 1)}
              aria-label={t(L("Next page", "الصفحة التالية"))}
            >
              <ChevronRight className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
