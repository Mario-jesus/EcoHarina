import { Component, OnInit, inject, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-our-product',
  standalone: true,
  imports: [],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css'
})
export class OurProductComponent implements OnInit, AfterViewInit {

  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChildren('ShowAnimationOpacity') ShowAnimationOpacity!: QueryList<ElementRef>;
  @ViewChildren('ShowAnimationLeft') ShowAnimationLeft!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationRight') ShowAnimationRight!: QueryList<ElementRef<HTMLDivElement>>;

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
    this._animationService.createAnimationObserver(
      this.ShowAnimationOpacity,
      '1s ease',
      { opacity: 0, transform: 'translateY(100px)' },
      { opacity: 1, transform: 'unset' }
    )

    if (window.innerWidth >= 992) {
      this._animationService.createAnimationObserver(
        this.ShowAnimationLeft, '1s',
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'unset' },
      );

      this._animationService.createAnimationObserver(
        this.ShowAnimationRight, '1s',
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'unset' },
      );
    } else {
      this._animationService.createAnimationObserver(
        this.ShowAnimationLeft, '1s',
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'unset' },
      );

      this._animationService.createAnimationObserver(
        this.ShowAnimationRight, '1s',
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'unset' },
      );
    }
  }

}
