import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses: Bus[] | undefined;

  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBuses();
  }

  private getBuses(){
    this.busService.getBusList().subscribe(data => {
      this.buses = data;
    });
  }

  viewBus(busNumber: string){
    this.router.navigate(['view-bus', busNumber]);
  }

  updateBus(busNumber: string){
    this.router.navigate(['update-bus', busNumber]);
  }

  deleteBus(busNumber: string){
    this.busService.deleteBus(busNumber).subscribe( data => {
      console.log(data);
      this.getBuses();
    })
  }
}






