import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValueChainComponent } from './pages/value-chain/value-chain.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { OurProductComponent } from './pages/our-product/our-product.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'value-chain', component: ValueChainComponent},
    {path: 'our-product', component: OurProductComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
