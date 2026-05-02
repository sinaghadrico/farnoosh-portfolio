type Halo = {
  position: string;
  gradient: string;
  size: number;
  opacity: number;
  drift: string;
  driftDelay: string;
  appearDelay: string;
};

const halos: Halo[] = [
  {
    // Iris cloud — left, behind headline
    position: "left-[-6%] top-[8%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(120,108,255,0.55),rgba(120,108,255,0)_70%)]",
    size: 520,
    opacity: 0.85,
    drift: "animate-drift-a",
    driftDelay: "0s",
    appearDelay: "0s",
  },
  {
    // Peach / coral cloud — bottom-left under copy
    position: "left-[8%] bottom-[-10%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(255,170,140,0.5),rgba(255,170,140,0)_70%)]",
    size: 460,
    opacity: 0.7,
    drift: "animate-drift-b",
    driftDelay: "-4s",
    appearDelay: "0.25s",
  },
  {
    // Sky cloud — middle, behind text gap
    position: "left-[34%] top-[35%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(140,200,255,0.45),rgba(140,200,255,0)_70%)]",
    size: 380,
    opacity: 0.6,
    drift: "animate-drift-c",
    driftDelay: "-8s",
    appearDelay: "0.5s",
  },
  {
    // Mint cloud — center bottom
    position: "left-[42%] bottom-[6%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(140,230,200,0.45),rgba(140,230,200,0)_70%)]",
    size: 340,
    opacity: 0.6,
    drift: "animate-drift-a",
    driftDelay: "-6s",
    appearDelay: "0.35s",
  },
  {
    // Pink cloud — far right behind portrait
    position: "right-[-4%] top-[40%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(255,150,210,0.45),rgba(255,150,210,0)_70%)]",
    size: 420,
    opacity: 0.65,
    drift: "animate-drift-b",
    driftDelay: "-2s",
    appearDelay: "0.6s",
  },
  {
    // Lavender cloud — top right corner
    position: "right-[2%] top-[-6%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(170,150,255,0.55),rgba(170,150,255,0)_70%)]",
    size: 460,
    opacity: 0.75,
    drift: "animate-drift-c",
    driftDelay: "-12s",
    appearDelay: "0.15s",
  },
  {
    // Apricot cloud — right under portrait
    position: "right-[6%] bottom-[-8%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(255,190,120,0.5),rgba(255,190,120,0)_70%)]",
    size: 400,
    opacity: 0.65,
    drift: "animate-drift-a",
    driftDelay: "-10s",
    appearDelay: "0.7s",
  },
  {
    // Aqua cloud — right middle accent
    position: "right-[18%] top-[18%]",
    gradient:
      "bg-[radial-gradient(closest-side,rgba(120,210,230,0.45),rgba(120,210,230,0)_70%)]",
    size: 320,
    opacity: 0.6,
    drift: "animate-drift-b",
    driftDelay: "-14s",
    appearDelay: "0.45s",
  },
];

export function CloudHalos() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:[&_*]:!animate-none"
    >
      {halos.map((h, i) => (
        <div
          key={i}
          className={`absolute animate-appear-soft ${h.position}`}
          style={{ animationDelay: h.appearDelay }}
        >
          <div className={h.drift} style={{ animationDelay: h.driftDelay }}>
            <div
              className={`rounded-full blur-3xl ${h.gradient}`}
              style={{ width: h.size, height: h.size, opacity: h.opacity }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
