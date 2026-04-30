"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmailButton({ email, iconOnly }: { email: string; iconOnly?: boolean }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Copy email address"
      className={iconOnly ? "text-fg-muted transition-colors duration-200 hover:text-fg" : "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors duration-300 hover:border-fg"}
    >
      {copied ? (
        iconOnly ? <Check size={14} /> : <><Check size={14} /> Copied</>
      ) : (
        iconOnly ? <Copy size={14} /> : <><Copy size={14} /> Copy Email address</>
      )}
    </button>
  );
}
