import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  redirectToExamPage = (): void => {
    this.router.navigate(['exam'])
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
