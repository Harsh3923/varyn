export default function HoodiePreview({ color = '#b0aba4' }) {
  return (
    <svg
      viewBox="0 0 200 245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Hood back */}
      <path
        d="M68 88 Q66 18 100 13 Q134 18 132 88"
        fill={color}
      />

      {/* Hood inner lining */}
      <path
        d="M73 88 Q71 30 100 25 Q129 30 127 88"
        fill="rgba(0,0,0,0.08)"
      />

      {/* Left sleeve */}
      <path
        d="M60 88 L17 110 L12 174 L54 168 L60 118"
        fill={color}
      />

      {/* Right sleeve */}
      <path
        d="M140 88 L183 110 L188 174 L146 168 L140 118"
        fill={color}
      />

      {/* Body */}
      <path
        d="M60 88 L140 88 L146 234 L54 234 Z"
        fill={color}
      />

      {/* Sleeve seam lines */}
      <path d="M60 88 L54 168" stroke="rgba(0,0,0,0.07)" strokeWidth="1.2" />
      <path d="M140 88 L146 168" stroke="rgba(0,0,0,0.07)" strokeWidth="1.2" />

      {/* Neckline */}
      <path
        d="M73 88 Q100 103 127 88"
        stroke="rgba(0,0,0,0.13)"
        strokeWidth="1.8"
        fill="none"
      />

      {/* Kangaroo pocket */}
      <rect
        x="63" y="160" width="74" height="48"
        rx="3"
        fill="rgba(0,0,0,0.065)"
      />
      {/* Pocket center seam */}
      <line
        x1="100" y1="160" x2="100" y2="208"
        stroke="rgba(0,0,0,0.07)"
        strokeWidth="1.2"
      />

      {/* Drawstrings */}
      <path
        d="M89 87 Q87 105 82 148"
        stroke="rgba(0,0,0,0.22)"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M111 87 Q113 105 118 148"
        stroke="rgba(0,0,0,0.22)"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Drawstring tips */}
      <circle cx="82" cy="150" r="2.5" fill="rgba(0,0,0,0.25)" />
      <circle cx="118" cy="150" r="2.5" fill="rgba(0,0,0,0.25)" />

      {/* Ribbed hem */}
      <rect x="54" y="228" width="92" height="6" rx="1" fill="rgba(0,0,0,0.1)" />

      {/* Ribbed cuffs */}
      <rect x="12" y="168" width="42" height="6" rx="1"
        fill="rgba(0,0,0,0.1)"
        transform="rotate(-5 12 168)"
      />
      <rect x="146" y="168" width="42" height="6" rx="1"
        fill="rgba(0,0,0,0.1)"
        transform="rotate(5 146 168)"
      />
    </svg>
  )
}
