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
        {id: 1, name: 'Cadena de valor', image: 'https://images.unsplash.com/photo-1635857770451-71634ff4f384?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      ]
    };
  }

}
