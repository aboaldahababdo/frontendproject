
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  submitted = signal(false);
  success = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^01[0-9]{9}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

 
  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted.set(true);

    if (this.contactForm.invalid) {
      return;
    }

   
    console.log(this.contactForm.value);

    this.success.set(true);
    this.contactForm.reset();
    this.submitted.set(false);
  }
}
