import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValueChainComponent } from './pages/value-chain/value-chain.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'value-chain', component: ValueChainComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
