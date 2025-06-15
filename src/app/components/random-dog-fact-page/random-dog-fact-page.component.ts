import { Component, inject } from '@angular/core';
import { DogService } from '../../services/dog-service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, tap } from 'rxjs';
export interface DogFact {
  id: string;
  type: string;
  attributes: {
    body: string;
  };
}
@Component({
  selector: 'app-random-dog-fact-page',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './random-dog-fact-page.component.html',
  styleUrl: './random-dog-fact-page.component.scss'
})
export class RandomDogFactPageComponent {
  private _apiService = inject(DogService);
  data: DogFact[] = [];

  protected dogFact$ = this._apiService.getRandomFact().pipe(
    map(response => response.data[0].attributes.body),
    tap(fact => console.log(fact))
  );
}
