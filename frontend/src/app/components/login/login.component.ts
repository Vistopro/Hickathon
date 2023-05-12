import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private _loginService: loginService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  login(){
    if(this.email == '' || this.password == ''){
      alert('Please fill all the fields');
      return
  }
  // create an object of type Login
  const login: Login = {
    email: this.email, 
    password: this.password
  };
  // call the login method from the loginService

  this._loginService.login(login).subscribe({
    next:(data) => {

      this.router.navigate(['/manager/absences']);
      localStorage.setItem('token', data);
 
    }
      })

}
}
