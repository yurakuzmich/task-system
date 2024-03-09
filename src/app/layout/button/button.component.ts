import { Component, Input } from '@angular/core';
import { ButtonStyle } from '../../models/button-style.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() buttonStyle: string = ButtonStyle.BLUE;
}
