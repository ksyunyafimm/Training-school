import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {Error404Component} from "./error404/error404.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";
import {CoursesComponent} from "./courses/courses.component";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about-us', component:AboutComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'contact-form', component: ContactFormComponent,
  canActivate:[AuthGuard],
  canDeactivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
