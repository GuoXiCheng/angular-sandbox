import { createAction, props } from "@ngrx/store";
import { TableItem } from "../components/ant-table/ant-table.component";

export const searchFoodHeatAction = createAction(
    '[FoodHeat] Load Food Heat', props<{ params: string, item: TableItem[] }>()
);