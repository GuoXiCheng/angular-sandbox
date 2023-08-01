import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForestGreenTableComponent } from './components/forest-green-table/forest-green-table.component';
import { ForestGreenDialogComponent } from './components/forest-green-dialog/forest-green-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,

    ForestGreenTableComponent,
    ForestGreenDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
