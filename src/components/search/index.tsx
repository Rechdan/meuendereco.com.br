import { styled } from "styled-components";

import Input from "_/components/search/input";

type SearchProps = {
  cep?: string;
};

const StyledContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  flex-flow: column;
  display: flex;
  width: 100%;
`;

const StyledTitle = styled.div`
  flex: 0 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 900;
  font-size: 2rem;
`;

const StyledSearchBox = styled.div`
  flex: 0 0 auto;
  flex-flow: column;
  display: flex;
`;

const Search = ({ cep }: SearchProps) => (
  <StyledContainer>
    {cep ? (
      <></>
    ) : (
      <>
        <StyledTitle>Meu Endereço</StyledTitle>
        <StyledSearchBox>
          <Input />
        </StyledSearchBox>
      </>
    )}
  </StyledContainer>
);

export default Search;
