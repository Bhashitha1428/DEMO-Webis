import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subcourses } from '../subcourse.model';
import { SubcourseService } from '../services/subcourse.service';
import { CourseService } from '../services/course.service';
import { Course } from '../course.model';


@Component({
  selector: 'app-displaycourses',
  templateUrl: './displaycourses.component.html',
  styleUrls: ['./displaycourses.component.css']
})
export class DisplaycoursesComponent implements OnInit {
  loadedSubCourses:any //Subcourses[];
  loadedCourses:any //Course[];
   course1: {id: string };
   course2: { id: string}
   
  //  maincourses = ['node', 'js','angular','phython','springboot','jsp'];
  // courses = ['c1', 'c2', 'c3' , 'c4', 'c5' ]

  constructor(private route: ActivatedRoute, private subCourseService: SubcourseService, private coursesService: CourseService ) { }

  ngOnInit() {
   
    this.loadedCourses = this.coursesService.getCourses().subscribe(response => {
      this.loadedCourses=response;
      console.log(response);
      //console.log(this.Course);
     // console.log(this.Course.name);
     // console.log(this.Course.duration);
    // this.Course = response["Videos"];
    });;
    this.course1 = {
      id: this.route.snapshot.params['catergory']
    };
    
    this.course2 = {
      id: this.route.snapshot.params['subCatergory']
    };
    
    
    this.route.params.subscribe(
      (params: Params) => {
        this.course1.id = params['catergory'];
      }
    )
    this.route.params.subscribe(
      (params: Params) => {
        this.course2.id = params['subCatergory'];
      }
    )
    
    this.loadedSubCourses = this.subCourseService. getSubcourses(this.course1.id).subscribe(response => {
      this.loadedCourses=response;
      console.log(response);
      //console.log(this.Course);
     // console.log(this.Course.name);
     // console.log(this.Course.duration);
    // this.Course = response["Videos"];
    });

  }

}
