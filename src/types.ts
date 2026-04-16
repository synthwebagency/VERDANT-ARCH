export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  year: string;
  story: string;
  gallery: string[];
}

export interface Service {
  title: string;
  description: string;
}
