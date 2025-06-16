import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from '../../services/dog-service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { currentUser } from '../../consts/consts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Breed } from '../../interfaces/breed';
import { Router } from '@angular/router';
import { SingleDogItem } from '../../interfaces/single-dog-item';

@Component({
  selector: 'app-dog-collection-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule
  ],
  templateUrl: './dog-collection-page.component.html',
  styleUrls: ['./dog-collection-page.component.scss']
})
export class DogCollectionPageComponent implements OnInit {

  private _dogService = inject(DogService)
  private _router = inject(Router)

  protected dogs: Breed[] = [];
  protected error: string = "";

  ngOnInit(): void {
    this.setBreeds();
  }

  get username(): string | null {
    const user = localStorage.getItem(currentUser);
    if (!user) return null;
    try {
      return JSON.parse(user).username || null;
    } catch {
      return null;
    }
  }

  private setBreeds(): void {
    this._dogService.getBreeds().subscribe({
      next: (breeds) => {
        this.dogs = breeds;
        breeds.forEach(breed => {
          if (breed.reference_image_id) {
            this._dogService.getImageById(breed.reference_image_id).subscribe({
              next: (img) => breed.imageUrl = img.url
            });
          }
        });
      },
      error: () => this.error = 'Hiba történt az adatok betöltésekor.'
    });
  }

  protected onImageClick(id: number, imageUrl: string) {
    this._dogService.getSingeBreed(id).subscribe(facts => {
      const doggo: SingleDogItem = {
        imageUrl: imageUrl,
        facts: facts
      };

      this._router.navigate(['/single'], { state: { doggo } });
    });
  }
}