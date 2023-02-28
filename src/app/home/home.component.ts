import { Component, OnInit } from '@angular/core';
import {Courses, CourseshttpService} from "../servises/courseshttp.service";
import {CommentsService, Reviews} from "../servises/comments.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coursesMap: Courses[]=[]
  reviewsMap: Reviews[]=[]
  headText: string
  description: string
  currentIndex: number = 0
  constructor(private coursesService: CourseshttpService,
              private  commentsService: CommentsService) {

  }

  ngOnInit(): void {
   this.coursesService.getCoursePreview().subscribe((data:any)=>
     this.coursesMap=data
   )
    this.commentsService.getCommentView().subscribe((com:any)=>
      this.reviewsMap=com
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
