import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { UserLogged } from '../Models/userLogged';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getArray():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/all")
  }
  getElement(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:3000/getbyid/"+id)
  
  }
  Delete(id:number):Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/delete/"+id)
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/user/all")
  }

  saveUser(user:any){
    return this.http.post("http://localhost:3000/user/add",user)
  }

  deleteUser(id : string){
    return this.http.get<User[]>("http://localhost:3000/user/delete/" + id)
  }

  loginUser(user:any):Observable<UserLogged>{
    return this.http.post<UserLogged>("http://localhost:3000/user/login",user)
  }
}
