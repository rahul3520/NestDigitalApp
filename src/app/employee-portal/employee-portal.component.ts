import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {

  empID=""
  password=""

  data:any={"empID":this.empID,"password":this.password}

  constructor(private route:Router){}

  empLogin=() =>
  {

    if(this.empID=="1122" && this.password=="12345")
    {
        this.route.navigate(["/empPage"])
    }
    else
    {
        alert("invalid credentials")
        this.empID=""
        this.password=""
    }
  }

}
