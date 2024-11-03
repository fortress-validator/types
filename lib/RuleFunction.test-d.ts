import { describe, expectTypeOf, test } from 'vitest';
import RuleFunction from './RuleFunction';

describe('Definition "RuleFunction"', () => {
  test('should type correctly', () => {
    const ruleFunction = (input: unknown) => !!input;

    expectTypeOf(ruleFunction).toMatchTypeOf<RuleFunction>();
  });
});
