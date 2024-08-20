import { Component, inject, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottomToTop, fadeInFromLeftToRight, fadeInFromRightToLeft } from '../../shared/animations/animations';

@Component({
  selector: 'app-value-chain',
  standalone: true,
  imports: [],
  templateUrl: './value-chain.component.html',
  styleUrl: './value-chain.component.css',
  animations: [
    fadeInFromBottomToTop,
    fadeInFromLeftToRight,
    fadeInFromRightToLeft
  ]
})
export class ValueChainComponent implements OnInit, AfterViewInit {

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
      title: 'Cadena de valor',
      subtitle: 'Cadena de valor',
      carousel: false,
      images: [
        {id: 1, name: 'Cadena de valor', image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
      ]
    };
  }

  ngAfterViewInit(): void {
    this._animationService.InitializeAnimationObservers(this.elementsFB2T, this.animationStatesFB2T);
    this._animationService.InitializeAnimationObservers(this.elementsFL2R, this.animationStatesFL2R);
    this._animationService.InitializeAnimationObservers(this.elementsFR2L, this.animationStatesFR2L);
  }

}
