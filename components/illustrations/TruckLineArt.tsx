export default function TruckLineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 120 L50 80 L120 80 L160 50 L300 50 L340 80 L380 80 L380 140 L350 140 L350 150 L330 150 L330 140 L120 140 L120 150 L100 150 L100 140 L50 140 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path d="M100 80 L140 80 L180 55 L280 55" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="130" cy="150" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="310" cy="150" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M200 80 L200 120 L240 120 L240 80 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M250 90 L290 90 L290 110 L250 110 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
