export interface Video {
  _id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  views?: number;
  likes?: number;
  duration?: string;
  publish_date?: string;
  project?: string;
}
