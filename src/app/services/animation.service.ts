import { ElementRef, inject, Injectable, QueryList } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private _animationBuilder = inject(AnimationBuilder);

  public createAnimationObserver(array: QueryList<ElementRef<Element>>, animationParameters: string, initialStyle: { [key: string]: string | number }, finalStyle: { [key: string]: string | number }) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const rect = entry.target.getBoundingClientRect();
        if (entry.isIntersecting && rect.bottom >= window.innerHeight) {
          const factory = this._animationBuilder.build([
            style(initialStyle),
            animate(animationParameters, style(finalStyle)),
          ]);
          const player = factory.create(entry.target);
          player.play();
        }
      });
    });

    array.forEach((element) => observer.observe(element.nativeElement));
  }

}
