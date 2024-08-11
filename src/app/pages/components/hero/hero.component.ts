import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Carousel } from 'bootstrap';
import { PageHeroI } from '../../../interfaces/page';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public pageData = input.required<PageHeroI>({alias: 'heroData'});
  protected backgroundImage = "none";

  constructor() {
    effect(() => {
      if (!this.pageData().carousel && this.pageData().images.length > 0) {
        this.backgroundImage = `url(${this.pageData().images[0].image})`;
      } else {
        this.backgroundImage = "none";
        const carouselElement = <HTMLElement>document.getElementById('carouselHero');
        if (carouselElement) new Carousel(carouselElement);
      }
    });
  }

}
