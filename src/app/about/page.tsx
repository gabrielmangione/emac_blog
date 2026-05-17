import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-5xl font-bold">
        About
      </h1>

      <Image
        src="/evilman_logo.png"
        alt="Evilman & Company Logo"
        width={250}
        height={250}
        className="rounded-2xl"
      />

      <p className="text-lg text-zinc-300 leading-relaxed">
        Evil Man & Company es un espacio para
        textos, ideas, música, pensamiento y
        fragmentos personales.
      </p>

      <p className="text-lg text-zinc-300 leading-relaxed">
        Me interesa explorar tecnología,
        creatividad, educación e inteligencia
        artificial.
      </p>
    </section>
  );
}