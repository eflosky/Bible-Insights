import {it, describe, expect} from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Tests', () => {

    beforeEach(() => {
        render(<App />);
    });

    it('Expect header to appear on App ', () => {
        screen.getByText('Bible Insights');
    });

    it('Expect banner to appear on App ', () => {
        screen.getByText('Bible Notes Tracker');
    });

    it('Expect we believe section to appear on App ', () => {
       screen.getByText('What books are in the Bible?');
    });
});