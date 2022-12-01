import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {

  name=""
  companyName=""
  designation=""
  email=""
  phoneNo=""
  country=""
  subject=""

  readValue=()=>
  {
      let data:any={
        "name":this.name,
        "companyName":this.companyName,
        "designation":this.designation,
        "email":this.email,
        "phoneNo":this.phoneNo,
        "country":this.country,
        "subject":this.subject
    }

    console.log(data)
  }

}
