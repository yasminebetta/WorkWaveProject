import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/Shared/encryption.service';
import { FicheServiceService } from 'src/app/Shared/fiche-service.service';

@Component({
  selector: 'app-fiche-add',
  templateUrl: './fiche-add.component.html',
  styleUrls: ['./fiche-add.component.css']
})
export class FicheAddComponent implements OnInit {
  constructor(private service: FicheServiceService, private router: Router, private encryptionService: EncryptionService) { }
  id: any;
  ficheForm = new FormGroup({
    IDUtilisateur: new FormControl(''), // Hidden field for user id
    Question: new FormControl('', [Validators.required]),
    Reponse: new FormControl('', [Validators.required]),
    Categorie: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]/)]),
  });

  ngOnInit(): void {
    this.id = this.encryptionService.decrypt(localStorage.getItem('data')!);
    console.log(this.id);

    this.ficheForm.patchValue({ IDUtilisateur: this.id.ide });
  }

  addFiche() {
    console.log(this.ficheForm.value);
    this.service.addFiches(this.ficheForm.value).subscribe((data: any) => {
      this.router.navigate(["/courses/displayfiches"]);
    });
  }
  
}
