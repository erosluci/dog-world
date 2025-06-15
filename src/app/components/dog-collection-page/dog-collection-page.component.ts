import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breed, DogService } from '../../services/dog-service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { currentUser } from '../../consts/consts';
import { NameToUpperPipe } from '../../pipes/name-to-upper.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-dog-collection-page',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIcon,
    MatToolbar,
    NameToUpperPipe,
    MatSidenavModule
  ],
  templateUrl: './dog-collection-page.component.html',
  styleUrls: ['./dog-collection-page.component.scss']
})
export class DogCollectionPageComponent implements OnInit {

  private dogService = inject(DogService)

  protected dogs: Breed[] = [];
  protected error: string = "";

  showFiller = false;

  ngOnInit(): void {
    this.dogService.getBreeds().subscribe({
      next: (breeds) => {
        this.dogs = breeds;
        breeds.forEach(breed => {
          if (breed.reference_image_id) {
            this.dogService.getImageById(breed.reference_image_id).subscribe({
              next: (img) => breed.imageUrl = img.url
            });
          }
        });
      },
      error: () => this.error = 'Hiba történt az adatok betöltésekor.'
    });
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
}