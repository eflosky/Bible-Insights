import {describe, it} from "vitest";
import {render, screen} from "@testing-library/react";
import React from "react";
import Banner from "./Banner";

describe('Banner Tests', () => {
    beforeEach(() => {
        render(<Banner />);
    });

    it('Expect Bible Notes info to appear', () => {
        screen.getByText('Bible Notes Tracker');
        screen.getByText('Gain Insights into your Personal Study');
        screen.getByText('Track Now!');
    });

    it('Expect Bible Notes data to appear', () => {
        screen.getByAltText('Data diagram');
    });
});