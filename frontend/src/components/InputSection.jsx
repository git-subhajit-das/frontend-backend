import React from 'react'

const InputSection = ({val,setVal,addTodo}) => {
  return (
          <div className="flex justify-center m-5  gap-4">
        <input className="bg-slate-500 w-[20%] p-2 rounded outline-none"
          type="text"
          placeholder="Enter todo"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className='p-2 rounded text-white bg-green-500' onClick={addTodo}>Add</button>
      </div>
  )
}

export default InputSection