import { Component } from '@angular/core';

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
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  allProjects: Projects[] = [
    {
      name: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      img: './img/projects/projects_join.png',
      linkgit: '',
      linktest: ''
    },
    {
      name: 'El Dragonnoid',
      languages: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      img: './img/projects/projects_el_dragonnoid.png',
      linkgit: 'https://github.com/KC-JulianKohn/El_Dragonoid_Modul_12',
      linktest: ''
    },
    {
      name: 'Pokédex',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      img: './img/projects/projects_pokedex.png',
      linkgit: 'https://github.com/KC-JulianKohn/PokeDex_Modul_8',
      linktest: ''
    },
  ];

  openLink(url: string) {
    window.open(url, "_blank", "noopener noreferrer");
  }
}
