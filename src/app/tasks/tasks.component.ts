import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendService, Task } from '../backend.service';
import { selectTask } from '../store/core.actions';
import { selectTasks } from '../store/core.selector';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);
  users = this.backend.users();

  constructor(private router: Router, private backend: BackendService, private readonly store: Store) { }

  ngOnInit(): void {
  }

  goToDetails(task: Task) {
    this.store.dispatch(selectTask({ task }))
    this.router.navigate(['tasks', task.id]);
  }

}
