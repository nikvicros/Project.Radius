import { Component } from '@angular/core';
import { trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor:'orange',
        width:'100px',
        height:'100px'
      })),
      state('clicked', style({
        backgroundColor:'blue',
        width:'100px',
        height:'100px'
      }))
    ])
  ]
})
export class SandboxComponent {
  clickInfo= 'default'
}
