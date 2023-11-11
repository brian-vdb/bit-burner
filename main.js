/*
   Brian van den Berg
   File: main.js
   Description: This file contains functionality related to automation.
*/

import { isProcessRunning } from './internal/process';
import { sleep } from './internal/time';

/**
 * Main function to automate the game.
 *
 * @param {import("./index").NS} ns - The environment object.
 * @returns {Promise<void>} A promise that resolves when the script finishes.
 */
export async function main(ns) {
    const hostname = ns.getHostname();

    // Perform the Propagation Attack
    const pid = ns.exec('./PropagationAttack/main.js', hostname, { preventDuplicates: true });
    while (isProcessRunning(ns, pid)) {
        await sleep(20);
    }
}
