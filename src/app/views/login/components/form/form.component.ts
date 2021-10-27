import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  redirectToInitialPage = (): void => {
    this.router.navigate([''])
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
