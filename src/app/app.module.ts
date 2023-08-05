import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForestGreenTableComponent } from './components/forest-green-table/forest-green-table.component';
import { ForestGreenDialogComponent } from './components/forest-green-dialog/forest-green-dialog.component';
import { InputFieldGroupComponent } from './components/input-field-group/input-field-group.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackbarComponent } from './components/mat-snackbar/mat-snackbar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,

    ForestGreenTableComponent,
    ForestGreenDialogComponent,
    InputFieldGroupComponent,
    MatSnackbarComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
