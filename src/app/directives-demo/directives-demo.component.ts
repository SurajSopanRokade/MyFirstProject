import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {
  // show:boolean=false
  //  age:any
  // color:string='red';
  // num1:number=67
  // num2:number=34

  // numcheck:number=23

  // numcheck2:number=55;

  // snum:number=3

  // wnum:number=6
  employee:any[]
  movie:any[]
  student:any[]
  employee2:any[]
  constructor(){
    this.employee=[
      {eid:101, ename:'Abhishek', salary:67000},
      {eid:102, ename:'Suraj', salary:65000},
      {eid:101, ename:'Aadersh', salary:69000},
    ]
    this.movie=[
       {mtitle:'Inception', director:' Christopher Nolan', ticket:230, releaseDate:'7/6/2010'},
       {mtitle:'The Shawshank Redemption', director:' Frank Darabont', ticket:250, releaseDate:'23/11/1994'},
       {mtitle:'La La Land', director:' Damien Chazelle', ticket:270, releaseDate:'9/12/2016'},
     ]
     this.student=[
      {sid:1, sname:'Suraj', Marks:50},
      {sid:2, sname:'Abhishek', Marks:98},
      {sid:3, sname:'Yogesh', Marks:99},
      {sid:4, sname:'Pritam', Marks:100},
      {sid:5, sname:'Aadersh', Marks:93}
    ]
    this.employee2=[
      {code:'emp101', name:'Yash', gender:'male', annualsalary:55000.1, DateOfBirth: new Date('5/24/1991')},
      {code:'emp102', name:'Sara', gender:'female', annualsalary:95000.1, DateOfBirth:new Date('4/8/2000')},
      {code:'emp103', name:'Ram', gender:'male', annualsalary:100000, DateOfBirth: new Date('12/16/1990')},
      {code:'emp104', name:'Sita', gender:'female', annualsalary:150000.1, DateOfBirth:new Date('1/25/1995')}
    ]
  }

  //ng if else demo without ng
   age:any
   color:any
   num:any

   num1:any
   num2:any
   num3:any
  }

