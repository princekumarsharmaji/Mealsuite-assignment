import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, tap } from "rxjs/operators";

/**
 * This service acts as a mock backend.
 *
 * You are free to modify it as you see.
 */

export interface User {
  id: number;
  name: string;
};

export interface Task {
  id: number;
  description: string;
  assigneeId: number | null;
  completed: boolean;
};

function randomDelay() {
  return Math.random() * 1000;
}

@Injectable()
export class BackendService {
  storedTasks: Task[] = [
    {
      id: 0,
      description: "Install a monitor arm",
      assigneeId: 111,
      completed: false
    },
    {
      id: 1,
      description: "Move the desk to the new location",
      assigneeId: 111,
      completed: false
    }
  ];

  storedUsers: User[] = [
    { id: 111, name: "Mike" },
    { id: 222, name: "James" }
  ];

  lastId = 1;

  private findTaskById = (id: any, tasks: Task[]): Task | undefined => {
    return tasks.find(task => task.id === +id);
  }
    

  private findUserById = (id: any) => this.storedUsers.find(user => user.id === +id);

  tasks() {
    return of(this.storedTasks).pipe(delay(randomDelay()));
  }

  task(id: number) {
    return of(this.findTaskById(id, this.storedTasks)).pipe(delay(randomDelay()));
  }

  users() {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  user(id: number) {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  newTask(payload: { description: string }) {
    const newTask: Task = {
      id: ++this.lastId,
      description: payload.description,
      assigneeId: null,
      completed: false
    };
    this.storedTasks = this.storedTasks.concat(newTask);
    console.log(":: stored tasl updated", this.storedTasks);
    return of(newTask).pipe(delay(randomDelay()));
  }

  assign(taskId: number, userId: number) {
    return this.update(taskId, { assigneeId: userId }, this.storedTasks);
  }

  complete(taskId: number, completed: boolean) {
    return this.update(taskId, { completed }, this.storedTasks);
  }

  update(taskId: number, updates: Partial<Omit<Task, "id">>, tasks: Task[]): Task[] {
    const foundTask: Task | undefined  = this.findTaskById(taskId, tasks);
    let updatedTasks: Task[] = tasks;
    if(foundTask) {
      const updatedTask: Task = { ...foundTask, ...updates };
      updatedTasks = tasks.map((task: Task) => {
        return (task.id == foundTask.id) ? updatedTask : task;
      });
    }
    return updatedTasks;
  }
}
