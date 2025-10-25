export default function TodoList() {
   // 疑似的なデータ
   const todos = ['タスク１', 'タスク２', 'タスク３']

    return (
      <ul className='space-y-2' role='list' aria-label='Todo リスト'>
        {todos.map((todo) => (
           <li key={todo}>{todo}</li>
        ))}
      </ul>
    ) 

}