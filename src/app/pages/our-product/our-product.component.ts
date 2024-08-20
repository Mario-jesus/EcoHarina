import { Component, OnInit, inject, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottomToTop, fadeInFromLeftToRight, fadeInFromRightToLeft } from '../../shared/animations/animations';

@Component({
  selector: 'app-our-product',
  standalone: true,
  imports: [],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css',
  animations: [
    fadeInFromBottomToTop,
    fadeInFromLeftToRight,
    fadeInFromRightToLeft
  ]
})
export class OurProductComponent implements OnInit, AfterViewInit {

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
      title: 'Nuestro producto',
      subtitle: 'Nuestro producto',
      carousel: false,
      images: [
        { id: 1, name: 'product', image: '/assets/harina.jpg' }
      ]
    };
  }

  ngAfterViewInit(): void {
    this._animationService.InitializeAnimationObservers(this.elementsFB2T, this.animationStatesFB2T);
    this._animationService.InitializeAnimationObservers(this.elementsFL2R, this.animationStatesFL2R);
    this._animationService.InitializeAnimationObservers(this.elementsFR2L, this.animationStatesFR2L);
  }

}
