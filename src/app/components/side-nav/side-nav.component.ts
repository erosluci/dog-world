import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  private _router = inject(Router);
  protected selectedIcon: string = 'list';

  selectIcon(icon: string, routerLink: string) {
    const navigationDetails: string[] = [routerLink];
    this.selectedIcon = icon;
    if (routerLink) {
      this._router.navigate(navigationDetails);
    }
  }
}
