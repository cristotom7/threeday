import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card'; 
import { Navbar } from './navbar/navbar';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
collegename = "Amal Jyothi College of Engineering"

person={
  name : "Rixan",
  email : "Rixantom7v@gmail.com",
  contactno: "8848031669"
}
 protected readonly title = signal('xxxx');
  
}
