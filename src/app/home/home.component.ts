import { Component, OnInit } from '@angular/core';
import {Courses, CourseshttpService} from "../servises/courseshttp.service";
import {CommentsService, Reviews} from "../servises/comments.service";
import {Team, TeamService} from "../servises/team.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coursesMap: Courses[]=[]
  teamMap: Team[]=[]
  description: string
  constructor(private coursesService: CourseshttpService,
              private teamService: TeamService) {
  }

  ngOnInit(): void {
   this.coursesService.getCoursePreview().subscribe((data:any)=>
     this.coursesMap=data
   )
    this.teamService.getTeamView().subscribe((team:any)=>
    this.teamMap=team
    )
  }
}
