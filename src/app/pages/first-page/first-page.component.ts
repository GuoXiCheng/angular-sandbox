import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchFoodHeatAction } from 'src/app/actions/foodheat.action';
import { FoodHeatState } from 'src/app/reducers/foodheat.reducer';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  foodheat$ = this.store.select('foodheat');

  constructor(private store: Store<{foodheat: FoodHeatState}>) { 
    
  }

  ngOnInit() {
    this.store.dispatch(searchFoodHeatAction({params: '草莓', item: []}));
  }

}
