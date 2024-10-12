import { describe, expectTypeOf, test } from 'vitest';
import Message from './Message';

describe('Definition "Message"', () => {
  test('should type correctly', () => {
    const message = (field: string) => `The ${field} field is required.`;

    expectTypeOf(message).toMatchTypeOf<Message>();
  });
});
