const items = [
  "Cera de soja",
  "Aceites esenciales",
  "Proceso artesanal",
  "Ediciones limitadas",
  "Envíos a todo el país",
];

export function HomeMarquee() {
  const sequence = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-negro/5 bg-negro py-3.5 text-crema md:py-4"
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-12 px-5 md:gap-16">
        {sequence.map((text, index) => (
          <span
            key={`${text}-${index}`}
            className="shrink-0 text-[10px] font-medium uppercase tracking-[0.38em] text-crema/90"
          >
            {text}
            <span className="mx-6 text-rosa md:mx-8" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
