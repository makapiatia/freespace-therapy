export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 text-center dark:bg-black">
      <blockquote className="max-w-2xl font-[family-name:var(--font-cooper-hewitt)] text-2xl leading-relaxed text-zinc-900 sm:text-3xl dark:text-zinc-50">
        &ldquo;Not everything that is faced can be changed, but nothing can be
        changed until it is faced.&rdquo;
      </blockquote>
      <cite className="mt-6 block font-[family-name:var(--font-cooper-hewitt)] text-lg text-zinc-500 not-italic dark:text-zinc-400">
        ― James Baldwin
      </cite>
    </div>
  );
}
