const ITEMS = [
  "BRAND POSITIONING",
  "FOUNDER STORYTELLING",
  "CONTENT SYSTEMS",
  "OFFER CLARITY",
  "AUDIENCE TRUST",
  "CONSISTENT VOICE",
];

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span className="ticker-item" key={item + i}>
            {item}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
