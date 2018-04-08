package com.todo.entity;

import java.util.List;

public class RequestMapper {
    public List<Todos> getTodos() {
        return todos;
    }

    public void setTodos(List<Todos> todos) {
        this.todos = todos;
    }

    List<Todos> todos ;

}
