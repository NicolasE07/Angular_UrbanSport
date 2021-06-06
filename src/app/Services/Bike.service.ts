import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info_product } from '../Models/bike'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BikeService {

  apiURL: String = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

 getBikePorId(id:String):Observable<Info_product>{
     return this.http.get<Info_product>(this.apiURL+"/product/getBikeById/"+id)
 }
} 