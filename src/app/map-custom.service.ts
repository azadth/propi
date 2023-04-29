import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
//import mapboxgl from 'mapbox-gl';
//import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
//import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
//import { MapboxGeocoder } from '@types/mapbox__mapbox-gl-geocoder';
//import { MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder';

//import mapboxgl from 'mapbox-gl';
const  MapboxGeocoder =require ('@mapbox/mapbox-gl-geocoder');
import { environment } from 'src/environments/environment.prod';





@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v12';
  lat = 40.416906;
  lng = -3.7056721;
  zoom = 3;

  constructor() { this.mapbox.accessToken = environment.mapPk;}
  buildMap(): Promise<any>{
    return new Promise((resolve, reject)=>{
      try {
        this.map= new mapboxgl.Map({
          container:'map',
          style : this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat] 
          
        })
  
        resolve({
          map: this.map
  
      })
        
      } catch (e) {
        reject(e)
        
      }
    });
  
  
  }
}




