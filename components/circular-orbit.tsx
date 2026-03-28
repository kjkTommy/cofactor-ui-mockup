import type { CSSProperties } from "react";

type CircularOrbitItem = {
  id?: string;
  value: string;
  label: string;
};

type CircularOrbitProps = {
  items: CircularOrbitItem[];
  className?: string;
  startAngle?: number;
  sweepAngle?: number;
  centerX?: number;
  centerY?: number;
  radiusX?: number;
  radiusY?: number;
};

function getAngle(index: number, count: number, startAngle: number, sweepAngle: number) {
  if (count <= 1) {
    return startAngle;
  }

  if (Math.abs(sweepAngle) >= 360) {
    return startAngle + (sweepAngle / count) * index;
  }

  return startAngle + (sweepAngle / (count - 1)) * index;
}

export function CircularOrbit({
  items,
  className,
  startAngle = -92,
  sweepAngle = 360,
  centerX = 50,
  centerY = 50,
  radiusX = 31,
  radiusY = 36,
}: CircularOrbitProps) {
  const orbitClassName = className ? `circular-orbit ${className}` : "circular-orbit";
  const orbitVars = {
    "--orbit-center-x": `${centerX}%`,
    "--orbit-center-y": `${centerY}%`,
    "--orbit-radius-x": `${radiusX}%`,
    "--orbit-radius-y": `${radiusY}%`,
  } as CSSProperties;

  return (
    <div className={orbitClassName} style={orbitVars}>
      <div className="circular-orbit__track" aria-hidden="true" />
      {items.map((item, index) => {
        const angle = getAngle(index, items.length, startAngle, sweepAngle);
        const radians = (angle * Math.PI) / 180;
        const cosine = Math.cos(radians);
        const x = centerX + Math.cos(radians) * radiusX;
        const y = centerY + Math.sin(radians) * radiusY;
        const sideClassName =
          Math.abs(cosine) < 0.18
            ? "circular-orbit__item--center"
            : cosine < 0
              ? "circular-orbit__item--left"
              : "circular-orbit__item--right";

        return (
          <article
            key={item.id ?? `${item.value}-${item.label}`}
            className={`circular-orbit__item ${sideClassName}`}
            style={
              {
                "--orbit-x": `${x}%`,
                "--orbit-y": `${y}%`,
              } as CSSProperties
            }
          >
            <span className="circular-orbit__value">{item.value}</span>
            <p className="circular-orbit__label">{item.label}</p>
          </article>
        );
      })}
    </div>
  );
}
