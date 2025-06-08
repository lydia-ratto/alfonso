import React from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';

interface PageContainerProps extends BoxProps {
  children: React.ReactNode;
}

const pageWidth = { base: '100%', sm: '100%', md: '768px', lg: '1024px', xl: '1280px' };

export const PageContainer = ({ children, ...rest }: PageContainerProps) => {
  return (
    // Outer Box for full-width background and vertical padding
    <Box
      w="100%"
      minH="100vh"
      bg="brand.hazelnut"
      paddingY={{ base: '1rem', md: '2rem' }}
      paddingX={{ base: '1rem', md: '2rem' }}
    >
      {/* Inner Box to constrain content width and center it */}
      <Box
        maxWidth={pageWidth}
        mx="auto"
        // Spreads any other passed-in props (like custom styles or IDs)
        {...rest}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;