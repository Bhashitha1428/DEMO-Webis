import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplaycoursesComponent } from './displaycourses/displaycourses.component';
import { ContentproviderComponent } from './contentprovider/contentprovider.component';
import { AddcourseComponent } from './contentprovider/addcourse/addcourse.component';
import { AccountComponent} from './user/account/account.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent},

  {path: 'displaycourses/:catergory', component: DisplaycoursesComponent},
  {path: 'displaycourses/:catergory/:subCatergory', component: DisplaycoursesComponent},
  {path: 'displaycourses', component: DisplaycoursesComponent},
  {path: 'contentprovider', component: ContentproviderComponent},
  {path: 'addcourse', component: AddcourseComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
