import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-page-loader',
  templateUrl: './full-page-loader.component.html',
  styleUrls: ['./full-page-loader.component.css']
})
export class FullPageLoaderComponent implements OnInit {
  @Input() loading: boolean = true;
  filled = 0;
  isRunning = true;

  ngOnInit() {
    const interval = setInterval(() => {
      if (this.filled < 100) {
        this.filled += 4; 
      } else {
        clearInterval(interval); 
        this.loading = false; 
      }
    }, 20); 
  }
}
