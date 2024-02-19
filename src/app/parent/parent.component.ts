import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  ParentMsg="Hi this is parent Msg"
  childMsg:any
  getChildData(data:any){
    this.childMsg=data
  }
}
