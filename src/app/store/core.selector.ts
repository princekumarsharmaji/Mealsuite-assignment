import { createFeatureSelector, createSelector, State } from '@ngrx/store';

export const selectCoreFeature = createFeatureSelector('core');

export const selectTasks = createSelector(selectCoreFeature, (state: any) => state.tasks);

export const selectSelectedTask = createSelector(selectCoreFeature, (state: any) => state.selectedTask);

export const selectUsers = createSelector(selectCoreFeature, (state: any) => state.users);