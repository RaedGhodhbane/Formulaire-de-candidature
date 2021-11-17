import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
message = ""
form : FormGroup;
  constructor(private apiService : ApiService, fb: FormBuilder) { 
    this.form = fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })

    this.user = new User()
  }

  ngOnInit(): void {
    console.log('before send api',this.user)
  }

login() {
  console.log(this.form.value)
  this.apiService.loginUser(this.form.value).subscribe(res => {

    this.user._id = res.user._id
    this.user.email = res.user.email
    this.user.name = res.user.name
    this.user.lastname = res.user.lastname
    this.user.role = res.user.role
    this.message = res.message
    console.log('after send api',this.user)
  });
}
}
