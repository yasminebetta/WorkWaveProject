// enrollement.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/Shared/categorie.service';
import { FicheServiceService } from 'src/app/Shared/fiche-service.service';
import { FormationService } from 'src/app/Shared/formation.service';

@Component({
  selector: 'app-enrollement',
  templateUrl: './enrollement.component.html',
  styleUrls: ['./enrollement.component.css']
})
export class EnrollementComponent implements OnInit {
  categories: any; // Array to store available categories
  selectedCategory: any; // Selected category
  questions: any[] = []; // Array to store questions
  currentQuestionIndex: number = 0; // Index of the current question
  userResponseForm: FormGroup; // Form for user responses
  userResponses: any[] = []; // Array to store user responses
  showVerificationResults: boolean = false; // Flag to control the display of verification results

  constructor(private ficheService: FicheServiceService, private categservice: CategorieService) {
    this.userResponseForm = new FormGroup({
      response: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    // Fetch available categories from the backend
    this.categservice.getCategs().subscribe((data: any) => {
      this.categories = data.data;
    });
  }

  loadQuestions() {
    // Fetch questions for the selected category
    if (this.selectedCategory) {
      this.ficheService.getQuestionsByCategory(this.selectedCategory).subscribe((data: any) => {
        this.questions = data.data;
        this.currentQuestionIndex = 0;
        this.userResponses = [];
        this.showVerificationResults = false;
      });
    }
  }

  saveResponse() {
    // Save the user response to the list
    const response = this.userResponseForm.get('response')?.value;
    this.userResponses.push({ question: this.questions[this.currentQuestionIndex], response, isCorrect: null });
    // Reset the form and move to the next question
    this.userResponseForm.reset();
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // Show verification results if it's the last question
      this.showVerificationResults = true;
    }
  }

  showAnswer() {
    // Display the correct answer instantly
    const correctAnswer = this.questions[this.currentQuestionIndex].Reponse;
    alert(`The correct answer is: ${correctAnswer}`);
  }

  submitResponses() {
    // Optionally, you can send the user responses and verification status to the backend for recording or further processing
    // Example: this.ficheService.recordUserResponses(this.userResponses).subscribe(result => console.log(result));

    // Display the results
    console.log(this.userResponses);
  }

  moveToNextQuestion() {
    // Move to the next question
    this.userResponseForm.reset();
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // Show verification results if it's the last question
      this.showVerificationResults = true;
    }
  }
}
