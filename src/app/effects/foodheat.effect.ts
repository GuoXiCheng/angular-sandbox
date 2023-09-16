import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../services/api.service";
import { catchError, exhaustMap, from, map, of } from "rxjs";
import { searchFoodHeatAction } from "../actions/foodheat.action";

@Injectable()
export class FoodHeatEffects {
  loadFoodHeat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchFoodHeatAction),
      exhaustMap((action) =>
        from(this.apiService.searchFoodHeat(action.params)).pipe(
            map((foodheat)=>searchFoodHeatAction({...action, item: foodheat})),
          catchError((err) => of({ type: '[FoodHeat] Load Food Heat Fail', payload: err }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}