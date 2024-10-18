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
});