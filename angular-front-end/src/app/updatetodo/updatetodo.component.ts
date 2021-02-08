import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{TodoserviceService}from '../todoservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {
t:any
  constructor(private service:TodoserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    let resp=this.service.getTodoById(id);
    resp.subscribe(d=>{
      this.t=d
    });
  }
update()
{
  let res=this.service.update(this.t);
  res.subscribe(d=>{
    console.log(d);
  })
  setTimeout( () => {this.router.navigate(['view']); }, 1000 );
  
}
}
