export default function TrailerLineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 70 L20 40 L180 40 L180 70 L160 70 L160 80 L140 80 L140 70 L40 70 L40 80 L20 80 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path d="M40 45 L80 45 L80 65 L40 65 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M90 45 L130 45 L130 65 L90 65 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M140 45 L160 45 L160 65 L140 65 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
