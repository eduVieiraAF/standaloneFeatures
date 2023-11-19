import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public form = this.formBuilder.group({
    email: ['edu@edu.net'],
    password: ['craze']
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    console.log(this.form.value);
  }

}
