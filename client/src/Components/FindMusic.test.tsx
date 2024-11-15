import {describe, it} from "vitest";
import {render, screen} from "@testing-library/react";
import React from "react";
import FindMusic from "./FindMusic";

describe('Find Music Tests', () => {
    beforeEach(() => {
        render(<FindMusic/>);
    });

    it(`Expect find biblical music heading to appear`, () => {
        screen.getByText('Find Biblical Music');
    });
});