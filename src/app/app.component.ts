import { Component, inject, OnInit, WritableSignal, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild("navCheck") navCheck!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.heroData = this._pageService.getHeroData;
  }

  protected onPageChange() {
    this.navCheck.nativeElement.checked = false;
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

}
