import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Models/Contact-us'

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  apirURL: String = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  sendContact(formData) {
    return this.http.post<Contact>(`${this.apirURL}/contact/create`, formData)

  }
}