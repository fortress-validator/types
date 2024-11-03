import RuleFunction from './RuleFunction';

interface Rule<T = void> {
  (args: T): RuleFunction;
}

export default Rule;
