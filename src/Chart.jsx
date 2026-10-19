import { useMemo, useRef, useState } from 'react'
import raw from './grace_series.json'

const W = 1000
const H = 340
const M = { top: 20, right: 24, bottom: 36, left: 52 }
const Y_MIN = -55
const Y_MAX = 25

const toYear = (d) => {
  const [y, m] = d.split('-').map(Number)
  return y + (m - 0.5) / 12
}

export default function GraceChart() {
  const data = useMemo(() => raw.map((r) => ({ ...r, t: toYear(r.d) })), [])
  const t0 = 2002
  const t1 = 2026.5
  const x = (t) => M.left + ((t - t0) / (t1 - t0)) * (W - M.left - M.right)
  const y = (v) => M.top + ((Y_MAX - v) / (Y_MAX - Y_MIN)) * (H - M.top - M.bottom)

  // split into continuous segments (break where a gap is longer than 3 months)
  const segments = useMemo(() => {
    const segs = []
    let cur = []
    data.forEach((p, i) => {
      if (i > 0 && p.t - data[i - 1].t > 0.26) {
        segs.push(cur)
        cur = []
      }
      cur.push(p)
    })
    segs.push(cur)
    return segs
  }, [data])

  const [idx, setIdx] = useState(data.length - 1)
  const svgRef = useRef(null)

  const onMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    const t = t0 + ((px - M.left) / (W - M.left - M.right)) * (t1 - t0)
    let best = 0
    let bd = Infinity
    data.forEach((p, i) => {
      const d = Math.abs(p.t - t)
      if (d < bd) {
        bd = d
        best = i
      }
    })
    setIdx(best)
  }
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setIdx((i) => Math.max(0, i - 1))
    if (e.key === 'ArrowRight') setIdx((i) => Math.min(data.length - 1, i + 1))
  }

  const p = data[idx]
  const month = new Date(p.d + '-15').toLocaleString('en-GB', { month: 'short', year: 'numeric' })
  const years = [2002, 2006, 2010, 2014, 2018, 2022, 2026]
  const yTicks = [20, 0, -20, -40]
  const gapStart = 2017.5
  const gapEnd = 2018.45

  return (
    <figure className="chart">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Line chart of water-storage change in the Upper Indus Basin from GRACE and GRACE-FO, 2002 to 2026. Use the left and right arrow keys to read monthly values."
        tabIndex={0}
        onPointerMove={onMove}
        onKeyDown={onKey}
      >
        <rect x={x(gapStart)} y={M.top} width={x(gapEnd) - x(gapStart)} height={H - M.top - M.bottom} className="gap" />
        <text x={(x(gapStart) + x(gapEnd)) / 2} y={M.top + 14} className="gap-label" textAnchor="middle">
          mission gap
        </text>
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={M.left} x2={W - M.right} y1={y(v)} y2={y(v)} className={v === 0 ? 'zero' : 'grid'} />
            <text x={M.left - 10} y={y(v) + 4} textAnchor="end" className="tick">
              {v > 0 ? `+${v}` : v}
            </text>
          </g>
        ))}
        {years.map((yr) => (
          <text key={yr} x={x(yr)} y={H - 10} textAnchor="middle" className="tick">
            {yr}
          </text>
        ))}
        {segments.map((s, i) => (
          <g key={i}>
            <path
              className="band"
              d={
                s.map((q, j) => `${j ? 'L' : 'M'}${x(q.t)},${y(q.hi)}`).join('') +
                [...s].reverse().map((q) => `L${x(q.t)},${y(q.lo)}`).join('') +
                'Z'
              }
            />
            <path className="line" d={s.map((q, j) => `${j ? 'L' : 'M'}${x(q.t)},${y(q.m)}`).join('')} />
          </g>
        ))}
        <line x1={x(p.t)} x2={x(p.t)} y1={M.top} y2={H - M.bottom} className="cursor" />
        <circle cx={x(p.t)} cy={y(p.m)} r={5} className="dot" />
      </svg>
      <div className="readout" aria-live="polite">
        <strong>{month}</strong>: {p.m > 0 ? '+' : ''}
        {p.m.toFixed(1)} cm of water (range across solutions {p.lo.toFixed(1)} to {p.hi.toFixed(1)} cm)
      </div>
      <figcaption>
        Water stored in the Upper Indus Basin above Tarbela, measured by the GRACE and GRACE-FO satellites. The line is the
        mean of three solutions (JPL, CSR, GSFC) and the band shows their range, as change relative to 2004–2009. These are
        preliminary numbers from my thesis data, not yet corrected for Tarbela reservoir storage or signal leakage.
      </figcaption>
    </figure>
  )
}
