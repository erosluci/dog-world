import { Component, inject } from '@angular/core';
import { SingleDogItem } from '../../interfaces/single-dog-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-dog-page',
  imports: [],
  templateUrl: './single-dog-page.component.html',
  styleUrl: './single-dog-page.component.scss'
})
export class SingleDogPageComponent {
  private _router = inject(Router);
  protected doggo!: SingleDogItem;

  ngOnInit(): void {
    const nav = this._router.getCurrentNavigation();

    const stateDoggo = nav?.extras?.state?.['doggo'];

    const fallbackDoggo = history.state['doggo'];

    this.doggo = stateDoggo || fallbackDoggo;

    console.log('Doggo:', this.doggo);

    if (!this.doggo) {
      console.warn('Nem találtunk kutját, visszairányítunk!');
      this._router.navigate(['/main']);
    }
  }
}
