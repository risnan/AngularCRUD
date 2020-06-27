import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import {HttpClientModule} from "@angular/common/http";
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    EditUserComponent,
    AddUserComponent,
    
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
