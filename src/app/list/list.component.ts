import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
tab:any[]=[]
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getArrayFromServer()
  }

  getArrayFromServer(){
    this.apiService.getArray().subscribe(abc=>{
      
      this.tab=abc
      console.log(this.tab)
    })
  }

  Selectionner(id: number) {
    this.apiService.getElement(id).subscribe(res=> {
      console.log(res)
    })
  }

  Supprimer(id: number) {
    this.apiService.Delete(id).subscribe(res=> {
      this.tab = res

  })

}}
