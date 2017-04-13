import { Component, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent {

  @ViewChild('popup1') popup1: Popup;
  clickButton() {
    this.popup1.options = {
      widthProsentage: 100, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "Save", // The text on your confirm button 
      cancleBtnContent: "Cancel", // the text on your cancel button 
      confirmBtnClass: "button is-primary", // your class for styling the confirm button 
      cancleBtnClass: "button is-light", // you class for styling the cancel button 
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    };
    this.popup1.show(this.popup1.options);
  }


}
