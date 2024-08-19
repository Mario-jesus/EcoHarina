import { Component, inject, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {

  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChildren('ShowAnimationOpacity') ShowAnimationOpacity!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationLeft') ShowAnimationLeft!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationRight') ShowAnimationRight!: QueryList<ElementRef<HTMLDivElement>>;

  ngOnInit(): void {
    this._pageService.setHeroData = {
      page: 'home',
      title: 'EcoHarina: La Revolución Nutricional para tus Animales',
      subtitle: 'Transforma los residuos agrícolas en alimento de alta calidad y mejora la salud y el rendimiento de tu ganado.',
      carousel: true,
      images: [
        {id: 1, name: 'item1', image: 'https://images.unsplash.com/photo-1504868004816-c475780f060f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 2, name: 'item2', image: 'https://plus.unsplash.com/premium_photo-1677850457318-06499bd9f58c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 3, name: 'item3', image: 'https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {id: 4, name: 'item4', image: 'https://images.pexels.com/photos/185941/pexels-photo-185941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
      ]
    };
  }

  ngAfterViewInit(): void {
    this._animationService.createAnimationObserver(this.ShowAnimationOpacity, (element) => {
      this._animationService.startAnimation(
        element,
        '800ms',
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'unset' },
      )
    });
    this._animationService.createAnimationObserver(this.ShowAnimationLeft, (element) => {
      this._animationService.startAnimation(
        element,
        '800ms',
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'unset' },
      )
    });
    this._animationService.createAnimationObserver(this.ShowAnimationRight, (element) => {
      this._animationService.startAnimation(
        element,
        '800ms',
        { opacity: 0, visibility: 'hidden', transform: 'translateX(100%)' },
        { opacity: 1, visibility: 'visible', transform: 'unset' },
      )
    });
  }

}
