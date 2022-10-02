// @ts-check
import { program } from "commander";
import { execSync } from "node:child_process";

program.requiredOption("-n, --number <number>", "숫자를 입력하세요");

program.parse();

const options = program.opts();

/** @type {string} */
const number = options.number;
execSync(`node ./src/${number}.js`, { stdio: "inherit" });
