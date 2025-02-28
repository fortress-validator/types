import { describe, expectTypeOf, test } from 'vitest';
import type Messages from './Messages';

describe('Definition "Messages"', () => {
  test('should type correctly', () => {
    const messages = {
      required: (field: string) => `The ${field} field is required.`,
    };

    expectTypeOf(messages).toMatchTypeOf<Messages>();
  });
});
