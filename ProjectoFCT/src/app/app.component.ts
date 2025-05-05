import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [
    IonicModule  // Import the module directly without forRoot()
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
