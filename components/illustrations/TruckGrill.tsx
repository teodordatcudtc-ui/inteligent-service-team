export default function TruckGrill({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="20" y="20" width="110" height="50" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="35" y1="20" x2="35" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="20" x2="50" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="65" y1="20" x2="65" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="80" y1="20" x2="80" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="95" y1="20" x2="95" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="110" y1="20" x2="110" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="125" y1="20" x2="125" y2="70" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="45" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="75" cy="45" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="110" cy="45" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
