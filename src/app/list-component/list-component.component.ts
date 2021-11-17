import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidat } from '../Models/candidat';
import { User } from '../Models/user';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
users:User[]=[];
form : FormGroup;
candidats : Candidat[] = [];
i=0;
  constructor(private apiService: ApiService , fb : FormBuilder) { 
    this.form = fb.group({
      name : ['', Validators.required],
      lastname : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      role : ['', Validators.required],
    })
   }

  ngOnInit(): void {
  this.getUsersFromServer()
  this.form.valueChanges.subscribe(a=> {
  this.i++;
})

  }

valider(){
this.apiService.saveUser(this.form.value).subscribe(abc => {
this.getUsersFromServer()
  }) 
}
getUsersFromServer() {
  this.apiService.getAllUsers().subscribe(abc => {

    this.users = abc
  })

 

}

delete(id:string) {
  this.apiService.deleteUser(id).subscribe(res => {
    this.getUsersFromServer()
  })

}


}


