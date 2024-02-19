import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-httpuse-component',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  providers:[MyHttpService],
  templateUrl: './my-httpuse-component.component.html',
  styleUrl: './my-httpuse-component.component.css'
})
export class MyHttpuseComponentComponent implements OnInit{
  user:any
  constructor(public MyClient:MyHttpService){
  }
  ngOnInit():void{
    this.MyClient.getData().subscribe((e:any)=>this.user=e.data) 
    console.log(this.user)   
  }
}
