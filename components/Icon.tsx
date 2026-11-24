const shapes = {
  mark: (
    <>
      <path
        d="M2 27 11 5h5l7 17 6-17h6L24 32h-4L13.4 15 8 28H2z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M12 25h4.5l1.5 4H10.5z" fill="currentColor" stroke="none" />
    </>
  ),
  github: (
    <>
      <path
        fill="currentColor"
        stroke="none"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1 1.73 2.62 1.23 3.26.94.1-.73.39-1.24.71-1.52-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.97 0 0 .94-.3 3.05 1.14a10.63 10.63 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.62 1.55.24 2.69.12 2.97.73.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.09V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"
      />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx=".7" />
      <rect x="14" y="3" width="7" height="7" rx=".7" />
      <rect x="3" y="14" width="7" height="7" rx=".7" />
      <rect x="14" y="14" width="7" height="7" rx=".7" />
    </>
  ),
  pin: (
    <>
      <path d="M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="9" r="2.1" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12m0-12L6 18" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6zM13 3v5h5M9 12h6m-6 4h6" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h12M8 12h12M8 18h12M3 6h1M3 12h1M3 18h1" />
    </>
  ),
};
export function Icon({ name }: { name: keyof typeof shapes }) {
  return (
    <svg
      className={`icon icon-${name}`}
      viewBox={name === "mark" ? "0 0 37 36" : "0 0 24 24"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[name]}
    </svg>
  );
}
