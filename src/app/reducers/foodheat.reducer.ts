import { createReducer, on } from '@ngrx/store';
import { searchFoodHeatAction } from "../actions/foodheat.action";
import { TableItem } from '../components/ant-table/ant-table.component';

export interface FoodHeatState {
    params: string;
    item: TableItem[]
}

const initialState: FoodHeatState = {params: '', item: []};

export const foodHeatReducer = createReducer(
    initialState,
    on(searchFoodHeatAction, (state, action: FoodHeatState) => {
        return {...action, item: action.item.filter(it=>it.name!=null)};
    })
)