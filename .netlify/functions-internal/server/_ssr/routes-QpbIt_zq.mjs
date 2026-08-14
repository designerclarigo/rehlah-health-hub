import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BrandSymbol, i as BrandPlate, n as BrandLockup, o as REHLAH_SYMBOL_URL, r as BrandLogo, s as cn } from "./router-CkwQ2AlS.mjs";
import { $ as Globe, A as Phone, At as ArrowUpDown, B as Lock, C as Send, Ct as CalendarCheck, D as Quote, Dt as BellRing, E as Receipt, Et as Bell, F as MessageCircle, G as KeyRound, H as LifeBuoy, I as Menu, J as House, K as Info, L as MapPin, M as PenLine, Mt as Activity, N as Paperclip, O as Printer, Ot as Award, P as MessageSquare, Q as GripVertical, R as Mail, S as Settings2, St as CalendarClock, T as Save, Tt as Brain, U as LayoutDashboard, V as ListChecks, W as Layers, X as HeartHandshake, Y as History, Z as Hash, _ as Signature, _t as Check, a as Upload, at as Download, b as Share2, bt as CalendarPlus, c as TrendingUp, ct as Copy, d as ToggleLeft, dt as CirclePlay, et as Gauge, f as Tags, ft as CircleDollarSign, g as Smartphone, gt as ChevronDown, h as Sparkles, ht as ChevronLeft, i as User, it as Eye, j as Pencil, jt as ArrowRight, k as Plus, kt as ArrowUpRight, l as TrendingDown, lt as Clock, m as SquareUserRound, mt as ChevronRight, n as Wallet, nt as FileText, o as Type, ot as Database, p as Stethoscope, pt as CircleCheck, q as Inbox, r as Users, rt as FilePenLine, s as TriangleAlert, st as CreditCard, t as X, tt as Funnel, u as Trash2, ut as ClipboardList, v as Shield, vt as ChartLine, w as Search, wt as Building2, x as Settings, xt as CalendarDays, y as ShieldCheck, yt as Calendar, z as LogOut } from "../_libs/lucide-react.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, f as Legend, i as YAxis, l as Pie, n as BarChart, o as Bar, p as ResponsiveContainer, r as LineChart, s as Line, t as PieChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-QpbIt_zq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var L = (en, ar) => ({
	en,
	ar
});
var LangContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("en");
	const value = (0, import_react.useMemo)(() => ({
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		setLang,
		t: (v) => typeof v === "string" ? v : v[lang]
	}), [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(LangContext);
	if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
	return ctx;
}
function Card({ className, children, tint, interactive, ...rest }) {
	const tints = {
		green: "bg-tint-green",
		blue: "bg-tint-blue",
		yellow: "bg-tint-yellow",
		purple: "bg-tint-purple",
		none: "bg-surface"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...rest,
		className: cn("card-surface p-4 sm:p-5", tints[tint ?? "none"], interactive && "rise cursor-pointer", className),
		children
	});
}
function SectionTitle({ title, subtitle, action }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "truncate text-lg font-bold sm:text-xl",
				children: t(title)
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: t(subtitle)
			})]
		}), action]
	});
}
function Button({ className, variant = "primary", size = "md", ...rest }) {
	const variants = {
		primary: "bg-primary text-primary-foreground hover:brightness-105 shadow-[var(--shadow-soft)]",
		secondary: "bg-tint-green text-[var(--primary-deep)] hover:bg-[color-mix(in_oklab,var(--primary)_14%,white)]",
		ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
		outline: "border border-border bg-surface text-foreground hover:bg-muted",
		accent: "bg-accent text-accent-foreground hover:brightness-105",
		wellness: "bg-wellness text-wellness-foreground hover:brightness-110",
		danger: "bg-destructive text-destructive-foreground hover:brightness-110"
	};
	const sizes = {
		sm: "h-9 px-3 text-[13px] rounded-xl",
		md: "h-11 px-4 text-sm rounded-xl",
		lg: "h-12 px-6 text-[15px] rounded-2xl",
		icon: "h-11 w-11 rounded-xl"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...rest,
		className: cn("inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className)
	});
}
function Badge({ children, tone = "neutral", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap", {
			primary: "bg-[color-mix(in_oklab,var(--primary)_16%,white)] text-[var(--primary-deep)]",
			accent: "bg-tint-yellow text-[oklch(0.5_0.09_92)]",
			wellness: "bg-tint-purple text-wellness",
			success: "bg-[color-mix(in_oklab,var(--success)_14%,white)] text-success",
			warning: "bg-[color-mix(in_oklab,var(--warning)_18%,white)] text-[oklch(0.52_0.11_81)]",
			danger: "bg-[color-mix(in_oklab,var(--destructive)_12%,white)] text-destructive",
			info: "bg-tint-blue text-info",
			neutral: "bg-muted text-muted-foreground"
		}[tone], className),
		children
	});
}
function Field({ label, children, hint, required }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1 text-[13px] leading-none font-semibold text-foreground",
				children: [t(label), required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					"aria-hidden": true,
					children: "*"
				})]
			}),
			children,
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[12px] leading-snug text-muted-foreground",
				children: t(hint)
			})
		]
	});
}
function Input({ className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...rest,
		className: cn("h-11 px-3.5 text-sm", "w-full rounded-xl border border-border bg-surface text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow,background-color] duration-200 outline-none placeholder:text-muted-foreground/80 hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_16%,transparent)]", className)
	});
}
function Select({ className, options, ...rest }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex w-full min-w-0 items-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			...rest,
			className: cn("h-11 appearance-none truncate ps-3.5 pe-10 text-sm", "w-full rounded-xl border border-border bg-surface text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow,background-color] duration-200 outline-none hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_16%,transparent)]"),
			children: options.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t(o) }, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "pointer-events-none absolute end-3 size-4 text-muted-foreground",
			"aria-hidden": true
		})]
	});
}
function Textarea({ className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...rest,
		rows: rest.rows ?? 3,
		className: cn("px-3.5 py-2.5 text-sm leading-relaxed", "w-full rounded-xl border border-border bg-surface text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow,background-color] duration-200 outline-none placeholder:text-muted-foreground/80 hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] disabled:cursor-not-allowed disabled:bg-muted/40 disabled:text-muted-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_16%,transparent)]", className)
	});
}
function SearchBar({ placeholder, className, ...rest }) {
	const { t } = useI18n();
	const id = (0, import_react.useId)();
	const ph = t(placeholder ?? {
		en: "Search",
		ar: "بحث"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative min-w-0 flex-1", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			className: "pointer-events-none absolute top-1/2 start-3.5 size-4 -translate-y-1/2 text-muted-foreground",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			...rest,
			type: "search",
			"aria-label": ph,
			placeholder: ph,
			className: "h-11 w-full rounded-xl border border-border bg-surface ps-10 pe-3.5 text-sm shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground/80 hover:border-[color-mix(in_oklab,var(--primary)_38%,var(--border))] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
		})]
	});
}
function DataTable({ columns, rows, selectable, caption }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-2xl border border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[720px] text-sm",
			children: [
				caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					children: t(caption)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border bg-tint-blue/70",
					children: [selectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "w-12 px-4 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							"aria-label": t({
								en: "Select all rows",
								ar: "تحديد كل الصفوف"
							}),
							className: "size-4 accent-[var(--primary)]"
						})
					}), columns.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-4 py-3 text-start text-xs font-semibold tracking-wide text-muted-foreground uppercase",
						children: t(c)
					}, i))]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border/70 transition-colors last:border-0 hover:bg-tint-green/70",
					children: [selectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							"aria-label": t({
								en: "Select row",
								ar: "تحديد الصف"
							}),
							className: "size-4 accent-[var(--primary)]"
						})
					}), r.map((cell, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 align-middle whitespace-nowrap",
						children: cell
					}, j))]
				}, i)) })
			]
		})
	});
}
function Pagination({ total }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "min-w-0 truncate text-xs text-muted-foreground",
			children: [
				t({
					en: "Showing 1–10 of",
					ar: "عرض ١–١٠ من"
				}),
				" ",
				total
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "per-page",
					children: t({
						en: "Items per page",
						ar: "عناصر لكل صفحة"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: "per-page",
					className: "h-9 rounded-lg border border-border bg-surface px-2 text-xs",
					defaultValue: "10",
					children: [
						"10",
						"20",
						"50",
						"100"
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: n }, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					"aria-label": t({
						en: "Previous page",
						ar: "الصفحة السابقة"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-4 rtl:rotate-180",
						"aria-hidden": true
					})
				}),
				[
					1,
					2,
					3
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: p === 1 ? "primary" : "outline",
					children: p
				}, p)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					"aria-label": t({
						en: "Next page",
						ar: "الصفحة التالية"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "size-4 rtl:rotate-180",
						"aria-hidden": true
					})
				})
			]
		})]
	});
}
function EmptyState({ icon, title, description, action }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-tint-blue/60 px-6 py-14 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-14 place-items-center rounded-2xl bg-surface text-primary shadow-[var(--shadow-card)]",
				children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, {
					className: "size-5",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-base font-semibold",
				children: t(title)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-sm text-sm text-muted-foreground",
				children: t(description)
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: action
			})
		]
	});
}
function Skeleton({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("skeleton h-4 w-full", className),
		"aria-hidden": true
	});
}
function ProgressBar$1({ value, tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 w-full overflow-hidden rounded-full bg-muted",
		role: "progressbar",
		"aria-valuenow": value,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-[width] duration-700", {
				primary: "bg-primary",
				accent: "bg-accent",
				wellness: "bg-wellness",
				success: "bg-success",
				danger: "bg-destructive"
			}[tone] ?? "bg-primary"),
			style: { width: `${value}%` }
		})
	});
}
function Tabs({ tabs, value, onChange, label }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": label ?? "Tabs",
		className: "flex gap-1 overflow-x-auto rounded-2xl border border-border bg-surface p-1.5",
		children: tabs.map((tab) => {
			const active = tab.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "tab",
				"aria-selected": active,
				onClick: () => onChange(tab.id),
				className: cn("relative flex h-10 shrink-0 items-center gap-2 rounded-xl px-4 text-[13px] font-medium transition-all duration-200", active ? "bg-tint-green text-[var(--primary-deep)] shadow-[var(--shadow-soft)]" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
				children: [t(tab.label), typeof tab.count === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("rounded-full px-1.5 py-0.5 text-[11px]", active ? "bg-white/80" : "bg-muted"),
					children: tab.count
				})]
			}, tab.id);
		})
	});
}
function StatCard({ label, value, change, icon, tint = "none", tone = "primary" }) {
	const { t } = useI18n();
	const up = change?.startsWith("+");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		tint,
		className: "rise flex min-h-[124px] flex-col justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] leading-snug font-medium text-balance text-muted-foreground",
						children: t(label)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xl font-bold tracking-tight text-balance sm:text-[22px]",
						children: value
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-primary shadow-[var(--shadow-soft)]",
					children: icon
				})]
			}),
			change && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex flex-wrap items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: up ? "success" : "danger",
					children: [up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
						className: "size-3",
						"aria-hidden": true
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, {
						className: "size-3",
						"aria-hidden": true
					}), change]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: t({
						en: "vs last period",
						ar: "مقارنة بالفترة السابقة"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: tone
			})
		]
	});
}
function Modal({ open, onClose, title, subtitle, children, footer, size = "md" }) {
	const { t } = useI18n();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	if (!mounted || !open) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-100 flex items-end justify-center p-0 sm:items-center sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-[oklch(0.32_0.01_229_/_0.35)] backdrop-blur-[2px]",
			onClick: onClose,
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": t(title),
			className: cn("animate-in-soft relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-border bg-surface shadow-[var(--shadow-lifted)] sm:rounded-3xl", {
				sm: "max-w-md",
				md: "max-w-2xl",
				lg: "max-w-4xl"
			}[size]),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-lg font-bold",
							children: t(title)
						}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-muted-foreground",
							children: t(subtitle)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": t({
							en: "Close dialog",
							ar: "إغلاق النافذة"
						}),
						className: "tap-target grid place-items-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": true
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-6 py-5",
					children
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-end gap-2 border-t border-border bg-tint-blue/60 px-6 py-4",
					children: footer
				})
			]
		})]
	}), document.body);
}
var CHART_COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)"
];
var axis = {
	stroke: "var(--muted-foreground)",
	fontSize: 12
};
function ChartCard({ title, subtitle, children, action, height = 260, summary }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "truncate text-[15px] font-semibold",
					children: t(title)
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: t(subtitle)
				})]
			}), action]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			style: { height },
			role: "img",
			"aria-label": summary,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sr-only",
			children: summary
		})
	] });
}
function Line1({ data, x, y }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
		data,
		margin: {
			top: 8,
			right: 8,
			left: -18,
			bottom: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
				stroke: "var(--border)",
				vertical: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: x,
				tickLine: false,
				axisLine: false,
				tick: axis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tickLine: false,
				axisLine: false,
				tick: axis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
				borderRadius: 16,
				border: "1px solid var(--border)",
				boxShadow: "var(--shadow-card)"
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: y,
				stroke: "var(--chart-1)",
				strokeWidth: 2.5,
				dot: false,
				activeDot: { r: 5 },
				animationDuration: 900
			})
		]
	});
}
function Bars({ data, x, keys }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
		data,
		margin: {
			top: 8,
			right: 8,
			left: -18,
			bottom: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
				stroke: "var(--border)",
				vertical: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: x,
				tickLine: false,
				axisLine: false,
				tick: axis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tickLine: false,
				axisLine: false,
				tick: axis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				cursor: { fill: "var(--tint-green)" },
				contentStyle: {
					borderRadius: 16,
					border: "1px solid var(--border)"
				}
			}),
			keys.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
				iconType: "circle",
				wrapperStyle: { fontSize: 12 }
			}),
			keys.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: k,
				fill: CHART_COLORS[i % CHART_COLORS.length] ?? "var(--chart-1)",
				radius: [
					8,
					8,
					0,
					0
				],
				animationDuration: 900
			}, k))
		]
	});
}
function Donut({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
			data,
			dataKey: "value",
			nameKey: "name",
			innerRadius: "58%",
			outerRadius: "86%",
			paddingAngle: 3,
			animationDuration: 900,
			children: data.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				fill: CHART_COLORS[i % CHART_COLORS.length] ?? "var(--chart-1)",
				stroke: "var(--surface)"
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
			iconType: "circle",
			wrapperStyle: { fontSize: 12 }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
			borderRadius: 16,
			border: "1px solid var(--border)"
		} })
	] });
}
function Toolbar({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface p-3",
		children
	});
}
function PageHeader({ title, description, actions }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold tracking-tight sm:text-[28px]",
				children: t(title)
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: t(description)
			})]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: actions
		})]
	});
}
function KeyValue({ items }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs font-medium text-muted-foreground",
				children: t(it.k)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-0.5 text-sm font-medium break-words",
				children: it.v
			})]
		}, i))
	});
}
var SPECIALTIES = [
	L("Physical Therapy", "العلاج الطبيعي"),
	L("Occupational Therapy", "العلاج الوظيفي"),
	L("Speech Therapy", "علاج النطق"),
	L("Behavioral Therapy", "العلاج السلوكي"),
	L("Psychology", "علم النفس")
];
var SPECIALISTS = [
	L("Dr. Layla Al-Harbi", "د. ليلى الحربي"),
	L("Dr. Omar Al-Sayed", "د. عمر السيد"),
	L("Dr. Noura Al-Qahtani", "د. نورة القحطاني"),
	L("Dr. Faisal Al-Ghamdi", "د. فيصل الغامدي")
];
var ROLES = [
	{
		id: "admin",
		label: L("Admin", "مدير النظام")
	},
	{
		id: "specialist",
		label: L("Specialist", "أخصائي")
	},
	{
		id: "receptionist",
		label: L("Receptionist", "موظف استقبال")
	},
	{
		id: "accountant",
		label: L("Accountant", "محاسب")
	},
	{
		id: "assistant",
		label: L("Assistant", "مساعد")
	},
	{
		id: "patient",
		label: L("Patient", "مريض")
	}
];
var patients = [
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
		due: "0 SAR"
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
		due: "450 SAR"
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
		due: "300 SAR"
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
		due: "0 SAR"
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
		due: "120 SAR"
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
		due: "640 SAR"
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
		due: "0 SAR"
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
		due: "200 SAR"
	}
];
var appointments = [
	{
		time: "08:30",
		patient: 0,
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		status: L("Confirmed", "مؤكد"),
		notes: L("Bring home exercise log", "إحضار سجل التمارين المنزلية")
	},
	{
		time: "09:15",
		patient: 1,
		specialty: 0,
		specialist: 1,
		type: L("Treatment program", "برنامج علاجي"),
		status: L("Present", "حضر"),
		notes: L("Gait training", "تدريب المشي")
	},
	{
		time: "10:00",
		patient: 2,
		specialty: 1,
		specialist: 2,
		type: L("Group session", "جلسة جماعية"),
		status: L("Pending", "قيد الانتظار"),
		notes: L("Sensory room 2", "غرفة الحس ٢")
	},
	{
		time: "11:00",
		patient: 4,
		specialty: 0,
		specialist: 1,
		type: L("Consultation", "استشارة"),
		status: L("Rescheduled", "أعيد جدولته"),
		notes: L("Guardian requested", "بطلب ولي الأمر")
	},
	{
		time: "12:30",
		patient: 5,
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		status: L("Excused absence", "غياب بعذر"),
		notes: L("Travel", "سفر")
	}
];
var visits30 = Array.from({ length: 30 }, (_, i) => ({
	day: `${i + 1}`,
	visits: 24 + Math.round(14 * Math.sin(i / 3.2) + i % 5 * 2)
}));
var specialtyDistribution = [
	{
		name: "Physical",
		value: 34
	},
	{
		name: "Occupational",
		value: 26
	},
	{
		name: "Speech",
		value: 22
	},
	{
		name: "Behavioral",
		value: 11
	},
	{
		name: "Psychology",
		value: 7
	}
];
var monthlyComparison = [
	{
		m: "Jan",
		current: 320,
		previous: 280
	},
	{
		m: "Feb",
		current: 345,
		previous: 300
	},
	{
		m: "Mar",
		current: 390,
		previous: 352
	},
	{
		m: "Apr",
		current: 368,
		previous: 341
	},
	{
		m: "May",
		current: 412,
		previous: 372
	},
	{
		m: "Jun",
		current: 455,
		previous: 398
	},
	{
		m: "Jul",
		current: 478,
		previous: 421
	}
];
var attendanceStatus = [
	{
		name: "Present",
		value: 72
	},
	{
		name: "Excused",
		value: 12
	},
	{
		name: "Unexcused",
		value: 8
	},
	{
		name: "Cancelled",
		value: 8
	}
];
var revenueMonthly = [
	{
		m: "Jan",
		revenue: 184
	},
	{
		m: "Feb",
		revenue: 196
	},
	{
		m: "Mar",
		revenue: 232
	},
	{
		m: "Apr",
		revenue: 221
	},
	{
		m: "May",
		revenue: 268
	},
	{
		m: "Jun",
		revenue: 292
	},
	{
		m: "Jul",
		revenue: 311
	}
];
var assessments = [
	{
		patient: 0,
		specialty: 2,
		date: "12 Jul 2026",
		specialist: 0,
		score: 82,
		duration: "35 min",
		status: L("Completed", "مكتمل")
	},
	{
		patient: 1,
		specialty: 0,
		date: "10 Jul 2026",
		specialist: 1,
		score: 64,
		duration: "40 min",
		status: L("Under review", "قيد المراجعة")
	},
	{
		patient: 2,
		specialty: 1,
		date: "08 Jul 2026",
		specialist: 2,
		score: 48,
		duration: "30 min",
		status: L("Needs follow-up", "يحتاج متابعة")
	},
	{
		patient: 7,
		specialty: 1,
		date: "05 Jul 2026",
		specialist: 2,
		score: 76,
		duration: "45 min",
		status: L("Completed", "مكتمل")
	}
];
var invoices = [
	{
		number: "INV-2026-0412",
		date: "12 Jul 2026",
		patient: 0,
		total: 1200,
		paid: 1200,
		method: L("Mada", "مدى"),
		status: L("Paid", "مدفوعة")
	},
	{
		number: "INV-2026-0411",
		date: "10 Jul 2026",
		patient: 1,
		total: 3850,
		paid: 3400,
		method: L("Bank transfer", "تحويل بنكي"),
		status: L("Partial", "جزئي")
	},
	{
		number: "INV-2026-0410",
		date: "08 Jul 2026",
		patient: 2,
		total: 2450,
		paid: 2150,
		method: L("Credit card", "بطاقة ائتمانية"),
		status: L("Partial", "جزئي")
	},
	{
		number: "INV-2026-0409",
		date: "06 Jul 2026",
		patient: 5,
		total: 640,
		paid: 0,
		method: L("Cash", "نقدي"),
		status: L("Unpaid", "غير مدفوعة")
	},
	{
		number: "INV-2026-0408",
		date: "02 Jul 2026",
		patient: 6,
		total: 420,
		paid: 420,
		method: L("Insurance", "تأمين"),
		status: L("Paid", "مدفوعة")
	}
];
var payments = [
	{
		txn: "TXN-88214",
		date: "12 Jul 2026 · 10:12",
		patient: 0,
		type: L("Receipt", "سند قبض"),
		amount: 1200,
		method: L("Mada", "مدى"),
		ref: "INV-2026-0412",
		user: L("Reem (Reception)", "ريم (الاستقبال)")
	},
	{
		txn: "TXN-88213",
		date: "11 Jul 2026 · 16:40",
		patient: 1,
		type: L("Receipt", "سند قبض"),
		amount: 3400,
		method: L("Bank transfer", "تحويل بنكي"),
		ref: "INV-2026-0411",
		user: L("Hani (Accounts)", "هاني (الحسابات)")
	},
	{
		txn: "TXN-88212",
		date: "10 Jul 2026 · 09:05",
		patient: 2,
		type: L("Refund", "استرداد"),
		amount: -300,
		method: L("Credit card", "بطاقة ائتمانية"),
		ref: "INV-2026-0410",
		user: L("Hani (Accounts)", "هاني (الحسابات)")
	},
	{
		txn: "TXN-88211",
		date: "09 Jul 2026 · 13:20",
		patient: 4,
		type: L("Expense voucher", "سند صرف"),
		amount: -850,
		method: L("Cash", "نقدي"),
		ref: "—",
		user: L("Hani (Accounts)", "هاني (الحسابات)")
	}
];
var treatmentPlans = [
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
			{
				goal: L("Produce /s/ in words", "نطق حرف السين في الكلمات"),
				progress: 80
			},
			{
				goal: L("2-step instructions", "تنفيذ تعليمات من خطوتين"),
				progress: 62
			},
			{
				goal: L("50 new vocabulary items", "٥٠ مفردة جديدة"),
				progress: 55
			}
		]
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
		goals: [{
			goal: L("Independent sitting 5 min", "الجلوس المستقل ٥ دقائق"),
			progress: 70
		}, {
			goal: L("Assisted walking 10 m", "المشي بمساعدة ١٠ أمتار"),
			progress: 45
		}]
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
		goals: [{
			goal: L("Tolerate textures", "تحمل الملمس"),
			progress: 92
		}, {
			goal: L("Fine motor grip", "قبضة الحركة الدقيقة"),
			progress: 84
		}]
	}
];
var plans = [
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
			L("Guardian portal access", "وصول ولي الأمر للبوابة")
		]
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
			L("Priority scheduling", "أولوية في الجدولة")
		]
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
			L("Dedicated case manager", "منسق حالة مخصص")
		]
	}
];
var services = [
	{
		name: L("PT individual session", "جلسة علاج طبيعي فردية"),
		specialty: 0,
		single: 250,
		pack10: 2300,
		pack20: 4400,
		home: 420,
		updated: "01 Jul 2026"
	},
	{
		name: L("OT sensory session", "جلسة علاج وظيفي حسي"),
		specialty: 1,
		single: 260,
		pack10: 2400,
		pack20: 4600,
		home: 440,
		updated: "01 Jul 2026"
	},
	{
		name: L("Speech session", "جلسة نطق"),
		specialty: 2,
		single: 240,
		pack10: 2200,
		pack20: 4200,
		home: 400,
		updated: "18 Jun 2026"
	},
	{
		name: L("Behavioral consultation", "استشارة سلوكية"),
		specialty: 3,
		single: 350,
		pack10: 3200,
		pack20: 6e3,
		home: 520,
		updated: "18 Jun 2026"
	}
];
var documents = [
	{
		name: L("MRI report — spine", "تقرير رنين — العمود الفقري"),
		type: L("Medical report", "تقرير طبي"),
		patient: 1,
		date: "10 Jul 2026",
		size: "2.4 MB",
		by: L("Dr. Omar Al-Sayed", "د. عمر السيد")
	},
	{
		name: L("X-ray — left hip", "أشعة — الورك الأيسر"),
		type: L("X-ray", "أشعة"),
		patient: 1,
		date: "08 Jul 2026",
		size: "5.1 MB",
		by: L("Reem (Reception)", "ريم (الاستقبال)")
	},
	{
		name: L("Lab result — vitamin D", "نتيجة مختبر — فيتامين د"),
		type: L("Lab result", "نتيجة مختبر"),
		patient: 0,
		date: "02 Jul 2026",
		size: "310 KB",
		by: L("Reem (Reception)", "ريم (الاستقبال)")
	},
	{
		name: L("Service contract", "عقد الخدمة"),
		type: L("Contract", "عقد"),
		patient: 4,
		date: "28 Jun 2026",
		size: "820 KB",
		by: L("Admin", "مدير النظام")
	}
];
var notifications = [
	{
		title: L("Appointment reminder", "تذكير بالموعد"),
		body: L("Sara Al-Otaibi — tomorrow 08:30", "سارة العتيبي — غداً ٨:٣٠"),
		time: L("2h ago", "قبل ساعتين"),
		unread: true
	},
	{
		title: L("Invoice overdue", "فاتورة متأخرة"),
		body: L("INV-2026-0409 · 640 SAR unpaid", "INV-2026-0409 · ٦٤٠ ريال غير مدفوعة"),
		time: L("5h ago", "قبل ٥ ساعات"),
		unread: true
	},
	{
		title: L("Consent expiring today", "موافقة تنتهي اليوم"),
		body: L("Data sharing consent — Maha Al-Zahrani", "موافقة مشاركة البيانات — مها الزهراني"),
		time: L("Today", "اليوم"),
		unread: false
	},
	{
		title: L("New incoming referral", "إحالة واردة جديدة"),
		body: L("King Fahad Hospital — urgent", "مستشفى الملك فهد — عاجل"),
		time: L("Yesterday", "أمس"),
		unread: false
	}
];
var spec = (i) => SPECIALTIES[i];
var doc = (i) => SPECIALISTS[i];
var pat = (i) => patients[i];
var plan0 = treatmentPlans[0];
invoices[0];
/** Local collection with real create / update / delete semantics. */
function useCollection(initial) {
	const [items, setItems] = (0, import_react.useState)(initial);
	return {
		items,
		setItems,
		add: (0, import_react.useCallback)((row) => setItems((p) => [row, ...p]), []),
		update: (0, import_react.useCallback)((index, patch) => setItems((p) => p.map((r, i) => i === index ? {
			...r,
			...patch
		} : r)), []),
		remove: (0, import_react.useCallback)((index) => setItems((p) => p.filter((_, i) => i !== index)), []),
		removeMany: (0, import_react.useCallback)((indexes) => setItems((p) => p.filter((_, i) => !indexes.includes(i))), [])
	};
}
/** Case-insensitive haystack match used by module toolbars. */
function matches(query, ...fields) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	return fields.some((f) => String(f ?? "").toLowerCase().includes(q));
}
/** Filter helper: an "all" sentinel value passes everything. */
function passes(selected, value, allValue = "all") {
	return selected === allValue || selected === "" || selected === value;
}
function useFilters(initial) {
	const [filters, setFilters] = (0, import_react.useState)(initial);
	return {
		filters,
		set: (0, import_react.useCallback)((key, value) => setFilters((p) => ({
			...p,
			[key]: value
		})), []),
		reset: (0, import_react.useCallback)(() => setFilters(initial), [initial]),
		active: (0, import_react.useMemo)(() => Object.keys(filters).filter((k) => filters[k] !== initial[k]).length, [filters, initial])
	};
}
/** Download any table as CSV (used where DataGrid isn't in play). */
function downloadCsv(name, headers, rows) {
	const esc = (v) => `"${String(v).replace(/"/g, "\"\"")}"`;
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
function printView() {
	if (typeof window !== "undefined") window.print();
}
var Ctx = (0, import_react.createContext)({ push: () => {} });
function useToast() {
	return (0, import_react.useContext)(Ctx);
}
function ToastProvider({ children }) {
	const { t } = useI18n();
	const [items, setItems] = (0, import_react.useState)([]);
	const push = (0, import_react.useCallback)((kind, message) => {
		const id = Date.now() + Math.random();
		setItems((s) => [...s, {
			id,
			kind,
			message
		}]);
		window.setTimeout(() => setItems((s) => s.filter((i) => i.id !== id)), 3800);
	}, []);
	const value = (0, import_react.useMemo)(() => ({ push }), [push]);
	const icons = {
		success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-4",
			"aria-hidden": true
		}),
		error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			className: "size-4",
			"aria-hidden": true
		}),
		info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			className: "size-4",
			"aria-hidden": true
		})
	};
	const tones = {
		success: "text-success",
		error: "text-destructive",
		info: "text-info"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ctx.Provider, {
		value,
		children: [children, typeof document !== "undefined" && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "region",
			"aria-live": "polite",
			"aria-label": t({
				en: "Notifications",
				ar: "الإشعارات"
			}),
			className: "pointer-events-none fixed bottom-5 z-[200] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2 end-4",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-pop pointer-events-auto grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-lifted)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid size-8 place-items-center rounded-xl bg-muted ${tones[i.kind]}`,
						children: icons[i.kind]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 text-sm font-medium",
						children: t(i.message)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setItems((s) => s.filter((x) => x.id !== i.id)),
						"aria-label": t({
							en: "Dismiss",
							ar: "إغلاق"
						}),
						className: "grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							"aria-hidden": true
						})
					})
				]
			}, i.id))
		}), document.body)]
	});
}
function DataGrid({ caption, rows, columns, filters = [], search, searchPlaceholder, bulkActions = [], onBulkAction, rowKey, loading, emptyTitle, emptyDescription, emptyAction, toolbarExtra, pageSize: initialPageSize = 10, exportName = "rehlah-export" }) {
	const { t } = useI18n();
	const toast = useToast();
	const [q, setQ] = (0, import_react.useState)("");
	const [active, setActive] = (0, import_react.useState)({});
	const [sort, setSort] = (0, import_react.useState)(null);
	const [page, setPage] = (0, import_react.useState)(1);
	const [pageSize, setPageSize] = (0, import_react.useState)(initialPageSize);
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		let out = rows;
		const term = q.trim().toLowerCase();
		if (term && search) out = out.filter((r) => search(r).toLowerCase().includes(term));
		for (const f of filters) {
			const v = active[f.id];
			if (v && v !== "__all") out = out.filter((r) => f.match(r, v));
		}
		if (sort) {
			const col = columns.find((c) => c.id === sort.id);
			if (col?.sort) out = [...out].sort((a, b) => {
				const av = col.sort(a);
				const bv = col.sort(b);
				const c = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
				return sort.dir === "asc" ? c : -c;
			});
		}
		return out;
	}, [
		rows,
		q,
		active,
		filters,
		sort,
		columns,
		search
	]);
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const current = Math.min(page, totalPages);
	const pageRows = filtered.slice((current - 1) * pageSize, current * pageSize);
	const allOnPageSelected = pageRows.length > 0 && pageRows.every((r, i) => selected.has(rowKey(r, i)));
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
		const body = filtered.map((r, i) => columns.map((c) => {
			return `"${(c.csv ? c.csv(r) : c.sort ? String(c.sort(r)) : "").replace(/"/g, "\"\"")}"`;
		}).join(",")).join("\n");
		const blob = new Blob([`\uFEFF${head}\n${body}`], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${exportName}.csv`;
		a.click();
		URL.revokeObjectURL(url);
		toast.push("success", L("Export ready — CSV downloaded", "تم التصدير — تم تنزيل الملف"));
	};
	const activeChips = filters.map((f) => ({
		f,
		v: active[f.id]
	})).filter((x) => x.v && x.v !== "__all");
	const hideCls = {
		sm: "hidden sm:table-cell",
		md: "hidden md:table-cell",
		lg: "hidden lg:table-cell"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 border-b border-border p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1 basis-56",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "pointer-events-none absolute top-1/2 start-3.5 size-4 -translate-y-1/2 text-muted-foreground",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							value: q,
							onChange: (e) => {
								setQ(e.target.value);
								setPage(1);
							},
							"aria-label": t(searchPlaceholder ?? L("Search", "بحث")),
							placeholder: t(searchPlaceholder ?? L("Search", "بحث")),
							className: "h-11 w-full rounded-xl border border-border bg-surface ps-10 pe-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
						})]
					}),
					filters.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						"aria-expanded": showFilters,
						onClick: () => setShowFilters((s) => !s),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
								className: "size-4",
								"aria-hidden": true
							}),
							t(L("Filters", "التصفية")),
							activeChips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "primary",
								children: activeChips.length
							})
						]
					}),
					toolbarExtra,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: exportCsv,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), t(L("Export CSV", "تصدير CSV"))]
					})
				]
			}),
			showFilters && filters.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 border-b border-border bg-tint-blue/50 px-3 py-3 sm:grid-cols-2 xl:grid-cols-4",
				children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11.5px] font-semibold text-muted-foreground",
						children: t(f.label)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex w-full items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: active[f.id] ?? "__all",
							onChange: (e) => {
								setActive((s) => ({
									...s,
									[f.id]: e.target.value
								}));
								setPage(1);
							},
							className: "h-11 w-full appearance-none truncate rounded-xl border border-border bg-surface ps-3.5 pe-10 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "__all",
								children: t(L("All", "الكل"))
							}), f.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: o.value,
								children: t(o.label)
							}, o.value))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "pointer-events-none absolute end-3 size-4 text-muted-foreground",
							"aria-hidden": true
						})]
					})]
				}, f.id))
			}),
			activeChips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 border-b border-border px-4 py-3",
				children: [activeChips.map(({ f, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-tint-green px-3 py-1.5 text-xs font-medium text-[var(--primary-deep)]",
					children: [
						t(f.label),
						": ",
						t(f.options.find((o) => o.value === v)?.label ?? v),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive((s) => ({
								...s,
								[f.id]: "__all"
							})),
							"aria-label": `${t(L("Remove filter", "إزالة عامل التصفية"))}: ${t(f.label)}`,
							className: "rounded-full p-0.5 hover:bg-white/70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-3",
								"aria-hidden": true
							})
						})
					]
				}, f.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive({}),
					className: "text-xs font-semibold text-primary underline-offset-2 hover:underline",
					children: t(L("Clear all", "مسح الكل"))
				})]
			}),
			bulkActions.length > 0 && selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 border-b border-border bg-tint-green/70 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-[var(--primary-deep)]",
					children: [
						selected.size,
						" ",
						t(L("selected", "محدد"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 ms-auto",
					children: [bulkActions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: a.tone === "danger" ? "danger" : a.tone === "primary" ? "primary" : "outline",
						onClick: () => {
							onBulkAction?.(a.id, selectedRows);
							setSelected(/* @__PURE__ */ new Set());
						},
						children: [a.icon, t(a.label)]
					}, a.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => setSelected(/* @__PURE__ */ new Set()),
						children: t(L("Clear", "إلغاء التحديد"))
					})]
				})]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3 p-5",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 rounded-xl" }, i))
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, {
						className: "size-6",
						"aria-hidden": true
					}),
					title: emptyTitle ?? L("Nothing to show", "لا توجد بيانات"),
					description: emptyDescription ?? L("Adjust your search or filters to see results.", "عدّل البحث أو التصفية لعرض النتائج."),
					action: emptyAction
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[68vh] overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[680px] text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "sr-only",
							children: t(caption)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "sticky top-0 z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border bg-[color-mix(in_oklab,var(--tint-blue)_88%,white)] backdrop-blur",
								children: [bulkActions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "w-12 px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: allOnPageSelected,
										onChange: toggleAll,
										"aria-label": t(L("Select all rows on page", "تحديد كل صفوف الصفحة")),
										className: "size-[18px] rounded-[6px] accent-[var(--primary)]"
									})
								}), columns.map((c) => {
									const sorted = sort?.id === c.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										"aria-sort": sorted ? sort.dir === "asc" ? "ascending" : "descending" : void 0,
										className: cn("px-4 py-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase", c.align === "end" ? "text-end" : "text-start", c.hideBelow && hideCls[c.hideBelow]),
										children: c.sort ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setSort((s) => s?.id === c.id ? {
												id: c.id,
												dir: s.dir === "asc" ? "desc" : "asc"
											} : {
												id: c.id,
												dir: "asc"
											}),
											className: cn("inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 uppercase transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none", sorted && "text-foreground"),
											children: [t(c.header), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
												className: "size-3.5",
												"aria-hidden": true
											})]
										}) : t(c.header)
									}, c.id);
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: pageRows.map((r, i) => {
							const key = rowKey(r, i);
							const isSel = selected.has(key);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: cn("border-b border-border/70 transition-colors last:border-0 hover:bg-tint-green/60", isSel && "bg-tint-green/70"),
								children: [bulkActions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: isSel,
										onChange: () => {
											const next = new Set(selected);
											if (isSel) next.delete(key);
											else next.add(key);
											setSelected(next);
										},
										"aria-label": `${t(L("Select row", "تحديد الصف"))} ${key}`,
										className: "size-[18px] rounded-[6px] accent-[var(--primary)]"
									})
								}), columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: cn("px-4 py-3 align-middle whitespace-nowrap", c.align === "end" && "text-end", c.hideBelow && hideCls[c.hideBelow]),
									children: c.cell(r, i)
								}, c.id))]
							}, key);
						}) })
					]
				})
			}),
			!loading && filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						t(L("Showing", "عرض")),
						" ",
						(current - 1) * pageSize + 1,
						"–",
						Math.min(current * pageSize, filtered.length),
						" ",
						t(L("of", "من")),
						" ",
						filtered.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: `pp-${exportName}`,
							children: t(L("Rows per page", "صفوف لكل صفحة"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: `pp-${exportName}`,
								value: pageSize,
								onChange: (e) => {
									setPageSize(Number(e.target.value));
									setPage(1);
								},
								className: "h-9 appearance-none rounded-lg border border-border bg-surface ps-2.5 pe-7 text-xs outline-none focus:border-primary",
								children: [
									10,
									20,
									50,
									100
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: n,
									children: n
								}, n))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "pointer-events-none absolute end-2 size-3.5 text-muted-foreground",
								"aria-hidden": true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							disabled: current === 1,
							onClick: () => setPage(current - 1),
							"aria-label": t(L("Previous page", "الصفحة السابقة")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								className: "size-4 rtl:rotate-180",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-semibold tabular-nums",
							children: [
								current,
								" / ",
								totalPages
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							disabled: current === totalPages,
							onClick: () => setPage(current + 1),
							"aria-label": t(L("Next page", "الصفحة التالية")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "size-4 rtl:rotate-180",
								"aria-hidden": true
							})
						})
					]
				})]
			})
		]
	});
}
var statusTone = (s) => {
	return {
		Active: "success",
		Confirmed: "primary",
		Present: "success",
		Pending: "warning",
		Paid: "success",
		Partial: "warning",
		Unpaid: "danger",
		Inactive: "neutral",
		Withdrawn: "neutral",
		Completed: "success",
		"Under review": "warning",
		"Needs follow-up": "danger",
		Rescheduled: "info",
		"Excused absence": "info",
		Cancelled: "danger"
	}[s] ?? "neutral";
};
function Money$1({ v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-semibold tabular-nums",
		children: [v.toLocaleString(), " SAR"]
	});
}
function RowActions({ items }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1",
		children: items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": t(a.label),
			title: t(a.label),
			className: "grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-tint-green hover:text-[var(--primary-deep)]",
			children: a.icon
		}, i))
	});
}
var A$1 = {
	view: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("View", "عرض")
	},
	edit: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Edit", "تعديل")
	},
	print: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Print", "طباعة")
	},
	pdf: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("PDF", "PDF")
	},
	del: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Delete", "حذف")
	},
	down: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Download", "تنزيل")
	},
	pay: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Pay", "دفع")
	},
	cancel: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Cancel", "إلغاء")
	},
	send: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Send", "إرسال")
	},
	key: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
			className: "size-4",
			"aria-hidden": true
		}),
		label: L("Reset password", "إعادة تعيين كلمة المرور")
	}
};
function useTabs(ids) {
	const [tab, setTab] = (0, import_react.useState)(ids[0].id);
	return {
		tab,
		setTab,
		ids
	};
}
function emptyPatientForm() {
	return {
		file: "",
		name: "",
		dob: "",
		gender: "Male",
		nationality: "",
		diagnosis: "",
		specialtyIdx: 0,
		status: "Active"
	};
}
function makePatient(f, fallbackIndex) {
	return {
		file: f.file || `RH-${10300 + fallbackIndex}`,
		name: L(f.name || "New patient", f.name || "مريض جديد"),
		age: 0,
		gender: f.gender === "Female" ? L("Female", "أنثى") : L("Male", "ذكر"),
		nationality: L(f.nationality || "—", f.nationality || "—"),
		diagnosis: L(f.diagnosis || "—", f.diagnosis || "—"),
		specialty: f.specialtyIdx,
		lastVisit: "—",
		status: f.status === "Inactive" ? L("Inactive", "غير نشط") : f.status === "Withdrawn" ? L("Withdrawn", "منسحب") : L("Active", "نشط"),
		payments: "0 SAR",
		due: "0 SAR"
	};
}
function PatientFormFields({ form, setForm }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-sm font-semibold text-[var(--primary-deep)]",
				children: t(L("Personal information", "المعلومات الشخصية"))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Full name", "الاسم الكامل"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							placeholder: t(L("Full name", "الاسم الكامل"))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Date of birth", "تاريخ الميلاد"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							value: form.dob,
							onChange: (e) => setForm({
								...form,
								dob: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Gender", "الجنس"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: t(form.gender === "Female" ? L("Female", "أنثى") : L("Male", "ذكر")),
							onChange: (e) => setForm({
								...form,
								gender: e.target.value === t(L("Female", "أنثى")) ? "Female" : "Male"
							}),
							options: [L("Male", "ذكر"), L("Female", "أنثى")]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Nationality", "الجنسية"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.nationality,
							onChange: (e) => setForm({
								...form,
								nationality: e.target.value
							}),
							placeholder: t(L("Nationality", "الجنسية"))
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-sm font-semibold text-[var(--primary-deep)]",
				children: t(L("Medical information", "المعلومات الطبية"))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Diagnosis", "التشخيص"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.diagnosis,
						onChange: (e) => setForm({
							...form,
							diagnosis: e.target.value
						}),
						placeholder: t(L("Diagnosis", "التشخيص"))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Specialty", "التخصص"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: t(SPECIALTIES[form.specialtyIdx]),
						onChange: (e) => setForm({
							...form,
							specialtyIdx: SPECIALTIES.findIndex((s) => t(s) === e.target.value)
						}),
						options: SPECIALTIES
					})
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-sm font-semibold text-[var(--primary-deep)]",
				children: t(L("File information", "معلومات الملف"))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("File number", "رقم الملف"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.file,
						onChange: (e) => setForm({
							...form,
							file: e.target.value
						}),
						placeholder: t(L("File number", "رقم الملف"))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Status", "الحالة"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: t(form.status === "Inactive" ? L("Inactive", "غير نشط") : form.status === "Withdrawn" ? L("Withdrawn", "منسحب") : L("Active", "نشط")),
						onChange: (e) => {
							const v = e.target.value;
							const status = v === t(L("Inactive", "غير نشط")) ? "Inactive" : v === t(L("Withdrawn", "منسحب")) ? "Withdrawn" : "Active";
							setForm({
								...form,
								status
							});
						},
						options: [
							L("Active", "نشط"),
							L("Inactive", "غير نشط"),
							L("Withdrawn", "منسحب")
						]
					})
				})]
			})] })
		]
	});
}
function parseCsvPatients(text) {
	const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	if (lines.length < 2) return [];
	return lines.slice(1).map((line, i) => {
		const [file, name, diagnosis] = line.split(",").map((c) => c.trim());
		return makePatient({
			...emptyPatientForm(),
			file: file ?? "",
			name: name ?? "",
			diagnosis: diagnosis ?? ""
		}, i);
	});
}
function PatientRegistryModule({ onOpenProfile }) {
	const { t } = useI18n();
	const toast = useToast();
	const collection = useCollection(patients);
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const [advOpen, setAdvOpen] = (0, import_react.useState)(false);
	const [delOpen, setDelOpen] = (0, import_react.useState)(false);
	const [bulkSelection, setBulkSelection] = (0, import_react.useState)([]);
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [rowDeleteIndex, setRowDeleteIndex] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptyPatientForm());
	const fileInputRef = (0, import_react.useState)(() => ({ current: null }))[0];
	const openEdit = (index) => {
		const row = collection.items[index];
		setForm({
			file: row.file,
			name: t(row.name),
			dob: "",
			gender: row.gender.en === "Female" ? "Female" : "Male",
			nationality: t(row.nationality),
			diagnosis: t(row.diagnosis),
			specialtyIdx: row.specialty,
			status: row.status.en === "Inactive" ? "Inactive" : row.status.en === "Withdrawn" ? "Withdrawn" : "Active"
		});
		setEditIndex(index);
	};
	const handleCsvSelected = (e) => {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const rows = parseCsvPatients(String(reader.result ?? ""));
				if (rows.length === 0) {
					toast.push("error", L("No valid rows found in file", "لا توجد صفوف صالحة في الملف"));
					return;
				}
				rows.forEach((r) => collection.add(r));
				toast.push("success", L(`${rows.length} patients imported`, `تم استيراد ${rows.length} مريض`));
			} catch {
				toast.push("error", L("Failed to import file", "فشل استيراد الملف"));
			}
		};
		reader.onerror = () => toast.push("error", L("Failed to import file", "فشل استيراد الملف"));
		reader.readAsText(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: (el) => {
					fileInputRef.current = el;
				},
				type: "file",
				accept: ".csv,.xlsx",
				className: "hidden",
				"aria-hidden": true,
				tabIndex: -1,
				onChange: handleCsvSelected
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Patient Registry", "سجل المرضى"),
				description: L(`${collection.items.length} registered patients`, `${collection.items.length} مريضاً مسجلاً`),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => fileInputRef.current?.click(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Import Excel/CSV", "استيراد Excel/CSV"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => downloadCsv("rehlah-patients", [
							"File",
							"Name",
							"Diagnosis",
							"Status"
						], collection.items.map((p) => [
							p.file,
							t(p.name),
							t(p.diagnosis),
							t(p.status)
						])),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Export", "تصدير"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						"aria-label": t(L("Print", "طباعة")),
						onClick: () => printView(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "size-4",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "danger",
						onClick: () => {
							if (bulkSelection.length === 0) {
								toast.push("error", L("Select at least one patient", "اختر مريضاً واحداً على الأقل"));
								return;
							}
							setDelOpen(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Delete selected", "حذف المحدد"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => {
							setForm(emptyPatientForm());
							setAddOpen(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Add patient", "إضافة مريض"))
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Patient registry table", "جدول سجل المرضى"),
				rows: collection.items,
				rowKey: (p) => p.file,
				exportName: "rehlah-patients",
				pageSize: 10,
				search: (p) => `${p.file} ${p.name.en} ${p.name.ar} ${p.diagnosis.en} ${p.diagnosis.ar}`,
				searchPlaceholder: L("Search by name, file number or phone", "بحث بالاسم أو رقم الملف أو الجوال"),
				toolbarExtra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setAdvOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Advanced search", "بحث متقدم"))
					]
				}),
				filters: [
					{
						id: "specialty",
						label: L("Specialty", "التخصص"),
						options: SPECIALTIES.map((sp, i) => ({
							value: String(i),
							label: sp
						})),
						match: (p, v) => String(p.specialty) === v
					},
					{
						id: "status",
						label: L("Status", "الحالة"),
						options: [
							{
								value: "Active",
								label: L("Active", "نشط")
							},
							{
								value: "Inactive",
								label: L("Inactive", "غير نشط")
							},
							{
								value: "Withdrawn",
								label: L("Withdrawn", "منسحب")
							}
						],
						match: (p, v) => p.status.en === v
					},
					{
						id: "gender",
						label: L("Gender", "الجنس"),
						options: [{
							value: "Male",
							label: L("Male", "ذكر")
						}, {
							value: "Female",
							label: L("Female", "أنثى")
						}],
						match: (p, v) => p.gender.en === v
					},
					{
						id: "age",
						label: L("Age range", "الفئة العمرية"),
						options: [
							{
								value: "0-5",
								label: "0–5"
							},
							{
								value: "6-12",
								label: "6–12"
							},
							{
								value: "13-18",
								label: "13–18"
							}
						],
						match: (p, v) => {
							const [a, b] = v.split("-").map(Number);
							return p.age >= (a ?? 0) && p.age <= (b ?? 200);
						}
					}
				],
				bulkActions: [
					{
						id: "export",
						label: L("Export selected", "تصدير المحدد"),
						tone: "outline"
					},
					{
						id: "sms",
						label: L("Send SMS", "إرسال رسالة"),
						tone: "primary"
					},
					{
						id: "delete",
						label: L("Delete", "حذف"),
						tone: "danger"
					}
				],
				onBulkAction: (id, sel) => {
					setBulkSelection(sel.map((p) => p.file));
					if (id === "delete") setDelOpen(true);
					else toast.push("success", id === "export" ? L(`${sel.length} patients exported`, `تم تصدير ${sel.length} مريض`) : L(`SMS queued for ${sel.length} guardians`, `تم جدولة رسالة لـ ${sel.length} ولي أمر`));
				},
				columns: [
					{
						id: "file",
						header: L("File no.", "رقم الملف"),
						sort: (p) => p.file,
						csv: (p) => p.file,
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onOpenProfile,
							className: "font-mono text-xs text-primary underline-offset-4 hover:underline",
							children: p.file
						})
					},
					{
						id: "name",
						header: L("Name", "الاسم"),
						sort: (p) => p.name.en,
						csv: (p) => p.name.en,
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onOpenProfile,
							className: "font-semibold hover:underline",
							children: t(p.name)
						})
					},
					{
						id: "age",
						header: L("Age / Gender", "العمر / الجنس"),
						sort: (p) => p.age,
						csv: (p) => `${p.age} ${p.gender.en}`,
						hideBelow: "md",
						cell: (p) => `${p.age} · ${t(p.gender)}`
					},
					{
						id: "nat",
						header: L("Nationality", "الجنسية"),
						csv: (p) => p.nationality.en,
						hideBelow: "lg",
						cell: (p) => t(p.nationality)
					},
					{
						id: "dx",
						header: L("Diagnosis", "التشخيص"),
						sort: (p) => p.diagnosis.en,
						csv: (p) => p.diagnosis.en,
						cell: (p) => t(p.diagnosis)
					},
					{
						id: "spec",
						header: L("Specialty", "التخصص"),
						csv: (p) => spec(p.specialty).en,
						hideBelow: "md",
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							children: t(spec(p.specialty))
						})
					},
					{
						id: "last",
						header: L("Last visit", "آخر زيارة"),
						sort: (p) => p.lastVisit,
						csv: (p) => p.lastVisit,
						hideBelow: "lg",
						cell: (p) => p.lastVisit
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						sort: (p) => p.status.en,
						csv: (p) => p.status.en,
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: statusTone(p.status.en),
							children: t(p.status)
						})
					},
					{
						id: "pay",
						header: L("Payments", "المدفوعات"),
						csv: (p) => p.payments,
						hideBelow: "lg",
						cell: (p) => p.payments
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (p) => {
							const index = collection.items.findIndex((r) => r.file === p.file);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex justify-end gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										onClick: onOpenProfile,
										children: t(L("Open", "فتح"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": t(L("Edit", "تعديل")),
										title: t(L("Edit", "تعديل")),
										onClick: () => openEdit(index),
										className: "grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-tint-green hover:text-[var(--primary-deep)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
											className: "size-4",
											"aria-hidden": true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": t(L("Delete", "حذف")),
										title: t(L("Delete", "حذف")),
										onClick: () => setRowDeleteIndex(index),
										className: "grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "size-4",
											"aria-hidden": true
										})
									})
								]
							});
						}
					}
				],
				emptyTitle: L("No patients match", "لا يوجد مرضى مطابقون"),
				emptyDescription: L("Try clearing filters or register a new patient.", "امسح عوامل التصفية أو سجّل مريضاً جديداً."),
				emptyAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setAddOpen(true),
					children: t(L("Add patient", "إضافة مريض"))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: addOpen,
				onClose: () => setAddOpen(false),
				title: L("Add patient", "إضافة مريض"),
				subtitle: L("Personal, contact, medical, file and guardian information", "المعلومات الشخصية والاتصال والطبية والملف وولي الأمر"),
				size: "lg",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setAddOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (!form.name.trim()) {
							toast.push("error", L("Full name is required", "الاسم الكامل مطلوب"));
							return;
						}
						collection.add(makePatient(form, collection.items.length));
						setAddOpen(false);
						toast.push("success", L("Patient added", "تمت إضافة المريض"));
					},
					children: t(L("Save patient", "حفظ المريض"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientFormFields, {
					form,
					setForm
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: editIndex !== null,
				onClose: () => setEditIndex(null),
				title: L("Edit patient", "تعديل المريض"),
				size: "lg",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setEditIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (editIndex === null) return;
						collection.update(editIndex, makePatient(form, editIndex));
						setEditIndex(null);
						toast.push("success", L("Patient updated", "تم تحديث بيانات المريض"));
					},
					children: t(L("Save changes", "حفظ التغييرات"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientFormFields, {
					form,
					setForm
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: rowDeleteIndex !== null,
				onClose: () => setRowDeleteIndex(null),
				title: L("Delete patient", "حذف المريض"),
				size: "sm",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setRowDeleteIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (rowDeleteIndex === null) return;
						collection.remove(rowDeleteIndex);
						setRowDeleteIndex(null);
						toast.push("success", L("Patient deleted", "تم حذف المريض"));
					},
					children: t(L("Delete permanently", "حذف نهائي"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove this patient file and all linked records.", "سيؤدي هذا إلى حذف ملف هذا المريض وكل السجلات المرتبطة نهائياً."))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: advOpen,
				onClose: () => setAdvOpen(false),
				title: L("Advanced search", "بحث متقدم"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setAdvOpen(false),
					children: t(L("Reset", "إعادة تعيين"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setAdvOpen(false);
						toast.push("success", L("Apply filters — completed", "تطبيق — تم بنجاح"));
					},
					children: t(L("Apply filters", "تطبيق"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Diagnosis contains", "التشخيص يحتوي"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Registered between", "مسجل بين"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Outstanding balance", "رصيد مستحق"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
								L("Any", "الكل"),
								L("With dues", "عليه مستحقات"),
								L("Settled", "مسدد")
							] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: delOpen,
				onClose: () => setDelOpen(false),
				title: L("Delete selected patients", "حذف المرضى المحددين"),
				size: "sm",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDelOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						const indexes = collection.items.map((p, i) => bulkSelection.includes(p.file) ? i : -1).filter((i) => i >= 0);
						collection.removeMany(indexes);
						setBulkSelection([]);
						setDelOpen(false);
						toast.push("success", L("Delete permanently — completed", "حذف نهائي — تم بنجاح"));
					},
					children: t(L("Delete permanently", "حذف نهائي"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove the selected patient files and all linked records. This action is logged in the activity log.", "سيؤدي هذا إلى حذف ملفات المرضى المحددين وكل السجلات المرتبطة نهائياً. يُسجل هذا الإجراء في سجل النشاط."))
				})
			})
		]
	});
}
function PatientProfileModule() {
	const { t } = useI18n();
	const toast = useToast();
	const p = pat(0);
	const [apptOpen, setApptOpen] = (0, import_react.useState)(false);
	const [profile, setProfile] = (0, import_react.useState)({
		name: t(p.name),
		age: p.age,
		gender: t(p.gender),
		diagnosis: t(p.diagnosis),
		mobile: "+966 55 214 8890",
		email: "guardian.sara@example.sa",
		guardian: t(L("Fatimah Al-Otaibi (Mother)", "فاطمة العتيبي (الأم)"))
	});
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [editForm, setEditForm] = (0, import_react.useState)(profile);
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [specialtyFilter, setSpecialtyFilter] = (0, import_react.useState)("all");
	const apptStatuses = Array.from(new Set(appointments.map((a) => a.status.en)));
	const filteredAppointments = appointments.filter((a) => (statusFilter === "all" || a.status.en === statusFilter) && (specialtyFilter === "all" || String(a.specialty) === specialtyFilter));
	const sessions = useCollection(appointments.map((a) => ({
		date: "12 Jul 2026",
		time: a.time,
		specialty: a.specialty,
		specialist: a.specialist,
		status: a.status,
		notes: a.notes
	})));
	const [sessionOpen, setSessionOpen] = (0, import_react.useState)(false);
	const [sessionForm, setSessionForm] = (0, import_react.useState)({
		date: "",
		time: "",
		specialtyIdx: 0,
		specialistIdx: 0,
		notes: ""
	});
	const [notesViewIndex, setNotesViewIndex] = (0, import_react.useState)(null);
	const docs = useCollection(documents.map((d) => ({
		name: d.name,
		type: d.type,
		date: d.date,
		size: d.size,
		by: d.by
	})));
	const [uploadOpen, setUploadOpen] = (0, import_react.useState)(false);
	const [uploadFile, setUploadFile] = (0, import_react.useState)(null);
	const [uploadTypeIdx, setUploadTypeIdx] = (0, import_react.useState)(0);
	const [docDeleteIndex, setDocDeleteIndex] = (0, import_react.useState)(null);
	const docTypes = [
		L("Medical report", "تقرير طبي"),
		L("X-ray", "أشعة"),
		L("Assessment", "تقييم"),
		L("Other", "أخرى")
	];
	const plansList = useCollection([{
		title: L("Speech plan cycle 1", "دورة خطة النطق ١"),
		range: "01 Jul 2025 – 01 Jan 2026",
		status: L("Completed", "مكتملة")
	}, {
		title: L("Speech plan cycle 2", "دورة خطة النطق ٢"),
		range: "01 Jul 2025 – 01 Jan 2026",
		status: L("Completed", "مكتملة")
	}]);
	const [planOpen, setPlanOpen] = (0, import_react.useState)(false);
	const [planForm, setPlanForm] = (0, import_react.useState)({
		title: "",
		start: "",
		end: ""
	});
	const invoiceList = useCollection(invoices);
	const [issueOpen, setIssueOpen] = (0, import_react.useState)(false);
	const [issueForm, setIssueForm] = (0, import_react.useState)({
		date: "",
		total: ""
	});
	const [payOpen, setPayOpen] = (0, import_react.useState)(false);
	const [payForm, setPayForm] = (0, import_react.useState)({
		invoiceIdx: 0,
		amount: ""
	});
	const notesList = useCollection([
		{
			text: L("Improved /s/ production in initial position; continue drills at home.", "تحسن نطق حرف السين في بداية الكلمة، يستمر التدريب في المنزل."),
			date: "12 Jul 2026",
			by: doc(0)
		},
		{
			text: L("Improved /s/ production in initial position; continue drills at home.", "تحسن نطق حرف السين في بداية الكلمة، يستمر التدريب في المنزل."),
			date: "10 Jul 2026",
			by: doc(0)
		},
		{
			text: L("Improved /s/ production in initial position; continue drills at home.", "تحسن نطق حرف السين في بداية الكلمة، يستمر التدريب في المنزل."),
			date: "08 Jul 2026",
			by: doc(0)
		}
	]);
	const [noteDraft, setNoteDraft] = (0, import_react.useState)("");
	const { tab, setTab, ids } = useTabs([
		{
			id: "overview",
			label: L("Overview", "نظرة عامة")
		},
		{
			id: "appointments",
			label: L("Appointments", "المواعيد")
		},
		{
			id: "assessments",
			label: L("Assessments", "التقييمات")
		},
		{
			id: "plans",
			label: L("Treatment plans", "الخطط العلاجية")
		},
		{
			id: "sessions",
			label: L("Sessions", "الجلسات")
		},
		{
			id: "invoices",
			label: L("Invoices", "الفواتير")
		},
		{
			id: "documents",
			label: L("Documents", "المستندات")
		},
		{
			id: "referrals",
			label: L("Referrals", "الإحالات")
		},
		{
			id: "notes",
			label: L("Notes", "الملاحظات")
		},
		{
			id: "activity",
			label: L("Activity log", "سجل النشاط")
		}
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bg-tint-green",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 sm:flex sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-16 shrink-0 place-items-center rounded-3xl bg-surface text-xl font-bold text-primary shadow-[var(--shadow-card)]",
							children: profile.name.slice(0, 1)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "truncate text-xl font-bold sm:text-2xl",
									children: profile.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 truncate text-sm text-muted-foreground",
									children: [
										p.file,
										" · ",
										profile.age,
										" · ",
										profile.gender,
										" · ",
										profile.diagnosis
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "primary",
											children: t(spec(p.specialty))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "success",
											children: t(p.status)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "info",
											children: t(L("Registered 12 Jan 2026", "مسجل ١٢ يناير ٢٠٢٦"))
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => {
									printView();
									toast.push("info", L("Preparing patient file for print", "تجهيز ملف المريض للطباعة"));
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t(L("Print file", "طباعة الملف"))
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => {
									setEditForm(profile);
									setEditOpen(true);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t(L("Edit", "تعديل"))
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setApptOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t(L("Add appointment", "إضافة موعد"))
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 border-t border-border pt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
						{
							k: L("Mobile", "الجوال"),
							v: profile.mobile
						},
						{
							k: L("Email", "البريد الإلكتروني"),
							v: profile.email
						},
						{
							k: L("Guardian", "ولي الأمر"),
							v: profile.guardian
						},
						{
							k: L("Registration date", "تاريخ التسجيل"),
							v: "12 Jan 2026"
						}
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				tabs: ids,
				value: tab,
				onChange: setTab,
				label: "Patient profile sections"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-4",
				children: [
					tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								tint: "blue",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Appointments", "المواعيد") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: t(L("Last", "الأخير"))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-medium",
												children: "12 Jul 2026 · 08:30"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: t(L("Current", "الحالي"))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-medium",
												children: t(L("In session", "في جلسة"))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: t(L("Next", "القادم"))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-medium",
												children: "19 Jul 2026 · 08:30"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								tint: "green",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Treatment progress", "تقدم العلاج") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-3xl font-bold",
										children: "68%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: 68 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: t(L("24 of 36 sessions completed", "٢٤ من ٣٦ جلسة مكتملة"))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								tint: "yellow",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Financial dues", "المستحقات المالية") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-3xl font-bold",
										children: "0 SAR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: [t(L("Last assessment score", "درجة آخر تقييم")), ": 82"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [t(L("Total sessions", "إجمالي الجلسات")), ": 24"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "lg:col-span-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Case summary", "ملخص الحالة") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t(L("7-year-old presenting with expressive speech delay. Responding well to articulation drills; guardian reports improved intelligibility at home. Plan continues twice weekly with quarterly reassessment.", "طفلة عمرها ٧ سنوات لديها تأخر في النطق التعبيري. تستجيب جيداً لتمارين المخارج، ويفيد ولي الأمر بتحسن الوضوح في المنزل. تستمر الخطة بمعدل جلستين أسبوعياً مع إعادة تقييم ربع سنوية."))
								})]
							})
						]
					}),
					tab === "appointments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								className: "w-40",
								value: specialtyFilter === "all" ? t(L("All specialties", "كل التخصصات")) : t(SPECIALTIES[Number(specialtyFilter)]),
								onChange: (e) => {
									const v = e.target.value;
									if (v === t(L("All specialties", "كل التخصصات"))) setSpecialtyFilter("all");
									else setSpecialtyFilter(String(SPECIALTIES.findIndex((s) => t(s) === v)));
								},
								options: [L("All specialties", "كل التخصصات"), ...SPECIALTIES]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								className: "w-48",
								value: statusFilter === "all" ? t(L("All statuses", "كل الحالات")) : t(L(apptStatuses.find((s) => s === statusFilter) ?? "", "")),
								onChange: (e) => {
									const v = e.target.value;
									if (v === t(L("All statuses", "كل الحالات"))) setStatusFilter("all");
									else {
										const match = appointments.find((a) => t(a.status) === v);
										setStatusFilter(match ? match.status.en : "all");
									}
								},
								options: [L("All statuses", "كل الحالات"), ...appointments.map((a) => a.status).filter((s, i, arr) => arr.findIndex((x) => x.en === s.en) === i)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "ms-auto",
								onClick: () => setApptOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t(L("New appointment", "موعد جديد"))
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							caption: L("Patient appointments", "مواعيد المريض"),
							columns: [
								L("Date", "التاريخ"),
								L("Specialty", "التخصص"),
								L("Specialist", "الأخصائي"),
								L("Status", "الحالة"),
								L("Notes", "ملاحظات")
							],
							rows: filteredAppointments.map((a) => [
								`12 Jul 2026 · ${a.time}`,
								t(spec(a.specialty)),
								t(doc(a.specialist)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(a.status.en),
									children: t(a.status)
								}),
								t(a.notes)
							])
						}),
						filteredAppointments.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
								className: "size-5",
								"aria-hidden": true
							}),
							title: L("No appointments match", "لا توجد مواعيد مطابقة"),
							description: L("Try clearing the filters above.", "امسح عوامل التصفية أعلاه.")
						})
					] }),
					tab === "assessments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 xl:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "xl:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
								caption: L("Patient assessments", "تقييمات المريض"),
								columns: [
									L("Name", "الاسم"),
									L("Specialty", "التخصص"),
									L("Date", "التاريخ"),
									L("Score", "الدرجة"),
									L("Specialist", "الأخصائي"),
									L("Status", "الحالة"),
									L("Actions", "إجراءات")
								],
								rows: assessments.map((a) => [
									t(L("Speech clarity scale", "مقياس وضوح النطق")),
									t(spec(a.specialty)),
									a.date,
									a.score,
									t(doc(a.specialist)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: statusTone(a.status.en),
										children: t(a.status)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [A$1.view, A$1.pdf] })
								])
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
							title: L("Assessment comparison over time", "مقارنة التقييمات عبر الزمن"),
							summary: "Line chart showing assessment scores improving from 48 to 82 over four assessments.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
								data: [
									{
										day: "Mar",
										visits: 48
									},
									{
										day: "Apr",
										visits: 61
									},
									{
										day: "May",
										visits: 70
									},
									{
										day: "Jul",
										visits: 82
									}
								],
								x: "day",
								y: "visits"
							})
						})]
					}),
					tab === "plans" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							tint: "green",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								title: L("Current active plan", "الخطة النشطة الحالية"),
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									children: t(L("Active", "نشطة"))
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: 68 }), plan0.goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 truncate",
										children: t(g.goal)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums",
										children: [g.progress, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, {
										value: g.progress,
										tone: "wellness"
									})
								})] }, i))]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							title: L("Previous plans", "الخطط السابقة"),
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: () => setPlanOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t(L("Add plan", "إضافة خطة"))
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: plansList.items.map((pl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t(pl.title)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										pl.range,
										" · ",
										t(pl.status)
									]
								})]
							}, i))
						})] })]
					}),
					tab === "sessions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search sessions", "بحث في الجلسات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setSessionOpen(true),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Add session", "إضافة جلسة"))
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Session log", "سجل الجلسات"),
						columns: [
							L("Date", "التاريخ"),
							L("Time", "الوقت"),
							L("Specialty", "التخصص"),
							L("Specialist", "الأخصائي"),
							L("Status", "الحالة"),
							L("Notes", "ملاحظات")
						],
						rows: sessions.items.map((s, i) => [
							s.date,
							s.time,
							t(spec(s.specialty)),
							t(doc(s.specialist)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: statusTone(s.status.en),
								children: t(s.status)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setNotesViewIndex(i),
								className: "text-primary underline-offset-4 hover:underline",
								children: t(L("View session notes", "عرض ملاحظات الجلسة"))
							})
						])
					})] }),
					tab === "invoices" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setIssueOpen(true),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Issue invoice", "إصدار فاتورة"))
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setPayOpen(true),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Make payment", "تسجيل دفعة"))
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Invoice history", "سجل الفواتير"),
						columns: [
							L("Number", "الرقم"),
							L("Date", "التاريخ"),
							L("Amount", "المبلغ"),
							L("Paid", "المدفوع"),
							L("Remaining", "المتبقي"),
							L("Status", "الحالة")
						],
						rows: invoiceList.items.map((iv) => [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs",
								children: iv.number
							}),
							iv.date,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: iv.total }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: iv.paid }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: iv.total - iv.paid }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: statusTone(iv.status.en),
								children: t(iv.status)
							})
						])
					})] }),
					tab === "documents" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search documents", "بحث في المستندات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => setUploadOpen(true),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
									className: "size-4",
									"aria-hidden": true
								}),
								" ",
								t(L("Upload new", "رفع جديد"))
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
							children: docs.items.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								interactive: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-tint-blue text-info",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											className: "size-5",
											"aria-hidden": true
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold",
											children: t(d.name)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-0.5 truncate text-xs text-muted-foreground",
											children: [
												t(d.type),
												" · ",
												d.size,
												" · ",
												d.date
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => toast.push("success", L("Document downloaded", "تم تنزيل المستند")),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
												className: "size-4",
												"aria-hidden": true
											}),
											" ",
											t(L("Download", "تنزيل"))
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": t(L("Delete", "حذف")),
										title: t(L("Delete", "حذف")),
										onClick: () => setDocDeleteIndex(i),
										className: "grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "size-4",
											"aria-hidden": true
										})
									})]
								})]
							}, i))
						}),
						docs.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-5",
								"aria-hidden": true
							}),
							title: L("No documents yet", "لا توجد مستندات بعد"),
							description: L("Upload the first document for this patient.", "ارفع أول مستند لهذا المريض."),
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setUploadOpen(true),
								children: t(L("Upload new", "رفع جديد"))
							})
						})
					] }),
					tab === "referrals" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Incoming referrals", "الإحالات الواردة") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: t(L("King Fahad Hospital", "مستشفى الملك فهد"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										"02 Jun 2026 · ",
										t(spec(2)),
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "success",
											children: t(L("Accepted", "مقبولة"))
										})
									]
								})]
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Outgoing transfers", "التحويلات الصادرة") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: t(L("Al Noor Audiology Center", "مركز النور للسمعيات"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: ["18 Jun 2026 · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "info",
										children: t(L("Sent", "مرسلة"))
									})]
								})]
							})
						})] })]
					}),
					tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 lg:grid-cols-[380px_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Add clinical note", "إضافة ملاحظة سريرية") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Note", "الملاحظة"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 5,
									value: noteDraft,
									onChange: (e) => setNoteDraft(e.target.value),
									placeholder: t(L("Write a clinical note…", "اكتب ملاحظة سريرية…"))
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								onClick: () => {
									if (!noteDraft.trim()) {
										toast.push("error", L("Write a note before saving", "اكتب ملاحظة قبل الحفظ"));
										return;
									}
									notesList.add({
										text: L(noteDraft, noteDraft),
										date: "12 Jul 2026",
										by: doc(0)
									});
									setNoteDraft("");
									toast.push("success", L("Note saved", "تم حفظ الملاحظة"));
								},
								children: t(L("Save note", "حفظ الملاحظة"))
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Notes log", "سجل الملاحظات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 space-y-4",
							children: notesList.items.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-s-2 border-primary/40 ps-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: t(n.text)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										n.date,
										" · ",
										t(n.by)
									]
								})]
							}, i))
						})] })]
					}),
					tab === "activity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Activity log", "سجل النشاط"),
						columns: [
							L("Date / time", "التاريخ / الوقت"),
							L("User", "المستخدم"),
							L("Action", "الإجراء"),
							L("Details", "التفاصيل")
						],
						rows: [
							[
								"12 Jul 2026 · 08:41",
								t(doc(0)),
								t(L("Edit", "تعديل")),
								t(L("Updated treatment plan goals", "تحديث أهداف الخطة العلاجية"))
							],
							[
								"12 Jul 2026 · 08:32",
								t(L("Reem (Reception)", "ريم (الاستقبال)")),
								t(L("Add", "إضافة")),
								t(L("Checked in appointment", "تسجيل حضور الموعد"))
							],
							[
								"10 Jul 2026 · 15:02",
								t(L("Admin", "مدير النظام")),
								t(L("View", "عرض")),
								t(L("Opened patient file", "فتح ملف المريض"))
							]
						]
					})
				]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: apptOpen,
				onClose: () => setApptOpen(false),
				title: L("Add appointment", "إضافة موعد"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setApptOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setApptOpen(false);
						toast.push("success", L("Save appointment — completed", "حفظ الموعد — تم بنجاح"));
					},
					children: t(L("Save appointment", "حفظ الموعد"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Date", "التاريخ"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Time", "الوقت"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "time" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialist", "الأخصائي"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALISTS })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Type", "النوع"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
								L("Individual session", "جلسة فردية"),
								L("Group session", "جلسة جماعية"),
								L("Treatment program", "برنامج علاجي"),
								L("Consultation", "استشارة")
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Send reminder", "إرسال تذكير"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Yes — SMS + Email", "نعم — رسالة وبريد"), L("No", "لا")] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Notes", "ملاحظات"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: editOpen,
				onClose: () => setEditOpen(false),
				title: L("Edit patient", "تعديل المريض"),
				size: "lg",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setEditOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (!editForm.name.trim()) {
							toast.push("error", L("Full name is required", "الاسم الكامل مطلوب"));
							return;
						}
						setProfile(editForm);
						setEditOpen(false);
						toast.push("success", L("Patient updated", "تم تحديث بيانات المريض"));
					},
					children: t(L("Save changes", "حفظ التغييرات"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Full name", "الاسم الكامل"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editForm.name,
								onChange: (e) => setEditForm({
									...editForm,
									name: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Age", "العمر"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: editForm.age,
								onChange: (e) => setEditForm({
									...editForm,
									age: Number(e.target.value) || 0
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Gender", "الجنس"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editForm.gender,
								onChange: (e) => setEditForm({
									...editForm,
									gender: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Diagnosis", "التشخيص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editForm.diagnosis,
								onChange: (e) => setEditForm({
									...editForm,
									diagnosis: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Mobile", "الجوال"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editForm.mobile,
								onChange: (e) => setEditForm({
									...editForm,
									mobile: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Email", "البريد الإلكتروني"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editForm.email,
								onChange: (e) => setEditForm({
									...editForm,
									email: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Guardian", "ولي الأمر"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: editForm.guardian,
									onChange: (e) => setEditForm({
										...editForm,
										guardian: e.target.value
									})
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: sessionOpen,
				onClose: () => setSessionOpen(false),
				title: L("Add session", "إضافة جلسة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setSessionOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (!sessionForm.date || !sessionForm.time) {
							toast.push("error", L("Date and time are required", "التاريخ والوقت مطلوبان"));
							return;
						}
						sessions.add({
							date: sessionForm.date,
							time: sessionForm.time,
							specialty: sessionForm.specialtyIdx,
							specialist: sessionForm.specialistIdx,
							status: L("Confirmed", "مؤكد"),
							notes: L(sessionForm.notes || "—", sessionForm.notes || "—")
						});
						setSessionOpen(false);
						setSessionForm({
							date: "",
							time: "",
							specialtyIdx: 0,
							specialistIdx: 0,
							notes: ""
						});
						toast.push("success", L("Session added", "تمت إضافة الجلسة"));
					},
					children: t(L("Save session", "حفظ الجلسة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Date", "التاريخ"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: sessionForm.date,
								onChange: (e) => setSessionForm({
									...sessionForm,
									date: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Time", "الوقت"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "time",
								value: sessionForm.time,
								onChange: (e) => setSessionForm({
									...sessionForm,
									time: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: t(SPECIALTIES[sessionForm.specialtyIdx]),
								onChange: (e) => setSessionForm({
									...sessionForm,
									specialtyIdx: SPECIALTIES.findIndex((s) => t(s) === e.target.value)
								}),
								options: SPECIALTIES
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialist", "الأخصائي"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: t(SPECIALISTS[sessionForm.specialistIdx]),
								onChange: (e) => setSessionForm({
									...sessionForm,
									specialistIdx: SPECIALISTS.findIndex((s) => t(s) === e.target.value)
								}),
								options: SPECIALISTS
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Notes", "ملاحظات"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: sessionForm.notes,
									onChange: (e) => setSessionForm({
										...sessionForm,
										notes: e.target.value
									})
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: notesViewIndex !== null,
				onClose: () => setNotesViewIndex(null),
				title: L("Session notes", "ملاحظات الجلسة"),
				size: "sm",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setNotesViewIndex(null),
					children: t(L("Close", "إغلاق"))
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: notesViewIndex !== null ? t(sessions.items[notesViewIndex].notes) : ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: uploadOpen,
				onClose: () => setUploadOpen(false),
				title: L("Upload document", "رفع مستند"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setUploadOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (!uploadFile) {
							toast.push("error", L("Choose a file to upload", "اختر ملفاً للرفع"));
							return;
						}
						docs.add({
							name: L(uploadFile.name, uploadFile.name),
							type: docTypes[uploadTypeIdx],
							date: "12 Jul 2026",
							size: `${(uploadFile.size / 1048576).toFixed(1)} MB`,
							by: doc(0)
						});
						setUploadOpen(false);
						setUploadFile(null);
						setUploadTypeIdx(0);
						toast.push("success", L("Document uploaded", "تم رفع المستند"));
					},
					children: t(L("Upload", "رفع"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("File", "الملف"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "file",
							onChange: (e) => setUploadFile(e.target.files?.[0] ?? null)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Document type", "نوع المستند"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: t(docTypes[uploadTypeIdx]),
							onChange: (e) => setUploadTypeIdx(docTypes.findIndex((d) => t(d) === e.target.value)),
							options: docTypes
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: docDeleteIndex !== null,
				onClose: () => setDocDeleteIndex(null),
				title: L("Delete document", "حذف المستند"),
				size: "sm",
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDocDeleteIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (docDeleteIndex === null) return;
						docs.remove(docDeleteIndex);
						setDocDeleteIndex(null);
						toast.push("success", L("Document deleted", "تم حذف المستند"));
					},
					children: t(L("Delete permanently", "حذف نهائي"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove this document.", "سيؤدي هذا إلى حذف هذا المستند نهائياً."))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: planOpen,
				onClose: () => setPlanOpen(false),
				title: L("Add plan", "إضافة خطة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setPlanOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (!planForm.title.trim()) {
							toast.push("error", L("Plan title is required", "عنوان الخطة مطلوب"));
							return;
						}
						plansList.add({
							title: L(planForm.title, planForm.title),
							range: `${planForm.start || "—"} – ${planForm.end || "—"}`,
							status: L("Active", "نشطة")
						});
						setPlanOpen(false);
						setPlanForm({
							title: "",
							start: "",
							end: ""
						});
						toast.push("success", L("Plan added", "تمت إضافة الخطة"));
					},
					children: t(L("Save plan", "حفظ الخطة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Plan title", "عنوان الخطة"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: planForm.title,
									onChange: (e) => setPlanForm({
										...planForm,
										title: e.target.value
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Start date", "تاريخ البدء"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: planForm.start,
								onChange: (e) => setPlanForm({
									...planForm,
									start: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("End date", "تاريخ الانتهاء"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: planForm.end,
								onChange: (e) => setPlanForm({
									...planForm,
									end: e.target.value
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: issueOpen,
				onClose: () => setIssueOpen(false),
				title: L("Issue invoice", "إصدار فاتورة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setIssueOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						const total = Number(issueForm.total);
						if (!issueForm.date || !total) {
							toast.push("error", L("Date and amount are required", "التاريخ والمبلغ مطلوبان"));
							return;
						}
						invoiceList.add({
							number: `INV-2026-${(1e3 + invoiceList.items.length).toString().padStart(4, "0")}`,
							date: issueForm.date,
							patient: 0,
							total,
							paid: 0,
							method: L("Bank transfer", "تحويل بنكي"),
							status: L("Unpaid", "غير مدفوعة")
						});
						setIssueOpen(false);
						setIssueForm({
							date: "",
							total: ""
						});
						toast.push("success", L("Invoice issued", "تم إصدار الفاتورة"));
					},
					children: t(L("Issue invoice", "إصدار فاتورة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Invoice date", "تاريخ الفاتورة"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							value: issueForm.date,
							onChange: (e) => setIssueForm({
								...issueForm,
								date: e.target.value
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Amount (SAR)", "المبلغ (ريال)"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: issueForm.total,
							onChange: (e) => setIssueForm({
								...issueForm,
								total: e.target.value
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: payOpen,
				onClose: () => setPayOpen(false),
				title: L("Make payment", "تسجيل دفعة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setPayOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						const amount = Number(payForm.amount);
						const invoice = invoiceList.items[payForm.invoiceIdx];
						if (!amount || !invoice) {
							toast.push("error", L("Choose an invoice and amount", "اختر فاتورة ومبلغاً"));
							return;
						}
						const paid = Math.min(invoice.total, invoice.paid + amount);
						invoiceList.update(payForm.invoiceIdx, {
							paid,
							status: paid >= invoice.total ? L("Paid", "مدفوعة") : L("Partially paid", "مدفوعة جزئياً")
						});
						setPayOpen(false);
						setPayForm({
							invoiceIdx: 0,
							amount: ""
						});
						toast.push("success", L("Payment recorded", "تم تسجيل الدفعة"));
					},
					children: t(L("Record payment", "تسجيل الدفعة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Invoice", "الفاتورة"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: invoiceList.items[payForm.invoiceIdx]?.number ?? "",
								onChange: (e) => setPayForm({
									...payForm,
									invoiceIdx: invoiceList.items.findIndex((iv) => iv.number === e.target.value)
								}),
								options: invoiceList.items.map((iv) => L(iv.number, iv.number))
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Amount (SAR)", "المبلغ (ريال)"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: payForm.amount,
							onChange: (e) => setPayForm({
								...payForm,
								amount: e.target.value
							})
						})
					})]
				})
			})
		]
	});
}
var ALL_SPECIALTIES = [L("All specialties", "كل التخصصات"), ...SPECIALTIES];
var ALL_SPECIALISTS = [L("All specialists", "كل الأخصائيين"), ...SPECIALISTS];
var STATUS_OPTIONS = [
	L("Confirmed", "مؤكد"),
	L("Pending", "قيد الانتظار"),
	L("Present", "حضر"),
	L("Rescheduled", "أعيد جدولته"),
	L("Excused absence", "غياب بعذر"),
	L("Cancelled", "ملغي")
];
var ALL_STATUSES = [L("All statuses", "كل الحالات"), ...STATUS_OPTIONS];
var APPT_DATES = [
	"2026-07-12",
	"2026-07-12",
	"2026-07-16",
	"2026-07-20",
	"2026-07-12"
];
function initialAppointments() {
	return appointments.map((a, i) => ({
		...a,
		id: i,
		date: APPT_DATES[i % APPT_DATES.length]
	}));
}
function fmtDate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return `${String(d).padStart(2, "0")} ${[
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][(m ?? 1) - 1]} ${y}`;
}
function ActionButtons({ items }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1",
		children: items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": t(a.label),
			title: t(a.label),
			onClick: a.onClick,
			className: ["grid size-9 place-items-center rounded-lg transition-colors", a.tone === "danger" ? "text-destructive hover:bg-[color-mix(in_oklab,var(--destructive)_12%,white)]" : "text-muted-foreground hover:bg-tint-green hover:text-[var(--primary-deep)]"].join(" "),
			children: a.icon
		}, i))
	});
}
function ConfirmDialog({ open, onClose, title, description, confirmLabel, onConfirm }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onClose,
		size: "sm",
		title,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			onClick: onClose,
			children: t(L("Keep it", "الإبقاء عليه"))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "danger",
			onClick: onConfirm,
			children: t(confirmLabel)
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: t(description)
		})
	});
}
function SchedulingModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [view, setView] = (0, import_react.useState)("day");
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [statusOpen, setStatusOpen] = (0, import_react.useState)(false);
	const [statusTarget, setStatusTarget] = (0, import_react.useState)(null);
	const [newStatus, setNewStatus] = (0, import_react.useState)(STATUS_OPTIONS[0]);
	const [conflictOpen, setConflictOpen] = (0, import_react.useState)(false);
	const [detailsIndex, setDetailsIndex] = (0, import_react.useState)(null);
	const [cancelIndex, setCancelIndex] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)([]);
	const hours = [
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00"
	];
	const collection = useCollection((0, import_react.useMemo)(initialAppointments, []));
	const { filters, set } = useFilters({
		date: "",
		search: "",
		specialty: ALL_SPECIALTIES[0].en,
		specialist: ALL_SPECIALISTS[0].en,
		status: ALL_STATUSES[0].en
	});
	const specialtyLabel = (i) => t(spec(i));
	const specialistLabel = (i) => t(doc(i));
	const filteredRows = collection.items.filter((a) => {
		if (filters.date && a.date !== filters.date) return false;
		if (!matches(filters.search, t(pat(a.patient).name))) return false;
		if (filters.specialty !== ALL_SPECIALTIES[0].en && specialtyLabel(a.specialty) !== filters.specialty) return false;
		if (filters.specialist !== ALL_SPECIALISTS[0].en && specialistLabel(a.specialist) !== filters.specialist) return false;
		if (filters.status !== ALL_STATUSES[0].en && t(a.status) !== filters.status) return false;
		return true;
	});
	const conflicts = (0, import_react.useMemo)(() => {
		const list = [];
		const items = collection.items;
		for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
			const a = items[i];
			const b = items[j];
			if (a.date === b.date && a.time === b.time && a.specialist === b.specialist) list.push({
				a,
				b
			});
		}
		return list;
	}, [collection.items]);
	const detailsAppt = detailsIndex != null ? collection.items[detailsIndex] : null;
	cancelIndex != null && collection.items[cancelIndex];
	function findIndexById(id) {
		return collection.items.findIndex((r) => r.id === id);
	}
	function toggleSelect(id) {
		setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
	}
	function setStatusByIndex(index, status) {
		collection.update(index, { status });
	}
	function handleBatchConfirm() {
		selected.forEach((id) => {
			const idx = findIndexById(id);
			if (idx >= 0) setStatusByIndex(idx, L("Confirmed", "مؤكد"));
		});
		toast.push("success", L("Batch confirm — completed", "تأكيد جماعي — تم بنجاح"));
		setSelected([]);
	}
	function handleBatchCancel() {
		selected.forEach((id) => {
			const idx = findIndexById(id);
			if (idx >= 0) setStatusByIndex(idx, L("Cancelled", "ملغي"));
		});
		toast.push("success", L("Batch cancel — completed", "إلغاء جماعي — تم بنجاح"));
		setSelected([]);
	}
	function handleExport() {
		downloadCsv("appointments", [
			t(L("Date", "التاريخ")),
			t(L("Time", "الوقت")),
			t(L("Patient", "المريض")),
			t(L("Specialty", "التخصص")),
			t(L("Specialist", "الأخصائي")),
			t(L("Type", "النوع")),
			t(L("Status", "الحالة"))
		], filteredRows.map((a) => [
			a.date,
			a.time,
			t(pat(a.patient).name),
			specialtyLabel(a.specialty),
			specialistLabel(a.specialist),
			t(a.type),
			t(a.status)
		]));
		toast.push("success", L("Export CSV — completed", "تصدير CSV — تم بنجاح"));
	}
	function openAdd() {
		setEditIndex(null);
		setAddOpen(true);
	}
	function openEdit(id) {
		setEditIndex(findIndexById(id));
		setAddOpen(true);
	}
	function saveAppointment(data) {
		if (editIndex != null) {
			collection.update(editIndex, data);
			toast.push("success", L("Appointment updated — completed", "تحديث الموعد — تم بنجاح"));
		} else {
			const nextId = collection.items.reduce((m, r) => Math.max(m, r.id), 0) + 1;
			collection.add({
				...data,
				id: nextId
			});
			toast.push("success", L("Appointment created — completed", "إنشاء الموعد — تم بنجاح"));
		}
		setAddOpen(false);
		setEditIndex(null);
	}
	const editingAppt = editIndex != null ? collection.items[editIndex] ?? null : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Scheduling", "الجدولة"),
				description: L("Manage appointments across the clinic", "إدارة المواعيد في المركز"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setConflictOpen(true),
					children: t(L("Check conflicts", "فحص التعارضات"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: openAdd,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Add appointment", "إضافة موعد"))
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-44",
					"aria-label": t(L("Pick date", "اختر التاريخ")),
					value: filters.date,
					onChange: (e) => set("date", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					placeholder: L("Search by patient name", "بحث باسم المريض"),
					value: filters.search,
					onChange: (e) => set("search", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-40",
					options: ALL_SPECIALTIES,
					value: filters.specialty,
					onChange: (e) => set("specialty", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-44",
					options: ALL_SPECIALISTS,
					value: filters.specialist,
					onChange: (e) => set("specialist", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-36",
					options: ALL_STATUSES,
					value: filters.status,
					onChange: (e) => set("status", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => set("date", "2026-07-12"),
					children: t(L("Today", "اليوم"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: handleExport,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Export CSV", "تصدير CSV"))
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Total", "الإجمالي"),
						value: String(filteredRows.length),
						tint: "blue",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Confirmed", "مؤكدة"),
						value: String(filteredRows.filter((a) => a.status.en === "Confirmed").length),
						tint: "green",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Pending", "قيد الانتظار"),
						value: String(filteredRows.filter((a) => a.status.en === "Pending").length),
						tint: "yellow",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Present", "حضروا"),
						value: String(filteredRows.filter((a) => a.status.en === "Present").length),
						tint: "purple",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "size-5",
							"aria-hidden": true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Schedule views",
				value: view,
				onChange: setView,
				tabs: [
					{
						id: "day",
						label: L("Day view", "عرض اليوم")
					},
					{
						id: "week",
						label: L("Week view", "عرض الأسبوع")
					},
					{
						id: "month",
						label: L("Month view", "عرض الشهر")
					},
					{
						id: "list",
						label: L("List view", "عرض القائمة")
					},
					{
						id: "pending",
						label: L("Pending", "قيد الانتظار"),
						count: collection.items.filter((a) => a.status.en === "Pending").length
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-4",
				children: [
					(view === "day" || view === "week") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						title: view === "day" ? L("Daily timeline", "الجدول اليومي") : L("Weekly timeline", "الجدول الأسبوعي"),
						subtitle: L("Drag to move, resize to change duration, click to open", "اسحب للنقل، غيّر الحجم للمدة، انقر للفتح")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-0",
						children: hours.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[64px_minmax(0,1fr)] gap-3 border-t border-border py-3 first:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pt-1 font-mono text-xs text-muted-foreground",
								children: h
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 space-y-2",
								children: [filteredRows.filter((_, idx) => idx % hours.length === i % hours.length).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setDetailsIndex(findIndexById(a.id)),
									className: "w-full rounded-2xl border border-border bg-tint-green p-3 text-start transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-sm font-semibold",
										children: [
											t(pat(a.patient).name),
											" · ",
											a.time
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-0.5 block truncate text-xs text-muted-foreground",
										children: [
											specialtyLabel(a.specialty),
											" · ",
											specialistLabel(a.specialist),
											" · ",
											t(a.type)
										]
									})]
								}, a.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: openAdd,
									className: "tap-target w-full rounded-2xl border border-dashed border-border text-xs text-muted-foreground hover:bg-muted",
									children: ["+ ", t(L("Add here", "إضافة هنا"))]
								})]
							})]
						}, h))
					})] }),
					view === "month" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthGrid, {
						appointments: filteredRows,
						monthIso: "2026-07",
						onDay: (id) => setDetailsIndex(findIndexById(id))
					}),
					(view === "list" || view === "pending") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 rounded-2xl bg-tint-blue p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-medium",
									children: [
										selected.length,
										" ",
										t(L("selected", "محددة"))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: handleBatchConfirm,
									children: t(L("Batch confirm", "تأكيد جماعي"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										setStatusTarget(null);
										setStatusOpen(true);
									},
									children: t(L("Change status", "تغيير الحالة"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: handleBatchCancel,
									children: t(L("Batch cancel", "إلغاء جماعي"))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							caption: L("Appointments list", "قائمة المواعيد"),
							columns: [
								"",
								L("Time", "الوقت"),
								L("Patient", "المريض"),
								L("Specialty", "التخصص"),
								L("Specialist", "الأخصائي"),
								L("Type", "النوع"),
								L("Status", "الحالة"),
								L("Notes", "ملاحظات"),
								L("Actions", "إجراءات")
							],
							rows: (view === "pending" ? filteredRows.filter((a) => a.status.en === "Pending") : filteredRows).map((a) => [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									"aria-label": t(L("Select row", "تحديد الصف")),
									className: "size-4 accent-[var(--primary)]",
									checked: selected.includes(a.id),
									onChange: () => toggleSelect(a.id)
								}, "chk"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs",
									children: a.time
								}),
								t(pat(a.patient).name),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "primary",
									children: specialtyLabel(a.specialty)
								}),
								specialistLabel(a.specialist),
								t(a.type),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(a.status.en),
									children: t(a.status)
								}),
								t(a.notes),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButtons, { items: [
									{
										...A$1.view,
										onClick: () => setDetailsIndex(findIndexById(a.id))
									},
									{
										...A$1.edit,
										onClick: () => openEdit(a.id)
									},
									{
										...A$1.cancel,
										tone: "danger",
										onClick: () => setCancelIndex(findIndexById(a.id))
									}
								] })
							])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: filteredRows.length })
					] })
				]
			}, view),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentModal, {
				open: addOpen,
				onClose: () => {
					setAddOpen(false);
					setEditIndex(null);
				},
				initial: editingAppt,
				onSave: saveAppointment
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: statusOpen,
				onClose: () => setStatusOpen(false),
				size: "sm",
				title: L("Change appointment status", "تغيير حالة الموعد"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (statusTarget != null) setStatusByIndex(statusTarget, newStatus);
						else {
							selected.forEach((id) => {
								const idx = findIndexById(id);
								if (idx >= 0) setStatusByIndex(idx, newStatus);
							});
							setSelected([]);
						}
						setStatusOpen(false);
						toast.push("success", L("Update status — completed", "تحديث الحالة — تم بنجاح"));
					},
					children: t(L("Update status", "تحديث الحالة"))
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("New status", "الحالة الجديدة"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						options: STATUS_OPTIONS,
						value: t(newStatus),
						onChange: (e) => {
							const found = STATUS_OPTIONS.find((s) => t(s) === e.target.value);
							if (found) setNewStatus(found);
						}
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: conflictOpen,
				onClose: () => setConflictOpen(false),
				size: "sm",
				title: L("Appointment conflict", "تعارض في المواعيد"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setConflictOpen(false),
					children: t(L("Close", "إغلاق"))
				}),
				children: conflicts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("No overlapping appointments found for the same specialist and time.", "لا توجد مواعيد متعارضة لنفس الأخصائي والوقت."))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: conflicts.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-destructive/40 bg-[color-mix(in_oklab,var(--destructive)_6%,white)] p-3 text-sm",
						children: [
							t(L("Conflict", "تعارض")),
							": ",
							specialistLabel(c.a.specialist),
							" · ",
							fmtDate(c.a.date),
							" ",
							c.a.time,
							" — ",
							t(pat(c.a.patient).name),
							" ",
							t(L("and", "و")),
							" ",
							t(pat(c.b.patient).name)
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: detailsIndex != null,
				onClose: () => setDetailsIndex(null),
				title: L("Appointment details", "تفاصيل الموعد"),
				footer: detailsAppt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => {
							if (detailsIndex != null) openEdit(collection.items[detailsIndex].id);
							setDetailsIndex(null);
						},
						children: t(L("Reschedule", "إعادة جدولة"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						onClick: () => {
							if (detailsIndex != null) setCancelIndex(detailsIndex);
						},
						children: t(L("Cancel appointment", "إلغاء الموعد"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (detailsIndex != null) setStatusByIndex(detailsIndex, L("Confirmed", "مؤكد"));
							setDetailsIndex(null);
							toast.push("success", L("Confirm — completed", "تأكيد — تم بنجاح"));
						},
						children: t(L("Confirm", "تأكيد"))
					})
				] }),
				children: detailsAppt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
					{
						k: L("Patient", "المريض"),
						v: t(pat(detailsAppt.patient).name)
					},
					{
						k: L("File no.", "رقم الملف"),
						v: pat(detailsAppt.patient).file
					},
					{
						k: L("Date & time", "التاريخ والوقت"),
						v: `${fmtDate(detailsAppt.date)} · ${detailsAppt.time}`
					},
					{
						k: L("Specialty", "التخصص"),
						v: specialtyLabel(detailsAppt.specialty)
					},
					{
						k: L("Specialist", "الأخصائي"),
						v: specialistLabel(detailsAppt.specialist)
					},
					{
						k: L("Status", "الحالة"),
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: statusTone(detailsAppt.status.en),
							children: t(detailsAppt.status)
						})
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: cancelIndex != null,
				onClose: () => setCancelIndex(null),
				title: L("Cancel appointment", "إلغاء الموعد"),
				description: L("This will mark the appointment as cancelled. This action can be reversed by editing the appointment later.", "سيؤدي هذا إلى وضع الموعد كملغي. يمكن التراجع عن هذا لاحقاً بتعديل الموعد."),
				confirmLabel: L("Cancel appointment", "إلغاء الموعد"),
				onConfirm: () => {
					if (cancelIndex != null) setStatusByIndex(cancelIndex, L("Cancelled", "ملغي"));
					setCancelIndex(null);
					setDetailsIndex(null);
					toast.push("success", L("Appointment cancelled — completed", "إلغاء الموعد — تم بنجاح"));
				}
			})
		]
	});
}
function AppointmentModal({ open, onClose, initial, onSave }) {
	const { t } = useI18n();
	const [patientQuery, setPatientQuery] = (0, import_react.useState)("");
	const [typeVal, setTypeVal] = (0, import_react.useState)(L("Individual session", "جلسة فردية"));
	const [date, setDate] = (0, import_react.useState)("2026-07-12");
	const [time, setTime] = (0, import_react.useState)("08:30");
	const [specialty, setSpecialty] = (0, import_react.useState)(0);
	const [specialist, setSpecialist] = (0, import_react.useState)(0);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [patientIndex, setPatientIndex] = (0, import_react.useState)(0);
	(0, import_react.useMemo)(() => {
		if (open) {
			setPatientIndex(initial?.patient ?? 0);
			setPatientQuery(initial ? t(pat(initial.patient).name) : "");
			setTypeVal(initial?.type ?? L("Individual session", "جلسة فردية"));
			setDate(initial?.date ?? "2026-07-12");
			setTime(initial?.time ?? "08:30");
			setSpecialty(initial?.specialty ?? 0);
			setSpecialist(initial?.specialist ?? 0);
			setNotes(initial ? t(initial.notes) : "");
		}
	}, [open, initial]);
	const typeOptions = [
		L("Individual session", "جلسة فردية"),
		L("Group session", "جلسة جماعية"),
		L("Treatment program", "برنامج علاجي"),
		L("Consultation", "استشارة")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onClose,
		title: initial ? L("Edit appointment", "تعديل موعد") : L("Add appointment", "إضافة موعد"),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			onClick: onClose,
			children: t(L("Cancel", "إلغاء"))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => onSave({
				date,
				time,
				patient: patientIndex,
				specialty,
				specialist,
				type: typeVal,
				status: initial?.status ?? L("Pending", "قيد الانتظار"),
				notes: L(notes || "—", notes || "—")
			}),
			children: t(L("Save appointment", "حفظ الموعد"))
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: L("Patient", "المريض"),
					required: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: t(L("Search patient…", "ابحث عن مريض…")),
						value: patientQuery,
						onChange: (e) => {
							setPatientQuery(e.target.value);
							const idx = patients.findIndex((p) => t(p.name).toLowerCase().includes(e.target.value.toLowerCase()));
							if (idx >= 0) setPatientIndex(idx);
						},
						list: "patient-list"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
						id: "patient-list",
						children: patients.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: t(p.name) }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Type", "النوع"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						options: typeOptions,
						value: t(typeVal),
						onChange: (e) => {
							const found = typeOptions.find((o) => t(o) === e.target.value);
							if (found) setTypeVal(found);
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Date", "التاريخ"),
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: date,
						onChange: (e) => setDate(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Time", "الوقت"),
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "time",
						value: time,
						onChange: (e) => setTime(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Specialty", "التخصص"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						options: SPECIALTIES,
						value: t(spec(specialty)),
						onChange: (e) => {
							const idx = SPECIALTIES.findIndex((s) => t(s) === e.target.value);
							if (idx >= 0) setSpecialty(idx);
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Specialist", "الأخصائي"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						options: SPECIALISTS,
						value: t(doc(specialist)),
						onChange: (e) => {
							const idx = SPECIALISTS.findIndex((s) => t(s) === e.target.value);
							if (idx >= 0) setSpecialist(idx);
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Notes", "ملاحظات"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: notes,
							onChange: (e) => setNotes(e.target.value)
						})
					})
				})
			]
		})
	});
}
function dayIso(monthIso, day) {
	const [y, m] = monthIso.split("-").map(Number);
	return `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
function daysInMonth(monthIso) {
	const [y, m] = monthIso.split("-").map(Number);
	return new Date(y, m, 0).getDate();
}
function firstWeekday(monthIso) {
	const [y, m] = monthIso.split("-").map(Number);
	return new Date(y, m - 1, 1).getDay();
}
function MonthGrid({ onDay, appointments: appts, monthIso }) {
	const { t } = useI18n();
	const total = daysInMonth(monthIso);
	const lead = firstWeekday(monthIso);
	const cells = Array.from({ length: Math.ceil((total + lead) / 7) * 7 }, (_, i) => i - lead + 1);
	const today = "2026-07-12";
	const weekdays = [
		L("Sun", "أحد"),
		L("Mon", "إثنين"),
		L("Tue", "ثلاثاء"),
		L("Wed", "أربعاء"),
		L("Thu", "خميس"),
		L("Fri", "جمعة"),
		L("Sat", "سبت")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-3 sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-7 gap-1",
			children: [weekdays.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-2 py-2 text-center text-xs font-semibold text-muted-foreground",
				children: t(w)
			}, i)), cells.map((d, i) => {
				const inMonth = d > 0 && d <= total;
				const iso = inMonth ? dayIso(monthIso, d) : "";
				const isToday = iso === today;
				const weekend = i % 7 === 5 || i % 7 === 6;
				const dayAppts = inMonth ? appts.filter((a) => a.date === iso) : [];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						if (inMonth && dayAppts.length > 0) onDay(dayAppts[0].id);
						else if (inMonth) onDay(-1);
					},
					disabled: !inMonth,
					className: [
						"min-h-[84px] rounded-xl border p-2 text-start transition-colors sm:min-h-[104px]",
						inMonth ? "border-border bg-surface hover:bg-tint-green" : "border-transparent bg-muted/40",
						weekend && inMonth ? "bg-tint-blue/60" : "",
						isToday ? "border-primary ring-2 ring-primary/25" : ""
					].join(" "),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: ["text-xs font-semibold", inMonth ? "" : "text-muted-foreground"].join(" "),
						children: inMonth ? d : ""
					}), dayAppts.slice(0, 2).map((a, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: ["mt-1 block truncate rounded-md px-1.5 py-0.5 text-[10px]", j === 0 ? "bg-primary/15 text-[var(--primary-deep)]" : "bg-accent/30"].join(" "),
						children: [
							a.time,
							" · ",
							t(pat(a.patient).name)
						]
					}, j))]
				}, i);
			})]
		})
	});
}
function CalendarModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [dayOpen, setDayOpen] = (0, import_react.useState)(false);
	const [selectedDay, setSelectedDay] = (0, import_react.useState)("2026-07-12");
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [editApptId, setEditApptId] = (0, import_react.useState)(null);
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const [monthIso, setMonthIso] = (0, import_react.useState)("2026-07");
	const [specialtyFilter, setSpecialtyFilter] = (0, import_react.useState)(ALL_SPECIALTIES[0].en);
	const [specialistFilter, setSpecialistFilter] = (0, import_react.useState)(ALL_SPECIALISTS[0].en);
	const collection = useCollection((0, import_react.useMemo)(initialAppointments, []));
	const filteredAppts = collection.items.filter((a) => {
		if (specialtyFilter !== ALL_SPECIALTIES[0].en && t(spec(a.specialty)) !== specialtyFilter) return false;
		if (specialistFilter !== ALL_SPECIALISTS[0].en && t(doc(a.specialist)) !== specialistFilter) return false;
		return true;
	});
	function findIndexById(id) {
		return collection.items.findIndex((r) => r.id === id);
	}
	const monthLabel = () => {
		const [y, m] = monthIso.split("-").map(Number);
		const months = [
			L("January", "يناير"),
			L("February", "فبراير"),
			L("March", "مارس"),
			L("April", "أبريل"),
			L("May", "مايو"),
			L("June", "يونيو"),
			L("July", "يوليو"),
			L("August", "أغسطس"),
			L("September", "سبتمبر"),
			L("October", "أكتوبر"),
			L("November", "نوفمبر"),
			L("December", "ديسمبر")
		];
		return `${t(months[(m ?? 1) - 1])} ${y}`;
	};
	function shiftMonth(delta) {
		const [y, m] = monthIso.split("-").map(Number);
		const d = new Date(y, (m ?? 1) - 1 + delta, 1);
		setMonthIso(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
	}
	function handleExportMonth() {
		downloadCsv(`calendar-${monthIso}`, [
			t(L("Date", "التاريخ")),
			t(L("Time", "الوقت")),
			t(L("Patient", "المريض")),
			t(L("Specialty", "التخصص")),
			t(L("Specialist", "الأخصائي")),
			t(L("Status", "الحالة"))
		], filteredAppts.filter((a) => a.date.startsWith(monthIso)).map((a) => [
			a.date,
			a.time,
			t(pat(a.patient).name),
			t(spec(a.specialty)),
			t(doc(a.specialist)),
			t(a.status)
		]));
		toast.push("success", L("Export CSV — completed", "تصدير CSV — تم بنجاح"));
	}
	const dayAppts = filteredAppts.filter((a) => a.date === selectedDay);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Calendar", "التقويم"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						className: "w-40",
						options: ALL_SPECIALTIES,
						value: specialtyFilter,
						onChange: (e) => setSpecialtyFilter(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						className: "w-44",
						options: ALL_SPECIALISTS,
						value: specialistFilter,
						onChange: (e) => setSpecialistFilter(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: handleExportMonth,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Export", "تصدير"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => printView(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Print", "طباعة"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setAddOpen(true),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Add appointment", "إضافة موعد"))
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-lg font-bold",
							children: monthLabel()
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": t(L("Previous month", "الشهر السابق")),
								onClick: () => shiftMonth(-1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
									className: "size-4 rtl:rotate-180",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								onClick: () => setMonthIso("2026-07"),
								children: t(L("Today", "اليوم"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": t(L("Next month", "الشهر التالي")),
								onClick: () => shiftMonth(1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-4 rtl:rotate-180",
									"aria-hidden": true
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthGrid, {
				appointments: filteredAppts,
				monthIso,
				onDay: (id) => {
					const appt = filteredAppts.find((a) => a.id === id);
					setSelectedDay(appt ? appt.date : dayIso(monthIso, 12));
					setDayOpen(true);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Color legend", "دليل الألوان") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3",
				children: [
					SPECIALTIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: [
							"primary",
							"accent",
							"wellness",
							"info",
							"success"
						][i % 5],
						children: t(s)
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-full" }),
					[
						L("Confirmed", "مؤكد"),
						L("Pending", "قيد الانتظار"),
						L("Present", "حضر"),
						L("Cancelled", "ملغي")
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(s.en),
						children: t(s)
					}, i))
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: dayOpen,
				onClose: () => setDayOpen(false),
				title: L("Appointments", "مواعيد"),
				subtitle: fmtDate(selectedDay),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDayOpen(false),
					children: t(L("Close", "إغلاق"))
				}),
				children: dayAppts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
						className: "size-6",
						"aria-hidden": true
					}),
					title: L("No appointments", "لا توجد مواعيد"),
					description: L("There are no appointments on this day for the selected filters.", "لا توجد مواعيد في هذا اليوم وفق عوامل التصفية المحددة.")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: dayAppts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-sm font-semibold",
									children: [
										a.time,
										" · ",
										t(pat(a.patient).name)
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 truncate text-xs text-muted-foreground",
									children: [
										t(spec(a.specialty)),
										" · ",
										t(doc(a.specialist))
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: statusTone(a.status.en),
								children: t(a.status)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => {
										const idx = findIndexById(a.id);
										if (idx >= 0) collection.update(idx, { status: L("Confirmed", "مؤكد") });
										toast.push("success", L("Confirm — completed", "تأكيد — تم بنجاح"));
									},
									children: t(L("Confirm", "تأكيد"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										setEditApptId(a.id);
										setEditOpen(true);
									},
									children: t(L("Reschedule", "إعادة جدولة"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: () => {
										const idx = findIndexById(a.id);
										if (idx >= 0) collection.update(idx, { status: L("Cancelled", "ملغي") });
										toast.push("success", L("Cancel — completed", "إلغاء — تم بنجاح"));
									},
									children: t(L("Cancel", "إلغاء"))
								})
							]
						})]
					}, a.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: editOpen,
				onClose: () => setEditOpen(false),
				title: L("Edit / cancel appointment", "تعديل / إلغاء الموعد"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (editApptId != null) {
							const idx = findIndexById(editApptId);
							if (idx >= 0) collection.update(idx, { status: L("Cancelled", "ملغي") });
						}
						setEditOpen(false);
						toast.push("success", L("Appointment cancelled — completed", "إلغاء الموعد — تم بنجاح"));
					},
					children: t(L("Cancel appointment", "إلغاء الموعد"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setEditOpen(false);
						toast.push("success", L("Save changes — completed", "حفظ التغييرات — تم بنجاح"));
					},
					children: t(L("Save changes", "حفظ التغييرات"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("New date", "التاريخ الجديد"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("New time", "الوقت الجديد"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "time" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Cancellation reason", "سبب الإلغاء"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Send notification", "إرسال إشعار"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
								L("SMS + Email", "رسالة + بريد"),
								L("SMS only", "رسالة فقط"),
								L("None", "بدون")
							] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentModal, {
				open: addOpen,
				onClose: () => setAddOpen(false),
				initial: null,
				onSave: (data) => {
					const nextId = collection.items.reduce((m, r) => Math.max(m, r.id), 0) + 1;
					collection.add({
						...data,
						id: nextId
					});
					setAddOpen(false);
					toast.push("success", L("Appointment created — completed", "إنشاء الموعد — تم بنجاح"));
				}
			})
		]
	});
}
function initialPlans() {
	return treatmentPlans.map((p, i) => ({
		...p,
		id: i,
		notes: []
	}));
}
function TreatmentPlansModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("active");
	const [planOpen, setPlanOpen] = (0, import_react.useState)(false);
	const [editPlanId, setEditPlanId] = (0, import_react.useState)(null);
	const [soapOpen, setSoapOpen] = (0, import_react.useState)(false);
	const [soapPlanId, setSoapPlanId] = (0, import_react.useState)(null);
	const [detailsId, setDetailsId] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const collection = useCollection((0, import_react.useMemo)(initialPlans, []));
	const [completed, setCompleted] = (0, import_react.useState)([]);
	const [search, setSearch] = (0, import_react.useState)("");
	const [specialtyFilter, setSpecialtyFilter] = (0, import_react.useState)(ALL_SPECIALTIES[0].en);
	const [specialistFilter, setSpecialistFilter] = (0, import_react.useState)(ALL_SPECIALISTS[0].en);
	const [statusFilter, setStatusFilter] = (0, import_react.useState)(L("All statuses", "كل الحالات").en);
	const passStatusAll = L("All statuses", "كل الحالات").en;
	L("Active", "نشطة").en;
	L("Completed", "مكتملة").en;
	function matchesFilters(p) {
		if (!matches(search, t(pat(p.patient).name))) return false;
		if (specialtyFilter !== ALL_SPECIALTIES[0].en && t(spec(p.specialty)) !== specialtyFilter) return false;
		if (specialistFilter !== ALL_SPECIALISTS[0].en && t(doc(p.specialist)) !== specialistFilter) return false;
		if (statusFilter !== passStatusAll && t(p.status) !== statusFilter) return false;
		return true;
	}
	const activePlans = collection.items.filter(matchesFilters);
	const completedPlans = completed.filter(matchesFilters);
	function findIndexById(id) {
		return collection.items.findIndex((r) => r.id === id);
	}
	const detailsPlan = detailsId != null && collection.items.find((p) => p.id === detailsId) || detailsId != null && completed.find((p) => p.id === detailsId) || null;
	const editingPlan = editPlanId != null ? collection.items.find((p) => p.id === editPlanId) ?? null : null;
	function openCreate() {
		setEditPlanId(null);
		setPlanOpen(true);
	}
	function openEdit(id) {
		setEditPlanId(id);
		setPlanOpen(true);
	}
	function savePlan(data) {
		if (editPlanId != null) {
			const idx = findIndexById(editPlanId);
			if (idx >= 0) collection.update(idx, data);
			toast.push("success", L("Plan updated — completed", "تحديث الخطة — تم بنجاح"));
		} else {
			const nextId = Math.max(0, ...collection.items.map((p) => p.id), ...completed.map((p) => p.id)) + 1;
			collection.add({
				...data,
				id: nextId,
				notes: []
			});
			toast.push("success", L("Plan created — completed", "إنشاء الخطة — تم بنجاح"));
		}
		setPlanOpen(false);
		setEditPlanId(null);
	}
	function dischargePlan(id) {
		const idx = findIndexById(id);
		if (idx < 0) return;
		const p = collection.items[idx];
		collection.remove(idx);
		setCompleted((prev) => [{
			...p,
			status: L("Completed", "مكتملة"),
			progress: 100
		}, ...prev]);
		toast.push("success", L("Plan discharged — completed", "تخريج الخطة — تم بنجاح"));
	}
	function deletePlan(id) {
		const idx = findIndexById(id);
		if (idx >= 0) collection.remove(idx);
		else setCompleted((prev) => prev.filter((p) => p.id !== id));
		setDeleteId(null);
		toast.push("success", L("Plan deleted — completed", "حذف الخطة — تم بنجاح"));
	}
	function addSoapNote(planId, note) {
		const idx = findIndexById(planId);
		if (idx >= 0) {
			const plan = collection.items[idx];
			collection.update(idx, { notes: [note, ...plan.notes] });
		}
	}
	function exportPlan(p) {
		downloadCsv(`plan-${pat(p.patient).file}`, [t(L("Field", "الحقل")), t(L("Value", "القيمة"))], [
			[t(L("Patient", "المريض")), t(pat(p.patient).name)],
			[t(L("Specialty", "التخصص")), t(spec(p.specialty))],
			[t(L("Specialist", "الأخصائي")), t(doc(p.specialist))],
			[t(L("Period", "الفترة")), `${p.start} → ${p.end}`],
			[t(L("Progress", "التقدم")), `${p.progress}%`],
			...p.goals.map((g) => [t(L("Goal", "الهدف")), t(g.goal)])
		]);
		toast.push("success", L("Export CSV — completed", "تصدير CSV — تم بنجاح"));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Treatment Plans", "الخطط العلاجية"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => {
						setSoapPlanId(collection.items[0]?.id ?? null);
						setSoapOpen(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("SOAP note", "ملاحظة SOAP"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: openCreate,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Create plan", "إنشاء خطة"))
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					placeholder: L("Search plans or patients", "بحث في الخطط أو المرضى"),
					value: search,
					onChange: (e) => setSearch(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-40",
					options: ALL_SPECIALTIES,
					value: specialtyFilter,
					onChange: (e) => setSpecialtyFilter(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-44",
					options: ALL_SPECIALISTS,
					value: specialistFilter,
					onChange: (e) => setSpecialistFilter(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-36",
					options: [
						L("All statuses", "كل الحالات"),
						L("Active", "نشطة"),
						L("Completed", "مكتملة")
					],
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value)
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Treatment plan tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "active",
						label: L("Active plans", "الخطط النشطة"),
						count: activePlans.length
					},
					{
						id: "completed",
						label: L("Completed plans", "الخطط المكتملة"),
						count: completedPlans.length
					},
					{
						id: "templates",
						label: L("Plan templates", "قوالب الخطط"),
						count: 5
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft",
				children: [
					tab === "active" && (activePlans.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
							className: "size-6",
							"aria-hidden": true
						}),
						title: L("No plans found", "لا توجد خطط"),
						description: L("Try adjusting your filters or create a new plan.", "حاول تعديل عوامل التصفية أو أنشئ خطة جديدة."),
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: openCreate,
							children: t(L("Create plan", "إنشاء خطة"))
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3",
						children: activePlans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-semibold",
											children: t(pat(p.patient).name)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-mono text-xs text-muted-foreground",
											children: pat(p.patient).file
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "success",
										children: t(p.status)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "primary",
										children: t(spec(p.specialty))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "neutral",
										children: t(doc(p.specialist))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: [
										p.start,
										" → ",
										p.end,
										" · ",
										p.sessions,
										" ",
										t(L("sessions", "جلسة"))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(L("Progress", "التقدم")) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums",
											children: [p.progress, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: p.progress })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-1.5 text-xs text-muted-foreground",
									children: p.goals.map((g, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "truncate",
										children: ["• ", t(g.goal)]
									}, j))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "secondary",
											className: "flex-1",
											onClick: () => setDetailsId(p.id),
											children: t(L("View", "عرض"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											className: "flex-1",
											onClick: () => openEdit(p.id),
											children: t(L("Edit", "تعديل"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "wellness",
											className: "flex-1",
											onClick: () => dischargePlan(p.id),
											children: t(L("Discharge", "تخريج"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "danger",
											onClick: () => setDeleteId(p.id),
											"aria-label": t(L("Delete plan", "حذف الخطة")),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
												className: "size-4",
												"aria-hidden": true
											})
										})
									]
								})
							]
						}, p.id))
					})),
					tab === "completed" && (completedPlans.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-6",
							"aria-hidden": true
						}),
						title: L("No completed plans", "لا توجد خطط مكتملة"),
						description: L("Discharged plans will appear here.", "ستظهر هنا الخطط بعد تخريجها.")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
						children: completedPlans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							tint: "green",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[minmax(0,1fr)_auto] gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-semibold",
											children: t(pat(p.patient).name)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												t(L("Completed", "مكتملة")),
												" · ",
												p.end
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "success",
										children: "100%"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: t(L("All goals achieved; discharged with home programme.", "تحققت جميع الأهداف، وتم التخريج مع برنامج منزلي."))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										onClick: () => setDetailsId(p.id),
										children: t(L("View", "عرض"))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "danger",
										onClick: () => setDeleteId(p.id),
										children: t(L("Delete", "حذف"))
									})]
								})
							]
						}, p.id))
					})),
					tab === "templates" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: [SPECIALTIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							interactive: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "primary",
									children: t(s)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-semibold",
									children: t(L("Standard 12-week programme", "برنامج قياسي ١٢ أسبوعاً"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t(L("6 goals · 24 sessions", "٦ أهداف · ٢٤ جلسة"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										className: "flex-1",
										onClick: openCreate,
										children: t(L("Create from template", "إنشاء من القالب"))
									})
								})
							]
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openCreate,
							className: "grid min-h-[168px] place-items-center rounded-3xl border border-dashed border-border text-sm font-medium text-muted-foreground hover:bg-muted",
							children: ["+ ", t(L("Add new template", "إضافة قالب جديد"))]
						})]
					})
				]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanModal, {
				open: planOpen,
				onClose: () => setPlanOpen(false),
				initial: editingPlan,
				onSave: savePlan
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoapModal, {
				open: soapOpen,
				onClose: () => setSoapOpen(false),
				planId: soapPlanId,
				plans: collection.items,
				onSelectPlan: setSoapPlanId,
				onSave: (note) => {
					if (soapPlanId != null) addSoapNote(soapPlanId, note);
					setSoapOpen(false);
					toast.push("success", L("Save note — completed", "حفظ الملاحظة — تم بنجاح"));
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: detailsId != null,
				onClose: () => setDetailsId(null),
				size: "lg",
				title: L("Plan details", "تفاصيل الخطة"),
				footer: detailsPlan && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => detailsPlan && exportPlan(detailsPlan),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Export CSV", "تصدير CSV"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => printView(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Print", "طباعة"))
					]
				})] }),
				children: detailsPlan && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
							{
								k: L("Patient", "المريض"),
								v: t(pat(detailsPlan.patient).name)
							},
							{
								k: L("Specialty", "التخصص"),
								v: t(spec(detailsPlan.specialty))
							},
							{
								k: L("Specialist", "الأخصائي"),
								v: t(doc(detailsPlan.specialist))
							},
							{
								k: L("Period", "الفترة"),
								v: `${detailsPlan.start} → ${detailsPlan.end}`
							}
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
							title: L("Progress chart", "مخطط التقدم"),
							height: 200,
							summary: "Line chart showing plan progress rising over months.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
								data: [
									{
										day: "Mar",
										visits: 20
									},
									{
										day: "Apr",
										visits: 38
									},
									{
										day: "May",
										visits: 52
									},
									{
										day: "Jun",
										visits: 61
									},
									{
										day: "Jul",
										visits: detailsPlan.progress
									}
								],
								x: "day",
								y: "visits"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: t(L("Goals", "الأهداف"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5 text-sm text-muted-foreground",
							children: detailsPlan.goals.map((g, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"• ",
								t(g.goal),
								" — ",
								g.progress,
								"%"
							] }, j))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: t(L("SOAP notes", "ملاحظات SOAP"))
						}), detailsPlan.notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: t(L("No notes recorded yet.", "لا توجد ملاحظات بعد."))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-3",
							children: detailsPlan.notes.map((n, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-border p-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-muted-foreground",
										children: n.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [t(L("S", "ذ")), ":"] }),
											" ",
											n.subjective
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [t(L("O", "م")), ":"] }),
										" ",
										n.objective
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [t(L("A", "ت")), ":"] }),
										" ",
										n.assessment
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [t(L("P", "خ")), ":"] }),
										" ",
										n.plan
									] })
								]
							}, j))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							caption: L("Plan sessions", "جلسات الخطة"),
							columns: [
								L("Date", "التاريخ"),
								L("Specialist", "الأخصائي"),
								L("Status", "الحالة")
							],
							rows: appointments.slice(0, 3).map((a) => [
								`12 Jul 2026 · ${a.time}`,
								t(doc(a.specialist)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(a.status.en),
									children: t(a.status)
								})
							])
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: deleteId != null,
				onClose: () => setDeleteId(null),
				title: L("Delete plan", "حذف الخطة"),
				description: L("This will permanently remove the treatment plan. This action cannot be undone.", "سيؤدي هذا إلى حذف الخطة العلاجية نهائياً. لا يمكن التراجع عن هذا الإجراء."),
				confirmLabel: L("Delete", "حذف"),
				onConfirm: () => deleteId != null && deletePlan(deleteId)
			})
		]
	});
}
function PlanModal({ open, onClose, initial, onSave }) {
	const { t } = useI18n();
	const [patientIndex, setPatientIndex] = (0, import_react.useState)(0);
	const [patientQuery, setPatientQuery] = (0, import_react.useState)("");
	const [specialty, setSpecialty] = (0, import_react.useState)(0);
	const [specialist, setSpecialist] = (0, import_react.useState)(0);
	const [start, setStart] = (0, import_react.useState)("2026-03-01");
	const [end, setEnd] = (0, import_react.useState)("2026-09-01");
	const [sessions, setSessions] = (0, import_react.useState)(24);
	const [goals, setGoals] = (0, import_react.useState)([{
		goal: "",
		criteria: "",
		date: ""
	}]);
	(0, import_react.useMemo)(() => {
		if (open) {
			setPatientIndex(initial?.patient ?? 0);
			setPatientQuery(initial ? t(pat(initial.patient).name) : "");
			setSpecialty(initial?.specialty ?? 0);
			setSpecialist(initial?.specialist ?? 0);
			setStart(initial?.start ?? "2026-03-01");
			setEnd(initial?.end ?? "2026-09-01");
			setSessions(initial ? Number(initial.sessions.split("/")[1]?.trim() ?? 24) : 24);
			setGoals(initial && initial.goals.length > 0 ? initial.goals.map((g) => ({
				goal: t(g.goal),
				criteria: "",
				date: ""
			})) : [{
				goal: "",
				criteria: "",
				date: ""
			}]);
		}
	}, [open, initial]);
	function addGoal() {
		setGoals((p) => [...p, {
			goal: "",
			criteria: "",
			date: ""
		}]);
	}
	function removeGoal(i) {
		setGoals((p) => p.filter((_, j) => j !== i));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onClose,
		size: "lg",
		title: initial ? L("Edit treatment plan", "تعديل خطة علاجية") : L("Create treatment plan", "إنشاء خطة علاجية"),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			onClick: onClose,
			children: t(L("Cancel", "إلغاء"))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => onSave({
				patient: patientIndex,
				specialty,
				specialist,
				start,
				end,
				progress: initial?.progress ?? 0,
				sessions: `0 / ${sessions}`,
				status: L("Active", "نشطة"),
				goals: goals.filter((g) => g.goal.trim()).map((g) => ({
					goal: L(g.goal, g.goal),
					progress: 0
				}))
			}),
			children: t(L("Save plan", "حفظ الخطة"))
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: L("Patient", "المريض"),
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: t(L("Search patient…", "ابحث عن مريض…")),
								value: patientQuery,
								onChange: (e) => {
									setPatientQuery(e.target.value);
									const idx = patients.findIndex((p) => t(p.name).toLowerCase().includes(e.target.value.toLowerCase()));
									if (idx >= 0) setPatientIndex(idx);
								},
								list: "plan-patient-list"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
								id: "plan-patient-list",
								children: patients.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: t(p.name) }, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: SPECIALTIES,
								value: t(spec(specialty)),
								onChange: (e) => {
									const idx = SPECIALTIES.findIndex((s) => t(s) === e.target.value);
									if (idx >= 0) setSpecialty(idx);
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialist", "الأخصائي"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: SPECIALISTS,
								value: t(doc(specialist)),
								onChange: (e) => {
									const idx = SPECIALISTS.findIndex((s) => t(s) === e.target.value);
									if (idx >= 0) setSpecialist(idx);
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Start date", "تاريخ البدء"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: start,
								onChange: (e) => setStart(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("End date", "تاريخ الانتهاء"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: end,
								onChange: (e) => setEnd(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Planned sessions", "الجلسات المخططة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: sessions,
								onChange: (e) => setSessions(Number(e.target.value))
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: t(L("Goals", "الأهداف"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-3",
						children: [goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: t(L("Goal", "الهدف")),
									value: g.goal,
									onChange: (e) => setGoals((p) => p.map((x, j) => j === i ? {
										...x,
										goal: e.target.value
									} : x))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: t(L("Measurement criteria", "معيار القياس")),
									value: g.criteria,
									onChange: (e) => setGoals((p) => p.map((x, j) => j === i ? {
										...x,
										criteria: e.target.value
									} : x))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									"aria-label": t(L("Target date", "التاريخ المستهدف")),
									value: g.date,
									onChange: (e) => setGoals((p) => p.map((x, j) => j === i ? {
										...x,
										date: e.target.value
									} : x))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": t(L("Remove goal", "إزالة الهدف")),
									onClick: () => removeGoal(i),
									disabled: goals.length === 1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										className: "size-4",
										"aria-hidden": true
									})
								})
							]
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: addGoal,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-4",
									"aria-hidden": true
								}),
								" ",
								t(L("Add goal", "إضافة هدف"))
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Home exercises", "التمارين المنزلية"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Notes", "ملاحظات"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {})
				})
			]
		})
	});
}
function SoapModal({ open, onClose, planId, plans: planList, onSelectPlan, onSave }) {
	const { t } = useI18n();
	const [subjective, setSubjective] = (0, import_react.useState)("");
	const [objective, setObjective] = (0, import_react.useState)("");
	const [assessment, setAssessment] = (0, import_react.useState)("");
	const [plan, setPlan] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onClose,
		title: L("SOAP note quick entry", "إدخال سريع لملاحظة SOAP"),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => {
				onSave({
					subjective,
					objective,
					assessment,
					plan,
					date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
				});
				setSubjective("");
				setObjective("");
				setAssessment("");
				setPlan("");
			},
			children: t(L("Save note", "حفظ الملاحظة"))
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Plan", "الخطة"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						options: planList.map((p) => t(pat(p.patient).name)),
						value: planId != null ? t(pat(planList.find((p) => p.id === planId)?.patient ?? 0).name) : "",
						onChange: (e) => {
							const found = planList.find((p) => t(pat(p.patient).name) === e.target.value);
							if (found) onSelectPlan(found.id);
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Subjective", "الذاتي"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: subjective,
						onChange: (e) => setSubjective(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Objective", "الموضوعي"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: objective,
						onChange: (e) => setObjective(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Assessment", "التقييم"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: assessment,
						onChange: (e) => setAssessment(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Plan", "الخطة"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: plan,
						onChange: (e) => setPlan(e.target.value)
					})
				})
			]
		})
	});
}
var progressSeries = [
	{
		day: "Jan",
		visits: 42
	},
	{
		day: "Feb",
		visits: 48
	},
	{
		day: "Mar",
		visits: 55
	},
	{
		day: "Apr",
		visits: 61
	},
	{
		day: "May",
		visits: 68
	},
	{
		day: "Jun",
		visits: 74
	},
	{
		day: "Jul",
		visits: 79
	}
];
var domainScores = [
	{
		m: "Motor",
		revenue: 74
	},
	{
		m: "Speech",
		revenue: 68
	},
	{
		m: "Sensory",
		revenue: 81
	},
	{
		m: "Social",
		revenue: 62
	},
	{
		m: "Cognitive",
		revenue: 70
	}
];
var REPORT_DEFS = [
	{
		title: L("Initial assessment summary", "ملخص التقييم الأولي"),
		desc: L("Per-patient baseline report", "تقرير خط الأساس لكل مريض")
	},
	{
		title: L("Re-assessment comparison", "مقارنة إعادة التقييم"),
		desc: L("Baseline vs latest scores", "خط الأساس مقابل آخر الدرجات")
	},
	{
		title: L("Domain breakdown", "تفصيل المجالات"),
		desc: L("Scores by clinical domain", "الدرجات حسب المجال السريري")
	},
	{
		title: L("Specialist output", "إنتاجية الأخصائي"),
		desc: L("Assessments completed per specialist", "التقييمات المنجزة لكل أخصائي")
	},
	{
		title: L("Follow-up required", "بحاجة متابعة"),
		desc: L("Cases flagged for review", "الحالات المُعلّمة للمراجعة")
	},
	{
		title: L("Outcome trends", "اتجاهات النتائج"),
		desc: L("Score movement over time", "تغير الدرجات عبر الزمن")
	}
];
function AssessmentsModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("results");
	const [newOpen, setNewOpen] = (0, import_react.useState)(false);
	const [view, setView] = (0, import_react.useState)(null);
	const [items, setItems] = (0, import_react.useState)(assessments);
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [editDraft, setEditDraft] = (0, import_react.useState)(null);
	const [deleteIndex, setDeleteIndex] = (0, import_react.useState)(null);
	const [domains, setDomains] = (0, import_react.useState)([
		"Articulation clarity",
		"Receptive language",
		"Expressive language",
		"Oral motor control",
		"Social communication"
	]);
	const [templates, setTemplates] = (0, import_react.useState)([]);
	const [templateName, setTemplateName] = (0, import_react.useState)("Paediatric speech screening");
	const [templateSpecialty, setTemplateSpecialty] = (0, import_react.useState)(t(SPECIALTIES[0]));
	const [templateScoring, setTemplateScoring] = (0, import_react.useState)(t(L("Percentage", "نسبة مئوية")));
	const [runReport, setRunReport] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Assessments", "التقييمات"),
				description: L("Standardised assessment builder, results, progress tracking and reports", "منشئ التقييمات والنتائج وتتبع التقدم والتقارير"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => toast.push("success", L("Assessment report exported", "تم تصدير تقرير التقييم")),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "size-4",
						"aria-hidden": true
					}), t(L("Export", "تصدير"))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setNewOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "size-4",
						"aria-hidden": true
					}), t(L("New assessment", "تقييم جديد"))]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				value: tab,
				onChange: setTab,
				label: t(L("Assessment sections", "أقسام التقييم")),
				tabs: [
					{
						id: "results",
						label: L("Results", "النتائج"),
						count: items.length
					},
					{
						id: "builder",
						label: L("Builder", "المنشئ")
					},
					{
						id: "progress",
						label: L("Progress", "التقدم")
					},
					{
						id: "reports",
						label: L("Reports", "التقارير")
					}
				]
			}),
			tab === "results" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Assessment results", "نتائج التقييم"),
				rows: items,
				rowKey: (r, i) => `${r.patient}-${r.date}-${i}`,
				exportName: "rehlah-assessments",
				search: (r) => `${pat(r.patient).name.en} ${pat(r.patient).name.ar} ${r.date}`,
				searchPlaceholder: L("Search by patient or date", "بحث بالمريض أو التاريخ"),
				filters: [
					{
						id: "specialty",
						label: L("Specialty", "التخصص"),
						options: SPECIALTIES.map((s, i) => ({
							value: String(i),
							label: s
						})),
						match: (r, v) => String(r.specialty) === v
					},
					{
						id: "specialist",
						label: L("Specialist", "الأخصائي"),
						options: SPECIALISTS.map((s, i) => ({
							value: String(i),
							label: s
						})),
						match: (r, v) => String(r.specialist) === v
					},
					{
						id: "status",
						label: L("Status", "الحالة"),
						options: [
							{
								value: "Completed",
								label: L("Completed", "مكتمل")
							},
							{
								value: "Under review",
								label: L("Under review", "قيد المراجعة")
							},
							{
								value: "Needs follow-up",
								label: L("Needs follow-up", "يحتاج متابعة")
							}
						],
						match: (r, v) => r.status.en === v
					}
				],
				bulkActions: [{
					id: "export",
					label: L("Export selected", "تصدير المحدد"),
					tone: "outline"
				}, {
					id: "review",
					label: L("Mark reviewed", "تعليم كمراجَع"),
					tone: "primary"
				}],
				onBulkAction: (id, sel) => toast.push("success", id === "export" ? L(`${sel.length} assessments exported`, `تم تصدير ${sel.length} تقييم`) : L(`${sel.length} assessments marked reviewed`, `تم تعليم ${sel.length} تقييم كمراجَع`)),
				columns: [
					{
						id: "patient",
						header: L("Patient", "المريض"),
						sort: (r) => pat(r.patient).name.en,
						csv: (r) => pat(r.patient).name.en,
						cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: t(pat(r.patient).name)
						})
					},
					{
						id: "specialty",
						header: L("Specialty", "التخصص"),
						sort: (r) => spec(r.specialty).en,
						csv: (r) => spec(r.specialty).en,
						hideBelow: "md",
						cell: (r) => t(spec(r.specialty))
					},
					{
						id: "specialist",
						header: L("Specialist", "الأخصائي"),
						csv: (r) => doc(r.specialist).en,
						hideBelow: "lg",
						cell: (r) => t(doc(r.specialist))
					},
					{
						id: "date",
						header: L("Date", "التاريخ"),
						sort: (r) => r.date,
						csv: (r) => r.date,
						cell: (r) => r.date
					},
					{
						id: "score",
						header: L("Score", "الدرجة"),
						sort: (r) => r.score,
						csv: (r) => String(r.score),
						cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex w-32 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, {
								value: r.score,
								tone: r.score >= 70 ? "success" : r.score >= 50 ? "accent" : "danger"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tabular-nums",
								children: r.score
							})]
						})
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						sort: (r) => r.status.en,
						csv: (r) => r.status.en,
						cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: statusTone(r.status.en),
							children: t(r.status)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-end gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setView(i),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
										className: "size-4",
										"aria-hidden": true
									}), t(L("View", "عرض"))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									"aria-label": t(L("Edit", "تعديل")),
									onClick: () => {
										setEditIndex(i);
										setEditDraft({
											score: r.score,
											duration: r.duration,
											status: r.status.en
										});
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									"aria-label": t(L("Delete", "حذف")),
									onClick: () => setDeleteIndex(i),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
										className: "size-4",
										"aria-hidden": true
									})
								})
							]
						})
					}
				],
				emptyTitle: L("No assessments yet", "لا توجد تقييمات"),
				emptyDescription: L("Create the first assessment for this clinic.", "أنشئ أول تقييم في المركز."),
				emptyAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setNewOpen(true),
					children: t(L("New assessment", "تقييم جديد"))
				})
			}),
			tab === "builder" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[15px] font-semibold",
								children: t(L("Assessment template", "قالب التقييم"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Template name", "اسم القالب"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: templateName,
									onChange: (e) => setTemplateName(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Specialty", "التخصص"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									options: SPECIALTIES,
									value: templateSpecialty,
									onChange: (e) => setTemplateSpecialty(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Scoring method", "طريقة التقييم"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									options: [
										L("Percentage", "نسبة مئوية"),
										L("Likert 1–5", "ليكرت ١–٥"),
										L("Pass / fail", "نجاح / رسوب")
									],
									value: templateScoring,
									onChange: (e) => setTemplateScoring(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Instructions", "التعليمات"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: t(L("Complete each domain during the initial session.", "أكمل كل مجال خلال الجلسة الأولى.")) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => {
									if (templateName.trim().length < 3) {
										toast.push("error", L("Enter a template name", "أدخل اسم القالب"));
										return;
									}
									setTemplates((s) => [{
										name: templateName.trim(),
										specialty: templateSpecialty,
										scoring: templateScoring
									}, ...s]);
									toast.push("success", L("Template saved", "تم حفظ القالب"));
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
									className: "size-4",
									"aria-hidden": true
								}), t(L("Save template", "حفظ القالب"))]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[15px] font-semibold",
								children: t(L("Domains & items", "المجالات والبنود"))
							}),
							domains.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-3 rounded-2xl border border-border p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-8 place-items-center rounded-lg bg-tint-green text-xs font-bold text-[var(--primary-deep)]",
										children: i + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 truncate text-sm font-medium",
										children: t(L(d, d))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "neutral",
										children: t(L("Scored", "مُقيّم"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										"aria-label": t(L("Remove domain", "إزالة المجال")),
										onClick: () => setDomains((s) => s.filter((_, idx) => idx !== i)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "size-4",
											"aria-hidden": true
										})
									})
								]
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => {
									const n = domains.length + 1;
									setDomains((s) => [...s, L(`New domain ${n}`, `مجال جديد ${n}`).en]);
									toast.push("info", L("Domain added to template", "تمت إضافة مجال للقالب"));
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-4",
									"aria-hidden": true
								}), t(L("Add domain", "إضافة مجال"))]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[15px] font-semibold",
						children: t(L("Saved templates", "القوالب المحفوظة"))
					}), templates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t(L("No templates saved yet.", "لا توجد قوالب محفوظة بعد."))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: templates.map((tpl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-2xl border border-border p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate text-sm font-medium",
									children: tpl.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "info",
									children: tpl.specialty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "neutral",
									children: tpl.scoring
								})
							]
						}, i))
					})]
				})]
			}),
			tab === "progress" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
						title: L("Average score trend", "اتجاه متوسط الدرجات"),
						summary: "Line chart of average assessment scores per month",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
							data: progressSeries,
							x: "day",
							y: "visits"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
						title: L("Domain performance", "أداء المجالات"),
						summary: "Bar chart of average score by domain",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
							data: domainScores,
							x: "m",
							keys: ["revenue"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "space-y-4 lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[15px] font-semibold",
							children: t(L("Patient progress", "تقدم المرضى"))
						}), items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate font-medium",
									children: t(pat(a.patient).name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground tabular-nums",
									children: [a.score, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: a.score })]
						}, i))]
					})
				]
			}),
			tab === "reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
					children: REPORT_DEFS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: t(r.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: t(r.desc)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										setRunReport(i);
										toast.push("success", L("Report generated", "تم إنشاء التقرير"));
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
										className: "size-4",
										"aria-hidden": true
									}), t(L("Run", "تشغيل"))]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => {
										downloadCsv(`rehlah-${r.title.en.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, [
											t(L("Patient", "المريض")),
											t(L("Domain", "المجال")),
											t(L("Score", "الدرجة"))
										], items.map((a) => [
											t(pat(a.patient).name),
											t(spec(a.specialty)),
											a.score
										]));
										toast.push("success", L("Report exported as CSV", "تم تصدير التقرير CSV"));
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									}), "CSV"]
								})]
							})
						]
					}, i))
				}), runReport !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[15px] font-semibold",
							children: t(REPORT_DEFS[runReport].title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: printView,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
									className: "size-4",
									"aria-hidden": true
								}), t(L("Print", "طباعة"))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: () => downloadCsv("rehlah-assessment-report", [
									t(L("Patient", "المريض")),
									t(L("Specialty", "التخصص")),
									t(L("Score", "الدرجة")),
									t(L("Status", "الحالة"))
								], items.map((a) => [
									t(pat(a.patient).name),
									t(spec(a.specialty)),
									a.score,
									t(a.status)
								])),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "size-4",
									"aria-hidden": true
								}), t(L("Export CSV", "تصدير CSV"))]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
										className: "sr-only",
										children: t(REPORT_DEFS[runReport].title)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-muted/60 text-xs text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												className: "p-3 text-start",
												children: t(L("Patient", "المريض"))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												className: "p-3 text-start",
												children: t(L("Specialty", "التخصص"))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												className: "p-3 text-end",
												children: t(L("Score", "الدرجة"))
											})
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3",
												children: t(pat(a.patient).name)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3",
												children: t(spec(a.specialty))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-3 text-end tabular-nums",
												children: [a.score, "%"]
											})
										]
									}, i)) })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
							data: domainScores,
							x: "m",
							keys: ["revenue"]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: newOpen,
				onClose: () => setNewOpen(false),
				title: L("New assessment", "تقييم جديد"),
				subtitle: L("Record a standardised assessment result", "تسجيل نتيجة تقييم معياري"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setNewOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setItems((s) => [{
							patient: 0,
							specialty: 2,
							date: "20 Jul 2026",
							specialist: 0,
							score: 71,
							duration: "35 min",
							status: L("Under review", "قيد المراجعة")
						}, ...s]);
						setNewOpen(false);
						setTab("results");
						toast.push("success", L("Assessment saved and added to results", "تم حفظ التقييم وإضافته للنتائج"));
					},
					children: t(L("Save assessment", "حفظ التقييم"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Patient", "المريض"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Sara Al-Otaibi", "سارة العتيبي"), L("Yousef Al-Dossary", "يوسف الدوسري")] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialist", "الأخصائي"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALISTS })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Date", "التاريخ"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								defaultValue: "2026-07-20"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Score", "الدرجة"),
							hint: L("0 – 100", "٠ – ١٠٠"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								max: 100,
								defaultValue: 71
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Duration", "المدة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "35 min" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Clinical notes", "الملاحظات السريرية"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { placeholder: t(L("Observations, recommendations and next steps", "الملاحظات والتوصيات والخطوات التالية")) })
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: view !== null,
				onClose: () => setView(null),
				title: L("Assessment detail", "تفاصيل التقييم"),
				...view !== null ? { subtitle: pat(items[view].patient).name } : {},
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => toast.push("success", L("Assessment PDF downloaded", "تم تنزيل ملف التقييم")),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "size-4",
						"aria-hidden": true
					}), t(L("Download PDF", "تنزيل PDF"))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				})] }),
				children: view !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								{
									k: L("Patient", "المريض"),
									v: t(pat(items[view].patient).name)
								},
								{
									k: L("Specialty", "التخصص"),
									v: t(spec(items[view].specialty))
								},
								{
									k: L("Specialist", "الأخصائي"),
									v: t(doc(items[view].specialist))
								},
								{
									k: L("Date", "التاريخ"),
									v: items[view].date
								},
								{
									k: L("Duration", "المدة"),
									v: items[view].duration
								},
								{
									k: L("Overall score", "الدرجة الكلية"),
									v: `${items[view].score}%`
								}
							].map((kv, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: t(kv.k)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-sm font-semibold",
								children: kv.v
							})] }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-semibold",
								children: t(L("Domain scores", "درجات المجالات"))
							}), domainScores.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: d.m
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted-foreground",
										children: [d.revenue, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: d.revenue })]
							}, d.m))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
							A$1.print,
							A$1.pdf,
							A$1.send
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: editIndex !== null,
				onClose: () => {
					setEditIndex(null);
					setEditDraft(null);
				},
				title: L("Edit assessment", "تعديل التقييم"),
				...editIndex !== null ? { subtitle: pat(items[editIndex].patient).name } : {},
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						setEditIndex(null);
						setEditDraft(null);
					},
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (editIndex === null || !editDraft) return;
						setItems((s) => s.map((it, i) => i === editIndex ? {
							...it,
							score: editDraft.score,
							duration: editDraft.duration,
							status: L(editDraft.status, editDraft.status)
						} : it));
						setEditIndex(null);
						setEditDraft(null);
						toast.push("success", L("Assessment updated", "تم تحديث التقييم"));
					},
					children: t(L("Save changes", "حفظ التغييرات"))
				})] }),
				children: editIndex !== null && editDraft && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Score", "الدرجة"),
							hint: L("0 – 100", "٠ – ١٠٠"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								max: 100,
								value: editDraft.score,
								onChange: (e) => setEditDraft((d) => d ? {
									...d,
									score: Number(e.target.value)
								} : d)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Duration", "المدة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editDraft.duration,
								onChange: (e) => setEditDraft((d) => d ? {
									...d,
									duration: e.target.value
								} : d)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Status", "الحالة"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									options: [
										L("Completed", "مكتمل"),
										L("Under review", "قيد المراجعة"),
										L("Needs follow-up", "يحتاج متابعة")
									],
									value: editDraft.status,
									onChange: (e) => setEditDraft((d) => d ? {
										...d,
										status: e.target.value
									} : d)
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: deleteIndex !== null,
				onClose: () => setDeleteIndex(null),
				title: L("Delete assessment?", "حذف التقييم؟"),
				...deleteIndex !== null ? { subtitle: pat(items[deleteIndex].patient).name } : {},
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDeleteIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (deleteIndex === null) return;
						setItems((s) => s.filter((_, i) => i !== deleteIndex));
						setDeleteIndex(null);
						toast.push("success", L("Assessment deleted", "تم حذف التقييم"));
					},
					children: t(L("Delete", "حذف"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove the assessment result. This action cannot be undone.", "سيؤدي هذا إلى حذف نتيجة التقييم نهائياً. لا يمكن التراجع عن هذا الإجراء."))
				})
			})
		]
	});
}
function Metric({ label, value, sub, delta, icon, spark, onClick }) {
	const { t } = useI18n();
	const up = (delta ?? 0) >= 0;
	const points = spark ?? [];
	const max = Math.max(...points, 1);
	const min = Math.min(...points, 0);
	const path = points.map((p, i) => {
		const x = i / Math.max(points.length - 1, 1) * 100;
		const y = 30 - (p - min) / Math.max(max - min, 1) * 26;
		return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(onClick ? "button" : "div", {
		...onClick ? {
			onClick,
			type: "button"
		} : {},
		className: cn("group card-surface relative overflow-hidden p-5 text-start", onClick && "rise cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium text-balance text-muted-foreground",
							children: t(label)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[28px] leading-none font-bold tracking-tight",
							children: value
						}),
						sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: t(sub)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 shrink-0 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]",
					children: icon
				})]
			}),
			typeof delta === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: up ? "success" : "danger",
					children: [
						up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
							className: "size-3",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, {
							className: "size-3",
							"aria-hidden": true
						}),
						up ? "+" : "",
						delta,
						"%"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: t(L("vs last period", "مقارنة بالفترة السابقة"))
				})]
			}),
			points.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 100 32",
				preserveAspectRatio: "none",
				className: "mt-3 h-8 w-full",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: path,
					fill: "none",
					stroke: "var(--primary)",
					strokeWidth: "2",
					strokeLinecap: "round"
				})
			})
		]
	});
}
function ExecutiveDashboard({ onNavigate }) {
	const { t } = useI18n();
	const toast = useToast();
	const [quickOpen, setQuickOpen] = (0, import_react.useState)(false);
	const [period, setPeriod] = (0, import_react.useState)(0);
	const pendingTotal = invoices.filter((i) => i.paid < i.total).reduce((s, i) => s + (i.total - i.paid), 0);
	const periodDays = [
		30,
		1,
		7,
		90
	][period] ?? 30;
	const periodMonths = periodDays >= 90 ? 7 : periodDays >= 30 ? 3 : 1;
	const visitSeries = visits30.slice(-Math.min(periodDays, visits30.length));
	const revenueSeries = revenueMonthly.slice(-periodMonths);
	const spark = visitSeries.slice(-12).map((v) => v.visits);
	const sessionsInPeriod = visitSeries.reduce((s, v) => s + v.visits, 0);
	const revenueInPeriod = revenueSeries.reduce((s, r) => s + r.revenue, 0);
	const scale = Math.min(periodDays / 30, 3);
	const scaled = (base) => Math.max(1, Math.round(base * scale)).toLocaleString();
	const exportDashboard = () => {
		downloadCsv("rehlah-dashboard", ["Metric", "Value"], [
			["Sessions delivered", sessionsInPeriod],
			["Revenue (K SAR)", revenueInPeriod],
			["Active cases", scaled(412)],
			["Upcoming appointments", scaled(96)],
			["Pending payments (SAR)", pendingTotal],
			...visitSeries.map((v) => [`Day ${v.day} sessions`, v.visits])
		]);
		toast.push("success", L("Dashboard exported as CSV", "تم تصدير اللوحة كملف CSV"));
	};
	const insights = [
		{
			title: L("3 invoices overdue > 7 days", "٣ فواتير متأخرة أكثر من ٧ أيام"),
			body: L("Send a payment reminder to guardians.", "أرسل تذكير دفع لأولياء الأمور."),
			tone: "warning",
			go: "invoices"
		},
		{
			title: L("Goal achievement up 4.5%", "ارتفاع تحقيق الأهداف ٤.٥٪"),
			body: L("Speech therapy leads improvement this month.", "علاج النطق يتصدر التحسن هذا الشهر."),
			tone: "success",
			go: "plans"
		},
		{
			title: L("2 consents expire this week", "موافقتان تنتهيان هذا الأسبوع"),
			body: L("Renew before the next session.", "جدّدها قبل الجلسة القادمة."),
			tone: "info",
			go: "consents"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Executive overview", "النظرة التنفيذية"),
				description: L("Clinic performance, clinical activity and financial health", "أداء المركز والنشاط السريري والوضع المالي"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						"aria-label": t(L("Period filter", "تصفية الفترة")),
						className: "w-36",
						value: void 0,
						onChange: (e) => setPeriod(e.target.selectedIndex),
						options: [
							L("This month", "هذا الشهر"),
							L("Today", "اليوم"),
							L("This week", "هذا الأسبوع"),
							L("This quarter", "هذا الربع")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: exportDashboard,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), t(L("Export", "تصدير"))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: printView,
						children: t(L("Print", "طباعة"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setQuickOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}), t(L("Quick action", "إجراء سريع"))]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Total patients", "إجمالي المرضى"),
						value: "1,284",
						delta: 6.2,
						spark,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("registry")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Active cases", "الحالات النشطة"),
						value: scaled(412),
						delta: 3.1,
						sub: L("Across 5 specialties", "عبر ٥ تخصصات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("registry")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Upcoming appointments", "المواعيد القادمة"),
						value: scaled(96),
						delta: 8.4,
						sub: L("Next 7 days", "خلال ٧ أيام"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("scheduling")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Revenue this month", "إيراد الشهر"),
						value: `${revenueInPeriod}K SAR`,
						delta: 6.5,
						spark: revenueSeries.map((r) => r.revenue),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("invoices")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Treatment plans", "الخطط العلاجية"),
						value: String(treatmentPlans.length * 46),
						sub: L("Average progress 70%", "متوسط التقدم ٧٠٪"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("plans")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Assessments", "التقييمات"),
						value: String(assessments.length * 32),
						delta: 2.4,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("assessments")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Pending payments", "المدفوعات المعلقة"),
						value: `${pendingTotal.toLocaleString()} SAR`,
						sub: L("Across unpaid invoices", "على الفواتير غير المسددة"),
						delta: -2.3,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("invoices")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: L("Unread notifications", "إشعارات غير مقروءة"),
						value: String(notifications.filter((n) => n.unread).length),
						sub: L("Reminders and alerts", "التذكيرات والتنبيهات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-5",
							"aria-hidden": true
						}),
						onClick: () => onNavigate?.("notifications")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L(`Sessions delivered (${visitSeries.length} days)`, `الجلسات المنفذة (${visitSeries.length} يوماً)`),
					subtitle: L("Daily attended sessions across all specialties", "الجلسات اليومية لكل التخصصات"),
					summary: "Line chart of sessions delivered per day over the last 30 days",
					height: 280,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
						data: visitSeries,
						x: "day",
						y: "visits"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Specialty mix", "توزيع التخصصات"),
					summary: "Donut chart of session distribution by specialty",
					height: 280,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { data: specialtyDistribution })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Monthly revenue (K SAR)", "الإيراد الشهري (ألف ريال)"),
					summary: "Bar chart of monthly revenue in thousands of Saudi riyals",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
						data: revenueSeries,
						x: "m",
						keys: ["revenue"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Attendance mix", "توزيع الحضور"),
					summary: "Donut chart of attendance outcomes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { data: attendanceStatus })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[15px] font-semibold",
							children: t(L("Actionable insights", "رؤى قابلة للتنفيذ"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							children: insights.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: insights.map((i, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNavigate?.(i.go),
							className: "grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-4 text-start transition-colors hover:bg-tint-green/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: i.tone === "warning" ? "warning" : i.tone === "success" ? "success" : "info",
										children: t(i.tone === "warning" ? L("Action", "إجراء") : i.tone === "success" ? L("Positive", "إيجابي") : L("Reminder", "تذكير"))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate text-sm font-semibold",
										children: t(i.title)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: t(i.body)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4 shrink-0 text-muted-foreground rtl:-scale-x-100",
								"aria-hidden": true
							})]
						}) }, k))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[15px] font-semibold",
							children: t(L("Staff activity", "نشاط الفريق"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => onNavigate?.("administration"),
							children: t(L("Manage users", "إدارة المستخدمين"))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							{
								n: 0,
								load: 92,
								sessions: 7
							},
							{
								n: 1,
								load: 78,
								sessions: 6
							},
							{
								n: 2,
								load: 64,
								sessions: 5
							},
							{
								n: 3,
								load: 45,
								sessions: 3
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate font-medium",
									children: t(doc(s.n))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 text-xs text-muted-foreground tabular-nums",
									children: [
										s.sessions,
										" ",
										t(L("sessions", "جلسة")),
										" · ",
										s.load,
										"%"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, {
								value: s.load,
								tone: s.load > 85 ? "accent" : "primary"
							})]
						}, s.n))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[15px] font-semibold",
						children: t(L("Today's schedule", "جدول اليوم"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => onNavigate?.("calendar"),
						children: t(L("Open calendar", "فتح التقويم"))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 md:grid-cols-2",
					children: appointments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-xl bg-tint-green px-2.5 py-1 text-sm font-semibold text-[var(--primary-deep)] tabular-nums",
								children: a.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-medium",
									children: t(pat(a.patient).name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-xs text-muted-foreground",
									children: [
										t(a.type),
										" · ",
										t(spec(a.specialty))
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: statusTone(a.status.en),
								children: t(a.status)
							})
						]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: quickOpen,
				onClose: () => setQuickOpen(false),
				title: L("Quick action", "إجراء سريع"),
				subtitle: L("Jump straight into a common workflow", "انتقل مباشرة إلى إجراء شائع"),
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: [
						{
							id: "registry",
							label: L("Register new patient", "تسجيل مريض جديد")
						},
						{
							id: "scheduling",
							label: L("Book an appointment", "حجز موعد")
						},
						{
							id: "invoices",
							label: L("Create invoice", "إنشاء فاتورة")
						},
						{
							id: "sickleave",
							label: L("Issue sick leave", "إصدار إجازة مرضية")
						},
						{
							id: "reports",
							label: L("Run a report", "تشغيل تقرير")
						}
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setQuickOpen(false);
							onNavigate?.(a.id);
						},
						className: "rounded-xl border border-border px-4 py-3 text-start text-sm font-medium transition-colors hover:bg-tint-green/70 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
						children: t(a.label)
					}, a.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: patients.length
			})
		]
	});
}
function Switch({ label, defaultChecked }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 truncate text-sm",
			children: t(label)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			defaultChecked,
			className: "size-5 shrink-0 accent-[var(--primary)]"
		})]
	});
}
var FIELD_TYPES = [
	{
		label: L("Short text", "نص قصير"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Long text", "نص طويل"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Number / score", "رقم / درجة"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Single choice", "اختيار واحد"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Multiple choice", "اختيار متعدد"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Yes / No", "نعم / لا"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleLeft, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Date", "تاريخ"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("File upload", "رفع ملف"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, {
			className: "size-4",
			"aria-hidden": true
		})
	},
	{
		label: L("Signature", "توقيع"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
			className: "size-4",
			"aria-hidden": true
		})
	}
];
function FormBuilderModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("builder");
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [formName, setFormName] = (0, import_react.useState)(t(L("Initial assessment form", "نموذج التقييم المبدئي")));
	const [fields, setFields] = (0, import_react.useState)([
		{
			label: t(L("Patient main complaint", "الشكوى الرئيسية للمريض")),
			type: t(L("Long text", "نص طويل")),
			required: true,
			help: "",
			validation: t(L("None", "بدون"))
		},
		{
			label: t(L("Pain level (0-10)", "مستوى الألم (٠-١٠)")),
			type: t(L("Number / score", "رقم / درجة")),
			required: true,
			help: "",
			validation: t(L("None", "بدون"))
		},
		{
			label: t(L("Onset date", "تاريخ البدء")),
			type: t(L("Date", "تاريخ")),
			required: false,
			help: "",
			validation: t(L("None", "بدون"))
		},
		{
			label: t(L("Previous treatment?", "علاج سابق؟")),
			type: t(L("Yes / No", "نعم / لا")),
			required: false,
			help: "",
			validation: t(L("None", "بدون"))
		},
		{
			label: t(L("Guardian signature", "توقيع ولي الأمر")),
			type: t(L("Signature", "توقيع")),
			required: true,
			help: "",
			validation: t(L("None", "بدون"))
		}
	]);
	const library = useCollection(SPECIALTIES.concat(SPECIALTIES.slice(0, 1)).map((s, i) => ({
		name: t(L("Assessment form", "نموذج تقييم")),
		specialty: t(s),
		status: i % 2 ? "Draft" : "Published",
		fields: 14,
		responses: 32
	})));
	const [published, setPublished] = (0, import_react.useState)(false);
	const [responseSearch, setResponseSearch] = (0, import_react.useState)("");
	const patch = (i, patch) => setFields((p) => p.map((f, idx) => idx === i ? {
		...f,
		...patch
	} : f));
	const addField = (typeLabel) => {
		setFields((p) => {
			const next = [...p, {
				label: t(L("New field", "حقل جديد")),
				type: t(typeLabel),
				required: false,
				help: "",
				validation: t(L("None", "بدون"))
			}];
			setSelected(next.length - 1);
			return next;
		});
	};
	const deleteField = (i) => {
		setFields((p) => p.filter((_, idx) => idx !== i));
		setSelected((s) => Math.max(0, s - (s >= i ? 1 : 0)));
	};
	const publish = () => {
		setPublished(true);
		library.add({
			name: formName,
			specialty: t(L("General", "عام")),
			status: "Published",
			fields: fields.length,
			responses: 0
		});
		toast.push("success", L("Form published", "تم نشر النموذج"));
	};
	const responseRows = patients.slice(0, 6).map((p, i) => ({
		patient: t(p.name),
		form: t(L("Initial assessment", "التقييم المبدئي")),
		specialist: t(doc(i % 4)),
		date: "10 Jul 2026",
		status: i % 3 === 0 ? L("Pending review", "بانتظار المراجعة") : L("Completed", "مكتمل")
	}));
	const filteredResponses = responseRows.filter((r) => matches(responseSearch, r.patient, r.form, r.specialist));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Form Builder", "منشئ النماذج"),
				description: L("Design assessment forms without writing code", "صمم نماذج التقييم دون كتابة أي كود"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setPreviewOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Preview", "معاينة"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: publish,
					children: published ? t(L("Published", "منشور")) : t(L("Publish form", "نشر النموذج"))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Form builder tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "builder",
						label: L("Builder", "المنشئ")
					},
					{
						id: "library",
						label: L("Form library", "مكتبة النماذج"),
						count: library.items.length
					},
					{
						id: "responses",
						label: L("Responses", "الردود"),
						count: responseRows.length
					},
					{
						id: "settings",
						label: L("Settings", "الإعدادات")
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft",
				children: [
					tab === "builder" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 xl:grid-cols-[220px_minmax(0,1fr)_300px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "h-fit",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Field types", "أنواع الحقول") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2",
									children: FIELD_TYPES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => addField(f.label),
										className: "tap-target flex w-full items-center gap-2 rounded-xl border border-border px-3 text-start text-sm transition-colors hover:bg-tint-green",
										children: [f.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: t(f.label)
										})]
									}) }, i))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								title: formName,
								subtitle: L("Click a field type to add it, then edit its properties", "انقر على نوع حقل لإضافته، ثم عدّل خصائصه")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3",
								children: [fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelected(i),
									className: ["grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-4 text-start transition-colors", selected === i ? "border-primary bg-tint-green" : "border-border hover:bg-muted"].join(" "),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {
											className: "size-4 shrink-0 text-muted-foreground",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-sm font-medium",
												children: f.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-xs text-muted-foreground",
												children: f.type
											})]
										}),
										f.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "warning",
											children: t(L("Required", "مطلوب"))
										})
									]
								}) }, i)), fields.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
									title: L("No fields yet", "لا توجد حقول بعد"),
									description: L("Add a field from the palette on the left", "أضف حقلاً من اللوحة على اليسار")
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "h-fit",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Field properties", "خصائص الحقل") }), fields[selected] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: L("Label", "التسمية"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: fields[selected].label,
												onChange: (e) => patch(selected, { label: e.target.value })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: L("Help text", "نص المساعدة"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: fields[selected].help,
												onChange: (e) => patch(selected, { help: e.target.value })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: L("Validation", "التحقق"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
												options: [
													L("None", "بدون"),
													L("Required", "مطلوب"),
													L("Range 0–10", "المدى ٠–١٠")
												],
												value: fields[selected].validation,
												onChange: (e) => {
													const opts = [
														t(L("None", "بدون")),
														t(L("Required", "مطلوب")),
														t(L("Range 0–10", "المدى ٠–١٠"))
													];
													const v = opts[e.target.selectedIndex] ?? opts[0];
													patch(selected, {
														validation: v,
														required: v === opts[1] || fields[selected].required
													});
												}
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											label: L("Show in patient portal", "إظهار في بوابة المريض"),
											defaultChecked: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { label: L("Include in printed report", "تضمين في التقرير المطبوع") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "danger",
											size: "sm",
											onClick: () => deleteField(selected),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
													className: "size-4",
													"aria-hidden": true
												}),
												" ",
												t(L("Delete field", "حذف الحقل"))
											]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: t(L("No field selected", "لم يتم اختيار حقل"))
								})]
							})
						]
					}),
					tab === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: library.items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							interactive: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[minmax(0,1fr)_auto] gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-semibold",
										children: f.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: f.status === "Draft" ? "neutral" : "success",
										children: t(f.status === "Draft" ? L("Draft", "مسودة") : L("Published", "منشور"))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 truncate text-xs text-muted-foreground",
									children: f.specialty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: [
										f.fields,
										" ",
										t(L("fields", "حقلاً")),
										" · ",
										f.responses,
										" ",
										t(L("responses", "رداً"))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										className: "flex-1",
										onClick: () => {
											setFormName(f.name);
											setTab("builder");
											toast.push("info", L("Form opened", "تم فتح النموذج"));
										},
										children: t(L("Open", "فتح"))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "flex-1",
										onClick: () => {
											library.add({
												...f,
												name: `${f.name} (${t(L("copy", "نسخة"))})`,
												status: "Draft"
											});
											toast.push("success", L("Form duplicated", "تم نسخ النموذج"));
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
												className: "size-4",
												"aria-hidden": true
											}),
											" ",
											t(L("Duplicate", "نسخ"))
										]
									})]
								})
							]
						}, i))
					}),
					tab === "responses" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							placeholder: L("Search responses", "بحث في الردود"),
							value: responseSearch,
							onChange: (e) => setResponseSearch(e.target.value)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => downloadCsv("rehlah-form-responses", [
								"Patient",
								"Form",
								"Specialist",
								"Submitted",
								"Status"
							], filteredResponses.map((r) => [
								r.patient,
								r.form,
								r.specialist,
								r.date,
								t(r.status)
							])),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "size-4",
									"aria-hidden": true
								}),
								" ",
								t(L("Export", "تصدير"))
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							caption: L("Form responses", "ردود النماذج"),
							columns: [
								L("Patient", "المريض"),
								L("Form", "النموذج"),
								L("Specialist", "الأخصائي"),
								L("Submitted", "تاريخ الإرسال"),
								L("Status", "الحالة"),
								L("Actions", "إجراءات")
							],
							rows: filteredResponses.map((r) => [
								r.patient,
								r.form,
								r.specialist,
								r.date,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: r.status === responseRows[0].status && r.status !== L("Completed", "مكتمل") ? "warning" : "success",
									children: t(r.status)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
									A$1.view,
									A$1.print,
									A$1.down
								] })
							])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: filteredResponses.length })
					] }),
					tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Form settings", "إعدادات النموذج") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Form name", "اسم النموذج"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: formName,
										onChange: (e) => setFormName(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Assign to specialty", "ربط بالتخصص"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Allow patient self-completion", "السماح للمريض بالتعبئة"),
									defaultChecked: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Require specialist signature", "اشتراط توقيع الأخصائي"),
									defaultChecked: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Auto-attach to patient file", "إرفاق تلقائي بملف المريض"),
									defaultChecked: true
								})
							]
						})]
					})
				]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: previewOpen,
				onClose: () => setPreviewOpen(false),
				title: L("Form preview", "معاينة النموذج"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setPreviewOpen(false),
					children: t(L("Close preview", "إغلاق المعاينة"))
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: f.label,
						required: f.required,
						children: f.type === t(L("Signature", "توقيع")) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-24 place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground",
							children: t(L("Sign here", "وقّع هنا"))
						}) : f.type === t(L("Long text", "نص طويل")) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { rows: 3 }) : f.type === t(L("Date", "تاريخ")) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" }) : f.type === t(L("Number / score", "رقم / درجة")) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "number" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {})
					}, i))
				})
			})
		]
	});
}
function emptyReferralForm() {
	return {
		patient: "",
		type: "Internal",
		specialty: 0,
		specialist: 0,
		priority: 0,
		date: "",
		reason: "",
		attachment: ""
	};
}
function ReferralsModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("incoming");
	const [search, setSearch] = (0, import_react.useState)("");
	const [specialtyFilter, setSpecialtyFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [newOpen, setNewOpen] = (0, import_react.useState)(false);
	const [detailIndex, setDetailIndex] = (0, import_react.useState)(null);
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [deleteIndex, setDeleteIndex] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptyReferralForm());
	const fileRef = (0, import_react.useRef)(null);
	const collection = useCollection(patients.slice(0, 9).map((p, i) => ({
		patient: t(p.name),
		from: i % 3 === 0 ? t(L("Al-Noor Medical Center", "مركز النور الطبي")) : t(doc(i % 4)),
		to: i % 3 === 0 ? t(doc(i % 4)) : t(L("King Fahad Hospital", "مستشفى الملك فهد")),
		specialty: t(spec(i % SPECIALTIES.length)),
		reason: t(L("Speech assessment", "تقييم النطق")),
		date: "08 Jul 2026",
		priority: t(i % 3 === 0 ? L("Urgent", "عاجلة") : i % 3 === 1 ? L("High", "مرتفعة") : L("Routine", "روتينية")),
		status: t(i % 2 ? L("Accepted", "مقبولة") : L("Pending", "قيد الانتظار")),
		kind: i % 3 === 0 ? "internal" : i % 2 === 0 ? "outgoing" : "incoming",
		attachment: ""
	})));
	const filtered = collection.items.map((r, i) => ({
		r,
		i
	})).filter(({ r }) => r.kind === tab && matches(search, r.patient, r.from, r.to, r.reason) && passes(specialtyFilter, r.specialty) && passes(statusFilter, r.status));
	const specialtyOptions = ["all", ...SPECIALTIES.map((s) => t(s))];
	const statusOptions = [
		"all",
		t(L("Pending", "قيد الانتظار")),
		t(L("Accepted", "مقبولة")),
		t(L("Rejected", "مرفوضة"))
	];
	const openEdit = (i) => {
		const r = collection.items[i];
		setForm({
			patient: r.patient,
			type: r.kind === "internal" ? "Internal" : "External",
			specialty: Math.max(0, SPECIALTIES.findIndex((s) => t(s) === r.specialty)),
			specialist: 0,
			priority: Math.max(0, [
				t(L("Routine", "روتينية")),
				t(L("High", "مرتفعة")),
				t(L("Urgent", "عاجلة"))
			].indexOf(r.priority)),
			date: "",
			reason: r.reason,
			attachment: r.attachment
		});
		setEditIndex(i);
		setNewOpen(true);
	};
	const submit = () => {
		if (!form.patient.trim() || !form.reason.trim()) {
			toast.push("error", L("Patient and reason are required", "المريض والسبب مطلوبان"));
			return;
		}
		const priorityLabels = [
			L("Routine", "روتينية"),
			L("High", "مرتفعة"),
			L("Urgent", "عاجلة")
		];
		const payload = {
			patient: form.patient,
			from: t(L("Rehlah Center", "مركز رحلة")),
			to: t(SPECIALISTS[form.specialist] ?? SPECIALISTS[0]),
			specialty: t(SPECIALTIES[form.specialty] ?? SPECIALTIES[0]),
			reason: form.reason,
			date: form.date || "—",
			priority: t(priorityLabels[form.priority] ?? priorityLabels[0]),
			status: t(L("Pending", "قيد الانتظار")),
			kind: form.type === "Internal" ? "internal" : "outgoing",
			attachment: form.attachment
		};
		if (editIndex !== null) {
			collection.update(editIndex, payload);
			toast.push("success", L("Referral updated", "تم تحديث الإحالة"));
		} else {
			collection.add(payload);
			toast.push("success", L("Referral sent", "تم إرسال الإحالة"));
		}
		setNewOpen(false);
		setEditIndex(null);
		setForm(emptyReferralForm());
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Referrals", "الإحالات"),
				description: L("Internal and external patient referrals", "الإحالات الداخلية والخارجية للمرضى"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => downloadCsv("rehlah-referrals", [
						"Patient",
						"From",
						"To",
						"Specialty",
						"Reason",
						"Date",
						"Priority",
						"Status"
					], filtered.map(({ r }) => [
						r.patient,
						r.from,
						r.to,
						r.specialty,
						r.reason,
						r.date,
						r.priority,
						r.status
					])),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Export", "تصدير"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						setForm(emptyReferralForm());
						setEditIndex(null);
						setNewOpen(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("New referral", "إحالة جديدة"))
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Incoming", "واردة"),
						value: String(collection.items.filter((r) => r.kind === "incoming").length),
						tint: "blue",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Outgoing", "صادرة"),
						value: String(collection.items.filter((r) => r.kind === "outgoing").length),
						tint: "purple",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Accepted", "مقبولة"),
						value: String(collection.items.filter((r) => r.status === t(L("Accepted", "مقبولة"))).length),
						tint: "green",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Awaiting response", "بانتظار الرد"),
						value: String(collection.items.filter((r) => r.status === t(L("Pending", "قيد الانتظار"))).length),
						tint: "yellow",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
							className: "size-5",
							"aria-hidden": true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					placeholder: L("Search referrals", "بحث في الإحالات"),
					value: search,
					onChange: (e) => setSearch(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-40",
					options: [L("All specialties", "كل التخصصات"), ...SPECIALTIES],
					onChange: (e) => setSpecialtyFilter(specialtyOptions[e.target.selectedIndex] ?? "all")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-36",
					options: [
						L("All statuses", "كل الحالات"),
						L("Pending", "قيد الانتظار"),
						L("Accepted", "مقبولة"),
						L("Rejected", "مرفوضة")
					],
					onChange: (e) => setStatusFilter(statusOptions[e.target.selectedIndex] ?? "all")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Referral tabs",
				value: tab,
				onChange: (id) => setTab(id),
				tabs: [
					{
						id: "incoming",
						label: L("Incoming", "الواردة"),
						count: collection.items.filter((r) => r.kind === "incoming").length
					},
					{
						id: "outgoing",
						label: L("Outgoing", "الصادرة"),
						count: collection.items.filter((r) => r.kind === "outgoing").length
					},
					{
						id: "internal",
						label: L("Internal", "الداخلية"),
						count: collection.items.filter((r) => r.kind === "internal").length
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-4",
				children: [filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: L("No referrals found", "لا توجد إحالات"),
					description: L("Try adjusting your filters", "حاول تعديل عوامل التصفية")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
					caption: L("Referrals", "الإحالات"),
					columns: [
						L("Patient", "المريض"),
						L("From", "من"),
						L("To", "إلى"),
						L("Reason", "السبب"),
						L("Date", "التاريخ"),
						L("Priority", "الأولوية"),
						L("Status", "الحالة"),
						L("Actions", "إجراءات")
					],
					rows: filtered.map(({ r, i }) => [
						r.patient,
						r.from,
						r.to,
						r.reason,
						r.date,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: r.priority === t(L("Urgent", "عاجلة")) ? "danger" : r.priority === t(L("High", "مرتفعة")) ? "warning" : "neutral",
							children: r.priority
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: statusTone(r.status === t(L("Accepted", "مقبولة")) ? "Accepted" : r.status === t(L("Rejected", "مرفوضة")) ? "Cancelled" : "Pending"),
							children: r.status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
							{
								...A$1.view,
								onClick: () => setDetailIndex(i)
							},
							{
								...A$1.edit,
								onClick: () => openEdit(i)
							},
							{
								...A$1.del,
								onClick: () => setDeleteIndex(i)
							}
						] })
					])
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: filtered.length })]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: newOpen,
				onClose: () => {
					setNewOpen(false);
					setEditIndex(null);
				},
				title: editIndex !== null ? L("Edit referral", "تعديل الإحالة") : L("New referral", "إحالة جديدة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						setNewOpen(false);
						setEditIndex(null);
					},
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: submit,
					children: editIndex !== null ? t(L("Save changes", "حفظ التغييرات")) : t(L("Send referral", "إرسال الإحالة"))
				})] }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileRef,
					type: "file",
					className: "hidden",
					"aria-hidden": true,
					tabIndex: -1,
					onChange: (e) => {
						const file = e.target.files?.[0];
						if (file) setForm((p) => ({
							...p,
							attachment: file.name
						}));
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Patient", "المريض"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: t(L("Search patient…", "ابحث عن مريض…")),
								value: form.patient,
								onChange: (e) => setForm((p) => ({
									...p,
									patient: e.target.value
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Referral type", "نوع الإحالة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: [L("Internal", "داخلية"), L("External", "خارجية")],
								value: form.type,
								onChange: (e) => setForm((p) => ({
									...p,
									type: e.target.selectedIndex === 0 ? "Internal" : "External"
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Refer to specialty", "إحالة إلى تخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: SPECIALTIES,
								onChange: (e) => setForm((p) => ({
									...p,
									specialty: e.target.selectedIndex
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialist / facility", "الأخصائي / المنشأة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: SPECIALISTS,
								onChange: (e) => setForm((p) => ({
									...p,
									specialist: e.target.selectedIndex
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Priority", "الأولوية"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: [
									L("Routine", "روتينية"),
									L("High", "مرتفعة"),
									L("Urgent", "عاجلة")
								],
								onChange: (e) => setForm((p) => ({
									...p,
									priority: e.target.selectedIndex
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Preferred date", "التاريخ المفضل"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: form.date,
								onChange: (e) => setForm((p) => ({
									...p,
									date: e.target.value
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Clinical reason", "السبب السريري"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: form.reason,
									onChange: (e) => setForm((p) => ({
										...p,
										reason: e.target.value
									}))
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Attachments", "المرفقات"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => fileRef.current?.click(),
									className: "grid h-24 w-full place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
												className: "size-4",
												"aria-hidden": true
											}),
											" ",
											form.attachment || t(L("Attach reports or images", "أرفق تقارير أو صوراً"))
										]
									})
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: detailIndex !== null,
				onClose: () => setDetailIndex(null),
				title: L("Referral details", "تفاصيل الإحالة"),
				footer: detailIndex !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						collection.update(detailIndex, { status: t(L("Rejected", "مرفوضة")) });
						toast.push("success", L("Referral rejected", "تم رفض الإحالة"));
						setDetailIndex(null);
					},
					children: t(L("Reject", "رفض"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						collection.update(detailIndex, { status: t(L("Accepted", "مقبولة")) });
						toast.push("success", L("Referral accepted", "تم قبول الإحالة"));
						setDetailIndex(null);
					},
					children: t(L("Accept & schedule", "قبول وجدولة"))
				})] }) : null,
				children: detailIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
					{
						k: L("Patient", "المريض"),
						v: collection.items[detailIndex].patient
					},
					{
						k: L("Referring party", "الجهة المحيلة"),
						v: collection.items[detailIndex].from
					},
					{
						k: L("Specialty", "التخصص"),
						v: collection.items[detailIndex].specialty
					},
					{
						k: L("Priority", "الأولوية"),
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "danger",
							children: collection.items[detailIndex].priority
						})
					},
					{
						k: L("Reason", "السبب"),
						v: collection.items[detailIndex].reason
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: deleteIndex !== null,
				onClose: () => setDeleteIndex(null),
				size: "sm",
				title: L("Delete referral", "حذف الإحالة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDeleteIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (deleteIndex === null) return;
						collection.remove(deleteIndex);
						setDeleteIndex(null);
						toast.push("success", L("Referral deleted", "تم حذف الإحالة"));
					},
					children: t(L("Delete permanently", "حذف نهائي"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove this referral.", "سيؤدي هذا إلى حذف هذه الإحالة نهائياً."))
				})
			})
		]
	});
}
function DocumentsModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("documents");
	const [uploadOpen, setUploadOpen] = (0, import_react.useState)(false);
	const [view, setView] = (0, import_react.useState)("grid");
	const [search, setSearch] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [patientFilter, setPatientFilter] = (0, import_react.useState)("all");
	const [previewIndex, setPreviewIndex] = (0, import_react.useState)(null);
	const [deleteIndex, setDeleteIndex] = (0, import_react.useState)(null);
	const [transferIndex, setTransferIndex] = (0, import_react.useState)(null);
	const [uploadPatient, setUploadPatient] = (0, import_react.useState)(0);
	const [uploadCategory, setUploadCategory] = (0, import_react.useState)(0);
	const [uploadDesc, setUploadDesc] = (0, import_react.useState)("");
	const [uploadFileName, setUploadFileName] = (0, import_react.useState)("");
	const [transferFacility, setTransferFacility] = (0, import_react.useState)("");
	const [transferNotes, setTransferNotes] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	const collection = useCollection(documents.map((d) => ({
		name: t(d.name),
		type: t(d.type),
		patient: t(pat(d.patient).name),
		date: d.date,
		size: d.size,
		by: t(d.by)
	})));
	const transfers = useCollection([]);
	const categoryOptions = [
		"all",
		t(L("Medical reports", "تقارير طبية")),
		t(L("Assessments", "تقييمات")),
		t(L("Consents", "موافقات")),
		t(L("Invoices", "فواتير")),
		t(L("Identity", "هوية"))
	];
	const patientOptions = ["all", ...patients.slice(0, 4).map((p) => t(p.name))];
	const filtered = collection.items.map((d, i) => ({
		d,
		i
	})).filter(({ d }) => matches(search, d.name, d.patient) && passes(categoryFilter, d.type) && passes(patientFilter, d.patient));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				className: "hidden",
				"aria-hidden": true,
				tabIndex: -1,
				onChange: (e) => {
					const file = e.target.files?.[0];
					if (file) setUploadFileName(file.name);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Documents", "المستندات"),
				description: L("Central archive for patient and clinic files", "أرشيف مركزي لملفات المرضى والمركز"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => downloadCsv("rehlah-documents", [
						"Name",
						"Patient",
						"Category",
						"Uploaded by",
						"Date",
						"Size"
					], filtered.map(({ d }) => [
						d.name,
						d.patient,
						d.type,
						d.by,
						d.date,
						d.size
					])),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Export", "تصدير"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						setUploadFileName("");
						setUploadDesc("");
						setUploadOpen(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Upload document", "رفع مستند"))
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Document tabs",
				value: tab,
				onChange: (id) => setTab(id),
				tabs: [{
					id: "documents",
					label: L("Documents", "المستندات"),
					count: collection.items.length
				}, {
					id: "transfers",
					label: L("Transfers", "التحويلات"),
					count: transfers.items.length
				}]
			}),
			tab === "documents" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					placeholder: L("Search documents", "بحث في المستندات"),
					value: search,
					onChange: (e) => setSearch(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-44",
					options: [
						L("All categories", "كل الفئات"),
						L("Medical reports", "تقارير طبية"),
						L("Assessments", "تقييمات"),
						L("Consents", "موافقات"),
						L("Invoices", "فواتير"),
						L("Identity", "هوية")
					],
					onChange: (e) => setCategoryFilter(categoryOptions[e.target.selectedIndex] ?? "all")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-40",
					options: [L("All patients", "كل المرضى"), ...patients.slice(0, 4).map((p) => p.name)],
					onChange: (e) => setPatientFilter(patientOptions[e.target.selectedIndex] ?? "all")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					"aria-label": t(L("From date", "من تاريخ"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(view === "grid" ? "list" : "grid"),
					children: t(view === "grid" ? L("List view", "عرض القائمة") : L("Grid view", "عرض الشبكة"))
				})
			] }), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: L("No documents found", "لا توجد مستندات"),
				description: L("Try adjusting your filters", "حاول تعديل عوامل التصفية")
			}) : view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: filtered.map(({ d, i }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					interactive: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-11 place-items-center rounded-2xl bg-tint-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-5 text-[var(--info-deep)]",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 truncate font-semibold",
							children: d.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-muted-foreground",
							children: d.patient
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "neutral",
								children: d.type
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: d.size
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									className: "flex-1",
									onClick: () => setPreviewIndex(i),
									children: t(L("Preview", "معاينة"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									"aria-label": t(L("Download", "تنزيل")),
									onClick: () => toast.push("success", L("Download — completed", "تنزيل — تم بنجاح")),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									"aria-label": t(L("Transfer", "تحويل")),
									onClick: () => setTransferIndex(i),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									"aria-label": t(L("Delete", "حذف")),
									onClick: () => setDeleteIndex(i),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
										className: "size-4",
										"aria-hidden": true
									})
								})
							]
						})
					]
				}, i))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Documents", "المستندات"),
				columns: [
					L("Name", "الاسم"),
					L("Patient", "المريض"),
					L("Category", "الفئة"),
					L("Uploaded by", "رفع بواسطة"),
					L("Date", "التاريخ"),
					L("Size", "الحجم"),
					L("Actions", "إجراءات")
				],
				rows: filtered.map(({ d, i }) => [
					d.name,
					d.patient,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "neutral",
						children: d.type
					}),
					d.by,
					d.date,
					d.size,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
						{
							...A$1.view,
							onClick: () => setPreviewIndex(i)
						},
						{
							...A$1.down,
							onClick: () => toast.push("success", L("Download — completed", "تنزيل — تم بنجاح"))
						},
						{
							...A$1.del,
							onClick: () => setDeleteIndex(i)
						}
					] })
				])
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: transfers.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: L("No transfers yet", "لا توجد تحويلات بعد"),
				description: L("Transfer a document to a facility to see it here", "قم بتحويل مستند إلى منشأة ليظهر هنا")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Transfers", "التحويلات"),
				columns: [
					L("Document", "المستند"),
					L("Facility", "المنشأة"),
					L("Date", "التاريخ"),
					L("Notes", "ملاحظات")
				],
				rows: transfers.items.map((tr) => [
					tr.doc,
					tr.facility,
					tr.date,
					tr.notes
				])
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: uploadOpen,
				onClose: () => setUploadOpen(false),
				title: L("Upload document", "رفع مستند"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setUploadOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						collection.add({
							name: uploadFileName || t(L("Untitled document", "مستند بدون عنوان")),
							type: t([
								L("Medical reports", "تقارير طبية"),
								L("Assessments", "تقييمات"),
								L("Consents", "موافقات")
							][uploadCategory] ?? L("Medical reports", "تقارير طبية")),
							patient: t(patients[uploadPatient]?.name ?? patients[0].name),
							date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
								day: "2-digit",
								month: "short",
								year: "numeric"
							}),
							size: "—",
							by: t(L("You", "أنت"))
						});
						setUploadOpen(false);
						toast.push("success", L("Document uploaded", "تم رفع المستند"));
					},
					children: t(L("Upload", "رفع"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => fileRef.current?.click(),
							className: "grid h-36 w-full place-items-center rounded-3xl border border-dashed border-border bg-muted/40 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
									className: "mx-auto size-6 text-muted-foreground",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-medium",
									children: uploadFileName || t(L("Drag & drop files here", "اسحب الملفات وأفلتها هنا"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t(L("PDF, JPG, PNG, DOCX up to 20 MB", "PDF، JPG، PNG، DOCX حتى ٢٠ ميجابايت"))
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Patient", "المريض"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									options: patients.slice(0, 5).map((p) => p.name),
									onChange: (e) => setUploadPatient(e.target.selectedIndex)
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Category", "الفئة"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									options: [
										L("Medical reports", "تقارير طبية"),
										L("Assessments", "تقييمات"),
										L("Consents", "موافقات")
									],
									onChange: (e) => setUploadCategory(e.target.selectedIndex)
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Description", "الوصف"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								value: uploadDesc,
								onChange: (e) => setUploadDesc(e.target.value)
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: previewIndex !== null,
				onClose: () => setPreviewIndex(null),
				title: L("Document preview", "معاينة المستند"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setPreviewIndex(null),
					children: t(L("Close", "إغلاق"))
				}),
				children: previewIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
					{
						k: L("Name", "الاسم"),
						v: collection.items[previewIndex].name
					},
					{
						k: L("Patient", "المريض"),
						v: collection.items[previewIndex].patient
					},
					{
						k: L("Category", "الفئة"),
						v: collection.items[previewIndex].type
					},
					{
						k: L("Uploaded by", "رفع بواسطة"),
						v: collection.items[previewIndex].by
					},
					{
						k: L("Date", "التاريخ"),
						v: collection.items[previewIndex].date
					},
					{
						k: L("Size", "الحجم"),
						v: collection.items[previewIndex].size
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: deleteIndex !== null,
				onClose: () => setDeleteIndex(null),
				size: "sm",
				title: L("Delete document", "حذف المستند"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDeleteIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (deleteIndex === null) return;
						collection.remove(deleteIndex);
						setDeleteIndex(null);
						toast.push("success", L("Document deleted", "تم حذف المستند"));
					},
					children: t(L("Delete permanently", "حذف نهائي"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove this document.", "سيؤدي هذا إلى حذف هذا المستند نهائياً."))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: transferIndex !== null,
				onClose: () => setTransferIndex(null),
				title: L("Transfer to facility", "تحويل إلى منشأة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setTransferIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						if (transferIndex === null || !transferFacility.trim()) {
							toast.push("error", L("Facility name is required", "اسم المنشأة مطلوب"));
							return;
						}
						transfers.add({
							doc: collection.items[transferIndex].name,
							facility: transferFacility,
							date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
								day: "2-digit",
								month: "short",
								year: "numeric"
							}),
							notes: transferNotes
						});
						setTransferIndex(null);
						setTransferFacility("");
						setTransferNotes("");
						toast.push("success", L("Document transferred", "تم تحويل المستند"));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Transfer", "تحويل"))
					]
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Target facility", "المنشأة المستهدفة"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: transferFacility,
							onChange: (e) => setTransferFacility(e.target.value),
							placeholder: t(L("e.g. King Fahad Hospital", "مثال: مستشفى الملك فهد"))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Notes", "ملاحظات"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							value: transferNotes,
							onChange: (e) => setTransferNotes(e.target.value)
						})
					})]
				})
			})
		]
	});
}
function ConsentsModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("signed");
	const [signOpen, setSignOpen] = (0, import_react.useState)(false);
	const [viewIndex, setViewIndex] = (0, import_react.useState)(null);
	const [voidIndex, setVoidIndex] = (0, import_react.useState)(null);
	const [templateEditOpen, setTemplateEditOpen] = (0, import_react.useState)(false);
	const [templateIndex, setTemplateIndex] = (0, import_react.useState)(null);
	const [signName, setSignName] = (0, import_react.useState)("");
	const [templates, setTemplates] = (0, import_react.useState)([
		L("Treatment consent", "الموافقة على العلاج"),
		L("Photography consent", "الموافقة على التصوير"),
		L("Data sharing consent", "الموافقة على مشاركة البيانات"),
		L("Minor guardian consent", "موافقة ولي أمر القاصر"),
		L("Telehealth consent", "موافقة الرعاية عن بُعد"),
		L("Research participation", "المشاركة البحثية")
	].map((c) => t(c)));
	const [templateDraft, setTemplateDraft] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const collection = useCollection(patients.slice(0, 8).map((p, i) => ({
		patient: t(p.name),
		type: t(L("Treatment consent", "الموافقة على العلاج")),
		signedBy: t(L("Guardian", "ولي الأمر")),
		date: i % 4 === 3 ? "—" : "02 Jul 2026",
		expiry: "02 Jul 2027",
		status: i % 4 === 3 ? "Awaiting signature" : "Signed"
	})));
	const typeOptions = ["all", ...templates];
	const statusOptions = [
		"all",
		t(L("Signed", "موقعة")),
		t(L("Awaiting signature", "بانتظار التوقيع")),
		t(L("Void", "ملغاة"))
	];
	const rows = collection.items.map((c, i) => ({
		c,
		i
	})).filter(({ c }) => c.status !== "Void" === (tab !== "templates")).filter(({ c }) => tab === "signed" ? c.status === "Signed" : tab === "pending" ? c.status === "Awaiting signature" : true).filter(({ c }) => matches(search, c.patient, c.type)).filter(({ c }) => passes(typeFilter, c.type)).filter(({ c }) => passes(statusFilter, c.status === "Signed" ? t(L("Signed", "موقعة")) : c.status === "Void" ? t(L("Void", "ملغاة")) : t(L("Awaiting signature", "بانتظار التوقيع"))));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Consents", "الموافقات"),
				description: L("Digital consent forms with e-signature", "نماذج موافقة رقمية مع توقيع إلكتروني"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						setSignName("");
						setSignOpen(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Request signature", "طلب توقيع"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Signed", "موقعة"),
						value: String(collection.items.filter((c) => c.status === "Signed").length),
						tint: "green",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Awaiting signature", "بانتظار التوقيع"),
						value: String(collection.items.filter((c) => c.status === "Awaiting signature").length),
						tint: "yellow",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Expired", "منتهية"),
						value: String(collection.items.filter((c) => c.status === "Void").length),
						tint: "purple",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-5",
							"aria-hidden": true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					placeholder: L("Search consents", "بحث في الموافقات"),
					value: search,
					onChange: (e) => setSearch(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-48",
					options: [L("All types", "كل الأنواع"), ...templates.map((tp) => L(tp, tp))],
					onChange: (e) => setTypeFilter(typeOptions[e.target.selectedIndex] ?? "all")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-44",
					options: [
						L("All statuses", "كل الحالات"),
						L("Signed", "موقعة"),
						L("Awaiting signature", "بانتظار التوقيع"),
						L("Void", "ملغاة")
					],
					onChange: (e) => setStatusFilter(statusOptions[e.target.selectedIndex] ?? "all")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => downloadCsv("rehlah-consents", [
						"Patient",
						"Type",
						"Signed by",
						"Date",
						"Expiry",
						"Status"
					], rows.map(({ c }) => [
						c.patient,
						c.type,
						c.signedBy,
						c.date,
						c.expiry,
						c.status
					])),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Export", "تصدير"))
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Consent tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "signed",
						label: L("Signed", "الموقعة"),
						count: collection.items.filter((c) => c.status === "Signed").length
					},
					{
						id: "pending",
						label: L("Awaiting signature", "بانتظار التوقيع"),
						count: collection.items.filter((c) => c.status === "Awaiting signature").length
					},
					{
						id: "templates",
						label: L("Templates", "القوالب"),
						count: templates.length
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-in-soft space-y-4",
				children: tab === "templates" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
					children: templates.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-semibold",
								children: c
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: t(L("Arabic & English versions", "نسخة عربية وإنجليزية"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									className: "flex-1",
									onClick: () => {
										setTemplateIndex(i);
										setTemplateDraft(c);
										setTemplateEditOpen(true);
									},
									children: t(L("Edit", "تعديل"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									className: "flex-1",
									onClick: () => {
										setSignName("");
										setSignOpen(true);
									},
									children: t(L("Send", "إرسال"))
								})]
							})
						]
					}, i))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: L("No consents found", "لا توجد موافقات"),
					description: L("Try adjusting your filters", "حاول تعديل عوامل التصفية")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
					caption: L("Consent records", "سجلات الموافقات"),
					columns: [
						L("Patient", "المريض"),
						L("Consent type", "نوع الموافقة"),
						L("Signed by", "وقّع بواسطة"),
						L("Date", "التاريخ"),
						L("Expiry", "الانتهاء"),
						L("Status", "الحالة"),
						L("Actions", "إجراءات")
					],
					rows: rows.map(({ c, i }) => [
						c.patient,
						c.type,
						c.signedBy,
						c.date,
						c.expiry,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: c.status === "Signed" ? "success" : c.status === "Void" ? "danger" : "warning",
							children: t(c.status === "Signed" ? L("Signed", "موقعة") : c.status === "Void" ? L("Void", "ملغاة") : L("Awaiting signature", "بانتظار التوقيع"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
							{
								...A$1.view,
								onClick: () => setViewIndex(i)
							},
							...c.status !== "Signed" ? [{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {
									className: "size-4",
									"aria-hidden": true
								}),
								label: L("Sign", "توقيع"),
								onClick: () => {
									setViewIndex(i);
									setSignName("");
									setSignOpen(true);
								}
							}] : [],
							{
								...A$1.del,
								label: L("Void", "إلغاء"),
								onClick: () => setVoidIndex(i)
							}
						] })
					])
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: rows.length })] })
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: signOpen,
				onClose: () => setSignOpen(false),
				title: L("Digital consent signature", "التوقيع الرقمي للموافقة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setSignOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (viewIndex !== null) collection.update(viewIndex, {
							status: "Signed",
							signedBy: signName || collection.items[viewIndex].signedBy,
							date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
								day: "2-digit",
								month: "short",
								year: "numeric"
							})
						});
						setSignOpen(false);
						setViewIndex(null);
						toast.push("success", L("Consent signed", "تم توقيع الموافقة"));
					},
					children: t(L("Confirm signature", "تأكيد التوقيع"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-48 overflow-auto rounded-2xl border border-border p-4 text-sm leading-6 text-muted-foreground",
							children: t(L("I authorise Rehlah Center to provide the assessment and therapy services described in the treatment plan. I understand the goals, duration, and expected outcomes, and I may withdraw consent at any time in writing.", "أفوض مركز رحلة بتقديم خدمات التقييم والعلاج الموضحة في الخطة العلاجية. وأدرك الأهداف والمدة والنتائج المتوقعة، ويحق لي سحب الموافقة كتابياً في أي وقت."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Signatory name", "اسم الموقع"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: signName,
									onChange: (e) => setSignName(e.target.value)
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Relationship", "صلة القرابة"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
									L("Patient", "المريض"),
									L("Father", "الأب"),
									L("Mother", "الأم"),
									L("Guardian", "ولي الأمر")
								] })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Signature", "التوقيع"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-28 place-items-center rounded-2xl border border-dashed border-border text-xs text-muted-foreground",
								children: t(L("Draw signature here", "ارسم التوقيع هنا"))
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: viewIndex !== null && !signOpen,
				onClose: () => setViewIndex(null),
				title: L("Consent details", "تفاصيل الموافقة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setViewIndex(null),
					children: t(L("Close", "إغلاق"))
				}),
				children: viewIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
					{
						k: L("Patient", "المريض"),
						v: collection.items[viewIndex].patient
					},
					{
						k: L("Consent type", "نوع الموافقة"),
						v: collection.items[viewIndex].type
					},
					{
						k: L("Signed by", "وقّع بواسطة"),
						v: collection.items[viewIndex].signedBy
					},
					{
						k: L("Date", "التاريخ"),
						v: collection.items[viewIndex].date
					},
					{
						k: L("Expiry", "الانتهاء"),
						v: collection.items[viewIndex].expiry
					},
					{
						k: L("Status", "الحالة"),
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: collection.items[viewIndex].status === "Signed" ? "success" : collection.items[viewIndex].status === "Void" ? "danger" : "warning",
							children: collection.items[viewIndex].status
						})
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: voidIndex !== null,
				onClose: () => setVoidIndex(null),
				size: "sm",
				title: L("Void consent", "إلغاء الموافقة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setVoidIndex(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (voidIndex === null) return;
						collection.update(voidIndex, { status: "Void" });
						setVoidIndex(null);
						toast.push("success", L("Consent voided", "تم إلغاء الموافقة"));
					},
					children: t(L("Void permanently", "إلغاء نهائي"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will mark the consent record as void.", "سيؤدي هذا إلى وضع علامة إلغاء على سجل الموافقة."))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: templateEditOpen,
				onClose: () => setTemplateEditOpen(false),
				title: L("Edit consent template", "تعديل قالب الموافقة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setTemplateEditOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (templateIndex === null) return;
						setTemplates((p) => p.map((tp, idx) => idx === templateIndex ? templateDraft : tp));
						setTemplateEditOpen(false);
						toast.push("success", L("Template saved", "تم حفظ القالب"));
					},
					children: t(L("Save changes", "حفظ التغييرات"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Template name", "اسم القالب"),
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: templateDraft,
						onChange: (e) => setTemplateDraft(e.target.value)
					})
				})
			})
		]
	});
}
function emptySickForm() {
	return {
		patient: "",
		specialist: 0,
		start: "",
		end: "",
		employer: "",
		language: 0,
		reason: ""
	};
}
function SickLeaveModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [issueOpen, setIssueOpen] = (0, import_react.useState)(false);
	const [verifyOpen, setVerifyOpen] = (0, import_react.useState)(false);
	const [editIndex, setEditIndex] = (0, import_react.useState)(null);
	const [cancelIndex, setCancelIndex] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptySickForm());
	const [search, setSearch] = (0, import_react.useState)("");
	const [specialistFilter, setSpecialistFilter] = (0, import_react.useState)("all");
	const [verifyNo, setVerifyNo] = (0, import_react.useState)("");
	const [verifyResult, setVerifyResult] = (0, import_react.useState)(null);
	const collection = useCollection(patients.slice(0, 6).map((p, i) => ({
		no: `SL-2026-${1200 + i}`,
		patient: t(p.name),
		issuedBy: t(doc(i % 4)),
		from: "05 Jul 2026",
		to: "08 Jul 2026",
		days: 2 + i % 4,
		status: i % 4 === 0 ? "Cancelled" : "Active"
	})));
	const specialistOptions = ["all", ...SPECIALISTS.map((s) => t(s))];
	const filtered = collection.items.map((c, i) => ({
		c,
		i
	})).filter(({ c }) => matches(search, c.no, c.patient) && passes(specialistFilter, c.issuedBy));
	const daysBetween = (from, to) => {
		const d1 = new Date(from);
		const d2 = new Date(to);
		const diff = Math.round((d2.getTime() - d1.getTime()) / 864e5);
		return Number.isFinite(diff) && diff > 0 ? diff : 1;
	};
	const openEdit = (i) => {
		const c = collection.items[i];
		setForm({
			patient: c.patient,
			specialist: Math.max(0, SPECIALISTS.findIndex((s) => t(s) === c.issuedBy)),
			start: "",
			end: "",
			employer: "",
			language: 0,
			reason: ""
		});
		setEditIndex(i);
		setIssueOpen(true);
	};
	const submit = (andPrint) => {
		if (!form.patient.trim() || !form.start || !form.end) {
			toast.push("error", L("Patient and dates are required", "المريض والتواريخ مطلوبة"));
			return;
		}
		const days = daysBetween(form.start, form.end);
		if (editIndex !== null) {
			collection.update(editIndex, {
				patient: form.patient,
				issuedBy: t(SPECIALISTS[form.specialist] ?? SPECIALISTS[0]),
				from: form.start,
				to: form.end,
				days
			});
			toast.push("success", L("Certificate updated", "تم تحديث الشهادة"));
		} else {
			collection.add({
				no: `SL-2026-${1200 + collection.items.length}`,
				patient: form.patient,
				issuedBy: t(SPECIALISTS[form.specialist] ?? SPECIALISTS[0]),
				from: form.start,
				to: form.end,
				days,
				status: "Active"
			});
			toast.push("success", L("Sick leave issued", "تم إصدار الإجازة المرضية"));
		}
		setIssueOpen(false);
		setEditIndex(null);
		setForm(emptySickForm());
		if (andPrint) printView();
	};
	const verify = () => {
		const found = collection.items.find((c) => c.no.toLowerCase() === verifyNo.trim().toLowerCase());
		setVerifyResult(found ?? "notfound");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Sick Leave", "الإجازات المرضية"),
				description: L("Issue and verify medical leave certificates", "إصدار الإجازات المرضية والتحقق منها"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => {
							setVerifyNo("");
							setVerifyResult(null);
							setVerifyOpen(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Verify certificate", "التحقق من شهادة"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => downloadCsv("rehlah-sick-leave", [
							"Certificate no.",
							"Patient",
							"Issued by",
							"From",
							"To",
							"Days",
							"Status"
						], filtered.map(({ c }) => [
							c.no,
							c.patient,
							c.issuedBy,
							c.from,
							c.to,
							c.days,
							c.status
						])),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Export", "تصدير"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => {
							setForm(emptySickForm());
							setEditIndex(null);
							setIssueOpen(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Issue sick leave", "إصدار إجازة"))
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					placeholder: L("Search by patient or certificate no.", "بحث بالمريض أو رقم الشهادة"),
					value: search,
					onChange: (e) => setSearch(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					"aria-label": t(L("From date", "من تاريخ"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					"aria-label": t(L("To date", "إلى تاريخ"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-44",
					options: [L("All specialists", "كل الأخصائيين"), ...SPECIALISTS],
					onChange: (e) => setSpecialistFilter(specialistOptions[e.target.selectedIndex] ?? "all")
				})
			] }),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: L("No certificates found", "لا توجد شهادات"),
				description: L("Try adjusting your filters", "حاول تعديل عوامل التصفية")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Issued sick leave certificates", "شهادات الإجازات المرضية المصدرة"),
				columns: [
					L("Certificate no.", "رقم الشهادة"),
					L("Patient", "المريض"),
					L("Issued by", "صادرة عن"),
					L("From", "من"),
					L("To", "إلى"),
					L("Days", "الأيام"),
					L("Status", "الحالة"),
					L("Actions", "إجراءات")
				],
				rows: filtered.map(({ c, i }) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs",
						children: c.no
					}),
					c.patient,
					c.issuedBy,
					c.from,
					c.to,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: c.days
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: c.status === "Cancelled" ? "danger" : "success",
						children: t(c.status === "Cancelled" ? L("Cancelled", "ملغاة") : L("Active", "سارية"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
						{
							...A$1.print,
							onClick: () => printView()
						},
						{
							...A$1.edit,
							onClick: () => openEdit(i)
						},
						...c.status === "Active" ? [{
							...A$1.cancel,
							onClick: () => setCancelIndex(i)
						}] : []
					] })
				])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: filtered.length }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: issueOpen,
				onClose: () => {
					setIssueOpen(false);
					setEditIndex(null);
				},
				title: editIndex !== null ? L("Edit certificate", "تعديل الشهادة") : L("Issue sick leave", "إصدار إجازة مرضية"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						setIssueOpen(false);
						setEditIndex(null);
					},
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => submit(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(editIndex !== null ? L("Save & print", "حفظ وطباعة") : L("Issue & print", "إصدار وطباعة"))
					]
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Patient", "المريض"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: t(L("Search patient…", "ابحث عن مريض…")),
								value: form.patient,
								onChange: (e) => setForm((p) => ({
									...p,
									patient: e.target.value
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Issuing specialist", "الأخصائي المصدر"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: SPECIALISTS,
								onChange: (e) => setForm((p) => ({
									...p,
									specialist: e.target.selectedIndex
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Start date", "تاريخ البدء"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: form.start,
								onChange: (e) => setForm((p) => ({
									...p,
									start: e.target.value
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("End date", "تاريخ الانتهاء"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: form.end,
								onChange: (e) => setForm((p) => ({
									...p,
									end: e.target.value
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Employer / school", "جهة العمل / المدرسة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.employer,
								onChange: (e) => setForm((p) => ({
									...p,
									employer: e.target.value
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Certificate language", "لغة الشهادة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								options: [
									L("Arabic", "العربية"),
									L("English", "الإنجليزية"),
									L("Bilingual", "ثنائية اللغة")
								],
								onChange: (e) => setForm((p) => ({
									...p,
									language: e.target.selectedIndex
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Medical justification", "المبرر الطبي"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: form.reason,
									onChange: (e) => setForm((p) => ({
										...p,
										reason: e.target.value
									}))
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: verifyOpen,
				onClose: () => setVerifyOpen(false),
				size: "sm",
				title: L("Verify certificate", "التحقق من الشهادة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: verify,
					children: t(L("Verify", "تحقق"))
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: L("Certificate number", "رقم الشهادة"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "SL-2026-1200",
						value: verifyNo,
						onChange: (e) => setVerifyNo(e.target.value)
					})
				}), verifyResult && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: ["mt-4 rounded-2xl p-4 text-sm", verifyResult === "notfound" ? "bg-tint-yellow" : "bg-tint-green"].join(" "),
					children: verifyResult === "notfound" ? t(L("No certificate found with this number.", "لا توجد شهادة بهذا الرقم.")) : t(L(`Certificate ${verifyResult.no} is ${verifyResult.status === "Cancelled" ? "cancelled" : "valid"} and was issued for ${verifyResult.patient} from ${verifyResult.from} to ${verifyResult.to}.`, `الشهادة ${verifyResult.no} ${verifyResult.status === "Cancelled" ? "ملغاة" : "سارية"} وصدرت لـ ${verifyResult.patient} من ${verifyResult.from} إلى ${verifyResult.to}.`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: cancelIndex !== null,
				onClose: () => setCancelIndex(null),
				size: "sm",
				title: L("Cancel certificate", "إلغاء الشهادة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setCancelIndex(null),
					children: t(L("Back", "رجوع"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						if (cancelIndex === null) return;
						collection.update(cancelIndex, { status: "Cancelled" });
						setCancelIndex(null);
						toast.push("success", L("Certificate cancelled", "تم إلغاء الشهادة"));
					},
					children: t(L("Cancel certificate", "إلغاء الشهادة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will mark the certificate as cancelled.", "سيؤدي هذا إلى وضع علامة إلغاء على الشهادة."))
				})
			})
		]
	});
}
function InvoicesModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("invoices");
	const [newOpen, setNewOpen] = (0, import_react.useState)(false);
	const [payOpen, setPayOpen] = (0, import_react.useState)(false);
	const [viewOpen, setViewOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Invoices & Payments", "الفواتير والمدفوعات"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setPayOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Record payment", "تسجيل دفعة"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setNewOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("New invoice", "فاتورة جديدة"))
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Billed this month", "المفوتر هذا الشهر"),
						value: "284,500",
						tint: "green",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Collected", "المحصّل"),
						value: "231,900",
						tint: "blue",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Outstanding", "المستحق"),
						value: "52,600",
						tint: "yellow",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Insurance claims", "مطالبات التأمين"),
						value: "38",
						tint: "purple",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-5",
							"aria-hidden": true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Billing tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "invoices",
						label: L("Invoices", "الفواتير"),
						count: 128
					},
					{
						id: "payments",
						label: L("Payments", "المدفوعات"),
						count: 96
					},
					{
						id: "insurance",
						label: L("Insurance claims", "مطالبات التأمين"),
						count: 38
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-4",
				children: [
					tab === "invoices" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
						caption: L("Invoices", "الفواتير"),
						rows: invoices,
						rowKey: (inv) => inv.number,
						exportName: "rehlah-invoices",
						search: (inv) => `${inv.number} ${pat(inv.patient).name.en} ${pat(inv.patient).name.ar}`,
						searchPlaceholder: L("Search invoice no. or patient", "بحث برقم الفاتورة أو المريض"),
						filters: [{
							id: "status",
							label: L("Status", "الحالة"),
							options: [
								{
									value: "Paid",
									label: L("Paid", "مدفوعة")
								},
								{
									value: "Partial",
									label: L("Partial", "جزئية")
								},
								{
									value: "Unpaid",
									label: L("Unpaid", "غير مدفوعة")
								}
							],
							match: (inv, v) => inv.status.en === v
						}, {
							id: "method",
							label: L("Payment method", "طريقة الدفع"),
							options: [
								{
									value: "Mada",
									label: L("Mada", "مدى")
								},
								{
									value: "Cash",
									label: L("Cash", "نقدي")
								},
								{
									value: "Credit card",
									label: L("Credit card", "بطاقة ائتمانية")
								},
								{
									value: "Bank transfer",
									label: L("Bank transfer", "تحويل بنكي")
								},
								{
									value: "Insurance",
									label: L("Insurance", "تأمين")
								}
							],
							match: (inv, v) => inv.method.en === v
						}],
						bulkActions: [{
							id: "remind",
							label: L("Send reminder", "إرسال تذكير"),
							tone: "primary"
						}, {
							id: "print",
							label: L("Print", "طباعة"),
							tone: "outline"
						}],
						onBulkAction: (id, sel) => toast.push("success", id === "remind" ? L(`Reminders sent for ${sel.length} invoices`, `تم إرسال تذكير لـ ${sel.length} فاتورة`) : L(`${sel.length} invoices queued for print`, `${sel.length} فاتورة في قائمة الطباعة`)),
						columns: [
							{
								id: "no",
								header: L("Invoice no.", "رقم الفاتورة"),
								sort: (i) => i.number,
								csv: (i) => i.number,
								cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs",
									children: i.number
								})
							},
							{
								id: "patient",
								header: L("Patient", "المريض"),
								sort: (i) => pat(i.patient).name.en,
								csv: (i) => pat(i.patient).name.en,
								cell: (i) => t(pat(i.patient).name)
							},
							{
								id: "date",
								header: L("Date", "التاريخ"),
								sort: (i) => i.date,
								csv: (i) => i.date,
								hideBelow: "md",
								cell: (i) => i.date
							},
							{
								id: "amount",
								header: L("Amount", "المبلغ"),
								sort: (i) => i.total,
								csv: (i) => String(i.total),
								cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: i.total })
							},
							{
								id: "vat",
								header: L("VAT 15%", "ضريبة ١٥٪"),
								csv: (i) => String(Math.round(i.total * .15)),
								hideBelow: "lg",
								cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: Math.round(i.total * .15) })
							},
							{
								id: "paid",
								header: L("Paid", "المدفوع"),
								sort: (i) => i.paid,
								csv: (i) => String(i.paid),
								cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: i.paid })
							},
							{
								id: "status",
								header: L("Status", "الحالة"),
								sort: (i) => i.status.en,
								csv: (i) => i.status.en,
								cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(i.status.en),
									children: t(i.status)
								})
							},
							{
								id: "actions",
								header: L("Actions", "إجراءات"),
								align: "end",
								cell: (inv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => setViewOpen(true),
										children: t(L("View", "عرض"))
									}), inv.paid < inv.total && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										onClick: () => setPayOpen(true),
										children: t(L("Collect", "تحصيل"))
									})]
								})
							}
						],
						emptyTitle: L("No invoices found", "لا توجد فواتير"),
						emptyDescription: L("Create an invoice or adjust your filters.", "أنشئ فاتورة أو عدّل التصفية."),
						emptyAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setNewOpen(true),
							children: t(L("New invoice", "فاتورة جديدة"))
						})
					}),
					tab === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Payments", "المدفوعات"),
						columns: [
							L("Receipt no.", "رقم السند"),
							L("Invoice", "الفاتورة"),
							L("Patient", "المريض"),
							L("Method", "طريقة الدفع"),
							L("Amount", "المبلغ"),
							L("Date", "التاريخ"),
							L("Actions", "إجراءات")
						],
						rows: payments.map((p, i) => [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs",
								children: ["RC-", 5400 + i]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs",
								children: p.txn
							}),
							t(pat(i % 6).name),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "neutral",
								children: t(p.method)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: p.amount }),
							p.date,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [A$1.view, A$1.print] })
						])
					}),
					tab === "insurance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Insurance claims", "مطالبات التأمين"),
						columns: [
							L("Claim no.", "رقم المطالبة"),
							L("Patient", "المريض"),
							L("Insurer", "شركة التأمين"),
							L("Policy no.", "رقم الوثيقة"),
							L("Claimed", "المطالب به"),
							L("Approved", "المعتمد"),
							L("Status", "الحالة"),
							L("Actions", "إجراءات")
						],
						rows: patients.slice(0, 6).map((p, i) => [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs",
								children: ["CL-2026-", 300 + i]
							}),
							t(p.name),
							t(L("Bupa Arabia", "بوبا العربية")),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs",
								children: ["POL-", 88400 + i]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 1800 + i * 250 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 1500 + i * 200 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: i % 3 === 0 ? "warning" : "success",
								children: t(i % 3 === 0 ? L("Under review", "قيد المراجعة") : L("Approved", "معتمدة"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [A$1.view, A$1.print] })
						])
					}),
					tab !== "invoices" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: tab === "payments" ? 96 : 38 })
				]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: newOpen,
				onClose: () => setNewOpen(false),
				size: "lg",
				title: L("Create invoice", "إنشاء فاتورة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						setNewOpen(false);
						toast.push("success", L("Save as draft — completed", "حفظ كمسودة — تم بنجاح"));
					},
					children: t(L("Save as draft", "حفظ كمسودة"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setNewOpen(false);
						toast.push("success", L("Issue invoice — completed", "إصدار الفاتورة — تم بنجاح"));
					},
					children: t(L("Issue invoice", "إصدار الفاتورة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Patient", "المريض"),
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: t(L("Search patient…", "ابحث عن مريض…")) })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Invoice date", "تاريخ الفاتورة"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Payer", "جهة الدفع"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
										L("Self-pay", "دفع ذاتي"),
										L("Insurance", "تأمين"),
										L("Corporate", "جهة تعاقدية")
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Due date", "تاريخ الاستحقاق"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: t(L("Line items", "بنود الفاتورة"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-3",
								children: [[0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: services.map((s) => s.name) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											defaultValue: 1,
											"aria-label": t(L("Quantity", "الكمية"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											defaultValue: 350,
											"aria-label": t(L("Unit price", "سعر الوحدة"))
										})
									]
								}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
											className: "size-4",
											"aria-hidden": true
										}),
										" ",
										t(L("Add item", "إضافة بند"))
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-muted p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
								{
									k: L("Subtotal", "المجموع الفرعي"),
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 700 })
								},
								{
									k: L("Discount", "الخصم"),
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 50 })
								},
								{
									k: L("VAT 15%", "ضريبة القيمة المضافة ١٥٪"),
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 97.5 })
								},
								{
									k: L("Total", "الإجمالي"),
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 747.5 })
								}
							] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: payOpen,
				onClose: () => setPayOpen(false),
				size: "sm",
				title: L("Record payment", "تسجيل دفعة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setPayOpen(false);
						toast.push("success", L("Save payment — completed", "حفظ الدفعة — تم بنجاح"));
					},
					children: t(L("Save payment", "حفظ الدفعة"))
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Invoice", "الفاتورة"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: invoices.map((i) => ({
								en: i.number,
								ar: i.number
							})) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Payment method", "طريقة الدفع"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
								L("Cash", "نقداً"),
								L("Card", "بطاقة"),
								L("Bank transfer", "تحويل بنكي"),
								L("Insurance", "تأمين")
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Amount", "المبلغ"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "number" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Payment date", "تاريخ الدفع"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: viewOpen,
				onClose: () => setViewOpen(false),
				title: L("Invoice details", "تفاصيل الفاتورة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Print", "طباعة"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setViewOpen(false);
						toast.push("success", L("Record payment — completed", "تسجيل دفعة — تم بنجاح"));
					},
					children: t(L("Record payment", "تسجيل دفعة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
					{
						k: L("Invoice no.", "رقم الفاتورة"),
						v: "INV-2026-0412"
					},
					{
						k: L("Patient", "المريض"),
						v: t(pat(0).name)
					},
					{
						k: L("Issued", "تاريخ الإصدار"),
						v: "10 Jul 2026"
					},
					{
						k: L("Total", "الإجمالي"),
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 1207.5 })
					},
					{
						k: L("Paid", "المدفوع"),
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: 700 })
					},
					{
						k: L("Status", "الحالة"),
						v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "warning",
							children: t(L("Partial", "جزئية"))
						})
					}
				] })
			})
		]
	});
}
function ReportsModule() {
	const { t } = useI18n();
	const [tab, setTab] = (0, import_react.useState)("operational");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Reports", "التقارير"),
				description: L("Operational, clinical and financial insight", "رؤى تشغيلية وسريرية ومالية"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Print", "طباعة"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": true
							}),
							" ",
							t(L("Export Excel", "تصدير Excel"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Export PDF", "تصدير PDF"))
					] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					"aria-label": t(L("From date", "من تاريخ"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					"aria-label": t(L("To date", "إلى تاريخ"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-40",
					options: [L("All specialties", "كل التخصصات"), ...SPECIALTIES]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					className: "w-44",
					options: [L("All specialists", "كل الأخصائيين"), ...SPECIALISTS]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Report tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "operational",
						label: L("Operational", "تشغيلية")
					},
					{
						id: "clinical",
						label: L("Clinical", "سريرية")
					},
					{
						id: "financial",
						label: L("Financial", "مالية")
					},
					{
						id: "custom",
						label: L("Custom report", "تقرير مخصص")
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-6",
				children: [
					tab === "operational" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Appointments", "المواعيد"),
								value: "1,284",
								tint: "green",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Attendance rate", "نسبة الحضور"),
								value: "87%",
								tint: "blue",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("New patients", "مرضى جدد"),
								value: "142",
								tint: "purple",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Utilisation", "معدل الإشغال"),
								value: "76%",
								tint: "yellow",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
									className: "size-5",
									"aria-hidden": true
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 xl:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
							title: L("Attendance breakdown", "توزيع الحضور"),
							summary: "Donut chart of attendance statuses.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { data: attendanceStatus })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
							title: L("Appointments per specialty", "المواعيد حسب التخصص"),
							summary: "Bar chart of appointment counts per specialty.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
								data: specialtyDistribution,
								x: "name",
								keys: ["value"]
							})
						})]
					})] }),
					tab === "clinical" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Active plans", "خطط نشطة"),
								value: "96",
								tint: "green",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Goals achieved", "أهداف محققة"),
								value: "412",
								tint: "blue",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Avg. plan progress", "متوسط تقدم الخطط"),
								value: "64%",
								tint: "purple",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
									className: "size-5",
									"aria-hidden": true
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Progress by specialty", "التقدم حسب التخصص") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4",
						children: SPECIALTIES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t(s)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-muted-foreground",
								children: [58 + i * 6, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: 58 + i * 6 })
						})] }, i))
					})] })] }),
					tab === "financial" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Revenue", "الإيرادات"),
								value: "1.92M",
								tint: "green",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Collections", "التحصيل"),
								value: "1.64M",
								tint: "blue",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Outstanding", "المستحقات"),
								value: "280K",
								tint: "yellow",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								label: L("Insurance share", "حصة التأمين"),
								value: "34%",
								tint: "purple",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-5",
									"aria-hidden": true
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 xl:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
							title: L("Revenue trend", "اتجاه الإيرادات"),
							summary: "Line chart of monthly revenue.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
								data: revenueMonthly,
								x: "m",
								y: "revenue"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
							title: L("This year vs last year", "هذا العام مقابل العام الماضي"),
							summary: "Bar chart comparing monthly revenue year over year.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
								data: monthlyComparison,
								x: "m",
								keys: ["current", "previous"]
							})
						})]
					})] }),
					tab === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								title: L("Build a custom report", "إنشاء تقرير مخصص"),
								subtitle: L("Pick the data, grouping and format", "اختر البيانات والتجميع والصيغة")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Data source", "مصدر البيانات"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
											L("Appointments", "المواعيد"),
											L("Patients", "المرضى"),
											L("Invoices", "الفواتير"),
											L("Treatment plans", "الخطط العلاجية")
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Group by", "تجميع حسب"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
											L("Specialty", "التخصص"),
											L("Specialist", "الأخصائي"),
											L("Month", "الشهر"),
											L("Status", "الحالة")
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Chart type", "نوع المخطط"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
											L("Bar", "أعمدة"),
											L("Line", "خطي"),
											L("Donut", "دائري")
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Output format", "صيغة المخرجات"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
											L("On screen", "على الشاشة"),
											L("PDF", "PDF"),
											L("Excel", "Excel")
										] })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: t(L("Generate report", "إنشاء التقرير")) })
							})
						]
					})
				]
			}, tab)
		]
	});
}
function AdministrationModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("users");
	const [userOpen, setUserOpen] = (0, import_react.useState)(false);
	const ROLES = [
		L("Administrator", "مدير النظام"),
		L("Specialist", "أخصائي"),
		L("Receptionist", "موظف استقبال"),
		L("Accountant", "محاسب"),
		L("Assistant", "مساعد")
	];
	const PERMS = [
		L("View patients", "عرض المرضى"),
		L("Edit patients", "تعديل المرضى"),
		L("Manage appointments", "إدارة المواعيد"),
		L("Clinical notes", "الملاحظات السريرية"),
		L("Issue invoices", "إصدار الفواتير"),
		L("View reports", "عرض التقارير"),
		L("System settings", "إعدادات النظام")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Administration", "الإدارة"),
				description: L("Users, roles, settings and audit trail", "المستخدمون والصلاحيات والإعدادات وسجل التدقيق"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setUserOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Add user", "إضافة مستخدم"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Administration tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "users",
						label: L("Users", "المستخدمون"),
						count: 24
					},
					{
						id: "roles",
						label: L("Roles & permissions", "الأدوار والصلاحيات")
					},
					{
						id: "settings",
						label: L("Clinic settings", "إعدادات المركز")
					},
					{
						id: "notifications",
						label: L("Notifications", "الإشعارات")
					},
					{
						id: "audit",
						label: L("Audit log", "سجل التدقيق")
					},
					{
						id: "backup",
						label: L("Backup", "النسخ الاحتياطي")
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-4",
				children: [
					tab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search users", "بحث في المستخدمين") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								className: "w-44",
								options: [L("All roles", "كل الأدوار"), ...ROLES]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								className: "w-36",
								options: [
									L("All statuses", "كل الحالات"),
									L("Active", "نشط"),
									L("Suspended", "موقوف")
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							caption: L("System users", "مستخدمو النظام"),
							columns: [
								L("Name", "الاسم"),
								L("Email", "البريد الإلكتروني"),
								L("Role", "الدور"),
								L("Specialty", "التخصص"),
								L("Last login", "آخر دخول"),
								L("Status", "الحالة"),
								L("Actions", "إجراءات")
							],
							rows: SPECIALISTS.concat(SPECIALISTS.slice(0, 2)).map((s, i) => [
								t(s),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs",
									children: [
										"user",
										i + 1,
										"@rehlah.sa"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "primary",
									children: t(ROLES[i % ROLES.length])
								}),
								t(spec(i % 5)),
								"12 Jul 2026 · 08:14",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: i % 5 === 0 ? "warning" : "success",
									children: t(i % 5 === 0 ? L("Suspended", "موقوف") : L("Active", "نشط"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
									A$1.edit,
									A$1.view,
									A$1.del
								] })
							])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: 24 })
					] }),
					tab === "roles" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "overflow-x-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Permission matrix", "مصفوفة الصلاحيات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "mt-4 w-full min-w-[720px] border-collapse text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: t(L("Permission matrix", "مصفوفة الصلاحيات"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "px-3 py-3 text-start text-xs font-semibold text-muted-foreground",
									children: t(L("Permission", "الصلاحية"))
								}), ROLES.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "px-3 py-3 text-center text-xs font-semibold text-muted-foreground",
									children: t(r)
								}, i))] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PERMS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "row",
										className: "px-3 py-3 text-start font-medium",
										children: t(p)
									}), ROLES.map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											defaultChecked: j === 0 || (i + j) % 3 !== 0,
											className: "size-4 accent-[var(--primary)]",
											"aria-label": `${t(p)} — ${t(ROLES[j])}`
										})
									}, j))]
								}, i)) })
							]
						})]
					}),
					tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 xl:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Clinic profile", "بيانات المركز") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Clinic name", "اسم المركز"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: t(L("Rehlah Center", "مركز رحلة")) })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Commercial registration", "السجل التجاري"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "4030-889-221" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("VAT number", "الرقم الضريبي"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "310-2288-4400003" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Address", "العنوان"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 2,
										defaultValue: t(L("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية"))
									})
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Working hours & preferences", "ساعات العمل والتفضيلات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Opening time", "وقت الفتح"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "time",
											defaultValue: "08:00"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Closing time", "وقت الإغلاق"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "time",
											defaultValue: "20:00"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Default session length", "المدة الافتراضية للجلسة"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
										L("30 minutes", "٣٠ دقيقة"),
										L("45 minutes", "٤٥ دقيقة"),
										L("60 minutes", "٦٠ دقيقة")
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Default language", "اللغة الافتراضية"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Arabic", "العربية"), L("English", "الإنجليزية")] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Enable online booking", "تفعيل الحجز الإلكتروني"),
									defaultChecked: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { label: L("Require insurance verification", "اشتراط التحقق من التأمين") })
							]
						})] })]
					}),
					tab === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Notification templates", "قوالب الإشعارات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-4",
							children: [
								L("Appointment confirmation (SMS)", "تأكيد الموعد (رسالة نصية)"),
								L("Appointment reminder — 24h", "تذكير بالموعد — ٢٤ ساعة"),
								L("Invoice issued (Email)", "إصدار فاتورة (بريد)"),
								L("Plan progress update", "تحديث تقدم الخطة")
							].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate text-sm font-medium",
									children: t(n)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Enabled", "مفعّل"),
									defaultChecked: i !== 3
								})]
							}, i))
						})]
					}),
					tab === "audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search audit log", "بحث في سجل التدقيق") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								className: "w-40",
								"aria-label": t(L("From date", "من تاريخ"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								className: "w-44",
								options: [
									L("All actions", "كل الإجراءات"),
									L("Create", "إنشاء"),
									L("Update", "تعديل"),
									L("Delete", "حذف"),
									L("Login", "تسجيل دخول")
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							caption: L("Audit log", "سجل التدقيق"),
							columns: [
								L("Timestamp", "الوقت"),
								L("User", "المستخدم"),
								L("Action", "الإجراء"),
								L("Entity", "العنصر"),
								L("IP address", "عنوان IP")
							],
							rows: Array.from({ length: 8 }, (_, i) => [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs",
									children: ["12 Jul 2026 · 09:", 10 + i]
								}),
								t(doc(i % 4)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: i % 3 === 0 ? "danger" : "neutral",
									children: t(i % 3 === 0 ? L("Delete", "حذف") : i % 2 ? L("Update", "تعديل") : L("Create", "إنشاء"))
								}),
								t(L("Patient record", "سجل مريض")),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs",
									children: ["10.4.2.", 20 + i]
								})
							])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { total: 1240 })
					] }),
					tab === "backup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 xl:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Automatic backup", "النسخ الاحتياطي التلقائي") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Daily automatic backup", "نسخ احتياطي يومي"),
									defaultChecked: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Backup time", "وقت النسخ"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "time",
										defaultValue: "02:00"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Retention period", "مدة الاحتفاظ"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
										L("30 days", "٣٠ يوماً"),
										L("90 days", "٩٠ يوماً"),
										L("1 year", "سنة واحدة")
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
											className: "size-4",
											"aria-hidden": true
										}),
										" ",
										t(L("Run backup now", "تشغيل النسخ الآن"))
									]
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Recent backups", "النسخ الأخيرة") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-sm font-medium",
										children: [
											"rehlah-backup-2026-07-",
											12 - i,
											".sql"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "248 MB · 02:00"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									"aria-label": t(L("Download", "تنزيل")),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									})
								})]
							}, i))
						})] })]
					})
				]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: userOpen,
				onClose: () => setUserOpen(false),
				title: L("Add user", "إضافة مستخدم"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setUserOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setUserOpen(false);
						toast.push("success", L("Create user — completed", "إنشاء المستخدم — تم بنجاح"));
					},
					children: t(L("Create user", "إنشاء المستخدم"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Full name", "الاسم الكامل"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Email", "البريد الإلكتروني"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "email" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Mobile", "الجوال"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "tel",
								placeholder: "+966 5X XXX XXXX"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Role", "الدور"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: ROLES })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Status", "الحالة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Active", "نشط"), L("Suspended", "موقوف")] })
						})
					]
				})
			})
		]
	});
}
function PricingModule() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("services");
	const [serviceOpen, setServiceOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Pricing", "التسعير"),
				description: L("Service catalogue, packages and insurance rates", "دليل الخدمات والباقات وأسعار التأمين"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setServiceOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Add service", "إضافة خدمة"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: "Pricing tabs",
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "services",
						label: L("Services", "الخدمات"),
						count: services.length
					},
					{
						id: "packages",
						label: L("Packages", "الباقات"),
						count: 4
					},
					{
						id: "insurance",
						label: L("Insurance rates", "أسعار التأمين"),
						count: 6
					},
					{
						id: "discounts",
						label: L("Discounts", "الخصومات")
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-in-soft space-y-4",
				children: [
					tab === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search services", "بحث في الخدمات") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						className: "w-40",
						options: [L("All specialties", "كل التخصصات"), ...SPECIALTIES]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Service catalogue", "دليل الخدمات"),
						columns: [
							L("Code", "الرمز"),
							L("Service", "الخدمة"),
							L("Specialty", "التخصص"),
							L("Duration", "المدة"),
							L("Price", "السعر"),
							L("VAT", "الضريبة"),
							L("Status", "الحالة"),
							L("Actions", "إجراءات")
						],
						rows: services.map((s, i) => [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs",
								children: `SRV-${String(i + 1).padStart(3, "0")}`
							}),
							t(s.name),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "primary",
								children: t(spec(i % 5))
							}),
							`45 ${t(L("min", "دقيقة"))}`,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: s.single }),
							"15%",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "success",
								children: t(L("Active", "نشطة"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [
								A$1.edit,
								A$1.view,
								A$1.del
							] })
						])
					})] }),
					tab === "packages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
						children: [
							{
								n: L("Starter — 4 sessions", "البداية — ٤ جلسات"),
								p: 1200
							},
							{
								n: L("Standard — 8 sessions", "القياسية — ٨ جلسات"),
								p: 2240
							},
							{
								n: L("Intensive — 12 sessions", "المكثفة — ١٢ جلسة"),
								p: 3180
							},
							{
								n: L("Family programme", "برنامج الأسرة"),
								p: 4500
							}
						].map((pk, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							tint: i === 1 ? "green" : "none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-semibold",
									children: t(pk.n)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-2xl font-bold tabular-nums",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: pk.p })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t(L("Valid 6 months · transferable", "صالحة ٦ أشهر · قابلة للتحويل"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "secondary",
										className: "w-full",
										children: t(L("Edit package", "تعديل الباقة"))
									})
								})
							]
						}, i))
					}),
					tab === "insurance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						caption: L("Insurance rates", "أسعار التأمين"),
						columns: [
							L("Insurer", "شركة التأمين"),
							L("Service", "الخدمة"),
							L("Contract rate", "السعر التعاقدي"),
							L("Patient share", "حصة المريض"),
							L("Approval required", "يتطلب موافقة"),
							L("Actions", "إجراءات")
						],
						rows: services.map((s, i) => [
							t(L("Bupa Arabia", "بوبا العربية")),
							t(s.name),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: Math.round(s.single * .85) }),
							"20%",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: i % 2 ? "warning" : "neutral",
								children: t(i % 2 ? L("Yes", "نعم") : L("No", "لا"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { items: [A$1.edit, A$1.view] })
						])
					}),
					tab === "discounts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: L("Discount rules", "قواعد الخصم") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Discount name", "اسم الخصم"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: t(L("Sibling discount", "خصم الإخوة")) })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Type", "النوع"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Percentage", "نسبة مئوية"), L("Fixed amount", "مبلغ ثابت")] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: L("Value", "القيمة"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											defaultValue: 10
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									label: L("Requires manager approval", "يتطلب موافقة المدير"),
									defaultChecked: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { label: L("Stackable with packages", "قابل للدمج مع الباقات") })
							]
						})]
					})
				]
			}, tab),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: serviceOpen,
				onClose: () => setServiceOpen(false),
				title: L("Add / edit service", "إضافة / تعديل خدمة"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setServiceOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setServiceOpen(false);
						toast.push("success", L("Save service — completed", "حفظ الخدمة — تم بنجاح"));
					},
					children: t(L("Save service", "حفظ الخدمة"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Service code", "رمز الخدمة"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "SRV-001" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Service name", "اسم الخدمة"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Specialty", "التخصص"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Duration (minutes)", "المدة (دقائق)"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								defaultValue: 45
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Price (SAR)", "السعر (ر.س)"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								defaultValue: 350
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("VAT", "الضريبة"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("15% standard", "١٥٪ قياسية"), L("Exempt", "معفاة")] })
						})
					]
				})
			})
		]
	});
}
function NotificationsModule() {
	const { t } = useI18n();
	const [tab, setTab] = (0, import_react.useState)("inbox");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Notifications & communication", "الإشعارات والتواصل"),
				description: L("Cross-cutting reminders, SMS/WhatsApp templates and delivery log", "التذكيرات وقوالب الرسائل وسجل الإرسال"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
					className: "size-4",
					"aria-hidden": true
				}), t(L("New broadcast", "رسالة جماعية"))] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Sent today", "أُرسلت اليوم"),
						value: "418",
						change: "+8.2%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Delivered", "تم التسليم"),
						value: "97.4%",
						change: "+0.6%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Unread in app", "غير مقروءة"),
						value: "12",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Templates", "القوالب"),
						value: "24",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "inbox",
						label: L("Inbox", "الوارد"),
						count: notifications.length
					},
					{
						id: "templates",
						label: L("Templates", "القوالب")
					},
					{
						id: "rules",
						label: L("Reminder rules", "قواعد التذكير")
					}
				]
			}),
			tab === "inbox" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "space-y-3",
				children: notifications.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-2xl border border-border p-4", n.unread ? "bg-tint-green" : "bg-surface"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 grid size-9 shrink-0 place-items-center rounded-xl bg-surface text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
								className: "size-4",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: t(n.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-sm text-muted-foreground",
								children: t(n.body)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-xs text-muted-foreground",
							children: t(n.time)
						})
					]
				}, i))
			}),
			tab === "templates" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Message templates", "قوالب الرسائل"),
				columns: [
					L("Template", "القالب"),
					L("Channel", "القناة"),
					L("Language", "اللغة"),
					L("Status", "الحالة")
				],
				rows: [
					[
						t(L("Appointment reminder", "تذكير بالموعد")),
						"SMS",
						"EN / AR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "success",
							children: t(L("Active", "نشط"))
						}, "a")
					],
					[
						t(L("Invoice due", "استحقاق فاتورة")),
						"WhatsApp",
						"EN / AR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "success",
							children: t(L("Active", "نشط"))
						}, "b")
					],
					[
						t(L("Consent expiring", "انتهاء موافقة")),
						"Email",
						"EN / AR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "warning",
							children: t(L("Draft", "مسودة"))
						}, "c")
					],
					[
						t(L("Session cancelled", "إلغاء جلسة")),
						"Push",
						"EN / AR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "success",
							children: t(L("Active", "نشط"))
						}, "d")
					]
				]
			}),
			tab === "rules" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Send appointment reminder", "إرسال تذكير الموعد"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("24 hours before", "قبل ٢٤ ساعة"), L("2 hours before", "قبل ساعتين")] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Channel", "القناة"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
							"SMS",
							"WhatsApp",
							"Email",
							L("Push", "إشعار")
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Invoice follow-up after", "متابعة الفاتورة بعد"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("3 days", "٣ أيام"), L("7 days", "٧ أيام")] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Quiet hours", "ساعات الصمت"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "22:00 – 07:00" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Default message body", "نص الرسالة الافتراضي"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: t(L("Reminder: your session at Rehlah is tomorrow.", "تذكير: جلستك في رحلة غداً.")) })
						})
					})
				]
			})
		]
	});
}
function PortalManagementModule() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Patient portal management", "إدارة بوابة المريض"),
				description: L("Guardian accounts, access rights and portal activity", "حسابات أولياء الأمور والصلاحيات والنشاط")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Portal accounts", "حسابات البوابة"),
						value: "412",
						change: "+5.1%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareUserRound, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Mobile app installs", "تثبيتات التطبيق"),
						value: "286",
						change: "+11.4%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Pending invites", "دعوات معلقة"),
						value: "18",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Weekly logins", "دخول أسبوعي"),
						value: "1,204",
						change: "+3.8%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search guardians", "بحث أولياء الأمور") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: t(L("Invite guardian", "دعوة ولي أمر"))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Portal accounts", "حسابات البوابة"),
				columns: [
					L("Guardian", "ولي الأمر"),
					L("Linked patient", "المريض المرتبط"),
					L("Access", "الصلاحية"),
					L("Last login", "آخر دخول"),
					L("Status", "الحالة")
				],
				rows: patients.slice(0, 6).map((p, i) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: t(p.name)
					}, "g"),
					t(p.name),
					i % 2 === 0 ? t(L("Full", "كاملة")) : t(L("View only", "عرض فقط")),
					p.lastVisit,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: i % 3 === 0 ? "warning" : "success",
						children: i % 3 === 0 ? t(L("Invited", "مدعو")) : t(L("Active", "نشط"))
					}, "s")
				])
			})
		]
	});
}
function QuickLinks({ items, onNavigate }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-[15px] font-semibold",
			children: t(L("Quick actions", "إجراءات سريعة"))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: items.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onNavigate(q.id),
				className: "flex min-h-11 items-center gap-3 rounded-2xl border border-border p-4 text-start text-sm font-medium transition-colors hover:bg-tint-green/70 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 shrink-0 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]",
					children: q.icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate",
					children: t(q.label)
				})]
			}, `${q.id}-${i}`))
		})]
	});
}
function SpecialistDashboard({ onNavigate }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Specialist dashboard", "لوحة الأخصائي"),
				description: L("Your caseload, today's sessions and pending notes", "حالاتك وجلسات اليوم والملاحظات المعلقة"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => onNavigate("calendar"),
					children: t(L("My schedule", "جدولي"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onNavigate("plans"),
					children: t(L("Open treatment plans", "الخطط العلاجية"))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Today's sessions", "جلسات اليوم"),
						value: "7",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Active caseload", "الحالات النشطة"),
						value: "23",
						change: "+2",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Notes pending", "ملاحظات معلقة"),
						value: "4",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Goal achievement", "تحقيق الأهداف"),
						value: "72%",
						change: "+4.5%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[15px] font-semibold",
						children: t(L("Today's schedule", "جدول اليوم"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: appointments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-xl bg-tint-green px-2.5 py-1 text-sm font-semibold text-[var(--primary-deep)] tabular-nums",
									children: a.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: t(pat(a.patient).name)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: [
											t(a.type),
											" · ",
											t(spec(a.specialty))
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(a.status.en),
									children: t(a.status)
								})
							]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[15px] font-semibold",
						children: t(L("Treatment goal progress", "تقدم الأهداف العلاجية"))
					}), treatmentPlans.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-medium",
								children: t(pat(p.patient).name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground tabular-nums",
								children: [p.progress, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: p.progress })]
					}, i))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLinks, {
				onNavigate,
				items: [
					{
						id: "calendar",
						label: L("My schedule", "جدولي"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "registry",
						label: L("My patients", "مرضاي"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "assessments",
						label: L("Assessments", "التقييمات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "reports",
						label: L("Reports", "التقارير"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							className: "size-4",
							"aria-hidden": true
						})
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
				title: L("Sessions delivered (30 days)", "الجلسات المنفذة (٣٠ يوماً)"),
				summary: "Line chart of sessions delivered over the last 30 days",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
					data: visits30,
					x: "day",
					y: "visits"
				})
			})
		]
	});
}
function ReceptionistDashboard({ onNavigate }) {
	const { t } = useI18n();
	const toast = useToast();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Reception dashboard", "لوحة الاستقبال"),
				description: L("Check-ins, waiting list and today's arrivals", "تسجيل الحضور وقائمة الانتظار")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Checked in", "تم الحضور"),
						value: "18",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Waiting", "قيد الانتظار"),
						value: "5",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("No-shows", "لم يحضر"),
						value: "2",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Calls handled", "المكالمات"),
						value: "46",
						change: "+9%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: L("Search by file number or name", "بحث برقم الملف أو الاسم") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onNavigate("scheduling"),
					children: t(L("Quick booking", "حجز سريع"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => onNavigate("registry"),
					children: t(L("Register patient", "تسجيل مريض"))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLinks, {
				onNavigate,
				items: [
					{
						id: "registry",
						label: L("Patient registration", "تسجيل المرضى"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "scheduling",
						label: L("Scheduling", "الحجوزات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "calendar",
						label: L("Calendar", "التقويم"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "invoices",
						label: L("Billing", "الفوترة"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
							className: "size-4",
							"aria-hidden": true
						})
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Today's arrivals", "حضور اليوم"),
				columns: [
					L("Time", "الوقت"),
					L("Patient", "المريض"),
					L("Specialist", "الأخصائي"),
					L("Status", "الحالة"),
					L("Action", "إجراء")
				],
				rows: appointments.map((a) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: a.time
					}, "t"),
					t(pat(a.patient).name),
					t(doc(a.specialist)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(a.status.en),
						children: t(a.status)
					}, "s"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => toast.push("success", L("Patient checked in", "تم تسجيل حضور المريض")),
						children: t(L("Check in", "تسجيل حضور"))
					}, "b")
				])
			})
		]
	});
}
function AccountantDashboard({ onNavigate }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Accounting dashboard", "لوحة المحاسبة"),
				description: L("Revenue, collections and outstanding balances", "الإيرادات والتحصيل والأرصدة المستحقة"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onNavigate("invoices"),
					children: t(L("Open invoices", "فتح الفواتير"))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Revenue this month", "إيراد الشهر"),
						value: "311K SAR",
						change: "+6.5%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Collected", "المحصّل"),
						value: "284K SAR",
						change: "+4.1%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Outstanding", "المستحق"),
						value: "27K SAR",
						change: "-2.3%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Unpaid invoices", "فواتير غير مدفوعة"),
						value: "9",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Monthly revenue (K SAR)", "الإيراد الشهري (ألف ريال)"),
					summary: "Bar chart of monthly revenue",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
						data: revenueMonthly,
						x: "m",
						keys: ["revenue"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Attendance mix", "توزيع الحضور"),
					summary: "Donut chart of attendance status distribution",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { data: attendanceStatus })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLinks, {
				onNavigate,
				items: [
					{
						id: "invoices",
						label: L("Invoices", "الفواتير"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "invoices",
						label: L("Payments", "المدفوعات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "pricing",
						label: L("Pricing & packages", "التسعير والباقات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tags, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "reports",
						label: L("Financial reports", "التقارير المالية"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							className: "size-4",
							"aria-hidden": true
						})
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				caption: L("Latest transactions", "أحدث الحركات"),
				columns: [
					L("Transaction", "الحركة"),
					L("Date", "التاريخ"),
					L("Patient", "المريض"),
					L("Type", "النوع"),
					L("Amount", "المبلغ"),
					L("Method", "الوسيلة")
				],
				rows: payments.map((p) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: p.txn
					}, "x"),
					p.date,
					t(pat(p.patient).name),
					t(p.type),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money$1, { v: p.amount }, "m"),
					t(p.method)
				])
			})
		]
	});
}
function AssistantDashboard({ onNavigate }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Assistant dashboard", "لوحة المساعد"),
				description: L("Session preparation, rooms and equipment", "تجهيز الجلسات والغرف والأجهزة")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Rooms prepared", "غرف مجهزة"),
						value: "6 / 8",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Sessions supported", "جلسات مدعومة"),
						value: "11",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Equipment issues", "أعطال الأجهزة"),
						value: "1",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Documents uploaded", "مستندات مرفوعة"),
						value: "14",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[15px] font-semibold",
					children: t(L("Preparation checklist", "قائمة التجهيز"))
				}), [
					L("Sensory room 2 — mats sanitised", "غرفة الحس ٢ — تعقيم الحصائر"),
					L("Gait trainer calibrated", "معايرة جهاز المشي"),
					L("Speech cards set for 08:30 session", "بطاقات النطق لجلسة ٨:٣٠"),
					L("Guardian waiting area restocked", "تجهيز منطقة انتظار أولياء الأمور")
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 rounded-2xl border border-border p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						defaultChecked: i < 2,
						className: "size-4 accent-[var(--primary)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(item) })]
				}, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLinks, {
				onNavigate,
				items: [
					{
						id: "registry",
						label: L("Patients", "المرضى"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "scheduling",
						label: L("Scheduling", "الحجوزات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "documents",
						label: L("Documents", "المستندات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "consents",
						label: L("Consents", "الموافقات"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-4",
							"aria-hidden": true
						})
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
				title: L("Specialty load", "الحمل حسب التخصص"),
				summary: "Donut chart of session distribution by specialty",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { data: specialtyDistribution })
			})
		]
	});
}
var NAV$1 = [
	{
		group: L("Overview", "نظرة عامة"),
		items: [{
			id: "dashboard",
			label: L("Dashboard", "لوحة التحكم"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {
				className: "size-4",
				"aria-hidden": true
			})
		}, {
			id: "reports",
			label: L("Reports", "التقارير"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
				className: "size-4",
				"aria-hidden": true
			})
		}]
	},
	{
		group: L("Clinical", "السريري"),
		items: [
			{
				id: "registry",
				label: L("Patient registry", "سجل المرضى"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "profile",
				label: L("Patient profile", "ملف المريض"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareUserRound, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "scheduling",
				label: L("Scheduling", "الحجوزات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "calendar",
				label: L("Calendar", "التقويم"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "plans",
				label: L("Treatment plans", "الخطط العلاجية"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "assessments",
				label: L("Assessments", "التقييمات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "forms",
				label: L("Form builder", "منشئ النماذج"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "referrals",
				label: L("Referrals", "الإحالات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "sickleave",
				label: L("Sick leave", "الإجازات المرضية"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePenLine, {
					className: "size-4",
					"aria-hidden": true
				})
			}
		]
	},
	{
		group: L("Records", "السجلات"),
		items: [{
			id: "documents",
			label: L("Documents", "المستندات"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
				className: "size-4",
				"aria-hidden": true
			})
		}, {
			id: "consents",
			label: L("Consents", "الموافقات"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
				className: "size-4",
				"aria-hidden": true
			})
		}]
	},
	{
		group: L("Finance", "المالية"),
		items: [{
			id: "invoices",
			label: L("Invoices & payments", "الفواتير والمدفوعات"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
				className: "size-4",
				"aria-hidden": true
			})
		}, {
			id: "pricing",
			label: L("Pricing & packages", "التسعير والباقات"),
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tags, {
				className: "size-4",
				"aria-hidden": true
			})
		}]
	},
	{
		group: L("System", "النظام"),
		items: [
			{
				id: "notifications",
				label: L("Notifications", "الإشعارات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "portal",
				label: L("Portal management", "إدارة البوابة"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "administration",
				label: L("Administration", "الإدارة"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, {
					className: "size-4",
					"aria-hidden": true
				})
			}
		]
	}
];
var ALL_ITEMS = NAV$1.flatMap((g) => g.items.map((i) => ({
	...i,
	group: g.group
})));
var ROLE_MODULES = {
	admin: ALL_ITEMS.map((i) => i.id),
	specialist: [
		"dashboard",
		"registry",
		"profile",
		"scheduling",
		"calendar",
		"plans",
		"assessments",
		"forms",
		"referrals",
		"sickleave",
		"documents",
		"consents",
		"reports"
	],
	receptionist: [
		"dashboard",
		"registry",
		"profile",
		"scheduling",
		"calendar",
		"documents",
		"consents",
		"invoices",
		"notifications",
		"portal"
	],
	accountant: [
		"dashboard",
		"invoices",
		"pricing",
		"reports",
		"registry",
		"notifications"
	],
	assistant: [
		"dashboard",
		"registry",
		"profile",
		"scheduling",
		"calendar",
		"documents",
		"consents",
		"assessments"
	],
	patient: ["dashboard"]
};
function CommandPalette({ open, onClose, items, onPick }) {
	const { t } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) setQ("");
	}, [open]);
	if (!open) return null;
	const term = q.trim().toLowerCase();
	const results = items.filter((i) => !term || i.label.en.toLowerCase().includes(term) || i.label.ar.includes(term));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[150] flex items-start justify-center p-4 pt-[12vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-[oklch(0.32_0.01_229_/_0.4)] backdrop-blur-[2px]",
			onClick: onClose,
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": t(L("Command palette", "لوحة الأوامر")),
			className: "animate-in-soft relative flex max-h-[70vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-lifted)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute top-1/2 start-5 size-4 -translate-y-1/2 text-muted-foreground",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: q,
					onChange: (e) => setQ(e.target.value),
					"aria-label": t(L("Search modules", "بحث في الوحدات")),
					placeholder: t(L("Jump to a module…", "انتقل إلى وحدة…")),
					className: "h-14 w-full bg-transparent ps-12 pe-4 text-[15px] outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "min-h-0 flex-1 overflow-y-auto p-2",
				children: [results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-4 py-8 text-center text-sm text-muted-foreground",
					children: t(L("No matching module", "لا توجد وحدة مطابقة"))
				}), results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						onPick(r.id);
						onClose();
					},
					className: "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-tint-green/70 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: r.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate font-medium",
							children: t(r.label)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: t(r.group)
						})
					]
				}) }, r.id))]
			})]
		})]
	});
}
function AdminConsoleInner() {
	const { t, lang } = useI18n();
	const [role, setRole] = (0, import_react.useState)("admin");
	const [module, setModule] = (0, import_react.useState)("dashboard");
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const [paletteOpen, setPaletteOpen] = (0, import_react.useState)(false);
	const allowed = ROLE_MODULES[role];
	const current = allowed.includes(module) ? module : "dashboard";
	const currentItem = ALL_ITEMS.find((i) => i.id === current);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setPaletteOpen((s) => !s);
			}
			if (e.key === "Escape") setPaletteOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const go = (id) => {
		if (ALL_ITEMS.some((i) => i.id === id) && allowed.includes(id)) {
			setModule(id);
			setNavOpen(false);
		}
	};
	const roleDashboards = {
		specialist: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialistDashboard, { onNavigate: go }),
		receptionist: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceptionistDashboard, { onNavigate: go }),
		accountant: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountantDashboard, { onNavigate: go }),
		assistant: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantDashboard, { onNavigate: go })
	};
	const render = () => {
		if (current === "dashboard") return roleDashboards[role] ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutiveDashboard, { onNavigate: go });
		switch (current) {
			case "registry": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientRegistryModule, { onOpenProfile: () => setModule("profile") });
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientProfileModule, {});
			case "scheduling": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulingModule, {});
			case "calendar": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarModule, {});
			case "plans": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentPlansModule, {});
			case "assessments": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentsModule, {});
			case "forms": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBuilderModule, {});
			case "referrals": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferralsModule, {});
			case "documents": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsModule, {});
			case "consents": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsentsModule, {});
			case "sickleave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SickLeaveModule, {});
			case "invoices": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoicesModule, {});
			case "reports": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsModule, {});
			case "administration": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdministrationModule, {});
			case "pricing": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingModule, {});
			case "notifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsModule, {});
			case "portal": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalManagementModule, {});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutiveDashboard, { onNavigate: go });
		}
	};
	const sidebar = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": t(L("Console modules", "وحدات النظام")),
		className: "space-y-6",
		children: NAV$1.map((group) => {
			const items = group.items.filter((i) => allowed.includes(i.id));
			if (!items.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pb-1 text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase",
					children: t(group.group)
				}), items.map((item) => {
					const active = item.id === current;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(item.id),
						"aria-current": active ? "page" : void 0,
						className: cn("group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-[13px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none", active ? "bg-tint-green text-[var(--primary-deep)] shadow-[var(--shadow-soft)]" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute start-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-e-full bg-primary transition-opacity", active ? "opacity-100" : "opacity-0"),
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0",
								children: item.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate",
								children: t(item.label)
							})
						]
					}, item.id);
				})]
			}, group.group.en);
		})
	});
	const roleSelect = (id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: id,
		className: "text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase",
		children: t(L("Signed in as", "تسجيل الدخول كـ"))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-1.5 flex w-full items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			value: role,
			onChange: (e) => setRole(e.target.value),
			className: "h-11 w-full appearance-none truncate rounded-xl border border-border bg-surface ps-3.5 pe-10 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]",
			children: ROLES.filter((r) => r.id !== "patient").map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: r.id,
				children: t(r.label)
			}, r.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "pointer-events-none absolute end-3 size-4 text-muted-foreground",
			"aria-hidden": true
		})]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[70vh] bg-[var(--background)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1600px] gap-6 px-4 py-6 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-64 shrink-0 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 max-h-[calc(100vh-8rem)] space-y-5 overflow-y-auto rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPlate, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-bold",
										children: t(L("Rehlah Console", "لوحة رحلة"))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-[11px] text-muted-foreground",
										children: t(L("Riyadh centre", "مركز الرياض"))
									})]
								})]
							}),
							roleSelect("role-switch"),
							sidebar
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 flex-1 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky top-20 z-40 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-3xl border border-border bg-surface/95 p-3 shadow-[var(--shadow-soft)] backdrop-blur lg:grid-cols-[minmax(0,1fr)_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setNavOpen(true),
									"aria-label": t(L("Open modules menu", "فتح قائمة الوحدات")),
									className: "grid size-11 place-items-center rounded-xl border border-border lg:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
										className: "size-5",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPaletteOpen(true),
									className: "relative hidden min-w-0 items-center gap-2 rounded-xl border border-border bg-tint-blue/60 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 lg:flex lg:h-11",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "size-4",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 truncate",
											children: t(L("Search patients, invoices, sessions…", "ابحث في المرضى والفواتير والجلسات…"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
											className: "ms-auto rounded-md border border-border bg-surface px-1.5 py-0.5 text-[11px] font-semibold",
											children: "⌘K"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "min-w-0 truncate text-sm font-semibold lg:hidden",
									children: t(currentItem.label)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex shrink-0 items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "primary",
											children: t(ROLES.find((r) => r.id === role).label)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											"aria-label": t(L("Notifications", "الإشعارات")),
											onClick: () => go("notifications"),
											className: "relative grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
												className: "size-5",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute end-2.5 top-2.5 size-2 rounded-full bg-destructive" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 place-items-center rounded-xl bg-tint-green text-sm font-bold text-[var(--primary-deep)]",
											children: lang === "ar" ? "ن" : "N"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": t(L("Breadcrumb", "مسار التنقل")),
							className: "px-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => go("dashboard"),
										className: "rounded hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
										children: t(L("Console", "اللوحة"))
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										"aria-hidden": true,
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(currentItem.group) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										"aria-hidden": true,
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "font-semibold text-foreground",
										"aria-current": "page",
										children: t(currentItem.label)
									})
								]
							})
						}),
						render()
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				open: paletteOpen,
				onClose: () => setPaletteOpen(false),
				items: ALL_ITEMS.filter((i) => allowed.includes(i.id)),
				onPick: (id) => go(id)
			}),
			navOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-90 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-[oklch(0.32_0.01_229_/_0.35)]",
					onClick: () => setNavOpen(false),
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-in-soft absolute inset-y-0 start-0 w-72 overflow-y-auto border-e border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold",
								children: t(L("Modules", "الوحدات"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setNavOpen(false),
								"aria-label": t(L("Close menu", "إغلاق القائمة")),
								className: "grid size-10 place-items-center rounded-xl hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									"aria-hidden": true
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4",
							children: roleSelect("role-switch-mobile")
						}),
						sidebar
					]
				})]
			})
		]
	});
}
function AdminConsole() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminConsoleInner, {}) });
}
var portalAppointments = [
	{
		id: "APT-2081",
		date: "12 Aug 2026",
		iso: "2026-08-12",
		time: "08:30",
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"),
		status: L("Confirmed", "مؤكد"),
		notes: L("Bring the home exercise log", "إحضار سجل التمارين المنزلية"),
		upcoming: true
	},
	{
		id: "APT-2082",
		date: "19 Aug 2026",
		iso: "2026-08-19",
		time: "09:15",
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"),
		status: L("Confirmed", "مؤكد"),
		notes: L("Articulation drills", "تمارين المخارج"),
		upcoming: true
	},
	{
		id: "APT-2083",
		date: "26 Aug 2026",
		iso: "2026-08-26",
		time: "10:00",
		specialty: 1,
		specialist: 2,
		type: L("Assessment", "تقييم"),
		location: L("Assessment room 1", "غرفة التقييم ١"),
		status: L("Pending", "قيد الانتظار"),
		notes: L("Quarterly re-assessment", "إعادة تقييم ربع سنوية"),
		upcoming: true
	},
	{
		id: "APT-2074",
		date: "05 Aug 2026",
		iso: "2026-08-05",
		time: "08:30",
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"),
		status: L("Present", "حضر"),
		notes: L("Good participation", "مشاركة جيدة"),
		upcoming: false
	},
	{
		id: "APT-2069",
		date: "29 Jul 2026",
		iso: "2026-07-29",
		time: "08:30",
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"),
		status: L("Present", "حضر"),
		notes: L("Home programme updated", "تحديث البرنامج المنزلي"),
		upcoming: false
	},
	{
		id: "APT-2061",
		date: "22 Jul 2026",
		iso: "2026-07-22",
		time: "08:30",
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"),
		status: L("Excused absence", "غياب بعذر"),
		notes: L("Travel — rescheduled", "سفر — أعيد الجدولة"),
		upcoming: false
	},
	{
		id: "APT-2055",
		date: "15 Jul 2026",
		iso: "2026-07-15",
		time: "11:00",
		specialty: 2,
		specialist: 0,
		type: L("Consultation", "استشارة"),
		location: L("Clinic 2", "عيادة ٢"),
		status: L("Present", "حضر"),
		notes: L("Plan review with guardian", "مراجعة الخطة مع ولي الأمر"),
		upcoming: false
	},
	{
		id: "APT-2048",
		date: "08 Jul 2026",
		iso: "2026-07-08",
		time: "08:30",
		specialty: 2,
		specialist: 0,
		type: L("Individual session", "جلسة فردية"),
		location: L("Room 4 — Riyadh centre", "غرفة ٤ — مركز الرياض"),
		status: L("Cancelled", "ملغي"),
		notes: L("Cancelled by centre", "ألغي من المركز"),
		upcoming: false
	}
];
var portalSlots = [
	"08:30",
	"09:15",
	"10:00",
	"11:00",
	"12:30",
	"15:00",
	"16:45"
];
var portalPlans = [{
	id: "TP-3011",
	title: L("Speech & language plan", "خطة النطق واللغة"),
	specialty: 2,
	specialist: 0,
	start: "01 Mar 2026",
	end: "01 Sep 2026",
	sessions: "24 / 36",
	frequency: L("2 sessions per week", "جلستان أسبوعياً"),
	progress: 68,
	status: L("Active", "نشطة"),
	goals: [
		{
			goal: L("Produce /s/ in words", "نطق حرف السين في الكلمات"),
			progress: 80,
			target: L("90% accuracy", "دقة ٩٠٪")
		},
		{
			goal: L("Follow 2-step instructions", "تنفيذ تعليمات من خطوتين"),
			progress: 62,
			target: L("8 of 10 trials", "٨ من ١٠ محاولات")
		},
		{
			goal: L("50 new vocabulary items", "٥٠ مفردة جديدة"),
			progress: 55,
			target: L("50 words", "٥٠ كلمة")
		}
	],
	homeProgramme: [
		L("10 minutes of /s/ word cards daily", "١٠ دقائق يومياً لبطاقات حرف السين"),
		L("Read one short story together each evening", "قراءة قصة قصيرة كل مساء"),
		L("Record two new words in the vocabulary log", "تسجيل كلمتين جديدتين في السجل")
	]
}, {
	id: "TP-2884",
	title: L("Occupational therapy plan", "خطة العلاج الوظيفي"),
	specialty: 1,
	specialist: 2,
	start: "20 Jan 2026",
	end: "20 Jul 2026",
	sessions: "42 / 48",
	frequency: L("1 session per week", "جلسة أسبوعياً"),
	progress: 100,
	status: L("Completed", "مكتملة"),
	goals: [{
		goal: L("Tolerate textures", "تحمل الملمس"),
		progress: 100,
		target: L("5 textures", "٥ ملامس")
	}, {
		goal: L("Fine motor grip", "قبضة الحركة الدقيقة"),
		progress: 96,
		target: L("Tripod grasp", "قبضة ثلاثية")
	}],
	homeProgramme: [L("Play-dough activity twice weekly", "نشاط الصلصال مرتين أسبوعياً")]
}];
var portalAssessments = [
	{
		id: "AS-7741",
		name: L("Speech & language re-assessment", "إعادة تقييم النطق واللغة"),
		specialty: 2,
		specialist: 0,
		date: "12 Jul 2026",
		score: 82,
		previous: 74,
		status: L("Completed", "مكتمل"),
		summary: L("Clear gains in articulation and receptive language.", "تحسن واضح في المخارج واللغة الاستقبالية."),
		domains: [
			{
				name: L("Articulation", "المخارج"),
				score: 84
			},
			{
				name: L("Receptive language", "اللغة الاستقبالية"),
				score: 88
			},
			{
				name: L("Expressive language", "اللغة التعبيرية"),
				score: 74
			}
		]
	},
	{
		id: "AS-7620",
		name: L("Speech & language re-assessment", "إعادة تقييم النطق واللغة"),
		specialty: 2,
		specialist: 0,
		date: "12 Apr 2026",
		score: 74,
		previous: 66,
		status: L("Completed", "مكتمل"),
		summary: L("Steady progress; vocabulary remains a focus area.", "تقدم مستمر؛ المفردات تبقى محور التركيز."),
		domains: [
			{
				name: L("Articulation", "المخارج"),
				score: 72
			},
			{
				name: L("Receptive language", "اللغة الاستقبالية"),
				score: 80
			},
			{
				name: L("Expressive language", "اللغة التعبيرية"),
				score: 68
			}
		]
	},
	{
		id: "AS-7502",
		name: L("Initial speech assessment", "التقييم المبدئي للنطق"),
		specialty: 2,
		specialist: 0,
		date: "05 Jan 2026",
		score: 66,
		previous: 0,
		status: L("Completed", "مكتمل"),
		summary: L("Baseline assessment used to build the treatment plan.", "تقييم أساسي لبناء الخطة العلاجية."),
		domains: [
			{
				name: L("Articulation", "المخارج"),
				score: 60
			},
			{
				name: L("Receptive language", "اللغة الاستقبالية"),
				score: 72
			},
			{
				name: L("Expressive language", "اللغة التعبيرية"),
				score: 62
			}
		]
	}
];
var assessmentTrend = [
	{
		period: "Jan",
		score: 66
	},
	{
		period: "Feb",
		score: 68
	},
	{
		period: "Mar",
		score: 71
	},
	{
		period: "Apr",
		score: 74
	},
	{
		period: "May",
		score: 77
	},
	{
		period: "Jun",
		score: 79
	},
	{
		period: "Jul",
		score: 82
	}
];
var portalReports = [
	{
		id: "RP-551",
		name: L("Monthly progress report", "تقرير التقدم الشهري"),
		period: L("July 2026", "يوليو ٢٠٢٦"),
		date: "31 Jul 2026",
		specialist: 0,
		type: L("Progress", "تقدم")
	},
	{
		id: "RP-522",
		name: L("Monthly progress report", "تقرير التقدم الشهري"),
		period: L("June 2026", "يونيو ٢٠٢٦"),
		date: "30 Jun 2026",
		specialist: 0,
		type: L("Progress", "تقدم")
	},
	{
		id: "RP-498",
		name: L("Quarterly assessment report", "تقرير التقييم الربعي"),
		period: L("Q2 2026", "الربع الثاني ٢٠٢٦"),
		date: "12 Apr 2026",
		specialist: 0,
		type: L("Assessment", "تقييم")
	}
];
var portalDocuments = [
	{
		id: "DOC-9011",
		name: L("Lab result — vitamin D", "نتيجة مختبر — فيتامين د"),
		type: L("Lab result", "نتيجة مختبر"),
		date: "02 Jul 2026",
		size: "310 KB",
		by: L("Reem (Reception)", "ريم (الاستقبال)"),
		source: L("Centre", "المركز")
	},
	{
		id: "DOC-8940",
		name: L("Speech assessment report", "تقرير تقييم النطق"),
		type: L("Medical report", "تقرير طبي"),
		date: "12 Apr 2026",
		size: "1.1 MB",
		by: L("Dr. Layla Al-Harbi", "د. ليلى الحربي"),
		source: L("Centre", "المركز")
	},
	{
		id: "DOC-8802",
		name: L("Service contract", "عقد الخدمة"),
		type: L("Contract", "عقد"),
		date: "01 Mar 2026",
		size: "820 KB",
		by: L("Admin", "مدير النظام"),
		source: L("Centre", "المركز")
	},
	{
		id: "DOC-8755",
		name: L("Birth certificate", "شهادة الميلاد"),
		type: L("Identity", "هوية"),
		date: "18 Feb 2026",
		size: "460 KB",
		by: L("Mohammed Al-Otaibi", "محمد العتيبي"),
		source: L("Uploaded by me", "مرفوع مني")
	},
	{
		id: "DOC-8730",
		name: L("Insurance card", "بطاقة التأمين"),
		type: L("Insurance", "تأمين"),
		date: "18 Feb 2026",
		size: "220 KB",
		by: L("Mohammed Al-Otaibi", "محمد العتيبي"),
		source: L("Uploaded by me", "مرفوع مني")
	}
];
var portalConsents = [
	{
		id: "CN-4401",
		name: L("Treatment consent", "موافقة العلاج"),
		description: L("Consent to deliver rehabilitation therapy sessions", "الموافقة على تقديم جلسات التأهيل"),
		body: L("I authorise Rehlah Rehabilitation Centre to provide assessment and therapy services for my child, as described in the agreed treatment plan, and to review progress periodically with the assigned specialist.", "أفوض مركز رحلة للتأهيل بتقديم خدمات التقييم والعلاج لطفلي وفق الخطة العلاجية المتفق عليها ومراجعة التقدم دورياً مع الأخصائي المعالج."),
		signedOn: "01 Mar 2026",
		expires: "01 Mar 2027",
		status: L("Signed", "موقعة"),
		version: "v2.1"
	},
	{
		id: "CN-4478",
		name: L("Data sharing consent", "موافقة مشاركة البيانات"),
		description: L("Share clinical records with insurer and referring hospital", "مشاركة السجلات مع شركة التأمين والمستشفى المحيل"),
		body: L("I consent to sharing my child's clinical records with the insurance provider and the referring hospital for the purpose of claim processing and continuity of care.", "أوافق على مشاركة السجلات السريرية لطفلي مع شركة التأمين والمستشفى المحيل لأغراض معالجة المطالبات واستمرارية الرعاية."),
		signedOn: null,
		expires: "06 Sep 2026",
		status: L("Pending", "معلقة"),
		version: "v1.4"
	},
	{
		id: "CN-4310",
		name: L("Photography consent", "موافقة التصوير"),
		description: L("Use of session photos for clinical documentation", "استخدام صور الجلسات للتوثيق السريري"),
		body: L("I consent to photographs and video recordings being captured during therapy sessions strictly for clinical documentation and progress tracking.", "أوافق على التقاط الصور ومقاطع الفيديو خلال الجلسات لأغراض التوثيق السريري وتتبع التقدم فقط."),
		signedOn: "12 Apr 2026",
		expires: "12 Apr 2027",
		status: L("Signed", "موقعة"),
		version: "v1.0"
	},
	{
		id: "CN-4102",
		name: L("Telehealth consent", "موافقة الرعاية عن بعد"),
		description: L("Remote follow-up consultations", "الاستشارات عن بُعد"),
		body: L("I consent to receiving follow-up consultations through secure video calls when an in-person visit is not required.", "أوافق على تلقي استشارات المتابعة عبر مكالمات مرئية آمنة عندما لا تكون الزيارة الحضورية مطلوبة."),
		signedOn: "01 Mar 2026",
		expires: "01 Mar 2026",
		status: L("Expired", "منتهية"),
		version: "v1.2"
	}
];
var portalInvoices = [
	{
		number: "INV-2026-0412",
		date: "12 Jul 2026",
		due: "26 Jul 2026",
		total: 1200,
		paid: 1200,
		status: L("Paid", "مدفوعة"),
		method: L("Mada", "مدى"),
		items: [{
			desc: L("Speech therapy session", "جلسة علاج نطق"),
			qty: 4,
			unit: 261
		}]
	},
	{
		number: "INV-2026-0388",
		date: "12 Jun 2026",
		due: "26 Jun 2026",
		total: 1400,
		paid: 700,
		status: L("Partial", "جزئية"),
		method: L("Credit card", "بطاقة ائتمانية"),
		items: [{
			desc: L("Speech therapy session", "جلسة علاج نطق"),
			qty: 4,
			unit: 261
		}, {
			desc: L("Progress assessment", "تقييم التقدم"),
			qty: 1,
			unit: 174
		}]
	},
	{
		number: "INV-2026-0344",
		date: "12 May 2026",
		due: "26 May 2026",
		total: 980,
		paid: 0,
		status: L("Unpaid", "غير مدفوعة"),
		method: L("Not paid", "غير مدفوعة"),
		items: [{
			desc: L("Speech therapy session", "جلسة علاج نطق"),
			qty: 3,
			unit: 284
		}]
	},
	{
		number: "INV-2026-0301",
		date: "12 Apr 2026",
		due: "26 Apr 2026",
		total: 1600,
		paid: 1600,
		status: L("Paid", "مدفوعة"),
		method: L("Bank transfer", "تحويل بنكي"),
		items: [{
			desc: L("Family Journey package", "باقة العائلة"),
			qty: 1,
			unit: 1391
		}]
	}
];
var portalPayments = [
	{
		id: "PMT-8812",
		invoice: "INV-2026-0412",
		date: "12 Jul 2026",
		amount: 1200,
		method: L("Mada", "مدى"),
		status: L("Successful", "ناجحة")
	},
	{
		id: "PMT-8640",
		invoice: "INV-2026-0388",
		date: "14 Jun 2026",
		amount: 700,
		method: L("Credit card", "بطاقة ائتمانية"),
		status: L("Successful", "ناجحة")
	},
	{
		id: "PMT-8402",
		invoice: "INV-2026-0301",
		date: "13 Apr 2026",
		amount: 1600,
		method: L("Bank transfer", "تحويل بنكي"),
		status: L("Successful", "ناجحة")
	}
];
var portalSickLeaves = [
	{
		id: "SL-2026-0142",
		issued: "15 Jul 2026",
		from: "15 Jul 2026",
		to: "16 Jul 2026",
		days: 2,
		specialist: 0,
		reason: L("Post-session fatigue", "إرهاق بعد الجلسة"),
		status: L("Issued", "صادرة")
	},
	{
		id: "SL-2026-0098",
		issued: "22 May 2026",
		from: "22 May 2026",
		to: "22 May 2026",
		days: 1,
		specialist: 0,
		reason: L("Medical review", "مراجعة طبية"),
		status: L("Issued", "صادرة")
	},
	{
		id: "SL-2026-0051",
		issued: "10 Mar 2026",
		from: "10 Mar 2026",
		to: "12 Mar 2026",
		days: 3,
		specialist: 2,
		reason: L("Recovery period", "فترة تعافٍ"),
		status: L("Expired", "منتهية")
	}
];
var portalNotifications = [
	{
		id: "NT-901",
		title: L("Appointment reminder", "تذكير بالموعد"),
		body: L("Speech therapy — 12 Aug at 08:30", "علاج النطق — ١٢ أغسطس ٨:٣٠"),
		detail: L("Your child's next session is with Dr. Layla Al-Harbi in Room 4. Please arrive 10 minutes early and bring the home exercise log.", "الجلسة القادمة مع د. ليلى الحربي في غرفة ٤. يرجى الحضور قبل ١٠ دقائق وإحضار سجل التمارين المنزلية."),
		time: L("2h ago", "قبل ساعتين"),
		category: L("Appointments", "المواعيد"),
		unread: true
	},
	{
		id: "NT-898",
		title: L("Consent awaiting signature", "موافقة بانتظار التوقيع"),
		body: L("Data sharing consent expires 06 Sep 2026", "موافقة مشاركة البيانات تنتهي ٦ سبتمبر ٢٠٢٦"),
		detail: L("Please review and sign the data sharing consent so insurance claims can continue to be processed without delay.", "يرجى مراجعة وتوقيع موافقة مشاركة البيانات لاستمرار معالجة مطالبات التأمين دون تأخير."),
		time: L("5h ago", "قبل ٥ ساعات"),
		category: L("Consents", "الموافقات"),
		unread: true
	},
	{
		id: "NT-884",
		title: L("Invoice unpaid", "فاتورة غير مدفوعة"),
		body: L("INV-2026-0344 · 980 SAR", "INV-2026-0344 · ٩٨٠ ريال"),
		detail: L("Invoice INV-2026-0344 is still unpaid. You can settle it securely from the Invoices page.", "الفاتورة INV-2026-0344 لا تزال غير مدفوعة. يمكنك سدادها بأمان من صفحة الفواتير."),
		time: L("Yesterday", "أمس"),
		category: L("Billing", "الفواتير"),
		unread: false
	},
	{
		id: "NT-870",
		title: L("New progress report", "تقرير تقدم جديد"),
		body: L("July 2026 report is ready", "تقرير يوليو ٢٠٢٦ جاهز"),
		detail: L("The July monthly progress report has been published by the care team and is available to download.", "تم نشر تقرير التقدم الشهري ليوليو من فريق الرعاية وهو متاح للتنزيل."),
		time: L("2 days ago", "قبل يومين"),
		category: L("Reports", "التقارير"),
		unread: false
	},
	{
		id: "NT-861",
		title: L("Sick leave issued", "إجازة مرضية صادرة"),
		body: L("SL-2026-0142 · 2 days", "SL-2026-0142 · يومان"),
		detail: L("A sick leave certificate has been issued and can be downloaded or shared from the Sick leave page.", "تم إصدار شهادة إجازة مرضية ويمكن تنزيلها أو مشاركتها من صفحة الإجازات المرضية."),
		time: L("3 weeks ago", "قبل ٣ أسابيع"),
		category: L("Clinical", "سريري"),
		unread: false
	}
];
var portalTone = (s) => {
	return {
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
		Active: "success"
	}[s] ?? "neutral";
};
function Money({ v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-semibold tabular-nums",
		children: [v.toLocaleString(), " SAR"]
	});
}
function PortalDocuments() {
	const { t } = useI18n();
	const toast = useToast();
	const [docs, setDocs] = (0, import_react.useState)(portalDocuments);
	const [uploadOpen, setUploadOpen] = (0, import_react.useState)(false);
	const [view, setView] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)(false);
	const [deleteDoc, setDeleteDoc] = (0, import_react.useState)(null);
	const downloadDocument = (d) => {
		const body = [
			`${t(d.name)}`,
			`${t(L("Type", "النوع"))}: ${t(d.type)}`,
			`${t(L("Date", "التاريخ"))}: ${d.date}`,
			`${t(L("Size", "الحجم"))}: ${d.size}`,
			`${t(L("Added by", "أضيف بواسطة"))}: ${t(d.by)}`
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
		setDocs((d) => [{
			id: `DOC-${9100 + d.length}`,
			name: L(name.trim(), name.trim()),
			type: L("Uploaded file", "ملف مرفوع"),
			date: "07 Aug 2026",
			size: "1.2 MB",
			by: L("Mohammed Al-Otaibi", "محمد العتيبي"),
			source: L("Uploaded by me", "مرفوع مني")
		}, ...d]);
		setUploadOpen(false);
		setName("");
		setErr(false);
		toast.push("success", L("Document uploaded", "تم رفع المستند"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Documents", "المستندات"),
				description: L("Reports, contracts and files shared with the centre", "التقارير والعقود والملفات المشتركة مع المركز"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setUploadOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Upload document", "رفع مستند"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("My documents", "مستنداتي"),
				rows: docs,
				rowKey: (d) => d.id,
				exportName: "rehlah-portal-documents",
				search: (d) => `${d.name.en} ${d.name.ar} ${d.type.en}`,
				searchPlaceholder: L("Search documents", "بحث في المستندات"),
				filters: [{
					id: "source",
					label: L("Source", "المصدر"),
					options: [{
						value: "Centre",
						label: L("From the centre", "من المركز")
					}, {
						value: "Uploaded by me",
						label: L("Uploaded by me", "مرفوع مني")
					}],
					match: (d, v) => d.source.en === v
				}, {
					id: "type",
					label: L("Type", "النوع"),
					options: [
						{
							value: "Medical report",
							label: L("Medical report", "تقرير طبي")
						},
						{
							value: "Lab result",
							label: L("Lab result", "نتيجة مختبر")
						},
						{
							value: "Contract",
							label: L("Contract", "عقد")
						},
						{
							value: "Identity",
							label: L("Identity", "هوية")
						},
						{
							value: "Insurance",
							label: L("Insurance", "تأمين")
						}
					],
					match: (d, v) => d.type.en === v
				}],
				columns: [
					{
						id: "name",
						header: L("Document", "المستند"),
						sort: (d) => d.name.en,
						csv: (d) => d.name.en,
						cell: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: t(d.name)
						})
					},
					{
						id: "type",
						header: L("Type", "النوع"),
						csv: (d) => d.type.en,
						cell: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: t(d.type)
						})
					},
					{
						id: "date",
						header: L("Date", "التاريخ"),
						sort: (d) => d.date,
						csv: (d) => d.date,
						hideBelow: "md",
						cell: (d) => d.date
					},
					{
						id: "size",
						header: L("Size", "الحجم"),
						csv: (d) => d.size,
						hideBelow: "lg",
						cell: (d) => d.size
					},
					{
						id: "by",
						header: L("Added by", "أضيف بواسطة"),
						csv: (d) => d.by.en,
						hideBelow: "lg",
						cell: (d) => t(d.by)
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-end gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setView(d),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
											className: "size-4",
											"aria-hidden": true
										}),
										" ",
										t(L("View", "عرض"))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => downloadDocument(d),
									"aria-label": t(L("Download", "تنزيل")),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								d.source.en === "Uploaded by me" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => setDeleteDoc(d),
									"aria-label": t(L("Delete", "حذف")),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
										className: "size-4",
										"aria-hidden": true
									})
								})
							]
						})
					}
				],
				emptyTitle: L("No documents yet", "لا توجد مستندات"),
				emptyDescription: L("Documents shared by the centre will appear here.", "ستظهر هنا المستندات التي يشاركها المركز."),
				emptyAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setUploadOpen(true),
					children: t(L("Upload document", "رفع مستند"))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: uploadOpen,
				onClose: () => setUploadOpen(false),
				title: L("Upload document", "رفع مستند"),
				subtitle: L("PDF, JPG or PNG up to 10 MB", "PDF أو JPG أو PNG حتى ١٠ ميجابايت"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setUploadOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: upload,
					children: t(L("Upload", "رفع"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Document name", "اسم المستند"),
							required: true,
							hint: err ? L("Please enter at least 3 characters", "يرجى إدخال ٣ أحرف على الأقل") : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: name,
								"aria-invalid": err,
								onChange: (e) => {
									setName(e.target.value);
									setErr(false);
								},
								placeholder: t(L("e.g. Insurance card", "مثال: بطاقة التأمين"))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Category", "التصنيف"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
								L("Medical report", "تقرير طبي"),
								L("Lab result", "نتيجة مختبر"),
								L("Identity", "هوية"),
								L("Insurance", "تأمين")
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-dashed border-border bg-tint-blue/50 px-6 py-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
									className: "mx-auto size-6 text-primary",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-medium",
									children: t(L("Drag a file here or browse", "اسحب ملفاً هنا أو تصفح"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t(L("Your file is encrypted in transit", "ملفك مشفّر أثناء النقل"))
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!view,
				onClose: () => setView(null),
				size: "lg",
				title: view ? view.name : "",
				subtitle: L("Document preview", "معاينة المستند"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						downloadDocument(view);
						setView(null);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Download", "تنزيل"))
					]
				})] }),
				children: view && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
						{
							k: L("Type", "النوع"),
							v: t(view.type)
						},
						{
							k: L("Date", "التاريخ"),
							v: view.date
						},
						{
							k: L("Size", "الحجم"),
							v: view.size
						},
						{
							k: L("Added by", "أضيف بواسطة"),
							v: t(view.by)
						}
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-64 place-items-center rounded-2xl border border-border bg-muted/50 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "mx-auto size-8 text-primary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-medium",
								children: t(view.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: t(L("Secure preview", "معاينة آمنة"))
							})
						] })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!deleteDoc,
				onClose: () => setDeleteDoc(null),
				title: L("Delete document?", "حذف المستند؟"),
				subtitle: deleteDoc ? t(deleteDoc.name) : void 0,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setDeleteDoc(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						setDocs((d) => d.filter((x) => x.id !== deleteDoc?.id));
						toast.push("success", L("Document deleted", "تم حذف المستند"));
						setDeleteDoc(null);
					},
					children: t(L("Delete", "حذف"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t(L("This will permanently remove the document you uploaded. This action cannot be undone.", "سيؤدي هذا إلى حذف المستند الذي رفعته نهائياً. لا يمكن التراجع عن هذا الإجراء."))
				})
			})
		]
	});
}
function PortalConsents() {
	const { t } = useI18n();
	const toast = useToast();
	const [items, setItems] = (0, import_react.useState)(portalConsents);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [view, setView] = (0, import_react.useState)(null);
	const [sign, setSign] = (0, import_react.useState)(null);
	const [agree, setAgree] = (0, import_react.useState)(false);
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => items.filter((c) => tab === "all" ? true : tab === "pending" ? c.status.en === "Pending" : c.status.en !== "Pending"), [items, tab]);
	const confirmSign = () => {
		if (!agree || fullName.trim().length < 3) {
			setError(L("Type your full name and tick the agreement box", "اكتب اسمك الكامل ووافق على الإقرار"));
			return;
		}
		setItems((s) => s.map((c) => c.id === sign?.id ? {
			...c,
			status: L("Signed", "موقعة"),
			signedOn: "07 Aug 2026"
		} : c));
		setSign(null);
		setAgree(false);
		setFullName("");
		setError(null);
		toast.push("success", L("Consent signed successfully", "تم توقيع الموافقة بنجاح"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Consents", "الموافقات"),
				description: L("Review, sign and track consent forms electronically", "مراجعة وتوقيع ومتابعة نماذج الموافقة إلكترونياً")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: t(L("Consent filters", "تصفية الموافقات")),
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "all",
						label: L("All", "الكل"),
						count: items.length
					},
					{
						id: "pending",
						label: L("Awaiting signature", "بانتظار التوقيع"),
						count: items.filter((c) => c.status.en === "Pending").length
					},
					{
						id: "history",
						label: L("History", "السجل"),
						count: items.filter((c) => c.status.en !== "Pending").length
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Consent forms", "نماذج الموافقة"),
				rows,
				rowKey: (c) => c.id,
				exportName: "rehlah-portal-consents",
				search: (c) => `${c.name.en} ${c.name.ar}`,
				searchPlaceholder: L("Search consents", "بحث في الموافقات"),
				columns: [
					{
						id: "name",
						header: L("Consent", "الموافقة"),
						sort: (c) => c.name.en,
						csv: (c) => c.name.en,
						cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: t(c.name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: t(c.description)
							})]
						})
					},
					{
						id: "version",
						header: L("Version", "الإصدار"),
						csv: (c) => c.version,
						hideBelow: "lg",
						cell: (c) => c.version
					},
					{
						id: "signed",
						header: L("Signed on", "تاريخ التوقيع"),
						csv: (c) => c.signedOn ?? "—",
						hideBelow: "md",
						cell: (c) => c.signedOn ?? "—"
					},
					{
						id: "expires",
						header: L("Expires", "تنتهي"),
						csv: (c) => c.expires,
						hideBelow: "md",
						cell: (c) => c.expires
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						csv: (c) => c.status.en,
						cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: portalTone(c.status.en),
							children: t(c.status)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setView(c),
								children: t(L("View", "عرض"))
							}), c.status.en !== "Signed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => setSign(c),
								children: t(L("Sign", "توقيع"))
							})]
						})
					}
				],
				emptyTitle: L("Nothing to sign", "لا يوجد ما يتطلب التوقيع"),
				emptyDescription: L("All consent forms are up to date.", "جميع نماذج الموافقة محدثة.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!view,
				onClose: () => setView(null),
				size: "lg",
				title: view ? view.name : "",
				subtitle: view ? view.description : void 0,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				}), view?.status.en === "Signed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: printView,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
						className: "size-4 hidden",
						"aria-hidden": true
					}), t(L("Print", "طباعة"))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						const body = [
							t(view.name),
							t(view.description),
							`${t(L("Version", "الإصدار"))}: ${view.version}`,
							`${t(L("Signed on", "تاريخ التوقيع"))}: ${view.signedOn ?? "—"}`,
							`${t(L("Expires", "تنتهي"))}: ${view.expires}`,
							"",
							t(view.body)
						].join("\n");
						const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
						const url = URL.createObjectURL(blob);
						const a = document.createElement("a");
						a.href = url;
						a.download = `${view.id}-signed.txt`;
						a.click();
						URL.revokeObjectURL(url);
						toast.push("success", L("Signed copy downloaded", "تم تنزيل النسخة الموقّعة"));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Download signed copy", "تنزيل النسخة الموقّعة"))
					]
				})] })] }),
				children: view && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
						{
							k: L("Version", "الإصدار"),
							v: view.version
						},
						{
							k: L("Status", "الحالة"),
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: portalTone(view.status.en),
								children: t(view.status)
							})
						},
						{
							k: L("Signed on", "تاريخ التوقيع"),
							v: view.signedOn ?? "—"
						},
						{
							k: L("Expires", "تنتهي"),
							v: view.expires
						}
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed",
						children: t(view.body)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!sign,
				onClose: () => setSign(null),
				size: "lg",
				title: L("Sign consent", "توقيع الموافقة"),
				subtitle: sign ? sign.name : void 0,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setSign(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: confirmSign,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Sign electronically", "توقيع إلكتروني"))
					]
				})] }),
				children: sign && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-h-52 overflow-y-auto rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed",
							children: t(sign.body)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Guardian full name", "الاسم الكامل لولي الأمر"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: fullName,
								"aria-invalid": !!error && fullName.trim().length < 3,
								onChange: (e) => {
									setFullName(e.target.value);
									setError(null);
								},
								placeholder: t(L("Type your full name", "اكتب اسمك الكامل"))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: agree,
								onChange: (e) => {
									setAgree(e.target.checked);
									setError(null);
								},
								className: "mt-0.5 size-[18px] rounded-[6px] border-border text-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(L("I have read and agree to this consent on behalf of my child.", "لقد قرأت ووافقت على هذه الموافقة نيابة عن طفلي.")) })]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm font-medium text-destructive",
							children: t(error)
						})
					]
				})
			})
		]
	});
}
function PortalInvoices() {
	const { t } = useI18n();
	const toast = useToast();
	const [list, setList] = (0, import_react.useState)(portalInvoices);
	const [tab, setTab] = (0, import_react.useState)("invoices");
	const [view, setView] = (0, import_react.useState)(null);
	const [pay, setPay] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)(1);
	const outstanding = list.reduce((s, i) => s + (i.total - i.paid), 0);
	const paidTotal = list.reduce((s, i) => s + i.paid, 0);
	const confirmPay = () => {
		setList((s) => s.map((i) => i.number === pay?.number ? {
			...i,
			paid: i.total,
			status: L("Paid", "مدفوعة")
		} : i));
		setStep(1);
		setPay(null);
		toast.push("success", L("Payment successful — receipt sent by email", "تم الدفع بنجاح — أُرسل الإيصال بالبريد"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Invoices & payments", "الفواتير والمدفوعات"),
				description: L("Pay securely online and download receipts", "ادفع بأمان عبر الإنترنت ونزّل الإيصالات")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						tint: "yellow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t(L("Outstanding balance", "الرصيد المستحق"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-2xl font-bold tabular-nums",
							children: [outstanding.toLocaleString(), " SAR"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t(L("Paid this year", "المدفوع هذا العام"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-2xl font-bold tabular-nums",
						children: [paidTotal.toLocaleString(), " SAR"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t(L("Invoices", "الفواتير"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-2xl font-bold tabular-nums",
						children: list.length
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: t(L("Billing tabs", "تبويبات الفوترة")),
				value: tab,
				onChange: setTab,
				tabs: [{
					id: "invoices",
					label: L("Invoices", "الفواتير"),
					count: list.length
				}, {
					id: "payments",
					label: L("Payment history", "سجل المدفوعات"),
					count: portalPayments.length
				}]
			}),
			tab === "invoices" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Invoices", "الفواتير"),
				rows: list,
				rowKey: (i) => i.number,
				exportName: "rehlah-portal-invoices",
				search: (i) => i.number,
				searchPlaceholder: L("Search by invoice number", "بحث برقم الفاتورة"),
				filters: [{
					id: "status",
					label: L("Status", "الحالة"),
					options: [
						{
							value: "Paid",
							label: L("Paid", "مدفوعة")
						},
						{
							value: "Partial",
							label: L("Partial", "جزئية")
						},
						{
							value: "Unpaid",
							label: L("Unpaid", "غير مدفوعة")
						}
					],
					match: (i, v) => i.status.en === v
				}],
				columns: [
					{
						id: "no",
						header: L("Invoice", "الفاتورة"),
						sort: (i) => i.number,
						csv: (i) => i.number,
						cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: i.number
						})
					},
					{
						id: "date",
						header: L("Issued", "تاريخ الإصدار"),
						sort: (i) => i.date,
						csv: (i) => i.date,
						cell: (i) => i.date
					},
					{
						id: "due",
						header: L("Due", "الاستحقاق"),
						csv: (i) => i.due,
						hideBelow: "md",
						cell: (i) => i.due
					},
					{
						id: "total",
						header: L("Total", "الإجمالي"),
						sort: (i) => i.total,
						csv: (i) => String(i.total),
						cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: i.total })
					},
					{
						id: "paid",
						header: L("Paid", "المدفوع"),
						csv: (i) => String(i.paid),
						hideBelow: "md",
						cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: i.paid })
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						csv: (i) => i.status.en,
						cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: portalTone(i.status.en),
							children: t(i.status)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setView(i),
								children: t(L("Details", "التفاصيل"))
							}), i.paid < i.total ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => {
									setPay(i);
									setStep(1);
								},
								children: t(L("Pay now", "ادفع الآن"))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								"aria-label": t(L("Download receipt", "تنزيل الإيصال")),
								onClick: () => downloadCsv(`rehlah-receipt-${i.number}`, [
									t(L("Description", "الوصف")),
									t(L("Qty", "الكمية")),
									t(L("Amount", "المبلغ"))
								], [...i.items.map((it) => [
									t(it.desc),
									it.qty,
									it.qty * it.unit
								]), [
									t(L("Total", "الإجمالي")),
									"",
									i.total
								]]),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "size-4",
									"aria-hidden": true
								})
							})]
						})
					}
				],
				emptyTitle: L("No invoices", "لا توجد فواتير"),
				emptyDescription: L("Invoices issued by the centre will appear here.", "ستظهر هنا الفواتير الصادرة من المركز.")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Payment history", "سجل المدفوعات"),
				rows: portalPayments,
				rowKey: (p) => p.id,
				exportName: "rehlah-portal-payments",
				search: (p) => `${p.id} ${p.invoice}`,
				searchPlaceholder: L("Search payments", "بحث في المدفوعات"),
				columns: [
					{
						id: "id",
						header: L("Reference", "المرجع"),
						csv: (p) => p.id,
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: p.id
						})
					},
					{
						id: "invoice",
						header: L("Invoice", "الفاتورة"),
						csv: (p) => p.invoice,
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: p.invoice
						})
					},
					{
						id: "date",
						header: L("Date", "التاريخ"),
						sort: (p) => p.date,
						csv: (p) => p.date,
						cell: (p) => p.date
					},
					{
						id: "amount",
						header: L("Amount", "المبلغ"),
						sort: (p) => p.amount,
						csv: (p) => String(p.amount),
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: p.amount })
					},
					{
						id: "method",
						header: L("Method", "الطريقة"),
						csv: (p) => p.method.en,
						hideBelow: "md",
						cell: (p) => t(p.method)
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						csv: (p) => p.status.en,
						cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: portalTone(p.status.en),
							children: t(p.status)
						})
					}
				],
				emptyTitle: L("No payments yet", "لا توجد مدفوعات"),
				emptyDescription: L("Completed payments will be listed here.", "ستظهر هنا المدفوعات المكتملة.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!view,
				onClose: () => setView(null),
				size: "lg",
				title: L("Invoice details", "تفاصيل الفاتورة"),
				subtitle: view ? view.number : void 0,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => view && downloadCsv(`rehlah-invoice-${view.number}`, [
						t(L("Description", "الوصف")),
						t(L("Qty", "الكمية")),
						t(L("Amount", "المبلغ"))
					], [...view.items.map((it) => [
						t(it.desc),
						it.qty,
						it.qty * it.unit
					]), [
						t(L("Total", "الإجمالي")),
						"",
						view.total
					]]),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Download PDF", "تنزيل PDF"))
					]
				})] }),
				children: view && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
						{
							k: L("Issued", "تاريخ الإصدار"),
							v: view.date
						},
						{
							k: L("Due", "الاستحقاق"),
							v: view.due
						},
						{
							k: L("Payment method", "طريقة الدفع"),
							v: t(view.method)
						},
						{
							k: L("Status", "الحالة"),
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: portalTone(view.status.en),
								children: t(view.status)
							})
						}
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: t(L("Invoice line items", "بنود الفاتورة"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-muted/60 text-xs text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "p-3 text-start",
											children: t(L("Description", "الوصف"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "p-3 text-start",
											children: t(L("Qty", "الكمية"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "p-3 text-end",
											children: t(L("Amount", "المبلغ"))
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
									view.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3",
												children: t(it.desc)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 tabular-nums",
												children: it.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 text-end",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: it.qty * it.unit })
											})
										]
									}, i)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border bg-muted/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 font-medium",
											colSpan: 2,
											children: t(L("VAT 15%", "ضريبة القيمة المضافة ١٥٪"))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-end",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: Math.round(view.total * .15) })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border bg-tint-green/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 font-semibold",
											colSpan: 2,
											children: t(L("Total", "الإجمالي"))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-end",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: view.total })
										})]
									})
								] })
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!pay,
				onClose: () => {
					setPay(null);
					setStep(1);
				},
				title: L("Secure payment", "دفع آمن"),
				subtitle: pay ? pay.number : void 0,
				footer: step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setPay(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setStep(2),
					children: t(L("Continue", "متابعة"))
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setStep(1),
					children: t(L("Back", "رجوع"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: confirmPay,
					children: t(L("Confirm payment", "تأكيد الدفع"))
				})] }),
				children: pay && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-2xl bg-tint-green px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-[var(--primary-deep)]",
							children: t(L("Amount due", "المبلغ المستحق"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-lg font-bold tabular-nums text-[var(--primary-deep)]",
							children: [(pay.total - pay.paid).toLocaleString(), " SAR"]
						})]
					}), step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Payment method", "طريقة الدفع"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
							L("Mada", "مدى"),
							L("Credit card", "بطاقة ائتمانية"),
							L("Apple Pay", "Apple Pay"),
							L("Bank transfer", "تحويل بنكي")
						] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Card number", "رقم البطاقة"),
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										inputMode: "numeric",
										placeholder: "4242 4242 4242 4242"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Expiry", "تاريخ الانتهاء"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "MM / YY" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("CVV", "رمز التحقق"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									inputMode: "numeric",
									placeholder: "123"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2 flex items-center gap-2 rounded-xl bg-muted/50 px-3 py-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
										className: "size-3.5",
										"aria-hidden": true
									}),
									" ",
									t(L("Payments are processed over an encrypted connection.", "تتم معالجة المدفوعات عبر اتصال مشفّر."))
								]
							})
						]
					})]
				})
			})
		]
	});
}
function PortalSickLeave() {
	const { t } = useI18n();
	const toast = useToast();
	const [view, setView] = (0, import_react.useState)(null);
	const [share, setShare] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Sick leave", "الإجازات المرضية"),
				description: L("View, download and share issued sick leave certificates", "عرض وتنزيل ومشاركة شهادات الإجازة المرضية")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Sick leave certificates", "شهادات الإجازة المرضية"),
				rows: portalSickLeaves,
				rowKey: (s) => s.id,
				exportName: "rehlah-portal-sick-leave",
				search: (s) => s.id,
				searchPlaceholder: L("Search by certificate number", "بحث برقم الشهادة"),
				filters: [{
					id: "status",
					label: L("Status", "الحالة"),
					options: [{
						value: "Issued",
						label: L("Issued", "صادرة")
					}, {
						value: "Expired",
						label: L("Expired", "منتهية")
					}],
					match: (s, v) => s.status.en === v
				}],
				columns: [
					{
						id: "id",
						header: L("Certificate", "الشهادة"),
						csv: (s) => s.id,
						cell: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: s.id
						})
					},
					{
						id: "issued",
						header: L("Issued", "تاريخ الإصدار"),
						sort: (s) => s.issued,
						csv: (s) => s.issued,
						cell: (s) => s.issued
					},
					{
						id: "period",
						header: L("Period", "الفترة"),
						csv: (s) => `${s.from} - ${s.to}`,
						hideBelow: "md",
						cell: (s) => `${s.from} → ${s.to}`
					},
					{
						id: "days",
						header: L("Days", "الأيام"),
						sort: (s) => s.days,
						csv: (s) => String(s.days),
						cell: (s) => s.days
					},
					{
						id: "specialist",
						header: L("Specialist", "الأخصائي"),
						csv: (s) => doc(s.specialist).en,
						hideBelow: "lg",
						cell: (s) => t(doc(s.specialist))
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						csv: (s) => s.status.en,
						cell: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: portalTone(s.status.en),
							children: t(s.status)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-end gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setView(s),
									children: t(L("View", "عرض"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									"aria-label": t(L("Download", "تنزيل")),
									onClick: () => {
										const body = [
											s.id,
											`${t(L("From", "من"))}: ${s.from}`,
											`${t(L("To", "إلى"))}: ${s.to}`,
											`${t(L("Days", "الأيام"))}: ${s.days}`,
											`${t(L("Specialist", "الأخصائي"))}: ${t(doc(s.specialist))}`,
											t(s.reason)
										].join("\n");
										const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
										const url = URL.createObjectURL(blob);
										const a = document.createElement("a");
										a.href = url;
										a.download = `${s.id}.txt`;
										a.click();
										URL.revokeObjectURL(url);
										toast.push("success", L("Certificate downloaded", "تم تنزيل الشهادة"));
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									"aria-label": t(L("Share", "مشاركة")),
									onClick: () => setShare(s),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
										className: "size-4",
										"aria-hidden": true
									})
								})
							]
						})
					}
				],
				emptyTitle: L("No sick leave certificates", "لا توجد شهادات إجازة مرضية"),
				emptyDescription: L("Certificates issued by your specialist will appear here.", "ستظهر هنا الشهادات الصادرة من الأخصائي.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!view,
				onClose: () => setView(null),
				size: "lg",
				title: L("Sick leave certificate", "شهادة إجازة مرضية"),
				subtitle: view ? view.id : void 0,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						if (!view) return;
						const body = [
							view.id,
							`${t(L("From", "من"))}: ${view.from}`,
							`${t(L("To", "إلى"))}: ${view.to}`,
							`${t(L("Days", "الأيام"))}: ${view.days}`,
							`${t(L("Specialist", "الأخصائي"))}: ${t(doc(view.specialist))}`,
							t(view.reason)
						].join("\n");
						const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
						const url = URL.createObjectURL(blob);
						const a = document.createElement("a");
						a.href = url;
						a.download = `${view.id}.txt`;
						a.click();
						URL.revokeObjectURL(url);
						toast.push("success", L("Certificate downloaded", "تم تنزيل الشهادة"));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Download PDF", "تنزيل PDF"))
					]
				})] }),
				children: view && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
						{
							k: L("Issued on", "تاريخ الإصدار"),
							v: view.issued
						},
						{
							k: L("From", "من"),
							v: view.from
						},
						{
							k: L("To", "إلى"),
							v: view.to
						},
						{
							k: L("Duration", "المدة"),
							v: `${view.days} ${t(L("days", "أيام"))}`
						},
						{
							k: L("Specialist", "الأخصائي"),
							v: t(doc(view.specialist))
						},
						{
							k: L("Status", "الحالة"),
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: portalTone(view.status.en),
								children: t(view.status)
							})
						}
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed",
						children: t(view.reason)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!share,
				onClose: () => setShare(null),
				title: L("Share certificate", "مشاركة الشهادة"),
				subtitle: L("A secure link valid for 7 days", "رابط آمن صالح لمدة ٧ أيام"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setShare(null),
					children: t(L("Close", "إغلاق"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						toast.push("success", L("Secure link copied", "تم نسخ الرابط الآمن"));
						setShare(null);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Copy link", "نسخ الرابط"))
					]
				})] }),
				children: share && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Secure link", "الرابط الآمن"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							readOnly: true,
							value: `https://portal.rehlah.sa/s/${share.id.toLowerCase()}`
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Send by email", "إرسال بالبريد"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							placeholder: "school@example.com"
						})
					})]
				})
			})
		]
	});
}
function PortalNotifications() {
	const { t } = useI18n();
	const toast = useToast();
	const [items, setItems] = (0, import_react.useState)(portalNotifications);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(null);
	const [prefs, setPrefs] = (0, import_react.useState)({
		sms: true,
		email: true,
		whatsapp: false,
		push: true
	});
	const rows = items.filter((n) => tab === "unread" ? n.unread : true);
	const openItem = (n) => {
		setOpen(n);
		setItems((s) => s.map((x) => x.id === n.id ? {
			...x,
			unread: false
		} : x));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Notifications", "الإشعارات"),
				description: L("Reminders, billing alerts and clinical updates", "التذكيرات وتنبيهات الفواتير والتحديثات السريرية"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => {
						setItems((s) => s.map((n) => ({
							...n,
							unread: false
						})));
						toast.push("success", L("All notifications marked read", "تم تعليم جميع الإشعارات كمقروءة"));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Mark all read", "تعليم الكل كمقروء"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: t(L("Notification filters", "تصفية الإشعارات")),
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "all",
						label: L("All", "الكل"),
						count: items.length
					},
					{
						id: "unread",
						label: L("Unread", "غير مقروءة"),
						count: items.filter((n) => n.unread).length
					},
					{
						id: "prefs",
						label: L("Preferences", "التفضيلات")
					}
				]
			}),
			tab === "prefs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: t(L("How we contact you", "كيف نتواصل معك"))
				}), [
					{
						id: "sms",
						label: L("SMS reminders", "تذكيرات الرسائل النصية"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "email",
						label: L("Email updates", "تحديثات البريد الإلكتروني"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "whatsapp",
						label: L("WhatsApp messages", "رسائل واتساب"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "size-4",
							"aria-hidden": true
						})
					},
					{
						id: "push",
						label: L("App push notifications", "إشعارات التطبيق"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-4",
							"aria-hidden": true
						})
					}
				].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-4 rounded-2xl border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex min-w-0 items-center gap-3 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]",
							children: row.icon
						}), t(row.label)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: prefs[row.id],
						onChange: (e) => {
							setPrefs((p) => ({
								...p,
								[row.id]: e.target.checked
							}));
							toast.push("success", L("Preference saved", "تم حفظ التفضيل"));
						},
						className: "size-[18px] shrink-0 rounded-[6px] border-border text-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
					})]
				}, row.id))]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sr-only",
						children: t(L("Notification list", "قائمة الإشعارات"))
					}),
					rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground",
						children: t(L("You are all caught up.", "لا توجد إشعارات جديدة."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: rows.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => openItem(n),
							className: cn("grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-2xl border border-border p-4 text-start transition-colors hover:bg-muted/50", n.unread && "bg-tint-green/60"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-xl bg-surface text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-semibold",
											children: t(n.title)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm text-muted-foreground",
											children: t(n.body)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 block text-xs text-muted-foreground",
											children: [
												t(n.category),
												" · ",
												t(n.time)
											]
										})
									]
								}),
								n.unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 size-2 rounded-full bg-primary",
									"aria-label": t(L("Unread", "غير مقروء"))
								})
							]
						}) }, n.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!open,
				onClose: () => setOpen(null),
				title: open ? open.title : "",
				subtitle: open ? open.category : void 0,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setOpen(null),
					children: t(L("Close", "إغلاق"))
				}),
				children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: t(open.detail)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: t(open.time)
					})]
				})
			})
		]
	});
}
function PortalProfile({ childName }) {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("personal");
	const save = (e) => {
		e.preventDefault();
		toast.push("success", L("Profile updated", "تم تحديث الملف الشخصي"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Profile", "الملف الشخصي"),
				description: L("Patient, guardian and medical information", "بيانات المريض وولي الأمر والمعلومات الطبية")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: t(L("Profile sections", "أقسام الملف")),
				value: tab,
				onChange: setTab,
				tabs: [
					{
						id: "personal",
						label: L("Personal information", "البيانات الشخصية")
					},
					{
						id: "guardian",
						label: L("Guardian information", "بيانات ولي الأمر")
					},
					{
						id: "medical",
						label: L("Medical information", "المعلومات الطبية")
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-6",
				onSubmit: save,
				children: [
					tab === "personal" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Patient name", "اسم المريض"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: childName,
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("File number", "رقم الملف"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "RH-10241",
									readOnly: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Date of birth", "تاريخ الميلاد"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									defaultValue: "2019-04-11"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Gender", "الجنس"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Female", "أنثى"), L("Male", "ذكر")] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Nationality", "الجنسية"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Saudi", "سعودي"), L("Non-Saudi", "غير سعودي")] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("National ID", "رقم الهوية"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "1098******",
									inputMode: "numeric"
								})
							})
						]
					}),
					tab === "guardian" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Guardian name", "اسم ولي الأمر"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: t(L("Mohammed Al-Otaibi", "محمد العتيبي")),
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Relationship", "صلة القرابة"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
									L("Father", "الأب"),
									L("Mother", "الأم"),
									L("Legal guardian", "وصي قانوني")
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Mobile number", "رقم الجوال"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "tel",
									defaultValue: "+966 55 123 4567",
									dir: "ltr",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Email", "البريد الإلكتروني"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "email",
									defaultValue: "m.alotaibi@example.com",
									dir: "ltr",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Address", "العنوان"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: t(L("Al Olaya district, Riyadh", "حي العليا، الرياض")) })
								})
							})
						]
					}),
					tab === "medical" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Primary diagnosis", "التشخيص الرئيسي"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: t(L("Speech delay", "تأخر النطق")) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Referring hospital", "المستشفى المحيل"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: t(L("King Fahad Hospital", "مستشفى الملك فهد")) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Allergies", "الحساسية"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: t(L("None recorded", "لا يوجد")) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Insurance provider", "شركة التأمين"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
									L("Bupa Arabia", "بوبا العربية"),
									L("Tawuniya", "التعاونية"),
									L("Self-pay", "دفع ذاتي")
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Current medication", "الأدوية الحالية"),
									hint: L("Shared with the care team", "تتم مشاركتها مع فريق الرعاية"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { defaultValue: t(L("None", "لا يوجد")) })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => toast.push("info", L("Changes discarded", "تم تجاهل التغييرات")),
							children: t(L("Discard", "تجاهل"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: t(L("Save changes", "حفظ التغييرات"))
						})]
					})
				]
			}) })
		]
	});
}
function PortalSettings() {
	const { t, lang, setLang } = useI18n();
	const toast = useToast();
	const [pwOpen, setPwOpen] = (0, import_react.useState)(false);
	const [pw, setPw] = (0, import_react.useState)({
		current: "",
		next: "",
		confirm: ""
	});
	const [pwError, setPwError] = (0, import_react.useState)(null);
	const [privacy, setPrivacy] = (0, import_react.useState)({
		share: true,
		research: false,
		marketing: false
	});
	const [help, setHelp] = (0, import_react.useState)(false);
	const savePassword = () => {
		if (pw.next.length < 8) return setPwError(L("Password must be at least 8 characters", "يجب ألا تقل كلمة المرور عن ٨ أحرف"));
		if (pw.next !== pw.confirm) return setPwError(L("Passwords do not match", "كلمتا المرور غير متطابقتين"));
		setPwOpen(false);
		setPw({
			current: "",
			next: "",
			confirm: ""
		});
		setPwError(null);
		toast.push("success", L("Password updated", "تم تحديث كلمة المرور"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Settings", "الإعدادات"),
				description: L("Language, security, privacy and support", "اللغة والأمان والخصوصية والدعم")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-base font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
							className: "size-4 text-primary",
							"aria-hidden": true
						}),
						" ",
						t(L("Language", "اللغة"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: ["en", "ar"].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: lang === l ? "primary" : "outline",
						onClick: () => {
							setLang(l);
							toast.push("success", L("Language updated", "تم تحديث اللغة"));
						},
						"aria-pressed": lang === l,
						children: l === "en" ? "English" : "العربية"
					}, l))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-base font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "size-4 text-primary",
							"aria-hidden": true
						}),
						" ",
						t(L("Security", "الأمان"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: t(L("Password", "كلمة المرور"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t(L("Last changed 3 months ago", "آخر تغيير قبل ٣ أشهر"))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setPwOpen(true),
						children: t(L("Change password", "تغيير كلمة المرور"))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-base font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-4 text-primary",
							"aria-hidden": true
						}),
						" ",
						t(L("Privacy", "الخصوصية"))
					]
				}), [
					{
						id: "share",
						label: L("Share records with my insurer", "مشاركة السجلات مع شركة التأمين")
					},
					{
						id: "research",
						label: L("Allow anonymised clinical research use", "السماح بالاستخدام البحثي المجهول")
					},
					{
						id: "marketing",
						label: L("Receive service updates and offers", "استلام تحديثات وعروض الخدمة")
					}
				].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-4 rounded-2xl border border-border p-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 font-medium",
						children: t(row.label)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: privacy[row.id],
						onChange: (e) => {
							setPrivacy((p) => ({
								...p,
								[row.id]: e.target.checked
							}));
							toast.push("success", L("Privacy setting saved", "تم حفظ إعداد الخصوصية"));
						},
						className: "size-[18px] shrink-0 rounded-[6px] border-border text-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
					})]
				}, row.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-base font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
								className: "size-4 text-primary",
								"aria-hidden": true
							}),
							" ",
							t(L("Help & support", "المساعدة والدعم"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: t(L("Call the centre", "اتصل بالمركز"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								dir: "ltr",
								children: "+966 11 234 5678"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: t(L("Email support", "دعم البريد"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								dir: "ltr",
								children: "support@rehlah.sa"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-fit",
						onClick: () => setHelp(true),
						children: t(L("Contact support", "تواصل مع الدعم"))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: pwOpen,
				onClose: () => setPwOpen(false),
				title: L("Change password", "تغيير كلمة المرور"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setPwOpen(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: savePassword,
					children: t(L("Update password", "تحديث كلمة المرور"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Current password", "كلمة المرور الحالية"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: pw.current,
								onChange: (e) => setPw({
									...pw,
									current: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("New password", "كلمة المرور الجديدة"),
							required: true,
							hint: L("At least 8 characters", "٨ أحرف على الأقل"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: pw.next,
								"aria-invalid": !!pwError,
								onChange: (e) => {
									setPw({
										...pw,
										next: e.target.value
									});
									setPwError(null);
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Confirm new password", "تأكيد كلمة المرور"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: pw.confirm,
								"aria-invalid": !!pwError,
								onChange: (e) => {
									setPw({
										...pw,
										confirm: e.target.value
									});
									setPwError(null);
								}
							})
						}),
						pwError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm font-medium text-destructive",
							children: t(pwError)
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: help,
				onClose: () => setHelp(false),
				title: L("Contact support", "تواصل مع الدعم"),
				subtitle: L("We reply within one business day", "نرد خلال يوم عمل واحد"),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setHelp(false),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setHelp(false);
						toast.push("success", L("Message sent to support", "تم إرسال الرسالة للدعم"));
					},
					children: t(L("Send message", "إرسال"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Topic", "الموضوع"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
							L("Appointments", "المواعيد"),
							L("Billing", "الفواتير"),
							L("Technical issue", "مشكلة تقنية"),
							L("Other", "أخرى")
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Message", "الرسالة"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 4,
							placeholder: t(L("How can we help?", "كيف يمكننا المساعدة؟"))
						})
					})]
				})
			})
		]
	});
}
function PortalProgressRing({ value, size = 132 }) {
	const r = (size - 14) / 2;
	const c = 2 * Math.PI * r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: `0 0 ${size} ${size}`,
		role: "img",
		"aria-label": `${value}%`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: "var(--muted)",
				strokeWidth: "10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				stroke: "var(--primary)",
				strokeWidth: "10",
				strokeLinecap: "round",
				strokeDasharray: `${c * value / 100} ${c}`,
				transform: `rotate(-90 ${size / 2} ${size / 2})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
				x: "50%",
				y: "50%",
				textAnchor: "middle",
				dominantBaseline: "central",
				className: "fill-foreground text-[22px] font-bold",
				children: [value, "%"]
			})
		]
	});
}
function ProgressList({ items }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 font-medium",
					children: t(g.label)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0 tabular-nums text-muted-foreground",
					children: [g.value, "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: g.value })]
		}, i))
	});
}
var CHILD = L("Sara Al-Otaibi", "سارة العتيبي");
var GUARDIAN = L("Mohammed Al-Otaibi", "محمد العتيبي");
var NAV = [
	{
		group: L("Care", "الرعاية"),
		items: [
			{
				id: "home",
				label: L("Home", "الرئيسية"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "appointments",
				label: L("Appointments", "المواعيد"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "plan",
				label: L("Treatment plans", "الخطط العلاجية"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "assessments",
				label: L("Assessments", "التقييمات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "reports",
				label: L("Reports & progress", "التقارير والتقدم"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
					className: "size-4",
					"aria-hidden": true
				})
			}
		]
	},
	{
		group: L("Records", "السجلات"),
		items: [
			{
				id: "documents",
				label: L("Documents", "المستندات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "consents",
				label: L("Consents", "الموافقات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "sickleave",
				label: L("Sick leave", "الإجازات المرضية"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "invoices",
				label: L("Invoices & payments", "الفواتير والمدفوعات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
					className: "size-4",
					"aria-hidden": true
				})
			}
		]
	},
	{
		group: L("Account", "الحساب"),
		items: [
			{
				id: "messages",
				label: L("Messages", "الرسائل"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "notifications",
				label: L("Notifications", "الإشعارات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "profile",
				label: L("Profile", "الملف الشخصي"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
					className: "size-4",
					"aria-hidden": true
				})
			},
			{
				id: "settings",
				label: L("Settings", "الإعدادات"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
					className: "size-4",
					"aria-hidden": true
				})
			}
		]
	}
];
var labelOf = (id) => NAV.flatMap((g) => g.items).find((i) => i.id === id)?.label ?? L("Home", "الرئيسية");
function PatientPortal() {
	const { t } = useI18n();
	const [page, setPage] = (0, import_react.useState)("home");
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const unread = portalNotifications.filter((n) => n.unread).length;
	const go = (id) => {
		setPage(id);
		setNavOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[70vh] bg-[var(--background)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-[1600px] gap-6 px-4 py-6 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-64 shrink-0 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": t(L("Portal navigation", "تنقل البوابة")),
						className: "sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarBody, {
							page,
							go,
							unread
						})
					})
				}),
				navOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-50 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-0 bg-foreground/30",
						"aria-label": t(L("Close menu", "إغلاق القائمة")),
						onClick: () => setNavOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": t(L("Portal navigation", "تنقل البوابة")),
						className: "animate-in-soft absolute inset-y-0 start-0 w-72 overflow-y-auto border-e border-border bg-surface p-4 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								"aria-label": t(L("Close menu", "إغلاق القائمة")),
								onClick: () => setNavOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									"aria-hidden": true
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarBody, {
							page,
							go,
							unread
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 flex-1 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-3xl border border-border bg-surface p-3 shadow-[var(--shadow-soft)] lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setNavOpen(true),
							"aria-label": t(L("Open menu", "فتح القائمة")),
							className: "grid size-11 shrink-0 place-items-center rounded-xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-4",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-sm font-semibold",
							children: t(labelOf(page))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": t(L("Breadcrumb", "مسار التنقل")),
								className: "mb-4 hidden items-center gap-1.5 px-1 text-xs text-muted-foreground lg:flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(L("Patient portal", "بوابة المريض")) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										className: "size-3 rtl:rotate-180",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: t(labelOf(page))
									})
								]
							}),
							page === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalHome, { go }),
							page === "appointments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalAppointments, {}),
							page === "plan" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPlans, {}),
							page === "assessments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalAssessments, {}),
							page === "reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalReports, {}),
							page === "documents" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDocuments, {}),
							page === "consents" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalConsents, {}),
							page === "sickleave" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSickLeave, {}),
							page === "invoices" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalInvoices, {}),
							page === "messages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalMessages, {}),
							page === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalNotifications, {}),
							page === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProfile, { childName: t(CHILD) }),
							page === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalSettings, {})
						]
					})]
				})
			]
		})
	});
}
function SidebarBody({ page, go, unread }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPlate, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-bold",
						children: t(CHILD)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[11px] text-muted-foreground",
						children: t(L("File RH-10241", "ملف RH-10241"))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-tint-green px-3 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase",
					children: t(L("Guardian", "ولي الأمر"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 truncate text-[13px] font-semibold text-[var(--primary-deep)]",
					children: t(GUARDIAN)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: NAV.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pb-1 text-[10.5px] font-bold tracking-[0.12em] text-muted-foreground uppercase",
						children: t(group.group)
					}), group.items.map((item) => {
						const active = page === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => go(item.id),
							"aria-current": active ? "page" : void 0,
							className: cn("group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-[13px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none", active ? "bg-tint-green text-[var(--primary-deep)] shadow-[var(--shadow-soft)]" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute start-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-e-full bg-primary transition-opacity", active ? "opacity-100" : "opacity-0"),
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0",
									children: item.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 flex-1 truncate",
									children: t(item.label)
								}),
								item.id === "notifications" && unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 rounded-full bg-primary px-1.5 py-0.5 text-[11px] text-primary-foreground",
									children: unread
								})
							]
						}, item.id);
					})]
				}, group.group.en))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				className: "w-full justify-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
						className: "size-4 rtl:rotate-180",
						"aria-hidden": true
					}),
					" ",
					t(L("Sign out", "تسجيل الخروج"))
				]
			})
		]
	});
}
function PortalHome({ go }) {
	const { t } = useI18n();
	const next = portalAppointments.find((a) => a.upcoming);
	const plan = portalPlans[0];
	const due = portalInvoices.reduce((s, i) => s + (i.total - i.paid), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L(`Welcome back, Mohammed`, "أهلاً بعودتك، محمد"),
				description: L("Here is Sara's care summary for this week", "هذا ملخص رعاية سارة لهذا الأسبوع"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => go("appointments"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Book appointment", "حجز موعد"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Next session", "الجلسة القادمة"),
						value: `${next.date} · ${next.time}`,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Plan progress", "تقدم الخطة"),
						value: `${plan.progress}%`,
						change: "+6%",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Sessions completed", "الجلسات المكتملة"),
						value: plan.sessions,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "purple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: L("Outstanding balance", "الرصيد المستحق"),
						value: `${due.toLocaleString()} SAR`,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
							className: "size-5",
							"aria-hidden": true
						}),
						tint: "yellow"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: t(L("Upcoming appointments", "المواعيد القادمة"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => go("appointments"),
							children: t(L("View all", "عرض الكل"))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: portalAppointments.filter((a) => a.upcoming).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
										className: "size-5",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-sm font-semibold",
										children: [
											t(a.type),
											" · ",
											t(spec(a.specialty))
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-muted-foreground",
										children: [
											a.date,
											" · ",
											a.time,
											" · ",
											t(doc(a.specialist))
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: portalTone(a.status.en),
									children: t(a.status)
								})
							]
						}, a.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col items-center justify-center gap-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: t(L("Overall progress", "التقدم العام"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProgressRing, { value: plan.progress }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t(plan.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => go("plan"),
							children: t(L("View plan", "عرض الخطة"))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Assessment score trend", "اتجاه درجات التقييم"),
					subtitle: L("Last 7 months", "آخر ٧ أشهر"),
					summary: t(L("Assessment scores improved from 66 to 82 over seven months.", "تحسنت درجات التقييم من ٦٦ إلى ٨٢ خلال سبعة أشهر.")),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
						data: assessmentTrend,
						x: "period",
						y: "score"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: t(L("Goal progress", "تقدم الأهداف"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressList, { items: plan.goals.map((g) => ({
						label: g.goal,
						value: g.progress
					})) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: t(L("Quick actions", "إجراءات سريعة"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							id: "invoices",
							label: L("Pay an invoice", "دفع فاتورة"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							id: "consents",
							label: L("Sign a consent", "توقيع موافقة"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							id: "documents",
							label: L("Upload a document", "رفع مستند"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							id: "messages",
							label: L("Message the team", "مراسلة الفريق"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
								className: "size-4",
								"aria-hidden": true
							})
						}
					].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(q.id),
						className: "flex items-center gap-3 rounded-2xl border border-border p-4 text-start text-sm font-medium transition-colors hover:bg-muted/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 shrink-0 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]",
							children: q.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate",
							children: t(q.label)
						})]
					}, q.id))
				})]
			})
		]
	});
}
function PortalAppointments() {
	const { t } = useI18n();
	const toast = useToast();
	const [tab, setTab] = (0, import_react.useState)("upcoming");
	const [book, setBook] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(1);
	const [slot, setSlot] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)(null);
	const [reschedule, setReschedule] = (0, import_react.useState)(null);
	const [cancel, setCancel] = (0, import_react.useState)(null);
	const [list, setList] = (0, import_react.useState)(portalAppointments);
	const rows = (0, import_react.useMemo)(() => list.filter((a) => tab === "upcoming" ? a.upcoming : !a.upcoming), [list, tab]);
	const confirmBooking = () => {
		setBook(false);
		setStep(1);
		setSlot(null);
		toast.push("success", L("Appointment request submitted", "تم إرسال طلب الموعد"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Appointments", "المواعيد"),
				description: L("Book, reschedule and review every visit", "احجز وأعد الجدولة وراجع كل زيارة"),
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						setBook(true);
						setStep(1);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "size-4",
							"aria-hidden": true
						}),
						" ",
						t(L("Book appointment", "حجز موعد"))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
				label: t(L("Appointment filters", "تصفية المواعيد")),
				value: tab,
				onChange: setTab,
				tabs: [{
					id: "upcoming",
					label: L("Upcoming", "القادمة"),
					count: list.filter((a) => a.upcoming).length
				}, {
					id: "history",
					label: L("History", "السجل"),
					count: list.filter((a) => !a.upcoming).length
				}]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Appointments", "المواعيد"),
				rows,
				rowKey: (a) => a.id,
				exportName: "rehlah-portal-appointments",
				search: (a) => `${a.id} ${a.type.en} ${a.type.ar}`,
				searchPlaceholder: L("Search appointments", "بحث في المواعيد"),
				filters: [{
					id: "status",
					label: L("Status", "الحالة"),
					options: [
						{
							value: "Confirmed",
							label: L("Confirmed", "مؤكد")
						},
						{
							value: "Pending",
							label: L("Pending", "قيد الانتظار")
						},
						{
							value: "Present",
							label: L("Attended", "حضر")
						},
						{
							value: "Cancelled",
							label: L("Cancelled", "ملغي")
						}
					],
					match: (a, v) => a.status.en === v
				}],
				columns: [
					{
						id: "date",
						header: L("Date", "التاريخ"),
						sort: (a) => a.iso,
						csv: (a) => a.date,
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: a.date
						})
					},
					{
						id: "time",
						header: L("Time", "الوقت"),
						csv: (a) => a.time,
						cell: (a) => a.time
					},
					{
						id: "type",
						header: L("Type", "النوع"),
						csv: (a) => a.type.en,
						hideBelow: "md",
						cell: (a) => t(a.type)
					},
					{
						id: "specialty",
						header: L("Specialty", "التخصص"),
						csv: (a) => spec(a.specialty).en,
						hideBelow: "lg",
						cell: (a) => t(spec(a.specialty))
					},
					{
						id: "specialist",
						header: L("Specialist", "الأخصائي"),
						csv: (a) => doc(a.specialist).en,
						hideBelow: "lg",
						cell: (a) => t(doc(a.specialist))
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						csv: (a) => a.status.en,
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: portalTone(a.status.en),
							children: t(a.status)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-end gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setView(a),
									children: t(L("Details", "التفاصيل"))
								}),
								a.upcoming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => setReschedule(a),
									children: t(L("Reschedule", "إعادة جدولة"))
								}),
								a.upcoming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => setCancel(a),
									children: t(L("Cancel", "إلغاء"))
								})
							]
						})
					}
				],
				emptyTitle: L("No appointments", "لا توجد مواعيد"),
				emptyDescription: L("Book a session to get started.", "احجز جلسة للبدء."),
				emptyAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setBook(true),
					children: t(L("Book appointment", "حجز موعد"))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: book,
				onClose: () => setBook(false),
				size: "lg",
				title: L("Book an appointment", "حجز موعد"),
				subtitle: L(`Step ${step} of 3`, `الخطوة ${step} من ٣`),
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => step === 1 ? setBook(false) : setStep(step - 1),
					children: t(step === 1 ? L("Cancel", "إلغاء") : L("Back", "رجوع"))
				}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setStep(step + 1),
					disabled: step === 2 && !slot,
					children: t(L("Continue", "متابعة"))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: confirmBooking,
					children: t(L("Confirm booking", "تأكيد الحجز"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "flex items-center gap-2",
							"aria-label": t(L("Booking steps", "خطوات الحجز")),
							children: [
								L("Service", "الخدمة"),
								L("Date & time", "التاريخ والوقت"),
								L("Confirm", "التأكيد")
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex min-w-0 flex-1 items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold", i + 1 <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate text-xs font-medium",
									children: t(s)
								})]
							}, i))
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Specialty", "التخصص"),
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
										spec(2),
										spec(1),
										spec(0),
										spec(3)
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Specialist", "الأخصائي"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
										L("Any available", "أي متاح"),
										doc(0),
										doc(2)
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Session type", "نوع الجلسة"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
										L("Individual session", "جلسة فردية"),
										L("Assessment", "تقييم"),
										L("Consultation", "استشارة")
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Branch", "الفرع"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [L("Riyadh centre", "مركز الرياض"), L("Jeddah centre", "مركز جدة")] })
								})
							]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Preferred date", "التاريخ المفضل"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									defaultValue: "2026-09-02"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "mb-2 text-sm font-medium",
								children: t(L("Available times", "الأوقات المتاحة"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: portalSlots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSlot(s),
									"aria-pressed": slot === s,
									className: cn("min-h-11 rounded-xl border px-4 text-sm font-medium transition-colors", slot === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted"),
									children: s
								}, s))
							})] })]
						}),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
								{
									k: L("Patient", "المريض"),
									v: t(CHILD)
								},
								{
									k: L("Specialty", "التخصص"),
									v: t(spec(2))
								},
								{
									k: L("Date", "التاريخ"),
									v: "02 Sep 2026"
								},
								{
									k: L("Time", "الوقت"),
									v: slot ?? "—"
								}
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Notes for the team", "ملاحظات للفريق"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 3,
									placeholder: t(L("Anything the specialist should know?", "هل هناك ما يجب أن يعرفه الأخصائي؟"))
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!view,
				onClose: () => setView(null),
				title: L("Appointment details", "تفاصيل الموعد"),
				subtitle: view?.id,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				}),
				children: view && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
						{
							k: L("Date", "التاريخ"),
							v: view.date
						},
						{
							k: L("Time", "الوقت"),
							v: view.time
						},
						{
							k: L("Type", "النوع"),
							v: t(view.type)
						},
						{
							k: L("Specialty", "التخصص"),
							v: t(spec(view.specialty))
						},
						{
							k: L("Specialist", "الأخصائي"),
							v: t(doc(view.specialist))
						},
						{
							k: L("Location", "الموقع"),
							v: t(view.location)
						},
						{
							k: L("Status", "الحالة"),
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: portalTone(view.status.en),
								children: t(view.status)
							})
						}
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-border bg-muted/40 p-4 text-sm",
						children: t(view.notes)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!reschedule,
				onClose: () => setReschedule(null),
				title: L("Reschedule appointment", "إعادة جدولة الموعد"),
				subtitle: reschedule?.id,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setReschedule(null),
					children: t(L("Cancel", "إلغاء"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setReschedule(null);
						toast.push("success", L("Reschedule request sent", "تم إرسال طلب إعادة الجدولة"));
					},
					children: t(L("Send request", "إرسال الطلب"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("New date", "التاريخ الجديد"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								defaultValue: "2026-09-09"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("New time", "الوقت الجديد"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: portalSlots.map((s) => L(s, s)) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Reason", "السبب"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 3,
									placeholder: t(L("Why are you rescheduling?", "لماذا تعيد الجدولة؟"))
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!cancel,
				onClose: () => setCancel(null),
				title: L("Cancel appointment", "إلغاء الموعد"),
				subtitle: cancel?.id,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setCancel(null),
					children: t(L("Keep appointment", "الاحتفاظ بالموعد"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: () => {
						setList((s) => s.map((a) => a.id === cancel?.id ? {
							...a,
							status: L("Cancelled", "ملغي"),
							upcoming: false
						} : a));
						setCancel(null);
						toast.push("success", L("Appointment cancelled", "تم إلغاء الموعد"));
					},
					children: t(L("Cancel appointment", "إلغاء الموعد"))
				})] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t(L("Cancellations within 24 hours of the session may be charged.", "قد يتم احتساب رسوم على الإلغاء خلال ٢٤ ساعة من الجلسة."))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Reason for cancellation", "سبب الإلغاء"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: [
							L("Illness", "مرض"),
							L("Travel", "سفر"),
							L("Schedule conflict", "تعارض المواعيد"),
							L("Other", "أخرى")
						] })
					})]
				})
			})
		]
	});
}
function PortalPlans() {
	const { t } = useI18n();
	const toast = useToast();
	const [active, setActive] = (0, import_react.useState)(portalPlans[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Treatment plans", "الخطط العلاجية"),
				description: L("Goals, progress and the home programme", "الأهداف والتقدم والبرنامج المنزلي")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: portalPlans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: active.id === p.id ? "primary" : "outline",
					onClick: () => setActive(p),
					"aria-pressed": active.id === p.id,
					children: t(p.title)
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-semibold",
								children: t(active.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: portalTone(active.status.en),
								children: t(active.status)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
							{
								k: L("Specialty", "التخصص"),
								v: t(spec(active.specialty))
							},
							{
								k: L("Specialist", "الأخصائي"),
								v: t(doc(active.specialist))
							},
							{
								k: L("Start date", "تاريخ البدء"),
								v: active.start
							},
							{
								k: L("End date", "تاريخ الانتهاء"),
								v: active.end
							},
							{
								k: L("Sessions", "الجلسات"),
								v: active.sessions
							},
							{
								k: L("Frequency", "التكرار"),
								v: t(active.frequency)
							}
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: t(L("Overall progress", "التقدم العام"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted-foreground",
									children: [active.progress, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: active.progress })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col items-center justify-center gap-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: t(L("Completion", "الإنجاز"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProgressRing, { value: active.progress }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => toast.push("success", L("Plan summary downloaded", "تم تنزيل ملخص الخطة")),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "size-4",
									"aria-hidden": true
								}),
								" ",
								t(L("Download plan", "تنزيل الخطة"))
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: t(L("Goals", "الأهداف"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: active.goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: t(g.goal)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-xs text-muted-foreground",
										children: [
											t(L("Target", "الهدف")),
											": ",
											t(g.target)
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 tabular-nums text-muted-foreground",
									children: [g.progress, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: g.progress })]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: t(L("Home programme", "البرنامج المنزلي"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: active.homeProgramme.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-2xl border border-border p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-tint-green text-[11px] font-bold text-[var(--primary-deep)]",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0",
								children: t(h)
							})]
						}, i))
					})]
				})]
			})
		]
	});
}
function PortalAssessments() {
	const { t } = useI18n();
	const [view, setView] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Assessments", "التقييمات"),
				description: L("Clinical assessment results and score history", "نتائج التقييمات السريرية وسجل الدرجات")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
				title: L("Score progression", "تطور الدرجات"),
				subtitle: L("Composite score across all domains", "الدرجة المجمعة لكل المجالات"),
				summary: t(L("Composite assessment score rose steadily from 66 to 82.", "ارتفعت الدرجة المجمعة بثبات من ٦٦ إلى ٨٢.")),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
					data: assessmentTrend,
					x: "period",
					y: "score"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Assessments", "التقييمات"),
				rows: portalAssessments,
				rowKey: (a) => a.id,
				exportName: "rehlah-portal-assessments",
				search: (a) => `${a.id} ${a.name.en} ${a.name.ar}`,
				searchPlaceholder: L("Search assessments", "بحث في التقييمات"),
				columns: [
					{
						id: "name",
						header: L("Assessment", "التقييم"),
						sort: (a) => a.name.en,
						csv: (a) => a.name.en,
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: t(a.name)
						})
					},
					{
						id: "date",
						header: L("Date", "التاريخ"),
						sort: (a) => a.date,
						csv: (a) => a.date,
						cell: (a) => a.date
					},
					{
						id: "specialist",
						header: L("Specialist", "الأخصائي"),
						csv: (a) => doc(a.specialist).en,
						hideBelow: "lg",
						cell: (a) => t(doc(a.specialist))
					},
					{
						id: "score",
						header: L("Score", "الدرجة"),
						sort: (a) => a.score,
						csv: (a) => String(a.score),
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums",
								children: a.score
							}), a.previous > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "success",
								children: ["+", a.score - a.previous]
							})]
						})
					},
					{
						id: "status",
						header: L("Status", "الحالة"),
						csv: (a) => a.status.en,
						hideBelow: "md",
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: portalTone(a.status.en),
							children: t(a.status)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setView(a),
								children: t(L("View results", "عرض النتائج"))
							})
						})
					}
				],
				emptyTitle: L("No assessments", "لا توجد تقييمات"),
				emptyDescription: L("Completed assessments will appear here.", "ستظهر هنا التقييمات المكتملة.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: !!view,
				onClose: () => setView(null),
				size: "lg",
				title: view ? view.name : "",
				subtitle: view?.date,
				footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setView(null),
					children: t(L("Close", "إغلاق"))
				}),
				children: view && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValue, { items: [
							{
								k: L("Specialist", "الأخصائي"),
								v: t(doc(view.specialist))
							},
							{
								k: L("Composite score", "الدرجة المجمعة"),
								v: `${view.score} / 100`
							},
							{
								k: L("Previous score", "الدرجة السابقة"),
								v: view.previous || "—"
							},
							{
								k: L("Status", "الحالة"),
								v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: portalTone(view.status.en),
									children: t(view.status)
								})
							}
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressList, { items: view.domains.map((d) => ({
							label: d.name,
							value: d.score
						})) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-relaxed",
							children: t(view.summary)
						})
					]
				})
			})
		]
	});
}
function PortalReports() {
	const { t } = useI18n();
	const toast = useToast();
	const plan = portalPlans[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: L("Reports & progress", "التقارير والتقدم"),
				description: L("Periodic clinical reports shared by the care team", "التقارير السريرية الدورية من فريق الرعاية")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: L("Progress over time", "التقدم عبر الوقت"),
					subtitle: L("Composite score", "الدرجة المجمعة"),
					summary: t(L("Progress trend rising month over month.", "اتجاه التقدم يرتفع شهراً بعد شهر.")),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line1, {
						data: assessmentTrend,
						x: "period",
						y: "score"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: t(L("Current goal attainment", "تحقيق الأهداف الحالية"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressList, { items: plan.goals.map((g) => ({
						label: g.goal,
						value: g.progress
					})) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				caption: L("Reports", "التقارير"),
				rows: portalReports,
				rowKey: (r) => r.id,
				exportName: "rehlah-portal-reports",
				search: (r) => `${r.name.en} ${r.name.ar}`,
				searchPlaceholder: L("Search reports", "بحث في التقارير"),
				columns: [
					{
						id: "name",
						header: L("Report", "التقرير"),
						sort: (r) => r.name.en,
						csv: (r) => r.name.en,
						cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: t(r.name)
						})
					},
					{
						id: "period",
						header: L("Period", "الفترة"),
						csv: (r) => r.period.en,
						cell: (r) => t(r.period)
					},
					{
						id: "date",
						header: L("Issued", "تاريخ الإصدار"),
						sort: (r) => r.date,
						csv: (r) => r.date,
						hideBelow: "md",
						cell: (r) => r.date
					},
					{
						id: "specialist",
						header: L("Specialist", "الأخصائي"),
						csv: (r) => doc(r.specialist).en,
						hideBelow: "lg",
						cell: (r) => t(doc(r.specialist))
					},
					{
						id: "type",
						header: L("Type", "النوع"),
						csv: (r) => r.type.en,
						cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: t(r.type)
						})
					},
					{
						id: "actions",
						header: L("Actions", "إجراءات"),
						align: "end",
						cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => {
									downloadCsv(`rehlah-report-${r.id}`, [
										t(L("Report", "التقرير")),
										t(L("Period", "الفترة")),
										t(L("Issued", "تاريخ الإصدار")),
										t(L("Specialist", "الأخصائي"))
									], [[
										t(r.name),
										t(r.period),
										r.date,
										t(doc(r.specialist))
									]]);
									toast.push("success", L("Report downloaded", "تم تنزيل التقرير"));
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									}),
									" ",
									t(L("Download", "تنزيل"))
								]
							})
						})
					}
				],
				emptyTitle: L("No reports yet", "لا توجد تقارير"),
				emptyDescription: L("Progress reports will be published here monthly.", "ستُنشر تقارير التقدم هنا شهرياً.")
			})
		]
	});
}
var THREADS = [{
	id: "TH-1",
	title: L("Speech therapy — Sara", "علاج النطق — سارة"),
	with: L("Dr. Layla Al-Harbi", "د. ليلى الحربي"),
	messages: [{
		id: 1,
		from: "team",
		author: L("Dr. Layla Al-Harbi", "د. ليلى الحربي"),
		body: L("Sara did really well today — please keep the /s/ cards going at home.", "أبلت سارة بلاءً حسناً اليوم — يرجى الاستمرار في بطاقات حرف السين بالمنزل."),
		time: L("Yesterday 14:20", "أمس ١٤:٢٠")
	}, {
		id: 2,
		from: "me",
		author: GUARDIAN,
		body: L("Thank you. We practise every evening after dinner.", "شكراً لك. نتمرن كل مساء بعد العشاء."),
		time: L("Yesterday 18:05", "أمس ١٨:٠٥")
	}]
}, {
	id: "TH-2",
	title: L("Billing enquiry", "استفسار عن الفواتير"),
	with: L("Accounts team", "قسم الحسابات"),
	messages: [{
		id: 1,
		from: "me",
		author: GUARDIAN,
		body: L("Could you confirm the insurance coverage for August?", "هل يمكن تأكيد تغطية التأمين لشهر أغسطس؟"),
		time: L("2 days ago", "قبل يومين")
	}, {
		id: 2,
		from: "team",
		author: L("Accounts team", "قسم الحسابات"),
		body: L("Coverage is approved at 80% for 12 sessions.", "تمت الموافقة على تغطية ٨٠٪ لـ ١٢ جلسة."),
		time: L("2 days ago", "قبل يومين")
	}]
}];
function PortalMessages() {
	const { t } = useI18n();
	const toast = useToast();
	const [threads, setThreads] = (0, import_react.useState)(THREADS);
	const [activeId, setActiveId] = (0, import_react.useState)(THREADS[0].id);
	const [draft, setDraft] = (0, import_react.useState)("");
	const active = threads.find((th) => th.id === activeId);
	const send = (e) => {
		e.preventDefault();
		if (!draft.trim()) return;
		setThreads((s) => s.map((th) => th.id === activeId ? {
			...th,
			messages: [...th.messages, {
				id: th.messages.length + 1,
				from: "me",
				author: GUARDIAN,
				body: L(draft.trim(), draft.trim()),
				time: L("Just now", "الآن")
			}]
		} : th));
		setDraft("");
		toast.push("success", L("Message sent", "تم إرسال الرسالة"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: L("Messages", "الرسائل"),
			description: L("Secure conversations with your care team", "محادثات آمنة مع فريق الرعاية")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "px-1 pb-1 text-sm font-semibold",
					children: t(L("Conversations", "المحادثات"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: threads.map((th) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveId(th.id),
						"aria-current": th.id === activeId ? "true" : void 0,
						className: cn("w-full rounded-2xl border p-3 text-start transition-colors", th.id === activeId ? "border-primary bg-tint-green" : "border-border hover:bg-muted/60"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm font-medium",
							children: t(th.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-xs text-muted-foreground",
							children: t(th.with)
						})]
					}) }, th.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex min-h-[420px] flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "border-b border-border pb-3 text-base font-semibold",
						children: t(active.title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex-1 space-y-4 overflow-y-auto py-4",
						children: active.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: cn("flex", m.from === "me" ? "justify-end" : "justify-start"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("max-w-[80%] rounded-2xl px-4 py-3 text-sm", m.from === "me" ? "bg-primary text-primary-foreground" : "bg-muted"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-semibold opacity-80",
										children: t(m.author)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 leading-relaxed",
										children: t(m.body)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] opacity-70",
										children: t(m.time)
									})
								]
							})
						}, m.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex items-end gap-2 border-t border-border pt-4",
						onSubmit: send,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0 flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Message", "الرسالة"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 2,
									value: draft,
									onChange: (e) => setDraft(e.target.value),
									placeholder: t(L("Write a message…", "اكتب رسالة…"))
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: t(L("Send", "إرسال"))
						})]
					})
				]
			})]
		})]
	});
}
var P = "var(--primary)";
var PD = "var(--primary-deep)";
var A = "var(--accent)";
var W = "var(--wellness)";
var S = "var(--surface)";
var B = "var(--border)";
var MU = "var(--muted-foreground)";
function Scene({ children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 290",
		fill: "none",
		"aria-hidden": true,
		focusable: "false",
		...rest,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "skStage",
					x1: "0.1",
					y1: "0",
					x2: "0.9",
					y2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: P,
							stopOpacity: "0.10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "55%",
							stopColor: W,
							stopOpacity: "0.06"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: A,
							stopOpacity: "0.10"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "skGlow",
					cx: "0.5",
					cy: "0.46",
					r: "0.58",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: S,
						stopOpacity: "0.95"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: S,
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "skCard",
					x1: "0.1",
					y1: "0",
					x2: "0.8",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: S
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: S,
						stopOpacity: "0.92"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "skBar",
					x1: "0",
					y1: "1",
					x2: "1",
					y2: "0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: W
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "skWarm",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: A
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: A,
						stopOpacity: "0.6"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "skDeep",
					x1: "0.2",
					y1: "0",
					x2: "0.9",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: PD
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
					id: "skDots",
					width: "16",
					height: "16",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "2",
						cy: "2",
						r: "1.1",
						fill: PD,
						opacity: "0.10"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: "skShadow",
					x: "-40%",
					y: "-40%",
					width: "180%",
					height: "200%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
						dx: "0",
						dy: "10",
						stdDeviation: "12",
						floodColor: PD,
						floodOpacity: "0.14"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: "skSoft",
					x: "-40%",
					y: "-40%",
					width: "180%",
					height: "200%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
						dx: "0",
						dy: "5",
						stdDeviation: "6",
						floodColor: PD,
						floodOpacity: "0.10"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
					id: "skClip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "6",
						width: "304",
						height: "278",
						rx: "46"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				clipPath: "url(#skClip)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "6",
						width: "304",
						height: "278",
						rx: "46",
						fill: "url(#skStage)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "6",
						width: "304",
						height: "278",
						fill: "url(#skDots)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "160",
						cy: "144",
						rx: "128",
						ry: "112",
						fill: "url(#skGlow)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "144",
						r: "104",
						stroke: P,
						strokeOpacity: "0.12",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "160",
						cy: "144",
						r: "84",
						stroke: P,
						strokeOpacity: "0.18",
						strokeWidth: "1",
						strokeDasharray: "2 9",
						strokeLinecap: "round"
					}),
					children
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "6",
				width: "304",
				height: "278",
				rx: "46",
				stroke: P,
				strokeOpacity: "0.14"
			})
		]
	});
}
/** Top chip band — y 28..72 (inside the stage corner radius) */
function ChipTop({ x = 30, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		transform: `translate(${x} 28)`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			filter: "url(#skSoft)",
			className: "animate-float",
			children
		})
	});
}
/** Bottom chip band — y 222..266 (inside the stage corner radius) */
function ChipBottom({ x = 30, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		transform: `translate(${x} 222)`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			filter: "url(#skSoft)",
			className: "animate-float",
			children
		})
	});
}
/** A 44px-tall pill card used in both chip bands. */
function PillCard({ w = 132, tint = P, glyph }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: w,
			height: "44",
			rx: "18",
			fill: "url(#skCard)",
			stroke: B
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "24",
			cy: "22",
			r: "13",
			fill: tint,
			opacity: "0.16"
		}),
		glyph,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "46",
			y: "14",
			width: w - 68,
			height: "6",
			rx: "3",
			fill: PD,
			opacity: "0.32"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "46",
			y: "26",
			width: (w - 68) * .6,
			height: "5",
			rx: "2.5",
			fill: B
		})
	] });
}
function ArtWelcome(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipTop, {
				x: 30,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 128,
					tint: W,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M19 22l3.5 3.5L30 18",
						stroke: W,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				transform: "translate(160 146)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "animate-float",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
							filter: "url(#skShadow)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								r: "66",
								fill: S,
								stroke: B
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: "54",
							stroke: P,
							strokeOpacity: "0.16",
							fill: "none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
							href: REHLAH_SYMBOL_URL,
							x: "-40",
							y: "-40",
							width: "80",
							height: "80",
							preserveAspectRatio: "xMidYMid meet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "47",
							cy: "-47",
							r: "6",
							fill: A
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "-49",
							cy: "45",
							r: "4.5",
							fill: W
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipBottom, {
				x: 154,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 132,
					tint: A,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M24 15v8l5 3",
						stroke: A,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			})
		]
	});
}
function ArtProgress(props) {
	const R = 54;
	const C = 2 * Math.PI * R;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipTop, {
				x: 150,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 136,
					tint: A,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M17 27c4-2 5-9 9-11s6 5 9 1",
						stroke: A,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						fill: "none"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(160 146)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						filter: "url(#skShadow)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: 72,
							fill: S,
							stroke: B
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: R,
						stroke: B,
						strokeWidth: "13",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: R,
						stroke: "url(#skBar)",
						strokeWidth: "13",
						strokeLinecap: "round",
						fill: "none",
						strokeDasharray: C,
						strokeDashoffset: C * .28,
						transform: "rotate(-90)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: -54,
						r: "5.5",
						fill: S,
						stroke: P,
						strokeWidth: "2.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						textAnchor: "middle",
						y: "2",
						fontSize: "30",
						fontWeight: "700",
						fill: PD,
						letterSpacing: "-1",
						children: "72%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						textAnchor: "middle",
						y: "22",
						fontSize: "9",
						fontWeight: "600",
						fill: MU,
						letterSpacing: "1.8",
						children: "GOALS"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipBottom, {
				x: 30,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "132",
					height: "44",
					rx: "18",
					fill: "url(#skCard)",
					stroke: B
				}), [
					16,
					26,
					14,
					30,
					20,
					34,
					24
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 16 + i * 15,
					y: 8,
					width: "7",
					height: "28",
					rx: "3.5",
					fill: B,
					opacity: "0.6"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 16 + i * 15,
					y: 36 - h,
					width: "7",
					height: h,
					rx: "3.5",
					fill: i === 5 ? A : P,
					opacity: i === 5 ? 1 : .5
				})] }, i))] })
			})
		]
	});
}
function ArtSchedule(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipTop, {
				x: 30,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 128,
					tint: W,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M24 15a6 6 0 0 1 6 6v4l1.6 2.4H16.4L18 25v-4a6 6 0 0 1 6-6Z",
						fill: W,
						opacity: "0.85"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "animate-float",
				filter: "url(#skShadow)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "82",
						y: "76",
						width: "156",
						height: "136",
						rx: "26",
						fill: "url(#skCard)",
						stroke: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M82 102a26 26 0 0 1 26-26h104a26 26 0 0 1 26 26v2H82v-2Z",
						fill: P,
						opacity: "0.12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "104",
						y: "88",
						width: "30",
						height: "5",
						rx: "2.5",
						fill: PD,
						opacity: "0.35"
					}),
					[
						0,
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: 102 + i * 24,
						y: 114,
						width: "12",
						height: "4",
						rx: "2",
						fill: B
					}, i)),
					Array.from({ length: 15 }).map((_, i) => {
						const col = i % 5;
						const row = Math.floor(i / 5);
						const on = i === 7;
						const dim = i === 3 || i === 11;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: 100 + col * 24,
							y: 128 + row * 24,
							width: "16",
							height: "16",
							rx: "6",
							fill: on ? P : dim ? A : B,
							opacity: on ? 1 : dim ? .6 : .6
						}, i);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "108",
						cy: "136",
						r: "2.4",
						fill: S
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipBottom, {
				x: 154,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 132,
					tint: P,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M24 15v8l5 3",
						stroke: P,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			})
		]
	});
}
function ArtDocuments(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipTop, {
				x: 154,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 132,
					tint: A,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M19 22l3.5 3.5L30 18",
						stroke: A,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				transform: "rotate(-6 160 144)",
				opacity: "0.5",
				filter: "url(#skSoft)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "96",
					y: "80",
					width: "128",
					height: "128",
					rx: "24",
					fill: "url(#skCard)",
					stroke: B
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				transform: "rotate(-2.5 160 144)",
				opacity: "0.8",
				filter: "url(#skSoft)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "98",
					y: "78",
					width: "128",
					height: "130",
					rx: "24",
					fill: "url(#skCard)",
					stroke: B
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "animate-float",
				filter: "url(#skShadow)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "94",
						y: "76",
						width: "132",
						height: "136",
						rx: "24",
						fill: "url(#skCard)",
						stroke: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "116",
						cy: "100",
						r: "10",
						fill: P,
						opacity: "0.14"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M112 100l3 3 5.5-6",
						stroke: P,
						strokeWidth: "2.4",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "132",
						y: "94",
						width: "52",
						height: "6",
						rx: "3",
						fill: PD,
						opacity: "0.35"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "132",
						y: "105",
						width: "30",
						height: "5",
						rx: "2.5",
						fill: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "110",
						y: "126",
						width: "100",
						height: "46",
						rx: "14",
						fill: P,
						opacity: "0.07"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M120 160c9-3 12-18 20-20s11 11 18 3 11-14 16-15",
						stroke: "url(#skBar)",
						strokeWidth: "3",
						strokeLinecap: "round",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "110",
						y: "184",
						width: "60",
						height: "6",
						rx: "3",
						fill: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "178",
						y: "182",
						width: "32",
						height: "10",
						rx: "5",
						fill: A,
						opacity: "0.8"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipBottom, {
				x: 30,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 132,
					tint: W,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M24 14v12M18 20l6 6 6-6",
						stroke: W,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						fill: "none"
					})
				})
			})
		]
	});
}
function ArtJourney(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipTop, {
				x: 30,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 130,
					tint: P,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M18 22h12M24 16v12",
						stroke: P,
						strokeWidth: "2.6",
						strokeLinecap: "round"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(0 -6)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "160",
						cy: "208",
						rx: "96",
						ry: "13",
						fill: P,
						opacity: "0.10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						filter: "url(#skSoft)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M108 204c0-20 12-34 28-34s28 14 28 34v4h-56v-4Z",
								fill: "url(#skDeep)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "136",
								cy: "140",
								r: "22",
								fill: "url(#skDeep)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M136 118a22 22 0 0 1 21 16c-14 5-28 5-42 0a22 22 0 0 1 21-16Z",
								fill: S,
								opacity: "0.14"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M162 186c8-4 14-11 16-19",
								stroke: S,
								strokeWidth: "4",
								strokeLinecap: "round",
								fill: "none",
								opacity: "0.5"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						filter: "url(#skSoft)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M174 208c0-14 8-24 19-24s19 10 19 24h-38Z",
								fill: "url(#skWarm)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "193",
								cy: "166",
								r: "15",
								fill: "url(#skWarm)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M180 194c-5-3-8-8-9-14",
								stroke: A,
								strokeWidth: "3.5",
								strokeLinecap: "round",
								fill: "none"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipBottom, {
				x: 154,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 132,
					tint: W,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M19 22l3.5 3.5L30 18",
						stroke: W,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			})
		]
	});
}
function ArtAuth(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 120",
		fill: "none",
		"aria-hidden": true,
		focusable: "false",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "authLine",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P,
						stopOpacity: "0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "24%",
						stopColor: P,
						stopOpacity: "0.75"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "76%",
						stopColor: W,
						stopOpacity: "0.75"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: W,
						stopOpacity: "0"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "authG",
				cx: "0.5",
				cy: "0.7",
				r: "0.7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: P,
					stopOpacity: "0.18"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: W,
					stopOpacity: "0"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "86",
				rx: "150",
				ry: "58",
				fill: "url(#authG)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 76h58l12-24 17 50 16-36 13 20h70l11-22 15 34 12-22h64",
				stroke: "url(#authLine)",
				strokeWidth: "3",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "76",
				r: "4.5",
				fill: A
			})
		]
	});
}
function ArtCare(props) {
	const people = [
		{
			a: -90,
			tint: P,
			glyph: "M0-4a5 5 0 1 1 0 10"
		},
		{
			a: -18,
			tint: A,
			glyph: ""
		},
		{
			a: 54,
			tint: W,
			glyph: ""
		},
		{
			a: 126,
			tint: PD,
			glyph: ""
		},
		{
			a: 198,
			tint: A,
			glyph: ""
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipTop, {
				x: 26,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 126,
					tint: P,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M18 26c0-4 3-7 6-7s6 3 6 7M24 12a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z",
						stroke: P,
						strokeWidth: "2.2",
						fill: "none",
						strokeLinecap: "round"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(160 144)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "72",
						stroke: P,
						strokeOpacity: "0.22",
						strokeWidth: "1.5",
						strokeDasharray: "3 8",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						filter: "url(#skShadow)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: "46",
							fill: "url(#skDeep)"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "0",
						cy: "-10",
						r: "14",
						fill: S,
						opacity: "0.92"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-19 22c0-12 8-20 19-20s19 8 19 20Z",
						fill: S,
						opacity: "0.92"
					}),
					people.map((pn, i) => {
						const rad = pn.a * Math.PI / 180;
						const x = Math.cos(rad) * 72;
						const y = Math.sin(rad) * 72;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: `translate(${x} ${y})`,
							filter: "url(#skSoft)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									r: "20",
									fill: S,
									stroke: B
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cy: "-4",
									r: "6",
									fill: pn.tint,
									opacity: "0.85"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M-9 11c0-6 4-10 9-10s9 4 9 10Z",
									fill: pn.tint,
									opacity: "0.5"
								})
							]
						}, i);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipBottom, {
				x: 158,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillCard, {
					w: 128,
					tint: W,
					glyph: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M17 21l5 5 9-10",
						stroke: W,
						strokeWidth: "2.6",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						fill: "none"
					})
				})
			})
		]
	});
}
function ArtVerify(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 172",
		fill: "none",
		"aria-hidden": true,
		focusable: "false",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "vfG",
					cx: "0.5",
					cy: "0.5",
					r: "0.6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P,
						stopOpacity: "0.18"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: P,
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "vfDeep",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: PD
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: "vfShadow",
					x: "-50%",
					y: "-50%",
					width: "200%",
					height: "200%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
						dx: "0",
						dy: "10",
						stdDeviation: "12",
						floodColor: PD,
						floodOpacity: "0.18"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "92",
				rx: "140",
				ry: "72",
				fill: "url(#vfG)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "86",
				r: "66",
				stroke: P,
				strokeOpacity: "0.18",
				strokeWidth: "1",
				strokeDasharray: "3 9",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "animate-float",
				filter: "url(#vfShadow)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "126",
						y: "26",
						width: "68",
						height: "122",
						rx: "18",
						fill: S,
						stroke: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "150",
						y: "34",
						width: "20",
						height: "4",
						rx: "2",
						fill: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "136",
						y: "52",
						width: "48",
						height: "26",
						rx: "9",
						fill: P,
						opacity: "0.10"
					}),
					[
						0,
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: 139 + i * 11,
						y: 58,
						width: "8",
						height: "14",
						rx: "3",
						fill: i < 2 ? P : B,
						opacity: i < 2 ? 1 : .7
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "136",
						y: "88",
						width: "48",
						height: "5",
						rx: "2.5",
						fill: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "136",
						y: "99",
						width: "32",
						height: "5",
						rx: "2.5",
						fill: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "136",
						y: "118",
						width: "48",
						height: "16",
						rx: "8",
						fill: "url(#vfDeep)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(214 54)",
				filter: "url(#vfShadow)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0-24 22-14v16C22 14 12 22 0 26-12 22-22 14-22 2v-16L0-24Z",
					fill: S,
					stroke: B
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M-9 1l6 6 12-13",
					stroke: P,
					strokeWidth: "3.4",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(70 96)",
				filter: "url(#vfShadow)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "-44",
						y: "-20",
						width: "88",
						height: "40",
						rx: "16",
						fill: S,
						stroke: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "-24",
						cy: "0",
						r: "10",
						fill: A,
						opacity: "0.24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-30 -3l6 5 6-5",
						stroke: A,
						strokeWidth: "2.4",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "-8",
						y: "-7",
						width: "42",
						height: "5",
						rx: "2.5",
						fill: PD,
						opacity: "0.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "-8",
						y: "3",
						width: "26",
						height: "5",
						rx: "2.5",
						fill: B
					})
				]
			})
		]
	});
}
function ArtCelebrate(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 200",
		fill: "none",
		"aria-hidden": true,
		focusable: "false",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "clG",
					cx: "0.5",
					cy: "0.5",
					r: "0.6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P,
						stopOpacity: "0.20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: P,
						stopOpacity: "0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "clDeep",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: P
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: PD
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: "clShadow",
					x: "-50%",
					y: "-50%",
					width: "200%",
					height: "200%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
						dx: "0",
						dy: "14",
						stdDeviation: "16",
						floodColor: PD,
						floodOpacity: "0.22"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "104",
				rx: "150",
				ry: "86",
				fill: "url(#clG)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "100",
				r: "82",
				stroke: P,
				strokeOpacity: "0.14",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "100",
				r: "64",
				stroke: P,
				strokeOpacity: "0.2",
				strokeDasharray: "2 9",
				fill: "none"
			}),
			[
				[
					56,
					40,
					A
				],
				[
					252,
					44,
					W
				],
				[
					82,
					156,
					W
				],
				[
					246,
					150,
					A
				],
				[
					160,
					16,
					P
				],
				[
					40,
					104,
					P
				],
				[
					280,
					100,
					PD
				]
			].map(([x, y, c], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: i % 2 ? 4 : 6,
				fill: c,
				opacity: "0.55",
				className: "animate-float"
			}, i)),
			[
				[
					96,
					62,
					-22
				],
				[
					224,
					68,
					18
				],
				[
					104,
					138,
					26
				],
				[
					214,
					132,
					-14
				]
			].map(([x, y, r], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x,
				y,
				width: "14",
				height: "5",
				rx: "2.5",
				fill: i % 2 ? A : W,
				opacity: "0.6",
				transform: `rotate(${r} ${x} ${y})`
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(160 100)",
				filter: "url(#clShadow)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "46",
					fill: "url(#clDeep)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M-18 2l12 12 24-26",
					stroke: S,
					strokeWidth: "6",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none",
					className: "tick-in"
				})]
			})
		]
	});
}
function ArtBooked(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 190",
		fill: "none",
		"aria-hidden": true,
		focusable: "false",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "bkG",
				cx: "0.5",
				cy: "0.5",
				r: "0.6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: W,
					stopOpacity: "0.18"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: W,
					stopOpacity: "0"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
				id: "bkShadow",
				x: "-50%",
				y: "-50%",
				width: "200%",
				height: "200%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
					dx: "0",
					dy: "12",
					stdDeviation: "14",
					floodColor: PD,
					floodOpacity: "0.18"
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "100",
				rx: "146",
				ry: "80",
				fill: "url(#bkG)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "animate-float",
				filter: "url(#bkShadow)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "104",
						y: "30",
						width: "112",
						height: "120",
						rx: "26",
						fill: S,
						stroke: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M104 56a26 26 0 0 1 26-26h60a26 26 0 0 1 26 26v4H104v-4Z",
						fill: P,
						opacity: "0.14"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "126",
						y: "42",
						width: "24",
						height: "5",
						rx: "2.5",
						fill: PD,
						opacity: "0.34"
					}),
					Array.from({ length: 12 }).map((_, i) => {
						const col = i % 4;
						const row = Math.floor(i / 4);
						const on = i === 5;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: 122 + col * 20,
							y: 74 + row * 20,
							width: "13",
							height: "13",
							rx: "5",
							fill: on ? P : B,
							opacity: on ? 1 : .55
						}, i);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(214 132)",
				filter: "url(#bkShadow)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "28",
					fill: P
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M-11 1l7 7 14-16",
					stroke: S,
					strokeWidth: "4.6",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none",
					className: "tick-in"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(74 74)",
				filter: "url(#bkShadow)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "-38",
						y: "-18",
						width: "76",
						height: "36",
						rx: "15",
						fill: S,
						stroke: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "-20",
						cy: "0",
						r: "9",
						fill: A,
						opacity: "0.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-20 -5v5l3 2",
						stroke: A,
						strokeWidth: "2.4",
						strokeLinecap: "round",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "-6",
						y: "-6",
						width: "36",
						height: "5",
						rx: "2.5",
						fill: PD,
						opacity: "0.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "-6",
						y: "3",
						width: "22",
						height: "4",
						rx: "2",
						fill: B
					})
				]
			})
		]
	});
}
var TAB_IDS = [
	"home",
	"appointments",
	"plan",
	"chat",
	"profileTab"
];
var TABS = [
	{
		id: "home",
		label: L("Home", "الرئيسية"),
		icon: House
	},
	{
		id: "appointments",
		label: L("Visits", "المواعيد"),
		icon: CalendarDays
	},
	{
		id: "plan",
		label: L("Treatment", "العلاج"),
		icon: Stethoscope
	},
	{
		id: "chat",
		label: L("Chat", "المحادثة"),
		icon: MessageCircle
	},
	{
		id: "profileTab",
		label: L("Profile", "الحساب"),
		icon: User
	}
];
var SCREEN_TITLES = {
	book: L("Book a session", "حجز جلسة"),
	bookSuccess: L("Booking confirmed", "تم تأكيد الحجز"),
	apptDetail: L("Appointment", "الموعد"),
	reschedule: L("Reschedule", "إعادة جدولة"),
	cancel: L("Cancel appointment", "إلغاء الموعد"),
	planDetail: L("Treatment plan", "الخطة العلاجية"),
	assessments: L("Assessments", "التقييمات"),
	assessmentDetail: L("Assessment", "التقييم"),
	assessmentProgress: L("Progress", "التقدم"),
	documents: L("Documents", "المستندات"),
	docViewer: L("Document", "المستند"),
	invoices: L("Invoices", "الفواتير"),
	invoiceDetail: L("Invoice", "الفاتورة"),
	payment: L("Payment", "الدفع"),
	paymentSuccess: L("Payment", "الدفع"),
	consents: L("Consents", "الموافقات"),
	consentDetail: L("Consent", "الموافقة"),
	consentSign: L("Sign consent", "توقيع الموافقة"),
	consentSigned: L("Consent", "الموافقة"),
	sickLeave: L("Sick leave", "الإجازات المرضية"),
	pdfViewer: L("PDF viewer", "عارض PDF"),
	notifications: L("Notifications", "الإشعارات"),
	profile: L("Profile", "الملف الشخصي"),
	settings: L("Settings", "الإعدادات"),
	langSettings: L("Language", "اللغة"),
	notifPrefs: L("Notifications", "الإشعارات"),
	privacy: L("Privacy & security", "الخصوصية والأمان"),
	help: L("Help & support", "المساعدة والدعم"),
	deleteAccount: L("Delete account", "حذف الحساب"),
	authSuccess: L("Welcome", "مرحباً"),
	chat: L("Care team", "فريق الرعاية"),
	profileTab: L("Profile", "الحساب"),
	wallet: L("Wallet", "المحفظة"),
	more: L("More", "المزيد")
};
var consents = [
	{
		name: L("Treatment consent", "الموافقة على العلاج"),
		date: "01 Mar 2026",
		status: L("Signed", "موقّعة"),
		body: L("I authorise the Rehlah clinical team to deliver the agreed rehabilitation programme.", "أفوض الفريق الطبي في رحلة بتقديم البرنامج التأهيلي المتفق عليه.")
	},
	{
		name: L("Data sharing consent", "موافقة مشاركة البيانات"),
		date: "01 Mar 2026",
		status: L("Pending", "قيد الانتظار"),
		body: L("I agree that my child's clinical records may be shared with referring providers.", "أوافق على مشاركة السجلات السريرية لطفلي مع الجهات المحيلة.")
	},
	{
		name: L("Media & photography", "التصوير والوسائط"),
		date: "12 Apr 2026",
		status: L("Expired", "منتهية"),
		body: L("I permit session photography for clinical documentation purposes only.", "أسمح بتصوير الجلسات لأغراض التوثيق السريري فقط.")
	}
];
var sickLeaves = [{
	number: "SL-2026-0091",
	date: "12 Jul 2026",
	days: 2,
	status: L("Issued", "صادرة")
}, {
	number: "SL-2026-0064",
	date: "28 Jun 2026",
	days: 1,
	status: L("Issued", "صادرة")
}];
function Tile({ children, tint, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-border bg-surface p-4", tint, className),
		children
	});
}
function ListRow({ title, meta, right, onClick, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(onClick ? "button" : "div", {
		...onClick ? {
			onClick,
			type: "button"
		} : {},
		className: cn("grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-3 text-start last:border-0", onClick && "min-h-12 rounded-lg transition-colors hover:bg-tint-green/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[13px] font-medium",
					children: title
				}), meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[11px] text-muted-foreground",
					children: meta
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0",
				children: right ?? (onClick ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-4 text-muted-foreground rtl:rotate-180",
					"aria-hidden": true
				}) : null)
			})
		]
	});
}
function Screen({ title, subtitle, children }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-bold tracking-tight text-balance",
			children: t(title)
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-[13px] text-muted-foreground",
			children: t(subtitle)
		})] }), children]
	});
}
function Sheet({ open, onClose, title, children }) {
	const { t } = useI18n();
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex items-end",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": t(title),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": t(L("Close", "إغلاق")),
			onClick: onClose,
			className: "absolute inset-0 bg-foreground/30"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-in-soft relative w-full rounded-t-3xl border-t border-border bg-surface p-5 shadow-[var(--shadow-lifted)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "min-w-0 truncate text-[15px] font-bold",
					children: t(title)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": t(L("Close", "إغلاق")),
					className: "grid size-9 place-items-center rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": true
					})
				})]
			}), children]
		})]
	});
}
/** Modern iOS-style checkbox used across the auth forms. */
function CheckBox({ label, defaultChecked, required, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("group flex min-h-11 cursor-pointer gap-2.5 text-[13px] leading-relaxed select-none", align === "start" ? "items-start pt-0.5 text-muted-foreground" : "items-center"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative grid size-[22px] shrink-0 place-items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				defaultChecked,
				required,
				className: "peer absolute inset-0 size-full cursor-pointer appearance-none rounded-[8px] border border-border bg-surface shadow-[var(--shadow-soft)] transition-all duration-200 checked:border-primary checked:bg-primary focus-visible:ring-4 focus-visible:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)] focus-visible:outline-none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "pointer-events-none relative size-[14px] scale-50 text-primary-foreground opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100",
				"aria-hidden": true
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0",
			children: label
		})]
	});
}
function Success({ title, body, action, onAction, art, eyebrow, details, secondary, onSecondary }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[460px] flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "art-in flex justify-center",
				children: art ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtCelebrate, { className: "w-full max-w-[300px]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "copy-in mt-2 flex flex-col items-center gap-2 text-center",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full bg-tint-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[var(--primary-deep)] uppercase",
						children: t(eyebrow)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[24px] leading-[1.15] font-bold tracking-tight text-balance",
						children: t(title)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[19rem] text-[13.5px] leading-relaxed text-muted-foreground text-pretty",
						children: t(body)
					})
				]
			}),
			details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: details
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto space-y-2 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					onClick: onAction,
					children: t(action)
				}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					variant: "outline",
					className: "w-full",
					onClick: onSecondary,
					children: t(secondary)
				})]
			})
		]
	});
}
function ProgressRing({ value }) {
	const r = 26;
	const c = 2 * Math.PI * r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid size-[68px] shrink-0 place-items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 64 64",
			className: "size-[68px] -rotate-90",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r,
				fill: "none",
				stroke: "var(--border)",
				strokeWidth: "6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r,
				fill: "none",
				stroke: "var(--primary)",
				strokeWidth: "6",
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: c - c * value / 100,
				className: "draw-ring",
				style: {
					["--dash"]: c,
					["--dash-to"]: c - c * value / 100
				}
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "absolute text-[13px] font-bold tabular-nums",
			children: [value, "%"]
		})]
	});
}
function AuthPage({ eyebrow, title, body, children }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-[700px] flex-col overflow-hidden bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mesh-hero relative flex h-[176px] shrink-0 items-center justify-center overflow-hidden rounded-b-[2.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-orb absolute -end-10 -top-10 size-44 rounded-full bg-[color-mix(in_oklab,var(--wellness)_26%,transparent)] blur-3xl",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-orb absolute -start-12 -bottom-6 size-40 rounded-full bg-[color-mix(in_oklab,var(--primary)_24%,transparent)] blur-3xl [animation-delay:2.4s]",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtAuth, { className: "absolute inset-x-0 bottom-0 w-full opacity-70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, { className: "mark-in relative h-11 w-auto" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col px-7 pt-8 pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "copy-in flex flex-col items-start gap-2",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full bg-tint-green px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--primary-deep)] uppercase",
						children: t(eyebrow)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[27px] leading-[1.14] font-bold tracking-tight text-balance",
						children: t(title)
					}),
					body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[19rem] text-[14px] leading-relaxed text-muted-foreground text-pretty",
						children: t(body)
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "screen-in mt-8 flex-1 [animation-delay:180ms]",
				children
			})]
		})]
	});
}
var BOOK_DATES = [
	{
		key: "2026-08-10",
		d: L("Sun", "أحد"),
		n: "10",
		m: L("Aug", "أغسطس"),
		slots: [
			"09:15",
			"11:00",
			"15:00"
		]
	},
	{
		key: "2026-08-11",
		d: L("Mon", "إثنين"),
		n: "11",
		m: L("Aug", "أغسطس"),
		slots: [
			"08:30",
			"10:00",
			"13:45"
		]
	},
	{
		key: "2026-08-12",
		d: L("Tue", "ثلاثاء"),
		n: "12",
		m: L("Aug", "أغسطس"),
		slots: [
			"08:30",
			"09:15",
			"10:00",
			"11:00",
			"12:30",
			"15:00",
			"16:15"
		]
	},
	{
		key: "2026-08-13",
		d: L("Wed", "أربعاء"),
		n: "13",
		m: L("Aug", "أغسطس"),
		slots: ["10:00", "16:15"]
	},
	{
		key: "2026-08-14",
		d: L("Thu", "خميس"),
		n: "14",
		m: L("Aug", "أغسطس"),
		slots: []
	},
	{
		key: "2026-08-17",
		d: L("Sun", "أحد"),
		n: "17",
		m: L("Aug", "أغسطس"),
		slots: [
			"08:30",
			"11:00",
			"12:30",
			"15:00"
		]
	}
];
/** Step header used by the booking flow. */
function StepHead({ n, title, hint }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2.5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-6 place-items-center rounded-full bg-[var(--primary-deep)] text-[11px] font-bold text-primary-foreground tabular-nums",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[13.5px] font-bold",
				children: t(title)
			}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[11px] text-muted-foreground",
				children: t(hint)
			})]
		})]
	});
}
function BookScreen({ onConfirm }) {
	const { t } = useI18n();
	const [query, setQuery] = (0, import_react.useState)("");
	const [specialty, setSpecialty] = (0, import_react.useState)(2);
	const [specialist, setSpecialist] = (0, import_react.useState)(0);
	const [dateKey, setDateKey] = (0, import_react.useState)(BOOK_DATES[2].key);
	const [time, setTime] = (0, import_react.useState)(null);
	const [notes, setNotes] = (0, import_react.useState)("");
	const day = BOOK_DATES.find((d) => d.key === dateKey) ?? BOOK_DATES[0];
	const specialties = [
		0,
		1,
		2,
		3,
		4
	].filter((i) => t(spec(i)).toLowerCase().includes(query.trim().toLowerCase()));
	const specialists = [
		0,
		1,
		2
	];
	const morning = day.slots.filter((s) => Number(s.slice(0, 2)) < 12);
	const afternoon = day.slots.filter((s) => Number(s.slice(0, 2)) >= 12);
	const slotBtn = (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setTime(s),
		"aria-pressed": time === s,
		className: cn("min-h-11 rounded-xl border text-[13px] font-semibold tabular-nums transition-all duration-200", time === s ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_22px_-14px_var(--primary-deep)]" : "border-border bg-surface hover:border-primary/50"),
		children: s
	}, s);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[22px] leading-tight font-bold tracking-tight text-balance",
				children: t(L("Book a session", "حجز جلسة"))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[13px] text-muted-foreground",
				children: t(L("Four quick steps — specialty, specialist, day, time.", "أربع خطوات سريعة: التخصص، الأخصائي، اليوم، الوقت."))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHead, {
					n: 1,
					title: L("Choose a specialty", "اختر التخصص")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-muted-foreground",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						"aria-label": t(L("Search specialty", "بحث التخصص")),
						placeholder: t(L("Search specialty", "بحث التخصص")),
						className: "h-11 w-full rounded-2xl border border-border bg-surface ps-9 pe-3 text-sm shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_14%,transparent)]"
					})]
				}),
				specialties.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-dashed border-border bg-surface p-5 text-center text-[12px] text-muted-foreground",
					children: t(L("No specialty matches your search.", "لا يوجد تخصص مطابق للبحث."))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: specialties.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSpecialty(i),
						"aria-pressed": specialty === i,
						className: cn("rise min-h-[62px] rounded-2xl border p-3 text-start transition-colors", specialty === i ? "border-primary bg-tint-green" : "border-border bg-surface"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid size-8 place-items-center rounded-xl", specialty === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
									className: "size-4",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 text-[12.5px] leading-tight font-semibold text-balance",
								children: t(spec(i))
							})]
						})
					}, i))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHead, {
				n: 2,
				title: L("Pick your specialist", "اختر الأخصائي"),
				hint: L("Care team available for this specialty", "فريق الرعاية المتاح لهذا التخصص")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: specialists.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSpecialist(i),
					"aria-pressed": specialist === i,
					className: cn("grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-3 text-start transition-colors", specialist === i ? "border-primary bg-tint-green" : "border-border bg-surface"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-2xl bg-surface text-[13px] font-bold text-[var(--primary-deep)] ring-1 ring-border",
							children: t(doc(i)).replace(/^(Dr\.|د\.)\s*/, "").slice(0, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-[13.5px] font-semibold",
								children: t(doc(i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-[11.5px] text-muted-foreground",
								children: [
									t(spec(specialty)),
									" · ",
									8 + i,
									" ",
									t(L("yrs", "سنوات")),
									" · 4.",
									9 - i,
									" ★"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-6 place-items-center rounded-full border", specialist === i ? "border-primary bg-primary text-primary-foreground" : "border-border"),
							children: specialist === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5",
								"aria-hidden": true
							})
						})
					]
				}, i))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHead, {
				n: 3,
				title: L("Select a day", "اختر اليوم")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1",
				children: BOOK_DATES.map((d) => {
					const on = d.key === dateKey;
					const full = d.slots.length === 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: full,
						onClick: () => {
							setDateKey(d.key);
							setTime(null);
						},
						"aria-pressed": on,
						className: cn("flex min-h-[74px] w-[62px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-2xl border transition-all duration-200", full && "cursor-not-allowed opacity-40", on ? "border-primary bg-primary text-primary-foreground shadow-[0_12px_24px_-16px_var(--primary-deep)]" : "border-border bg-surface"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10.5px] font-semibold uppercase opacity-80",
								children: t(d.d)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[18px] leading-none font-bold tabular-nums",
								children: d.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75",
								children: full ? t(L("Full", "مكتمل")) : `${d.slots.length} ${t(L("slots", "موعد"))}`
							})
						]
					}, d.key);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHead, {
				n: 4,
				title: L("Choose a time", "اختر الوقت"),
				hint: L("All times are Riyadh time (GMT+3)", "جميع الأوقات بتوقيت الرياض (جرينتش+٣)")
			}), day.slots.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-border bg-surface p-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] font-semibold",
					children: t(L("Fully booked", "محجوز بالكامل"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12px] text-muted-foreground",
					children: t(L("Try another day from the strip above.", "جرّب يوماً آخر من الأعلى."))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [morning.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
					children: t(L("Morning", "صباحاً"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: morning.map(slotBtn)
				})] }), afternoon.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
					children: t(L("Afternoon", "مساءً"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: afternoon.map(slotBtn)
				})] })]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHead, {
				n: 5,
				title: L("Anything we should know?", "هل من ملاحظات؟"),
				hint: L("Optional note for the specialist", "ملاحظة اختيارية للأخصائي")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: notes,
				onChange: (e) => setNotes(e.target.value),
				rows: 3,
				"aria-label": t(L("Notes", "ملاحظات")),
				placeholder: t(L("e.g. sensory sensitivity, preferred room…", "مثال: حساسية حسية، غرفة مفضلة…")),
				className: "w-full rounded-2xl border border-border bg-surface p-3 text-[13px] shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_14%,transparent)]"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky -bottom-5 z-10 -mx-5 rounded-t-3xl border-t border-border bg-surface px-5 pt-3 pb-6 shadow-[0_-14px_30px_-24px_rgba(48,50,51,0.5)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "min-w-0 truncate text-[12px] text-muted-foreground",
						children: [
							t(spec(specialty)),
							" · ",
							t(day.d),
							" ",
							day.n,
							" ",
							t(day.m),
							time ? ` · ${time}` : ""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-bold tabular-nums",
						children: "SAR 320"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					disabled: !time,
					onClick: () => time && onConfirm({
						specialty,
						specialist,
						date: `${day.n} ${t(day.m)}`,
						time,
						notes
					}),
					children: time ? t(L("Confirm booking", "تأكيد الحجز")) : t(L("Select a time to continue", "اختر وقتاً للمتابعة"))
				})]
			})
		]
	});
}
function MobileApp() {
	const { t, lang, setLang } = useI18n();
	const [stack, setStack] = (0, import_react.useState)([{ id: "splash" }]);
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	const [sheet, setSheet] = (0, import_react.useState)(null);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [onboardStep, setOnboardStep] = (0, import_react.useState)(0);
	const [booking, setBooking] = (0, import_react.useState)(null);
	const bodyRef = (0, import_react.useRef)(null);
	const cur = stack[stack.length - 1];
	const push = (id, arg) => setStack((s) => [...s, {
		id,
		arg
	}]);
	const pop = () => setStack((s) => s.length > 1 ? s.slice(0, -1) : s);
	const reset = (id) => setStack([{ id }]);
	const goTab = (id) => setStack([{ id }]);
	const notify = (m) => setToast(m);
	(0, import_react.useEffect)(() => {
		bodyRef.current?.scrollTo({ top: 0 });
	}, [stack]);
	(0, import_react.useEffect)(() => {
		if (cur.id !== "splash") return;
		const timer = setTimeout(() => setStack([{ id: "welcome" }]), 2300);
		return () => clearTimeout(timer);
	}, [cur.id]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const timer = setTimeout(() => setToast(null), 2200);
		return () => clearTimeout(timer);
	}, [toast]);
	const p = pat(0);
	const plan = treatmentPlans[0];
	const isTab = TAB_IDS.includes(cur.id);
	const chromeless = !signedIn;
	function AuthScreen() {
		switch (cur.id) {
			case "splash": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-[700px] flex-col items-center justify-center overflow-hidden bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mesh-hero absolute inset-0",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "animate-orb absolute -start-16 top-10 size-64 rounded-full bg-[color-mix(in_oklab,var(--primary)_26%,transparent)] blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "animate-orb absolute -end-20 bottom-14 size-72 rounded-full bg-[color-mix(in_oklab,var(--wellness)_22%,transparent)] blur-3xl [animation-delay:2.2s]",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pulse-ring absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--primary)_38%,transparent)]",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pulse-ring absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklab,var(--wellness)_30%,transparent)] [animation-delay:1300ms]",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "splash-fade absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--surface)_92%,transparent),transparent_70%)]",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, { className: "mark-in relative h-20 w-auto drop-shadow-[0_30px_50px_color-mix(in_oklab,var(--primary-deep)_28%,transparent)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "splash-fade relative mt-8 h-px w-16 bg-[color-mix(in_oklab,var(--primary)_38%,transparent)] [animation-delay:600ms]",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "word-in relative mt-6 max-w-[16rem] text-center text-[13px] leading-relaxed tracking-wide text-muted-foreground [animation-delay:700ms]",
								children: t(L("Paediatric rehabilitation, beautifully connected", "تأهيل الأطفال، متصل بعناية"))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "splash-fade absolute bottom-14 h-[3px] w-32 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--primary)_16%,transparent)] [animation-delay:900ms]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sheen block h-full w-1/3 rounded-full bg-primary" })
					})
				]
			});
			case "welcome": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-[700px] flex-col overflow-hidden bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mesh-hero relative flex h-[352px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-b-[2.75rem] px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-orb absolute -end-12 -top-8 size-52 rounded-full bg-[color-mix(in_oklab,var(--wellness)_28%,transparent)] blur-3xl",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => push("language"),
							className: "absolute end-5 top-5 z-10 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border/70 bg-surface/85 px-3.5 text-[12px] font-semibold backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
								className: "size-3.5",
								"aria-hidden": true
							}), lang === "en" ? "العربية" : "English"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, { className: "mark-in absolute top-6 start-6 h-8 w-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtWelcome, { className: "art-in relative mt-6 w-full max-w-[290px]" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger flex flex-1 flex-col justify-end gap-3 px-7 pt-7 pb-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex w-fit items-center gap-1.5 rounded-full bg-tint-green px-3 py-1.5 text-[11px] font-semibold text-[var(--primary-deep)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "size-3.5",
								"aria-hidden": true
							}), t(L("MOH & CBAHI licensed care", "رعاية مرخصة من وزارة الصحة"))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[30px] leading-[1.1] font-bold tracking-tight text-balance",
							children: t(L("Every small step, beautifully tracked.", "كل خطوة صغيرة، موثقة بعناية."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] leading-relaxed text-muted-foreground text-pretty",
							children: t(L("Appointments, treatment plans, assessments and payments for your child — in one calm place.", "المواعيد والخطط العلاجية والتقييمات والمدفوعات لطفلك — في مكان واحد هادئ."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "mt-2 w-full",
							onClick: () => {
								setOnboardStep(0);
								push("onboarding");
							},
							children: [t(L("Get started", "ابدأ الآن")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4 rtl:rotate-180",
								"aria-hidden": true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "min-h-11 w-full text-[13px] font-semibold text-primary",
							onClick: () => push("login"),
							children: t(L("I already have an account", "لدي حساب بالفعل"))
						})
					]
				})]
			});
			case "onboarding": {
				const steps = [
					{
						t: L("Welcome to Rehlah", "مرحباً بك في رحلة"),
						b: L("One calm home for your child's rehabilitation — built with Saudi paediatric care teams.", "مكان واحد هادئ لتأهيل طفلك — بُني مع فرق رعاية الأطفال في السعودية."),
						Art: ArtCare,
						tag: L("Welcome", "أهلاً")
					},
					{
						t: L("Child progress tracking", "متابعة تقدم الطفل"),
						b: L("Goal-by-goal progress, therapist notes and home exercises updated after every session.", "تقدم لكل هدف وملاحظات المعالج والتمارين المنزلية بعد كل جلسة."),
						Art: ArtProgress,
						tag: L("Progress", "التقدم")
					},
					{
						t: L("Appointment management", "إدارة المواعيد"),
						b: L("See open slots, book, reschedule or cancel in seconds — reminders included.", "اطلع على الأوقات المتاحة واحجز أو أعد الجدولة أو ألغِ في ثوانٍ — مع التذكيرات."),
						Art: ArtSchedule,
						tag: L("Scheduling", "الجدولة")
					},
					{
						t: L("Reports & assessments", "التقارير والتقييمات"),
						b: L("Every assessment, medical report, consent and sick-leave note, archived and shareable.", "كل تقييم وتقرير طبي وموافقة وإجازة مرضية، مؤرشفة وقابلة للمشاركة."),
						Art: ArtDocuments,
						tag: L("Records", "السجلات")
					},
					{
						t: L("Get started", "لنبدأ"),
						b: L("Set up your guardian account and bring your child's whole care team together.", "جهّز حساب ولي الأمر واجمع فريق رعاية طفلك في مكان واحد."),
						Art: ArtJourney,
						tag: L("Together", "معاً")
					}
				];
				const last = steps.length - 1;
				const s = steps[onboardStep];
				const Art = s.Art;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex min-h-[700px] flex-col overflow-hidden bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-6 pt-6 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, { className: "h-7 w-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: cn("inline-flex min-h-11 items-center rounded-full px-4 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground", onboardStep === last && "pointer-events-none opacity-0"),
								onClick: () => setOnboardStep(last),
								tabIndex: onboardStep === last ? -1 : 0,
								"aria-hidden": onboardStep === last,
								children: t(L("Skip", "تخطي"))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-[318px] shrink-0 items-center justify-center px-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Art, { className: "art-in h-full w-full max-w-[320px] object-contain" }, onboardStep)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "copy-in flex h-[188px] flex-col items-start gap-2.5 px-7 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full bg-tint-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[var(--primary-deep)] uppercase",
									children: t(s.tag)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[27px] leading-[1.14] font-bold tracking-tight text-balance",
									children: t(s.t)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[20rem] text-[14px] leading-relaxed text-muted-foreground text-pretty",
									children: t(s.b)
								})
							]
						}, onboardStep),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-auto px-7 pb-8",
							children: onboardStep === last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "w-full",
								onClick: () => push("language"),
								children: [t(L("Get started", "ابدأ الآن")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4 rtl:rotate-180",
									"aria-hidden": true
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "-ms-1 flex items-center",
									role: "tablist",
									"aria-label": t(L("Onboarding steps", "خطوات التعريف")),
									children: steps.map((st, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										role: "tab",
										"aria-selected": i === onboardStep,
										"aria-label": t(st.tag),
										onClick: () => setOnboardStep(i),
										className: "grid h-11 place-items-center px-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", i === onboardStep ? "w-7 bg-primary" : "w-1.5 bg-border") })
									}, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setOnboardStep(onboardStep + 1),
									"aria-label": t(L("Next", "التالي")),
									className: "grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_32px_-18px_color-mix(in_oklab,var(--primary)_90%,transparent)] transition-transform active:scale-95",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-5 rtl:rotate-180",
										"aria-hidden": true
									})
								})]
							})
						})
					]
				});
			}
			case "language": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthPage, {
				eyebrow: L("Step 1 of 2", "الخطوة ١ من ٢"),
				title: L("Choose your language", "اختر لغتك"),
				body: L("You can change this any time in settings.", "يمكنك تغييرها في أي وقت من الإعدادات."),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2.5",
					children: [[
						"en",
						"English",
						"Left-to-right"
					], [
						"ar",
						"العربية",
						"من اليمين إلى اليسار"
					]].map(([code, label, hint]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setLang(code),
						"aria-pressed": lang === code,
						className: cn("grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-4 text-start transition-all duration-300", lang === code ? "border-primary bg-tint-green shadow-[0_18px_32px_-26px_color-mix(in_oklab,var(--primary)_90%,transparent)]" : "border-border bg-surface hover:border-primary/40"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-xl bg-surface text-[13px] font-bold text-[var(--primary-deep)]",
								children: code === "en" ? "EN" : "ع"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-muted-foreground",
									children: hint
								})]
							}),
							lang === code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-5 text-primary",
								"aria-hidden": true
							})
						]
					}, code))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "mt-6 w-full",
					onClick: () => push("login"),
					children: t(L("Continue", "متابعة"))
				})]
			});
			case "login": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthPage, {
				eyebrow: L("Welcome back", "مرحباً بعودتك"),
				title: L("Sign in to Rehlah", "تسجيل الدخول إلى رحلة"),
				body: L("Use your registered mobile number or email.", "استخدم رقم جوالك أو بريدك المسجل."),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-5",
						onSubmit: (e) => {
							e.preventDefault();
							push("otp");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Mobile or email", "الجوال أو البريد"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "text",
									placeholder: "+966 5X XXX XXXX",
									autoComplete: "username"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Password", "كلمة المرور"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "password",
									placeholder: t(L("Enter your password", "أدخل كلمة المرور")),
									autoComplete: "current-password"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, {
									defaultChecked: true,
									label: t(L("Remember me", "تذكرني"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 text-[13px] font-semibold text-primary",
									onClick: () => push("forgot"),
									children: t(L("Forgot password?", "نسيت كلمة المرور؟"))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								type: "submit",
								className: "w-full",
								children: t(L("Sign in", "تسجيل الدخول"))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6 flex items-center gap-3 text-[11px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							t(L("or", "أو")),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "w-full",
						onClick: () => push("otp"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "size-4",
							"aria-hidden": true
						}), t(L("Continue with Nafath", "المتابعة عبر نفاذ"))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-[13px] text-muted-foreground",
						children: [
							t(L("New to Rehlah?", "جديد في رحلة؟")),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "font-semibold text-primary",
								onClick: () => push("register"),
								children: t(L("Create account", "إنشاء حساب"))
							})
						]
					})
				]
			});
			case "register": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthPage, {
				eyebrow: L("Guardian registration", "تسجيل ولي الأمر"),
				title: L("Create your account", "إنشاء حسابك"),
				body: L("Takes about a minute. Your child is added after verification.", "يستغرق دقيقة تقريباً. يضاف طفلك بعد التحقق."),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-5",
					onSubmit: (e) => {
						e.preventDefault();
						push("otp");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Guardian full name", "اسم ولي الأمر"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: t(L("e.g. Sara Al-Otaibi", "مثال: سارة العتيبي")),
								autoComplete: "name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("National ID / Iqama", "الهوية / الإقامة"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								inputMode: "numeric",
								maxLength: 10,
								placeholder: "1XXXXXXXXX"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Mobile number", "رقم الجوال"),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								inputMode: "tel",
								placeholder: "+966 5X XXX XXXX",
								autoComplete: "tel"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: L("Password", "كلمة المرور"),
							hint: L("Minimum 8 characters with a number.", "٨ أحرف على الأقل مع رقم."),
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								placeholder: "••••••••",
								autoComplete: "new-password"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, {
							required: true,
							align: "start",
							label: t(L("I accept the terms of service and privacy policy.", "أوافق على شروط الخدمة وسياسة الخصوصية."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							type: "submit",
							className: "w-full",
							children: t(L("Create account", "إنشاء حساب"))
						})
					]
				})
			});
			case "otp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthPage, {
				eyebrow: L("Security", "الأمان"),
				title: L("Verify your number", "تحقق من رقمك"),
				body: L("We sent a 4-digit code to +966 5X XXX 4821. It expires in 10 minutes.", "أرسلنا رمزاً من ٤ أرقام إلى ٤٨٢١ XXX 5X ٩٦٦+. ينتهي خلال ١٠ دقائق."),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtVerify, { className: "mx-auto -mt-5 w-full max-w-[240px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex justify-center gap-3",
						dir: "ltr",
						children: [
							0,
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							inputMode: "numeric",
							maxLength: 1,
							"aria-label": `${t(L("Digit", "رقم"))} ${i + 1}`,
							onChange: (e) => {
								const next = e.currentTarget.parentElement?.children[i + 1];
								if (e.currentTarget.value && next instanceof HTMLInputElement) next.focus();
							},
							className: "size-[58px] rounded-2xl border border-border bg-surface text-center text-2xl font-bold tabular-nums shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] duration-200 outline-none focus:scale-[1.04] focus:border-primary focus:ring-4 focus:ring-[color-mix(in_oklab,var(--primary)_16%,transparent)]"
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-border bg-tint-green/70 p-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-xl bg-surface text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-5",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] leading-relaxed text-muted-foreground",
							children: t(L("Rehlah never asks for this code by phone or message. Keep it private.", "لن تطلب رحلة هذا الرمز عبر الهاتف أو الرسائل. احتفظ به لنفسك."))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-6 w-full",
						onClick: () => {
							setSignedIn(true);
							reset("authSuccess");
						},
						children: t(L("Verify and continue", "تحقق وتابع"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-center gap-1.5 text-[13px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "size-3.5",
								"aria-hidden": true
							}),
							t(L("Didn't get it?", "لم يصلك الرمز؟")),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "font-semibold text-primary",
								onClick: () => notify(L("Code resent", "أعيد إرسال الرمز")),
								children: t(L("Resend code", "إعادة إرسال الرمز"))
							})
						]
					})
				]
			});
			case "forgot": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthPage, {
				eyebrow: L("Account recovery", "استعادة الحساب"),
				title: L("Forgot password", "نسيت كلمة المرور"),
				body: L("Enter your registered mobile number and we will send a reset code.", "أدخل رقم جوالك المسجل وسنرسل رمز إعادة التعيين."),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Mobile number", "رقم الجوال"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							inputMode: "tel",
							placeholder: "+966 5X XXX XXXX",
							autoComplete: "tel"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-6 w-full",
						onClick: () => push("reset"),
						children: t(L("Send reset code", "إرسال الرمز"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-3 min-h-11 w-full text-[13px] font-semibold text-muted-foreground",
						onClick: pop,
						children: t(L("Back to sign in", "العودة لتسجيل الدخول"))
					})
				]
			});
			case "reset": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthPage, {
				eyebrow: L("Account recovery", "استعادة الحساب"),
				title: L("Set a new password", "تعيين كلمة مرور جديدة"),
				body: L("Choose a strong password you have not used before.", "اختر كلمة مرور قوية لم تستخدمها من قبل."),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("New password", "كلمة المرور الجديدة"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							placeholder: "••••••••",
							autoComplete: "new-password"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Confirm password", "تأكيد كلمة المرور"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							placeholder: "••••••••",
							autoComplete: "new-password"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "mt-6 w-full",
					onClick: () => {
						setSignedIn(true);
						reset("authSuccess");
					},
					children: t(L("Reset password", "إعادة التعيين"))
				})]
			});
			case "authSuccess": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-7 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
					eyebrow: L("Account verified", "تم توثيق الحساب"),
					title: L("You're all set, welcome to Rehlah", "تم كل شيء، أهلاً بك في رحلة"),
					body: L("Your guardian account is verified and your child's care team is connected. Everything lives in one calm place from here.", "تم توثيق حساب ولي الأمر وربط فريق رعاية طفلك. كل شيء الآن في مكان واحد هادئ."),
					action: L("Go to dashboard", "الذهاب للوحة"),
					onAction: () => goTab("home"),
					details: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							{
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
									className: "size-4",
									"aria-hidden": true
								}),
								l: L("Book visits", "احجز المواعيد")
							},
							{
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
									className: "size-4",
									"aria-hidden": true
								}),
								l: L("Track progress", "تابع التقدم")
							},
							{
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
									className: "size-4",
									"aria-hidden": true
								}),
								l: L("Get reports", "استلم التقارير")
							}
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface p-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto mb-1.5 grid size-9 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]",
								children: c.i
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold text-balance",
								children: t(c.l)
							})]
						}, i))
					})
				})
			});
			default: return null;
		}
	}
	function AppScreen() {
		switch (cur.id) {
			case "authSuccess": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
				eyebrow: L("Account verified", "تم توثيق الحساب"),
				title: L("You're all set", "تم كل شيء"),
				body: L("Your account is verified and your child's care team is connected.", "تم توثيق حسابك وربط فريق رعاية طفلك."),
				action: L("Go to dashboard", "الذهاب للوحة"),
				onAction: () => goTab("home")
			});
			case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger space-y-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mesh-hero relative overflow-hidden rounded-[1.75rem] border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-orb absolute -end-10 -top-10 size-36 rounded-full bg-[color-mix(in_oklab,var(--wellness)_28%,transparent)] blur-2xl",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-semibold tracking-[0.16em] text-primary uppercase",
											children: t(L("Good morning", "صباح الخير"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 truncate text-[22px] font-bold tracking-tight",
											children: t(p.name)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-0.5 text-[12px] text-muted-foreground",
											children: [
												t(L("Week", "الأسبوع")),
												" 6 · ",
												plan.sessions,
												" ",
												t(L("sessions completed", "جلسة مكتملة"))
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRing, { value: plan.progress })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-4 rounded-2xl border border-border/70 bg-surface/85 p-3.5 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
												className: "size-5",
												"aria-hidden": true
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
													children: t(L("Next session", "الجلسة القادمة"))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block truncate text-[15px] font-bold tabular-nums",
													children: ["08:30 · ", t(spec(2))]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block truncate text-[12px] text-muted-foreground",
													children: t(doc(0))
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "success",
											children: t(L("Today", "اليوم"))
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										className: "flex-1",
										onClick: () => notify(L("Checked in", "تم تسجيل الحضور")),
										children: t(L("Check in", "تسجيل حضور"))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "flex-1",
										onClick: () => push("apptDetail", 0),
										children: t(L("Details", "التفاصيل"))
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-2.5",
						children: [
							{
								l: L("Book", "حجز"),
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-5",
									"aria-hidden": true
								}),
								go: () => push("book"),
								tint: "bg-tint-green text-[var(--primary-deep)]"
							},
							{
								l: L("Pay", "دفع"),
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
									className: "size-5",
									"aria-hidden": true
								}),
								go: () => push("invoices"),
								tint: "bg-tint-yellow text-[oklch(0.5_0.09_92)]"
							},
							{
								l: L("Files", "الملفات"),
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
									className: "size-5",
									"aria-hidden": true
								}),
								go: () => push("documents"),
								tint: "bg-tint-blue text-info"
							},
							{
								l: L("Tests", "التقييمات"),
								i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
									className: "size-5",
									"aria-hidden": true
								}),
								go: () => push("assessments"),
								tint: "bg-tint-purple text-wellness"
							}
						].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: q.go,
							className: "rise flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-surface px-1 py-3 text-[11px] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid size-10 place-items-center rounded-xl", q.tint),
								children: q.i
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t(q.l)
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-start",
							onClick: () => push("planDetail", 0),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[13px] font-semibold",
									children: t(L("Treatment plan progress", "تقدم الخطة العلاجية"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-xs text-muted-foreground",
									children: [
										plan.sessions,
										" ",
										t(L("sessions", "جلسة")),
										" · ",
										plan.progress,
										"%"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "size-4 text-muted-foreground rtl:rotate-180",
								"aria-hidden": true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: plan.progress })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-3 gap-2",
							children: [
								{
									l: L("Attendance", "الحضور"),
									v: "94%",
									tone: "text-success"
								},
								{
									l: L("Goals met", "الأهداف"),
									v: "7/9",
									tone: "text-primary"
								},
								{
									l: L("Home plan", "المنزلي"),
									v: "82%",
									tone: "text-wellness"
								}
							].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-tint-blue/70 p-2.5 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("text-[15px] font-bold tabular-nums", m.tone),
									children: m.v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: t(m.l)
								})]
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => push("invoices"),
							className: "rise rounded-2xl border border-border bg-surface p-3.5 text-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-2 grid size-9 place-items-center rounded-xl bg-tint-yellow text-[oklch(0.5_0.09_92)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-muted-foreground",
									children: t(L("Outstanding balance", "الرصيد المستحق"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[17px] font-bold tabular-nums",
									children: "SAR 640"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-muted-foreground",
									children: t(L("1 invoice due", "فاتورة واحدة مستحقة"))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => push("consents"),
							className: "rise rounded-2xl border border-border bg-surface p-3.5 text-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-2 grid size-9 place-items-center rounded-xl bg-tint-purple text-wellness",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-muted-foreground",
									children: t(L("Consents", "الموافقات"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[17px] font-bold tabular-nums",
									children: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-muted-foreground",
									children: t(L("Awaiting signature", "بانتظار التوقيع"))
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "mb-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center text-start text-[13px] font-semibold",
						onClick: () => push("documents"),
						children: [t(L("Latest reports", "أحدث التقارير")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "size-4 text-muted-foreground rtl:rotate-180",
							"aria-hidden": true
						})]
					}), documents.slice(0, 2).map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(d.name),
						meta: `${t(d.type)} · ${d.date}`,
						onClick: () => push("docViewer", i)
					}, i))] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "mb-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center text-start text-[13px] font-semibold",
						onClick: () => push("notifications"),
						children: [t(L("Notifications", "الإشعارات")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "size-4 text-muted-foreground rtl:rotate-180",
							"aria-hidden": true
						})]
					}), notifications.slice(0, 3).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						title: t(n.title),
						meta: t(n.body),
						onClick: () => push("notifications")
					}, i))] })
				]
			});
			case "chat": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Care team", "فريق الرعاية"),
				subtitle: L("Secure messaging with your clinicians", "مراسلة آمنة مع فريقك الطبي"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						tint: "bg-tint-green",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 place-items-center rounded-2xl bg-surface text-[var(--primary-deep)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
										className: "size-5",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[13px] font-semibold",
										children: t(doc(0))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] text-success",
										children: t(L("Usually replies within 2 hours", "يرد عادة خلال ساعتين"))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									children: t(L("Online", "متصل"))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2.5",
						children: [
							{
								me: false,
								m: L("Good morning! Layan did really well in yesterday's session.", "صباح الخير! أدت ليان أداءً ممتازاً في جلسة الأمس."),
								at: "08:12"
							},
							{
								me: true,
								m: L("That's wonderful — should we continue the home exercises?", "هذا رائع — هل نستمر في التمارين المنزلية؟"),
								at: "08:20"
							},
							{
								me: false,
								m: L("Yes, three sets daily. I have attached the updated home plan.", "نعم، ثلاث مجموعات يومياً. أرفقت الخطة المنزلية المحدثة."),
								at: "08:24"
							},
							{
								me: true,
								m: L("Received, thank you.", "استلمتها، شكراً لك."),
								at: "08:26"
							}
						].map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex", msg.me ? "justify-end" : "justify-start"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-[var(--shadow-soft)]", msg.me ? "rounded-ee-md bg-primary text-primary-foreground" : "rounded-es-md border border-border bg-surface"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(msg.m) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-1 text-[10px] tabular-nums", msg.me ? "text-primary-foreground/70" : "text-muted-foreground"),
									children: msg.at
								})]
							})
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							notify(L("Message sent", "تم إرسال الرسالة"));
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"aria-label": t(L("Message", "رسالة")),
							placeholder: t(L("Write a message", "اكتب رسالة"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							type: "submit",
							"aria-label": t(L("Send", "إرسال")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								className: "size-4 rtl:rotate-180",
								"aria-hidden": true
							})
						})]
					})
				]
			});
			case "appointments": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Appointments", "المواعيد"),
				subtitle: L("Upcoming and past visits", "المواعيد القادمة والسابقة"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "w-full",
					onClick: () => push("book"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
						className: "size-4",
						"aria-hidden": true
					}), t(L("Book new appointment", "حجز موعد جديد"))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: appointments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					onClick: () => push("apptDetail", i),
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						a.time,
						" · ",
						t(spec(a.specialty))
					] }),
					meta: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						t(doc(a.specialist)),
						" · ",
						t(a.type)
					] }),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(a.status.en),
						children: t(a.status)
					})
				}, i)) })]
			});
			case "apptDetail": {
				const a = appointments[cur.arg ?? 0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Appointment details", "تفاصيل الموعد"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							tint: "bg-tint-green",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-bold tabular-nums",
									children: a.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[13px] text-muted-foreground",
									children: [
										t(spec(a.specialty)),
										" · ",
										t(doc(a.specialist))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: statusTone(a.status.en),
										children: t(a.status)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [
							[L("Type", "النوع"), t(a.type)],
							[L("Location", "الموقع"), t(L("Riyadh centre · Room 4", "مركز الرياض · غرفة ٤"))],
							[L("Notes", "ملاحظات"), t(a.notes)],
							[L("Duration", "المدة"), "45 min"]
						].map(([k, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-[13px] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t(k)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 text-end font-medium",
								children: v
							})]
						}, i)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => push("reschedule", cur.arg),
								children: t(L("Reschedule", "إعادة جدولة"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "danger",
								onClick: () => push("cancel", cur.arg),
								children: t(L("Cancel", "إلغاء"))
							})]
						})
					]
				});
			}
			case "reschedule": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Reschedule", "إعادة جدولة"),
				subtitle: L("Pick a new date and time", "اختر تاريخاً ووقتاً جديدين"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: [
							"Sun 10",
							"Mon 11",
							"Tue 12",
							"Wed 13",
							"Thu 14"
						].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: cn("min-h-11 shrink-0 rounded-2xl border border-border px-4 text-[13px] font-medium", i === 2 ? "bg-primary text-primary-foreground" : "bg-surface"),
							children: d
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							"08:30",
							"09:15",
							"10:00",
							"11:00",
							"12:30",
							"15:00"
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: cn("min-h-11 rounded-xl border border-border text-[13px] font-medium tabular-nums", i === 1 ? "bg-tint-green text-[var(--primary-deep)]" : "bg-surface"),
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: () => {
							notify(L("Appointment rescheduled", "تمت إعادة الجدولة"));
							pop();
						},
						children: t(L("Confirm new time", "تأكيد الوقت الجديد"))
					})
				]
			});
			case "cancel": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Cancel appointment", "إلغاء الموعد"),
				subtitle: L("Tell us why so the clinic can follow up", "أخبرنا بالسبب لمتابعة العيادة"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [
					L("Schedule conflict", "تعارض في الجدول"),
					L("Child is unwell", "الطفل مريض"),
					L("Travelling", "سفر"),
					L("Other", "أخرى")
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-12 items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "radio",
						name: "cancel-reason",
						defaultChecked: i === 0,
						className: "size-[18px] rounded-[6px] accent-[var(--primary)]"
					}), t(r)]
				}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					className: "w-full",
					onClick: () => setSheet("confirmCancel"),
					children: t(L("Cancel appointment", "إلغاء الموعد"))
				})]
			});
			case "book": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookScreen, { onConfirm: (b) => {
				setBooking(b);
				push("bookSuccess");
			} });
			case "bookSuccess": {
				const b = booking;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
					art: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtBooked, { className: "w-full max-w-[300px]" }),
					eyebrow: L("Confirmed", "تم التأكيد"),
					title: L("Your session is booked", "تم حجز جلستك"),
					body: L("We've added it to your calendar. A reminder arrives 24 hours before.", "أضفناها إلى تقويمك، وسيصلك تذكير قبل ٢٤ ساعة."),
					action: L("Back to appointments", "العودة للمواعيد"),
					onAction: () => goTab("appointments"),
					secondary: L("Add another session", "حجز جلسة أخرى"),
					onSecondary: () => reset("book"),
					details: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]",
						children: [[
							{
								l: L("Specialty", "التخصص"),
								v: t(spec(b?.specialty ?? 2))
							},
							{
								l: L("Specialist", "الأخصائي"),
								v: t(doc(b?.specialist ?? 0))
							},
							{
								l: L("Date", "التاريخ"),
								v: b?.date ?? "12 Aug"
							},
							{
								l: L("Time", "الوقت"),
								v: `${b?.time ?? "08:30"} · 45 ${t(L("min", "دقيقة"))}`
							},
							{
								l: L("Location", "الموقع"),
								v: t(L("Rehlah Centre — Riyadh", "مركز رحلة — الرياض"))
							},
							{
								l: L("Total", "الإجمالي"),
								v: "SAR 320"
							}
						].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-2", i > 0 && "border-t border-border/70"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11.5px] text-muted-foreground",
								children: t(r.l)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-end text-[12.5px] font-semibold",
								children: r.v
							})]
						}, i)), b?.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 rounded-xl bg-tint-blue/70 p-2.5 text-[11.5px] text-muted-foreground",
							children: b.notes
						}) : null]
					})
				});
			}
			case "plan": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Treatment plans", "الخطط العلاجية"),
				subtitle: L("Goals, sessions and home exercises", "الأهداف والجلسات والتمارين المنزلية"),
				children: [treatmentPlans.map((pl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					className: "cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "w-full text-start",
						onClick: () => push("planDetail", i),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-[13px] font-semibold",
									children: t(spec(pl.specialty))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-[11px] text-muted-foreground",
									children: [
										t(doc(pl.specialist)),
										" · ",
										pl.start,
										" → ",
										pl.end
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: statusTone(pl.status.en),
								children: t(pl.status)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, {
								value: pl.progress,
								tone: "wellness"
							})
						})]
					})
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: () => push("assessments"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
						className: "size-4",
						"aria-hidden": true
					}), t(L("View assessments", "عرض التقييمات"))]
				})]
			});
			case "planDetail": {
				const pl = treatmentPlans[cur.arg ?? 0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Treatment plan", "الخطة العلاجية"),
					subtitle: L("Goals and home exercises", "الأهداف والتمارين المنزلية"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							tint: "bg-tint-purple",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-semibold",
									children: t(spec(pl.specialty))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-muted-foreground",
									children: [
										t(doc(pl.specialist)),
										" · ",
										pl.start,
										" → ",
										pl.end
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: [
										pl.sessions,
										" ",
										t(L("sessions", "جلسة"))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, {
										value: pl.progress,
										tone: "wellness"
									})
								})
							]
						}),
						pl.goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "min-w-0 truncate text-[13px] font-medium",
								children: t(g.goal)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-muted-foreground tabular-nums",
								children: [g.progress, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: g.progress })
						})] }, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[13px] font-semibold",
							children: t(L("Home exercise programme", "برنامج التمارين المنزلية"))
						}), [
							L("Blowing bubbles — 5 min daily", "نفخ الفقاعات — ٥ دقائق يومياً"),
							L("Mirror sound practice — 10 min", "تمرين الأصوات أمام المرآة — ١٠ دقائق"),
							L("Picture naming cards — 15 cards", "بطاقات تسمية الصور — ١٥ بطاقة")
						].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-12 items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								defaultChecked: i === 0,
								className: "size-[18px] rounded-[6px] accent-[var(--primary)]"
							}), t(e)]
						}, i))] })
					]
				});
			}
			case "assessments": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Assessments", "التقييمات"),
				subtitle: L("Clinical evaluations over time", "التقييمات السريرية عبر الزمن"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: assessments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					onClick: () => push("assessmentDetail", i),
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						t(spec(a.specialty)),
						" · ",
						a.date
					] }),
					meta: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						t(doc(a.specialist)),
						" · ",
						a.duration
					] }),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(a.status.en),
						children: a.score
					})
				}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: () => push("assessmentProgress"),
					children: t(L("View progress over time", "عرض التقدم عبر الزمن"))
				})]
			});
			case "assessmentDetail": {
				const a = assessments[cur.arg ?? 0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Assessment details", "تفاصيل التقييم"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							tint: "bg-tint-blue",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-3xl font-bold tabular-nums",
									children: [a.score, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base text-muted-foreground",
										children: "/100"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[13px] text-muted-foreground",
									children: [
										t(spec(a.specialty)),
										" · ",
										a.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: statusTone(a.status.en),
										children: t(a.status)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[13px] font-semibold",
							children: t(L("Domain scores", "درجات المجالات"))
						}), [
							{
								d: L("Receptive language", "اللغة الاستقبالية"),
								v: 78
							},
							{
								d: L("Expressive language", "اللغة التعبيرية"),
								v: 64
							},
							{
								d: L("Articulation", "النطق"),
								v: 88
							},
							{
								d: L("Social communication", "التواصل الاجتماعي"),
								v: 71
							}
						].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border py-2.5 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[13px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(r.d) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted-foreground",
									children: [r.v, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, { value: r.v })
							})]
						}, i))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold",
							children: t(L("Specialist notes", "ملاحظات الأخصائي"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-muted-foreground",
							children: t(L("Steady improvement in articulation. Continue home programme and reassess in 6 weeks.", "تحسن مطرد في النطق. استمر في البرنامج المنزلي وأعد التقييم بعد ٦ أسابيع."))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "w-full",
							onClick: () => push("pdfViewer"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": true
							}), t(L("Download report", "تنزيل التقرير"))]
						})
					]
				});
			}
			case "assessmentProgress": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Assessment progress", "تقدم التقييمات"),
				subtitle: L("Scores across the last four assessments", "الدرجات عبر آخر أربعة تقييمات"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-44 items-end gap-3",
					children: assessments.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full flex-1 items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full rounded-t-xl bg-primary transition-all",
								style: { height: `${a.score}%` },
								role: "img",
								"aria-label": `${a.date}: ${a.score}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground tabular-nums",
							children: a.score
						})]
					}, i))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-muted-foreground",
					children: t(L("Average improvement of 11 points per quarter across all domains.", "متوسط تحسن ١١ نقطة كل ربع سنة عبر جميع المجالات."))
				}) })]
			});
			case "documents": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Documents", "المستندات"),
				subtitle: L("Reports, results and contracts", "التقارير والنتائج والعقود"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: documents.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
						className: "size-4",
						"aria-hidden": true
					}),
					onClick: () => push("docViewer", i),
					title: t(d.name),
					meta: `${d.date} · ${d.size} · ${t(d.type)}`
				}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: () => notify(L("Upload started", "بدأ الرفع")),
					children: t(L("Upload a document", "رفع مستند"))
				})]
			});
			case "docViewer": {
				const d = documents[cur.arg ?? 0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Document viewer", "عارض المستندات"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-semibold",
							children: t(d.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: [
								d.date,
								" · ",
								d.size,
								" · ",
								t(d.by)
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-72 place-items-center rounded-2xl border border-border bg-muted text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
									className: "mx-auto size-10",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[13px]",
									children: t(L("Preview — page 1 of 3", "معاينة — صفحة ١ من ٣"))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => notify(L("Downloaded", "تم التنزيل")),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "size-4",
									"aria-hidden": true
								}), t(L("Download", "تنزيل"))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => notify(L("Link shared", "تمت المشاركة")),
								children: t(L("Share", "مشاركة"))
							})]
						})
					]
				});
			}
			case "wallet": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Wallet", "المحفظة"),
				subtitle: L("Invoices, payments and packages", "الفواتير والمدفوعات والباقات"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
						tint: "bg-tint-yellow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold tracking-wide text-muted-foreground uppercase",
								children: t(L("Balance due", "الرصيد المستحق"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl font-bold",
								children: p.due
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "mt-3",
								onClick: () => push("payment", 3),
								children: t(L("Pay now", "ادفع الآن"))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 text-[13px] font-semibold",
							children: t(L("Active package", "الباقة النشطة"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: t(L("Speech therapy — 24 of 36 sessions used", "علاج النطق — ٢٤ من ٣٦ جلسة مستخدمة"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar$1, {
								value: 67,
								tone: "accent"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-[13px] font-semibold",
						children: t(L("Invoices", "الفواتير"))
					}), invoices.map((inv, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						onClick: () => push("invoiceDetail", i),
						title: inv.number,
						meta: `${inv.date} · ${inv.total.toLocaleString()} SAR`,
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: statusTone(inv.status.en),
							children: t(inv.status)
						})
					}, i))] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						onClick: () => push("sickLeave"),
						children: t(L("Sick leave certificates", "الإجازات المرضية"))
					})
				]
			});
			case "invoices": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
				title: L("Invoices", "الفواتير"),
				subtitle: L("All billing documents", "جميع مستندات الفوترة"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: invoices.map((inv, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					onClick: () => push("invoiceDetail", i),
					title: inv.number,
					meta: `${inv.date} · ${inv.total.toLocaleString()} SAR`,
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(inv.status.en),
						children: t(inv.status)
					})
				}, i)) })
			});
			case "invoiceDetail": {
				const inv = invoices[cur.arg ?? 0];
				const balance = inv.total - inv.paid;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Invoice details", "تفاصيل الفاتورة"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							tint: "bg-tint-green",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-semibold",
									children: inv.number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-2xl font-bold tabular-nums",
									children: [inv.total.toLocaleString(), " SAR"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: statusTone(inv.status.en),
										children: t(inv.status)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [
							[L("Issued", "تاريخ الإصدار"), inv.date],
							[L("Paid", "المدفوع"), `${inv.paid.toLocaleString()} SAR`],
							[L("Balance", "المتبقي"), `${balance.toLocaleString()} SAR`],
							[L("Method", "طريقة الدفع"), t(inv.method)]
						].map(([k, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-[13px] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t(k)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-end font-medium",
								children: v
							})]
						}, i)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[13px] font-semibold",
							children: t(L("Line items", "بنود الفاتورة"))
						}), [
							{
								d: L("Speech therapy session ×4", "جلسة نطق ×٤"),
								a: 800
							},
							{
								d: L("Initial assessment", "تقييم أولي"),
								a: 300
							},
							{
								d: L("VAT 15%", "ضريبة القيمة المضافة ١٥٪"),
								a: 100
							}
						].map((li, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border py-2.5 text-[13px] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate",
								children: t(li.d)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: [li.a, " SAR"]
							})]
						}, i))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => push("pdfViewer"),
								children: t(L("View PDF", "عرض PDF"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: balance === 0,
								onClick: () => push("payment", cur.arg),
								children: t(L("Pay now", "ادفع الآن"))
							})]
						})
					]
				});
			}
			case "payment": {
				const inv = invoices[cur.arg ?? 0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Payment", "الدفع"),
					subtitle: L("Secure checkout", "دفع آمن"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							tint: "bg-tint-green",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: t(L("Amount due", "المبلغ المستحق"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xl font-bold tabular-nums",
								children: [(inv.total - inv.paid).toLocaleString(), " SAR"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[13px] font-semibold",
							children: t(L("Payment method", "طريقة الدفع"))
						}), [
							L("Mada card", "بطاقة مدى"),
							L("Apple Pay", "أبل باي"),
							L("Credit card", "بطاقة ائتمانية"),
							L("Bank transfer", "تحويل بنكي")
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-12 items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "pay-method",
								defaultChecked: i === 0,
								className: "size-[18px] rounded-[6px] accent-[var(--primary)]"
							}), t(m)]
						}, i))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Card number", "رقم البطاقة"),
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									inputMode: "numeric",
									placeholder: "•••• •••• •••• 4242"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("Expiry", "تاريخ الانتهاء"),
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "MM/YY" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: L("CVV", "رمز التحقق"),
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										inputMode: "numeric",
										placeholder: "•••"
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							onClick: () => push("paymentSuccess"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								className: "size-4",
								"aria-hidden": true
							}), t(L("Pay securely", "ادفع بأمان"))]
						})
					]
				});
			}
			case "paymentSuccess": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
				title: L("Payment successful", "تم الدفع بنجاح"),
				body: L("Your receipt has been emailed and saved to your documents.", "تم إرسال الإيصال إلى بريدك وحفظه في مستنداتك."),
				action: L("Back to wallet", "العودة للمحفظة"),
				onAction: () => goTab("wallet")
			});
			case "consents": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
				title: L("Consents", "الموافقات"),
				subtitle: L("Signed and pending authorisations", "الموافقات الموقعة والمعلقة"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: consents.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					onClick: () => push("consentDetail", i),
					title: t(c.name),
					meta: c.date,
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(c.status.en),
						children: t(c.status)
					})
				}, i)) })
			});
			case "consentDetail": {
				const c = consents[cur.arg ?? 0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
					title: L("Consent details", "تفاصيل الموافقة"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-semibold",
								children: t(c.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: c.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(c.status.en),
									children: t(c.status)
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-relaxed text-muted-foreground",
							children: t(c.body)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							onClick: () => push("consentSign", cur.arg),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
								className: "size-4",
								"aria-hidden": true
							}), t(L("Review and sign", "مراجعة وتوقيع"))]
						})
					]
				});
			}
			case "consentSign": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Sign consent", "توقيع الموافقة"),
				subtitle: L("Draw your signature below", "ارسم توقيعك أدناه"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-40 place-items-center rounded-2xl border-2 border-dashed border-border bg-surface text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13px]",
							children: t(L("Signature area", "منطقة التوقيع"))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-2 text-[12px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "mt-0.5 size-[18px] rounded-[6px] accent-[var(--primary)]"
						}), t(L("I confirm I am the legal guardian and agree to the terms above.", "أؤكد أنني ولي الأمر القانوني وأوافق على الشروط أعلاه."))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: pop,
							children: t(L("Clear", "مسح"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => push("consentSigned"),
							children: t(L("Submit signature", "إرسال التوقيع"))
						})]
					})
				]
			});
			case "consentSigned": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
				title: L("Consent signed", "تم توقيع الموافقة"),
				body: L("A signed copy has been added to your documents.", "تمت إضافة نسخة موقعة إلى مستنداتك."),
				action: L("Back to consents", "العودة للموافقات"),
				onAction: () => {
					setStack([{ id: "more" }, { id: "consents" }]);
				}
			});
			case "sickLeave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
				title: L("Sick leave", "الإجازات المرضية"),
				subtitle: L("Issued certificates", "الشهادات الصادرة"),
				children: sickLeaves.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-6" }),
					title: L("No certificates yet", "لا توجد شهادات"),
					description: L("Certificates issued by your specialist appear here.", "تظهر هنا الشهادات الصادرة من أخصائيك.")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: sickLeaves.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
						className: "size-4",
						"aria-hidden": true
					}),
					onClick: () => push("pdfViewer"),
					title: s.number,
					meta: `${s.date} · ${s.days} ${t(L("days", "أيام"))}`,
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "success",
						children: t(s.status)
					})
				}, i)) })
			});
			case "pdfViewer": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("PDF viewer", "عارض PDF"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [1, 2].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-64 place-items-center rounded-2xl border border-border bg-surface text-muted-foreground shadow-[var(--shadow-soft)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[13px]",
							children: [
								t(L("Page", "صفحة")),
								" ",
								n
							]
						})
					}, n))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => notify(L("Downloaded", "تم التنزيل")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), t(L("Download", "تنزيل"))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => notify(L("Sent to printer", "أُرسل للطباعة")),
						children: t(L("Print", "طباعة"))
					})]
				})]
			});
			case "notifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Notifications", "الإشعارات"),
				subtitle: L("Reminders and clinic updates", "التذكيرات وتحديثات العيادة"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: notifications.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
						className: cn("size-4", n.unread ? "text-primary" : "text-muted-foreground"),
						"aria-hidden": true
					}),
					title: t(n.title),
					meta: `${t(n.body)} · ${t(n.time)}`,
					onClick: () => notify(L("Marked as read", "تم وضع علامة مقروء"))
				}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: () => push("notifPrefs"),
					children: t(L("Notification preferences", "تفضيلات الإشعارات"))
				})]
			});
			case "profileTab":
			case "more": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("More", "المزيد"),
				subtitle: L("Profile, documents and settings", "الملف والمستندات والإعدادات"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-2xl bg-tint-green text-base font-bold text-[var(--primary-deep)]",
							children: t(p.name).slice(0, 1)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-[13px] font-semibold",
								children: t(p.name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-[11px] text-muted-foreground",
								children: p.file
							})]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [
						{
							l: L("Profile & guardian info", "الملف وبيانات ولي الأمر"),
							go: "profile",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Documents", "المستندات"),
							go: "documents",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Assessments", "التقييمات"),
							go: "assessments",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Consents", "الموافقات"),
							go: "consents",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Sick leave", "الإجازات المرضية"),
							go: "sickLeave",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Notifications", "الإشعارات"),
							go: "notifications",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Settings", "الإعدادات"),
							go: "settings",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
								className: "size-4",
								"aria-hidden": true
							})
						},
						{
							l: L("Help & support", "المساعدة والدعم"),
							go: "help",
							i: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
								className: "size-4",
								"aria-hidden": true
							})
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: item.i,
						title: t(item.l),
						onClick: () => push(item.go)
					}, i)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Message care team", "مراسلة فريق الرعاية")),
						onClick: () => notify(L("Message thread opened", "تم فتح المحادثة"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Sign out", "تسجيل الخروج")),
						onClick: () => setSheet("confirmLogout")
					})] })
				]
			});
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Profile", "الملف الشخصي"),
				subtitle: L("Patient and guardian information", "بيانات المريض وولي الأمر"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [
					[L("Patient name", "اسم المريض"), t(p.name)],
					[L("File number", "رقم الملف"), p.file],
					[L("Date of birth", "تاريخ الميلاد"), "14 Mar 2019"],
					[L("Guardian", "ولي الأمر"), t(L("Nouf Al-Otaibi", "نوف العتيبي"))],
					[L("Mobile", "الجوال"), "+966 55 123 4567"],
					[L("Insurance", "التأمين"), t(L("Bupa Arabia — Class A", "بوبا العربية — فئة أ"))]
				].map(([k, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-b border-border py-2.5 text-[13px] last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: t(k)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-end font-medium",
						children: v
					})]
				}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: () => notify(L("Edit request sent to reception", "تم إرسال طلب التعديل للاستقبال")),
					children: t(L("Request an update", "طلب تحديث"))
				})]
			});
			case "settings": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Settings", "الإعدادات"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Language", "اللغة")),
						meta: lang === "en" ? "English" : "العربية",
						onClick: () => push("langSettings")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Notification preferences", "تفضيلات الإشعارات")),
						onClick: () => push("notifPrefs")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Privacy & security", "الخصوصية والأمان")),
						onClick: () => push("privacy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Help & support", "المساعدة والدعم")),
						onClick: () => push("help")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
						className: "size-4",
						"aria-hidden": true
					}),
					title: t(L("Sign out", "تسجيل الخروج")),
					onClick: () => setSheet("confirmLogout")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
						className: "size-4 text-destructive",
						"aria-hidden": true
					}),
					title: t(L("Delete account", "حذف الحساب")),
					onClick: () => push("deleteAccount")
				})] })]
			});
			case "langSettings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
				title: L("Language", "اللغة"),
				subtitle: L("Interface language and direction", "لغة الواجهة والاتجاه"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [["en", "English"], ["ar", "العربية"]].map(([code, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setLang(code);
						notify(L("Language updated", "تم تحديث اللغة"));
					},
					className: "grid min-h-12 w-full grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border py-3 text-start text-[13px] last:border-0",
					"aria-pressed": lang === code,
					children: [label, lang === code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-4 text-primary",
						"aria-hidden": true
					})]
				}, code)) })
			});
			case "notifPrefs": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
				title: L("Notification preferences", "تفضيلات الإشعارات"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: [
					L("Appointment reminders", "تذكيرات المواعيد"),
					L("Invoice and payment alerts", "تنبيهات الفواتير والمدفوعات"),
					L("Treatment plan updates", "تحديثات الخطة العلاجية"),
					L("Clinic announcements", "إعلانات المركز"),
					L("WhatsApp messages", "رسائل واتساب"),
					L("SMS messages", "الرسائل النصية")
				].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-12 items-center justify-between gap-3 border-b border-border py-3 text-[13px] last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						children: t(n)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						defaultChecked: i < 4,
						className: "size-5 shrink-0 accent-[var(--primary)]"
					})]
				}, i)) })
			});
			case "privacy": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Privacy & security", "الخصوصية والأمان"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Change password", "تغيير كلمة المرور")),
						onClick: () => push("reset")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Two-factor authentication", "المصادقة الثنائية")),
						meta: t(L("Enabled via SMS", "مفعلة عبر الرسائل")),
						onClick: () => notify(L("Two-factor settings opened", "تم فتح إعدادات المصادقة"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-4",
							"aria-hidden": true
						}),
						title: t(L("Download my data", "تنزيل بياناتي")),
						onClick: () => notify(L("Export requested", "تم طلب التصدير"))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-muted-foreground",
					children: t(L("Rehlah stores clinical data in the Kingdom of Saudi Arabia in line with PDPL and MOH requirements.", "تخزن رحلة البيانات السريرية داخل المملكة العربية السعودية وفق متطلبات نظام حماية البيانات ووزارة الصحة."))
				}) })]
			});
			case "help": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Help & support", "المساعدة والدعم"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
						className: "size-4",
						"aria-hidden": true
					}),
					title: t(L("Chat with support", "الدردشة مع الدعم")),
					onClick: () => notify(L("Support chat opened", "تم فتح دردشة الدعم"))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
						className: "size-4",
						"aria-hidden": true
					}),
					title: t(L("Call the clinic", "الاتصال بالمركز")),
					meta: "+966 11 000 0000",
					onClick: () => notify(L("Calling clinic", "جارٍ الاتصال"))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-[13px] font-semibold",
					children: t(L("Frequently asked", "الأسئلة الشائعة"))
				}), [
					L("How do I reschedule a session?", "كيف أعيد جدولة الجلسة؟"),
					L("When are invoices issued?", "متى تصدر الفواتير؟"),
					L("How do I add a second child?", "كيف أضيف طفلاً آخر؟")
				].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "border-b border-border py-2.5 text-[13px] last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "min-h-11 cursor-pointer py-2 font-medium",
						children: t(q)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-1 text-muted-foreground",
						children: t(L("Open the relevant screen and use the primary action button; reception is notified automatically.", "افتح الشاشة المعنية واستخدم الزر الرئيسي؛ يتم إشعار الاستقبال تلقائياً."))
					})]
				}, i))] })]
			});
			case "deleteAccount": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
				title: L("Delete account", "حذف الحساب"),
				subtitle: L("This action is permanent", "هذا الإجراء نهائي"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						tint: "bg-tint-yellow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-muted-foreground",
							children: t(L("Clinical records are retained for the legally required period. Your portal access and personal profile will be removed.", "يتم الاحتفاظ بالسجلات السريرية للمدة النظامية. سيتم حذف وصولك للبوابة وملفك الشخصي."))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: L("Type DELETE to confirm", "اكتب DELETE للتأكيد"),
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "DELETE" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						className: "w-full",
						onClick: () => setSheet("confirmDelete"),
						children: t(L("Delete my account", "حذف حسابي"))
					})
				]
			});
			default: return null;
		}
	}
	const headerTitle = TABS.find((tb) => tb.id === cur.id)?.label ?? SCREEN_TITLES[cur.id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-tint-blue/60 px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-[420px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2.5rem] border-[10px] border-[oklch(0.28_0.01_229)] bg-background shadow-[var(--shadow-lifted)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between bg-surface px-6 pt-3 pb-1 text-[11px] font-semibold text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rehlah" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100%" })
						]
					}),
					!chromeless && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border/60 bg-surface px-4 pb-3",
						children: [
							isTab ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-2xl bg-tint-green text-sm font-bold text-[var(--primary-deep)] ring-1 ring-border",
								children: t(p.name).slice(0, 1)
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: pop,
								"aria-label": t(L("Back", "رجوع")),
								className: "grid size-10 place-items-center rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-x-0.5 hover:bg-muted active:scale-95 rtl:hover:translate-x-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-[18px] rotate-180 rtl:rotate-0",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("min-w-0", !isTab && "text-center"),
								children: isTab ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase",
									children: t(L("Guardian", "ولي الأمر"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[14px] leading-tight font-bold",
									children: t(p.name)
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[14px] leading-tight font-bold",
									children: t(headerTitle ?? L("Rehlah", "رحلة"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[11px] text-muted-foreground",
									children: t(p.name)
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => push("notifications"),
								"aria-label": t(L("Notifications", "الإشعارات")),
								className: "relative grid size-10 place-items-center rounded-2xl border border-border bg-surface transition-all duration-200 hover:bg-muted active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
									className: "size-[18px]",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute end-2.5 top-2.5 size-2 rounded-full bg-destructive ring-2 ring-surface" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: bodyRef,
						"data-screen": cur.id,
						className: cn("screen-in overflow-y-auto", chromeless ? "h-[700px] bg-surface" : "h-[620px] bg-tint-green/40 px-5 py-5"),
						children: chromeless ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {})
					}, cur.id + String(cur.arg)),
					!chromeless && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": t(L("App navigation", "تنقل التطبيق")),
						className: "glass-nav grid grid-cols-5 border-t border-border px-2 pt-2 pb-4",
						children: TABS.map((item) => {
							const Icon = item.icon;
							const active = cur.id === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => goTab(item.id),
								"aria-current": active ? "page" : void 0,
								className: cn("relative flex min-h-12 flex-col items-center gap-1 rounded-2xl py-1.5 text-[10px] font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none", active ? "text-primary" : "text-muted-foreground hover:text-foreground"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("grid size-9 place-items-center rounded-xl transition-all duration-300", active ? "-translate-y-0.5 bg-tint-green" : "bg-transparent"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											"aria-hidden": true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: t(item.label)
									}),
									active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 h-1 w-6 rounded-full bg-primary" })
								]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open: sheet === "confirmCancel",
						onClose: () => setSheet(null),
						title: L("Cancel this appointment?", "إلغاء هذا الموعد؟"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-[13px] text-muted-foreground",
							children: t(L("Cancelling within 24 hours may incur a fee as per clinic policy.", "الإلغاء خلال ٢٤ ساعة قد يترتب عليه رسوم حسب سياسة المركز."))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setSheet(null),
								children: t(L("Keep it", "الاحتفاظ"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "danger",
								onClick: () => {
									setSheet(null);
									notify(L("Appointment cancelled", "تم إلغاء الموعد"));
									goTab("appointments");
								},
								children: t(L("Confirm", "تأكيد"))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
						open: sheet === "confirmLogout",
						onClose: () => setSheet(null),
						title: L("Sign out?", "تسجيل الخروج؟"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setSheet(null),
								children: t(L("Stay signed in", "البقاء"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									setSheet(null);
									setSignedIn(false);
									reset("login");
								},
								children: t(L("Sign out", "تسجيل الخروج"))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open: sheet === "confirmDelete",
						onClose: () => setSheet(null),
						title: L("Delete account permanently?", "حذف الحساب نهائياً؟"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-[13px] text-muted-foreground",
							children: t(L("You will lose access to appointments, invoices and documents.", "ستفقد الوصول للمواعيد والفواتير والمستندات."))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setSheet(null),
								children: t(L("Keep account", "الاحتفاظ بالحساب"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "danger",
								onClick: () => {
									setSheet(null);
									setSignedIn(false);
									reset("welcome");
								},
								children: t(L("Delete", "حذف"))
							})]
						})]
					}),
					toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "status",
						"aria-live": "polite",
						className: "animate-in-soft absolute inset-x-6 bottom-24 z-30 rounded-2xl bg-foreground px-4 py-3 text-center text-[13px] font-medium text-background shadow-[var(--shadow-lifted)]",
						children: t(toast)
					})
				]
			})
		})
	});
}
/** Observes an element and flips to true once it scrolls into view. */
function useInView(threshold = .15) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		inView
	};
}
/** Wrapper that fades + rises its children once visible. */
function Reveal({ children, delay = 0, as: Tag = "div", className }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", inView && "reveal-in", className),
		children
	});
}
/** Counts up to `to` when scrolled into view. */
function Counter({ to, suffix = "", duration = 1600, className }) {
	const { ref, inView } = useInView(.4);
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setValue(to);
			return;
		}
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [value.toLocaleString("en-US"), suffix]
	});
}
/** Tracks pointer position over an element for cursor-follow effects. */
function usePointerSpot() {
	const ref = (0, import_react.useRef)(null);
	const [spot, setSpot] = (0, import_react.useState)(null);
	return {
		ref,
		spot,
		handlers: {
			onPointerMove: (e) => {
				const r = e.currentTarget.getBoundingClientRect();
				setSpot({
					x: e.clientX - r.left,
					y: e.clientY - r.top
				});
			},
			onPointerLeave: () => setSpot(null)
		}
	};
}
var PAGES = [
	{
		id: "home",
		label: L("Home", "الرئيسية")
	},
	{
		id: "services",
		label: L("Services", "الخدمات")
	},
	{
		id: "about",
		label: L("About", "من نحن")
	},
	{
		id: "pricing",
		label: L("Pricing", "الأسعار")
	},
	{
		id: "contact",
		label: L("Contact", "تواصل معنا")
	}
];
var SERVICE_ICONS = [
	Activity,
	HeartHandshake,
	MessageSquare,
	Brain,
	Stethoscope
];
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[var(--primary-deep)] uppercase",
		children
	});
}
function Section({ title, sub, eyebrow, children, tint }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn(tint && "bg-tint-green/50"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-4 py-20 sm:px-6 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 max-w-2xl",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: t(eyebrow) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-[2.6rem]",
						children: t(title)
					}),
					sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[17px] leading-relaxed text-muted-foreground",
						children: t(sub)
					})
				]
			}), children]
		})
	});
}
function SpotlightCard({ children, className, tint }) {
	const { ref, spot, handlers } = usePointerSpot();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		...handlers,
		className: cn("group relative", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			tint: tint ?? "none",
			className: "lift relative h-full overflow-hidden",
			children: [spot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -z-0 size-56 rounded-full opacity-60 blur-3xl",
				style: {
					left: spot.x - 112,
					top: spot.y - 112,
					background: "color-mix(in oklab, var(--primary) 24%, transparent)"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 h-full",
				children
			})]
		})
	});
}
/** Animated bar that fills once in view. */
function ProgressBar({ value, label, tone = "primary" }) {
	const { t } = useI18n();
	const { ref, inView } = useInView(.4);
	const bg = tone === "accent" ? "var(--accent)" : tone === "wellness" ? "var(--wellness)" : "var(--primary)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-muted-foreground",
				children: t(label)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-bold tabular-nums",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
					to: value,
					suffix: "%"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-border/70",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block h-full rounded-full transition-[width] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
				style: {
					width: inView ? `${value}%` : "0%",
					background: bg
				}
			})
		})]
	});
}
/** Frosted floating card used in the hero collage. */
function GlassCard({ className, style, children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("glass-nav animate-in-soft rounded-3xl border border-border/70 p-4 shadow-[0_28px_60px_-32px_rgba(48,50,51,0.45)]", className),
		style: {
			animationDelay: `${delay}ms`,
			...style
		},
		children
	});
}
function HeroVisual() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto my-14 w-full max-w-[500px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "animate-orb pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-2xl",
				style: { background: "radial-gradient(60% 60% at 30% 20%, color-mix(in oklab, var(--primary) 34%, transparent), transparent 70%), radial-gradient(55% 55% at 85% 75%, color-mix(in oklab, var(--wellness) 30%, transparent), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-float rounded-[2rem] border border-border bg-surface p-6 shadow-[0_50px_100px_-45px_rgba(48,50,51,0.55)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandSymbol, { className: "size-9" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-bold",
									children: t(L("Layan's journey", "رحلة ليان"))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: t(L("Speech & occupational therapy", "علاج النطق والوظيفي"))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ms-auto rounded-full bg-tint-green px-2.5 py-1 text-[11px] font-bold text-[var(--primary-deep)]",
								children: t(L("On track", "على المسار"))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
								value: 78,
								label: L("Communication goals", "أهداف التواصل")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
								value: 64,
								label: L("Fine motor skills", "المهارات الحركية الدقيقة"),
								tone: "wellness"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
								value: 91,
								label: L("Session attendance", "حضور الجلسات"),
								tone: "accent"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center",
						children: [
							{
								v: 24,
								k: L("Sessions", "جلسة")
							},
							{
								v: 6,
								k: L("Goals met", "أهداف محققة")
							},
							{
								v: 4,
								k: L("Reports", "تقارير")
							}
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-bold tracking-tight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: m.v })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[11px] text-muted-foreground",
							children: t(m.k)
						})] }, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				delay: 260,
				className: "absolute -top-12 -start-8 hidden w-[210px] sm:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center rounded-xl bg-tint-green text-[var(--primary-deep)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
							className: "size-4",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-semibold",
							children: t(L("Next session", "الجلسة القادمة"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] text-muted-foreground",
							children: t(L("Sun · 10:30 · Room 4", "الأحد · ١٠:٣٠ · غرفة ٤"))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				delay: 420,
				className: "absolute hidden w-[200px] lg:block",
				style: {
					top: "-3.5rem",
					insetInlineEnd: "-1.5rem"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center rounded-xl bg-tint-purple text-wellness",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
							className: "size-4",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-semibold",
							children: t(L("Progress report", "تقرير التقدم"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] text-muted-foreground",
							children: t(L("Ready to view", "جاهز للاطلاع"))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				delay: 560,
				className: "absolute -bottom-12 -start-6 hidden w-[230px] sm:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center rounded-xl bg-tint-yellow text-[color-mix(in_oklab,var(--accent)_70%,var(--foreground))]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "size-4",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-semibold",
							children: t(L("Goal achieved", "تم تحقيق هدف"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] text-muted-foreground",
							children: t(L("Two-word phrases", "جمل من كلمتين"))
						})]
					})]
				})
			})
		]
	});
}
function Hero({ onNav }) {
	const { t } = useI18n();
	const [y, setY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mesh-hero relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "animate-orb pointer-events-none absolute -top-44 -end-32 size-[36rem] rounded-full opacity-45 blur-3xl",
				style: { background: "color-mix(in oklab, var(--primary) 42%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "animate-orb pointer-events-none absolute -bottom-56 -start-28 size-[30rem] rounded-full opacity-35 blur-3xl",
				style: {
					background: "color-mix(in oklab, var(--accent) 48%, transparent)",
					animationDelay: "-6s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1200px] gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "copy-in",
					style: { transform: `translateY(${Math.min(y * .05, 36)}px)` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "size-3.5",
							"aria-hidden": true
						}), t(L("Paediatric rehabilitation, reimagined", "إعادة تأهيل الأطفال بمفهوم جديد"))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 text-[2.9rem] leading-[1.02] font-bold tracking-[-0.03em] text-balance sm:text-[4.1rem]",
							children: [
								t(L("Every child deserves a", "كل طفل يستحق")),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-clip-text text-transparent",
									style: { backgroundImage: "linear-gradient(100deg, var(--primary-deep), var(--wellness) 55%, color-mix(in oklab, var(--accent) 80%, var(--foreground)))" },
									children: t(L("confident journey", "رحلة واثقة"))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-[18px] leading-relaxed text-muted-foreground",
							children: t(L("Rehlah unites physical, occupational, speech, behavioural and psychological therapy in one connected care platform — for families, specialists and clinics.", "تجمع رحلة العلاج الطبيعي والوظيفي والنطق والسلوكي والنفسي في منصة رعاية واحدة متصلة للأسر والأخصائيين والمراكز."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "group shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--primary)_85%,transparent)] transition-transform active:scale-[0.98]",
								children: [t(L("Book an assessment", "احجز تقييماً")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "ms-2 size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180",
									"aria-hidden": true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "lg",
								onClick: () => onNav("services"),
								children: t(L("Explore services", "استكشف الخدمات"))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-3.5 text-primary",
										"aria-hidden": true
									}), t(L("MoH licensed", "مرخص من وزارة الصحة"))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
										className: "size-3.5 text-primary",
										"aria-hidden": true
									}), t(L("CBAHI aligned", "متوافق مع سباهي"))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "size-3.5 text-primary",
										"aria-hidden": true
									}), t(L("PDPL compliant", "متوافق مع حماية البيانات"))]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-10 grid grid-cols-3 gap-6 border-t border-border/80 pt-8",
							children: [
								{
									k: L("Families served", "أسرة"),
									v: 2400,
									s: "+"
								},
								{
									k: L("Specialists", "أخصائي"),
									v: 48,
									s: ""
								},
								{
									k: L("Satisfaction", "رضا"),
									v: 97,
									s: "%"
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-2xl font-bold tracking-tight sm:text-3xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.v,
									suffix: s.s
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "mt-1 text-xs text-muted-foreground",
								children: t(s.k)
							})] }, i))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})
				})]
			})
		]
	});
}
function CallbackCard() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "space-y-4 shadow-[0_40px_80px_-45px_rgba(48,50,51,0.45)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-semibold",
				children: t(L("Request a call back", "اطلب اتصالاً"))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: t(L("A care advisor replies within one business day.", "يرد مستشار الرعاية خلال يوم عمل واحد."))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: L("Guardian name", "اسم ولي الأمر"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: t(L("Full name", "الاسم الكامل")) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: L("Mobile", "الجوال"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "+966 5X XXX XXXX" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: L("Service needed", "الخدمة المطلوبة"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { options: SPECIALTIES })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				children: t(L("Send request", "إرسال الطلب"))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					className: "size-3.5 shrink-0 text-primary",
					"aria-hidden": true
				}), t(L("PDPL compliant · Your data stays private.", "متوافق مع نظام حماية البيانات · بياناتك محمية."))]
			})
		]
	});
}
function HomePage({ onNav }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onNav }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: L("The problem", "التحدي"),
			title: L("Therapy shouldn't be scattered across paper files", "لا ينبغي أن يكون العلاج مبعثراً في ملفات ورقية"),
			sub: L("Families lose track between clinics, notes and invoices — and progress becomes invisible.", "تفقد الأسر المتابعة بين المراكز والملاحظات والفواتير — فيصبح التقدم غير مرئي."),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 lg:grid-cols-3",
				children: [
					{
						i: ClipboardList,
						t: L("Disconnected records", "سجلات غير مترابطة"),
						d: L("Assessments, notes and home programmes live in different places.", "التقييمات والملاحظات والبرامج المنزلية في أماكن متفرقة.")
					},
					{
						i: ChartLine,
						t: L("Invisible progress", "تقدم غير مرئي"),
						d: L("Without shared measures, families can't tell what is improving.", "بدون مقاييس مشتركة لا تستطيع الأسر معرفة ما يتحسن.")
					},
					{
						i: MessageSquare,
						t: L("Slow communication", "تواصل بطيء"),
						d: L("Every question turns into a phone call and a waiting queue.", "كل سؤال يتحول إلى اتصال هاتفي وانتظار.")
					}
				].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "lift h-full space-y-3 border-dashed bg-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-2xl bg-muted text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.i, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[16px] font-semibold",
								children: t(f.t)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: t(f.d)
							})
						]
					})
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tint: true,
			eyebrow: L("The solution", "الحل"),
			title: L("One connected platform, from first call to final report", "منصة واحدة متصلة من أول اتصال إلى التقرير النهائي"),
			sub: L("Every appointment, note, report and invoice connected — so nothing is lost between visits.", "كل موعد وملاحظة وتقرير وفاتورة متصلة — حتى لا يضيع شيء بين الزيارات."),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						{
							i: Users,
							t: L("Family-first portal", "بوابة تركز على الأسرة"),
							d: L("Guardians see goals, session notes, home programmes and invoices in real time.", "يرى أولياء الأمور الأهداف وملاحظات الجلسات والبرامج المنزلية والفواتير لحظياً.")
						},
						{
							i: ChartLine,
							t: L("Measurable outcomes", "نتائج قابلة للقياس"),
							d: L("Standardised assessments and progress charts make improvement visible week by week.", "تقييمات معيارية ورسوم تقدم تجعل التحسن مرئياً أسبوعاً بأسبوع.")
						},
						{
							i: CalendarCheck,
							t: L("Effortless scheduling", "جدولة سهلة"),
							d: L("Book, reschedule and confirm sessions with reminders on every channel.", "احجز وأعد الجدولة وأكد الجلسات مع تذكيرات عبر كل القنوات.")
						},
						{
							i: ShieldCheck,
							t: L("Compliant by design", "امتثال بالتصميم"),
							d: L("MoH licensed, CBAHI aligned and PDPL compliant data handling across the platform.", "مرخص من وزارة الصحة ومتوافق مع سباهي ونظام حماية البيانات.")
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
							tint: "none",
							className: "h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.i, {
										className: "size-5",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-[16px] font-semibold",
									children: t(f.t)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t(f.d)
								})
							]
						})
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallbackCard, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: L("Our care", "رعايتنا"),
			title: L("Therapy services built around the child", "خدمات علاجية مصممة حول الطفل"),
			sub: L("Multi-disciplinary care under one roof, with measurable goals for every session.", "رعاية متعددة التخصصات تحت سقف واحد، بأهداف قابلة للقياس لكل جلسة."),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SPECIALTIES.map((s, i) => {
					const Icon = SERVICE_ICONS[i] ?? Stethoscope;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
							className: "h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)] transition-transform duration-300 group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-[16px] font-semibold",
									children: t(s)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t(L("Individual and group sessions led by licensed specialists with measurable goals.", "جلسات فردية وجماعية بإشراف أخصائيين مرخصين وبأهداف قابلة للقياس."))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-deep)]",
									children: [t(L("Learn more", "اعرف المزيد")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-3.5 rtl:rotate-180",
										"aria-hidden": true
									})]
								})
							]
						})
					}, i);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tint: true,
			eyebrow: L("The journey", "الرحلة"),
			title: L("Four steps from first call to visible progress", "أربع خطوات من أول اتصال إلى تقدم ملموس"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-x-10 top-[38px] hidden h-px lg:block",
					style: { background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 45%, transparent), transparent)" }
				}), [
					{
						s: L("Book an initial assessment", "احجز التقييم الأولي"),
						i: CalendarCheck
					},
					{
						s: L("Receive a personalised plan", "استلم خطة مخصصة"),
						i: ClipboardList
					},
					{
						s: L("Attend therapy sessions", "احضر الجلسات العلاجية"),
						i: HeartHandshake
					},
					{
						s: L("Track progress in the app", "تابع التقدم في التطبيق"),
						i: ChartLine
					}
				].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "lift relative h-full space-y-3 bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-2xl bg-tint-green text-[var(--primary-deep)] ring-4 ring-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.i, {
									className: "size-5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-bold text-primary",
								children: ["0", i + 1]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] font-semibold",
							children: t(step.s)
						})]
					})
				}, i))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: L("Results", "النتائج"),
			title: L("Progress you can measure, week after week", "تقدم يمكن قياسه أسبوعاً بعد أسبوع"),
			sub: L("Standardised outcome measures across every discipline, reported back to the family.", "مقاييس نتائج معيارية في كل تخصص، تُعرض للأسرة."),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-[0.95fr_1.05fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					tint: "green",
					className: "h-full space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
							value: 92,
							label: L("Plans reviewed on schedule", "خطط تُراجع في موعدها")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
							value: 86,
							label: L("Goals met within the cycle", "أهداف تتحقق ضمن الدورة"),
							tone: "wellness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
							value: 97,
							label: L("Guardian satisfaction", "رضا أولياء الأمور"),
							tone: "accent"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						{
							v: 2400,
							s: "+",
							k: L("Families served", "أسرة مخدومة")
						},
						{
							v: 96e3,
							s: "+",
							k: L("Sessions delivered", "جلسة مقدمة")
						},
						{
							v: 48,
							s: "",
							k: L("Licensed specialists", "أخصائي مرخص")
						},
						{
							v: 12,
							s: "",
							k: L("Years of experience", "سنة من الخبرة")
						}
					].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "lift h-full bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-bold tracking-tight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: n.v,
									suffix: n.s
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t(n.k)
							})]
						})
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tint: true,
			eyebrow: L("Trust", "الثقة"),
			title: L("Regulated, licensed and privacy-first", "منظم ومرخص وخصوصية أولاً"),
			sub: L("Care and data governance held to national and international standards.", "حوكمة الرعاية والبيانات وفق معايير وطنية ودولية."),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						i: ShieldCheck,
						t: L("MoH compliance", "امتثال وزارة الصحة"),
						d: L("Licensed paediatric rehabilitation facility.", "منشأة إعادة تأهيل أطفال مرخصة.")
					},
					{
						i: Award,
						t: L("CBAHI aligned", "متوافق مع سباهي"),
						d: L("Quality and patient-safety standards.", "معايير الجودة وسلامة المرضى.")
					},
					{
						i: Stethoscope,
						t: L("Licensed specialists", "أخصائيون مرخصون"),
						d: L("Every clinician verified and credentialed.", "كل أخصائي موثق ومعتمد.")
					},
					{
						i: CircleCheck,
						t: L("HIPAA & PDPL", "هيبا ونظام حماية البيانات"),
						d: L("Encrypted records with audited access.", "سجلات مشفرة مع تدقيق للوصول.")
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-2xl bg-surface text-[var(--primary-deep)] ring-1 ring-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-[15px] font-semibold",
								children: t(c.t)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: t(c.d)
							})
						]
					})
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: L("Families", "الأسر"),
			title: L("Trusted by families across the Kingdom", "ثقة الأسر في جميع أنحاء المملكة"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 lg:grid-cols-3",
				children: [
					L("Rehlah made therapy simple — we finally see the progress week by week.", "رحلة جعلت العلاج بسيطاً — أصبحنا نرى التقدم أسبوعاً بأسبوع."),
					L("The guardian portal keeps us involved in every goal and every session.", "بوابة ولي الأمر تبقينا مشاركين في كل هدف وكل جلسة."),
					L("Booking, invoices and reports in one place. It saved us so much time.", "الحجز والفواتير والتقارير في مكان واحد. وفّرت علينا وقتاً كبيراً.")
				].map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "lift h-full space-y-4 bg-surface",
						tint: i === 1 ? "green" : "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								className: "size-6 text-primary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] leading-relaxed",
								children: t(q)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-full bg-tint-green text-xs font-bold text-[var(--primary-deep)]",
									children: [
										"AS",
										"MK",
										"RH"
									][i]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t(L("Guardian, Riyadh", "ولي أمر، الرياض"))
								})]
							})
						]
					})
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1200px] px-4 pb-24 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mesh-hero lift relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "animate-orb pointer-events-none absolute -top-24 start-1/3 size-[24rem] rounded-full opacity-40 blur-3xl",
					style: { background: "color-mix(in oklab, var(--wellness) 35%, transparent)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandSymbol, { className: "mx-auto size-12" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-3xl font-bold tracking-tight text-balance sm:text-[2.75rem]",
							children: t(L("Start your child's journey today", "ابدأ رحلة طفلك اليوم"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-[16px] text-muted-foreground",
							children: t(L("Book an assessment and receive a personalised therapy plan within 48 hours.", "احجز تقييماً واستلم خطة علاجية مخصصة خلال ٤٨ ساعة."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								className: "transition-transform active:scale-[0.98]",
								children: t(L("Book an assessment", "احجز تقييماً"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "lg",
								onClick: () => onNav("contact"),
								children: t(L("Talk to us", "تحدث إلينا"))
							})]
						})
					]
				})]
			}) })
		})
	] });
}
function LandingWebsite() {
	const { t } = useI18n();
	const [page, setPage] = (0, import_react.useState)("home");
	const nav = (p) => {
		setPage(p);
		if (typeof window !== "undefined") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-surface/80 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => nav("home"),
						className: "flex min-w-0 items-center gap-2 text-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "h-9 w-auto" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": t(L("Site navigation", "تنقل الموقع")),
						className: "flex items-center gap-1 overflow-x-auto",
						children: [PAGES.map((pg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => nav(pg.id),
							"aria-current": page === pg.id ? "page" : void 0,
							className: cn("shrink-0 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors", page === pg.id ? "bg-tint-green text-[var(--primary-deep)]" : "text-muted-foreground hover:bg-tint-green/60 hover:text-foreground"),
							children: t(pg.label)
						}, pg.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "ms-2 hidden shrink-0 sm:inline-flex",
							children: t(L("Book now", "احجز الآن"))
						})]
					})]
				})
			}),
			page === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, { onNav: nav }),
			page === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: L("Services", "الخدمات"),
				title: L("Services & programmes", "الخدمات والبرامج"),
				sub: L("Session types, durations, settings and transparent per-session pricing.", "أنواع الجلسات والمدد والأماكن وأسعار واضحة لكل جلسة."),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 lg:grid-cols-2",
					children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[16px] font-semibold",
									children: t(s.name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t(spec(s.specialty))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 rounded-full bg-tint-green px-3 py-1 text-xs font-semibold text-[var(--primary-deep)]",
								children: [s.single, " SAR"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-sm",
							children: [
								{
									k: L("10 sessions", "١٠ جلسات"),
									v: s.pack10
								},
								{
									k: L("20 sessions", "٢٠ جلسة"),
									v: s.pack20
								},
								{
									k: L("Home visit", "زيارة منزلية"),
									v: s.home
								}
							].map((row, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted-foreground",
								children: t(row.k)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "font-semibold",
								children: [row.v, " SAR"]
							})] }, j))
						})] })
					}, i))
				})
			}),
			page === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: L("About", "عن رحلة"),
				title: L("Care that follows the child, not the clinic", "رعاية تتبع الطفل لا المركز"),
				sub: L("Our mission, values and the multi-disciplinary team behind every plan.", "رسالتنا وقيمنا والفريق متعدد التخصصات خلف كل خطة."),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 lg:grid-cols-3",
					children: [
						{
							t: L("Our mission", "رسالتنا"),
							d: L("To make world-class paediatric rehabilitation accessible, measurable and family-centred.", "جعل إعادة التأهيل العالمية للأطفال متاحة وقابلة للقياس ومتمحورة حول الأسرة.")
						},
						{
							t: L("Our approach", "منهجنا"),
							d: L("Evidence-based assessment, individualised goals and continuous progress tracking.", "تقييم قائم على الأدلة وأهداف فردية ومتابعة مستمرة للتقدم.")
						},
						{
							t: L("Our promise", "وعدنا"),
							d: L("Transparent pricing, licensed specialists and full data privacy for every family.", "أسعار شفافة وأخصائيون مرخصون وخصوصية كاملة للبيانات.")
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotlightCard, {
							tint: i === 1 ? "green" : "none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[16px] font-semibold",
								children: t(c.t)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: t(c.d)
							})]
						})
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-6 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-5 shrink-0 text-primary",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t(L("Licensed by the Ministry of Health · CBAHI aligned · PDPL compliant data handling.", "مرخص من وزارة الصحة · متوافق مع سباهي · معالجة بيانات وفق نظام حماية البيانات."))
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				tint: true,
				title: L("By the numbers", "بالأرقام"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							v: 2400,
							s: "+",
							k: L("Families served", "أسرة مخدومة")
						},
						{
							v: 48,
							s: "",
							k: L("Licensed specialists", "أخصائي مرخص")
						},
						{
							v: 96e3,
							s: "+",
							k: L("Sessions delivered", "جلسة مقدمة")
						},
						{
							v: 97,
							s: "%",
							k: L("Guardian satisfaction", "رضا أولياء الأمور")
						}
					].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "lift h-full bg-surface text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-bold tracking-tight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: n.v,
									suffix: n.s
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t(n.k)
							})]
						})
					}, i))
				})
			})] }),
			page === "pricing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: L("Pricing", "الأسعار"),
				title: L("Packages & pricing", "الباقات والأسعار"),
				sub: L("Transparent monthly and yearly journeys. Cancel or switch at any time.", "باقات شهرية وسنوية بأسعار واضحة. يمكن الإلغاء أو التغيير في أي وقت."),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 lg:grid-cols-3",
					children: plans.map((pl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							tint: i === 1 ? "green" : "none",
							className: "lift relative flex h-full flex-col gap-5",
							children: [
								i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute end-5 top-5 rounded-full bg-surface px-3 py-1 text-[11px] font-bold text-[var(--primary-deep)]",
									children: t(L("Most chosen", "الأكثر اختياراً"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold",
									children: t(pl.name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t(pl.desc)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-4xl font-bold tracking-tight",
									children: [
										pl.price,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-medium text-muted-foreground",
											children: ["SAR / ", t(pl.period)]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2.5 text-sm",
									children: pl.features.map((f, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "mt-0.5 size-4 shrink-0 text-primary",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(f) })]
									}, j))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: i === 1 ? "primary" : "outline",
									className: "mt-auto",
									children: t(L("Get started", "ابدأ الآن"))
								})
							]
						})
					}, i))
				})
			}),
			page === "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: L("Contact", "تواصل"),
				title: L("Contact us", "تواصل معنا"),
				sub: L("We reply within one business day.", "نرد خلال يوم عمل واحد."),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Full name", "الاسم الكامل"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Email", "البريد الإلكتروني"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "email" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Mobile", "الجوال"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: L("Message", "الرسالة"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: t(L("Send message", "إرسال")) })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": true
									}), t(L("King Abdulaziz Rd, Riyadh 12313, Saudi Arabia", "طريق الملك عبدالعزيز، الرياض ١٢٣١٣، السعودية"))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": true
									}), "+966 11 234 5678"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": true
									}), "care@rehlah.health"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-tint-green p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: t(L("Opening hours", "ساعات العمل"))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-muted-foreground",
										children: t(L("Sunday – Thursday · 08:00 – 20:00", "الأحد – الخميس · ٠٨:٠٠ – ٢٠:٠٠"))
									})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1200px] gap-8 px-4 py-14 sm:px-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "h-9 w-auto dark:invert" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: t(L("Connected paediatric rehabilitation for families and clinics.", "إعادة تأهيل الأطفال بشكل متصل للأسر والمراكز."))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": t(L("Footer navigation", "تنقل التذييل")),
							className: "flex flex-col gap-2 text-sm",
							children: PAGES.map((pg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => nav(pg.id),
								className: "text-start text-muted-foreground transition-colors hover:text-foreground",
								children: t(pg.label)
							}, pg.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: ["© 2026 Rehlah Health. ", t(L("All rights reserved.", "جميع الحقوق محفوظة."))]
						})
					]
				})
			})
		]
	});
}
var PLATFORMS = [
	{
		id: "mobile",
		label: L("Mobile App", "تطبيق الجوال"),
		icon: Smartphone
	},
	{
		id: "portal",
		label: L("Patient Portal", "بوابة المريض"),
		icon: Users
	},
	{
		id: "admin",
		label: L("Admin Console", "لوحة الإدارة"),
		icon: LayoutDashboard
	},
	{
		id: "landing",
		label: L("Landing Website", "الموقع التعريفي"),
		icon: Globe
	}
];
function HealthHub() {
	const { t, lang, setLang, dir } = useI18n();
	const [platform, setPlatform] = (0, import_react.useState)("mobile");
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = dir;
	}, [lang, dir]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir,
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandSymbol, { className: "size-10 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "truncate text-[15px] font-bold tracking-tight",
								children: t(L("Rehlah Health Hub", "مركز رحلة الصحي"))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: t(L("One connected rehabilitation ecosystem", "منظومة تأهيل متصلة واحدة"))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex shrink-0 items-center gap-1 rounded-xl border border-border p-1",
						children: ["en", "ar"].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(l),
							"aria-pressed": lang === l,
							className: cn("min-h-9 rounded-lg px-3 text-[13px] font-semibold transition-colors", lang === l ? "bg-tint-green text-[var(--primary-deep)]" : "text-muted-foreground hover:text-foreground"),
							children: l === "en" ? "EN" : "ع"
						}, l))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": t(L("Platform switcher", "مبدل المنصات")),
					className: "flex gap-1 overflow-x-auto rounded-2xl bg-muted p-1.5",
					children: PLATFORMS.map((p) => {
						const Icon = p.icon;
						const active = platform === p.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPlatform(p.id),
							"aria-current": active ? "page" : void 0,
							className: cn("flex min-h-11 flex-1 shrink-0 items-center justify-center gap-2 rounded-xl px-4 text-[13px] font-semibold whitespace-nowrap transition-all", active ? "bg-surface text-foreground shadow-[var(--shadow-soft)]" : "text-muted-foreground hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4 shrink-0",
								"aria-hidden": true
							}), t(p.label)]
						}, p.id);
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "animate-in-soft",
			children: [
				platform === "mobile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileApp, {}),
				platform === "portal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientPortal, {}),
				platform === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminConsole, {}),
				platform === "landing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingWebsite, {})
			]
		}, platform)]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthHub, {}) });
}
//#endregion
export { Index as component };
