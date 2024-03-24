export interface ReviewType {
  rating: number;
  comment: string;
  reviewer: string;
}

export interface MovieType {
  id: string;
  title: string;
  director: string;
  year: string;
  poster: string;
  reviews: ReviewType[];
}
