import { siteConfig, type SocialPlatform } from "@/data/siteConfig";

const platforms: { key: SocialPlatform; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "linkedin", label: "LinkedIn" },
];

export function SocialChips() {
  return (
    <ul className="flex flex-wrap gap-3">
      {platforms.map(({ key, label }) => {
        const url = siteConfig.social[key];
        return (
          <li key={key}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-charcoal"
              >
                {label}
              </a>
            ) : (
              <span
                aria-disabled="true"
                title={`${label} coming soon`}
                className="inline-block cursor-not-allowed rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-white/35"
              >
                {label}
                <span className="sr-only"> (coming soon)</span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}