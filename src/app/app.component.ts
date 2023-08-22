import { Component, OnInit, Renderer2 } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isDarkTheme = false;
  lang = '中';

  constructor(private renderer: Renderer2, public translateService: TranslateService) {
  }

  ngOnInit() {
    const lang = (localStorage.getItem('currentLanguage') || this.translateService.getBrowserCultureLang() || '').includes('zh') ? 'zh' : 'en';
    switch(lang) {
      case 'zh':
        this.translateService.use('zh-CN');
        break;
      case 'en':
        this.translateService.use('en-US');
        break;
      default:
        this.translateService.use('en-US');
        break;
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }

}