export type Video = {
  id: string;
  yearPublished: string;
  name: string;
  url: string;
  author: string;
  tags: string;
  thumbnail: string;
  notes: string;
};

export type DatabaseVideo = {
  id: number;
  yearPublished: number;
  name: string;
  url: string;
  author: string;
  tags: string;
  thumbnail: string;
  notes: string;
};
