import { createContext } from 'react'
import type { Todo, TodoFilter, TodoSort } from '../types/todo';

interface TodoContextType {

  todos: Todo[]

  addTodo: (text: string) => void
  // 完了未完了の切り替え
  deleteTodo: (id: string) => void
  // テキストは変更後の内容
  toggleTodo: (id: string) => void

  editTodo: (id: string, text: string) => void

  filter: TodoFilter

  setFilter: (filter: TodoFilter) => void

  sort: TodoSort

  setSort: (sort: TodoSort) => void
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

