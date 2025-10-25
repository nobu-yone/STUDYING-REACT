import { useTodo } from '../hooks/useTodo';
import { TodoContext } from './TodoContext';

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const utilUtils = useTodo();

  return (
    <TodoContext.Provider value={utilUtils}>{children}</TodoContext.Provider>
  );
}
