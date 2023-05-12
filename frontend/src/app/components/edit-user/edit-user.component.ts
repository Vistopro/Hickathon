import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserService } from 'src/app/services/edit-user.service';
import { User } from 'src/app/interfaces/addUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  form: FormGroup;
 name: string = ''; 
  email: string = '';
  password: string = '';
  rol: string = '';
  absences: number = 0;
  department: string = '';
  user_id: number;
  


constructor(private fb: FormBuilder,
  private _editUserService: EditUserService,
  private router: Router,
  private aRouter: ActivatedRoute
) {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    rol: ['', Validators.required],
    absences: [null, Validators.required],
    department: ['', Validators.required],
  });
  this.user_id = Number(aRouter.snapshot.paramMap.get('id'));
}
ngOnInit(): void {
if(this.user_id != 0)
{
  this.getUserById(this.user_id);
}
}

getUserById(id: number) {
  this._editUserService.getUserById(id).subscribe(data => {
    this.form.setValue({
    name: data.name,
    email: data.email,
    password: data.password,
    rol: data.rol,
    absences: data.absences,
    department: data.department
  }
  );
  });
}


editUser() {  
  // Create an object with the data from the form
  const user: User = {
    name: this.form.value.name,
    email: this.form.value.email,
    password: this.form.value.password,
    rol: this.form.value.rol,
    absences: this.form.value.absences,
    department: this.form.value.department
  };
  if (this.user_id != 0) {

  this._editUserService.editUser( user).subscribe(data => {
    console.log('the user was edited');
    alert('User edited successfully');
    this.router.navigate(['/manager/users']);

  }
  );
}
}
}