import { describe, expectTypeOf, test } from 'vitest';
import type Locales from './Locales';

describe('Definition "Locales"', () => {
  test('should type correctly', () => {
    const locales = {
      en: {
        required: (field: string) => `The ${field} field is required.`,
      },
    };

    expectTypeOf(locales).toMatchTypeOf<Locales>();
  });
});
