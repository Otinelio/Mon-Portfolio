import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { n as SplitReveal } from "./SectionReveal-Dh2Gx0rf.mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as MessageCircle, l as Github, m as ArrowUpRight, o as Mail, r as Phone, s as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CF4UgTdl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-x1u7LGtX.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Kengbo Othnelio Raphaëlo — Développeur Web et Mobile Full Stack · DigitalVision" },
			{
				name: "description",
				content: "Portfolio du développeur full-stack Kengbo Othnelio Raphaëlo, cofondateur de DigitalVision à Lomé."
			},
			{
				property: "og:title",
				content: "Kengbo Othnelio Raphaëlo — DigitalVision"
			},
			{
				property: "og:description",
				content: "Expériences web et mobile sur-mesure pour l'hôtellerie, la restauration et le commerce."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var contactLinks = [
	{
		icon: Mail,
		label: "Email",
		value: "kengboothnelioraphaelo@gmail.com",
		href: "mailto:kengboothnelioraphaelo@gmail.com"
	},
	{
		icon: Phone,
		label: "Téléphone",
		value: "+228 98 47 27 01 / +228 72 95 75 62",
		href: "tel:+22898472701"
	},
	{
		icon: MessageCircle,
		label: "WhatsApp",
		value: "Cliquez ici",
		href: "https://wa.me/qr/R4TYNXD7NT2WP1"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "Othnelio Kengbo",
		href: "https://www.linkedin.com/in/othnelio-kengbo?utm_source=share_via&utm_content=profile&utm_medium=member_android"
	},
	{
		icon: Github,
		label: "GitHub",
		value: "otinelio",
		href: "https://github.com/otinelio"
	}
];
function FooterContactLink({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group flex items-center gap-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 15,
				strokeWidth: 1.5,
				style: {
					color: "var(--paper)",
					opacity: .4
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative text-xs tracking-[0.18em] uppercase",
				style: {
					color: "var(--paper)",
					opacity: .6,
					fontFamily: "var(--font-mono)"
				},
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative text-xs tracking-[0.12em] uppercase transition-colors group-hover:text-[color:var(--ember)]",
				style: {
					color: "var(--paper)",
					fontFamily: "var(--font-mono)"
				},
				children: [value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
					style: { backgroundColor: "var(--ember)" }
				})]
			})
		]
	});
}
function Footer() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	const linkRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		ref,
		className: "relative flex min-h-[90vh] flex-col justify-between overflow-hidden",
		style: { backgroundColor: "var(--ink)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col lg:flex-row w-full max-w-[1800px] mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col justify-center px-6 pt-32 pb-16 lg:pb-24 lg:px-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-hero max-w-4xl",
					style: { color: "var(--paper)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Construisons" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "quelque chose." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						ref: linkRef,
						onMouseMove: (e) => {
							const el = linkRef.current;
							if (!el) return;
							const r = el.getBoundingClientRect();
							const x = (e.clientX - r.left - r.width / 2) * .2;
							const y = (e.clientY - r.top - r.height / 2) * .2;
							el.style.transform = `translate(${x}px, ${y}px)`;
						},
						onMouseLeave: () => {
							if (linkRef.current) linkRef.current.style.transform = "translate(0,0)";
						},
						className: "group inline-flex items-center gap-3 border-b-2 pb-1 text-lg md:text-xl transition-colors",
						style: {
							color: "var(--lime)",
							borderColor: "var(--lime)",
							fontFamily: "var(--font-mono)",
							letterSpacing: "0.05em"
						},
						children: ["Discutons", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							size: 20,
							strokeWidth: 1.5,
							className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 flex-col justify-center border-t border-white/8 lg:border-t-0 lg:border-l px-6 py-16 lg:pl-12 lg:pr-6 xl:pl-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-2 w-full max-w-2xl mx-auto lg:mx-0",
					children: contactLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterContactLink, { ...link }, link.label))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track-left flex shrink-0 gap-16 whitespace-nowrap",
					children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-6 text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--paper)",
							opacity: .45,
							fontFamily: "var(--font-mono)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Disponible pour" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--ember)",
									opacity: 1
								},
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Web" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--ember)",
									opacity: 1
								},
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--ember)",
									opacity: 1
								},
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Branding" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--ember)",
									opacity: 1
								},
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Consulting" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "var(--ember)",
									opacity: 1
								},
								children: "·"
							})
						]
					}, i))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 px-6 pb-8 text-xs uppercase tracking-[0.2em] md:flex-row lg:px-24",
				style: {
					color: "var(--paper)",
					opacity: .35,
					fontFamily: "var(--font-mono)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" DigitalVision — Kengbo Othnelio Raphaëlo."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lomé, Togo" })]
			})]
		})]
	});
}
//#endregion
export { Route as n, Footer as t };
