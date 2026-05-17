import PostCard from "@/src/components/PostCard";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next"

import { getAllPosts } from "@/src/lib/post";

export default function Home() {

  const posts = getAllPosts();

  return (
    <section className="space-y-6">

      <div className="flex justify-center">
        <Image
          src="/evilman_logo.png"
          alt="Evilman & Company Logo"
          width={700}
          height={250}
          className="object-contain"
          priority
        />
      </div>

      <p className="text-xl text-zinc-400 max-w-2xl">
        Un espacio para textos, ideas, pensamientos
        y fragmentos.
      </p>
    
      <h2 className="text-3xl font-bold">
        Mis escritos
      </h2>
    
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </div>
    </section>

  );
}