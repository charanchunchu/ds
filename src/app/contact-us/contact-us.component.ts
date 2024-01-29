import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private service: ContactService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required,Validators.maxLength(10)]],
      description: ['', Validators.required]
    });
  }
  onSubmit() {
    Object.values(this.registrationForm.controls).forEach(control => {
      control.markAsTouched();
    });
    if (this.registrationForm.valid) {
      const userDetails = this.registrationForm.value;
      this.service.registerUser(userDetails).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          alert('Registration successful!');
          this.registrationForm.reset();
        },
        (error) => {
          console.error('Registration failed:', error);
          alert('Registration failed! Please try again.');
        }
      );
    }
  }
  onPhoneInput(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
}
