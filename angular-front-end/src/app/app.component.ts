import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { Student } from '../app/student';
import { RootObject } from '../app/student';
import { Content } from '../app/student';
import { MatTableDataSource } from '@angular/material/table';
import{StudentserviceService}from '../app/studentservice.service';
import {MatPaginator} from '@angular/material/paginator';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  ELEMENT_DATA :Content[]=[];
  page:Array<any>;
  displayedColumns: string[] = ['id','name','classname','marks'];
  pageSizeOptions:number[]= [1,2,3,4];
  dataSource = new MatTableDataSource<Content>(this.ELEMENT_DATA);
  constructor(private service:StudentserviceService) {


   }
   @ViewChild(MatPaginator) paginator: MatPaginator;
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  
  }
  ngOnInit() {
   
    this.getAllReports(1);
  }
  public getAllReports(n:any){
    // let resp = this.service.getAllstudents(n);
    // resp.subscribe(report=>
    //   {
    //     // console.log(report['content'])
    //     this.dataSource.data=report['content'];
    //    this.page=new Array(report['totalPages']);
      
       
    //   }
  
    //   );
  //  resp.subscribe(report=>this.dataSource.data=report as Content[])
  }
 public onClickMe(n:any)
  {
    console.log('value '+n);
    this.getAllReports(n);
  }
}
