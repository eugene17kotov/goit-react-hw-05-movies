import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledNav } from './SharedLayout.styled';

import { Box } from 'utils/Box';

export const SharedLayout = () => {
  return (
    <Box m="0 auto" p="0 15px" maxWidth="1300px">
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
