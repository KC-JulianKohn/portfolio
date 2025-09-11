import { Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import Aos from 'aos';

interface Skill {
  name: string;
  img: string;
}

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})

export class Skills {
  ngOnInit(): void { Aos.init() };

  isMobile = false;

  constructor() {
    this.checkViewport();
  }

  skills: Skill[] = [
    { name: 'HTML', img: './img/skills/skill_html.png' },
    { name: 'CSS', img: './img/skills/skill_css.png' },
    { name: 'JavScript', img: './img/skills/skill_javscript.png' },
    { name: 'Git', img: './img/skills/skill_git.png' },
    { name: 'Angular', img: './img/skills/skill_angular.png' },
    { name: 'TypeScript', img: './img/skills/skill_typescript.png' },
    { name: 'API', img: './img/skills/skill_api.png' },
    { name: 'Firebase', img: './img/skills/skill_firebase.png' },
    { name: 'Scrum', img: './img/skills/skill_scrum.png' },
  ];

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth <= 1000;
  }
}
