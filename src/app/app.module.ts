import { SubcourseService } from './services/subcourse.service';
import { CourseService } from './services/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContentproviderComponent } from './contentprovider/contentprovider.component';
import { AddcourseComponent } from './contentprovider/addcourse/addcourse.component';
import { SubcateroiesPipe } from './pipes/subcateroies.pipe';
import { MycoursesComponent } from './user/mycourses/mycourses.component';
import { AccountComponent } from './user/account/account.component';
import { MaincategoriesPipe } from './pipes/maincategories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplaycoursesComponent,
    NavbarComponent,
    HomeComponent,
    ContentproviderComponent,
    AddcourseComponent,
    SubcateroiesPipe,
    MycoursesComponent,
    AccountComponent,
    MaincategoriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService,SubcourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
