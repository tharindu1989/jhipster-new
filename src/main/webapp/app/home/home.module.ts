import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Res360SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Res360SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Res360HomeModule {}
