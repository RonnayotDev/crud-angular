import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users, } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  baseURL:string = 'https://www.mecallapi.com/api/users'

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get<any>(`${this.baseURL}`)
  }
  getView(id : number){
    return this.http.get<any>(`${this.baseURL}/${id}`)
  }
  getCreate(userObj : any){
    return this.http.post<any>(`${this.baseURL}/create`,userObj)
  }
  getDelete(id: number){
    return this.http.delete<any>(`${this.baseURL}/delete/${id}`)
  }
  getUpdate( id:number ,userObj : any){
    return this.http.put<any>(`${this.baseURL}/update/${id}`,userObj)
  }
}
