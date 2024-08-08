import { Component, inject, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit, AfterViewInit {

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
        { id: 1, name: 'Galería', image: 'https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
      ]
    }
  }

  ngAfterViewInit(): void {
    this.addEventImagesModal();
  }

  protected addEventImagesModal() {
    const images = <NodeListOf<HTMLImageElement>>document.querySelectorAll('.gallery__img');
    images.forEach((image) => {
      image.addEventListener("click", (e) => this.handleEventImagesModal(e));
    });
  }

  protected handleEventImagesModal(e: Event) {
    //@ts-ignore
    let src: string = e.target.src;
    //@ts-ignore
    let description: string = e.target.dataset.description;

    this.imageMain.nativeElement.src = src;
    this.imageDescription.nativeElement.textContent = description;

    if (description === "") this.showDescriptionBtn.nativeElement.classList.add("d-none");
    else this.showDescriptionBtn.nativeElement.classList.remove("d-none");

    this.showImageToggle.nativeElement.checked = true;
  }

}
