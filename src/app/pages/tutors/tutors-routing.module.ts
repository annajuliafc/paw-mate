import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { TutorDetailsComponent } from './tutor-details/tutor-details.component';

const routes: Routes = [
  {
    path: 'register',
    component: TutorRegisterComponent
  },
  {
    path: ':tutorId',
    component: TutorDetailsComponent
  },
  {
    path: ':tutorId/:petId',
    component: TutorDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorsRoutingModule {}
