import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-membros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './membros.html',
  styleUrl: './membros.css',
})

export class Membros {
  showModal = false;
  showInfoModal = false;

abrirModal() {
  this.showInfoModal = false;
  this.showModal = true;
}

fecharModal() {
  this.showModal = false;
}


abrirInfoModal() {
  this.showModal = false;
  this.showInfoModal = true;
}

fecharInfoModal() {
  this.showInfoModal = false;
}
}
