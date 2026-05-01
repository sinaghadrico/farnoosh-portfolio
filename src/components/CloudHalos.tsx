type Halo = {
  className: string;
  size: number;
  opacity: number;
};

const halos: Halo[] = [
  {
    // Iris cloud — left, behind headline
    className:
      "left-[-6%] top-[8%] bg-[radial-gradient(closest-side,rgba(120,108,255,0.55),rgba(120,108,255,0)_70%)]",
    size: 520,
    opacity: 0.85,
  },
  {
    // Peach / coral cloud — bottom-left under copy
    className:
      "left-[8%] bottom-[-10%] bg-[radial-gradient(closest-side,rgba(255,170,140,0.5),rgba(255,170,140,0)_70%)]",
    size: 460,
    opacity: 0.7,
  },
  {
    // Sky cloud — middle, behind text gap
    className:
      "left-[34%] top-[35%] bg-[radial-gradient(closest-side,rgba(140,200,255,0.45),rgba(140,200,255,0)_70%)]",
    size: 380,
    opacity: 0.6,
  },
  {
    // Mint cloud — center bottom
    className:
      "left-[42%] bottom-[6%] bg-[radial-gradient(closest-side,rgba(140,230,200,0.45),rgba(140,230,200,0)_70%)]",
    size: 340,
    opacity: 0.6,
  },
  {
    // Pink cloud — far right behind portrait
    className:
      "right-[-4%] top-[40%] bg-[radial-gradient(closest-side,rgba(255,150,210,0.45),rgba(255,150,210,0)_70%)]",
    size: 420,
    opacity: 0.65,
  },
  {
    // Lavender cloud — top right corner
    className:
      "right-[2%] top-[-6%] bg-[radial-gradient(closest-side,rgba(170,150,255,0.55),rgba(170,150,255,0)_70%)]",
    size: 460,
    opacity: 0.75,
  },
  {
    // Apricot cloud — right under portrait
    className:
      "right-[6%] bottom-[-8%] bg-[radial-gradient(closest-side,rgba(255,190,120,0.5),rgba(255,190,120,0)_70%)]",
    size: 400,
    opacity: 0.65,
  },
  {
    // Aqua cloud — right middle accent
    className:
      "right-[18%] top-[18%] bg-[radial-gradient(closest-side,rgba(120,210,230,0.45),rgba(120,210,230,0)_70%)]",
    size: 320,
    opacity: 0.6,
  },
];

export function CloudHalos() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {halos.map((h, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${h.className}`}
          style={{ width: h.size, height: h.size, opacity: h.opacity }}
        />
      ))}
    </div>
  );
}
