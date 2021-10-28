import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  redirectToLessonPage = (): void => {
    this.router.navigate([''])
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
