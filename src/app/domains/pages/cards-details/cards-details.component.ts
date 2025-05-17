import { CommonModule } from '@angular/common';
import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../shared/models/Character';

@Component({
  selector: 'app-cards-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-details.component.html',
  styleUrl: './cards-details.component.css'
})
export class CardsDetailsComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  character = signal<Character | null>(null);
  error = signal<string | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.characterService.getOne(+id).subscribe({
        next: (char) => {
          this.character.set(char);
        },
        error: (err) => {
          this.error.set('No carga')
        }
      })
      }
  }

}
