import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import{HeaderComponent}from'./header/header.component';
import { StudentformComponent } from './studentform/studentform.component';
import{AddtodoComponent}from'./addtodo/addtodo.component';
import{VietodoComponent}from'./vietodo/vietodo.component';
import{UpdatetodoComponent}from'./updatetodo/updatetodo.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'stdform', component: StudentformComponent },
  { path: 'todoform', component: AddtodoComponent },
  {path:'view',component:VietodoComponent},
  {path:'updateform/:id',component:UpdatetodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
