import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onComplete(): boolean{
    this.todo.completed = !this.todo.completed;
    this.todoService.updateTodo(this.todo);
    return false;
  }


}
