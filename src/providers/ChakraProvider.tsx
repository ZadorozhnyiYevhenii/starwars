"use client"

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(to bottom, #f0f4fd, #dfe9fc)",
        color: "black",
      },
    },
  },
});

export const StyleProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
};