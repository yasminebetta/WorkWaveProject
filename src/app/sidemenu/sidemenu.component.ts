import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Shared/auth-service.service';
import { Router } from '@angular/router';
import { EncryptionService } from '../Shared/encryption.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menuapp: any;
  menu: any;

  user: any;

  notifications: any = [];
  data: any;
  menusettings: any;
  menudashboard: any;

  constructor(private auth: AuthServiceService, private router: Router, private encryptionService: EncryptionService) { }

  ngOnInit(): void {
    // this.data = this.encryptionService.decrypt(localStorage.getItem('data')!);
    // this.data["role"]="Admin"; // to remove 
    // console.log(this.data["role"]);

    // switch (this.data["role"]) {
    //   case "Admin":
    this.menuapp = [

      {
        mainTitle: "APPLICATIONS",
        title: "Courses",
        counter: 0,
        icon: 'icon ni ni-book-fill',
        subMenus: [
        
          {
            title: "Fiches list",
            counter: 0,
            link: '/courses/displayfiches',
            icon: ''
          },
          {
            title: "Categories",
            counter: 0,
            link: '/courses/displaycateg',
            icon: ''

          },
       
          {
            title: "Enroll",
            counter: 0,
            link: '/courses/enrollement',
            icon: ''

          }
        ]
      },
    ]

    
    


  }






}

// }
