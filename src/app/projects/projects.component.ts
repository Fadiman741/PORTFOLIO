import { Component, OnInit } from '@angular/core';
import { faSquareWhatsapp,faInstagram,faSquareTwitter,faSquareFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faSquareWhatsapp=faSquareWhatsapp;
  faInstagram=faInstagram;
  faSquareTwitter=faSquareTwitter;
  faSquareFacebook=faSquareFacebook;


  constructor() { }

  ngOnInit() {
  }

}
