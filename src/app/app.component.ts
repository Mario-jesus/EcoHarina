import { Component, inject, OnInit, WritableSignal, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { PageHeroI } from './interfaces/page';
import { PageService } from './services/page.service';
import { HeroComponent } from './pages/components/hero/hero.component';
import { AnimationService } from './services/animation.service';
import { fadeInFromBottomToTop, fadeInFromLeftToRight, fadeInFromRightToLeft } from './shared/animations/animations';

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
    ]),
    fadeInFromBottomToTop,
    fadeInFromLeftToRight,
    fadeInFromRightToLeft
  ]
})
export class AppComponent implements OnInit, AfterViewInit {

  protected animationStatesFB2T: string[] = [];
  protected animationStatesFL2R: string[] = [];
  protected animationStatesFR2L: string[] = [];
  public heroData!: WritableSignal<PageHeroI>;
  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChild("navCheck") navCheck!: ElementRef<HTMLInputElement>;
  @ViewChildren('ShowAnimationFB2T') elementsFB2T!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFL2R') elementsFL2R!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFR2L') elementsFR2L!: QueryList<ElementRef<Element>>;

  ngOnInit(): void {
    this.heroData = this._pageService.getHeroData;
  }

  ngAfterViewInit(): void {
    this._animationService.InitializeAnimationObservers(this.elementsFB2T, this.animationStatesFB2T);
    this._animationService.InitializeAnimationObservers(this.elementsFL2R, this.animationStatesFL2R);
    this._animationService.InitializeAnimationObservers(this.elementsFR2L, this.animationStatesFR2L);
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
