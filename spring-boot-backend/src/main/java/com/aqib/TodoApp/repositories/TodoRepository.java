package com.aqib.TodoApp.repositories;

import com.aqib.TodoApp.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Integer> {
}
