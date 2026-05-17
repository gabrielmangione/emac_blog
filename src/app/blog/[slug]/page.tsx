import { getPostBySlug } from "@/src/lib/post";

type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({
  params,
}: BlogPostProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.frontmatter.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: post.contentHtml,
        }}
      />
    </article>
  );
}