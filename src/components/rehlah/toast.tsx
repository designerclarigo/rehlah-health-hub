import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useI18n, type Loc } from "@/lib/i18n";
import { Check, AlertTriangle, Info, X } from "lucide-react";

type Kind = "success" | "error" | "info";
type Item = { id: number; kind: Kind; message: Loc | string };

const Ctx = createContext<{ push: (kind: Kind, message: Loc | string) => void }>({
  push: () => {},
});

export function useToast() {
  return useContext(Ctx);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const [items, setItems] = useState<Item[]>([]);

  const push = useCallback((kind: Kind, message: Loc | string) => {
    const id = Date.now() + Math.random();
    setItems((s) => [...s, { id, kind, message }]);
    window.setTimeout(() => setItems((s) => s.filter((i) => i.id !== id)), 3800);
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  const icons: Record<Kind, ReactNode> = {
    success: <Check className="size-4" aria-hidden />,
    error: <AlertTriangle className="size-4" aria-hidden />,
    info: <Info className="size-4" aria-hidden />,
  };
  const tones: Record<Kind, string> = {
    success: "text-success",
    error: "text-destructive",
    info: "text-info",
  };

  return (
    <Ctx.Provider value={value}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            role="region"
            aria-live="polite"
            aria-label={t({ en: "Notifications", ar: "الإشعارات" })}
            className="pointer-events-none fixed bottom-5 z-[200] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2 end-4"
          >
            {items.map((i) => (
              <div
                key={i.id}
                className="animate-pop pointer-events-auto grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-lifted)]"
              >
                <span className={`grid size-8 place-items-center rounded-xl bg-muted ${tones[i.kind]}`}>
                  {icons[i.kind]}
                </span>
                <p className="min-w-0 text-sm font-medium">{t(i.message)}</p>
                <button
                  onClick={() => setItems((s) => s.filter((x) => x.id !== i.id))}
                  aria-label={t({ en: "Dismiss", ar: "إغلاق" })}
                  className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>
            ))}
          </div>,
          document.body,
        )}
    </Ctx.Provider>
  );
}
