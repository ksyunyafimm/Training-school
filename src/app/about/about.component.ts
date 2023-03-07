import { Component, OnInit } from '@angular/core';
import {Courses, CourseshttpService} from "../servises/courseshttp.service";
import {Team, TeamService} from "../servises/team.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  coursesPreview : Courses[]=[]
  teamMap: Team[]=[]
  constructor(private coursesPreviewService: CourseshttpService,
              private teamService: TeamService) { }

  ngOnInit(): void {
    this.coursesPreviewService.getCoursePreview().subscribe((course:any)=>
    this.coursesPreview=course
    )
    this.teamService.getTeamView().subscribe((team:any)=>
    this.teamMap=team
    )
  }

}
