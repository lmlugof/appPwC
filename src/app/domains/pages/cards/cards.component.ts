import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character, Info } from '../../shared/models/Character';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent{
  private characterService = inject(CharacterService);

  characters = signal<Character[]>([]);
  info = signal<Info | null>(null);
  currentPage = signal(1);
  isLoading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(){
    this.fetchCharacters();
  }

 fetchCharacters() {
    this.isLoading.set(true);
    this.error.set(null);

    const url = `https://rickandmortyapi.com/api/character?page=${this.currentPage()}`;

    this.characterService.getMoreCharacters(url).subscribe({
      next: (res) => {
        this.characters.set(res.results);
        this.info.set(res.info);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Error al cargar personajes');
        this.isLoading.set(false);
      }
    });
  }

  goToNextPage() {
    if (this.info()?.next) {
      this.currentPage.update(p => p + 1);
      this.fetchCharacters();
    }
  }

  goToPrevPage() {
    if (this.info()?.prev) {
      this.currentPage.update(p => p - 1);
      this.fetchCharacters();
    }
  }
}

