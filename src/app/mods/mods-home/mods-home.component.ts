import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    { title: 'Why is the sky blue?', content: "I don't know." },
    { title: 'What color is that cat?', content: 'The cat is orange.' },
    { title: 'What does and orange taste like?', content: 'It tastes orange.' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
