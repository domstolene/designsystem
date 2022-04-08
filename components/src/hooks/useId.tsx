import { useState } from 'react';

let nextId = 0;

export function useId(prefix: string, suffix?: string) {
  const [id] = useState(() => nextId++);
  return `${prefix}-${id}${suffix ? '-' + suffix : ''}`;
}
