import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean;

  constructor() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('onSubmit');
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    console.log('onSubmit', newTask);
    
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    
    this.reminder = false;
  }
  display=false;
  toggle(){
    this.display=!this.display;

  }
  
  
}
