import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from './todo';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'api/todos';

  /*
  private todos: Todo[] = [
    {id: 1, message: 'Lean angular', creationDate: 0},
    {id: 2, message: 'call for haircut', creationDate: 0},
    {id: 3, message: 'do sport', creationDate: 0}
  ];
   */

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient){
  }

  /** GET todos from the server */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  updateTodo(todo: Todo): Observable<any> {
    console.log('update', todo);
    return this.http.put(this.todosUrl, todo, this.httpOptions);
  }
}
