import { Linkedin, Dribbble, FileText, Globe } from "lucide-react";

type Props = {
  label: string;
  size?: number;
  className?: string;
};

function BehanceGlyph({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M7.4 6.5c1.5 0 2.6.3 3.4 1 .8.6 1.2 1.6 1.2 2.8 0 .7-.2 1.3-.5 1.8-.3.5-.8.9-1.5 1.2.9.3 1.6.7 2 1.3.5.6.7 1.4.7 2.3 0 1.4-.5 2.5-1.4 3.2-.9.7-2.2 1-3.9 1H1V6.5h6.4zm-.4 5.6c.7 0 1.2-.1 1.6-.4.4-.3.6-.8.6-1.4 0-.4-.1-.7-.2-.9-.2-.2-.4-.4-.6-.5-.3-.1-.6-.2-.9-.2H3.9v3.4h3.1zm.2 5.7c.4 0 .8-.1 1.1-.2.3-.1.6-.3.8-.5.2-.2.3-.6.3-1 0-.7-.2-1.2-.6-1.6-.4-.3-1-.5-1.7-.5H3.9v3.8h3.3zm10.7-9.6c1.1 0 2 .2 2.7.6.7.4 1.3.9 1.7 1.6.4.7.7 1.4.8 2.3.1.4.1 1 .1 1.7h-7c0 .9.4 1.6.9 2 .5.4 1.1.6 1.9.6.6 0 1.1-.1 1.5-.4.4-.3.7-.6.8-.9h2.6c-.4 1.3-1 2.2-1.9 2.8-.9.6-2 .9-3.3.9-.9 0-1.7-.1-2.4-.4-.7-.3-1.3-.7-1.8-1.2-.5-.5-.9-1.2-1.1-1.9-.3-.7-.4-1.5-.4-2.4 0-.8.1-1.6.4-2.3.3-.7.7-1.4 1.2-1.9.5-.5 1.1-1 1.8-1.3.7-.3 1.5-.4 2.4-.4zm.1 2.3c-.6 0-1.2.2-1.6.6-.4.4-.7.9-.7 1.5h4.5c-.1-.7-.3-1.2-.7-1.6-.4-.3-.9-.5-1.5-.5zM21 6.7v1.5h-5.7V6.7H21z" />
    </svg>
  );
}

function ReadCvGlyph({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function SocialIcon({ label, size = 14, className }: Props) {
  const key = label.toLowerCase();
  if (key.includes("linkedin"))
    return <Linkedin size={size} className={className} aria-hidden />;
  if (key.includes("dribbble"))
    return <Dribbble size={size} className={className} aria-hidden />;
  if (key.includes("behance"))
    return <BehanceGlyph size={size} className={className} />;
  if (key.includes("read"))
    return <ReadCvGlyph size={size} className={className} />;
  if (key.includes("twitter") || key.includes("x.com"))
    return <Globe size={size} className={className} aria-hidden />;
  return <FileText size={size} className={className} aria-hidden />;
}
