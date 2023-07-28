import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  name = '';
  date = '';
  time = '';
  symptoms = '';

  frmIncomplete = false;
  @Output() newApoiment = new EventEmitter<any>();

  addApoiment() {
    if(this.name == '' || this.date == '' || this.time == '' || this.symptoms == ''){
      this.frmIncomplete = true;
      return;
    }
    this.frmIncomplete = false;    

    //Add object for send to parent 
    const Apoiment = {
      name: this.name,
      date: this.date,
      time: this.time,
      symptoms: this.symptoms
    }
    console.log(Apoiment);
    this.newApoiment.emit(Apoiment);
    this.resetFrm();
  }
  resetFrm() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.symptoms = '';
  }

}
