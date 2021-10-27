import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() placeHolderText:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
