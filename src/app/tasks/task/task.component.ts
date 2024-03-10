import { Component, Input } from '@angular/core';
import { TaskWithUser } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: TaskWithUser | null;

}
