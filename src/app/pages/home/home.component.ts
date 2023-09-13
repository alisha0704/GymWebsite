import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = true; 

  ngOnInit() {
    
    setTimeout(() => {
      
      this.loading = false;
    }, 5000); 
  }
}
