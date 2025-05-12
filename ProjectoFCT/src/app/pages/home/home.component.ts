import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../servicios/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensaje = '';

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.getSaludo().subscribe({
      next: data => this.mensaje = data.mensaje,
      error: err => console.error(err)
    });
  }
}
