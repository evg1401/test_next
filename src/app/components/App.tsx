'use client'

import { Container, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { darkTheme } from "../constants/theme";

export default function App({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#EEEEEE' }}>
                <Container>
                    {children}
                </Container>
            </main>
        </ThemeProvider>
    )
}