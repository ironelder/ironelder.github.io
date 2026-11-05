"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

type Props = {
  initials: string;
  src: string;
  alt: string;
};

export function Avatar({ initials, src, alt }: Props) {
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
        {/* 정적 export 라 next/image 최적화가 동작하지 않음 → 미리 480px 로 줄인 파일을 img 로 직접 사용 */}
        {!failed && (
          <img ref={imgRef} src={src} alt={alt} width={480} height={480} loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
    </div>
  );
}
