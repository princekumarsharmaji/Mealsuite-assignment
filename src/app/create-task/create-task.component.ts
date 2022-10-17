import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BackendService } from '../backend.service';
import { addTask } from '../store/core.actions';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  users = this.backend.users();
  createTaskForm: FormGroup;

  constructor(private backend: BackendService, private fb: FormBuilder, private store: Store) {
    this.createTaskForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.store.dispatch(addTask({task: this.createTaskForm.value.task}));
    this.createTaskForm.reset();
  }

}
