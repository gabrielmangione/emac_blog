import Link from "next/link";

type PostCardProps = {
  title: string;
  description: string;
  slug: string;
};

export default function PostCard({
  title,
  description,
  slug,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">
        <h2 className="text-2xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-zinc-400">
          {description}
        </p>
      </article>
    </Link>
  );
}