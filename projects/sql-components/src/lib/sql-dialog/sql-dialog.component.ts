import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-sql-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './sql-dialog.component.html',
  styleUrls: ['./sql-dialog.component.css']
})
export class SqlDialogComponent {

  @Input() message: any ='';

}
