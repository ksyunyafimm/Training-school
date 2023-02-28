import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Team{
  id?: number,
  author: string,
  qualification: string,
  img_author: string
}
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }
  getTeamView():Observable<Team[]>{
    return this.http.get<Team[]>('http://localhost:3000/team')
  }
}
