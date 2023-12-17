import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule
  ],
  exports : [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
