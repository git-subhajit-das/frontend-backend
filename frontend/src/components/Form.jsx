import React, { useState } from 'react'
import DeleteModal from '../components/DeleteModal'
import axios from 'axios'
import EditModal from './EditModal'
import Card from './Card'

const Form = ({todo}) => {
  const [delModal, setDelModal] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [editModal, setEditModal] = useState(false)
  const [currentVal, setCurrentVal] = useState(null)

function handleDelModal(id){
    setDelModal(true)
    setTodoId(id)
}

function cancelModal(){
   setDelModal(false)
   setEditModal(false)
}

async function confirmDel() {
  await axios.delete(`http://localhost:8001/todo/delete/${todoId}`)
  cancelModal()
}

function handleEditModal(id,title){
    setEditModal(true)
    setTodoId(id)
    setCurrentVal(title)
}

async function confirmEdit(editData) {
  const data = {
    title : editData
  }

  await axios.put(`http://localhost:8001/todo/update/${todoId}`,data)
  cancelModal()
}

  return (
    <>
      {todo.map((item)=><div key={item._id} className='flex w-[40%] m-auto bg-red-200 justify-between items-center mb-2'>
        <Card item={item} handleDelModal={handleDelModal} handleEditModal={handleEditModal}/>
    </div>)}
    {delModal && <DeleteModal cancelModal={cancelModal} confirmDel={confirmDel}/>}
    {editModal && <EditModal cancelModal={cancelModal} confirmEdit={confirmEdit} currentVal={currentVal}/>}
    </>
  )
}

export default Form