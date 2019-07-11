import { Injectable } from '@angular/core';
import { Subcourses } from '../subcourse.model';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcourseService {

  constructor(private http:HttpClient) { }
  // private _subcourse: Subcourses[] = [
  //   new Subcourses (
  //     'c1',
  //     's1',
  //     'angular'
  //   ),
  //   new Subcourses (
  //     'c1',
  //     's2',
  //     'node'
  //   ),
  //   new Subcourses (
  //     'c2',
  //     's1',
  //     'android'
  //   ),
  //   new Subcourses (
  //     'c2',
  //     's2',
  //     'ionic'
  //   ),

  //   ]
    getSubcourses(){
      

  // const course=this.http.get("http://localhost:3000/course/display");
   const course=this.http.get("http://localhost:3000/subCatergory/display");
 
   console.log(course);
   console.log("MMMMMMMMMMMMMMM")
   return course;
 
 }
    


  
}
