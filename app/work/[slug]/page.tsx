import { redirect } from "next/navigation";

const VALID_SLUGS = [
  "lisnin",
  "sol-music-ltd",
  "wracket-music",
  "cube-music-agency",
  "lonely-listeners-club",
  "get-rekt-records",
  "high-cut-records",
  "oshawa-music-week",
  "canadian-music-week",
];

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function WorkSlugPage({ params }: Params) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) {
    redirect("/work");
  }
  redirect(`/work#${slug}`);
}
