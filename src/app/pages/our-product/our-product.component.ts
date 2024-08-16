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
        { id: 1, name: 'product', image: '/assets/harina.jpg' }
      ]
    };
  }

}
