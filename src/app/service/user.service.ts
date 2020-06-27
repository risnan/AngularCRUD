import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  constructor(private http:HttpClient) { }
   baseUrl:string="http://localhost:3000/User";

//  fakeUsers:User[]=
//  [{id:1,employee_name:"Tiger Nixon",employee_salary:320800,employee_age:61,profile_image:""},
//  {id:2,employee_name:"Garrett Winters",employee_salary:170750,employee_age:63,profile_image:""},
//  {id:3,employee_name:"Ashton Cox",employee_salary:86000,employee_age:66,profile_image:""},
//  {id:4,employee_name:"Cedric Kelly",employee_salary:433060,employee_age:22,profile_image:""},

  getUsers(){

   //return of(this.fakeUsers);
  return this.http.get<User[]>(this.baseUrl);
   }

   createUser(user:User){
    //user.id=5;
    //return of(this.fakeUsers.push(user));
    return this.http.post(this.baseUrl, user)
   }

   updateUser(user:User){
    //  let updateItem=this.fakeUsers.find(this.findIndexToUpdate, user.id);
    //  let index=this.fakeUsers.indexOf(updateItem);
    //  return of( this.fakeUsers[index]=user);
       return this.http.put(this.baseUrl + '/' + user.id, user);
   }

  getUserById(id:number){
    // var obj=this.fakeUsers.filter(x =>x.id===id)[0];
    // return of(obj);
     return this.http.get<User>(this.baseUrl + '/' + id);
  }

  findIndexToUpdate(newItem){
    return newItem.id===this;
  }

  deleteUser(id:number){
    // const index=this.fakeUsers.findIndex(fakeUsr=>fakeUsr.id===id);
    // return of(this.fakeUsers.splice(index,1));
    return this.http.delete(this.baseUrl + '/' +id);
  }

 
}

