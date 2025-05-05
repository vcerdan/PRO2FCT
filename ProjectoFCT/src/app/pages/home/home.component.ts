import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackendService } from '../../servicios/backend.service';

@Component({
  standalone: true,
  imports: [IonicModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensaje = '';

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.getSaludo().subscribe({
      next: data => (this.mensaje = data.mensaje),
      error: err => console.error(err)
    });
  }
}
