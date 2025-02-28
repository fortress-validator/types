import { describe, expectTypeOf, test } from 'vitest';
import type Plugin from './Plugin';

describe('Definition "Plugin"', () => {
  test('should type correctly', () => {
    const plugin = {
      locales: {
        en: {
          required: (field: string) => `The ${field} field is required.`,
        },
      },
      rules: {
        required: () => (input: unknown) => !!input,
      },
    };

    expectTypeOf(plugin).toMatchTypeOf<Plugin>();
  });
});
