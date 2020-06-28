export const NESTED_TYPES = ['array', 'object'];

export interface LookAheadIterator<T> {
  [Symbol.iterator](): Generator<T>;

  lookAhead(n: number): T;

  skip(n: number): void;

  readonly position;
}

export function makeLookAheadIterator<ValueT>(values: ValueT[], start: number = 0): LookAheadIterator<ValueT> {
  let nextIndex = start;
  const end = values.length - 1;

  return {
    * [Symbol.iterator](): Generator<ValueT> {
      while (1) {
        if (nextIndex > end) return { value: undefined, done: true };
        yield values[nextIndex++];
      }
    },
    lookAhead(count): ValueT {
      if (nextIndex + count > end) throw RangeError();

      return values[nextIndex + count];
    },
    skip(n): void {
      if (n == null || nextIndex + n > end + 1) throw RangeError();
      nextIndex += n;
    },

    get position(): number {
      return nextIndex === 0 ? nextIndex : nextIndex - 1;
    },
  };
}

export function fromBase64(b64: string, type = 'binary') {
  // @ts-ignore
  return Buffer.from(b64, 'base64').toString(type);
}
