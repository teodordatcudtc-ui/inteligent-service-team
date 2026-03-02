export default function WrenchesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M25 45 L45 25 L55 35 L35 55 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 25 L45 15 L55 25 L45 35 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 65 L25 55 L35 65 L25 75 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
