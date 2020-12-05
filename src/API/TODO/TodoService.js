import axios from 'axios'

class Todoservice{

GetAllTodo(name){
return axios.get(`http://localhost:8080/users/${name}/todos`)

}



DeleteTdoService(name,id){

    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
 }
}
export default new Todoservice();