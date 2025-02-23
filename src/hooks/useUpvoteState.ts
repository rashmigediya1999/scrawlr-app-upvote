import { useState, useEffect } from "react";
import { VoteList, UpvoteContextType } from "../types";
import { loadState, saveState } from "../utils/localStorage";

export const useUpvoteState = (): UpvoteContextType => {
  const [lists, setLists] = useState<VoteList[]>(
    () =>
      loadState("upvoteLists") || [
        { id: 1, votes: [{ id: 1, selected: false }] },
      ]
  );

  useEffect(() => {
    saveState("upvoteLists", lists);
  }, [lists]);

  const toggleVote = (listId: number) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              votes: list.votes.map((vote) => ({
                ...vote,
                selected: !vote.selected,
              })),
            }
          : list
      )
    );
  };

  const addVoteToList = (listId: number) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          const currentState =
            list.votes.length > 0 ? list.votes[0].selected : false;
          return {
            ...list,
            votes: [
              ...list.votes,
              { id: list.votes.length + 1, selected: currentState },
            ],
          };
        }
        return list;
      })
    );
  };

  const addNewList = () => {
    setLists((prevLists) => [
      ...prevLists,
      { id: prevLists.length + 1, votes: [{ id: 1, selected: false }] },
    ]);
  };

  return { lists, toggleVote, addVoteToList, addNewList };
};
