import { Routes } from '@angular/router';
import { CardsDetailsComponent } from './domains/pages/cards-details/cards-details.component';
import { LandingComponent } from './domains/shared/landing/landing.component';
import { CardsComponent } from './domains/pages/cards/cards.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'cards-details', component: CardsDetailsComponent
    },
    {
        path: 'character/:id', 
        loadComponent: () =>
            import('./domains/pages/cards-details/cards-details.component').then(m => m.CardsDetailsComponent)
    }
];
