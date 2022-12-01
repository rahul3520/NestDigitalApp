import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ViewallCoursesComponent } from './viewall-courses/viewall-courses.component';
import { ViewallFriendsComponent } from './viewall-friends/viewall-friends.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmpPageComponent } from './emp-page/emp-page.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component'


const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"aboutUS",
    component:AboutUSComponent
  },
  {
    path:"contactUS",
    component:ContactUSComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"adminPage",
    component:AdminPageComponent
  },
  {
    path:"viewallCourses",
    component:ViewallCoursesComponent
  },
  {
    path:"viewallFriends",
    component:ViewallFriendsComponent
  },
  {
    path:"employeePortal",
    component:EmployeePortalComponent
  },
  {
    path:"employeeRegistration",
    component:EmployeeRegistrationComponent
  },
  {
    path:"addFriend",
    component:AddFriendComponent
  },
  {
    path:"addCourse",
    component:AddCourseComponent
  },
  {
    path:"empPage",
    component:EmpPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutUSComponent,
    ContactUSComponent,
    GalleryComponent,
    AdminLoginComponent,
    AdminPageComponent,
    ViewallCoursesComponent,
    ViewallFriendsComponent,
    EmployeePortalComponent,
    EmployeeRegistrationComponent,
    EmpPageComponent,
    AddCourseComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
