import Image from "next/image";
import { assets, type AssetKey } from "@/components/castbox/assets";
import { cn } from "@/lib/utils";

type Props = {
  name: AssetKey;
  className?: string;
  /** Passed through to next/image; defaults to a sensible full-width hint. */
  sizes?: string;
  priority?: boolean;
  /** For small slots (icons, avatars) — draws the placeholder without a label. */
  compact?: boolean;
};

/**
 * Renders a Figma-exported image, or a labelled placeholder at the correct
 * aspect ratio while the export is still missing. See assets.ts.
 */
export function Figure({ name, className, sizes, priority, compact }: Props) {
  const asset = assets[name];

  if (!asset.ready) {
    return (
      <div
        title={`${asset.file} (${asset.w}×${asset.h})`}
        className={cn(
          "flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-[#D0D5DD] bg-[#F2F4F7] text-center",
          compact ? "p-0" : "p-4",
          className
        )}
        style={{ aspectRatio: `${asset.w} / ${asset.h}` }}
      >
        {!compact && (
          <>
            <span className="font-mono text-[11px] font-medium text-[#667085]">
              {asset.file}
            </span>
            <span className="font-mono text-[10px] text-[#98A2B3]">
              {asset.w}×{asset.h}
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <Image
      src={`/projects/castbox/${asset.file}`}
      alt={asset.alt}
      width={asset.w}
      height={asset.h}
      sizes={sizes ?? "(min-width: 1180px) 1136px, 100vw"}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );
}
