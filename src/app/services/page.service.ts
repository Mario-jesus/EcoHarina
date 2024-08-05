import { Injectable, signal } from '@angular/core';
import { PageHeroI } from '../interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public getHeroData = signal<PageHeroI>({page: '', title: '', subtitle: '', carousel: false, images: []});

  public set setHeroData(heroData: PageHeroI) {
    this.getHeroData.set(heroData);
  }

}
