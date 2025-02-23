import "./App.css";
import { Plus } from "lucide-react";
import styled from "styled-components";
import { useUpvote } from "./context/UpvoteContex";
import { UpvoteList } from "./components/UpvoteList/UpvoteList";

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const AddListButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.9;
  }
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`;

function App() {
  const { lists, toggleVote, addVoteToList, addNewList } = useUpvote();

  return (
    <>
      <Container>
        <Content>
          <Header>
            <Title>Upvote System</Title>
            <AddListButton onClick={addNewList}>
              <Plus size={20} />
              Add New List
            </AddListButton>
          </Header>
          <ListsContainer>
            {lists.map((list) => (
              <UpvoteList
                key={list.id}
                listId={list.id}
                votes={list.votes}
                onVoteToggle={toggleVote}
                onAddVote={addVoteToList}
              />
            ))}
          </ListsContainer>
        </Content>
      </Container>
    </>
  );
}

export default App;
