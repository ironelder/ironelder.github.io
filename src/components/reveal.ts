/** 목록 순서대로 등장 시차(d1~d3)를 주는 클래스. 4번째마다 0으로 되돌아감 */
export function revealDelay(index: number): string {
  const step = index % 4;
  return step === 0 ? "" : `d${step}`;
}
