import type Rule from './Rule';

interface Rules {
  [key: string]: Rule<unknown>;
}

export default Rules;
