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

// IF YOU'RE READING THIS, YOU'VE FOUND MY UTILS FILE WHERE I DEFINED A COUPLE OF INTERFACES THAT I NEED TO USE ACROSS THE COMPONENTS.
