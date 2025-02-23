import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  align-items: center;
`;

export const AddButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.upvote.default.background};
  transition: ${({ theme }) => theme.transitions.default};
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.upvote.selected.background};
  }
`;
