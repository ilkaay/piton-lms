import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emailValue(event: any){
    this.loginForm.controls['email'] = event;
    console.log(this.loginForm.controls['email'])
    console.log(this.loginForm.touched)
  }
  redirectToInitialPage = (): void => {
    this.router.navigate([''])
  };
  loginForm!: FormGroup;
  constructor(private router: Router,) {
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [<any>Validators.required]),
    })
  }

}
