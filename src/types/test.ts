export interface TestResponse {
  code: string;
  message: string;
  quiz1: string;
  quiz2: string;
  quiz3: string;
  quiz4: string;
  quiz5: string;
  examId: number;
}

export interface UserAnswer {
  examId: number;
  userAnswer1: string;
  userAnswer2: string;
  userAnswer3: string;
  userAnswer4: string;
  userAnswer5: string;
}

export interface ScoreResponse {
  code: string;
  message: string;
  score: number;
  result: string;
}
