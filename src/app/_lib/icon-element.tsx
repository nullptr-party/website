const bg = '#232323';
const accent = '#FFD700';
const grid = '#3A3A3A';
const frame = 'rgba(255, 255, 255, 0.1)';
const text = '#FFFFF0';

export function iconElement(s: number) {
  const r = s / 32;

  const margin = Math.round(4 * r);
  const cs = Math.round(3 * r);
  const borderInset = Math.round(6 * r);

  // Empty set symbol: circle + diagonal
  const circleSize = Math.round(16 * r);
  const stroke = Math.max(1, Math.round(1.5 * r));

  return (
    <div
      style={{
        width: s,
        height: s,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((f) => (
        <div
          key={`v${f}`}
          style={{
            position: 'absolute',
            left: Math.round(s * f),
            top: 0,
            width: 1,
            height: s,
            background: grid,
            opacity: 0.5,
          }}
        />
      ))}
      {[0.25, 0.5, 0.75].map((f) => (
        <div
          key={`h${f}`}
          style={{
            position: 'absolute',
            top: Math.round(s * f),
            left: 0,
            width: s,
            height: 1,
            background: grid,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Inner frame border */}
      <div
        style={{
          position: 'absolute',
          top: borderInset,
          left: borderInset,
          right: borderInset,
          bottom: borderInset,
          border: `${Math.max(1, Math.round(r))}px solid ${frame}`,
          display: 'flex',
        }}
      />

      {/* Corner squares */}
      <div style={{ position: 'absolute', top: margin, left: margin, width: cs, height: cs, background: accent }} />
      <div style={{ position: 'absolute', top: margin, right: margin, width: cs, height: cs, background: accent }} />
      <div style={{ position: 'absolute', bottom: margin, left: margin, width: cs, height: cs, background: accent }} />
      <div style={{ position: 'absolute', bottom: margin, right: margin, width: cs, height: cs, background: accent }} />

      {/* Empty set ∅ — circle */}
      <div
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: '50%',
          border: `${stroke}px solid ${text}`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Diagonal slash */}
        <div
          style={{
            position: 'absolute',
            width: stroke,
            height: Math.round(circleSize * 1.3),
            background: text,
            transform: 'rotate(45deg)',
          }}
        />
      </div>
    </div>
  );
}
