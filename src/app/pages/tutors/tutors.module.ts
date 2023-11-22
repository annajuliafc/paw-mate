import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Route
import { TutorsRoutingModule } from './tutors-routing.module';

// Components
import { TutorsComponent } from './tutors.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { PetsRegisterComponent } from './pets/pets-register/pets-register.component';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

// Directives
import { CpfValidationDirective } from 'src/app/directives/cpf-validation.directive';

@NgModule({
  declarations: [TutorsComponent, TutorRegisterComponent, CpfValidationDirective, PetsRegisterComponent],
  imports: [
    CommonModule,
    TutorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [TutorsComponent],
})
export class TutorsModule {}
