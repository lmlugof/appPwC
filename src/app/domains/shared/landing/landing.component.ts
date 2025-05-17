import { Component } from '@angular/core';
import { CardsComponent } from '../../pages/cards/cards.component';

@Component({
  selector: 'app-landing',
  imports: [ CardsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
