import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import{TodoserviceService}from '../todoservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
t:Todo=new Todo(1,'','');
msg:any;
  isvisible=false;
  constructor(private service:TodoserviceService,private router:Router) { }

  ngOnInit(): void {

  }
  add()
  {
let response=this.service.addtodo(this.t);
response.subscribe(data=>{
  this.msg=data;
  this.isvisible=false;
  console.log(data)
  setTimeout( () => {this.router.navigate(['view']); }, 1000 );
  
});

  }
}
