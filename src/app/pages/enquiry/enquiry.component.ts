import { Component } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  loading = true; 

  ngOnInit() {
    
    setTimeout(() => {
      
      this.loading = false;
    }, 5000); 
  }
}
