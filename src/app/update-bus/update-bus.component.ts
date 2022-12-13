import { Marque } from './../model/marque.model';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../services/bus.service';
import { Bus } from '../model/bus.model';
@Component({
selector: 'app-update-bus',
templateUrl: './update-bus.component.html',


styles: []
})
export class UpdateBusComponent implements OnInit {
currentBus = new Bus();
marques! : Marque[];
updatedMarId! : number;
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private busService: BusService) { }

ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.marques = this.busService.listeMarques();
this.currentBus = this.busService.consulterBus(this.activatedRoute.snapshot.params['id']);
this.updatedMarId=this.currentBus.marque.idMar;
} 
updateBus()
{ //console.log(this.currentProduit);
this.currentBus.marque=this.busService.consulterMarque(this.updatedMarId);
this.busService.updateBus(this.currentBus);
this.router.navigate(['bus']);
}}