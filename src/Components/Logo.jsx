function LogoSVG({ scale = 1, className = "" }) {
  const baseWidth = 90 * scale;
  const baseHeight = 52 * scale;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${baseWidth} ${baseHeight * 0.8}`}
      width={baseWidth}
      height={baseHeight * 0.8}
    >
      <g transform={`scale(1, 0.8)`}>
        <text
          x="43%"
          y="70%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="system-ui, Arial, sans-serif"
          fontWeight="800"
          letterSpacing={-9 * scale}
          fontSize={baseHeight}
        >
          <tspan fill="#21f836">B</tspan>
          <tspan fill="#e82b71">X</tspan>
          <tspan fill="#f7d514">P</tspan>
        </text>
      </g>
    </svg>
  );
}

export default LogoSVG;
