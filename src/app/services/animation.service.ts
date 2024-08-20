import { ElementRef, inject, Injectable, QueryList } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private _animationBuilder = inject(AnimationBuilder);

  public InitializeAnimationObservers(ArrayElements: QueryList<ElementRef<Element>>, ArrayToggles: string[]) {
    ArrayElements.map(() => {
      ArrayToggles.push('void');
    });

    ArrayElements.forEach((element, index) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ArrayToggles[index] = '*';
          }
        });
      });

      observer.observe(element.nativeElement);
    });
  }

}
