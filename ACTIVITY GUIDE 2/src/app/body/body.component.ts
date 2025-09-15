import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  profile = {
    name: "Adrian Marc C. Bencila",
    title: "Software Developer",
    skills: ["Angular", "TypeScript", "HTML/CSS", "Responsive Design"],
    address: "#7011, Purok 7 Kias Baguio City, 2600",
    experience: [
      {
        role: "Web Developer",
        company: "Riot Games",
        period: "2022 - Present",
        description: "Developing and Maintaining Web Applications using Angular and related technologies."
      },
      {
        role: "Frontend Intern",
        company: "Steam",
        period: "2021 - 2022",
        description: "Assisted in building responsive user interfaces and implementing new features."
      }
    ],
    educationCollege: {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Baguio",
      year: "2027",
    },
    educationSeniorSchool: {
      strand: "STEM (Science, Technology, Engineering, and Mathematics)",
      schoolSeniorSchool: "University of the Cordillera",
      yearSeniorSchool: "2022-2024",
    },
    educationHighSchool: {
      grade: "Grade 1 - Grade 10",
      schoolHighSchool: "Baguio Patriotic High School",
      yearHighSchool: "2012-2022",
    },
    educationalAwards: [
      { award: "Dean's List", year: "2024", description: "Awarded for academic excellence." },
      { award: "Best Software Development Project", year: "2022", description: "Awarded for excellence in final year project." },
      { award: "Top 10 Students Award", year: "2021", description: "Recognized for top academic performance." }
    ],
    contact: {
      phone: "+639155342629",
    },
    internshipsAndWorkExperience: [
      {
        role: "Web Developer Intern at Riot Games",
        period: "(2022 - Present)",
        description: "Working on web application development and Angular-based projects."
      },
      {
        role: "Frontend Intern at Steam",
        period: "(2021 - 2022)",
        description: "Assisted in creating responsive interfaces and enhancing user experience."
      },
      {
        role: "Freelance Web Developer",
        period: "(2020)",
        description: "Developed custom websites for clients using HTML, CSS, and JavaScript."
      }
    ],
    currentlyEnrolledCourses: [
      { course: "PATHFIT3D - Bowling", teacher: "Lorie Daodao" },
      { course: "DSALGO1 - Data Structures and Algorithms", teacher: "Hydi Toyeng" },
      { course: "DITRUC2 - Discrete Structures 2", teacher: "Jereme Moses Ebreo" },
      { course: "GETHCS1 - Ethics", teacher: "Nicanor Bastian Jr." },
      { course: "IMDBSE1 - Information Management and Database Systems", teacher: "Diving Aguilar-Agudong" },
      { course: "APPDEV1 - Introduction to Applications Development", teacher: "Jereme Moses Ebreo" },
      { course: "PROGIT2 - Object-Oriented Programming", teacher: "Meynard Soriano" },
      { course: "ITMGNT1 - Project Management", teacher: "Hydi Toyeng" }
    ]
  };
}
