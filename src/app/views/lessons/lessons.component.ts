import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  redirectToLessonPage = (): void => {
    this.router.navigate([''])
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
