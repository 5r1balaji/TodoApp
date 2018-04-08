package com.todo.entity;

import javax.persistence.*;

@Entity
@NamedNativeQuery(name = "Todos.removeSelectedTodos"
,query = "DELETE  FROM  TODOS  WHERE todo_id IN (:ids)")
public class Todos {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long todoId;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private Boolean done;


    public Todos() {
    }

    public Todos(Long todoId) {
        this.todoId = todoId;
    }

    public Todos(Long todoId, String text, Boolean done) {
        this.todoId = todoId;
        this.text = text;
        this.done = done;
    }


    public Long getTodoId() {
        return todoId;
    }

    public void setTodoId(Long todoId) {
        this.todoId = todoId;
    }

    public String getText() {
        return text;
    }


    public void setText(String text) {
        this.text = text;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }






}
