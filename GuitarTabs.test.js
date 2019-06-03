"use strict";

const GuitarTabs = require("./GuitarTabs");

const emptyTab = `e|
B|
G|
D|
A|
E|`;

describe('GuitarTabs.getString', () => {
    test('should get an empty tab when called after initialized', () => {
        // When
        const s = GuitarTabs.getString();

        // Then
        expect(s).toEqual(emptyTab);
    });

});