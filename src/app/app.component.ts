import { Component } from '@angular/core';
import {HttpClient,HttpEventType} from '@angular/common/http';
import { Http } from '@angular/http';
import { User } from './model/user';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
 export class AppComponent {
  userList: User[];
  
 constructor(private http: Http) { }
 getUserData() {
  this.http.get('http://localhost:3004/posts')
  .subscribe(res => this.userList =
  res.json() as User[]);
 }
  
 }