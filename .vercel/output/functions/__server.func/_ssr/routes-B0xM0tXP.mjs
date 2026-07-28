import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { n as SplitReveal, t as SectionReveal } from "./SectionReveal-Dh2Gx0rf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, g as ArrowLeft, h as ArrowRight, i as MessageCircle, l as Github, m as ArrowUpRight, o as Mail, r as Phone, s as Linkedin } from "../_libs/lucide-react.mjs";
import { a as stats, i as skillCategories, r as marqueeSkills } from "./skills-B1VqC62l.mjs";
import { t as useHorizontalScrollRig } from "./useHorizontalScrollRig-BPmGxn71.mjs";
import { r as projects } from "./projects-Ux56nw6G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0xM0tXP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkHighlightScroll() {
	const rig = useHorizontalScrollRig(projects.length, { travelPerItem: 280 });
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative",
		style: { backgroundColor: "var(--ink)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: rig.wrapperRef,
			style: { height: rig.wrapperHeight },
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 flex h-screen flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-end justify-between px-6 pb-10 pt-24 lg:px-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow mb-4",
						style: { color: "var(--lime)" },
						children: ["Sélection — ", String(projects.length).padStart(2, "0")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-section",
						style: { color: "var(--paper)" },
						children: "Projets sélectionnés"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: rig.scrollPrev,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[color:var(--paper)] transition-colors hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]",
								"aria-label": "Défiler à gauche",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: rig.scrollNext,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[color:var(--paper)] transition-colors hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]",
								"aria-label": "Défiler à droite",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projets",
							className: "group hidden items-center gap-2 text-xs uppercase tracking-[0.2em] md:flex transition-colors hover:text-[color:var(--lime)]",
							style: {
								color: "var(--paper)",
								fontFamily: "var(--font-mono)"
							},
							children: ["Tout voir ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 16,
								strokeWidth: 1.5,
								className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-1 flex-col justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 right-0 top-0 h-px",
						style: { backgroundColor: "rgba(247,246,243,0.1)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full origin-left",
							style: {
								backgroundColor: "var(--lime)",
								scaleX: rig.progress
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						ref: rig.trackRef,
						className: rig.isPinned ? "flex items-center gap-6 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-16",
						style: rig.isPinned ? {
							x: rig.x,
							willChange: "transform"
						} : void 0,
						children: [projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projets/$slug",
							params: { slug: p.slug },
							className: "group relative block h-[52vh] w-[62vw] shrink-0 overflow-hidden md:w-[36vw] lg:w-[26vw]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.cover,
								alt: p.title,
								loading: "lazy",
								className: "bw-hover-ember h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 flex items-baseline justify-between p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-black tracking-tight",
									style: {
										color: "var(--paper)",
										fontFamily: "var(--font-display)"
									},
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									style: {
										color: "var(--lime)",
										fontFamily: "var(--font-mono)"
									},
									children: p.index
								})]
							})]
						}, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projets",
							className: "flex h-[52vh] w-[46vw] shrink-0 flex-col items-start justify-end gap-4 border border-white/15 p-6 md:w-[28vw] lg:w-[20vw]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 32,
								strokeWidth: 1.5,
								style: { color: "var(--lime)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl",
								style: {
									color: "var(--paper)",
									fontFamily: "var(--font-display)",
									fontWeight: 900
								},
								children: "Voir tous les projets →"
							})]
						})]
					})]
				})]
			})
		})
	});
}
var galleryItems = [];
var globalIndex = 0;
skillCategories.forEach((c) => {
	galleryItems.push({
		type: "header",
		cat: c.label,
		index: globalIndex++
	});
	c.items.forEach((label) => {
		galleryItems.push({
			type: "skill",
			cat: c.label,
			label,
			index: globalIndex++
		});
	});
});
function SkillsHighlightScroll() {
	const rig = useHorizontalScrollRig(galleryItems.length, { travelPerItem: 220 });
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "paper");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative",
		style: { backgroundColor: "var(--paper)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: rig.wrapperRef,
			style: { height: rig.wrapperHeight },
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 flex h-screen flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-end justify-between px-6 pb-8 pt-24 lg:px-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						style: { color: "var(--ember)" },
						children: "Boîte à outils"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-section",
						style: { color: "var(--ink)" },
						children: "Compétences"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: rig.scrollPrev,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-[color:var(--ink)] transition-colors hover:border-[color:var(--ember)] hover:bg-[color:var(--ember)] hover:text-[color:var(--paper)]",
								"aria-label": "Défiler à gauche",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: rig.scrollNext,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-[color:var(--ink)] transition-colors hover:border-[color:var(--ember)] hover:bg-[color:var(--ember)] hover:text-[color:var(--paper)]",
								"aria-label": "Défiler à droite",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							hash: "competences",
							className: "group hidden items-center gap-2 text-xs uppercase tracking-[0.2em] md:flex transition-colors hover:text-[color:var(--ember)]",
							style: {
								color: "var(--ink)",
								fontFamily: "var(--font-mono)"
							},
							children: ["Tout voir ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 16,
								strokeWidth: 1.5,
								className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-1 flex-col justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 right-0 top-0 h-px",
						style: { backgroundColor: "rgba(10,10,10,0.1)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full origin-left",
							style: {
								backgroundColor: "var(--ember)",
								scaleX: rig.progress
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						ref: rig.trackRef,
						className: rig.isPinned ? "flex items-center gap-3 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-16",
						style: rig.isPinned ? {
							x: rig.x,
							willChange: "transform"
						} : void 0,
						children: [galleryItems.map((it) => it.type === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex h-40 w-80 shrink-0 flex-col justify-end overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--lime)] hover:shadow-xl",
							style: {
								backgroundColor: "var(--ink)",
								borderColor: "transparent",
								color: "var(--paper)",
								padding: "1.25rem"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-5 top-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] uppercase tracking-[0.2em]",
										style: {
											color: "var(--lime)",
											fontFamily: "var(--font-mono)"
										},
										children: ["Section ", String(it.index + 1).padStart(2, "0")]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "z-10 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-3xl transition-all duration-500 group-hover:tracking-wider group-hover:text-[color:var(--lime)]",
										style: {
											fontFamily: "var(--font-display)",
											fontWeight: 900,
											letterSpacing: "-0.02em"
										},
										children: it.cat
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-[color:var(--lime)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" })
							]
						}, it.index) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex h-40 w-56 shrink-0 flex-col justify-between border border-ink/15 p-5 transition-all duration-300 hover:border-[color:var(--ember)] hover:bg-[color:var(--ember)] hover:-translate-y-1 hover:shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[color:var(--paper)] group-hover:opacity-90",
								style: {
									color: "var(--ember)",
									fontFamily: "var(--font-mono)",
									fontWeight: 600
								},
								children: it.cat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl transition-colors duration-300 group-hover:text-[color:var(--paper)]",
								style: {
									color: "var(--ink)",
									fontFamily: "var(--font-display)",
									fontWeight: 900,
									letterSpacing: "-0.02em"
								},
								children: it.label
							})]
						}, it.index)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							hash: "competences",
							className: "group flex h-40 w-56 shrink-0 flex-col justify-between border border-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
							style: { backgroundColor: "var(--ink)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45",
								style: { backgroundColor: "rgba(247,246,243,0.1)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 20,
									strokeWidth: 1.5,
									style: { color: "var(--ember)" }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg",
								style: {
									color: "var(--paper)",
									fontFamily: "var(--font-display)",
									fontWeight: 900
								},
								children: "Voir toutes les compétences"
							})]
						})]
					})]
				})]
			})
		})
	});
}
function SkillsMarquee() {
	const row = [...marqueeSkills, ...marqueeSkills];
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative overflow-hidden border-y border-white/10 py-10",
		style: { backgroundColor: "var(--ink)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track-left flex shrink-0 gap-12 whitespace-nowrap",
			children: row.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeItem, { label: s }, `a${i}`))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track-right mt-6 flex shrink-0 gap-12 whitespace-nowrap",
			children: [...row].reverse().map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeItem, {
				label: s,
				muted: true
			}, `b${i}`))
		})] })
	});
}
function MarqueeItem({ label, muted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-3 text-4xl transition-colors hover:text-[color:var(--ember)] md:text-6xl",
		style: {
			color: muted ? "rgba(247,246,243,0.35)" : "var(--paper)",
			fontFamily: "var(--font-display)",
			fontWeight: 900,
			letterSpacing: "-0.03em"
		},
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { color: "var(--lime)" },
			children: "·"
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		style: { backgroundColor: "var(--ink)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkHighlightScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsHighlightScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutPreview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative flex min-h-screen items-end overflow-hidden pt-20 pb-20 lg:pt-12 lg:pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute inset-0 grain",
				style: {
					y: bgY,
					scale: bgScale
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80",
					alt: "",
					"aria-hidden": true,
					className: "h-full w-full object-cover",
					style: { filter: "grayscale(1) contrast(1.2) brightness(0.3)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 w-full px-6 lg:px-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-hero max-w-6xl",
						style: { color: "var(--paper)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Kengbo Othnelio" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
								text: "Raphaëlo.",
								style: { color: "var(--paper)" }
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-10 border-l-2 pl-5",
						style: { borderColor: "var(--lime)" },
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .8,
							delay: .4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							className: "text-2xl md:text-3xl italic tracking-tight leading-snug",
							style: {
								color: "var(--paper)",
								fontFamily: "var(--font-display)",
								fontWeight: 400
							},
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .6,
								ease: "easeOut"
							},
							children: [
								"Développeur Web et Mobile",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									style: {
										color: "var(--ember)",
										fontWeight: 700
									},
									children: ["Full Stack", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										className: "absolute bottom-0 left-0 h-[2px] w-full origin-left",
										style: { backgroundColor: "var(--ember)" },
										initial: { scaleX: 0 },
										animate: { scaleX: 1 },
										transition: {
											duration: .6,
											delay: 1.2,
											ease: [
												.22,
												1,
												.36,
												1
											]
										}
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-2 text-xs md:text-sm font-medium tracking-[0.3em] uppercase",
							style: {
								color: "var(--lime)",
								fontFamily: "var(--font-mono)"
							},
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .5,
								delay: 1,
								ease: "easeOut"
							},
							children: "DigitalVision"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
						delay: .4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed md:text-xl",
							style: {
								color: "var(--paper)",
								opacity: .75
							},
							children: "Conçoit des expériences web et mobile sur-mesure pour des marques d'hôtellerie et de commerce à Lomé."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
						delay: .6,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
								to: "/projets",
								children: "Voir mes projets"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]",
								style: {
									color: "var(--paper)",
									fontFamily: "var(--font-mono)"
								},
								children: ["Me contacter", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 16,
									strokeWidth: 1.5,
									className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--paper)",
							opacity: .5,
							fontFamily: "var(--font-mono)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							size: 14,
							strokeWidth: 1.5
						}), " Lomé — Togo · 08°N"]
					})
				]
			})
		]
	});
}
function MagneticLink({ to, children }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		ref,
		onMouseMove: (e) => {
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left - r.width / 2) * .25;
			const y = (e.clientY - r.top - r.height / 2) * .25;
			el.style.transform = `translate(${x}px, ${y}px)`;
		},
		onMouseLeave: () => {
			if (ref.current) ref.current.style.transform = "translate(0,0)";
		},
		className: "magnetic-btn inline-flex items-center gap-3 border px-6 py-4 text-sm uppercase tracking-[0.2em]",
		style: {
			color: "var(--ink)",
			backgroundColor: "var(--lime)",
			borderColor: "var(--lime)",
			fontFamily: "var(--font-mono)"
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			size: 16,
			strokeWidth: 1.8
		})]
	});
}
function StatsStrip() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative border-y border-white/10 py-24",
		style: { backgroundColor: "var(--ink)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-12 px-6 md:grid-cols-3 lg:px-24",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-8xl md:text-9xl",
						style: {
							fontFamily: "var(--font-display)",
							fontWeight: 900,
							color: "var(--paper)",
							letterSpacing: "-0.05em",
							lineHeight: .85
						},
						children: [s.value, s.suffix]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--lime)",
							fontFamily: "var(--font-mono)"
						},
						children: s.label
					})]
				})
			}, i))
		})
	});
}
function AboutPreview() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "paper");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative py-32",
		style: {
			backgroundColor: "var(--paper)",
			color: "var(--ink)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/profil.jpeg",
						alt: "Portrait de Kengbo Othnelio Raphaëlo",
						className: "bw-image h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-6 -right-6 h-40 w-32 border-l-2 border-t-2",
						style: { borderColor: "var(--lime)" }
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs uppercase tracking-[0.2em]",
					style: {
						color: "var(--ink)",
						opacity: .5,
						fontFamily: "var(--font-mono)"
					},
					children: "Portrait de Kengbo Othnelio Raphaëlo"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						style: { color: "var(--ember)" },
						children: "À propos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-section mb-8",
						style: { color: "var(--ink)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Trois ans," }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "déjà prolifique." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-lg leading-relaxed",
						style: {
							color: "var(--ink)",
							opacity: .75
						},
						children: "Cofondateur de DigitalVision (Dvision), je traduis l'identité d'une marque en présence digitale entièrement sur-mesure — jamais un template. React, Supabase, Framer Motion : mes outils pour livrer, du concept au déploiement."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-10 inline-flex items-center gap-2 border-b pb-1 text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--ink)",
							borderColor: "var(--ink)",
							fontFamily: "var(--font-mono)"
						},
						children: ["Lire l'histoire complète ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							size: 16,
							strokeWidth: 1.5
						})]
					})
				]
			})]
		})
	});
}
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
export { Footer, Home as component };
