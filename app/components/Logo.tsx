import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  const textColor = light ? "text-[#f8f5ef]" : "text-navy";
  const lineColor = light ? "bg-champagne" : "bg-champagne";

  return (
    <Link href="/" className="group inline-flex flex-col items-center leading-none">
      <span
        className={`font-serif text-2xl tracking-[0.15em] ${textColor} sm:text-3xl`}
      >
        S &amp; V
      </span>
      <span className="mt-1.5 flex items-center gap-2">
        <span className={`h-px w-4 ${lineColor}`} />
        <span className="h-1 w-1 rotate-45 bg-champagne" />
        <span className={`h-px w-4 ${lineColor}`} />
      </span>
      <span
        className={`mt-1.5 text-[0.6rem] font-light uppercase tracking-[0.45em] ${textColor}`}
      >
        Events
      </span>
    </Link>
  );
}
