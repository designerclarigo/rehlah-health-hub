/**
 * Rehlah brand assets — the official symbol and bilingual lockup.
 * Use these everywhere a brand mark is needed; never re-draw the logo.
 */
import symbolUrl from "@/assets/rehlah-symbol.png?url";
import logoUrl from "@/assets/rehlah-logo.png?url";
import { cn } from "@/lib/utils";

export const REHLAH_SYMBOL_URL = symbolUrl;
export const REHLAH_LOGO_URL = logoUrl;

/** Square four-petal Rehlah symbol. */
export function BrandSymbol({ className }: { className?: string }) {
  return (
    <img
      src={REHLAH_SYMBOL_URL}
      alt="Rehlah"
      width={512}
      height={512}
      loading="eager"
      decoding="async"
      className={cn("block object-contain select-none", className)}
      draggable={false}
    />
  );
}

/** Full Arabic + English Rehlah logo. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={REHLAH_LOGO_URL}
      alt="Rehlah — رحلة"
      width={1024}
      height={256}
      loading="eager"
      decoding="async"
      className={cn("block object-contain select-none", className)}
      draggable={false}
    />
  );
}

/** Symbol inside a soft brand plate — for headers and app chrome. */
export function BrandPlate({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-2xl bg-surface ring-1 ring-border",
        className,
      )}
    >
      <BrandSymbol className={cn("size-[70%]", imgClassName)} />
    </span>
  );
}

/** Full bilingual logo lockup used in full-screen brand contexts. */
export function BrandLockup({ className }: { className?: string }) {
  return <BrandLogo className={className} />;
}
