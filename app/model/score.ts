export interface Score {
  totalScore: number;
  responses: Array<ResponseScore>;
}

export interface ResponseScore {
  score: number;
  first?: number;
  correct?: number;
  incorrect?: number;
}
