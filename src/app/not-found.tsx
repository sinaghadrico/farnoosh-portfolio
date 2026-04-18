import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[80vh] flex-col items-start justify-center pt-32">
      <p className="label mb-6">Error · 404</p>
      <h1 className="font-serif text-display-2xl text-balance md:max-w-[16ch]">
        That page doesn&rsquo;t exist —{" "}
        <span className="italic text-fg-muted">try the index instead.</span>
      </h1>
      <p className="mt-6 max-w-prose text-fg-muted">
        The link may be broken or the page may have been moved. Here are a few
        good places to start.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          Browse work
        </ButtonLink>
      </div>
    </section>
  );
}
