import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})

export class CreatePageComponent implements OnInit {
  public Editor = ClassicEditor;
  public model = {
	  name: 'John',
	  surname: 'Doe',
    description: '<p>A <b>really</b> nice fellow.</p>',
	};
  constructor() { }

  ngOnInit() {
  }

  public submit() {
    console.log('---- submit ---');
    alert(this.model.description);
  }

}
