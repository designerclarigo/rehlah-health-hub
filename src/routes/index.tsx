import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { HealthHub } from "@/components/platforms/health-hub";

const TITLE = "Rehlah Health Hub — Paediatric Rehabilitation Ecosystem";
const DESC =
  "Mobile app, guardian portal, clinical admin console and public website for paediatric rehabilitation — in English and Arabic.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <HealthHub />
    </LanguageProvider>
  );
}
