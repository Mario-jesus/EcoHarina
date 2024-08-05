import { Component, inject, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private _pageService = inject(PageService);

  ngOnInit(): void {
    this._pageService.setHeroData = {
      page: 'home',
      title: 'EcoHarina: La Revolución Nutricional para tus Animales',
      subtitle: 'Transforma los residuos agrícolas en alimento de alta calidad y mejora la salud y el rendimiento de tu ganado.',
      carousel: true,
      images: [
        {id: 1, name: 'item1', image: 'https://images.unsplash.com/photo-1504868004816-c475780f060f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 2, name: 'item2', image: 'https://plus.unsplash.com/premium_photo-1677850457318-06499bd9f58c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 3, name: 'item3', image: 'https://images.pexels.com/photos/7368109/pexels-photo-7368109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
      ]
    };
  }

}
