import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/user/post.service';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postSer: PostService) { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    title: new FormControl,
    description: new FormControl
  })

  post(){
    this.postSer.post(JSON.stringify({
      title: this.myForm.value.title,
      description: this.myForm.value.description
    }))
  }
}
