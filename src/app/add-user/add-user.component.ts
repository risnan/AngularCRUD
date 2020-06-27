import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  

  constructor(private formBuilder:FormBuilder,private router:Router ,private userService:UserService ) { }

  addForm:FormGroup;

  ngOnInit() {
  this.addForm=this.formBuilder.group({
  id:[],
  employee_name:['',Validators.required],
  employee_salary:['',Validators.required],
  employee_age:['',Validators.required],
  profile_image:['',Validators.required]
  });
  }

    onSubmit(){
   this.userService.createUser(this.addForm.value)
    .subscribe(date=>{
     this.router.navigate(['list-user']);
    });
    //  this.userService.createUser(this.addForm.value);
    //  this.router.navigate(['list-user']);
   }


  }
   

