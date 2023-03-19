import { NgModule } from '@angular/core';
import { SqlComponentsComponent } from './sql-components.component';
import { SqlFormComponent } from './sql-form/sql-form.component';
import { SqlAddTableComponent } from './sql-add-table/sql-add-table.component';
import { SqlCheckboxComponent } from './sql-checkbox/sql-checkbox.component';
import { SqlFullcalendarComponent } from './sql-fullcalendar/sql-fullcalendar.component';
import { SqlPanelComponent } from './sql-panel/sql-panel.component';
import { SqlCardComponent } from './sql-card/sql-card.component';
import { SqlDatepickerComponent } from './sql-datepicker/sql-datepicker.component';
import { SqlUploadFormComponent } from './sql-upload-form/sql-upload-form.component';
import { SqlInputComponent } from './sql-input/sql-input.component';
import { SqlSelectComponent } from './sql-select/sql-select.component';
import { SqlTextareaComponent } from './sql-textarea/sql-textarea.component';
import { SqlCalendarComponent } from './sql-calendar/sql-calendar.component';
import { SqlRadioGroupComponent } from './sql-radio-group/sql-radio-group.component';
import { SqlTableComponent } from './sql-table/sql-table.component';

@NgModule({
  declarations: [
    SqlComponentsComponent,
  ],
  imports: [
    SqlFormComponent,
    SqlAddTableComponent,
    SqlCalendarComponent,
    SqlCheckboxComponent,
    SqlFullcalendarComponent,
    SqlPanelComponent,
    SqlCardComponent,
    SqlDatepickerComponent,
    SqlUploadFormComponent,
    SqlInputComponent,
    SqlSelectComponent,
    SqlTextareaComponent,
    SqlRadioGroupComponent,
    SqlTableComponent
  ],
  exports: [
    SqlComponentsComponent,
    SqlFormComponent,
    SqlAddTableComponent,
    SqlCalendarComponent,
    SqlCheckboxComponent,
    SqlFullcalendarComponent,
    SqlPanelComponent,
    SqlCardComponent,
    SqlDatepickerComponent,
    SqlUploadFormComponent,
    SqlInputComponent,
    SqlSelectComponent,
    SqlTextareaComponent,
    SqlRadioGroupComponent,
    SqlTableComponent
  ]
})
export class SqlComponentsModule { }
