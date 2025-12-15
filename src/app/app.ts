import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Card } from './card/card'; 
import { Navbar } from './navbar/navbar';
=======
import { Navbar } from "./navbar/navbar";
>>>>>>> 85f96380dc05ed69e1b2e66e31ab758713e45ad0
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
collegename = "Amal Jyothi College of Engineering"

person={
  name : "Rixan",
  email : "Rixantom7v@gmail.com",
  contactno: "8848031669"
}
 protected readonly title = signal('xxxx');
  
=======
  protected readonly title = signal('ac');
>>>>>>> 85f96380dc05ed69e1b2e66e31ab758713e45ad0
}
