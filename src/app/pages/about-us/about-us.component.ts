import { Component, ElementRef, inject, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottomToTop, fadeInFromLeftToRight, fadeInFromRightToLeft } from '../../shared/animations/animations';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations: [
    fadeInFromBottomToTop,
    fadeInFromLeftToRight,
    fadeInFromRightToLeft
  ]
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  protected animationStatesFB2T: string[] = [];
  protected animationStatesFL2R: string[] = [];
  protected animationStatesFR2L: string[] = [];
  private _pageServise = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChildren('ShowAnimationFB2T') elementsFB2T!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFL2R') elementsFL2R!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFR2L') elementsFR2L!: QueryList<ElementRef<Element>>;

  ngOnInit(): void {
    this._pageServise.setHeroData = {
      title: 'Sobre nosotros',
      subtitle: 'Sobre nosotros',
      carousel: false,
      images: [
        { id: 1, name: 'about-us', image: '/assets/about-us-cover.jpg' }
      ]
    };
  }

  ngAfterViewInit(): void {
    this._animationService.InitializeAnimationObservers(this.elementsFB2T, this.animationStatesFB2T);
    this._animationService.InitializeAnimationObservers(this.elementsFL2R, this.animationStatesFL2R);
    this._animationService.InitializeAnimationObservers(this.elementsFR2L, this.animationStatesFR2L);
    console.log(this.animationStatesFB2T);
    
  }

}
