/*
   Brian van den Berg
   File: main.js
   Description: This file contains functionality related to automation.
*/

import { propagationAttack } from "./tools/handles";
import { weaken } from "./network/hack";

/**
 * Main function to automate the game.
 *
 * @param {import("./index").NS} ns - The environment object.
 * @returns {Promise<void>} A promise that resolves when the script finishes.
 */
export async function main(ns) {
  propagationAttack(ns, "data/servers.txt");
  weaken(ns, 'n00dles', 'n00dles', 2);
}
