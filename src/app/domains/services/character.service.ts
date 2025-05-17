import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../shared/models/Character';
import { Character } from '../shared/models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private http = inject(HttpClient);
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  character: Character | null = null;

  constructor() { }

  getCharacters(page: number = 1) {
    const url = new URL(this.baseUrl);
    url.searchParams.set('page', page.toString());
    return this.http.get<ApiResponse>(url.toString());
  }

  getMoreCharacters(url: string) {
    return this.http.get<ApiResponse>(url);
  }

  getOne(id: number){
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}
