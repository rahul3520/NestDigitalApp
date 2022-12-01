import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-courses',
  templateUrl: './viewall-courses.component.html',
  styleUrls: ['./viewall-courses.component.css']
})
export class ViewallCoursesComponent {

  constructor(private api:ApiService)
  
  {
    api.fetchCourses().subscribe(

      (response:any)=>
      {
        this.loading=false

        console.log(response)
        this.courses=response;
      }
    )

  }

  courses:any=[]

  loading:boolean=true

}
