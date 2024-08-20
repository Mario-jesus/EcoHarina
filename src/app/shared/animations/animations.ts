import { trigger, state, style, transition, animate } from "@angular/animations";

export const fadeInFromLeftToRight = trigger('fadeInFromLeftToRight', [
    state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
    transition('void => *', animate('1s ease', style({ opacity: 1, transform: 'unset' })))
]);

export const fadeInFromBottomToTop = trigger('fadeInFromBottomToTop', [
    state('void', style({ opacity: 0, transform: 'translateY(100px)' })),
    transition('void => *', animate('1s ease', style({ opacity: 1, transform: 'unset' })))
]);

export const fadeInFromRightToLeft = trigger('fadeInFromRightToLeft', [
    state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
    transition('void => *', animate('1s ease', style({ opacity: 1, transform: 'unset' })))
]);

export const fadeInFromBottomToTopScale = trigger('fadeInFromBottomToTopScale', [
    state('void', style({ opacity: 0, transform: 'translateY(100px) scale(50%)' })),
    transition('void => *', animate('1s ease', style({ opacity: 1, transform: 'unset' }))),
]);