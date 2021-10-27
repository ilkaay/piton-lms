import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  redirectToRegisterPage = (): void => {
    this.router.navigate(['register'])
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
