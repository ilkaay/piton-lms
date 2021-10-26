import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerHandler = (): void => {
    this.router.navigate(['register'])
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
