import { createReducer, on } from '@ngrx/store';
import { addTask, selectTask, updateAssignee } from './core.actions';
import { Task, User } from '../backend.service';

export interface CoreState {
  tasks: Task[];
  selectedTask: Task | null;
  users: User[];
}

export const initialState: CoreState = {
    tasks: [
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
    ],
    selectedTask: null,
    users: []
};

export const coreReducer = createReducer(
  initialState,
  on(addTask, (state, action) => {
      const newTask: Task = {
        id: state.tasks[state.tasks.length-1].id+1,
        description: action.task,
        assigneeId: null,
        completed: false
      };
      console.log(' :: new Task', newTask);
      console.log(' :: tasks', state.tasks);
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      }
  }),
  on(selectTask, (state, action) => {
    return {
      ...state,
      selectedTask: action.task
    }
  }),
  on((updateAssignee), (state, action) => {
    return {
      ...state,
      tasks: []
    }
  })
);

