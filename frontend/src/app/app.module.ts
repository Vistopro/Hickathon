import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { ListAbsencesComponent } from './components/list-absences/list-absences.component';
import { AddEditAbsencesComponent } from './components/add-edit-absences/add-edit-absences.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { environment } from '../environments/environment';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAbsencesComponent,
    AddEditAbsencesComponent,
    LoginComponent,
    NavbarComponent,
    AddUserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
