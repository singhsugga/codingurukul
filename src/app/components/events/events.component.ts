import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.fetchEvent().subscribe(data=>{
      this.events = data;
      console.log(this.events);
    })
  }
  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    stagePadding:30,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left' class='owl-prev'></i>","<i class='fa fa-chevron-right'></i>"],
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 1.3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

