import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leader-detail',
  standalone: false,
  templateUrl: './leader-detail.component.html',
  styleUrls: ['./leader-detail.component.css']
})
export class LeaderDetailComponent {
  leaderId: string | null = null;

  leaders: any = {
    falkner: {
      name: 'Falkner',
      city: 'Violet City',
      specialty: 'Flying',
      badge: 'Zephyr Badge',
      description: 'The first Gym Leader of Johto, specializing in Flying-type Pokémon like Pidgey and Pidgeotto.',
      image: 'falkner.jpg'
    },
    bugsy: {
      name: 'Bugsy',
      city: 'Azalea Town',
      specialty: 'Bug',
      badge: 'Hive Badge',
      description: 'Known as the “Walking Bug Pokémon Encyclopedia.” Uses Bug-types like Scyther.',
      image: 'bugsy.jpg'
    },
    whitney: {
      name: 'Whitney',
      city: 'Goldenrod City',
      specialty: 'Normal',
      badge: 'Plain Badge',
      description: 'Her Miltank’s Rollout attack is feared by many trainers!',
      image: 'whitney.jpg'
    },
    morty: {
      name: 'Morty',
      city: 'Ecruteak City',
      specialty: 'Ghost',
      badge: 'Fog Badge',
      description: 'Master of Ghost-type Pokémon, including his signature Gengar.',
      image: 'morty.jpg'
    },
    chuck: {
      name: 'Chuck',
      city: 'Cianwood City',
      specialty: 'Fighting',
      badge: 'Storm Badge',
      description: 'A strong, muscular leader who relies on Fighting-type Pokémon like Poliwrath.',
      image: 'chuck.jpg'
    },
    jasmine: {
      name: 'Jasmine',
      city: 'Olivine City',
      specialty: 'Steel',
      badge: 'Mineral Badge',
      description: 'The first Steel-type Gym Leader in Pokémon history. Famous for her Steelix.',
      image: 'jasmin.jpg'
    },
    pryce: {
      name: 'Pryce',
      city: 'Mahogany Town',
      specialty: 'Ice',
      badge: 'Glacier Badge',
      description: 'An elderly master of Ice-type Pokémon, particularly Dewgong and Piloswine.',
      image: 'pryce.jpg'
    },
    clair: {
      name: 'Clair',
      city: 'Blackthorn City',
      specialty: 'Dragon',
      badge: 'Rising Badge',
      description: 'The strongest Johto Gym Leader, a Dragon-type master with Kingdra.',
      image: 'clair.jpg'
    }
  };

  leader: any = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.leaderId = params.get('id');
      this.leader = this.leaderId ? this.leaders[this.leaderId] : null;
    });
  }
}
