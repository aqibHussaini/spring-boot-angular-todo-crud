import { Component, OnInit } from '@angular/core';
import{TodoserviceService}from '../todoservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vietodo',
  templateUrl: './vietodo.component.html',
  styleUrls: ['./vietodo.component.css']
})
export class VietodoComponent implements OnInit {
  todo:any;
  constructor(private service:TodoserviceService,private router:Router) { }

  ngOnInit(): void {
let response=this.service.viewtodo();
response.subscribe(res=>{
  this.todo=res;
 console.log("message = "+res)
})
  }
  update(id)
  {
   this.router.navigate(['updateform',id]);
  }
  delete(id:number)
  {
    let res=confirm('are you sure')
    if(res==false)
    {
    }
    else 
    {

      this.service.delete(id).subscribe(d=>{console.log(d)});
      setTimeout( () => {this.router.navigate(['view']); }, 1000 );
  
    }
  }
}
