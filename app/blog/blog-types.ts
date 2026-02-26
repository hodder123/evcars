export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}
