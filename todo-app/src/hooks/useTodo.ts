import { useCallback, useMemo } from "react"

import { useLocalStorage } from "./useLocalStorage"
import type { Todo, TodoFilter, TodoSort } from "../types/todo"

export function useTodo(){
// 
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos",[]);
  const [filter, setFilter] = useLocalStorage<TodoFilter>("filter",'all');
  const [sort, setSort] = useLocalStorage<TodoSort>("sort",'createdAt');

  /**
   * タスクの追加
   * @param text タスクの内容
   */

  const addTodo = useCallback(
    (text : string) => {
      const now = new Date()

      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
    // これからはnowを使用せず、createdAt  new date update
        createdAt: now,
        updatedAt: now,
      };

  // new Todo  wo todos 
      setTodos([...todos, newTodo]);
     },
     [todos, setTodos]
  )

  /**
   * 完了 / 未完了の切り替え
   * @param id 切り替えるタスクの ID
   */

    const deleteTodo = useCallback(
      (id: string) => {
    // 元々の todos をフィルタリングして、 id が一致しないものを返す
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
      }, 
      [setTodos]
    )
    
  /**
   * 完了 / 未完了の切り替え
   * @param id 切り替えるタスクの ID
   */

   const toggleTodo = useCallback(
      (id: string) => {
       setTodos((prevTodos) => 
         prevTodos.map((todo) => 
           todo.id === id 
             ? {...todo, completed: !todo.completed, updateAt: new Date()}
             : todo
          )
        )
      },
       [setTodos]
   ) 


  /**
   * タスクの編集
   * @param id 編集するタスクの ID
   * @param text 編集後のタスクの内容
   */

  const editTodo = useCallback(
      (id: string, text: string) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            (todo.id === id ? { ...todo, text, updatedAt: new Date() } : todo))
        )
      },
      [setTodos]
    )

   /**
   * フィルターとソートを適用したタスクの一覧を返す
   * @returns フィルターとソートを適用したタスクの一覧
   */

  const filteredAndSortedTodos = useMemo(() => {
    let result = [...todos]

 //　フィルタの適用、すべて　未完了完了済み
    if (filter === 'active'){
      result = result.filter((todo) => !todo.completed)
    }  else if (filter === 'completed'){
      result = result.filter((todo) => todo.completed)
    } 

    result.sort((a, b) => {
      const dateA = sort === 'createdAt' ? a.createdAt : a.updatedAt
      const dateB = sort === 'createdAt' ? b.createdAt : b.updatedAt;
      
      return new Date(dateB).getTime() - new Date(dateA).getTime()
    })

    return result
   } ,[todos, filter, sort])

   return { 
     todos: filteredAndSortedTodos, 
     addTodo,
     deleteTodo, 
     toggleTodo, 
     editTodo, 
     filter, 
     setFilter, 
     sort,      
     setSort, 
   }
}
