import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {
  @Output() emailInputValue:EventEmitter<string> = new EventEmitter();

  emailInputChange(event: any): void{
    this.emailInputValue.emit(event.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
