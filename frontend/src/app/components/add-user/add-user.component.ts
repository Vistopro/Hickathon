import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from 'src/app/services/add-user.service';
import { User } from 'src/app/interfaces/addUser';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
name: string = '';
email: string = '';
password: string = '';
rol: string = '';
absences: number = 0;
department: string = '';

constructor(
  private _addUserService: AddUserService,
  private router: Router
) { }

addUser() {
  //Validate there are no empty fields
  if (this.name == '' || this.email == '' || this.password == '' || this.rol == '' || this.absences == 0 || this.department == '') {
    alert('Please fill all fields');
    return;
  }
  // Create an object with the data from the form
  const user: User = {
    name: this.name,
    email: this.email,
    password: this.password,
    rol: this.rol,
    absences: this.absences,
    department: this.department
  };
  // Send the request to the server
  console.log(user);

  this._addUserService.addUser(user).subscribe(data => {
    console.log('the user was added');
    alert('User added successfully');
    this.router.navigate(['/manager/absences']);
  
  }
  )
}

}