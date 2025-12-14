export interface Quiz {
  id: Number;
  title: string;
  description?: string;
  category?: string;
  time_limit: number;
  author: string;
  difficulty: 'easy' | 'normal' | 'hard';
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  question_id: Number;
  question_title: string;
  quiz_img_url?: string;
  options: QuizOption[];
  quiz_correct_option_id: Number;
  explanation?: string;
}

export interface QuizOption {
  option_id: number;
  option_text: string;
  ans: boolean;
}
