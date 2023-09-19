import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { FifthPageComponent } from './pages/fifth-page/fifth-page.component';
import { SixthPageComponent } from './pages/sixth-page/sixth-page.component';
import { SeventhPageComponent } from './pages/seventh-page/seventh-page.component';
import { EighthPageComponent } from './pages/eighth-page/eighth-page.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
  { path: 'third', component: ThirdPageComponent},
  { path: 'fourth', component: FourthPageComponent},
  { path: 'fifth', component: FifthPageComponent},
  { path: 'sixth', component: SixthPageComponent},
  { path: 'seventh', component: SeventhPageComponent},
  { path: 'eighth', component: EighthPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
