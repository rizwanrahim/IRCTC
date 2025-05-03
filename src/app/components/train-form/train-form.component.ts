import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'train-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './train-form.component.html',
  styleUrl: './train-form.component.css'
})
export class TrainFormComponent {
  submitted: boolean = false;
  trainName: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Train Data:', { trainName: this.trainName });
      this.trainName = '';
      form.resetForm();
      this.submitted = true;
    }
  }
}
