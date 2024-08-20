import { Component, ElementRef, inject, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  private _pageServise = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChildren('ShowAnimationOpacity') ShowAnimationOpacity!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationLeft') ShowAnimationLeft!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationRight') ShowAnimationRight!: QueryList<ElementRef<HTMLDivElement>>;

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
    this._animationService.createAnimationObserver(
      this.ShowAnimationOpacity, '1s',
      { opacity: 0, transform: 'translateY(100px)' },
      { opacity: 1, transform: 'unset' },
    );

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
