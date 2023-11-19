import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { getRouteParams } from 'src/app/helpers/get-routes-params';

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

  public id = getRouteParams('id');

  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    console.log(this.form.value);
    console.log(this.id);
  }

}
