package com.todo.service;


import com.todo.entity.RequestMapper;
import com.todo.entity.Todos;
import com.todo.repository.TodosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/rest")
public class TodoService {


    @Autowired
    TodosRepository todosRepository;

    @RequestMapping(value = "/todos")
    List<Todos> getTodos(){
        return todosRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST,value = "/todos")
    List<Todos> saveTodos(@RequestBody final Todos todos){
        todosRepository.save(todos);
        return todosRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST ,value="/remove")
    List<Todos> removeTodos(@RequestBody RequestMapper mapper){

     List<Long> ids=new ArrayList<>();

     for(Todos todo:mapper.getTodos()){
         ids.add(todo.getTodoId());
     }
     todosRepository.removeSelectedTodos(ids);
        return todosRepository.findAll();
    }



}
