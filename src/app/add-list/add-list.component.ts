import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {
  cname:string=''
  cobj:Course=new Course();
  list:Course[]=[]
  addCourse()
  {
    this.cobj={coursename:this.cname,colorname:'red'}
    this.list.push(this.cobj)
  }
  
  // getCourse()
  // {
  //   return this.list;
  // }
  checkitem(courseobj:Course)
  {
    let i=0;
   
    for(;i<this.list.length;i++)
    {
      if(this.list[i].coursename==courseobj.coursename)
      {
        this.list[i].colorname='yellow'
      
      }
    }
  }
  
  }
  
  export class Course{
    coursename?:string;
    colorname?:string;
  }
