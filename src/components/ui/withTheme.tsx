// withTheme.tsx
import React from 'react';
import { useTheme } from 'react-native-paper';

const withTheme = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: Omit<P, 'theme'>) => {
    const theme = useTheme();

    return <WrappedComponent {...(props as P)} theme={theme} />;
  };
};

export default withTheme;
