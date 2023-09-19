import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-ant-toolbar',
  templateUrl: './ant-toolbar.component.html',
  styleUrls: ['./ant-toolbar.component.css'],
  standalone: true,
  imports: [CommonModule, NzIconModule, NzDividerModule, NzAvatarModule, NzDropDownModule]
})
export class AntToolbarComponent implements OnInit {

  groupMenuList = ['gitlab', 'gdc', 'whc'];
  languageMenuList = ['简体中文', 'ENGLISH', '繁体中文']
  selectedGroup: string | null = null;
  selectedLanguage: string | null = null;
  isMobile = false;
  constructor(public screenSize: ScreenSizeService) { 
    if (this.groupMenuList.length !== 0) this.selectedGroup = this.groupMenuList[0];
    if (this.languageMenuList.length !== 0) this.selectedLanguage = this.languageMenuList[0];
  }

  ngOnInit() {
    this.isMobile = this.screenSize.isScreenSmall();
  }

  clickGroupItem(groupItem: string) {
    if (this.selectedGroup === groupItem) return;
    this.selectedGroup = groupItem;
  }

  clickLanguageItem(languageItem: string) {
    if (this.selectedLanguage === languageItem) return;
    this.selectedLanguage = languageItem;
  }
}
