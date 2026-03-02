export default function VanLineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 90 L30 50 L80 50 L110 35 L170 35 L200 50 L200 90 L170 90 L170 100 L150 100 L150 90 L80 90 L80 100 L60 100 L60 90 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="90" cy="100" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="170" cy="100" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M90 50 L90 75 L120 75 L120 50 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M130 60 L160 60 L160 80 L130 80 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
