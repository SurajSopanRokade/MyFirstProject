import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WordCountPipe } from '../word-count.pipe';
import { PowerFunPipe } from '../power-fun.pipe';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule,WordCountPipe,PowerFunPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {
  msg:string="India is my country"
  amount:number=78000
  today=new Date()
  Base=2;
  Expo=3;

  show(...a: any[]): void {
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
    }
  }
 
  
}
