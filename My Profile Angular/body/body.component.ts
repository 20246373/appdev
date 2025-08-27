import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  //array of colors
  colors: string[] = ["#2c3e50", "#e74c3c", "#3498db", "#9b59b6", "#1abc9c", "#f39c12"]
  currentColorIndex: number = 0;

  //function to change the color of the name
  changeNameColor(){
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  }

  //get the current color
  get currentColor(): string {
    return this.colors[this.currentColorIndex];

  }

  profile = {
    name: "Adrian Marc C. Bencila",
    title: "Software Developer",
    about: "Passionate about creating applications",
    skills: ["Angular", "TypeScript", "HTML/CSS", "Responsive Design"],
    experience: [
      {
      role: "Web Developer",
      company: "Riot Games",
      period: "2022 - Present",
      description: "Developing and Maintaining Web Applicaations using Angular and related technologies.",
      },
      {
      role: "Frontend Intern",
      company: "Steam",
      period: "2021 - 2022",
      description: "Assisted in building responsive user intefaces and implementing new features.",
      },
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Baguio",
      year: "2027",
    },
    contact: {
      email: "20246373@s.ubaguio.edu",
      phone: "911",
      location: "Baguio, Philippines"
    }
  }
}
