import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from './component/master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MasterComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee_system_angular';
}