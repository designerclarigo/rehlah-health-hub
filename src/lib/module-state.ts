import { useCallback, useMemo, useState } from "react";

/** Local collection with real create / update / delete semantics. */
export function useCollection<T>(initial: T[]) {
  const [items, setItems] = useState<T[]>(initial);
  const add = useCallback((row: T) => setItems((p) => [row, ...p]), []);
  const update = useCallback(
    (index: number, patch: Partial<T>) =>
      setItems((p) => p.map((r, i) => (i === index ? { ...r, ...patch } : r))),
    [],
  );
  const remove = useCallback(
    (index: number) => setItems((p) => p.filter((_, i) => i !== index)),
    [],
  );
  const removeMany = useCallback(
    (indexes: number[]) => setItems((p) => p.filter((_, i) => !indexes.includes(i))),
    [],
  );
  return { items, setItems, add, update, remove, removeMany };
}

/** Case-insensitive haystack match used by module toolbars. */
export function matches(query: string, ...fields: (string | number | undefined)[]) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((f) => String(f ?? "").toLowerCase().includes(q));
}

/** Filter helper: an "all" sentinel value passes everything. */
export function passes(selected: string, value: string, allValue = "all") {
  return selected === allValue || selected === "" || selected === value;
}

export function useFilters<S extends Record<string, string>>(initial: S) {
  const [filters, setFilters] = useState<S>(initial);
  const set = useCallback(
    <K extends keyof S>(key: K, value: S[K]) => setFilters((p) => ({ ...p, [key]: value })),
    [],
  );
  const reset = useCallback(() => setFilters(initial), [initial]);
  const active = useMemo(
    () => Object.keys(filters).filter((k) => filters[k] !== initial[k]).length,
    [filters, initial],
  );
  return { filters, set, reset, active };
}

/** Download any table as CSV (used where DataGrid isn't in play). */
export function downloadCsv(name: string, headers: string[], rows: (string | number)[][]) {
  const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
  const body = [headers.map(esc).join(","), ...rows.map((r) => r.map(esc).join(","))].join("\n");
  const blob = new Blob([`\uFEFF${body}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/** Print the current view (used by "Print" actions). */
export function printView() {
  if (typeof window !== "undefined") window.print();
}
