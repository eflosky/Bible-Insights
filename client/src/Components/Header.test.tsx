import {describe, it} from "vitest";
import {render, screen} from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe('Header Tests', () => {

    beforeEach(() => {
        render(<Header />);
    });

    it('Expect logo to appear', () => {
        screen.getByAltText("logo")
    });

    it('Expect site title to appear', () => {
        screen.getByText("Bible Insights")
    });

    it('Expect site links to appear', () => {
        screen.getByText("Track")
        screen.getByText("Memorize")
        screen.getByText("Find Songs")
    });

    it('Expect search icon to appear', () => {
        screen.getByAltText("search")
    });

    it('Expect user icon to appear', () => {
        screen.getByAltText("user")
    });
});