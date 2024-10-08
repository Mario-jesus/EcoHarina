import { Component, inject, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService } from '../../services/page.service';
import { AnimationService } from '../../services/animation.service';
import { fadeInFromBottomToTop, fadeInFromBottomToTopScale, } from '../../shared/animations/animations';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  animations: [
    fadeInFromBottomToTop,
    fadeInFromBottomToTopScale
  ]
})
export class GalleryComponent implements OnInit, AfterViewInit {

  protected animationStatesFB2T: string[] = [];
  protected animationStatesFB2TS: string[] = [];
  protected pageData: {title: string, description: string, images: {id: number, description: string, url: string}[]} = {title: '', description: '', images: []};
  private _pageService = inject(PageService);
  private _animationService = inject(AnimationService);
  @ViewChild("showImageToggle") showImageToggle!: ElementRef<HTMLInputElement>;
  @ViewChild("imageMain") imageMain!: ElementRef<HTMLImageElement>;
  @ViewChild("imageDescription") imageDescription!: ElementRef<HTMLDivElement>;
  @ViewChild("showDescriptionBtn") showDescriptionBtn!: ElementRef<HTMLInputElement>;
  @ViewChildren('ShowAnimationFB2T') elementsFB2T!: QueryList<ElementRef<Element>>;
  @ViewChildren('ShowAnimationFB2TS') elementsFB2TS!: QueryList<ElementRef<Element>>;

  ngOnInit(): void {
    this._pageService.setHeroData = {
      title: 'Galería',
      subtitle: 'Galería',
      carousel: false,
      images: [
        { id: 1, name: 'Galería', image: '/assets/collage-test.png' }
      ]
    }

    this.pageData = {
      title: 'Nuestra galería',
      description: 'En esta sección podrá encontrar imágenes desde las calabazas chihua en diferentes etapas hasta nuestro equipo trabajando para brindarle el mejor valor posible.',
      images: [
        { id: 1, description: '', url: '/assets/equipo.jpg' },
        { id: 2, description: 'Calabazas chihua', url: '/assets/calabazas.jpg' },
        { id: 3, description: 'Calabaza desidratada', url: '/assets/calabaza-disecada.jpg' },
        { id: 4, description: '', url: '/assets/calabaza-desidratada-lab.jpg' },
        { id: 5, description: 'Empaque del producto', url: '/assets/ecoharina-product.png' },
        { id: 6, description: '', url: '/assets/collage.jpg' },
        { id: 7, description: 'Residuos de calabazas chihua', url: '/assets/residuos-de-calabaza.jpg' },
        { id: 8, description: 'Harina de calabaza de chihua', url: '/assets/harina.jpg' },
        { id: 9, description: '', url: '/assets/innovacion.jpg' },
      ]
    };
  }

  ngAfterViewInit(): void {
    this.addEventImagesModal();
    this._animationService.InitializeAnimationObservers(this.elementsFB2T, this.animationStatesFB2T);
    this._animationService.InitializeAnimationObservers(this.elementsFB2TS, this.animationStatesFB2TS);
  }

  protected addEventImagesModal(): void {
    const images = <NodeListOf<HTMLImageElement>>document.querySelectorAll('.gallery__img');
    images.forEach((image) => {
      image.addEventListener("click", (e) => this.handleEventImagesModal(e));
    });
  }

  protected handleEventImagesModal(e: Event): void {
    //@ts-ignore
    let src: string = e.target.src;
    //@ts-ignore
    let description: string = e.target.alt;

    this.imageMain.nativeElement.src = src;
    this.imageDescription.nativeElement.textContent = description;

    if (description === "") {
      this.showDescriptionBtn.nativeElement.classList.add("d-none");
      this.imageDescription.nativeElement.classList.add("d-none");
    }
    else {
      this.showDescriptionBtn.nativeElement.classList.remove("d-none");
      this.imageDescription.nativeElement.classList.remove("d-none");
    }

    this.showImageToggle.nativeElement.checked = true;
  }

}
