"use strict";

import { LoremUtils } from "../../../src/common/random/loremUtils";

describe("Test for loremUtils.ts", (): void => {
    it("should return lorem string", async (): Promise<void> => {
        const expectedString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        const loremString = LoremUtils.getLoremString();
        expect(loremString).toStrictEqual(expectedString);
    });
})
