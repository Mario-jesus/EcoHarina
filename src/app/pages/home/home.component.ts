import { Component, inject, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottomToTop, fadeInFromLeftToRight, fadeInFromRightToLeft } from '../../shared/animations/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    fadeInFromBottomToTop,
    fadeInFromLeftToRight,
    fadeInFromRightToLeft
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  protected animationStatesFB2T: string[] = [];
  protected animationStatesFL2R: string[] = [];
  protected animationStatesFR2L: string[] = [];
  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChildren('ShowAnimationFB2T') elementsFB2T!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFL2R') elementsFL2R!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFR2L') elementsFR2L!: QueryList<ElementRef<Element>>;

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
    this._animationService.InitializeAnimationObservers(this.elementsFB2T, this.animationStatesFB2T);
    this._animationService.InitializeAnimationObservers(this.elementsFL2R, this.animationStatesFL2R);
    this._animationService.InitializeAnimationObservers(this.elementsFR2L, this.animationStatesFR2L);
  }

}
