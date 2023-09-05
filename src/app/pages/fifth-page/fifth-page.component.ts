import { Component, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';

@Component({
	selector: 'app-fifth-page',
	templateUrl: './fifth-page.component.html',
	styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {
	isExpand = true;
	constructor() { }

	dataset = [
		{
			date: '2023-08-30', openNum: 99, closedNum: 100
		},
		{
			date: '2023-08-31', openNum: 156, closedNum: 1000
		},
		{
			date: '2023-09-01', openNum: 12365, closedNum: 0
		},
		{
			date: '2023-09-02', openNum: 489, closedNum: 10
		},
		{
			date: '2023-09-03', openNum: 0, closedNum: 0
		},
		{
			date: '2023-09-04', openNum: 1, closedNum: 10
		},
		{
			date: '2023-09-05', openNum: 10, closedNum: 10
		}
	]

	ngOnInit() {
	}

	clickExpand() {
		this.isExpand = !this.isExpand;
	}

	handleUpEvent(date: Dayjs) {
		const result = Array.from({ length: 7 }, (_, index) => index + 1).map((item) => ({
			date: date.clone().subtract(item - 1, 'day').format('YYYY-MM-DD'),
			openNum: Math.floor(Math.random() * 100),
			closedNum: Math.floor(Math.random() * 100)
		}));
		this.dataset = result.reverse();
	}

	handleDownEvent(date: Dayjs) {
		const result = Array.from({ length: 7 }, (_, index) => index + 1).map((item) => ({
			date: date.clone().subtract(item - 1, 'day').format('YYYY-MM-DD'),
			openNum: Math.floor(Math.random() * 100),
			closedNum: Math.floor(Math.random() * 100)
		}));
		this.dataset = result.reverse();
	}


}
