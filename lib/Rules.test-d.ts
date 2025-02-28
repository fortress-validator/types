import { describe, expectTypeOf, test } from 'vitest';
import type Rules from './Rules';

describe('Definition "Rules"', () => {
  test('should type correctly', () => {
    const rules = {
      required: () => (input: unknown) => !!input,
    };

    expectTypeOf(rules).toMatchTypeOf<Rules>();
  });
});
