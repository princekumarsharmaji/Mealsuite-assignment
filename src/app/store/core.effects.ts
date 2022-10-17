import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs";
import { BackendService } from "../backend.service";
import { addTask, getTasks } from "./core.actions";

@Injectable()
export class CoreEffects {
    constructor(private actions$: Actions, private backendService: BackendService) {
    }

}