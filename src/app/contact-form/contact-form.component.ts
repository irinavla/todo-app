import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';

  constructor(private formBuilder: FormBuilder) {

    this.rForm = formBuilder.group({
      'name': [ null, Validators.required ],
      'description': [ null, Validators.compose([ Validators.required, Validators.minLength(30), Validators.maxLength(500) ]) ],
      'validate': ''
    });
   }

   addPost(post) {
     this.description = post.description;
     this.name = post.name;
   }

  ngOnInit() {
  }

}
