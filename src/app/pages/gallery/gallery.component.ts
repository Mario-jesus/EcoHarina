import { Component, inject, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit, AfterViewInit {

  protected pageData: {title: string, description: string, images: {id: number, description: string, url: string}[]} = {title: '', description: '', images: []};
  private _pageService = inject(PageService);
  @ViewChild("showImageToggle") showImageToggle!: ElementRef<HTMLInputElement>;
  @ViewChild("imageMain") imageMain!: ElementRef<HTMLImageElement>;
  @ViewChild("imageDescription") imageDescription!: ElementRef<HTMLDivElement>;
  @ViewChild("showDescriptionBtn") showDescriptionBtn!: ElementRef<HTMLInputElement>;

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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti recusandae corrupti vero ab ut?',
      images: [
        { id: 1, description: '', url: '/assets/equipo.jpg' },
        { id: 2, description: '', url: '/assets/calabazas.jpg' },
        { id: 3, description: '', url: '/assets/calabaza-disecada.jpg' },
        { id: 4, description: '', url: '/assets/calabaza-desidratada-lab.jpg' },
        { id: 5, description: '', url: '/assets/ecoharina-product.png' },
        { id: 6, description: '', url: '/assets/collage.jpg' },
        { id: 7, description: '', url: '/assets/residuos-de-calabaza.jpg' },
        { id: 8, description: '', url: '/assets/harina.jpg' },
        { id: 9, description: '', url: '/assets/innovacion.jpg' },
      ]
    };
  }

  ngAfterViewInit(): void {
    this.addEventImagesModal();
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
