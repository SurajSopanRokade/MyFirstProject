import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-course.component.html',
  styleUrl: './select-course.component.css'
})
export class SelectCourseComponent {
  number:any='';   
      Enroll(){
        console.log(this.number);
       return this.number;
      }
}
