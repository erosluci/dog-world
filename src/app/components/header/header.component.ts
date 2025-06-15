import { Component, inject } from '@angular/core';
import { currentUser } from '../../consts/consts';
import { NameToUpperPipe } from '../../pipes/name-to-upper.pipe';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [NameToUpperPipe, MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router)

  get username(): string {
    const user = localStorage.getItem(currentUser);
    if (!user) return "";
    try {
      return JSON.parse(user).username || null;
    } catch {
      return "";
    }
  }

  logOut(): void {
    localStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }
}
