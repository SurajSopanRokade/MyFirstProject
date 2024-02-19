import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutUsComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Interpolation
  cityname:string='Pune'
  msg:string='';
  getData(){
    return "Hello i am in HomeComponent"
  }
  //property binding
  path:string="./assets/Gulab.jpg";
  isdisabled:boolean=false

  onMyClick(){
    this.msg=this.msg+" "+"hi this is event"

}

  data:string="";
}

