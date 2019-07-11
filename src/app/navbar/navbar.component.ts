import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loadedCourses: any//Course[];
 
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    // console.log("navbar")
    // this.loadedCourses = this.courseService.getCourses();
    console.log("ng on init")
    this.courseService.getCourses()
    .subscribe(response => {
      this.loadedCourses=response;
      console.log(response);
      //console.log(this.Course);
     // console.log(this.Course.name);
     // console.log(this.Course.duration);
    // this.Course = response["Videos"];
    });
  
  }

}
