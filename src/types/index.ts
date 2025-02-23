export interface Vote {
  id: number;
  selected: boolean;
}

export interface VoteList {
  id: number;
  votes: Vote[];
}

export interface UpvoteContextType {
  lists: VoteList[];
  toggleVote: (listId: number, voteId: number) => void;
  addVoteToList: (listId: number) => void;
  addNewList: () => void;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
    };
    upvote: {
      default: {
        background: string;
        arrow: string;
      };
      selected: {
        background: string;
        arrow: string;
      };
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    default: string;
  };
}
