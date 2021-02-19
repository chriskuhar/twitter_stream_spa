export interface Fields {
    count: number;
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
  }

  export interface TopHashTags {
    hashtag: string;
    count: number;
  }
  export interface SvcRes {
    count: number;
    topHashtags: TopHashTags[];
  }
