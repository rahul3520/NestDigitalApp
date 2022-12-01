import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {

  ID=""
  firstName=""
  lastName=""
  houseNo=""
  houseName=""
  streetName=""
  Pincode=""
  District=""
  State=""
  Country=""
  mobileNo=""
  emailID=""
  parentName=""
  Gender=""
  highestDegree=""
  YearofExperience=""
  DateofJoining=""
  username=""
  password=""
  confirmPassword=""

  

  checkPassword=()=>
  {
    if (this.password==this.confirmPassword) {

      let data:any={"ID":this.ID,"firstName":this.firstName,"lastName":this.lastName,"houseNo":this.houseNo,"houseName":this.houseName,
      "streetName":this.streetName,"Pincode":this.Pincode,"District":this.District,"State":this.State,"Country":this.Country,
      "mobileNo":this.mobileNo,"emailID":this.emailID,"parentName":this.parentName,"Gender":this.Gender,"highestDegree":this.highestDegree,
      "YearofExperinence":this.YearofExperience,"DateofJoining":this.DateofJoining,"username":this.username,"password":this.password,
      "confirmPassword":this.confirmPassword}


      console.log(data)
      
      alert("Employee registered successfully")
      
    } else {
      
      alert("password and confirm password doesn't match")
      // this.ID=""
      // this.firstName=""
      // this.lastName=""
      // this.houseNo=""
      // this.houseName=""
      // this.streetName=""
      // this.Pincode=""
      // this.District=""
      // this.State=""
      // this.Country=""
      // this.mobileNo=""
      // this.emailID=""
      // this.parentName=""
      // this.Gender=""
      // this.highestDegree=""
      // this.YearofExperience=""
      // this.DateofJoining=""
      // this.username=""
      this.password=""
      this.confirmPassword=""

    }
  }

}
