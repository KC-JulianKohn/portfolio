import { Component, HostListener, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  translate = inject(TranslateService);

  isMobile = false;
  menuOpen = false;

  constructor() {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth <= 900;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
  }

  closeMenu() {
    this.menuOpen = false;
    const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  }
}
