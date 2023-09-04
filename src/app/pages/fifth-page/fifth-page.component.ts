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
		{ date: '2023-08-29', exceptionNum: 10 },
		{ date: '2023-08-30', exceptionNum: 99 },
		{ date: '2023-08-31', exceptionNum: 156 },
		{ date: '2023-09-01', exceptionNum: 12365 },
		{ date: '2023-09-02', exceptionNum: 489 },
		{ date: '2023-09-03', exceptionNum: 0 },
		{ date: '2023-09-04', exceptionNum: 1 },
	]

	ngOnInit() {
	}

	clickExpand() {
		this.isExpand = !this.isExpand;
	}

	handleUpEvent(date: Dayjs) {
		const result = Array.from({ length: 7 }, (_, index) => index + 1).map((item) => ({
			date: date.clone().subtract(item - 1, 'day').format('YYYY-MM-DD'),
			exceptionNum: Math.floor(Math.random() * 100)
		}));
		this.dataset = result.reverse();
	}

	handleDownEvent(date: Dayjs) {
		const result = Array.from({ length: 7 }, (_, index) => index + 1).map((item) => ({
			date: date.clone().subtract(item - 1, 'day').format('YYYY-MM-DD'),
			exceptionNum: Math.floor(Math.random() * 100)
		}));
		this.dataset = result.reverse();
	}
}
