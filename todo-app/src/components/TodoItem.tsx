import { Circle, CircleCheck } from 'lucide-react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
   todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
   console.log(todo.id)
   console.log(todo.text)
   console.log(todo.completed)
   console.log(todo.createdAt)
   console.log(todo.updatedAt)

   const formatDate = (date: Date) => {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
   }

    console.log(formatDate(todo.createdAt))

    return( 
      <div className="hover:shadow-sm flex items-center justify-between 
          p-4 transition-shadow duration-300 bg-white rounded-lg shadow-sm">
         {/* 完了未完了の切り替えボタン */ }
         <button
           onClick={() => {
             console.log(`未完了完了の切り替え`);
           }}
           className='hover:text-orange-500 test-gray-500 transition-colors duration-300'
           aria-label={`${todo.text}を${todo.completed ? '未完了' : '完了'}にする`}
         >
           {todo.completed ? 
              <CircleCheck className='w-6 h-6 text-orange-500' /> 
             : 
              <Circle className="w-6 h-6" />
            }
         </button>

         <div className="flex-1">
            <span 
              className={`${todo.completed ?  'line-through text-gray-400' 
               : 'text-gray-700'}`}
            >
               {todo.text}
            </span>
            <div className='mt-1 text-xs test-gray-400'>
              作成: {formatDate(todo.createdAt)}
              {todo.updatedAt > todo.createdAt &&
               `・更新: ${formatDate(todo.updatedAt)}`}
            </div>
         </div>
      </div>
    )
}

