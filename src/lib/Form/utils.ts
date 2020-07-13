export function getUnknownObjectValue(data: unknown, key: string): string {
  if (typeof data === 'object' && data) {
    const object: Record<string, any> = data;
    return object[key];
  }

  return '';
}

export function unknownToObject(data: unknown): object {
  if (typeof data === 'object' && data) {
    const object: Record<string, any> = data;
    return object;
  }

  return {};
}
