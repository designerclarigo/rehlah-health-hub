import { useMemo, useState } from "react";
import { L, useI18n, type Loc } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  Badge,
  Button,
  Card,
  Field,
  Input,
  ProgressBar,
  Select,
  Textarea,
  type Tone,
} from "@/components/rehlah/primitives";
import { KeyValue, Modal, PageHeader, Tabs } from "@/components/rehlah/blocks";
import { DataGrid } from "@/components/rehlah/datagrid";
import { useToast } from "@/components/rehlah/toast";
import { doc } from "@/lib/rehlah-data";
import { downloadCsv, printView } from "@/lib/module-state";
import {
  portalConsents,
  portalDocuments,
  portalInvoices,
  portalNotifications,
  portalPayments,
  portalSickLeaves,
  type PortalConsent,
  type PortalDocument,
  type PortalInvoice,
  type PortalNotification,
  type PortalSickLeave,
} from "@/lib/portal-data";
import {
  Bell,
  CheckCircle2,
  Copy,
  Download,
  Eye,
  FileText,
  Globe,
  Lock,
  LifeBuoy,
  Mail,
  MessageSquare,
  Share2,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";

export const portalTone = (s: string): Tone => {
  const map: Record<string, Tone> = {
    Paid: "success",
    Partial: "warning",
    Unpaid: "danger",
    Signed: "success",
    Pending: "warning",
    Expired: "neutral",
    Issued: "success",
    Successful: "success",
    Confirmed: "primary",
    Present: "success",
    Cancelled: "danger",
    "Excused absence": "info",
    Completed: "success",
    Active: "success",
  };
  return map[s] ?? "neutral";
};

export function Money({ v }: { v: number }) {
  return <span className="font-semibold tabular-nums">{v.toLocaleString()} SAR</span>;
}

/* ============================ DOCUMENTS ============================ */

export function PortalDocuments() {
  const { t } = useI18n();
  const toast = useToast();
  const [docs, setDocs] = useState<PortalDocument[]>(portalDocuments);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [view, setView] = useState<PortalDocument | null>(null);
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  const [deleteDoc, setDeleteDoc] = useState<PortalDocument | null>(null);

  const downloadDocument = (d: PortalDocument) => {
    const body = [
      `${t(d.name)}`,
      `${t(L("Type", "النوع"))}: ${t(d.type)}`,
      `${t(L("Date", "التاريخ"))}: ${d.date}`,
      `${t(L("Size", "الحجم"))}: ${d.size}`,
      `${t(L("Added by", "أضيف بواسطة"))}: ${t(d.by)}`,
    ].join("\n");
    const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${d.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.push("success", L("Download started", "بدأ التنزيل"));
  };

  const upload = () => {
    if (name.trim().length < 3) {
      setErr(true);
      return;
    }
    setDocs((d) => [
      {
        id: `DOC-${9100 + d.length}`,
        name: L(name.trim(), name.trim()),
        type: L("Uploaded file", "ملف مرفوع"),
        date: "07 Aug 2026",
        size: "1.2 MB",
        by: L("Mohammed Al-Otaibi", "محمد العتيبي"),
        source: L("Uploaded by me", "مرفوع مني"),
      },
      ...d,
    ]);
    setUploadOpen(false);
    setName("");
    setErr(false);
    toast.push("success", L("Document uploaded", "تم رفع المستند"));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Documents", "المستندات")}
        description={L("Reports, contracts and files shared with the centre", "التقارير والعقود والملفات المشتركة مع المركز")}
        actions={
          <Button onClick={() => setUploadOpen(true)}>
            <Upload className="size-4" aria-hidden /> {t(L("Upload document", "رفع مستند"))}
          </Button>
        }
      />
      <DataGrid
        caption={L("My documents", "مستنداتي")}
        rows={docs}
        rowKey={(d) => d.id}
        exportName="rehlah-portal-documents"
        search={(d) => `${d.name.en} ${d.name.ar} ${d.type.en}`}
        searchPlaceholder={L("Search documents", "بحث في المستندات")}
        filters={[
          {
            id: "source",
            label: L("Source", "المصدر"),
            options: [
              { value: "Centre", label: L("From the centre", "من المركز") },
              { value: "Uploaded by me", label: L("Uploaded by me", "مرفوع مني") },
            ],
            match: (d, v) => d.source.en === v,
          },
          {
            id: "type",
            label: L("Type", "النوع"),
            options: [
              { value: "Medical report", label: L("Medical report", "تقرير طبي") },
              { value: "Lab result", label: L("Lab result", "نتيجة مختبر") },
              { value: "Contract", label: L("Contract", "عقد") },
              { value: "Identity", label: L("Identity", "هوية") },
              { value: "Insurance", label: L("Insurance", "تأمين") },
            ],
            match: (d, v) => d.type.en === v,
          },
        ]}
        columns={[
          { id: "name", header: L("Document", "المستند"), sort: (d) => d.name.en, csv: (d) => d.name.en, cell: (d) => <span className="font-medium">{t(d.name)}</span> },
          { id: "type", header: L("Type", "النوع"), csv: (d) => d.type.en, cell: (d) => <Badge tone="info">{t(d.type)}</Badge> },
          { id: "date", header: L("Date", "التاريخ"), sort: (d) => d.date, csv: (d) => d.date, hideBelow: "md", cell: (d) => d.date },
          { id: "size", header: L("Size", "الحجم"), csv: (d) => d.size, hideBelow: "lg", cell: (d) => d.size },
          { id: "by", header: L("Added by", "أضيف بواسطة"), csv: (d) => d.by.en, hideBelow: "lg", cell: (d) => t(d.by) },
          {
            id: "actions",
            header: L("Actions", "إجراءات"),
            align: "end",
            cell: (d) => (
              <span className="flex justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => setView(d)}>
                  <Eye className="size-4" aria-hidden /> {t(L("View", "عرض"))}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => downloadDocument(d)} aria-label={t(L("Download", "تنزيل"))}>
                  <Download className="size-4" aria-hidden />
                </Button>
                {d.source.en === "Uploaded by me" && (
                  <Button size="sm" variant="ghost" onClick={() => setDeleteDoc(d)} aria-label={t(L("Delete", "حذف"))}>
                    <Trash2 className="size-4" aria-hidden />
                  </Button>
                )}
              </span>
            ),
          },
        ]}
        emptyTitle={L("No documents yet", "لا توجد مستندات")}
        emptyDescription={L("Documents shared by the centre will appear here.", "ستظهر هنا المستندات التي يشاركها المركز.")}
        emptyAction={<Button onClick={() => setUploadOpen(true)}>{t(L("Upload document", "رفع مستند"))}</Button>}
      />

      <Modal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        title={L("Upload document", "رفع مستند")}
        subtitle={L("PDF, JPG or PNG up to 10 MB", "PDF أو JPG أو PNG حتى ١٠ ميجابايت")}
        footer={
          <>
            <Button variant="outline" onClick={() => setUploadOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={upload}>{t(L("Upload", "رفع"))}</Button>
          </>
        }
      >
        <div className="space-y-5">
          <Field label={L("Document name", "اسم المستند")} required hint={err ? L("Please enter at least 3 characters", "يرجى إدخال ٣ أحرف على الأقل") : undefined}>
            <Input value={name} aria-invalid={err} onChange={(e) => { setName(e.target.value); setErr(false); }} placeholder={t(L("e.g. Insurance card", "مثال: بطاقة التأمين"))} />
          </Field>
          <Field label={L("Category", "التصنيف")}>
            <Select options={[L("Medical report", "تقرير طبي"), L("Lab result", "نتيجة مختبر"), L("Identity", "هوية"), L("Insurance", "تأمين")]} />
          </Field>
          <div className="rounded-2xl border border-dashed border-border bg-tint-blue/50 px-6 py-10 text-center">
            <Upload className="mx-auto size-6 text-primary" aria-hidden />
            <p className="mt-3 text-sm font-medium">{t(L("Drag a file here or browse", "اسحب ملفاً هنا أو تصفح"))}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t(L("Your file is encrypted in transit", "ملفك مشفّر أثناء النقل"))}</p>
          </div>
        </div>
      </Modal>

      <Modal open={!!view} onClose={() => setView(null)} size="lg" title={view ? view.name : ""} subtitle={L("Document preview", "معاينة المستند")}
        footer={
          <>
            <Button variant="outline" onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>
            <Button onClick={() => { downloadDocument(view!); setView(null); }}>
              <Download className="size-4" aria-hidden /> {t(L("Download", "تنزيل"))}
            </Button>
          </>
        }
      >
        {view && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Type", "النوع"), v: t(view.type) },
                { k: L("Date", "التاريخ"), v: view.date },
                { k: L("Size", "الحجم"), v: view.size },
                { k: L("Added by", "أضيف بواسطة"), v: t(view.by) },
              ]}
            />
            <div className="grid h-64 place-items-center rounded-2xl border border-border bg-muted/50 text-center">
              <div>
                <FileText className="mx-auto size-8 text-primary" aria-hidden />
                <p className="mt-3 text-sm font-medium">{t(view.name)}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t(L("Secure preview", "معاينة آمنة"))}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={!!deleteDoc}
        onClose={() => setDeleteDoc(null)}
        title={L("Delete document?", "حذف المستند؟")}
        subtitle={deleteDoc ? t(deleteDoc.name) : undefined}
        footer={
          <>
            <Button variant="outline" onClick={() => setDeleteDoc(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button
              variant="danger"
              onClick={() => {
                setDocs((d) => d.filter((x) => x.id !== deleteDoc?.id));
                toast.push("success", L("Document deleted", "تم حذف المستند"));
                setDeleteDoc(null);
              }}
            >
              {t(L("Delete", "حذف"))}
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          {t(L("This will permanently remove the document you uploaded. This action cannot be undone.", "سيؤدي هذا إلى حذف المستند الذي رفعته نهائياً. لا يمكن التراجع عن هذا الإجراء."))}
        </p>
      </Modal>
    </div>
  );
}

/* ============================ CONSENTS ============================ */

export function PortalConsents() {
  const { t } = useI18n();
  const toast = useToast();
  const [items, setItems] = useState<PortalConsent[]>(portalConsents);
  const [tab, setTab] = useState("all");
  const [view, setView] = useState<PortalConsent | null>(null);
  const [sign, setSign] = useState<PortalConsent | null>(null);
  const [agree, setAgree] = useState(false);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<Loc | null>(null);

  const rows = useMemo(
    () => items.filter((c) => (tab === "all" ? true : tab === "pending" ? c.status.en === "Pending" : c.status.en !== "Pending")),
    [items, tab],
  );

  const confirmSign = () => {
    if (!agree || fullName.trim().length < 3) {
      setError(L("Type your full name and tick the agreement box", "اكتب اسمك الكامل ووافق على الإقرار"));
      return;
    }
    setItems((s) =>
      s.map((c) => (c.id === sign?.id ? { ...c, status: L("Signed", "موقعة"), signedOn: "07 Aug 2026" } : c)),
    );
    setSign(null);
    setAgree(false);
    setFullName("");
    setError(null);
    toast.push("success", L("Consent signed successfully", "تم توقيع الموافقة بنجاح"));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Consents", "الموافقات")}
        description={L("Review, sign and track consent forms electronically", "مراجعة وتوقيع ومتابعة نماذج الموافقة إلكترونياً")}
      />
      <Tabs
        label={t(L("Consent filters", "تصفية الموافقات"))}
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "all", label: L("All", "الكل"), count: items.length },
          { id: "pending", label: L("Awaiting signature", "بانتظار التوقيع"), count: items.filter((c) => c.status.en === "Pending").length },
          { id: "history", label: L("History", "السجل"), count: items.filter((c) => c.status.en !== "Pending").length },
        ]}
      />
      <DataGrid
        caption={L("Consent forms", "نماذج الموافقة")}
        rows={rows}
        rowKey={(c) => c.id}
        exportName="rehlah-portal-consents"
        search={(c) => `${c.name.en} ${c.name.ar}`}
        searchPlaceholder={L("Search consents", "بحث في الموافقات")}
        columns={[
          { id: "name", header: L("Consent", "الموافقة"), sort: (c) => c.name.en, csv: (c) => c.name.en, cell: (c) => (
            <span className="block min-w-0">
              <span className="block font-medium">{t(c.name)}</span>
              <span className="block text-xs text-muted-foreground">{t(c.description)}</span>
            </span>
          ) },
          { id: "version", header: L("Version", "الإصدار"), csv: (c) => c.version, hideBelow: "lg", cell: (c) => c.version },
          { id: "signed", header: L("Signed on", "تاريخ التوقيع"), csv: (c) => c.signedOn ?? "—", hideBelow: "md", cell: (c) => c.signedOn ?? "—" },
          { id: "expires", header: L("Expires", "تنتهي"), csv: (c) => c.expires, hideBelow: "md", cell: (c) => c.expires },
          { id: "status", header: L("Status", "الحالة"), csv: (c) => c.status.en, cell: (c) => <Badge tone={portalTone(c.status.en)}>{t(c.status)}</Badge> },
          {
            id: "actions", header: L("Actions", "إجراءات"), align: "end",
            cell: (c) => (
              <span className="flex justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => setView(c)}>{t(L("View", "عرض"))}</Button>
                {c.status.en !== "Signed" && (
                  <Button size="sm" onClick={() => setSign(c)}>{t(L("Sign", "توقيع"))}</Button>
                )}
              </span>
            ),
          },
        ]}
        emptyTitle={L("Nothing to sign", "لا يوجد ما يتطلب التوقيع")}
        emptyDescription={L("All consent forms are up to date.", "جميع نماذج الموافقة محدثة.")}
      />

      <Modal open={!!view} onClose={() => setView(null)} size="lg" title={view ? view.name : ""} subtitle={view ? view.description : undefined}
        footer={
          <>
            <Button variant="outline" onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>
            {view?.status.en === "Signed" && (
              <>
                <Button variant="outline" onClick={printView}>
                  <Copy className="size-4 hidden" aria-hidden />
                  {t(L("Print", "طباعة"))}
                </Button>
                <Button
                  onClick={() => {
                    const body = [
                      t(view.name),
                      t(view.description),
                      `${t(L("Version", "الإصدار"))}: ${view.version}`,
                      `${t(L("Signed on", "تاريخ التوقيع"))}: ${view.signedOn ?? "—"}`,
                      `${t(L("Expires", "تنتهي"))}: ${view.expires}`,
                      "",
                      t(view.body),
                    ].join("\n");
                    const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${view.id}-signed.txt`;
                    a.click();
                    URL.revokeObjectURL(url);
                    toast.push("success", L("Signed copy downloaded", "تم تنزيل النسخة الموقّعة"));
                  }}
                >
                  <Download className="size-4" aria-hidden /> {t(L("Download signed copy", "تنزيل النسخة الموقّعة"))}
                </Button>
              </>
            )}
          </>
        }
      >
        {view && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Version", "الإصدار"), v: view.version },
                { k: L("Status", "الحالة"), v: <Badge tone={portalTone(view.status.en)}>{t(view.status)}</Badge> },
                { k: L("Signed on", "تاريخ التوقيع"), v: view.signedOn ?? "—" },
                { k: L("Expires", "تنتهي"), v: view.expires },
              ]}
            />
            <p className="rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed">{t(view.body)}</p>
          </div>
        )}
      </Modal>

      <Modal open={!!sign} onClose={() => setSign(null)} size="lg" title={L("Sign consent", "توقيع الموافقة")} subtitle={sign ? sign.name : undefined}
        footer={
          <>
            <Button variant="outline" onClick={() => setSign(null)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={confirmSign}>
              <ShieldCheck className="size-4" aria-hidden /> {t(L("Sign electronically", "توقيع إلكتروني"))}
            </Button>
          </>
        }
      >
        {sign && (
          <div className="space-y-5">
            <p className="max-h-52 overflow-y-auto rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed">{t(sign.body)}</p>
            <Field label={L("Guardian full name", "الاسم الكامل لولي الأمر")} required>
              <Input value={fullName} aria-invalid={!!error && fullName.trim().length < 3} onChange={(e) => { setFullName(e.target.value); setError(null); }} placeholder={t(L("Type your full name", "اكتب اسمك الكامل"))} />
            </Field>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => { setAgree(e.target.checked); setError(null); }}
                className="mt-0.5 size-[18px] rounded-[6px] border-border text-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
              />
              <span>{t(L("I have read and agree to this consent on behalf of my child.", "لقد قرأت ووافقت على هذه الموافقة نيابة عن طفلي."))}</span>
            </label>
            {error && <p role="alert" className="text-sm font-medium text-destructive">{t(error)}</p>}
          </div>
        )}
      </Modal>
    </div>
  );
}

/* ============================ INVOICES ============================ */

export function PortalInvoices() {
  const { t } = useI18n();
  const toast = useToast();
  const [list, setList] = useState<PortalInvoice[]>(portalInvoices);
  const [tab, setTab] = useState("invoices");
  const [view, setView] = useState<PortalInvoice | null>(null);
  const [pay, setPay] = useState<PortalInvoice | null>(null);
  const [step, setStep] = useState(1);

  const outstanding = list.reduce((s, i) => s + (i.total - i.paid), 0);
  const paidTotal = list.reduce((s, i) => s + i.paid, 0);

  const confirmPay = () => {
    setList((s) => s.map((i) => (i.number === pay?.number ? { ...i, paid: i.total, status: L("Paid", "مدفوعة") } : i)));
    setStep(1);
    setPay(null);
    toast.push("success", L("Payment successful — receipt sent by email", "تم الدفع بنجاح — أُرسل الإيصال بالبريد"));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Invoices & payments", "الفواتير والمدفوعات")}
        description={L("Pay securely online and download receipts", "ادفع بأمان عبر الإنترنت ونزّل الإيصالات")}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <Card tint="yellow">
          <p className="text-sm text-muted-foreground">{t(L("Outstanding balance", "الرصيد المستحق"))}</p>
          <p className="mt-2 text-2xl font-bold tabular-nums">{outstanding.toLocaleString()} SAR</p>
        </Card>
        <Card>
          <p className="text-sm text-muted-foreground">{t(L("Paid this year", "المدفوع هذا العام"))}</p>
          <p className="mt-2 text-2xl font-bold tabular-nums">{paidTotal.toLocaleString()} SAR</p>
        </Card>
        <Card>
          <p className="text-sm text-muted-foreground">{t(L("Invoices", "الفواتير"))}</p>
          <p className="mt-2 text-2xl font-bold tabular-nums">{list.length}</p>
        </Card>
      </div>
      <Tabs
        label={t(L("Billing tabs", "تبويبات الفوترة"))}
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "invoices", label: L("Invoices", "الفواتير"), count: list.length },
          { id: "payments", label: L("Payment history", "سجل المدفوعات"), count: portalPayments.length },
        ]}
      />
      {tab === "invoices" ? (
        <DataGrid
          caption={L("Invoices", "الفواتير")}
          rows={list}
          rowKey={(i) => i.number}
          exportName="rehlah-portal-invoices"
          search={(i) => i.number}
          searchPlaceholder={L("Search by invoice number", "بحث برقم الفاتورة")}
          filters={[
            {
              id: "status",
              label: L("Status", "الحالة"),
              options: [
                { value: "Paid", label: L("Paid", "مدفوعة") },
                { value: "Partial", label: L("Partial", "جزئية") },
                { value: "Unpaid", label: L("Unpaid", "غير مدفوعة") },
              ],
              match: (i, v) => i.status.en === v,
            },
          ]}
          columns={[
            { id: "no", header: L("Invoice", "الفاتورة"), sort: (i) => i.number, csv: (i) => i.number, cell: (i) => <span className="font-mono text-xs">{i.number}</span> },
            { id: "date", header: L("Issued", "تاريخ الإصدار"), sort: (i) => i.date, csv: (i) => i.date, cell: (i) => i.date },
            { id: "due", header: L("Due", "الاستحقاق"), csv: (i) => i.due, hideBelow: "md", cell: (i) => i.due },
            { id: "total", header: L("Total", "الإجمالي"), sort: (i) => i.total, csv: (i) => String(i.total), cell: (i) => <Money v={i.total} /> },
            { id: "paid", header: L("Paid", "المدفوع"), csv: (i) => String(i.paid), hideBelow: "md", cell: (i) => <Money v={i.paid} /> },
            { id: "status", header: L("Status", "الحالة"), csv: (i) => i.status.en, cell: (i) => <Badge tone={portalTone(i.status.en)}>{t(i.status)}</Badge> },
            {
              id: "actions", header: L("Actions", "إجراءات"), align: "end",
              cell: (i) => (
                <span className="flex justify-end gap-2">
                  <Button size="sm" variant="outline" onClick={() => setView(i)}>{t(L("Details", "التفاصيل"))}</Button>
                  {i.paid < i.total ? (
                    <Button size="sm" onClick={() => { setPay(i); setStep(1); }}>{t(L("Pay now", "ادفع الآن"))}</Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      aria-label={t(L("Download receipt", "تنزيل الإيصال"))}
                      onClick={() =>
                        downloadCsv(`rehlah-receipt-${i.number}`, [t(L("Description", "الوصف")), t(L("Qty", "الكمية")), t(L("Amount", "المبلغ"))],
                          [...i.items.map((it) => [t(it.desc), it.qty, it.qty * it.unit]), [t(L("Total", "الإجمالي")), "", i.total]])
                      }
                    >
                      <Download className="size-4" aria-hidden />
                    </Button>
                  )}
                </span>
              ),
            },
          ]}
          emptyTitle={L("No invoices", "لا توجد فواتير")}
          emptyDescription={L("Invoices issued by the centre will appear here.", "ستظهر هنا الفواتير الصادرة من المركز.")}
        />
      ) : (
        <DataGrid
          caption={L("Payment history", "سجل المدفوعات")}
          rows={portalPayments}
          rowKey={(p) => p.id}
          exportName="rehlah-portal-payments"
          search={(p) => `${p.id} ${p.invoice}`}
          searchPlaceholder={L("Search payments", "بحث في المدفوعات")}
          columns={[
            { id: "id", header: L("Reference", "المرجع"), csv: (p) => p.id, cell: (p) => <span className="font-mono text-xs">{p.id}</span> },
            { id: "invoice", header: L("Invoice", "الفاتورة"), csv: (p) => p.invoice, cell: (p) => <span className="font-mono text-xs">{p.invoice}</span> },
            { id: "date", header: L("Date", "التاريخ"), sort: (p) => p.date, csv: (p) => p.date, cell: (p) => p.date },
            { id: "amount", header: L("Amount", "المبلغ"), sort: (p) => p.amount, csv: (p) => String(p.amount), cell: (p) => <Money v={p.amount} /> },
            { id: "method", header: L("Method", "الطريقة"), csv: (p) => p.method.en, hideBelow: "md", cell: (p) => t(p.method) },
            { id: "status", header: L("Status", "الحالة"), csv: (p) => p.status.en, cell: (p) => <Badge tone={portalTone(p.status.en)}>{t(p.status)}</Badge> },
          ]}
          emptyTitle={L("No payments yet", "لا توجد مدفوعات")}
          emptyDescription={L("Completed payments will be listed here.", "ستظهر هنا المدفوعات المكتملة.")}
        />
      )}

      <Modal open={!!view} onClose={() => setView(null)} size="lg" title={L("Invoice details", "تفاصيل الفاتورة")} subtitle={view ? view.number : undefined}
        footer={
          <>
            <Button variant="outline" onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>
            <Button
              onClick={() =>
                view &&
                downloadCsv(`rehlah-invoice-${view.number}`, [t(L("Description", "الوصف")), t(L("Qty", "الكمية")), t(L("Amount", "المبلغ"))],
                  [...view.items.map((it) => [t(it.desc), it.qty, it.qty * it.unit]), [t(L("Total", "الإجمالي")), "", view.total]])
              }
            >
              <Download className="size-4" aria-hidden /> {t(L("Download PDF", "تنزيل PDF"))}
            </Button>
          </>
        }
      >
        {view && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Issued", "تاريخ الإصدار"), v: view.date },
                { k: L("Due", "الاستحقاق"), v: view.due },
                { k: L("Payment method", "طريقة الدفع"), v: t(view.method) },
                { k: L("Status", "الحالة"), v: <Badge tone={portalTone(view.status.en)}>{t(view.status)}</Badge> },
              ]}
            />
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <caption className="sr-only">{t(L("Invoice line items", "بنود الفاتورة"))}</caption>
                <thead className="bg-muted/60 text-xs text-muted-foreground">
                  <tr>
                    <th scope="col" className="p-3 text-start">{t(L("Description", "الوصف"))}</th>
                    <th scope="col" className="p-3 text-start">{t(L("Qty", "الكمية"))}</th>
                    <th scope="col" className="p-3 text-end">{t(L("Amount", "المبلغ"))}</th>
                  </tr>
                </thead>
                <tbody>
                  {view.items.map((it, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3">{t(it.desc)}</td>
                      <td className="p-3 tabular-nums">{it.qty}</td>
                      <td className="p-3 text-end"><Money v={it.qty * it.unit} /></td>
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-muted/40">
                    <td className="p-3 font-medium" colSpan={2}>{t(L("VAT 15%", "ضريبة القيمة المضافة ١٥٪"))}</td>
                    <td className="p-3 text-end"><Money v={Math.round(view.total * 0.15)} /></td>
                  </tr>
                  <tr className="border-t border-border bg-tint-green/60">
                    <td className="p-3 font-semibold" colSpan={2}>{t(L("Total", "الإجمالي"))}</td>
                    <td className="p-3 text-end"><Money v={view.total} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={!!pay} onClose={() => { setPay(null); setStep(1); }} title={L("Secure payment", "دفع آمن")} subtitle={pay ? pay.number : undefined}
        footer={
          step === 1 ? (
            <>
              <Button variant="outline" onClick={() => setPay(null)}>{t(L("Cancel", "إلغاء"))}</Button>
              <Button onClick={() => setStep(2)}>{t(L("Continue", "متابعة"))}</Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setStep(1)}>{t(L("Back", "رجوع"))}</Button>
              <Button onClick={confirmPay}>{t(L("Confirm payment", "تأكيد الدفع"))}</Button>
            </>
          )
        }
      >
        {pay && (
          <div className="space-y-5">
            <div className="flex items-center justify-between rounded-2xl bg-tint-green px-4 py-3">
              <span className="text-sm font-medium text-[var(--primary-deep)]">{t(L("Amount due", "المبلغ المستحق"))}</span>
              <span className="text-lg font-bold tabular-nums text-[var(--primary-deep)]">{(pay.total - pay.paid).toLocaleString()} SAR</span>
            </div>
            {step === 1 ? (
              <Field label={L("Payment method", "طريقة الدفع")}>
                <Select options={[L("Mada", "مدى"), L("Credit card", "بطاقة ائتمانية"), L("Apple Pay", "Apple Pay"), L("Bank transfer", "تحويل بنكي")]} />
              </Field>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label={L("Card number", "رقم البطاقة")} required>
                    <Input inputMode="numeric" placeholder="4242 4242 4242 4242" />
                  </Field>
                </div>
                <Field label={L("Expiry", "تاريخ الانتهاء")} required><Input placeholder="MM / YY" /></Field>
                <Field label={L("CVV", "رمز التحقق")} required><Input inputMode="numeric" placeholder="123" /></Field>
                <div className="sm:col-span-2 flex items-center gap-2 rounded-xl bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5" aria-hidden /> {t(L("Payments are processed over an encrypted connection.", "تتم معالجة المدفوعات عبر اتصال مشفّر."))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

/* ============================ SICK LEAVE ============================ */

export function PortalSickLeave() {
  const { t } = useI18n();
  const toast = useToast();
  const [view, setView] = useState<PortalSickLeave | null>(null);
  const [share, setShare] = useState<PortalSickLeave | null>(null);

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Sick leave", "الإجازات المرضية")}
        description={L("View, download and share issued sick leave certificates", "عرض وتنزيل ومشاركة شهادات الإجازة المرضية")}
      />
      <DataGrid
        caption={L("Sick leave certificates", "شهادات الإجازة المرضية")}
        rows={portalSickLeaves}
        rowKey={(s) => s.id}
        exportName="rehlah-portal-sick-leave"
        search={(s) => s.id}
        searchPlaceholder={L("Search by certificate number", "بحث برقم الشهادة")}
        filters={[
          {
            id: "status", label: L("Status", "الحالة"),
            options: [
              { value: "Issued", label: L("Issued", "صادرة") },
              { value: "Expired", label: L("Expired", "منتهية") },
            ],
            match: (s, v) => s.status.en === v,
          },
        ]}
        columns={[
          { id: "id", header: L("Certificate", "الشهادة"), csv: (s) => s.id, cell: (s) => <span className="font-mono text-xs">{s.id}</span> },
          { id: "issued", header: L("Issued", "تاريخ الإصدار"), sort: (s) => s.issued, csv: (s) => s.issued, cell: (s) => s.issued },
          { id: "period", header: L("Period", "الفترة"), csv: (s) => `${s.from} - ${s.to}`, hideBelow: "md", cell: (s) => `${s.from} → ${s.to}` },
          { id: "days", header: L("Days", "الأيام"), sort: (s) => s.days, csv: (s) => String(s.days), cell: (s) => s.days },
          { id: "specialist", header: L("Specialist", "الأخصائي"), csv: (s) => doc(s.specialist).en, hideBelow: "lg", cell: (s) => t(doc(s.specialist)) },
          { id: "status", header: L("Status", "الحالة"), csv: (s) => s.status.en, cell: (s) => <Badge tone={portalTone(s.status.en)}>{t(s.status)}</Badge> },
          {
            id: "actions", header: L("Actions", "إجراءات"), align: "end",
            cell: (s) => (
              <span className="flex justify-end gap-2">
                <Button size="sm" variant="outline" onClick={() => setView(s)}>{t(L("View", "عرض"))}</Button>
                <Button
                  size="sm"
                  variant="ghost"
                  aria-label={t(L("Download", "تنزيل"))}
                  onClick={() => {
                    const body = [s.id, `${t(L("From", "من"))}: ${s.from}`, `${t(L("To", "إلى"))}: ${s.to}`, `${t(L("Days", "الأيام"))}: ${s.days}`, `${t(L("Specialist", "الأخصائي"))}: ${t(doc(s.specialist))}`, t(s.reason)].join("\n");
                    const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${s.id}.txt`;
                    a.click();
                    URL.revokeObjectURL(url);
                    toast.push("success", L("Certificate downloaded", "تم تنزيل الشهادة"));
                  }}
                >
                  <Download className="size-4" aria-hidden />
                </Button>
                <Button size="sm" variant="ghost" aria-label={t(L("Share", "مشاركة"))} onClick={() => setShare(s)}>
                  <Share2 className="size-4" aria-hidden />
                </Button>
              </span>
            ),
          },
        ]}
        emptyTitle={L("No sick leave certificates", "لا توجد شهادات إجازة مرضية")}
        emptyDescription={L("Certificates issued by your specialist will appear here.", "ستظهر هنا الشهادات الصادرة من الأخصائي.")}
      />

      <Modal open={!!view} onClose={() => setView(null)} size="lg" title={L("Sick leave certificate", "شهادة إجازة مرضية")} subtitle={view ? view.id : undefined}
        footer={
          <>
            <Button variant="outline" onClick={() => setView(null)}>{t(L("Close", "إغلاق"))}</Button>
            <Button
              onClick={() => {
                if (!view) return;
                const body = [view.id, `${t(L("From", "من"))}: ${view.from}`, `${t(L("To", "إلى"))}: ${view.to}`, `${t(L("Days", "الأيام"))}: ${view.days}`, `${t(L("Specialist", "الأخصائي"))}: ${t(doc(view.specialist))}`, t(view.reason)].join("\n");
                const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${view.id}.txt`;
                a.click();
                URL.revokeObjectURL(url);
                toast.push("success", L("Certificate downloaded", "تم تنزيل الشهادة"));
              }}
            >
              <Download className="size-4" aria-hidden /> {t(L("Download PDF", "تنزيل PDF"))}
            </Button>
          </>
        }
      >
        {view && (
          <div className="space-y-5">
            <KeyValue
              items={[
                { k: L("Issued on", "تاريخ الإصدار"), v: view.issued },
                { k: L("From", "من"), v: view.from },
                { k: L("To", "إلى"), v: view.to },
                { k: L("Duration", "المدة"), v: `${view.days} ${t(L("days", "أيام"))}` },
                { k: L("Specialist", "الأخصائي"), v: t(doc(view.specialist)) },
                { k: L("Status", "الحالة"), v: <Badge tone={portalTone(view.status.en)}>{t(view.status)}</Badge> },
              ]}
            />
            <p className="rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed">{t(view.reason)}</p>
          </div>
        )}
      </Modal>

      <Modal open={!!share} onClose={() => setShare(null)} title={L("Share certificate", "مشاركة الشهادة")} subtitle={L("A secure link valid for 7 days", "رابط آمن صالح لمدة ٧ أيام")}
        footer={
          <>
            <Button variant="outline" onClick={() => setShare(null)}>{t(L("Close", "إغلاق"))}</Button>
            <Button onClick={() => { toast.push("success", L("Secure link copied", "تم نسخ الرابط الآمن")); setShare(null); }}>
              <Copy className="size-4" aria-hidden /> {t(L("Copy link", "نسخ الرابط"))}
            </Button>
          </>
        }
      >
        {share && (
          <div className="space-y-5">
            <Field label={L("Secure link", "الرابط الآمن")}>
              <Input readOnly value={`https://portal.rehlah.sa/s/${share.id.toLowerCase()}`} />
            </Field>
            <Field label={L("Send by email", "إرسال بالبريد")}>
              <Input type="email" placeholder="school@example.com" />
            </Field>
          </div>
        )}
      </Modal>
    </div>
  );
}

/* ============================ NOTIFICATIONS ============================ */

export function PortalNotifications() {
  const { t } = useI18n();
  const toast = useToast();
  const [items, setItems] = useState<PortalNotification[]>(portalNotifications);
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState<PortalNotification | null>(null);
  const [prefs, setPrefs] = useState({ sms: true, email: true, whatsapp: false, push: true });

  const rows = items.filter((n) => (tab === "unread" ? n.unread : true));

  const openItem = (n: PortalNotification) => {
    setOpen(n);
    setItems((s) => s.map((x) => (x.id === n.id ? { ...x, unread: false } : x)));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={L("Notifications", "الإشعارات")}
        description={L("Reminders, billing alerts and clinical updates", "التذكيرات وتنبيهات الفواتير والتحديثات السريرية")}
        actions={
          <Button variant="outline" onClick={() => { setItems((s) => s.map((n) => ({ ...n, unread: false }))); toast.push("success", L("All notifications marked read", "تم تعليم جميع الإشعارات كمقروءة")); }}>
            <CheckCircle2 className="size-4" aria-hidden /> {t(L("Mark all read", "تعليم الكل كمقروء"))}
          </Button>
        }
      />
      <Tabs
        label={t(L("Notification filters", "تصفية الإشعارات"))}
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "all", label: L("All", "الكل"), count: items.length },
          { id: "unread", label: L("Unread", "غير مقروءة"), count: items.filter((n) => n.unread).length },
          { id: "prefs", label: L("Preferences", "التفضيلات") },
        ]}
      />
      {tab === "prefs" ? (
        <Card className="space-y-4">
          <h2 className="text-base font-semibold">{t(L("How we contact you", "كيف نتواصل معك"))}</h2>
          {([
            { id: "sms", label: L("SMS reminders", "تذكيرات الرسائل النصية"), icon: <MessageSquare className="size-4" aria-hidden /> },
            { id: "email", label: L("Email updates", "تحديثات البريد الإلكتروني"), icon: <Mail className="size-4" aria-hidden /> },
            { id: "whatsapp", label: L("WhatsApp messages", "رسائل واتساب"), icon: <MessageSquare className="size-4" aria-hidden /> },
            { id: "push", label: L("App push notifications", "إشعارات التطبيق"), icon: <Bell className="size-4" aria-hidden /> },
          ] as const).map((row) => (
            <label key={row.id} className="flex items-center justify-between gap-4 rounded-2xl border border-border p-4">
              <span className="flex min-w-0 items-center gap-3 text-sm font-medium">
                <span className="grid size-9 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]">{row.icon}</span>
                {t(row.label)}
              </span>
              <input
                type="checkbox"
                checked={prefs[row.id]}
                onChange={(e) => { setPrefs((p) => ({ ...p, [row.id]: e.target.checked })); toast.push("success", L("Preference saved", "تم حفظ التفضيل")); }}
                className="size-[18px] shrink-0 rounded-[6px] border-border text-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
              />
            </label>
          ))}
        </Card>
      ) : (
        <Card className="space-y-3">
          <h2 className="sr-only">{t(L("Notification list", "قائمة الإشعارات"))}</h2>
          {rows.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground">
              {t(L("You are all caught up.", "لا توجد إشعارات جديدة."))}
            </p>
          )}
          <ul className="space-y-3">
            {rows.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => openItem(n)}
                  className={cn(
                    "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-2xl border border-border p-4 text-start transition-colors hover:bg-muted/50",
                    n.unread && "bg-tint-green/60",
                  )}
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-surface text-primary">
                    <Bell className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{t(n.title)}</span>
                    <span className="block text-sm text-muted-foreground">{t(n.body)}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{t(n.category)} · {t(n.time)}</span>
                  </span>
                  {n.unread && <span className="mt-2 size-2 rounded-full bg-primary" aria-label={t(L("Unread", "غير مقروء"))} />}
                </button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Modal open={!!open} onClose={() => setOpen(null)} title={open ? open.title : ""} subtitle={open ? open.category : undefined}
        footer={<Button variant="outline" onClick={() => setOpen(null)}>{t(L("Close", "إغلاق"))}</Button>}>
        {open && (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">{t(open.detail)}</p>
            <p className="text-xs text-muted-foreground">{t(open.time)}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

/* ============================ PROFILE ============================ */

export function PortalProfile({ childName }: { childName: string }) {
  const { t } = useI18n();
  const toast = useToast();
  const [tab, setTab] = useState("personal");
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    toast.push("success", L("Profile updated", "تم تحديث الملف الشخصي"));
  };

  return (
    <div className="space-y-6">
      <PageHeader title={L("Profile", "الملف الشخصي")} description={L("Patient, guardian and medical information", "بيانات المريض وولي الأمر والمعلومات الطبية")} />
      <Tabs
        label={t(L("Profile sections", "أقسام الملف"))}
        value={tab}
        onChange={setTab}
        tabs={[
          { id: "personal", label: L("Personal information", "البيانات الشخصية") },
          { id: "guardian", label: L("Guardian information", "بيانات ولي الأمر") },
          { id: "medical", label: L("Medical information", "المعلومات الطبية") },
        ]}
      />
      <Card>
        <form className="space-y-6" onSubmit={save}>
          {tab === "personal" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={L("Patient name", "اسم المريض")} required><Input defaultValue={childName} required /></Field>
              <Field label={L("File number", "رقم الملف")}><Input defaultValue="RH-10241" readOnly /></Field>
              <Field label={L("Date of birth", "تاريخ الميلاد")}><Input type="date" defaultValue="2019-04-11" /></Field>
              <Field label={L("Gender", "الجنس")}><Select options={[L("Female", "أنثى"), L("Male", "ذكر")]} /></Field>
              <Field label={L("Nationality", "الجنسية")}><Select options={[L("Saudi", "سعودي"), L("Non-Saudi", "غير سعودي")]} /></Field>
              <Field label={L("National ID", "رقم الهوية")}><Input defaultValue="1098******" inputMode="numeric" /></Field>
            </div>
          )}
          {tab === "guardian" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={L("Guardian name", "اسم ولي الأمر")} required><Input defaultValue={t(L("Mohammed Al-Otaibi", "محمد العتيبي"))} required /></Field>
              <Field label={L("Relationship", "صلة القرابة")}><Select options={[L("Father", "الأب"), L("Mother", "الأم"), L("Legal guardian", "وصي قانوني")]} /></Field>
              <Field label={L("Mobile number", "رقم الجوال")} required><Input type="tel" defaultValue="+966 55 123 4567" dir="ltr" required /></Field>
              <Field label={L("Email", "البريد الإلكتروني")} required><Input type="email" defaultValue="m.alotaibi@example.com" dir="ltr" required /></Field>
              <div className="sm:col-span-2">
                <Field label={L("Address", "العنوان")}><Textarea defaultValue={t(L("Al Olaya district, Riyadh", "حي العليا، الرياض"))} /></Field>
              </div>
            </div>
          )}
          {tab === "medical" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={L("Primary diagnosis", "التشخيص الرئيسي")}><Input defaultValue={t(L("Speech delay", "تأخر النطق"))} /></Field>
              <Field label={L("Referring hospital", "المستشفى المحيل")}><Input defaultValue={t(L("King Fahad Hospital", "مستشفى الملك فهد"))} /></Field>
              <Field label={L("Allergies", "الحساسية")}><Input defaultValue={t(L("None recorded", "لا يوجد"))} /></Field>
              <Field label={L("Insurance provider", "شركة التأمين")}><Select options={[L("Bupa Arabia", "بوبا العربية"), L("Tawuniya", "التعاونية"), L("Self-pay", "دفع ذاتي")]} /></Field>
              <div className="sm:col-span-2">
                <Field label={L("Current medication", "الأدوية الحالية")} hint={L("Shared with the care team", "تتم مشاركتها مع فريق الرعاية")}>
                  <Textarea defaultValue={t(L("None", "لا يوجد"))} />
                </Field>
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => toast.push("info", L("Changes discarded", "تم تجاهل التغييرات"))}>{t(L("Discard", "تجاهل"))}</Button>
            <Button type="submit">{t(L("Save changes", "حفظ التغييرات"))}</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

/* ============================ SETTINGS ============================ */

export function PortalSettings() {
  const { t, lang, setLang } = useI18n();
  const toast = useToast();
  const [pwOpen, setPwOpen] = useState(false);
  const [pw, setPw] = useState({ current: "", next: "", confirm: "" });
  const [pwError, setPwError] = useState<Loc | null>(null);
  const [privacy, setPrivacy] = useState({ share: true, research: false, marketing: false });
  const [help, setHelp] = useState(false);

  const savePassword = () => {
    if (pw.next.length < 8) return setPwError(L("Password must be at least 8 characters", "يجب ألا تقل كلمة المرور عن ٨ أحرف"));
    if (pw.next !== pw.confirm) return setPwError(L("Passwords do not match", "كلمتا المرور غير متطابقتين"));
    setPwOpen(false);
    setPw({ current: "", next: "", confirm: "" });
    setPwError(null);
    toast.push("success", L("Password updated", "تم تحديث كلمة المرور"));
  };

  return (
    <div className="space-y-6">
      <PageHeader title={L("Settings", "الإعدادات")} description={L("Language, security, privacy and support", "اللغة والأمان والخصوصية والدعم")} />

      <Card className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-semibold"><Globe className="size-4 text-primary" aria-hidden /> {t(L("Language", "اللغة"))}</h2>
        <div className="flex flex-wrap gap-2">
          {(["en", "ar"] as const).map((l) => (
            <Button
              key={l}
              variant={lang === l ? "primary" : "outline"}
              onClick={() => { setLang(l); toast.push("success", L("Language updated", "تم تحديث اللغة")); }}
              aria-pressed={lang === l}
            >
              {l === "en" ? "English" : "العربية"}
            </Button>
          ))}
        </div>
      </Card>

      <Card className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-semibold"><Lock className="size-4 text-primary" aria-hidden /> {t(L("Security", "الأمان"))}</h2>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border p-4">
          <div className="min-w-0">
            <p className="text-sm font-medium">{t(L("Password", "كلمة المرور"))}</p>
            <p className="text-xs text-muted-foreground">{t(L("Last changed 3 months ago", "آخر تغيير قبل ٣ أشهر"))}</p>
          </div>
          <Button variant="outline" onClick={() => setPwOpen(true)}>{t(L("Change password", "تغيير كلمة المرور"))}</Button>
        </div>
      </Card>

      <Card className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-semibold"><ShieldCheck className="size-4 text-primary" aria-hidden /> {t(L("Privacy", "الخصوصية"))}</h2>
        {([
          { id: "share", label: L("Share records with my insurer", "مشاركة السجلات مع شركة التأمين") },
          { id: "research", label: L("Allow anonymised clinical research use", "السماح بالاستخدام البحثي المجهول") },
          { id: "marketing", label: L("Receive service updates and offers", "استلام تحديثات وعروض الخدمة") },
        ] as const).map((row) => (
          <label key={row.id} className="flex items-center justify-between gap-4 rounded-2xl border border-border p-4 text-sm">
            <span className="min-w-0 font-medium">{t(row.label)}</span>
            <input
              type="checkbox"
              checked={privacy[row.id]}
              onChange={(e) => { setPrivacy((p) => ({ ...p, [row.id]: e.target.checked })); toast.push("success", L("Privacy setting saved", "تم حفظ إعداد الخصوصية")); }}
              className="size-[18px] shrink-0 rounded-[6px] border-border text-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
            />
          </label>
        ))}
      </Card>

      <Card className="space-y-4">
        <h2 className="flex items-center gap-2 text-base font-semibold"><LifeBuoy className="size-4 text-primary" aria-hidden /> {t(L("Help & support", "المساعدة والدعم"))}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border p-4">
            <p className="text-sm font-medium">{t(L("Call the centre", "اتصل بالمركز"))}</p>
            <p className="mt-1 text-sm text-muted-foreground" dir="ltr">+966 11 234 5678</p>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <p className="text-sm font-medium">{t(L("Email support", "دعم البريد"))}</p>
            <p className="mt-1 text-sm text-muted-foreground" dir="ltr">support@rehlah.sa</p>
          </div>
        </div>
        <Button variant="outline" className="w-fit" onClick={() => setHelp(true)}>{t(L("Contact support", "تواصل مع الدعم"))}</Button>
      </Card>

      <Modal open={pwOpen} onClose={() => setPwOpen(false)} title={L("Change password", "تغيير كلمة المرور")}
        footer={
          <>
            <Button variant="outline" onClick={() => setPwOpen(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={savePassword}>{t(L("Update password", "تحديث كلمة المرور"))}</Button>
          </>
        }
      >
        <div className="space-y-5">
          <Field label={L("Current password", "كلمة المرور الحالية")} required>
            <Input type="password" value={pw.current} onChange={(e) => setPw({ ...pw, current: e.target.value })} />
          </Field>
          <Field label={L("New password", "كلمة المرور الجديدة")} required hint={L("At least 8 characters", "٨ أحرف على الأقل")}>
            <Input type="password" value={pw.next} aria-invalid={!!pwError} onChange={(e) => { setPw({ ...pw, next: e.target.value }); setPwError(null); }} />
          </Field>
          <Field label={L("Confirm new password", "تأكيد كلمة المرور")} required>
            <Input type="password" value={pw.confirm} aria-invalid={!!pwError} onChange={(e) => { setPw({ ...pw, confirm: e.target.value }); setPwError(null); }} />
          </Field>
          {pwError && <p role="alert" className="text-sm font-medium text-destructive">{t(pwError)}</p>}
        </div>
      </Modal>

      <Modal open={help} onClose={() => setHelp(false)} title={L("Contact support", "تواصل مع الدعم")} subtitle={L("We reply within one business day", "نرد خلال يوم عمل واحد")}
        footer={
          <>
            <Button variant="outline" onClick={() => setHelp(false)}>{t(L("Cancel", "إلغاء"))}</Button>
            <Button onClick={() => { setHelp(false); toast.push("success", L("Message sent to support", "تم إرسال الرسالة للدعم")); }}>{t(L("Send message", "إرسال"))}</Button>
          </>
        }
      >
        <div className="space-y-5">
          <Field label={L("Topic", "الموضوع")}>
            <Select options={[L("Appointments", "المواعيد"), L("Billing", "الفواتير"), L("Technical issue", "مشكلة تقنية"), L("Other", "أخرى")]} />
          </Field>
          <Field label={L("Message", "الرسالة")} required>
            <Textarea rows={4} placeholder={t(L("How can we help?", "كيف يمكننا المساعدة؟"))} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}

export function PortalProgressRing({ value, size = 132 }: { value: number; size?: number }) {
  const r = (size - 14) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${value}%`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--muted)" strokeWidth="10" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--primary)" strokeWidth="10" strokeLinecap="round"
        strokeDasharray={`${(c * value) / 100} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="fill-foreground text-[22px] font-bold">
        {value}%
      </text>
    </svg>
  );
}

export function ProgressList({ items }: { items: { label: Loc; value: number }[] }) {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      {items.map((g, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="min-w-0 font-medium">{t(g.label)}</span>
            <span className="shrink-0 tabular-nums text-muted-foreground">{g.value}%</span>
          </div>
          <ProgressBar value={g.value} />
        </div>
      ))}
    </div>
  );
}
