import { Component } from '@angular/core';

@Component({
  selector: 'app-key-features',
  standalone: false,
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.css'
})
export class KeyFeaturesComponent {
  features =[
    "Customizable RGB Backlighting: Personalized the keyboard's illumination with a wide range of colors and lighting effects.",
    "Mechanical switches: Cherry MX Red switches for a responsive and smooth typing experience",
    "Programmable keys: Assign macros and custom functions to any key with the included software.",
    "Anti-ghosting & N-Key rollover: Ensure accurate keypress registration during intense gaming session.",
    "Dedicated Media Controls: Easily control music and videos with dedicated media keys."
  ];
}
