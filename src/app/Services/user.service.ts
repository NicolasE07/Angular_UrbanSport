import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apirURL: String = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  registerUser(formData) {
    return this.http.post<User>(`${this.apirURL}/user/create`, formData)

  }
} 
