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
  reviewsMap: Reviews[]=[]
  teamMap: Team[]=[]
  description: string
  currentIndex: number = 0
  constructor(private coursesService: CourseshttpService,
              private  commentsService: CommentsService,
              private teamService: TeamService) {

  }

  ngOnInit(): void {
   this.coursesService.getCoursePreview().subscribe((data:any)=>
     this.coursesMap=data
   )
    this.commentsService.getCommentView().subscribe((com:any)=>
      this.reviewsMap=com
    )
    this.teamService.getTeamView().subscribe((team:any)=>
    this.teamMap=team
    )
  }
  onClickNextButton(){
    if (this.currentIndex < this.reviewsMap.length) {
      this.currentIndex++
    }
  }
  onClickPreviousButton(){
    if (this.currentIndex < this.reviewsMap.length){
      this.currentIndex--
    } else if (this.currentIndex = this.reviewsMap.length){
      this.currentIndex = this.reviewsMap.length -1
    }
  }
}
