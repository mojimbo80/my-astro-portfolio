import { Astro } from './[tag].astro';


export async function getStaticPaths() {
const allPosts = await Astro.glob('');
console.log(allPosts, "allPosts");

return [
{ params: { tag: "astro" }, props: { posts: allPosts } },
{ params: { tag: "succès" }, props: { posts: allPosts } },
{ params: { tag: "communauté" }, props: { posts: allPosts } },
{ params: { tag: "blogging" }, props: { posts: allPosts } },
{ params: { tag: "obstacles" }, props: { posts: allPosts } },
{ params: { tag: "apprentissage en public" }, props: { posts: allPosts } }
];
}
