"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

type Props = {
  initials: string;
  githubUser: string;
};

export function Avatar({ initials, githubUser }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // hydration 전에 로드가 실패하면 onError 를 놓치므로 마운트 시점에 한 번 더 확인
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarInner}>
        {initials}
        {/* 외부 URL + 정적 export 라 next/image 최적화 이점 없음 → img 직접 사용 */}
        {!failed && (
          <img
            ref={imgRef}
            src={`https://github.com/${githubUser}.png?size=240`}
            alt={`${githubUser} 프로필 사진`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
