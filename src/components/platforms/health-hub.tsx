import { useEffect, useState } from "react";
import { BrandSymbol } from "@/components/rehlah/brand";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { AdminConsole } from "./admin-console";
import { PatientPortal } from "./patient-portal";
import { MobileApp } from "./mobile-app";
import { LandingWebsite } from "./landing-website";
import { Globe, LayoutDashboard, Smartphone, Users } from "lucide-react";

type PlatformId = "mobile" | "portal" | "admin" | "landing";

const PLATFORMS: { id: PlatformId; label: Loc; icon: React.ElementType }[] = [
  { id: "mobile", label: L("Mobile App", "تطبيق الجوال"), icon: Smartphone },
  { id: "portal", label: L("Patient Portal", "بوابة المريض"), icon: Users },
  { id: "admin", label: L("Admin Console", "لوحة الإدارة"), icon: LayoutDashboard },
  { id: "landing", label: L("Landing Website", "الموقع التعريفي"), icon: Globe },
];

export function HealthHub() {
  const { t, lang, setLang, dir } = useI18n();
  const [platform, setPlatform] = useState<PlatformId>("mobile");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-3 sm:px-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <BrandSymbol className="size-10 shrink-0" />
              <div className="min-w-0">
                <h1 className="truncate text-[15px] font-bold tracking-tight">
                  {t(L("Rehlah Health Hub", "مركز رحلة الصحي"))}
                </h1>
                <p className="truncate text-xs text-muted-foreground">
                  {t(L("One connected rehabilitation ecosystem", "منظومة تأهيل متصلة واحدة"))}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1 rounded-xl border border-border p-1">
              {(["en", "ar"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={cn(
                    "min-h-9 rounded-lg px-3 text-[13px] font-semibold transition-colors",
                    lang === l ? "bg-tint-green text-[var(--primary-deep)]" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l === "en" ? "EN" : "ع"}
                </button>
              ))}
            </div>
          </div>

          <nav
            aria-label={t(L("Platform switcher", "مبدل المنصات"))}
            className="flex gap-1 overflow-x-auto rounded-2xl bg-muted p-1.5"
          >
            {PLATFORMS.map((p) => {
              const Icon = p.icon;
              const active = platform === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setPlatform(p.id)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 flex-1 shrink-0 items-center justify-center gap-2 rounded-xl px-4 text-[13px] font-semibold whitespace-nowrap transition-all",
                    active
                      ? "bg-surface text-foreground shadow-[var(--shadow-soft)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {t(p.label)}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main key={platform} className="animate-in-soft">
        {platform === "mobile" && <MobileApp />}
        {platform === "portal" && <PatientPortal />}
        {platform === "admin" && <AdminConsole />}
        {platform === "landing" && <LandingWebsite />}
      </main>
    </div>
  );
}