import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

// Maybe unused
/*
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
// import { YouTubePlayerModule } from "@angular/youtube-player";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
*/

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';


const components = [
  DashboardComponent,
  NavigationComponent
];

const modules = [
  CommonModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatTabsModule,
  ClipboardModule,
  MatInputModule,
  RouterModule,
  // Maybe unused
  /*
  MatSnackBarModule,
  MatAutocompleteModule,
  DragDropModule,
  MatProgressSpinnerModule,
  HttpClientModule,
  MatTooltipModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  */
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
    
  ],
  exports: [
    ...components,
    ...modules
  ],

})

export class SharedModule { }