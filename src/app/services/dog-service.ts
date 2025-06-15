import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogFact } from '../components/random-dog-fact-page/random-dog-fact-page.component';

export interface Breed {
  id: number;
  name: string;
  reference_image_id?: string;
  imageUrl?: string;
}
export interface DogFactResponse {
  data: DogFact[];
}

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private _http = inject(HttpClient);
  private _apiUrl = 'https://api.thedogapi.com/v1';
  private _randomDogApi = 'https://dogapi.dog/api/v2/facts?limit=1';
  private _headers = new HttpHeaders({
    'X-Api-Key': '981f5e99-2b1b-4898-a931-f55f830b5950'
  });

  getBreeds(): Observable<Breed[]> {
    return this._http.get<Breed[]>(`${this._apiUrl}/breeds`, { headers: this._headers });
  }

  getImageById(imageId: string): Observable<{ url: string }> {
    return this._http.get<{ url: string }>(`${this._apiUrl}/images/${imageId}`, { headers: this._headers });
  }

  getRandomFact(): Observable<DogFactResponse> {
    return this._http.get<DogFactResponse>(this._randomDogApi, {
      headers: this._headers
    });
  }
}
