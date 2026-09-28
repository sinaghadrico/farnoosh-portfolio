export type Slice = { label: string; value: number; color: string };

const SIZE = 232;
const R = 92;
const STROKE = 48;
const C = 2 * Math.PI * R;

/**
 * Donut chart drawn as SVG arcs, so it stays crisp and responsive instead of
 * shipping a bitmap of the Figma chart. Slices run clockwise from 12 o'clock,
 * matching the Figma originals.
 */
export function DonutChart({
  slices,
  labelThreshold = 5,
}: {
  slices: Slice[];
  /** Slices at or below this percentage get no inline label. */
  labelThreshold?: number;
}) {
  const total = slices.reduce((sum, s) => sum + s.value, 0);
  let offset = 0;

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="h-auto w-full max-w-[200px] shrink-0 md:max-w-[232px]"
      role="img"
      aria-label={slices.map((s) => `${s.label}: ${s.value}%`).join(", ")}
    >
      <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
        {slices.map((s) => {
          const len = (s.value / total) * C;
          const dash = `${len} ${C - len}`;
          const el = (
            <circle
              key={s.label}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth={STROKE}
              strokeDasharray={dash}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </g>

      {(() => {
        let acc = 0;
        return slices.map((s) => {
          const mid = acc + s.value / 2;
          acc += s.value;
          if (s.value <= labelThreshold) return null;
          const angle = (mid / total) * 2 * Math.PI - Math.PI / 2;
          const lr = R;
          return (
            <text
              key={`${s.label}-label`}
              x={SIZE / 2 + lr * Math.cos(angle)}
              y={SIZE / 2 + lr * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-white font-dm text-[13px] font-bold"
            >
              {s.value}%
            </text>
          );
        });
      })()}
    </svg>
  );
}

export function DonutLegend({ slices }: { slices: Slice[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {slices.map((s) => (
        <li key={s.label} className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-[14px] shrink-0 rounded-full"
            style={{ backgroundColor: s.color }}
          />
          <span className="font-dm text-[14px] leading-[1.8] text-[#475467]">
            {s.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
