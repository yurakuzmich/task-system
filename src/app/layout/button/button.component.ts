import { Component, Input } from '@angular/core';
import { ButtonStyle } from '../../models/button-style.enum';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input('button-style') buttonStyle!: 'gray' | 'blue' | 'dark-blue' | 'white';
}
