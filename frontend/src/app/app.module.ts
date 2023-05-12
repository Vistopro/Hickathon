import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { ListAbsencesComponent } from './components/list-absences/list-absences.component';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { environment } from '../environments/environment';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { AddAbsenceComponent } from './components/add-absence/add-absence.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';




@NgModule({
  declarations: [
    AppComponent,
    ListAbsencesComponent,

    LoginComponent,
    NavbarComponent,
    AddUserComponent,
    UsersComponent,
    AddAbsenceComponent,
    EditUserComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
