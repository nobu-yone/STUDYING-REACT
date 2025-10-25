import {Clock, History}  from 'lucide-react'

export default function TodoFilters() {
    const filters = [{ label: 'すべて' },{ label: '未完了'},{ label: '完了'}];
    const sorts = [
       { label: '作成日時', icon: <Clock className='w-4 h-4'/> },
       { label: '更新日時', icon: <History className='w-4 h-4' /> },
    ];

    return (
      <div className='flex flex-wrap items-center justify-between gap-4'> 
        <div className='flex gap-2'>
          {filters.map(({ label }) => (
            // TODO 有効なボタンだけオレンジにする
            <button 
              key={label} 
              className='px-3 py-1 text-sm text-white bg-orange-500 rounded-full'
            >
              {label}
            </button>
         ))}
        </div>

        <div className='flex gap-2'>
          {sorts.map(({ label, icon }) => (
               // TODO 有効なボタンだけオレンジにする
            <button 
              key={label} className='px-3 py-1 text-sm flex items-center gap-1 text-white
                bg-orange-500 rounded-full'>
              {icon} 
              {label}    
            </button>
          ))}
        </div>
      </div>
    )
}


