import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from 'src/app/Shared/encryption.service';
import { FicheServiceService } from 'src/app/Shared/fiche-service.service';

@Component({
  selector: 'app-fiche-edit',
  templateUrl: './fiche-edit.component.html',
  styleUrls: ['./fiche-edit.component.css']
})
export class FicheEditComponent implements OnInit {
  constructor(private service: FicheServiceService, private router: Router, private encryptionService: EncryptionService, private route: ActivatedRoute) { }
  id: any;
  ficheForm = new FormGroup({
    IDUtilisateur: new FormControl(''), // Hidden field for user id
    Question: new FormControl('', [Validators.required]),
    Reponse: new FormControl('', [Validators.required]),
    Categorie: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]/)]),
  });
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    console.log(this.id);

    this.afficherFiche();
  }
  afficherFiche() {
    this.service.getFichesbyid(this.id).subscribe((data: any) => {
      console.log(data.data);

      this.ficheForm.get("IDUtilisateur")!.setValue(data.data.IDUtilisateur);
      this.ficheForm.get("Question")!.setValue(data.data.Question);
      this.ficheForm.get("Reponse")!.setValue(data.data.Reponse);
      this.ficheForm.get("Categorie")!.setValue(data.data.Categorie);
      console.log(this.ficheForm.value);

    })
  };

  editFiche() {
    console.log(this.ficheForm.value);
    this.service.updateFiches(this.ficheForm.value, this.id).subscribe((data: any) => {
      this.router.navigate(["/courses/displayfiches"])
    })
  }
}
