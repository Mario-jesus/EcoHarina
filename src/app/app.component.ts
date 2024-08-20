import { Component, inject, OnInit, WritableSignal, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { PageHeroI } from './interfaces/page';
import { PageService } from './services/page.service';
import { HeroComponent } from './pages/components/hero/hero.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fromRightToLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('800ms 500ms ease', style({ opacity: 1, transform: 'unset' })),
      ]),
    ]),
    trigger('showScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('800ms 500ms ease', style({ opacity: 1, transform: 'unset' })),
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {

  public heroData!: WritableSignal<PageHeroI>;
  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChild("navCheck") navCheck!: ElementRef<HTMLInputElement>;
  @ViewChildren('ShowAnimationOpacity') ShowAnimationOpacity!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationLeft') ShowAnimationLeft!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ShowAnimationRight') ShowAnimationRight!: QueryList<ElementRef<HTMLDivElement>>;

  ngOnInit(): void {
    this.heroData = this._pageService.getHeroData;
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

  protected onPageChange() {
    this.navCheck.nativeElement.checked = false;
    window.scroll({ top: 0, left: 0, behavior: "instant" });
  }

  protected onCurrentPage(currentPage: string): boolean {
    if (typeof location == "undefined") return false;
    if (currentPage == "" && location.pathname == "/") return true;
    return location.pathname.includes(currentPage) && currentPage != "";
  }

}
