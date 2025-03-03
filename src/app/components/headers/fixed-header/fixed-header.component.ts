import { Component, inject } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { AppService } from '../../../services/common/app.service';

@Component({
  selector: 'app-fixed-header',
  imports: [IonIcon],
  templateUrl: './fixed-header.component.html',
  styleUrl: './fixed-header.component.css'
})
export class FixedHeaderComponent {
  appService = inject(AppService);
}
