import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
path:'home',
component:HomeComponent,
children:[
  {
    path: 'formulaire',
    component: FormulaireComponent
},
{
path:'list',
component: ListComponent
},
{
path:'users',
component :ListComponentComponent
}
]
}


  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
