import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  constructor(private api:ApiService){}

  addCourse=()=>
  {
    let data:any={"courseTitle":this.courseTitle,
    "courseDescription":this.courseDescription,
    "courseDuration":this.courseDuration,
    "courseDate":this.courseDate,
    "courseVenue":this.courseVenue
    }

    console.log(data)

    this.api.addCourses(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if (response.status == "success") 
        {
            alert("course added successfully!")
        } 
        else 
        {
            alert("Failed to add course") 
            this.courseTitle=""
            this.courseDescription=""
            this.courseDuration=""
            this.courseDate=""
            this.courseVenue=""

        }
      }
    )

  }


  data:any=[]

}
