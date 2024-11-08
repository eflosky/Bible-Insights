import {describe, it} from "vitest";
import {render, screen} from "@testing-library/react";
import React from "react";
import Banner from "./Banner";

describe('Header Tests', () => {
    beforeEach(() => {
        render(<Banner />);
    });

    it('Expect logo to appear', () => {
        screen.getByTestId("Banner-Container")
    });
});