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
        { id: 1, name: 'Galería', image: 'https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
      ]
    }

    this.pageData = {
      title: 'Nuestra galería',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti recusandae corrupti vero ab ut?',
      images: [
        { id: 1, description: '', url: 'https://images.pexels.com/photos/67236/cow-animal-brown-animals-67236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, description: '', url: 'https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 6, description: '', url: 'https://images.unsplash.com/photo-1476916713558-2842194a8e49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 8, description: '', url: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: 'https://images.pexels.com/photos/10065068/pexels-photo-10065068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
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
