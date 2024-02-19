import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {

  data:string="";
  data1: any;
  data2: any;
  data3: any;

  dat1:any;
  dat2:any;
  dat3:any;
  
  addEmployee(): void {
    this.dat1=this.data1
    this.dat2=this.data2
    this.dat3=this.data3
  }
  

}
