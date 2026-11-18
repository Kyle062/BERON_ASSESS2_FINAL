import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class AppComponent {
  requestForm: FormGroup;
  isSubmitted = false;
  purposes = ['Employment', 'Business Permit', 'School Requirement', 'Financial Assistance', 'Others'];
  formStatus = 'INVALID';

  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      fullName: ['', Validators.required],
      birthdate: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^09\\d{9}$')]],
      address: ['', Validators.required],
      purpose: ['', Validators.required],
      otherPurpose: ['']
    });

    // Update status badge in real-time
    this.requestForm.statusChanges.subscribe(status => {
      this.formStatus = status;
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      this.isSubmitted = true;
      console.log(this.requestForm.value);
    }
  }

  resetForm() {
    this.isSubmitted = false;
    this.requestForm.reset();
    this.formStatus = 'INVALID';
  }
}
