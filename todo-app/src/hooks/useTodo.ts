
import { useState }  from "react"
import type { Todo, TodoFilter, TodoSort } from "../types/todo"

export function useTodo(){
// 
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [sort, setSort] = useState<TodoSort>('createdAt');

  /**
   * タスクの追加
   * @param text タスクの内容
   */

  const addTodo = (text: string) => {
    const now = new Date()

    const newTodo: Todo ={
      id: crypto.randomUUID(),
      text,
      completed: false,
    // これからはnowを使用せず、createdAt  new date update
      createdAt: now,
      updatedAt: now,
   };

  // new Todo  wo todos 
    setTodos([...todos, newTodo]);
   };

  /**
   * 完了 / 未完了の切り替え
   * @param id 切り替えるタスクの ID
   */

  const deleteTodo = (id: string) => {
    // 元々の todos をフィルタリングして、 id が一致しないものを返す
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };      

  /**
   * 完了 / 未完了の切り替え
   * @param id 切り替えるタスクの ID
   */

   const toggleTodo = (id: string) => {
     setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id 
          ? {...todo, completed: !todo.completed, updateAt: new Date()}
          : todo
      )
     );
   }; 


  /**
   * タスクの編集
   * @param id 編集するタスクの ID
   * @param text 編集後のタスクの内容
   */

  const editTodo = (id: string, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text, updatedAt: new Date() } : todo
      )
    );
  };

   /**
   * フィルターとソートを適用したタスクの一覧を返す
   * @returns フィルターとソートを適用したタスクの一覧
   */

  const filteredAndSortedTodos = (): Todo[] => {
    let result = [...todos];

 //　フィルタの適用、すべて　未完了完了済み
    if (filter === 'active'){
      result = result.filter((todo) => !todo.completed)
    }  else if (filter === 'completed'){
      result = result.filter((todo) => todo.completed)
    } 

    result.sort((a, b) => {
      const dateA = sort === 'createdAt' ? a.createdAt : a.updatedAt;
      const dateB = sort === 'createdAt' ? b.createdAt : b.updatedAt;

      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });

    return result;
   };

   return { 
     todos: filteredAndSortedTodos(), 
     addTodo,
     deleteTodo, 
     toggleTodo, 
     editTodo, 
     filter, 
     sort, 
     setFilter, 
     setSort, 
   };
}
