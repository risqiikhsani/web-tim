export interface NewsBlogsType {
  id: string; // Unique identifier
  text: string; // Content of the news/blog
  title: string; // Title of the news/blog
  type: 'news' | 'blogs'; // Enum-like field for type
  files?: File[]; // Optional array of uploaded files
  createdAt: string; // ISO date string
  updatedAt?: string; // Optional ISO date string
}
