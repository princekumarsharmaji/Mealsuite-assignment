import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackendService } from './backend.service';
import { StoreModule } from '@ngrx/store';
import { coreReducer } from './store/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/core.effects';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '',
      component: TasksComponent
    }, {
      path: 'tasks/:id',
      component: TaskDetailComponent
    }]),
    StoreModule.forRoot({ core: coreReducer }, {}),
    EffectsModule.forRoot([CoreEffects])
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
