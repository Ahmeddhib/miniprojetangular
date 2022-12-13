import { Marque } from './../model/marque.model';
import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus.model';
import { BusService } from '../services/bus.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
newBus = new Bus();
marques! : Marque[];
newIdMar! : number;
newMarque! : Marque;


  constructor(private busService: BusService,
              private router :Router) { }

  ngOnInit(): void {
    this.marques = this.busService.listeMarques();
  }
  addBus() {
    this.newMarque =
    this.busService.consulterMarque(this.newIdMar);
    this.newBus.marque = this.newMarque;
    this.busService.ajouterBus(this.newBus);
    this.router.navigate(['bus']);
    }

}
