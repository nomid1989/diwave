import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const makeIcon =
  (path: React.ReactNode) =>
  ({ size = 28, className, ...rest }: IconProps) =>
    (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...rest}
      >
        {path}
      </svg>
    );

export const IconCard = makeIcon(
  <>
    <rect x="3" y="3" width="18" height="14" rx="2" />
    <path d="M3 9h18" />
    <path d="M7 17h4" />
  </>
);

export const IconChip = makeIcon(
  <>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </>
);

export const IconAutomation = makeIcon(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    <path d="M5 5l2.5 2.5M19 5l-2.5 2.5M5 19l2.5-2.5M19 19l-2.5-2.5" />
  </>
);

export const IconAnalytics = makeIcon(
  <>
    <path d="M3 3v18h18" />
    <rect x="6" y="12" width="3" height="6" rx="1" />
    <rect x="11" y="9" width="3" height="9" rx="1" />
    <rect x="16" y="6" width="3" height="12" rx="1" />
  </>
);

export const IconSupport = makeIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M8 15a4 4 0 0 0 8 0" />
    <path d="M9 10h.01M15 10h.01" />
  </>
);

export const IconCalendar = makeIcon(
  <>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M8 2v4M16 2v4M3 10h18" />
  </>
);

export const IconDesign = makeIcon(
  <>
    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </>
);

export const IconDeploy = makeIcon(
  <>
    <path d="M4 20V8l8-4 8 4v12" />
    <path d="M12 12v8" />
  </>
);

export const IconLoop = makeIcon(
  <>
    <path d="M3 12a7 7 0 0 1 12-4h3" />
    <path d="M21 12a7 7 0 0 1-12 4H6" />
  </>
);
