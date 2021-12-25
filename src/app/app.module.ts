import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CloseBarComponent } from './close-bar/close-bar.component';
import { ControlSideBarComponent } from './control-side-bar/control-side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ListComponentComponent } from './list-component/list-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component'

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    CloseBarComponent,
    ControlSideBarComponent,
    NavBarComponent,
    FormulaireComponent,
    ListComponent,
    ListComponentComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    User2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
