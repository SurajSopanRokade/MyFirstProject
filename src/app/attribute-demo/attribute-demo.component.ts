import { CommonModule } from '@angular/common';
import { sanitizeIdentifier } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-demo.component.html',
  styleUrl: './attribute-demo.component.css'
})
export class AttributeDemoComponent {
  isBold:boolean=true
  isitalic:boolean=true
  color:string='red'
  fontsize:number=50

  applyClass(){
    let classes={
      boldClass:this.isBold,
      italicClass:this.isitalic
    }
    return classes
  }

  applyStyle(){
    let style={
      'color':this.color,
      'font-size.px': this.fontsize
    }
    return style
  }
  
}
