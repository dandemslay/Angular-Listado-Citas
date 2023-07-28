import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listApoiments: any[] = [];

  addApoiment(apoiment: any) {       
    this.listApoiments.push(apoiment);
    console.log(this.listApoiments);
  }

  deleteApoimentListed(index: number) {
    this.listApoiments.splice(index, 1);
  }
}
