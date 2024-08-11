import { Component, OnInit, inject } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-our-product',
  standalone: true,
  imports: [],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css'
})
export class OurProductComponent implements OnInit {

  private _pageService = inject(PageService);

  ngOnInit(): void {
    this._pageService.setHeroData = {
      title: 'Nuestro producto',
      subtitle: 'Nuestro producto',
      carousel: false,
      images: [
        { id: 1, name: 'product', image: 'https://plus.unsplash.com/premium_photo-1671377660174-e43996bfdf03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    };
  }

}
