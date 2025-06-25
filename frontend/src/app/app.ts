import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading-service';
import { Loader } from './components/loader/loader';


@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public loadingService:LoadingService) {
  
    
  }
  protected title = 'frontend';
}
