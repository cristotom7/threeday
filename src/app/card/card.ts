import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Service } from '../service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

//repeat = Array.from({ length: 6});
  products:any[]=[];
  constructor(private apiservice:Service){}
  ngOnInit(){
    this.apiservice.getProduct().subscribe((data:any)=>{
      this.products=data;
      console.log(this.products);
    }
    );
  }
}
