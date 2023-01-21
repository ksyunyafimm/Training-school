import { Component, OnInit } from '@angular/core';
import {Courses, CourseshttpService} from "../servises/courseshttp.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coursesMap: Courses[]=[]
  headText: string
  description: string
  constructor(private coursesService: CourseshttpService) { }

  ngOnInit(): void {
   this.coursesService.getCoursePreview().subscribe((data:any)=>
     this.coursesMap=data
   )
  }

}
