import { Component, inject, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-value-chain',
  standalone: true,
  imports: [],
  templateUrl: './value-chain.component.html',
  styleUrl: './value-chain.component.css'
})
export class ValueChainComponent implements OnInit {

  private _pageService = inject(PageService);

  ngOnInit(): void {
    this._pageService.setHeroData = {
      title: 'Cadena de valor',
      subtitle: 'Cadena de valor',
      carousel: false,
      images: [
        {id: 1, name: 'Cadena de valor', image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
      ]
    };
  }

}
