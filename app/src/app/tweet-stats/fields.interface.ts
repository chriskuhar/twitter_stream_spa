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
  export interface TweetStat {
    count: number;
    topHashtags: TopHashTags[];
  }
