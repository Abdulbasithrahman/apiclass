import logo from './logo.svg';
import React from 'react'
import './App.css';
import Axios from 'axios'
const apidata="https://jsonplaceholder.typicode.com/users"

var id=11
function App() {
    const[users,setUsers]=React.useState([])
    const[name,setName]=React.useState("")
    const[update,setUpdate]=React.useState([])

    React.useEffect(()=>{
      async function getStoreData(){
        const res=await Axios.get(apidata,{
          params: {
            _limit: 5
           }
        })
        setUsers(res.data)
      }
      getStoreData()
    },[])

    

    const post=()=>{
      async function postData(){
       const res=await Axios.post(apidata,{id:id++,name:name})
      setUsers([...users,res.data])
      }
      postData()
    }
    const Update=()=>{
      async function updateData(){
       const res=await Axios.put(`${apidata}/7`,{name:name})
        setUpdate(res.data)
      }
      updateData()
    }
    
    const Delete=()=>{
      async function deleteData(){
        const res=await Axios.delete(`${apidata}/7`)
        setUpdate(res.data)
      }
      deleteData()
    }
    React.useEffect(()=>{
      async function getStoreData7(){
        const res=await Axios.get(`${apidata}/7`)
        setUpdate(res.data)
      }
      getStoreData7()
    },[])

  return (
    <div className='App'>
    {users.map((item,index)=>{
      return(
        <p key={index}>{item.name} </p>
      )
    })}
    <div className='update'>
    {update.name}</div>
   
    <input type="text" value={name} placeholder="type here..." onChange={(e)=>setName(e.target.value)}/>
    <div className='but-class'>
    <button onClick={post}>post</button>
    <button onClick={Update}>update</button>
    <button onClick={Delete}>delete</button>
    </div>
   
    </div>
  );
}

export default App;
