import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchCourses=() =>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }

  // "http://mylinkurcodesapp.herokuapp.com/addcourse"
  

  fetchFriends=() =>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }


  addCourses=(dataToSend:any) =>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/getcourses",dataToSend)
  }

  addFriends=(dataToSend:any) =>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/view",dataToSend)
  }
}
