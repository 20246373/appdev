import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  standalone: false,
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'] 
})
export class InstructionsComponent {
  Instructions = [
    'Unboxing: Carefully remove the keyboard and accessories from the box. ',
    'Connecting the keyboard: Plug the USB cable into an available USB port on your computer. The keyboard should be automatically recognized and ready for use. No additional drivers are required.',
    'Software installation: Download the configuration software from the manufacturers website if you wish to customize key functions or lighting. Follow the on-screen instructions to install the software.',
    'Keycap removal and installation: Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement. Replace keycaps by aligning them over the switch and pressing down until they click into place',
  ];
}
