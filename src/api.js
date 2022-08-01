import { TODOS_URL } from "./config";

export function getTodosList() {
    return fetch(TODOS_URL)
        .then((res) => res.json());
}

export function switchTodosClass(updatedTodo) {
    return fetch(TODOS_URL + updatedTodo.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo)
   })
}

export function deleteItem(id) {
    return fetch(TODOS_URL + id, {
      method: 'DELETE',
    })
}

export function addTodosItem(newTitle) {
    return fetch(TODOS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTitle),
    })
}