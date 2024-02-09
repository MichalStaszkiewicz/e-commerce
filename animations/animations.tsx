export function easeInOutQuad(
  time: number,
  begin: number,
  change: number,
  duration: number
): number {
  time /= duration / 2;
  if (time < 1) return (change / 2) * time * time + begin;
  time--;
  return (-change / 2) * (time * (time - 2) - 1) + begin;
}
