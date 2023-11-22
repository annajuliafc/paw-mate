import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './header/header.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
