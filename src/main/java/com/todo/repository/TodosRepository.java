package com.todo.repository;

import com.todo.entity.Todos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface TodosRepository extends JpaRepository<Todos,Long> {
    @Modifying
    @Transactional
    void removeSelectedTodos(@Param("ids") List<Long> ids);
}
