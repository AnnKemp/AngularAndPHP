import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import { CarService } from "./car.service";
// the php pages you can find in: var/www/api

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularAndPhp';
  // to store the array of cars retrieved from the server
  cars: Car[];
  error = '';
  succes = '';

  constructor(private carService: CarService) {
    // In the constructor, you inject the carService dependency so that the service will be available to all the methods of the controller as soon as Angular creates an object out of the controller.
  }

  ngOnInit() { // Inside the ngOnInit() lifecycle hook, you call the getCars() method just after the creation of the controller by Angular.
    // ngOnInit is a special lifecycle hook provided by Angular that runs immediatley after the constructor finishes injecting the dependencies, so it is a good place to get the array of cars into the controller.
    this.getCars();
  }
  getCars(): void{
    this.carService.getAll().subscribe(
      (res: Car[]) => { // the first callback is for handling the successful retrieval of the list of cars
        this.cars = res;
      },
      (err) => { // the second callback handles errors
        this.error = err;
      }
      );
      }
    ) // hier de haakjes nog eens checken er zit weer wat fout
  }

