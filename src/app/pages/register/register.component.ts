import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  

  fb=inject(FormBuilder);
   

  registerForm !: FormGroup;
   
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', Validators.required],
      Programme: ['', Validators.required],

    });
    throw new Error('Method not implemented.');
  }

 
}
