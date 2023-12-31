import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/Shared/encryption.service';
import { FicheServiceService } from 'src/app/Shared/fiche-service.service';

@Component({
  selector: 'app-fiche-display',
  templateUrl: './fiche-display.component.html',
  styleUrls: ['./fiche-display.component.css']
})
export class FicheDisplayComponent implements OnInit {
  constructor(private service: FicheServiceService, private encryptionService: EncryptionService, private router: Router) { }
  fiches: any;
  term: any;
  data: any;

  ngOnInit(): void {
    this.data = this.encryptionService.decrypt(localStorage.getItem('data')!);
    this.afficherFiche();
  }


  afficherFiche() {
    this.service.getFiches(this.data.ide).toPromise().then((data: any) => {
      console.log(data);

      this.fiches = data["data"];
    }).catch((err: any) => {
      console.log("erreur a afficher les utilisateurs");
    })
  }
  delete(id: any) {
    if (confirm("Do you really wanna delete this category ?")) {
      console.log("id");
      console.log(id);

      this.service.deleteForm(id).subscribe(
        (data: any) => {
          console.log(data);
          this.afficherFiche();
        });
    }
  }

  redirect(id: any) {
    this.router.navigate(
      ['/courses/fichesedit'],
      { queryParams: { id: id } }
    );
  }

}
