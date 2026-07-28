import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { n as SplitReveal, t as SectionReveal } from "./SectionReveal-Dh2Gx0rf.mjs";
import { g as ArrowLeft, h as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./routes-DgKvGHkC.mjs";
import { i as skillCategories, n as formations, t as experiences } from "./skills-B1VqC62l.mjs";
import { t as useHorizontalScrollRig } from "./useHorizontalScrollRig-BPmGxn71.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DZ_7igf4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResumeSection() {
	const sectionRef = (0, import_react.useRef)(null);
	useDeclareSectionTheme(sectionRef, "ink");
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start center", "end center"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "relative overflow-hidden py-32 lg:py-48",
		style: {
			backgroundColor: "var(--ink)",
			color: "var(--paper)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-12 left-6 top-12 w-px lg:left-1/2 lg:-translate-x-1/2",
					style: { backgroundColor: "color-mix(in oklab, var(--paper) 10%, transparent)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "w-full origin-top",
						style: {
							backgroundColor: "var(--lime)",
							height: "100%",
							scaleY: scrollYProgress
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-48",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-24 flex flex-col items-start lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-4",
								style: { color: "var(--lime)" },
								children: "Parcours professionnel"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-section",
								style: { color: "var(--paper)" },
								children: "Expériences"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-32 lg:gap-64",
						children: experiences.map((exp, i) => {
							const isEven = i % 2 === 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative flex w-full flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-start lg:items-center gap-12 lg:gap-32`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none mix-blend-overlay",
											style: {
												fontFamily: "var(--font-display)",
												fontWeight: 900,
												fontSize: "clamp(6rem, 15vw, 15rem)",
												letterSpacing: "-0.04em",
												color: "var(--paper)"
											},
											children: exp.company
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-0 top-6 h-4 w-4 -translate-x-[7.5px] rounded-full lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2",
											style: {
												backgroundColor: "var(--ink)",
												border: "3px solid var(--lime)"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-full lg:w-1/2 pl-8 lg:pl-0 flex ${isEven ? "lg:justify-end" : "lg:justify-start"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sticky top-1/2 text-5xl md:text-7xl",
												style: {
													fontFamily: "var(--font-display)",
													fontWeight: 900,
													color: "var(--paper)",
													letterSpacing: "-0.04em"
												},
												children: exp.period
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `relative z-10 flex w-full flex-col pl-8 lg:pl-0 lg:w-1/2 ${isEven ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-3xl lg:text-4xl",
													style: {
														fontFamily: "var(--font-display)",
														fontWeight: 900,
														color: "var(--lime)",
														letterSpacing: "-0.02em"
													},
													children: exp.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-2 text-xl font-medium",
													style: {
														color: "var(--paper)",
														opacity: .8
													},
													children: ["chez ", exp.company]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: `mt-8 flex flex-col gap-5 ${isEven ? "lg:items-start" : "lg:items-end"}`,
													children: exp.tasks.map((task, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: `group flex max-w-md items-start gap-4 text-lg transition-transform duration-500 hover:-translate-y-1 ${isEven ? "hover:translate-x-2" : "hover:-translate-x-2"}`,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 group-hover:bg-[color:var(--lime)] ${!isEven && "lg:hidden"}`,
																style: { backgroundColor: "color-mix(in oklab, var(--paper) 30%, transparent)" }
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																style: {
																	color: "var(--paper)",
																	opacity: .85
																},
																children: task
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `mt-2.5 hidden h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 group-hover:bg-[color:var(--lime)] ${!isEven && "lg:block"}`,
																style: { backgroundColor: "color-mix(in oklab, var(--paper) 30%, transparent)" }
															})
														]
													}, j))
												})
											]
										})
									]
								})
							}, i);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-24 flex flex-col items-start lg:items-center pl-8 lg:pl-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-4",
								style: { color: "var(--lime)" },
								children: "Parcours académique"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-section",
								style: { color: "var(--paper)" },
								children: "Formation"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-32 lg:gap-64",
						children: formations.map((form, i) => {
							const isEven = i % 2 === 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative flex w-full flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-start lg:items-center gap-12 lg:gap-32`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none mix-blend-overlay",
											style: {
												fontFamily: "var(--font-display)",
												fontWeight: 900,
												fontSize: "clamp(6rem, 15vw, 15rem)",
												letterSpacing: "-0.04em",
												color: "var(--paper)"
											},
											children: form.year
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-0 top-6 h-4 w-4 -translate-x-[7.5px] rounded-full lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2",
											style: {
												backgroundColor: "var(--ink)",
												border: "3px solid var(--lime)"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-full lg:w-1/2 pl-8 lg:pl-0 flex ${isEven ? "lg:justify-end" : "lg:justify-start"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sticky top-1/2 text-6xl md:text-8xl",
												style: {
													fontFamily: "var(--font-display)",
													fontWeight: 900,
													color: "var(--lime)",
													letterSpacing: "-0.04em"
												},
												children: form.year
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `relative z-10 flex w-full flex-col pl-8 lg:pl-0 lg:w-1/2 ${isEven ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-3xl lg:text-4xl leading-tight",
													style: {
														fontFamily: "var(--font-sans)",
														fontWeight: 800,
														color: "var(--paper)"
													},
													children: form.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 text-xl font-semibold",
													style: {
														color: "var(--lime)",
														opacity: .9
													},
													children: form.institution
												}),
												form.details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 max-w-md text-lg leading-relaxed",
													style: {
														color: "var(--paper)",
														opacity: .7
													},
													children: form.details
												})
											]
										})
									]
								})
							}, i);
						})
					})]
				})
			]
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
function SkillsGallery() {
	const rig = useHorizontalScrollRig(galleryItems.length, { travelPerItem: 220 });
	const sectionRef = (0, import_react.useRef)(null);
	useDeclareSectionTheme(sectionRef, "paper");
	useTransform(rig.progress, (v) => {
		return galleryItems[Math.min(galleryItems.length - 1, Math.floor(v * galleryItems.length))]?.cat ?? galleryItems[0].cat;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		id: "competences",
		className: "relative scroll-mt-20",
		style: {
			backgroundColor: "var(--paper)",
			color: "var(--ink)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: rig.wrapperRef,
			style: { height: rig.wrapperHeight },
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 flex h-screen flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-end justify-between px-6 pb-8 pt-24 lg:px-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							style: { color: "var(--ember)" },
							children: "Compétences"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-hero",
						style: { color: "var(--ink)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "Ce que je fais.",
							onMount: true
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
						delay: .3,
						className: "flex items-center gap-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-1 flex-col justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 right-0 top-0 h-px",
						style: { backgroundColor: "rgba(10,10,10,0.1)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full origin-left",
							style: {
								backgroundColor: "var(--lime)",
								scaleX: rig.progress
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						ref: rig.trackRef,
						className: rig.isPinned ? "flex items-center gap-3 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-16",
						style: rig.isPinned ? {
							x: rig.x,
							willChange: "transform"
						} : void 0,
						children: galleryItems.map((it) => it.type === "header" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryHeaderCapsule, {
							category: it.cat,
							index: it.index
						}, it.index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillCapsule, {
							label: it.label,
							category: it.cat,
							index: it.index
						}, it.index))
					})]
				})]
			})
		})
	});
}
function SkillCapsule({ label, category, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex h-40 w-56 shrink-0 flex-col justify-between border border-ink/15 p-5 transition-colors hover:border-[color:var(--lime)]",
		style: { backgroundColor: "var(--paper)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-[0.2em]",
				style: {
					color: "var(--ember)",
					fontFamily: "var(--font-mono)"
				},
				children: String(index + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] uppercase tracking-[0.2em]",
				style: {
					color: "var(--ink)",
					opacity: .5,
					fontFamily: "var(--font-mono)"
				},
				children: category
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "display-section",
			style: {
				color: "var(--ink)",
				fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)"
			},
			children: label
		})]
	});
}
function CategoryHeaderCapsule({ category, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex h-40 w-80 shrink-0 flex-col justify-end overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--lime)] hover:shadow-[0_20px_40px_-15px_rgba(212,255,63,0.3)]",
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
					className: "text-xs uppercase tracking-[0.2em]",
					style: {
						color: "var(--lime)",
						fontFamily: "var(--font-mono)"
					},
					children: ["Section ", String(index + 1).padStart(2, "0")]
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
					children: category
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-[color:var(--lime)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" })
		]
	});
}
function About() {
	const paperRef = (0, import_react.useRef)(null);
	useDeclareSectionTheme(paperRef, "paper");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: paperRef,
			className: "relative min-h-screen py-24 lg:py-32",
			style: {
				backgroundColor: "var(--paper)",
				color: "var(--ink)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/5] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/profil.jpeg",
							alt: "Portrait de Kengbo Othnelio Raphaëlo",
							className: "bw-image h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--ink)",
							opacity: .55,
							fontFamily: "var(--font-mono)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Portrait" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / 01" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							style: { color: "var(--ember)" },
							children: "À propos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-hero mb-10",
							style: { color: "var(--ink)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Kengbo" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Othnelio." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-xl leading-relaxed",
							style: {
								color: "var(--ink)",
								opacity: .85
							},
							children: "Développeur web & mobile full-stack, cofondateur de DigitalVision (Dvision) à Lomé. Maîtrise React, React Router, Tailwind, Framer Motion, Supabase."
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-base leading-relaxed",
								style: {
									color: "var(--ink)",
									opacity: .7
								},
								children: "Connu pour traduire l'identité d'une marque en une présence numérique entièrement sur-mesure plutôt qu'en template générique. Trois ans d'expérience, déjà prolifique — du concept au déploiement rapide sur des projets clients réels."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 grid grid-cols-2 gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "3",
										label: "Années"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "10+",
										label: "Projets livrés"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "100%",
										label: "Clients satisfaits"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "Lomé",
										label: "Basé à"
									})
								]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsGallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-ink/20 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-5xl",
			style: {
				fontFamily: "var(--font-display)",
				fontWeight: 900,
				color: "var(--ink)",
				letterSpacing: "-0.04em"
			},
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-xs uppercase tracking-[0.2em]",
			style: {
				color: "var(--ink)",
				opacity: .6,
				fontFamily: "var(--font-mono)"
			},
			children: label
		})]
	});
}
//#endregion
export { About as component };
