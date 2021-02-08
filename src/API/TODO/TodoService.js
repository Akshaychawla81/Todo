import axios from 'axios'

class Todoservice{

GetAllTodo(name){
  
return axios.get(`http://localhost:8080/jpa/users/${name}/todos`, {auth: {
  username: 'user',
  password: 'password'
}
})

}

GetTodoID(name,id){
    return axios.get(`http://localhost:8080/jpa/users/${name}/todos/${id}`, {auth: {
      username: 'user',
      password: 'password'
    }
   })
    
    }
    

DeleteTdoService(name,id){

    return axios.delete(`http://localhost:8080/jpa/users/${name}/todos/${id}`,{auth: {
      username: 'user',
      password: 'password'
    }
   })
 }

 UpdateTodoService(name,id,todo){

    return axios.put(`http://localhost:8080/jpa/users/${name}/todos/${id}`,todo, {auth: {
      username: 'user',
      password: 'password'
    }
   })
 }

 AddTodoService(name,todo){

    return axios.put(`http://localhost:8080/jpa/users/${name}/todos`,todo)
 }
}
export default new Todoservice();