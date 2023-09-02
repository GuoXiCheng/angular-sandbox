import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-fifth-page',
	templateUrl: './fifth-page.component.html',
	styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {
	isExpand = true;
	constructor() { }

	ngOnInit() {
	}

	clickExpand() {
		this.isExpand = !this.isExpand;
	}
}
