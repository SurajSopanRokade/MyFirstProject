import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input()MyinputData:string=''
    @Output()MyOutput:EventEmitter<string>= new EventEmitter()
    outputmsg="This is my msg from child"
    sendChildData(){
      this.MyOutput.emit(this.outputmsg)
    }
}
