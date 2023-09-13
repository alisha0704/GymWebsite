import { Component, OnInit } from '@angular/core';
import { FullPageLoaderComponent } from 'src/app/full-page-loader/full-page-loader.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loading = true; 

  ngOnInit() {
    
    setTimeout(() => {
      
      this.loading = false;
    }, 1000); 
  }
}