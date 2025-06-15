import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Breed {
  id: number;
  name: string;
  reference_image_id?: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private apiUrl = 'https://api.thedogapi.com/v1';

  private headers = new HttpHeaders({
    'X-Api-Key': '981f5e99-2b1b-4898-a931-f55f830b5950'
  });

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`, { headers: this.headers });
  }
  getImageById(imageId: string): Observable<{ url: string }> {
    return this.http.get<{ url: string }>(`${this.apiUrl}/images/${imageId}`, { headers: this.headers });
  }
}
