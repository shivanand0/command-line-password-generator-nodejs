#!/usr/bin/env node

const program = require('commander')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
    // const chalk = require("chalk")
    // const clipBoardy = require("clipboardy")
const log = console.log
program.version('1.0.0').description("Simple Password Generator")

//node index command this command will give Generated output in console
// program.command('generate').action(() => {
//     log('Generated')
// }).parse()
//add command options - by default the length is 8
program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt (false by default)')
    .option('-wn, -with-numbers', 'add numbers')
    .option('-ws, -with-symbols', 'add symbols')
    .parse()

// log(program.opts()) //all values of length, save, nn are in program.opts

const { length, save, WithNumbers, WithSymbols } = program.opts()
    // log(length, save, WithNumbers, WithSymbols)

// get generated password
const generatedPassword = createPassword(length, WithNumbers, WithSymbols)
log(generatedPassword)
    // log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))

// copy to clipboard
// clipBoardy.writeSync(generatedPassword)
// log("Password copied to clipboard")

//save password to file
if (save) {
    savePassword(generatedPassword)
}