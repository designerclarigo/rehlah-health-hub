import { L, type Loc } from "./i18n";

export const SPECIALTIES: Loc[] = [
  L("Physical Therapy", "العلاج الطبيعي"),
  L("Occupational Therapy", "العلاج الوظيفي"),
  L("Speech Therapy", "علاج النطق"),
  L("Behavioral Therapy", "العلاج السلوكي"),
  L("Psychology", "علم النفس"),
];

export const SPECIALISTS = [
  L("Dr. Layla Al-Harbi", "د. ليلى الحربي"),
  L("Dr. Omar Al-Sayed", "د. عمر السيد"),
  L("Dr. Noura Al-Qahtani", "د. نورة القحطاني"),
  L("Dr. Faisal Al-Ghamdi", "د. فيصل الغامدي"),
];

export const ROLES = [
  { id: "admin", label: L("Admin", "مدير النظام") },
  { id: "specialist", label: L("Specialist", "أخصائي") },
  { id: "receptionist", label: L("Receptionist", "موظف استقبال") },
  { id: "accountant", label: L("Accountant", "محاسب") },
  { id: "assistant", label: L("Assistant", "مساعد") },
  { id: "patient", label: L("Patient", "مريض") },
] as const;

export type RoleId = (typeof ROLES)[number]["id"];

export const patients = [
  {
    file: "RH-10241",
    name: L("Sara Al-Otaibi", "سارة العتيبي"),
    age: 7,
    gender: L("Female", "أنثى"),
    nationality: L("Saudi", "سعودية"),
    diagnosis: L("Speech delay", "تأخر النطق"),
    specialty: 2,
    lastVisit: "12 Jul 2026",
    status: L("Active", "نشط"),
    payments: "1,200 SAR",
    due: "0 SAR",
  },
  {
    file: "RH-10242",
    name: L("Yousef Al-Dossary", "يوسف الدوسري"),
    age: 5,
    gender: L("Male", "ذكر"),
    nationality: L("Saudi", "سعودي"),
    diagnosis: L("Cerebral palsy", "الشلل الدماغي"),
    specialty: 0,
    lastVisit: "10 Jul 2026",
    status: L("Active", "نشط"),
    payments: "3,400 SAR",
    due: "450 SAR",
  },
  {
    file: "RH-10243",
    name: L("Maha Al-Zahrani", "مها الزهراني"),
    age: 9,
    gender: L("Female", "أنثى"),
    nationality: L("Egyptian", "مصرية"),
    diagnosis: L("Sensory processing", "المعالجة الحسية"),
    specialty: 1,
    lastVisit: "08 Jul 2026",
    status: L("Active", "نشط"),
    payments: "2,150 SAR",
    due: "300 SAR",
  },
  {
    file: "RH-10244",
    name: L("Rakan Al-Mutairi", "راكان المطيري"),
    age: 6,
    gender: L("Male", "ذكر"),
    nationality: L("Saudi", "سعودي"),
    diagnosis: L("ADHD", "فرط الحركة"),
    specialty: 3,
    lastVisit: "05 Jul 2026",
    status: L("Inactive", "غير نشط"),
    payments: "980 SAR",
    due: "0 SAR",
  },
  {
    file: "RH-10245",
    name: L("Lina Al-Shammari", "لينا الشمري"),
    age: 4,
    gender: L("Female", "أنثى"),
    nationality: L("Saudi", "سعودية"),
    diagnosis: L("Motor delay", "تأخر حركي"),
    specialty: 0,
    lastVisit: "02 Jul 2026",
    status: L("Active", "نشط"),
    payments: "1,760 SAR",
    due: "120 SAR",
  },
  {
    file: "RH-10246",
    name: L("Talal Al-Anzi", "طلال العنزي"),
    age: 11,
    gender: L("Male", "ذكر"),
    nationality: L("Kuwaiti", "كويتي"),
    diagnosis: L("Articulation disorder", "اضطراب النطق"),
    specialty: 2,
    lastVisit: "28 Jun 2026",
    status: L("Active", "نشط"),
    payments: "640 SAR",
    due: "640 SAR",
  },
  {
    file: "RH-10247",
    name: L("Jood Al-Faraj", "جود الفرج"),
    age: 8,
    gender: L("Female", "أنثى"),
    nationality: L("Saudi", "سعودية"),
    diagnosis: L("Anxiety", "القلق"),
    specialty: 4,
    lastVisit: "24 Jun 2026",
    status: L("Withdrawn", "منسحب"),
    payments: "420 SAR",
    due: "0 SAR",
  },
  {
    file: "RH-10248",
    name: L("Abdullah Al-Harthy", "عبدالله الحارثي"),
    age: 3,
    gender: L("Male", "ذكر"),
    nationality: L("Saudi", "سعودي"),
    diagnosis: L("Global delay", "تأخر نمائي شامل"),
    specialty: 1,
    lastVisit: "22 Jun 2026",
    status: L("Active", "نشط"),
    payments: "2,900 SAR",
    due: "200 SAR",
  },
];

export const appointments = [
  {
    time: "08:30",
    patient: 0,
    specialty: 2,
    specialist: 0,
    type: L("Individual session", "جلسة فردية"),
    status: L("Confirmed", "مؤكد"),
    notes: L("Bring home exercise log", "إحضار سجل التمارين المنزلية"),
  },
  {
    time: "09:15",
    patient: 1,
    specialty: 0,
    specialist: 1,
    type: L("Treatment program", "برنامج علاجي"),
    status: L("Present", "حضر"),
    notes: L("Gait training", "تدريب المشي"),
  },
  {
    time: "10:00",
    patient: 2,
    specialty: 1,
    specialist: 2,
    type: L("Group session", "جلسة جماعية"),
    status: L("Pending", "قيد الانتظار"),
    notes: L("Sensory room 2", "غرفة الحس ٢"),
  },
  {
    time: "11:00",
    patient: 4,
    specialty: 0,
    specialist: 1,
    type: L("Consultation", "استشارة"),
    status: L("Rescheduled", "أعيد جدولته"),
    notes: L("Guardian requested", "بطلب ولي الأمر"),
  },
  {
    time: "12:30",
    patient: 5,
    specialty: 2,
    specialist: 0,
    type: L("Individual session", "جلسة فردية"),
    status: L("Excused absence", "غياب بعذر"),
    notes: L("Travel", "سفر"),
  },
];

export const visits30 = Array.from({ length: 30 }, (_, i) => ({
  day: `${i + 1}`,
  visits: 24 + Math.round(14 * Math.sin(i / 3.2) + (i % 5) * 2),
}));

export const specialtyDistribution = [
  { name: "Physical", value: 34 },
  { name: "Occupational", value: 26 },
  { name: "Speech", value: 22 },
  { name: "Behavioral", value: 11 },
  { name: "Psychology", value: 7 },
];

export const monthlyComparison = [
  { m: "Jan", current: 320, previous: 280 },
  { m: "Feb", current: 345, previous: 300 },
  { m: "Mar", current: 390, previous: 352 },
  { m: "Apr", current: 368, previous: 341 },
  { m: "May", current: 412, previous: 372 },
  { m: "Jun", current: 455, previous: 398 },
  { m: "Jul", current: 478, previous: 421 },
];

export const attendanceStatus = [
  { name: "Present", value: 72 },
  { name: "Excused", value: 12 },
  { name: "Unexcused", value: 8 },
  { name: "Cancelled", value: 8 },
];

export const revenueMonthly = [
  { m: "Jan", revenue: 184 },
  { m: "Feb", revenue: 196 },
  { m: "Mar", revenue: 232 },
  { m: "Apr", revenue: 221 },
  { m: "May", revenue: 268 },
  { m: "Jun", revenue: 292 },
  { m: "Jul", revenue: 311 },
];

export const assessments = [
  {
    patient: 0,
    specialty: 2,
    date: "12 Jul 2026",
    specialist: 0,
    score: 82,
    duration: "35 min",
    status: L("Completed", "مكتمل"),
  },
  {
    patient: 1,
    specialty: 0,
    date: "10 Jul 2026",
    specialist: 1,
    score: 64,
    duration: "40 min",
    status: L("Under review", "قيد المراجعة"),
  },
  {
    patient: 2,
    specialty: 1,
    date: "08 Jul 2026",
    specialist: 2,
    score: 48,
    duration: "30 min",
    status: L("Needs follow-up", "يحتاج متابعة"),
  },
  {
    patient: 7,
    specialty: 1,
    date: "05 Jul 2026",
    specialist: 2,
    score: 76,
    duration: "45 min",
    status: L("Completed", "مكتمل"),
  },
];

export const invoices = [
  {
    number: "INV-2026-0412",
    date: "12 Jul 2026",
    patient: 0,
    total: 1200,
    paid: 1200,
    method: L("Mada", "مدى"),
    status: L("Paid", "مدفوعة"),
  },
  {
    number: "INV-2026-0411",
    date: "10 Jul 2026",
    patient: 1,
    total: 3850,
    paid: 3400,
    method: L("Bank transfer", "تحويل بنكي"),
    status: L("Partial", "جزئي"),
  },
  {
    number: "INV-2026-0410",
    date: "08 Jul 2026",
    patient: 2,
    total: 2450,
    paid: 2150,
    method: L("Credit card", "بطاقة ائتمانية"),
    status: L("Partial", "جزئي"),
  },
  {
    number: "INV-2026-0409",
    date: "06 Jul 2026",
    patient: 5,
    total: 640,
    paid: 0,
    method: L("Cash", "نقدي"),
    status: L("Unpaid", "غير مدفوعة"),
  },
  {
    number: "INV-2026-0408",
    date: "02 Jul 2026",
    patient: 6,
    total: 420,
    paid: 420,
    method: L("Insurance", "تأمين"),
    status: L("Paid", "مدفوعة"),
  },
];

export const payments = [
  {
    txn: "TXN-88214",
    date: "12 Jul 2026 · 10:12",
    patient: 0,
    type: L("Receipt", "سند قبض"),
    amount: 1200,
    method: L("Mada", "مدى"),
    ref: "INV-2026-0412",
    user: L("Reem (Reception)", "ريم (الاستقبال)"),
  },
  {
    txn: "TXN-88213",
    date: "11 Jul 2026 · 16:40",
    patient: 1,
    type: L("Receipt", "سند قبض"),
    amount: 3400,
    method: L("Bank transfer", "تحويل بنكي"),
    ref: "INV-2026-0411",
    user: L("Hani (Accounts)", "هاني (الحسابات)"),
  },
  {
    txn: "TXN-88212",
    date: "10 Jul 2026 · 09:05",
    patient: 2,
    type: L("Refund", "استرداد"),
    amount: -300,
    method: L("Credit card", "بطاقة ائتمانية"),
    ref: "INV-2026-0410",
    user: L("Hani (Accounts)", "هاني (الحسابات)"),
  },
  {
    txn: "TXN-88211",
    date: "09 Jul 2026 · 13:20",
    patient: 4,
    type: L("Expense voucher", "سند صرف"),
    amount: -850,
    method: L("Cash", "نقدي"),
    ref: "—",
    user: L("Hani (Accounts)", "هاني (الحسابات)"),
  },
];

export const treatmentPlans = [
  {
    patient: 0,
    specialty: 2,
    specialist: 0,
    start: "01 Mar 2026",
    end: "01 Sep 2026",
    progress: 68,
    sessions: "24 / 36",
    status: L("Active", "نشطة"),
    goals: [
      { goal: L("Produce /s/ in words", "نطق حرف السين في الكلمات"), progress: 80 },
      { goal: L("2-step instructions", "تنفيذ تعليمات من خطوتين"), progress: 62 },
      { goal: L("50 new vocabulary items", "٥٠ مفردة جديدة"), progress: 55 },
    ],
  },
  {
    patient: 1,
    specialty: 0,
    specialist: 1,
    start: "12 Feb 2026",
    end: "12 Aug 2026",
    progress: 54,
    sessions: "30 / 48",
    status: L("Active", "نشطة"),
    goals: [
      { goal: L("Independent sitting 5 min", "الجلوس المستقل ٥ دقائق"), progress: 70 },
      { goal: L("Assisted walking 10 m", "المشي بمساعدة ١٠ أمتار"), progress: 45 },
    ],
  },
  {
    patient: 2,
    specialty: 1,
    specialist: 2,
    start: "20 Jan 2026",
    end: "20 Jul 2026",
    progress: 88,
    sessions: "42 / 48",
    status: L("Active", "نشطة"),
    goals: [
      { goal: L("Tolerate textures", "تحمل الملمس"), progress: 92 },
      { goal: L("Fine motor grip", "قبضة الحركة الدقيقة"), progress: 84 },
    ],
  },
];

export const plans = [
  {
    name: L("Starter Journey", "باقة البداية"),
    desc: L("8 sessions per month", "٨ جلسات شهرياً"),
    price: "1,600",
    period: L("month", "شهر"),
    sessions: 8,
    subscribers: 42,
    status: L("Active", "نشطة"),
    features: [
      L("8 therapy sessions", "٨ جلسات علاجية"),
      L("Monthly progress report", "تقرير تقدم شهري"),
      L("Guardian portal access", "وصول ولي الأمر للبوابة"),
    ],
  },
  {
    name: L("Family Journey", "باقة العائلة"),
    desc: L("16 sessions + assessment", "١٦ جلسة + تقييم"),
    price: "2,950",
    period: L("month", "شهر"),
    sessions: 16,
    subscribers: 78,
    status: L("Active", "نشطة"),
    features: [
      L("16 therapy sessions", "١٦ جلسة علاجية"),
      L("Quarterly assessment", "تقييم ربع سنوي"),
      L("Home exercise program", "برنامج تمارين منزلية"),
      L("Priority scheduling", "أولوية في الجدولة"),
    ],
  },
  {
    name: L("Intensive Journey", "الباقة المكثفة"),
    desc: L("Yearly program", "برنامج سنوي"),
    price: "31,000",
    period: L("year", "سنة"),
    sessions: 240,
    subscribers: 15,
    status: L("Active", "نشطة"),
    features: [
      L("240 therapy sessions", "٢٤٠ جلسة علاجية"),
      L("Multi-specialty team", "فريق متعدد التخصصات"),
      L("Home visits included", "زيارات منزلية مشمولة"),
      L("Dedicated case manager", "منسق حالة مخصص"),
    ],
  },
];

export const services = [
  {
    name: L("PT individual session", "جلسة علاج طبيعي فردية"),
    specialty: 0,
    single: 250,
    pack10: 2300,
    pack20: 4400,
    home: 420,
    updated: "01 Jul 2026",
  },
  {
    name: L("OT sensory session", "جلسة علاج وظيفي حسي"),
    specialty: 1,
    single: 260,
    pack10: 2400,
    pack20: 4600,
    home: 440,
    updated: "01 Jul 2026",
  },
  {
    name: L("Speech session", "جلسة نطق"),
    specialty: 2,
    single: 240,
    pack10: 2200,
    pack20: 4200,
    home: 400,
    updated: "18 Jun 2026",
  },
  {
    name: L("Behavioral consultation", "استشارة سلوكية"),
    specialty: 3,
    single: 350,
    pack10: 3200,
    pack20: 6000,
    home: 520,
    updated: "18 Jun 2026",
  },
];

export const documents = [
  {
    name: L("MRI report — spine", "تقرير رنين — العمود الفقري"),
    type: L("Medical report", "تقرير طبي"),
    patient: 1,
    date: "10 Jul 2026",
    size: "2.4 MB",
    by: L("Dr. Omar Al-Sayed", "د. عمر السيد"),
  },
  {
    name: L("X-ray — left hip", "أشعة — الورك الأيسر"),
    type: L("X-ray", "أشعة"),
    patient: 1,
    date: "08 Jul 2026",
    size: "5.1 MB",
    by: L("Reem (Reception)", "ريم (الاستقبال)"),
  },
  {
    name: L("Lab result — vitamin D", "نتيجة مختبر — فيتامين د"),
    type: L("Lab result", "نتيجة مختبر"),
    patient: 0,
    date: "02 Jul 2026",
    size: "310 KB",
    by: L("Reem (Reception)", "ريم (الاستقبال)"),
  },
  {
    name: L("Service contract", "عقد الخدمة"),
    type: L("Contract", "عقد"),
    patient: 4,
    date: "28 Jun 2026",
    size: "820 KB",
    by: L("Admin", "مدير النظام"),
  },
];

export const notifications = [
  {
    title: L("Appointment reminder", "تذكير بالموعد"),
    body: L("Sara Al-Otaibi — tomorrow 08:30", "سارة العتيبي — غداً ٨:٣٠"),
    time: L("2h ago", "قبل ساعتين"),
    unread: true,
  },
  {
    title: L("Invoice overdue", "فاتورة متأخرة"),
    body: L("INV-2026-0409 · 640 SAR unpaid", "INV-2026-0409 · ٦٤٠ ريال غير مدفوعة"),
    time: L("5h ago", "قبل ٥ ساعات"),
    unread: true,
  },
  {
    title: L("Consent expiring today", "موافقة تنتهي اليوم"),
    body: L("Data sharing consent — Maha Al-Zahrani", "موافقة مشاركة البيانات — مها الزهراني"),
    time: L("Today", "اليوم"),
    unread: false,
  },
  {
    title: L("New incoming referral", "إحالة واردة جديدة"),
    body: L("King Fahad Hospital — urgent", "مستشفى الملك فهد — عاجل"),
    time: L("Yesterday", "أمس"),
    unread: false,
  },
];

/* Safe indexed accessors (project runs with noUncheckedIndexedAccess). */
export const spec = (i: number): Loc => SPECIALTIES[i] as Loc;
export const doc = (i: number): Loc => SPECIALISTS[i] as Loc;
export const pat = (i: number) => patients[i] as (typeof patients)[0];
export const plan0 = treatmentPlans[0] as (typeof treatmentPlans)[0];
export const inv0 = invoices[0] as (typeof invoices)[0];