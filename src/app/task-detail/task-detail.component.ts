import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { BackendService, Task } from '../backend.service';
import { selectSelectedTask } from '../store/core.selector';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskDetail$: Observable<Task> = this.store.select(selectSelectedTask);

  constructor(private store: Store, private backend: BackendService) { }

  ngOnInit(): void {
  }

  getAssigneeById(id: number) {
    return this.backend.user(id);
  }

}
