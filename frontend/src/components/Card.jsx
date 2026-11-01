import React from 'react'

const Card = ({item, handleDelModal, handleEditModal}) => {
  return (
    <>
    <span className='block p-2 overflow-auto no-scrollbar w-[82%]'>{item.title}</span>
    <div className='flex justify-between w-[15%]'>
        <button className='bg-green-400 p-2' onClick={()=>handleEditModal(item._id,item.title)}>Edit</button>
        <button className='bg-red-400 p-2' onClick={()=>handleDelModal(item._id)}>Del</button>
    </div>
    </>
  )
}

export default Card