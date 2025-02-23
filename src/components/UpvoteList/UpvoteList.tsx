import React from "react";
import { Plus } from "lucide-react";
import { UpvoteButton } from "../UpvoteButton/UpvoteButton";
import { Container, VotesContainer, AddButton } from "./styles";
import { Vote } from "../../types";

interface UpvoteListProps {
  listId: number;
  votes: Vote[];
  onVoteToggle: (listId: number, voteId: number) => void;
  onAddVote: (listId: number) => void;
}

export const UpvoteList: React.FC<UpvoteListProps> = ({
  listId,
  votes,
  onVoteToggle,
  onAddVote,
}) => {
  return (
    <Container>
      <VotesContainer>
        {votes.map((vote) => (
          <UpvoteButton
            key={vote.id}
            selected={vote.selected}
            onClick={() => onVoteToggle(listId, vote.id)}
          />
        ))}
        <AddButton
          onClick={() => onAddVote(listId)}
          aria-label="Add new upvote"
        >
          <Plus size={24} />
        </AddButton>
      </VotesContainer>
    </Container>
  );
};
