import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { currentUser } from './consts/consts';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SideNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dog-world';

  get username(): string {
    const user = localStorage.getItem(currentUser);
    if (!user) return "";
    try {
      return JSON.parse(user).username || null;
    } catch {
      return "";
    }
  }
}

