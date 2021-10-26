import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.css']
})
export class ConfirmButtonComponent implements OnInit {
  @Input() text:string = '';
  @Input() clickHandler!: () => void;
  constructor() { }

  ngOnInit(): void {
  }

}
