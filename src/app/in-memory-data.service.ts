import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const todos = [
      {id: 1, message: 'Lean angular', creationDate: 0},
      {id: 2, message: 'call for haircut', creationDate: 0},
      {id: 3, message: 'do sport', creationDate: 0}
    ];
    return {todos};
  }

  // Overrides the genId method to ensure that a todo always has an id.
  // If the todos array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // todo id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
