import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from 'reducers/todos'

const TodoItem = styled.article`
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 6px;
  background: linen;
  position: relative;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 6px;
  background: none;
  border: none;
  cursor: pointer;
`

const TodoItemText = styled.h2`
  font-family: 'Quicksand', sans-serif;
  color: #D885A3;
  font-size: 20px;
`

const DeleteEmoji = styled.span`
  font-size: 28px;
`

const TodoList = () => {

  const todoList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onTodoToggle = (todoId) => {
      dispatch(todos.actions.toggleItem(todoId))
  } 
  
  const onTodoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

    return (
      <section>
        {todoList.map((todoItem, todoIndex) => (
          <TodoItem key={todoItem.id}>
            <TodoItemText>{todoItem.name}</TodoItemText>
            <input 
              type="checkbox" 
              checked={todoItem.isDone}
              onChange={() => onTodoToggle(todoItem.id)}
            />
            <label htmlFor="done">Done</label>
            <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
              <DeleteEmoji role="img" aria-label="delete">
                ✖
              </DeleteEmoji>
            </DeleteButton>
          </TodoItem>
        ))}
    </section>
  )
}

export default TodoList
