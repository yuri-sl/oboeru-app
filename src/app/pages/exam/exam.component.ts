import { Component } from '@angular/core';
import type { Quiz } from '../../models/quiz.model';
import type { QuizQuestion } from '../../models/quiz.model';
import type { QuizOption } from '../../models/quiz.model';
import { ButtonModule, Button } from 'primeng/button';
import { ButtonGroupModule, ButtonGroup } from 'primeng/buttongroup';
import { PaginatorModule } from 'primeng/paginator';
import { TopMenuBarComponent } from '../../shared/components/top-menu-bar/top-menu-bar.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { provideAnimations } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-exam',
  imports: [
    Button,
    PaginatorModule,
    TopMenuBarComponent,
    AutoCompleteModule,
    FormsModule,
    Toast,
    Ripple,
  ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss',
  providers: [MessageService, provideAnimations()],
})
export class ExamComponent {
  constructor(private messageService: MessageService) {}
  first: number = 0;
  rows: number = 10;
  numList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  filteredNumList: number[] = [];
  selectedNum?: number;

  filteredNums(event: { query: string }) {
    const q = (event.query ?? '').trim();

    if (!q) {
      this.filteredNumList = [...this.numList];
      return;
    }

    this.filteredNumList = this.numList.filter((n) => n.toString().includes(q));
  }

  correct_ans_id: number = 2;

  verify_answer(quiz_item: QuizOption) {
    console.log('Clicked');

    if (this.correct_ans_id == quiz_item.option_id) {
      this.messageService.add({
        severity: 'success',
        summary: 'Correto',
        detail: 'Resposta correta!',
        life: 3000,
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Errado',
        detail: 'Resposta errada!',
        life: 3000,
      });
    }
  }

  quizOptA: QuizOption = {
    option_id: 1,
    option_text: 'Teste de opção',
    ans: true,
  };
  quizOptB: QuizOption = {
    option_id: 2,
    option_text: 'Teste de opção#2',
    ans: false,
  };
  quizOptC: QuizOption = {
    option_id: 3,
    option_text: 'Teste de opção#3',
    ans: false,
  };
  quizOptD: QuizOption = {
    option_id: 4,
    option_text: 'Teste de opção#4',
    ans: false,
  };
  quiz_qt_one: QuizQuestion = {
    question_id: 1,
    question_title: 'acerte a opção certa',
    options: [this.quizOptA, this.quizOptB, this.quizOptC, this.quizOptD],
    quiz_correct_option_id: 1,
  };
}
