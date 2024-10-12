import { describe, expectTypeOf, test } from 'vitest';
import Rule from './Rule';

describe('Definition "Rule"', () => {
  test('should type correctly', () => {
    const rule = () => (input: unknown) => !!input;

    expectTypeOf(rule).toMatchTypeOf<Rule>();
  });
});
