'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-slate-pale focus:text-navy-900 focus:font-semibold focus:rounded"
    >
      Sari la conținutul principal
    </a>
  );
}
