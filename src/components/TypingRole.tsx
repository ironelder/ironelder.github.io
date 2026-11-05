"use client";

import { useEffect, useState } from "react";

type Props = {
  roles: string[];
  className?: string;
};

const START_DELAY = 2200;
const HOLD_DELAY = 1800;
const TYPE_DELAY = 90;
const DELETE_DELAY = 45;

export function TypingRole({ roles, className }: Props) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let roleIndex = 0;
    let charCount = roles[0].length;
    let deleting = true;
    let timer: number;

    const tick = () => {
      if (deleting) {
        charCount--;
        if (charCount <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      } else {
        charCount++;
        if (charCount >= roles[roleIndex].length) {
          deleting = true;
          setText(roles[roleIndex]);
          timer = window.setTimeout(tick, HOLD_DELAY);
          return;
        }
      }
      // 빈 문자열이면 줄 높이가 꺼져 레이아웃이 흔들림 → zero-width space 유지
      setText(roles[roleIndex].slice(0, Math.max(charCount, 0)) || "​");
      timer = window.setTimeout(tick, deleting ? DELETE_DELAY : TYPE_DELAY);
    };

    timer = window.setTimeout(tick, START_DELAY);
    return () => window.clearTimeout(timer);
  }, [roles]);

  return <span className={className}>{text}</span>;
}
