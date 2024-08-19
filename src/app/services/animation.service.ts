import { ElementRef, inject, Injectable, QueryList } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private _animationBuilder = inject(AnimationBuilder);

  public startAnimation(element: Element, animationParameters: string, initialStyle: { [key: string]: string | number }, finalStyle: { [key: string]: string | number }) {
    const factory = this._animationBuilder.build([
      /* style({ opacity: 0, transform: 'translateY(50px)' }),
      animate('1s', style({ opacity: 1, transform: 'unset' })), */
      style(initialStyle),
      animate(animationParameters, style(finalStyle)),
    ]);
    const player = factory.create(element);
    player.play();
  }

  public createAnimationObserver(array: QueryList<ElementRef<Element>>, callback: (element: Element) => void) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const rect = entry.target.getBoundingClientRect();
        if (entry.isIntersecting && rect.bottom >= window.innerHeight) {
          callback(entry.target);
        }
      });
    });

    array.forEach((element) => observer.observe(element.nativeElement));
  }

}
