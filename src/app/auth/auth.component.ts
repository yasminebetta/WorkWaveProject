import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from '../Shared/auth-service.service';
import { EncryptionService } from '../Shared/encryption.service';
import { NgProgressComponent } from 'ngx-progressbar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public userName: any;
  public email1: any;
  public contact: any;
  public id: any;
  public ide: any;
  data: any;
  constructor(private router: Router, private authService: AuthServiceService, private encryptionService: EncryptionService) { }
  userLogin = new FormGroup({
    email: new FormControl('yasmine.bettaieb@esprit.tn', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]/)]),
    password: new FormControl('azerty', [Validators.required])

  })
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;

  ngAfterViewInit() {
    this.progressBar.start();
    setTimeout(() => {
      this.progressBar.complete();
    }, 1000); // stop progress after 5 seconds

  }
  ngOnInit() {
    // your authentication code here
  }
  login() {
    this.authService.login(this.userLogin.value).subscribe(
      data => {
        console.log(data);

        if ((data as { [key: string]: any })['token'].length != 0) {
          this.id = (data as { [key: string]: any })["user"]['name'];
          this.email1 = (data as { [key: string]: any })["user"]['email'];
          this.ide = (data as { [key: string]: any })["user"]['id'];
          // this.contact = (data as { [key: string]: any })["user"]['phoneNumber'];
          // console.log('aaaaaaaaaaaaaaa');

          // // console.log ((data as { [key: string]: any })["user"]["role"][0]["roleName"]);
          localStorage.setItem('data', this.encryptionService.encrypt({ id: this.id, email: this.email1, contact: "+330654678723",ide:this.ide, token: ((data as { [key: string]: any })['token']), role: "admin" }));
          this.router.navigate(['/courses/displaycourse']);
          this.router.navigate(["/"]).then(e => {
            window.location.reload();
          }
          )
        }
      },
      error => {
        console.log(error.status);
        Swal.fire(
          'erreur!',
          'Mot de passe ou username invalide!',
          'error'
        );
      }
    );
  }

}
