import { Check } from "lucide-react";

export default function FeatureList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-ink">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid">
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
