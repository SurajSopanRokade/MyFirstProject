import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
    MyContact!:Contact
    ngOnInit(): void {
        this.MyContact={
          firstName:"",
          lastName:"",
          email:"",
          gender:""
        }
    }
    OnSubmit(){
      console.log(this.MyContact)
    }
}
export class Contact{
    firstName!:string
    lastName!:string
    email!:string
    gender!:string
}


