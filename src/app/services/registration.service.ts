import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registrationUrl = "http://localhost:8080/user/register";

  constructor(private http : HttpClient) { }

  registerUser(user: User) {
  
  	return this.http.post<any>(this.registrationUrl, user);
  	
  }

}
