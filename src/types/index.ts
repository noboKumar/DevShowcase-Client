export interface UserFormData {
  username: string;
  email: string;
  password: string;
  photo: string;
}

export interface Project {
  id: string;
  userId: string;
  title: string;
  category: string;
  description: string;
  githubRepo: string;
  liveLink: string;
  techStack: string[];
  thumbnail: string;
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
}
