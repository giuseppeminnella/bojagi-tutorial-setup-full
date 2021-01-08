import React from 'react';
import { Button } from './Button.jsx';

export default {
    title: 'Button',
};

export const Normal = () =>
    <Button>Hello</Button>;

export const Outline = () =>
    <Button variant="outline">Goodbye</Button>

export const Dotted = () =>
    <Button variant="dotted">Ob-la-di Ob-la-da</Button>

export const Ciao = () =>
    <Button variant="dotted">CIAOOOO</Button>

export const Onlyontheotherbranch = () =>
    <Button variant="dotted">Onlyontheotherbranch</Button>