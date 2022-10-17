import { createAction, props } from '@ngrx/store';
import { Task, User } from '../backend.service';

export const getTasks = createAction('[Core Action] GET TASKS');

export const addTask = createAction('[Core Action] ADD TASK', props<{task: string}>());

export const selectTask = createAction('[Core Action] Select Task', props<{task: Task}>());

export const updateAssignee = createAction('[Core Action] UPDATE ASSIGNEE', props<{ assignee: User }>());

