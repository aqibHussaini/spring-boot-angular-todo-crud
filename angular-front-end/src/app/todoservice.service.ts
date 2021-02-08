import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../app/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) {
    
   }
   addtodo(obj)
   {
     
     console.log('service called '+obj.tododescription);
    return this.http.post('http://localhost:8080/addTodo',obj,{responseType:"text" as"json"});
    
   }
   viewtodo()
   {
    return this.http.get("http://localhost:8080/getAllTodo");
   }
   delete(id)
   {
    return this.http.delete("http://localhost:8080/deletetodo/"+id);
   }
   getTodoById(id)
   {
     return this.http.get("http://localhost:8080/getATodoById/"+id);
   }
   update(todo)
   {
    return this.http.put('http://localhost:8080/updatetodo/'+todo.id,todo);
   }
}

