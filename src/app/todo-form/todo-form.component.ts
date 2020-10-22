import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

}
