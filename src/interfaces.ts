import { readFileSync, existsSync, readdirSync, lstatSync, statSync, writeFileSync, appendFileSync, rmdirSync, mkdirSync } from 'fs';
export interface FSOperations {
  readFileSync: typeof readFileSync,
  existsSync: typeof existsSync,
  lstatSync: typeof lstatSync,
  readdirSync: typeof readdirSync,
  statSync: typeof statSync,
  writeFileSync: typeof writeFileSync,
  appendFileSync: typeof appendFileSync,
  rmdirSync: typeof rmdirSync,
  mkdirSync: typeof mkdirSync
}