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
  name = ''
  lastName = ''
  email = ''
  role = ''
  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
  }

save() {
  var user = new userModel()
  user.name = this.name
  user.lastname = this.lastName
  user.email = this.email
  user.role = this.role
  console.log(user)
  this.apiservice.saveUser(user).subscribe(result => {console.log(result)})
}
}
