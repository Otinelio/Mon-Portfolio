import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as SplitReveal, t as SectionReveal } from "./SectionReveal-Dh2Gx0rf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, b as ArrowRight, f as Github, h as ExternalLink, n as ZoomIn, r as X, t as ZoomOut, v as ChevronLeft, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./routes-Cevld2U2.mjs";
import { t as useHorizontalScrollRig } from "./useHorizontalScrollRig-lcp0tcPt.mjs";
import { t as getNextProject } from "./projects-DzKDpMo3.mjs";
import { t as Route } from "./projets._slug-t6PHA6Kx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets._slug-BkNF91nI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PhoneMockup({ src, alt, className = "", children, heightCss }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative select-none shrink-0 ${className}`,
		style: {
			height: heightCss || "min(540px, 68vh)",
			aspectRatio: "9 / 19.5"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full w-full overflow-hidden rounded-[38px] md:rounded-[44px] p-[6px] md:p-[8px]",
			style: {
				backgroundColor: "#16161a",
				boxShadow: `
            0 25px 60px -10px rgba(0, 0, 0, 0.9),
            0 10px 25px -15px rgba(0, 0, 0, 0.7),
            inset 0 0 0 1px rgba(255, 255, 255, 0.22),
            inset 0 2px 4px rgba(255, 255, 255, 0.2),
            inset 0 -2px 4px rgba(0, 0, 0, 0.9)
          `
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -left-[3px] top-20 h-7 w-[3px] rounded-l-sm",
					style: { backgroundColor: "rgba(255, 255, 255, 0.25)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -left-[3px] top-32 h-7 w-[3px] rounded-l-sm",
					style: { backgroundColor: "rgba(255, 255, 255, 0.25)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-[3px] top-24 h-11 w-[3px] rounded-r-sm",
					style: { backgroundColor: "rgba(255, 255, 255, 0.25)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full w-full overflow-hidden rounded-[32px] md:rounded-[36px] bg-black",
					style: { boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.9)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-2.5",
							style: {
								width: "78px",
								height: "18px",
								backgroundColor: "#000000",
								borderRadius: "18px",
								boxShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2.5 w-2.5 rounded-full",
								style: {
									background: "radial-gradient(circle at 35% 35%, #252a48 0%, #0a0c16 70%, #000 100%)",
									boxShadow: "inset 0 0 1px rgba(255,255,255,0.4)"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-[#121218]" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt,
							loading: "lazy",
							className: "h-full w-full object-cover object-top"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 z-20",
							style: { background: "linear-gradient(130deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 32%, transparent 55%)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-2 left-1/2 -translate-x-1/2 z-30",
							style: {
								width: "95px",
								height: "4px",
								backgroundColor: "rgba(255, 255, 255, 0.45)",
								borderRadius: "4px"
							}
						}),
						children
					]
				})
			]
		})
	});
}
function ProcessFilmstrip({ images, title, layout = "desktop" }) {
	const isMobile = layout === "mobile";
	const rig = useHorizontalScrollRig(images.length, { travelPerItem: isMobile ? 320 : 420 });
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		style: { backgroundColor: "var(--ink)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: rig.wrapperRef,
			style: { height: rig.wrapperHeight },
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: rig.isPinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 px-6 lg:px-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionReveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							style: { color: "var(--lime)" },
							children: isMobile ? "Aperçu de l'Application Mobile" : "Process & Galeries"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						ref: rig.trackRef,
						className: rig.isPinned ? "flex items-center gap-8 px-6 lg:px-24" : "flex flex-col items-center gap-16 px-6 pb-16 pt-8 w-full",
						style: rig.isPinned ? {
							x: rig.x,
							willChange: "transform"
						} : void 0,
						children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative shrink-0 snap-center cursor-pointer transition-transform hover:scale-[1.02] active:scale-95",
							onClick: () => setSelectedIndex(i),
							children: isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMockup, {
									src,
									alt: `${title} — écran ${i + 1}`,
									heightCss: "min(520px, 66vh)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full border border-white/15 bg-black/80 px-3 py-1 backdrop-blur-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] tracking-[0.2em]",
										style: { fontFamily: "var(--font-mono)" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--lime)" },
											children: String(i + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												color: "var(--paper)",
												opacity: .5
											},
											children: [" / ", String(images.length).padStart(2, "0")]
										})]
									})
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative overflow-hidden ${rig.isPinned ? "h-[60vh] w-[80vw] md:w-[52vw] lg:w-[42vw]" : "h-[50vh] w-full"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: `${title} — image ${i + 1}`,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4 flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] tracking-[0.2em]",
										style: { fontFamily: "var(--font-mono)" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--lime)" },
											children: String(i + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												color: "var(--paper)",
												opacity: .6
											},
											children: [
												" ",
												"/ ",
												String(images.length).padStart(2, "0")
											]
										})]
									})
								})]
							})
						}, i))
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			images,
			initialIndex: selectedIndex,
			onClose: () => setSelectedIndex(null)
		}) })]
	});
}
function Lightbox({ images, initialIndex, onClose }) {
	const [index, setIndex] = (0, import_react.useState)(initialIndex);
	const [zoom, setZoom] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		setZoom(1);
	}, [index]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") setIndex((prev) => (prev + 1) % images.length);
			if (e.key === "ArrowLeft") setIndex((prev) => (prev - 1 + images.length) % images.length);
			if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + .5, 4));
			if (e.key === "-") setZoom((z) => Math.max(z - .5, 1));
		};
		window.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "auto";
		};
	}, [images.length, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute right-4 top-4 z-50 flex h-10 w-10 md:right-8 md:top-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[color:var(--ember)]",
				title: "Fermer (Échap)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 left-4 z-50 flex items-center gap-2 md:left-8 md:top-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							setZoom((z) => Math.min(z + .5, 4));
						},
						className: "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",
						title: "Zoom In (+)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							setZoom((z) => Math.max(z - .5, 1));
						},
						className: "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",
						title: "Zoom Out (-)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { size: 20 })
					}),
					zoom !== 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							setZoom(1);
						},
						className: "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[color:var(--lime)] text-[color:var(--ink)] font-bold transition-colors hover:opacity-80 text-xs",
						title: "Réinitialiser le zoom",
						children: "1x"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					setIndex((prev) => (prev - 1 + images.length) % images.length);
				},
				className: "absolute left-4 top-1/2 z-50 flex h-10 w-10 md:left-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 24 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					setIndex((prev) => (prev + 1) % images.length);
				},
				className: "absolute right-4 top-1/2 z-50 flex h-10 w-10 md:right-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 24 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[85vh] w-[100vw] md:w-[90vw] max-w-7xl p-4 md:p-12 overflow-hidden",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: zoom
					},
					exit: {
						opacity: 0,
						scale: 1.05
					},
					transition: {
						duration: .3,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: `h-full w-full ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}`,
					drag: zoom > 1,
					dragConstraints: {
						left: -500,
						right: 500,
						top: -500,
						bottom: 500
					},
					dragElastic: .1,
					onDoubleClick: () => setZoom((z) => z > 1 ? 1 : 2),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images[index],
						alt: `Image ${index + 1}`,
						className: "h-full w-full object-contain pointer-events-none"
					})
				}, `container-${index}`), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs tracking-[0.2em] text-white backdrop-blur-md",
					style: { fontFamily: "var(--font-mono)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--lime)" },
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "opacity-50",
						children: [" / ", String(images.length).padStart(2, "0")]
					})]
				})]
			})
		]
	});
}
function ProjectDetail() {
	const project = Route.useLoaderData();
	const next = getNextProject(project.slug);
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [project.slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		style: {
			backgroundColor: "var(--ink)",
			color: "var(--paper)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex h-[100vh] w-full items-end overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: project.cover,
								alt: "",
								"aria-hidden": true,
								className: "h-full w-full object-cover",
								style: { filter: project.layout === "mobile" ? "blur(24px) brightness(0.35) contrast(1.1)" : "grayscale(0.3) brightness(0.55)" },
								initial: { scale: 1.15 },
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
								style: { background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,1) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0 pointer-events-none" })
						]
					}),
					project.layout === "mobile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 md:block lg:right-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 50,
								scale: .95
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							transition: {
								duration: 1.2,
								delay: .3,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMockup, {
								src: project.cover,
								alt: project.title,
								heightCss: "min(480px, 58vh)"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 w-full px-6 pb-16 lg:px-24",
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
								className: "display-hero max-w-5xl",
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
				title: project.title,
				layout: project.layout
			}),
			(project.liveUrl || project.repoUrl) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-wrap gap-4 border-t border-white/10 px-6 py-16 lg:px-24",
				children: [
					project.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
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
					}),
					project.repoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: project.repoUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em]",
						style: {
							color: "var(--paper)",
							fontFamily: "var(--font-mono)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
								size: 14,
								strokeWidth: 1.5
							}),
							" ",
							project.backendRepoUrl ? "Code (Front)" : "Code source"
						]
					}),
					project.backendRepoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: project.backendRepoUrl,
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
						}), " Code (Back)"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 py-32 lg:px-24 bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-orange-500",
					children: "Projet suivant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projets/$slug",
					params: { slug: next.slug },
					className: "group flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-hero transition-colors group-hover:opacity-70",
						style: { color: "var(--ink)" },
						children: next.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { x: [
							0,
							15,
							0
						] },
						transition: {
							repeat: Infinity,
							duration: 1.5,
							ease: "easeInOut"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 48,
							strokeWidth: 1.5,
							className: "text-orange-500"
						})
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
