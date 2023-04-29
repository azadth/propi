import { Component, OnInit } from '@angular/core';
import { MapCustomService } from './map-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'front';
  constructor(private mapCustomService: MapCustomService){


  }
  ngOnInit(): void {
    this.mapCustomService.buildMap()
      .then((data) => {
        // this.asGeoCoder
       
        console.log('*** TODO BIEN *****');
      })
      .catch((err) => {
        console.log('******* ERROR ******', err);
      });

  /*ngOnInit(): void {
      this.mapCustomService.buildMap() Promise<any>
      .then((data)=> {
        console.log('**** todo bien ****', data);
      }) Promise<void>
      .catch((err)=> { 
        console.log('*** error ***', err);
      });*/
  }
  
}
