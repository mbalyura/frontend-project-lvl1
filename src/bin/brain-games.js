#!/usr/bin/env node
import { getName } from ".."
console.log('---------------------------');
console.log('Welcome to the Brain Games!');
console.log('---------------------------');
console.log('');

const userName = getName('May I have your name? ');

console.log(`Hi, ${userName}!`);