import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routers:Routes=[
    {path:'login',component:LoginComponent},
    {path:'add-user',component:AddUserComponent},
    {path:'list-user',component:ListUserComponent},
    {path:'edit-user',component:EditUserComponent},
    {path:'',component:LoginComponent}
];

export const routing=RouterModule.forRoot(routers);