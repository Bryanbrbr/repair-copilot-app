import type { BlogSection } from "@/lib/blog";

interface BlogContentProps {
  sections: BlogSection[];
}

const calloutStyles = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    icon: "💡",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
    icon: "⚠️",
  },
  tip: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    icon: "✅",
  },
};

export default function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="prose-custom space-y-5">
      {sections.map((section, i) => {
        switch (section.type) {
          case "heading":
            return section.level === 2 ? (
              <h2
                key={i}
                className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mt-8 mb-3"
              >
                {section.content}
              </h2>
            ) : (
              <h3
                key={i}
                className="text-lg font-semibold text-[var(--color-text)] mt-6 mb-2"
              >
                {section.content}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={i}
                className="text-[var(--color-text-light)] leading-relaxed"
              >
                {section.content}
              </p>
            );

          case "list":
            return (
              <div key={i}>
                {section.content && (
                  <p className="text-[var(--color-text)] font-medium mb-3">
                    {section.content}
                  </p>
                )}
                <ul className="space-y-2 ml-1">
                  {section.items?.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 items-start text-[var(--color-text-light)] leading-relaxed"
                    >
                      <span className="text-[var(--color-primary)] flex-shrink-0 mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "callout": {
            const style = calloutStyles[section.variant || "info"];
            return (
              <div
                key={i}
                className={`${style.bg} border ${style.border} rounded-xl p-5 ${style.text}`}
              >
                <div className="flex gap-3 items-start">
                  <span className="text-lg flex-shrink-0">{style.icon}</span>
                  <p className="text-sm leading-relaxed">{section.content}</p>
                </div>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
