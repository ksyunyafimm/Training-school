import { Component, OnInit } from '@angular/core';
import {CommentsService, Reviews} from "../servises/comments.service";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  reviewsMap: Reviews[]=[]
  currentIndex: number = 0
  constructor(private  commentsService: CommentsService,) { }

  ngOnInit(): void {
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
