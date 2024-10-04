import {it, describe} from "vitest";
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Tests', () => {
    it('Should render App', () => {
        render(<App />);
    });
});