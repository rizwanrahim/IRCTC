import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'train-form',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './train-form.component.html',
  styleUrl: './train-form.component.css'
})
export class TrainFormComponent {
  trainForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.trainForm = this.fb.group({
      trainName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.trainForm.valid) {
      const trainData = this.trainForm.value;
      console.log('Train Data:', trainData);
      this.trainForm.reset();
      this.trainForm.markAsPristine();
      this.trainForm.markAsUntouched();
      this.submitted = true;  
    }
  }
}
