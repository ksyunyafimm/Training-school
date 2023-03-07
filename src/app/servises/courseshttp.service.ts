import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
 export interface Courses {
   id? : number,
   type: string,
   name: string,
   price: string,
   author: string,
   img: string,
   img_course: string,
   course_info: string

 }
@Injectable({
  providedIn: 'root'
})
export class CourseshttpService {

  constructor(private http: HttpClient) { }
  getCoursePreview():Observable<Courses[]>{
    return this.http.get<Courses[]>('http://localhost:3000/courses')
  }
}
