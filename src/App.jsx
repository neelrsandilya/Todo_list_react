import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import viteLogo from '/vite.svg'
import { v4 as uuidv4 } from 'uuid'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'

import './App.css'
// import { jsonp } from 'express/lib/response'

const id= uuidv4();

<i class="fa-solid fa-trash"></i>


function App() {

  const SaveLS= () => {
    localStorage.setItem("Todos",JSON.stringify(Todos))
  }
  
useEffect(() => {
 
let todostring = localStorage.getItem("Todos")

if (todostring){
  let LStodos= JSON.parse(localStorage.getItem("Todos"))
  setTodos(LStodos)
}
}, [])





  const [Todo, setTodo] = useState("")

  const [Todos, setTodos] = useState([])

const handleInput = (e)=>{
setTodo(e.target.value)

}
const handleAdd=()=>{

  if(Todo){
  setTodos( [...Todos, { Todo, isdone: "false", id: uuidv4() }]);

  // setTodos(...Todos,{Todo,isdone:"false",id:  uuidv4()})
setTodo("")
SaveLS()
  }

}
const handleDel=(e,id)=>{

let newTodos= Todos.filter((e)=>{ return (e.id !== id)})

   
  setTodos( newTodos)
  SaveLS()

}


const handleEdit= (e,id)=>{

  let editTodos= Todos.find((e)=>{ return (e.id === id)})

   
  setTodo( editTodos.Todo)

// const i =Todos.findIndex((ele) => {
//   return ele.id===id})
SaveLS()

}

const handleCheckbox= (id) => {
//   let chktodo= Todos.find((e)=>{ return (e.id === id)})

//   chktodo.isDone? chktodo.isDone: !chktodo.Todo :chktodo.isDone;
// }
setTodos(
  Todos.map((item) =>
    item.id === id ? { ...item, isDone: !item.isDone } : item
  )
)
}


  return (
    <>


      <div className="content">
      <Navbar/>

      <a href="https://imgbb.com/"><img src="https://i.ibb.co/qF01bz31/Screenshot-41-removebg-preview.png" alt="Screenshot-41-removebg-preview" border="0"/> </a>
    <div className='head'>
<input  placeholder ="Enter Tasks "onChange={handleInput}  type="text" name ="Name" value={Todo}/>


<button onClick={handleAdd}><i class="fa-solid fa-plus"></i></button>
</div>

{Todos.length ===0 && <div className="ltext">Your tasks will appear below</div>}
<div className="lbox">
{
Todos.map(item=>{
return (
    <div className="btns">
  <input class="circle-checkbox" onChange={(e) => {
    handleCheckbox(item.id)
  }
   } type="checkbox" name="chkbox" id="" />

<span className='task' style ={ {textDecoration: item.isDone ? 'line-through': 'none'}} > {item.Todo}</span>

<span class="cbtn">
<button onClick={(e)=>{handleDel(e,item.id)}}> <i class="fa-solid fa-trash fa-spin"></i> </button>
<button onClick={(e)=>{handleEdit(e,item.id)}}><i class="fa-solid fa-pen-to-square"></i></button>
</span>
</div>
)
})
}
<Footer/>

</div>
</div>



    </>
  )
}

export default App
