// ejemplo para reservas.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [IonicModule, RouterModule],
  selector: 'app-reservas',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css'],
})
export class ContratosComponent {}
