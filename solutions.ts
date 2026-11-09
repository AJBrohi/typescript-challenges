// 1
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier && multiplier > 0) {
    return value * multiplier;
  } else if (multiplier == 0) {
    return value * 0;
  }
  return value * 2;
};

// 2
const processInput = (value: number | string | boolean) => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else {
    return value ? "Activate" : "Inactivate";
  }
};

// 3
const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [lat, long, area] = coordinate;
  return `Location: ${area} (${lat} ${long})`;
};

// 4
