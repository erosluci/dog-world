import { Component, inject } from '@angular/core';
import { DogService } from '../../services/dog-service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { DogFact } from '../../interfaces/dog-fact';

@Component({
  selector: 'app-random-dog-fact-page',
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './random-dog-fact-page.component.html',
  styleUrl: './random-dog-fact-page.component.scss'
})
export class RandomDogFactPageComponent {
  private _apiService = inject(DogService);

  protected dogFact$ = this._apiService.getRandomFact().pipe(
    map((fact: DogFact) => fact.data[0].attributes.body)
  );
}
