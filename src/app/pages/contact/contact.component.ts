import { Component } from '@angular/core';
import { FullPageLoaderComponent } from 'src/app/full-page-loader/full-page-loader.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  loading = true; 

  ngOnInit() {
    
    setTimeout(() => {
      
      this.loading = false;
    }, 5000); 
  }
}
