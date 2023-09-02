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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificationRuleDialogComponent } from './components/notification-rule-dialog/notification-rule-dialog.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AntNotificationRuleModalComponent } from './components/ant-notification-rule-modal/ant-notification-rule-modal.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AntNotificationModeModalComponent } from './components/ant-notification-mode-modal/ant-notification-mode-modal.component';
import { FifthPageComponent } from './pages/fifth-page/fifth-page.component';
import { SixthPageComponent } from './pages/sixth-page/sixth-page.component';
import { SeventhPageComponent } from './pages/seventh-page/seventh-page.component';
import { AntNotificationRuleTableComponent } from './components/ant-notification-rule-table/ant-notification-rule-table.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    NzMenuModule,
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

    NzButtonModule,
    NzSelectModule,
    NzFormModule,
    NzIconModule,

    ForestGreenTableComponent,
    ForestGreenDialogComponent,
    InputFieldGroupComponent,
    NotificationRuleDialogComponent,

    AntNotificationRuleModalComponent,
    AntNotificationModeModalComponent,
    AntNotificationRuleTableComponent,
    AntTableComponent,
    AntSideBarComponent
  ],
  providers: [
  
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AntTableComponent } from './components/ant-table/ant-table.component';
import { AntSideBarComponent } from './components/ant-side-bar/ant-side-bar.component';
// https://github.com/ngx-translate/core
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}