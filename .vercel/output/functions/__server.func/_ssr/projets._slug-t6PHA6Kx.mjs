import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProject } from "./projects-DzKDpMo3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets._slug-t6PHA6Kx.js
var $$splitNotFoundComponentImporter = () => import("./projets._slug-c9u1cvs0.mjs");
var $$splitComponentImporter = () => import("./projets._slug-BkNF91nI.mjs");
var Route = createFileRoute("/projets/$slug")({
	loader: ({ params }) => {
		const p = getProject(params.slug);
		if (!p) throw notFound();
		return p;
	},
	head: ({ loaderData, params }) => ({
		meta: loaderData ? [
			{ title: `${loaderData.title} — Étude de cas · DigitalVision` },
			{
				name: "description",
				content: loaderData.intro
			},
			{
				property: "og:title",
				content: `${loaderData.title} — DigitalVision`
			},
			{
				property: "og:description",
				content: loaderData.intro
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: `/projets/${params.slug}`
			},
			{
				property: "og:image",
				content: loaderData.cover
			},
			{
				name: "twitter:image",
				content: loaderData.cover
			}
		] : [{ title: "Projet introuvable" }, {
			name: "robots",
			content: "noindex"
		}],
		links: [{
			rel: "canonical",
			href: `/projets/${params.slug}`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
