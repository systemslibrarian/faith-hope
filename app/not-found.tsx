import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl text-parchment-50 sm:text-5xl">
          Page not found
        </h1>
        <div className="divider-gold mt-7" />
        <p className="mt-7 text-pretty text-lg leading-relaxed text-parchment-200/80">
          The page you were looking for isn&apos;t here. Try the home page or
          the project list.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
