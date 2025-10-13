import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] 
})
export class LandingComponent {
  title: string = 'Welcome to the Johto Region';
  description: string = `The Johto Region is a beautiful land filled with rich culture, history, and, of course, amazing Pokémon. It’s home to some of the most talented trainers, exciting adventures, and legendary Pokémon that have captivated trainers from all over the world.`;
  introText: string = `As a new trainer, you’ll embark on a journey through vibrant cities and rugged terrain, each with its own unique charm. But, the most exciting part of your journey will be challenging the Gym Leaders, each with their own Pokémon specialties. Are you ready to collect all the Johto Gym Badges and prove your worth as the ultimate Pokémon Champion?`;
  gymLeadersText: string = `Each Gym Leader is an expert in a specific type of Pokémon, and they are waiting for you to challenge them. From the Flying-type expert Falkner to the Dragon-type master Clair, these leaders will push you to your limits. With every Gym Leader you defeat, you'll grow as a trainer and gain valuable experience.`;
  journeyText: string = `So, grab your Poké Balls, call your first Pokémon, and let’s get started. The Johto Region awaits, full of thrilling challenges, hidden treasures, and unforgettable encounters.`;
  callToActionText: string = `Start by learning about the Gym Leaders who will test your skills along the way. The road to becoming a Pokémon Champion is long, but with determination, strategy, and a good team, you’ll be ready for anything.`;
}


