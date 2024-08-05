import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PageHeroI } from '../../../interfaces/page';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public pageData = input.required<PageHeroI>({alias: 'heroData'});
}
