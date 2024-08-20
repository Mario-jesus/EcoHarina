import { Component, inject, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-value-chain',
  standalone: true,
  imports: [],
  templateUrl: './value-chain.component.html',
  styleUrl: './value-chain.component.css'
})
export class ValueChainComponent implements OnInit, AfterViewInit {

  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChildren('ShowAnimationOpacity') ShowAnimationOpacity!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationLeft') ShowAnimationLeft!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationRight') ShowAnimationRight!: QueryList<ElementRef<Element>>;

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
