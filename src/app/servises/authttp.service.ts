import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
export interface Person{
  id?: number,
  login: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthttpService {

  constructor( private http:HttpClient) { }
  getPerson():Observable<Person[]>{
    return  this.http.get<Person[]>('http://localhost:3000/person')
  }
}
