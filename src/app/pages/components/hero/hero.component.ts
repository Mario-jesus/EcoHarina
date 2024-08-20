import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Carousel } from 'bootstrap';
import { PageHeroI } from '../../../interfaces/page';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fromTopToBottom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-200px)' }),
        animate('0.8s 0.5s ease', style({ opacity: 1, transform: 'unset' }))
      ])
    ]),
    trigger('fromLeftToRight', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.8s 0.5s ease', style({ opacity: 1, transform: 'unset' }))
      ])
    ]),
    trigger('fromBottomToTop', [
      state('void', style({ opacity: 0, transform: 'translateY(200px)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(200px)' }),
        animate('0.8s 0.5s ease', style({ opacity: 1, transform: 'unset' }))
      ])
    ]),
    trigger('fromRightToLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('0.8s 0.5s ease', style({ opacity: 1, transform: 'unset' }))
      ])
    ])
  ]
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
