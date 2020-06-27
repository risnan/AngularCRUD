import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User;
  editForm: FormGroup;
  constructor(private formBilder:FormBuilder,private router:Router,private userService:UserService) { }

  ngOnInit() {
    let userId= localStorage.getItem("editUserId");
    if(!userId){
    alert("Invalid action")
    this.router.navigate(['list-user']);
    return;
  }
  this.editForm=this.formBilder.group({
    id:[],
  employee_name:['',Validators.required],
  employee_salary:['',Validators.required],
  employee_age:['',Validators.required],
  profile_image:['',Validators.required]
  });
  this.userService.getUserById(+userId)
  .subscribe(data => {
    this.editForm.setValue(data);
  });
  //console.log(this.userService.getUserById(+userId) as User);
  //this.editForm.setValue(this.userService.getUserById(+userId) );
  }
  onSubmit(){
    this.userService.updateUser(this.editForm.value)
    .subscribe(
      data => {
        this.router.navigate(['list-user']);
      },
      error =>{
        alert(error);
      });
//  this.userService.updateUser(this.editForm.value);
//  this.router.navigate(['list-user']);
  }
}
