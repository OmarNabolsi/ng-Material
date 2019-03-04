import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
