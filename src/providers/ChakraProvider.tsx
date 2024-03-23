"use client"

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactFlowProvider } from "reactflow";

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
      <ReactFlowProvider>
      {children}
      </ReactFlowProvider>
    </ChakraProvider>
  );
};