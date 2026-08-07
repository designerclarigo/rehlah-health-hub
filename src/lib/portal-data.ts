import { L, type Loc } from "@/lib/i18n";

/* ---------------------------------------------------------------
   Patient portal (guardian) data — scoped to one child: Sara Al-Otaibi
----------------------------------------------------------------*/

export type PortalAppointment = {
  id: string;
  date: string;
  iso: string;
  time: string;
  specialty: number;
  specialist: number;
  type: Loc;
  location: Loc;
  status: Loc;
  notes: Loc;
  upcoming: boolean;
};

export const portalAppointments: PortalAppointment[] = [
  { id: "APT-2081", date: "12 Aug 2026", iso: "2026-08-12", time: "08:30", specialty: 2, specialist: 0, type: L("Individual session", "جلسة فردية"), location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"), status: L("Confirmed", "مؤكد"), notes: L("Bring the home exercise log", "إحضار سجل التمارين المنزلية"), upcoming: true },
  { id: "APT-2082", date: "19 Aug 2026", iso: "2026-08-19", time: "09:15", specialty: 2, specialist: 0, type: L("Individual session", "جلسة فردية"), location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"), status: L("Confirmed", "مؤكد"), notes: L("Articulation drills", "تمارين المخارج"), upcoming: true },
  { id: "APT-2083", date: "26 Aug 2026", iso: "2026-08-26", time: "10:00", specialty: 1, specialist: 2, type: L("Assessment", "تقييم"), location: L("Assessment room 1", "غرفة التقييم ١"), status: L("Pending", "قيد الانتظار"), notes: L("Quarterly re-assessment", "إعادة تقييم ربع سنوية"), upcoming: true },
  { id: "APT-2074", date: "05 Aug 2026", iso: "2026-08-05", time: "08:30", specialty: 2, specialist: 0, type: L("Individual session", "جلسة فردية"), location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"), status: L("Present", "حضر"), notes: L("Good participation", "مشاركة جيدة"), upcoming: false },
  { id: "APT-2069", date: "29 Jul 2026", iso: "2026-07-29", time: "08:30", specialty: 2, specialist: 0, type: L("Individual session", "جلسة فردية"), location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"), status: L("Present", "حضر"), notes: L("Home programme updated", "تحديث البرنامج المنزلي"), upcoming: false },
  { id: "APT-2061", date: "22 Jul 2026", iso: "2026-07-22", time: "08:30", specialty: 2, specialist: 0, type: L("Individual session", "جلسة فردية"), location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"), status: L("Excused absence", "غياب بعذر"), notes: L("Travel — rescheduled", "سفر — أعيد الجدولة"), upcoming: false },
  { id: "APT-2055", date: "15 Jul 2026", iso: "2026-07-15", time: "11:00", specialty: 2, specialist: 0, type: L("Consultation", "استشارة"), location: L("Clinic 2", "عيادة ٢"), status: L("Present", "حضر"), notes: L("Plan review with guardian", "مراجعة الخطة مع ولي الأمر"), upcoming: false },
  { id: "APT-2048", date: "08 Jul 2026", iso: "2026-07-08", time: "08:30", specialty: 2, specialist: 0, type: L("Individual session", "جلسة فردية"), location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"), status: L("Cancelled", "ملغي"), notes: L("Cancelled by centre", "ألغي من المركز"), upcoming: false },
];

export const portalSlots = ["08:30", "09:15", "10:00", "11:00", "12:30", "15:00", "16:45"];

export type PortalGoal = { goal: Loc; progress: number; target: Loc };

export type PortalPlan = {
  id: string;
  title: Loc;
  specialty: number;
  specialist: number;
  start: string;
  end: string;
  sessions: string;
  frequency: Loc;
  progress: number;
  status: Loc;
  goals: PortalGoal[];
  homeProgramme: Loc[];
};

export const portalPlans: PortalPlan[] = [
  {
    id: "TP-3011",
    title: L("Speech & language plan", "خطة النطق واللغة"),
    specialty: 2, specialist: 0, start: "01 Mar 2026", end: "01 Sep 2026",
    sessions: "24 / 36", frequency: L("2 sessions per week", "جلستان أسبوعياً"), progress: 68,
    status: L("Active", "نشطة"),
    goals: [
      { goal: L("Produce /s/ in words", "نطق حرف السين في الكلمات"), progress: 80, target: L("90% accuracy", "دقة ٩٠٪") },
      { goal: L("Follow 2-step instructions", "تنفيذ تعليمات من خطوتين"), progress: 62, target: L("8 of 10 trials", "٨ من ١٠ محاولات") },
      { goal: L("50 new vocabulary items", "٥٠ مفردة جديدة"), progress: 55, target: L("50 words", "٥٠ كلمة") },
    ],
    homeProgramme: [
      L("10 minutes of /s/ word cards daily", "١٠ دقائق يومياً لبطاقات حرف السين"),
      L("Read one short story together each evening", "قراءة قصة قصيرة كل مساء"),
      L("Record two new words in the vocabulary log", "تسجيل كلمتين جديدتين في السجل"),
    ],
  },
  {
    id: "TP-2884",
    title: L("Occupational therapy plan", "خطة العلاج الوظيفي"),
    specialty: 1, specialist: 2, start: "20 Jan 2026", end: "20 Jul 2026",
    sessions: "42 / 48", frequency: L("1 session per week", "جلسة أسبوعياً"), progress: 100,
    status: L("Completed", "مكتملة"),
    goals: [
      { goal: L("Tolerate textures", "تحمل الملمس"), progress: 100, target: L("5 textures", "٥ ملامس") },
      { goal: L("Fine motor grip", "قبضة الحركة الدقيقة"), progress: 96, target: L("Tripod grasp", "قبضة ثلاثية") },
    ],
    homeProgramme: [L("Play-dough activity twice weekly", "نشاط الصلصال مرتين أسبوعياً")],
  },
];

export type PortalAssessment = {
  id: string;
  name: Loc;
  specialty: number;
  specialist: number;
  date: string;
  score: number;
  previous: number;
  status: Loc;
  summary: Loc;
  domains: { name: Loc; score: number }[];
};

export const portalAssessments: PortalAssessment[] = [
  {
    id: "AS-7741", name: L("Speech & language re-assessment", "إعادة تقييم النطق واللغة"), specialty: 2, specialist: 0,
    date: "12 Jul 2026", score: 82, previous: 74, status: L("Completed", "مكتمل"),
    summary: L("Clear gains in articulation and receptive language.", "تحسن واضح في المخارج واللغة الاستقبالية."),
    domains: [
      { name: L("Articulation", "المخارج"), score: 84 },
      { name: L("Receptive language", "اللغة الاستقبالية"), score: 88 },
      { name: L("Expressive language", "اللغة التعبيرية"), score: 74 },
    ],
  },
  {
    id: "AS-7620", name: L("Speech & language re-assessment", "إعادة تقييم النطق واللغة"), specialty: 2, specialist: 0,
    date: "12 Apr 2026", score: 74, previous: 66, status: L("Completed", "مكتمل"),
    summary: L("Steady progress; vocabulary remains a focus area.", "تقدم مستمر؛ المفردات تبقى محور التركيز."),
    domains: [
      { name: L("Articulation", "المخارج"), score: 72 },
      { name: L("Receptive language", "اللغة الاستقبالية"), score: 80 },
      { name: L("Expressive language", "اللغة التعبيرية"), score: 68 },
    ],
  },
  {
    id: "AS-7502", name: L("Initial speech assessment", "التقييم المبدئي للنطق"), specialty: 2, specialist: 0,
    date: "05 Jan 2026", score: 66, previous: 0, status: L("Completed", "مكتمل"),
    summary: L("Baseline assessment used to build the treatment plan.", "تقييم أساسي لبناء الخطة العلاجية."),
    domains: [
      { name: L("Articulation", "المخارج"), score: 60 },
      { name: L("Receptive language", "اللغة الاستقبالية"), score: 72 },
      { name: L("Expressive language", "اللغة التعبيرية"), score: 62 },
    ],
  },
];

export const assessmentTrend = [
  { period: "Jan", score: 66 },
  { period: "Feb", score: 68 },
  { period: "Mar", score: 71 },
  { period: "Apr", score: 74 },
  { period: "May", score: 77 },
  { period: "Jun", score: 79 },
  { period: "Jul", score: 82 },
];

export type PortalReport = { id: string; name: Loc; period: Loc; date: string; specialist: number; type: Loc };

export const portalReports: PortalReport[] = [
  { id: "RP-551", name: L("Monthly progress report", "تقرير التقدم الشهري"), period: L("July 2026", "يوليو ٢٠٢٦"), date: "31 Jul 2026", specialist: 0, type: L("Progress", "تقدم") },
  { id: "RP-522", name: L("Monthly progress report", "تقرير التقدم الشهري"), period: L("June 2026", "يونيو ٢٠٢٦"), date: "30 Jun 2026", specialist: 0, type: L("Progress", "تقدم") },
  { id: "RP-498", name: L("Quarterly assessment report", "تقرير التقييم الربعي"), period: L("Q2 2026", "الربع الثاني ٢٠٢٦"), date: "12 Apr 2026", specialist: 0, type: L("Assessment", "تقييم") },
];

export type PortalDocument = {
  id: string;
  name: Loc;
  type: Loc;
  date: string;
  size: string;
  by: Loc;
  source: Loc;
};

export const portalDocuments: PortalDocument[] = [
  { id: "DOC-9011", name: L("Lab result — vitamin D", "نتيجة مختبر — فيتامين د"), type: L("Lab result", "نتيجة مختبر"), date: "02 Jul 2026", size: "310 KB", by: L("Reem (Reception)", "ريم (الاستقبال)"), source: L("Centre", "المركز") },
  { id: "DOC-8940", name: L("Speech assessment report", "تقرير تقييم النطق"), type: L("Medical report", "تقرير طبي"), date: "12 Apr 2026", size: "1.1 MB", by: L("Dr. Layla Al-Harbi", "د. ليلى الحربي"), source: L("Centre", "المركز") },
  { id: "DOC-8802", name: L("Service contract", "عقد الخدمة"), type: L("Contract", "عقد"), date: "01 Mar 2026", size: "820 KB", by: L("Admin", "مدير النظام"), source: L("Centre", "المركز") },
  { id: "DOC-8755", name: L("Birth certificate", "شهادة الميلاد"), type: L("Identity", "هوية"), date: "18 Feb 2026", size: "460 KB", by: L("Mohammed Al-Otaibi", "محمد العتيبي"), source: L("Uploaded by me", "مرفوع مني") },
  { id: "DOC-8730", name: L("Insurance card", "بطاقة التأمين"), type: L("Insurance", "تأمين"), date: "18 Feb 2026", size: "220 KB", by: L("Mohammed Al-Otaibi", "محمد العتيبي"), source: L("Uploaded by me", "مرفوع مني") },
];

export type PortalConsent = {
  id: string;
  name: Loc;
  description: Loc;
  body: Loc;
  signedOn: string | null;
  expires: string;
  status: Loc;
  version: string;
};

export const portalConsents: PortalConsent[] = [
  {
    id: "CN-4401", name: L("Treatment consent", "موافقة العلاج"),
    description: L("Consent to deliver rehabilitation therapy sessions", "الموافقة على تقديم جلسات التأهيل"),
    body: L("I authorise Rehlah Rehabilitation Centre to provide assessment and therapy services for my child, as described in the agreed treatment plan, and to review progress periodically with the assigned specialist.", "أفوض مركز رحلة للتأهيل بتقديم خدمات التقييم والعلاج لطفلي وفق الخطة العلاجية المتفق عليها ومراجعة التقدم دورياً مع الأخصائي المعالج."),
    signedOn: "01 Mar 2026", expires: "01 Mar 2027", status: L("Signed", "موقعة"), version: "v2.1",
  },
  {
    id: "CN-4478", name: L("Data sharing consent", "موافقة مشاركة البيانات"),
    description: L("Share clinical records with insurer and referring hospital", "مشاركة السجلات مع شركة التأمين والمستشفى المحيل"),
    body: L("I consent to sharing my child's clinical records with the insurance provider and the referring hospital for the purpose of claim processing and continuity of care.", "أوافق على مشاركة السجلات السريرية لطفلي مع شركة التأمين والمستشفى المحيل لأغراض معالجة المطالبات واستمرارية الرعاية."),
    signedOn: null, expires: "06 Sep 2026", status: L("Pending", "معلقة"), version: "v1.4",
  },
  {
    id: "CN-4310", name: L("Photography consent", "موافقة التصوير"),
    description: L("Use of session photos for clinical documentation", "استخدام صور الجلسات للتوثيق السريري"),
    body: L("I consent to photographs and video recordings being captured during therapy sessions strictly for clinical documentation and progress tracking.", "أوافق على التقاط الصور ومقاطع الفيديو خلال الجلسات لأغراض التوثيق السريري وتتبع التقدم فقط."),
    signedOn: "12 Apr 2026", expires: "12 Apr 2027", status: L("Signed", "موقعة"), version: "v1.0",
  },
  {
    id: "CN-4102", name: L("Telehealth consent", "موافقة الرعاية عن بعد"),
    description: L("Remote follow-up consultations", "الاستشارات عن بُعد"),
    body: L("I consent to receiving follow-up consultations through secure video calls when an in-person visit is not required.", "أوافق على تلقي استشارات المتابعة عبر مكالمات مرئية آمنة عندما لا تكون الزيارة الحضورية مطلوبة."),
    signedOn: "01 Mar 2026", expires: "01 Mar 2026", status: L("Expired", "منتهية"), version: "v1.2",
  },
];

export type PortalInvoice = {
  number: string;
  date: string;
  due: string;
  total: number;
  paid: number;
  status: Loc;
  method: Loc;
  items: { desc: Loc; qty: number; unit: number }[];
};

export const portalInvoices: PortalInvoice[] = [
  {
    number: "INV-2026-0412", date: "12 Jul 2026", due: "26 Jul 2026", total: 1200, paid: 1200,
    status: L("Paid", "مدفوعة"), method: L("Mada", "مدى"),
    items: [{ desc: L("Speech therapy session", "جلسة علاج نطق"), qty: 4, unit: 261 }],
  },
  {
    number: "INV-2026-0388", date: "12 Jun 2026", due: "26 Jun 2026", total: 1400, paid: 700,
    status: L("Partial", "جزئية"), method: L("Credit card", "بطاقة ائتمانية"),
    items: [
      { desc: L("Speech therapy session", "جلسة علاج نطق"), qty: 4, unit: 261 },
      { desc: L("Progress assessment", "تقييم التقدم"), qty: 1, unit: 174 },
    ],
  },
  {
    number: "INV-2026-0344", date: "12 May 2026", due: "26 May 2026", total: 980, paid: 0,
    status: L("Unpaid", "غير مدفوعة"), method: L("Not paid", "غير مدفوعة"),
    items: [{ desc: L("Speech therapy session", "جلسة علاج نطق"), qty: 3, unit: 284 }],
  },
  {
    number: "INV-2026-0301", date: "12 Apr 2026", due: "26 Apr 2026", total: 1600, paid: 1600,
    status: L("Paid", "مدفوعة"), method: L("Bank transfer", "تحويل بنكي"),
    items: [{ desc: L("Family Journey package", "باقة العائلة"), qty: 1, unit: 1391 }],
  },
];

export type PortalPayment = { id: string; invoice: string; date: string; amount: number; method: Loc; status: Loc };

export const portalPayments: PortalPayment[] = [
  { id: "PMT-8812", invoice: "INV-2026-0412", date: "12 Jul 2026", amount: 1200, method: L("Mada", "مدى"), status: L("Successful", "ناجحة") },
  { id: "PMT-8640", invoice: "INV-2026-0388", date: "14 Jun 2026", amount: 700, method: L("Credit card", "بطاقة ائتمانية"), status: L("Successful", "ناجحة") },
  { id: "PMT-8402", invoice: "INV-2026-0301", date: "13 Apr 2026", amount: 1600, method: L("Bank transfer", "تحويل بنكي"), status: L("Successful", "ناجحة") },
];

export type PortalSickLeave = {
  id: string;
  issued: string;
  from: string;
  to: string;
  days: number;
  specialist: number;
  reason: Loc;
  status: Loc;
};

export const portalSickLeaves: PortalSickLeave[] = [
  { id: "SL-2026-0142", issued: "15 Jul 2026", from: "15 Jul 2026", to: "16 Jul 2026", days: 2, specialist: 0, reason: L("Post-session fatigue", "إرهاق بعد الجلسة"), status: L("Issued", "صادرة") },
  { id: "SL-2026-0098", issued: "22 May 2026", from: "22 May 2026", to: "22 May 2026", days: 1, specialist: 0, reason: L("Medical review", "مراجعة طبية"), status: L("Issued", "صادرة") },
  { id: "SL-2026-0051", issued: "10 Mar 2026", from: "10 Mar 2026", to: "12 Mar 2026", days: 3, specialist: 2, reason: L("Recovery period", "فترة تعافٍ"), status: L("Expired", "منتهية") },
];

export type PortalNotification = {
  id: string;
  title: Loc;
  body: Loc;
  detail: Loc;
  time: Loc;
  category: Loc;
  unread: boolean;
};

export const portalNotifications: PortalNotification[] = [
  { id: "NT-901", title: L("Appointment reminder", "تذكير بالموعد"), body: L("Speech therapy — 12 Aug at 08:30", "علاج النطق — ١٢ أغسطس ٨:٣٠"), detail: L("Your child's next session is with Dr. Layla Al-Harbi in Room 4. Please arrive 10 minutes early and bring the home exercise log.", "الجلسة القادمة مع د. ليلى الحربي في غرفة ٤. يرجى الحضور قبل ١٠ دقائق وإحضار سجل التمارين المنزلية."), time: L("2h ago", "قبل ساعتين"), category: L("Appointments", "المواعيد"), unread: true },
  { id: "NT-898", title: L("Consent awaiting signature", "موافقة بانتظار التوقيع"), body: L("Data sharing consent expires 06 Sep 2026", "موافقة مشاركة البيانات تنتهي ٦ سبتمبر ٢٠٢٦"), detail: L("Please review and sign the data sharing consent so insurance claims can continue to be processed without delay.", "يرجى مراجعة وتوقيع موافقة مشاركة البيانات لاستمرار معالجة مطالبات التأمين دون تأخير."), time: L("5h ago", "قبل ٥ ساعات"), category: L("Consents", "الموافقات"), unread: true },
  { id: "NT-884", title: L("Invoice unpaid", "فاتورة غير مدفوعة"), body: L("INV-2026-0344 · 980 SAR", "INV-2026-0344 · ٩٨٠ ريال"), detail: L("Invoice INV-2026-0344 is still unpaid. You can settle it securely from the Invoices page.", "الفاتورة INV-2026-0344 لا تزال غير مدفوعة. يمكنك سدادها بأمان من صفحة الفواتير."), time: L("Yesterday", "أمس"), category: L("Billing", "الفواتير"), unread: false },
  { id: "NT-870", title: L("New progress report", "تقرير تقدم جديد"), body: L("July 2026 report is ready", "تقرير يوليو ٢٠٢٦ جاهز"), detail: L("The July monthly progress report has been published by the care team and is available to download.", "تم نشر تقرير التقدم الشهري ليوليو من فريق الرعاية وهو متاح للتنزيل."), time: L("2 days ago", "قبل يومين"), category: L("Reports", "التقارير"), unread: false },
  { id: "NT-861", title: L("Sick leave issued", "إجازة مرضية صادرة"), body: L("SL-2026-0142 · 2 days", "SL-2026-0142 · يومان"), detail: L("A sick leave certificate has been issued and can be downloaded or shared from the Sick leave page.", "تم إصدار شهادة إجازة مرضية ويمكن تنزيلها أو مشاركتها من صفحة الإجازات المرضية."), time: L("3 weeks ago", "قبل ٣ أسابيع"), category: L("Clinical", "سريري"), unread: false },
];
