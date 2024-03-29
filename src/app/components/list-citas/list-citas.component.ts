import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Input() listedApoiments: any;
  @Output() deleteApoiment = new EventEmitter<number>();

  removeApoiment(index: number) {
    this.deleteApoiment.emit(index);
  }
}
