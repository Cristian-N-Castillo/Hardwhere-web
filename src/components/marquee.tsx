export function Marquee({ items }: { items: string[] }) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 text-base font-medium whitespace-nowrap sm:text-lg">{item}</span>
          <span aria-hidden className="text-xs opacity-60">✳</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-b border-cream/15 bg-ink py-3.5 text-cream">
      <div className="flex w-max animate-marquee">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
