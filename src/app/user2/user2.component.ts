import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
users : User[] = [];
form : FormGroup;

  constructor(private apiService: ApiService , private fb : FormBuilder) { 
    this.form = fb.group({
      name : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', Validators.required],
      role : ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getUser()
  }

save() {
  this.apiService.saveUser(this.form.value).subscribe(result => {this.getUser()})
}

getUser() {
  this.apiService.getAllUsers().subscribe(res => {
    this.users = res
    console.log(this.users)
  })


}

delete(id: string ) {
  this.apiService.deleteUser(id).subscribe(res=> {
    this.getUser()
  })
}}


