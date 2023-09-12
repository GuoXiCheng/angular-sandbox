import { Component, OnInit } from '@angular/core';
import { AntConfirmService } from 'src/app/services/ant-confirm.service';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.css']
})
export class SixthPageComponent implements OnInit {

  constructor(private antConfirmService: AntConfirmService) { }

  ngOnInit() {
  }

  clickConfirm() {
    this.antConfirmService.success({title: 'confirm_to_submit', ok:()=>console.log('hh ok')});
  }

  clickConfirmDel() {
    this.antConfirmService.warning({title: 'confirm_to_delete', ok:()=>console.log('hh ok')});
  }
}
