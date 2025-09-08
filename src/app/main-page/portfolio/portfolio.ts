import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Projects {
  name: string;
  languages: string;
  description: string;
  img: string,
  linkgit: string;
  linktest: string
}

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  allProjects: Projects[] = [
    {
      name: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'portfolio.join_text',
      img: './img/projects/projects_join.png',
      linkgit: '',
      linktest: ''
    },
    {
      name: 'El Dragonnoid',
      languages: 'JavaScript | HTML | CSS',
      description: 'portfolio.el_dragonnoid_text',
      img: './img/projects/projects_el_dragonnoid.png',
      linkgit: 'https://github.com/KC-JulianKohn/El_Dragonoid_Modul_12',
      linktest: ''
    },
    {
      name: 'Pokédex',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'portfolio.pokedex_text',
      img: './img/projects/projects_pokedex.png',
      linkgit: 'https://github.com/KC-JulianKohn/PokeDex_Modul_8',
      linktest: ''
    },
  ];

  openLink(url: string) {
    window.open(url, "_blank", "noopener noreferrer");
  }
}