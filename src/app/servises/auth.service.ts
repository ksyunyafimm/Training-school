import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";
import {AuthttpService, Person} from "./authttp.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router,
              private authHttp: AuthttpService) { }
  setToken(token: string){
    localStorage.setItem('token',token)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn(){
    return this.getToken() !== null
  }
  login(userInfo: {signinEmail: string, signinPassword: string} ): Observable<string | boolean >{

    if (userInfo.signinEmail == 'a@mail.ru' && userInfo.signinPassword === '1234admin'){
      this.setToken('sdfghjk')
       return of (true)
    }
    //  if (person.find(email => email.login === userInfo.signinEmail) && person.find(pass => pass.password === userInfo.signinPassword)){
    //   this.setToken('sdfghjk')
    //   return of (true)
    //  }

    return throwError(() => new Error('Failed login'))
  }
}
