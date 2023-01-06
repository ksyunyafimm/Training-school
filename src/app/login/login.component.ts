import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Person} from "../servises/authttp.service";
import {AuthService} from "../servises/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  persons: Person[] =[]
  constructor( private http: HttpClient, private authServise: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      signinEmail: new FormControl('',[Validators.required,Validators.email]),
      signinPassword: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      signinConfirm: new FormControl('',Validators.required)
    }

    )
    if (this.authServise.isLoggedIn()){
      this.route.navigate(['contact-form'])
    }
    // this.http.get<Person[]>('http://localhost:3000/person').subscribe(
    //   response =>{
    //     this.persons = response
    //     console.log(this.persons)
    //   }
    // )
  }

  submit() {

    this.authServise.login(this.loginForm.value).subscribe({
      next:() => this.route.navigate(['contact-form']),
      error: (err) => alert(err.message)
    })
    // if (this.loginForm.valid && this.loginForm.get('signinConfirm').value) {
    //   const formData = {...this.loginForm.value}
    //   console.log(formData)
    //   this.authServise.login(this.loginForm.value, this.persons)
    //   this.loginForm.reset()
    // }

  }


}
