import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
export interface Reviews{
  id?: number,
  text: string,
  name: string,
  course: string,
  img: string
}
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private httpClient: HttpClient) { }
  getCommentView():Observable<Reviews[]>{
    return  this.httpClient.get<Reviews[]>('http://localhost:3000/reviews')
  }
}
