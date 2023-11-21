import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
