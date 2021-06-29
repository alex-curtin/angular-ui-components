import { Component, OnInit, Input } from '@angular/core';

import { Header, Data } from '../collections-home/collections-home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() headers: Header[] = [];
  @Input() data: Data[] = [];
  @Input('class') classNames: string = '';

  constructor() {}

  ngOnInit(): void {}
}
