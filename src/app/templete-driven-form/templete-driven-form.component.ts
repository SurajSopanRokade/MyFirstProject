import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templete-driven-form.component.html',
  styleUrl: './templete-driven-form.component.css'
})
export class TempleteDrivenFormComponent {
  form={
    fullName:"",
    userName:"",
    email:"",
    password:"",
    acceptTerms:false
  }

  OnSubmit(){
    console.log(this.form)
  }
  OnReset(form1:NgForm){
    this.form1.Res
  }
}
