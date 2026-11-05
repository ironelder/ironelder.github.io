export type IconName =
  | "github"
  | "sun"
  | "moon"
  | "arrow"
  | "down"
  | "up"
  | "repo"
  | "star"
  | "plus"
  | "android"
  | "layers"
  | "compose"
  | "spark"
  | "pin"
  | "code"
  | "book";

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-github" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </symbol>
      <symbol id="i-sun" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </g>
      </symbol>
      <symbol id="i-moon" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
      </symbol>
      <symbol id="i-down" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7" />
      </symbol>
      <symbol id="i-up" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </symbol>
      <symbol id="i-repo" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 19.5V5a2 2 0 0 1 2-2h13v15H6.5A2.5 2.5 0 0 0 4 20.5 1.5 1.5 0 0 0 5.5 22H19M8 7h7"
        />
      </symbol>
      <symbol id="i-star" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 2.5 2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5Z" />
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14" />
      </symbol>
      <symbol id="i-android" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17.6 9.48 19.44 6.3a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 1 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
        />
      </symbol>
      <symbol id="i-layers" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="m12 2 10 5-10 5L2 7l10-5Z" />
          <path d="m2 12 10 5 10-5M2 17l10 5 10-5" />
        </g>
      </symbol>
      <symbol id="i-compose" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 9h18M9 21V9" />
        </g>
      </symbol>
      <symbol id="i-spark" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"
        />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.5" />
        </g>
      </symbol>
      <symbol id="i-code" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </symbol>
      <symbol id="i-book" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2V4ZM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8V4Z"
        />
      </symbol>
    </svg>
  );
}
