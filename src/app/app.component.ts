import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageHeroI } from './interfaces/page';
import { PageService } from './services/page.service';
import { HeroComponent } from './pages/components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public heroData!: WritableSignal<PageHeroI>;
  private _pageService = inject(PageService);

  ngOnInit(): void {
    this.heroData = this._pageService.getHeroData;
  }

}
