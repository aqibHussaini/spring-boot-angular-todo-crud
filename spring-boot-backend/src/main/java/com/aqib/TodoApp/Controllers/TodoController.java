package com.aqib.TodoApp.Controllers;
import com.aqib.TodoApp.Entity.Todo;
import com.aqib.TodoApp.repositories.TodoRepository;
import com.aqib.TodoApp.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class TodoController {
    @Autowired
    TodoRepository todoRepository;
    @CrossOrigin
    @RequestMapping(value = "/addTodo",method = RequestMethod.POST)
    public ResponseEntity<Response> addtodo(@RequestBody Todo obj)
    {
        System.out.println(""+obj.toString());
        Response response=new Response();
        try
        {
            this.todoRepository.save(obj);
            response.setMessage("todo saved succesfullly...");
        }
        catch (Exception e)
        {
            response.setMessage(e.getMessage());
        }

        return new ResponseEntity<Response>(response, HttpStatus.OK);
    }
    @CrossOrigin
    @RequestMapping(value = "/getAllTodo",method = RequestMethod.GET)
    public List<Todo> getAllTodo()
    {
        return this.todoRepository.findAll();
    }
    @CrossOrigin
    @RequestMapping(value = "/getATodoById/{id}",method = RequestMethod.GET)
    public Todo getATodoById(@PathVariable("id")int id)
    {
        Optional<Todo> t= this.todoRepository.findById(id);
        return t.get();
    }
    @CrossOrigin
    @RequestMapping(value = "/deletetodo/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<Response> deletetodo(@PathVariable ("id")int id)
    {
        System.out.println(id);
        Response response=new Response();
        try
        {
            Optional<Todo> t =this.todoRepository.findById(id);
            this.todoRepository.delete(t.get());
            response.setMessage("todo deleted");
        }
        catch (Exception e)
        {
            response.setMessage(e.getMessage());
        }

        return new ResponseEntity<Response>(response, HttpStatus.OK);
    }
    @CrossOrigin
    @RequestMapping(value = "/updatetodo/{id}",method = RequestMethod.PUT)
    public ResponseEntity<Response> updatetodo(@PathVariable ("id")int id,@RequestBody Todo todo)
    {
        System.out.println(""+id+todo);
        Response response=new Response();
        try
        {
            Optional<Todo> t =this.todoRepository.findById(id);
            Todo obj=t.get();
            obj.setStatus(todo.getStatus());
            obj.setTodotittle(todo.getTodotittle());
            obj.setTododescription(todo.getTododescription());
            this.todoRepository.save(obj);
            response.setMessage( "todo update");
        }
        catch (Exception e)
        {
            response.setMessage(e.getMessage());
        }

        return new ResponseEntity<Response>(response, HttpStatus.OK);

    }
    @RequestMapping(value = "/patchtodo/{id}",method = RequestMethod.PATCH)
    public ResponseEntity<Response> patchtodo(@PathVariable ("id")int id,@RequestBody Map<Object,Object> field)
    {
        Response response=new Response();
        try
        {
            Optional<Todo> todo=this.todoRepository.findById(id);
            Todo t=todo.get();
            field.forEach((k,v)->{
                Field myfield= ReflectionUtils.findField(Todo.class, String.valueOf(k));
                myfield.setAccessible(true);
                ReflectionUtils.setField(myfield,t,v);
            });
            System.out.println(t.toString());
            this.todoRepository.save(t);
            response.setMessage( "updated record through patch...");
        }
        catch (Exception e)
        {
            response.setMessage(e.getMessage());
        }

        return new ResponseEntity<Response>(response, HttpStatus.OK);
    }
}

