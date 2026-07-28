import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { n as SplitReveal, t as SectionReveal } from "./SectionReveal-Dh2Gx0rf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ExternalLink, h as ArrowRight, l as Github, m as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./routes-CF4UgTdl.mjs";
import { t as getNextProject } from "./projects-Dk_kzS0t.mjs";
import { t as Route } from "./projets._slug-CHIMD6y_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets._slug-DcECkQ3M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProcessFilmstrip({ images, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-16",
		style: { backgroundColor: "var(--ink)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 px-6 lg:px-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					style: { color: "var(--lime)" },
					children: "Process"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
			delay: .3,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 lg:px-24",
				style: { cursor: "grab" },
				children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[60vh] w-[80vw] shrink-0 snap-center overflow-hidden md:w-[52vw] lg:w-[42vw]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: `${title} — image ${i + 1}`,
						loading: "lazy",
						className: "bw-image h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute bottom-4 left-4 text-xs",
						style: {
							color: "var(--paper)",
							fontFamily: "var(--font-mono)"
						},
						children: [
							String(i + 1).padStart(2, "0"),
							" / ",
							String(images.length).padStart(2, "0")
						]
					})]
				}, i))
			})
		})]
	});
}
function ProjectDetail() {
	const project = Route.useLoaderData();
	const next = getNextProject(project.slug);
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		style: {
			backgroundColor: "var(--ink)",
			color: "var(--paper)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[100vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: project.cover,
						alt: project.title,
						className: "bw-image h-full w-full object-cover",
						initial: { scale: 1.1 },
						animate: { scale: 1 },
						transition: {
							duration: 1.6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, rgba(10,10,10,0.35), rgba(10,10,10,0.9))" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 px-6 pb-16 lg:px-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow mb-6",
								style: { color: "var(--lime)" },
								children: [
									project.index,
									" — ",
									project.client,
									" · ",
									project.year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display-hero",
								style: { color: "var(--paper)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: project.title })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-2",
								children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1 text-[10px] uppercase tracking-[0.2em]",
									style: {
										backgroundColor: "var(--ember)",
										color: "var(--ink)",
										fontFamily: "var(--font-mono)"
									},
									children: t
								}, t))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:px-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
					className: "lg:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl text-2xl leading-snug md:text-3xl",
						style: {
							color: "var(--paper)",
							fontFamily: "var(--font-display)",
							fontWeight: 700
						},
						children: project.intro
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaBlock, {
							label: "Stack",
							items: project.stack
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaBlock, {
							label: "Client",
							items: [project.client]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaBlock, {
							label: "Année",
							items: [project.year]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-16 border-t border-white/10 px-6 py-24 lg:grid-cols-3 lg:px-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						eyebrow: "Problème",
						title: "Le point de départ.",
						body: project.problem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						eyebrow: "Solution",
						title: "La réponse.",
						body: project.solution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						eyebrow: "Résultat",
						title: "Ce qui est livré.",
						body: project.outcome
					})
				]
			}),
			(project.contribution || project.keyFigures || project.uniqueFeature) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-16 border-t border-white/10 px-6 py-24 lg:grid-cols-12 lg:px-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-12 lg:col-span-8",
					children: [project.uniqueFeature && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						eyebrow: "Ce qui rend le projet unique",
						title: "L'élément différenciateur.",
						body: project.uniqueFeature
					}), project.contribution && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						style: { color: "var(--ember)" },
						children: "Ma Contribution"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-3",
						children: project.contribution.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--lime)]",
								children: "→"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base leading-relaxed",
								style: {
									color: "var(--paper)",
									opacity: .8
								},
								children: c
							})]
						}, i))
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: project.keyFigures && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							style: { color: "var(--lime)" },
							children: "Chiffres Clés"
						}), project.keyFigures.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-white/10 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-4xl",
								style: {
									fontFamily: "var(--font-display)",
									fontWeight: 900
								},
								children: k.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em]",
								style: {
									color: "var(--paper)",
									opacity: .6,
									fontFamily: "var(--font-mono)"
								},
								children: k.label
							})]
						}, i))]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFilmstrip, {
				images: project.gallery,
				title: project.title
			}),
			(project.liveUrl || project.repoUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-wrap gap-4 border-t border-white/10 px-6 py-16 lg:px-24",
				children: [project.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.liveUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-2 border border-[color:var(--lime)] px-6 py-3 text-xs uppercase tracking-[0.2em]",
					style: {
						color: "var(--paper)",
						fontFamily: "var(--font-mono)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						size: 14,
						strokeWidth: 1.5
					}), " Voir le projet en ligne"]
				}), project.repoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.repoUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-2 border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em]",
					style: {
						color: "var(--paper)",
						fontFamily: "var(--font-mono)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
						size: 14,
						strokeWidth: 1.5
					}), " Code source"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-white/10 px-6 py-32 lg:px-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					style: { color: "var(--lime)" },
					children: "Projet suivant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projets/$slug",
					params: { slug: next.slug },
					className: "group flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-hero transition-colors group-hover:text-[color:var(--ember)]",
						style: { color: "var(--paper)" },
						children: next.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 48,
						strokeWidth: 1.5,
						className: "transition-transform group-hover:translate-x-2",
						style: { color: "var(--lime)" }
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function MetaBlock({ label, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-white/15 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-3",
			style: { color: "var(--lime)" },
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-1",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm",
				style: {
					color: "var(--paper)",
					opacity: .85
				},
				children: i
			}, i))
		})]
	});
}
function Block({ eyebrow, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionReveal, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-4",
			style: { color: "var(--ember)" },
			children: eyebrow
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-6 text-3xl",
			style: {
				fontFamily: "var(--font-display)",
				fontWeight: 900,
				letterSpacing: "-0.02em"
			},
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-base leading-relaxed",
			style: {
				color: "var(--paper)",
				opacity: .8
			},
			children: body
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			size: 20,
			strokeWidth: 1.5,
			className: "mt-6",
			style: { color: "var(--lime)" }
		})
	] });
}
//#endregion
export { ProjectDetail as component };
