import { Component } from '@angular/core';
import type { Quiz } from '../../models/quiz.model';
import type { QuizQuestion } from '../../models/quiz.model';
import type { QuizOption } from '../../models/quiz.model';
import { ButtonModule, Button } from 'primeng/button';
import { ButtonGroupModule, ButtonGroup } from 'primeng/buttongroup';
import { PaginatorModule } from 'primeng/paginator';
import { TopMenuBarComponent } from '../../shared/components/top-menu-bar/top-menu-bar.component';
@Component({
  selector: 'app-exam',
  imports: [Button, PaginatorModule, TopMenuBarComponent],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss',
})
export class ExamComponent {
  first: number = 0;
  rows: number = 10;
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
