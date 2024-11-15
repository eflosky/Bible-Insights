import {describe, it} from "vitest";
import {render, screen} from "@testing-library/react";
import React from "react";
import WeBelieve from "./WeBelieve";

describe('We Believe Tests', () => {
    beforeEach(() => {
        render(<WeBelieve/>);
    });

    it('Expect What books are in the bible circle to appear', () => {
       const circle1 = screen.getAllByRole('img')[0] as HTMLImageElement;
       circle1.src = 'Circle.svg';
       screen.getByText('What books are in the Bible?');
       screen.getAllByText('Find out here!')[0];
    });

    it('Expect What is each book about in the Bible?', () => {
        const circle1 = screen.getAllByRole('img')[0] as HTMLImageElement;
        circle1.src = 'Circle.svg';
        screen.getByText('What is each book about in the Bible?');
        screen.getAllByText('Find out here!')[1];
    });

    it('Expect we believe heading to appear', () => {
        screen.getByRole('heading', {name: 'We Believe ALL of the Bible is God’s inspired word and should be read.'});
    })
});