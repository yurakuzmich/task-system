import { Component, Input, OnInit } from '@angular/core';
import { TaskPriority } from '../../models/task-priority.enum copy';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-priority-pill',
  templateUrl: './priority-pill.component.html',
  styleUrl: './priority-pill.component.scss'
})
export class PriorityPillComponent implements OnInit{
  @Input() priority!: string;
  label = '';

  ngOnInit(): void {
    this.label = this.priority === TaskPriority.HIGH ? 'Высокий' :
      this.priority === TaskPriority.MEDIUM ? 'Средний' :
      'Низкий';
  }
}
