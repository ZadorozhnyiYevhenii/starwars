"use client"

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f7f7f7",
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