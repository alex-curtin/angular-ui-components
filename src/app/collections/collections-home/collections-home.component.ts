import { Component, OnInit } from '@angular/core';

export type Header = {
  [key: string]: string;
  label: string;
};

export type Data = {
  name: string;
  age: number;
  job: string;
  employed: boolean;
};

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = 'Hi';
  data: Data[] = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'Jill',
      age: 26,
      job: 'Engineer',
      employed: true,
    },
    {
      name: 'Elyse',
      age: 25,
      job: 'Engineer',
      employed: true,
    },
  ];
  headers: Header[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a Job?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
