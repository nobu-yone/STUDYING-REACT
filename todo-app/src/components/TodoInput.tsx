export default function TodoInput() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Todo を追加しました')
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'  >
       <input type='text' placeholder='Todo を入力'/> 
       <button type='submit'>追加</button>
    </form>
  )
}