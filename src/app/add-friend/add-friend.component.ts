import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {

  name=""
  friendName=""
  friendNickname=""
  DescribeYourFriend=""

  constructor(private api:ApiService){}

  addFriend=()=>
  {
    let data:any={"name":this.name,
    "friendName":this.friendName,
    "friendNickname":this.friendNickname,
    "DescribeYourFriend":this.DescribeYourFriend
    }

    console.log(data)

    this.api.addFriends(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("friend added successfully!")
        }
        else
        {
          alert("Failed to add friend")
          this.name=""
          this.friendName=""
          this.friendNickname=""
          this.DescribeYourFriend=""

        }
      }
    )

  }

}
