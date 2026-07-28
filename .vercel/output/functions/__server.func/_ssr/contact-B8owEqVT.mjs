import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { i as MessageCircle, l as Github, m as ArrowUpRight, o as Mail, r as Phone, s as Linkedin } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./routes-DgKvGHkC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B8owEqVT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMAIL = "kengboothnelioraphaelo@gmail.com";
var PHONE = "+228 98 47 27 01 / +228 72 95 75 62";
var WHATSAPP = "https://wa.me/qr/R4TYNXD7NT2WP1";
var LINKEDIN = "https://www.linkedin.com/in/othnelio-kengbo?utm_source=share_via&utm_content=profile&utm_medium=member_android";
var GITHUB = "https://github.com/otinelio";
function Contact() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "paper");
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative min-h-screen py-24 lg:py-32",
		style: {
			backgroundColor: "var(--paper)",
			color: "var(--ink)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--ink)",
							fontFamily: "var(--font-mono)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "h-2.5 w-2.5 rounded-full",
							style: { backgroundColor: "var(--ember)" },
							animate: { opacity: [
								1,
								.4,
								1
							] },
							transition: {
								duration: 1.8,
								repeat: Infinity
							}
						}), "Disponible pour un nouveau projet"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mb-12",
						style: { color: "var(--ink)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block overflow-hidden align-baseline",
							style: { lineHeight: .95 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: { y: "110%" },
								animate: { y: "0%" },
								transition: {
									duration: .75,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "inline-block",
								children: [
									"Discu",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color: "var(--lime)" },
										children: "t"
									}),
									"ons."
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "flex max-w-xl flex-col gap-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderlineField, {
								label: "Votre nom",
								value: form.name,
								onChange: (v) => setForm({
									...form,
									name: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderlineField, {
								label: "Votre email",
								type: "email",
								value: form.email,
								onChange: (v) => setForm({
									...form,
									email: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderlineField, {
								label: "Votre message",
								multiline: true,
								value: form.message,
								onChange: (v) => setForm({
									...form,
									message: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "magnetic-btn inline-flex w-fit items-center gap-3 border border-[color:var(--ink)] px-6 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]",
								style: {
									fontFamily: "var(--font-mono)",
									color: "var(--ink)"
								},
								children: ["Envoyer le message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 16,
									strokeWidth: 1.5
								})]
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								className: "text-xs uppercase tracking-[0.18em]",
								style: {
									color: "var(--ember)",
									fontFamily: "var(--font-mono)"
								},
								children: "→ Merci. Message pris en compte (démo — brancher un endpoint)."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col gap-8 lg:col-span-5 lg:pl-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-ink/20 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						style: { color: "var(--ember)" },
						children: "Contact direct"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectLink, {
								icon: Mail,
								label: "Email",
								value: EMAIL,
								href: `mailto:${EMAIL}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectLink, {
								icon: Phone,
								label: "Téléphone",
								value: PHONE,
								href: "tel:+22898472701"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectLink, {
								icon: MessageCircle,
								label: "WhatsApp",
								value: "Cliquez ici",
								href: WHATSAPP
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectLink, {
								icon: Linkedin,
								label: "LinkedIn",
								value: "Othnelio Kengbo",
								href: LINKEDIN
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectLink, {
								icon: Github,
								label: "GitHub",
								value: "otinelio",
								href: GITHUB
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-ink/20 pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3",
							style: { color: "var(--ember)" },
							children: "Localisation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							style: {
								color: "var(--ink)",
								fontFamily: "var(--font-display)",
								fontWeight: 700
							},
							children: "Basé à Lomé, Togo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							style: {
								color: "var(--ink)",
								opacity: .65
							},
							children: "Disponible pour des projets à distance et sur place."
						})
					]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})] });
}
function UnderlineField({ label, value, onChange, type = "text", multiline = false }) {
	const commonProps = {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "w-full border-0 border-b border-ink/30 bg-transparent py-3 text-lg outline-none transition-colors focus:border-[color:var(--ember)]",
		style: {
			color: "var(--ink)",
			fontFamily: "var(--font-sans)"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			style: {
				color: "var(--ink)",
				opacity: .55
			},
			children: label
		}), multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: 4,
			...commonProps
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			...commonProps
		})]
	});
}
function DirectLink({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: "group flex items-center justify-between gap-6 border-b border-ink/15 pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				strokeWidth: 1.5,
				style: { color: "var(--ember)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-[0.18em]",
				style: {
					color: "var(--ink)",
					opacity: .55,
					fontFamily: "var(--font-mono)"
				},
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2 text-sm transition-colors group-hover:text-[color:var(--ember)]",
			style: {
				color: "var(--ink)",
				fontFamily: "var(--font-mono)"
			},
			children: [
				value,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					size: 14,
					strokeWidth: 1.5
				})
			]
		})]
	}) });
}
//#endregion
export { Contact as component };
