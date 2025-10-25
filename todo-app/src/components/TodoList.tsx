import TodoItem from './TodoItem';
import type { Todo } from '../types/todo';

export default function TodoList() {
   // 疑似的なデータ
   const todos: Todo[] = [
      {
        id: '1',
        text: 'タスク１',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {      
        id: '2',
        text: 'タスク２',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        text: 'タスク３',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return (
      <ul className='space-y-2' role='list' aria-label='Todo リスト'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    );
}