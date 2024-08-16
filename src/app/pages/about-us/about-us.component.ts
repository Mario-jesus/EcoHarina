import { Component, inject, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  private _pageServise = inject(PageService);

  ngOnInit(): void {
    this._pageServise.setHeroData = {
      title: 'Sobre nosotros',
      subtitle: 'Sobre nosotros',
      carousel: false,
      images: [
        { id: 1, name: 'about-us', image: '/assets/about-us-cover.jpg' }
      ]
    };
  }

}
