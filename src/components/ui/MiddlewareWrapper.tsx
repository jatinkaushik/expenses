// components/MiddlewareWrapper.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

interface MiddlewareWrapperProps {
  children: React.ReactElement | React.ReactElement[];
}

const MiddlewareWrapper: React.FC<MiddlewareWrapperProps> = ({ children }) => {
    const theme = useTheme()
    const isFocused = useIsFocused();
    const [props, setProps] = useState({});

    useEffect(() => {
        if (isFocused) {
        setProps({ theme: theme }); // Example prop value
        }
    }, [isFocused]);

    if (Array.isArray(children)) {
        return (
        <>
            {children.map((child) => React.cloneElement(child, props))}
        </>
        );
    }

    return React.cloneElement(children, props);
};

export default MiddlewareWrapper;
