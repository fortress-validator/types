import { describe, expectTypeOf, test } from 'vitest';
import RuleArguments from './RuleArguments';

describe('Definition "RuleArguments"', () => {
  test('should type correctly', () => {
    const ruleArguments = {
      values: [],
    };

    expectTypeOf(ruleArguments).toMatchTypeOf<RuleArguments>();
  });
});
