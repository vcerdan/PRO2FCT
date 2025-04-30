// ejemplo para reservas.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [IonicModule, RouterModule],
  selector: 'app-reservas',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css'],
})
export class AmigosComponent {}
