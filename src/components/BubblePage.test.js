import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render (<BubblePage />)
    screen.debug
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    render(<BubblePage />)
    
    const colors = screen.getByText(/colors/i)
    expect(colors).toBeInTheDocument()

    //Keep in mind that our service is called on mount for this component.
});