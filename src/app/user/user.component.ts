import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { userModel } from '../Models/userModel';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[] = []
  name = ''
  lastName = ''
  email = ''
  role = ''
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.getUser()
  }

save() {
  var user = new userModel()
  user.name = this.name
  user.lastname = this.lastName
  user.email = this.email
  user.role = this.role
  console.log(user)
  this.apiService.saveUser(user).subscribe(result => {this.getUser()})
}

getUser() {
  this.apiService.getAllUsers().subscribe(res => {
    this.users = res
  })

}}
