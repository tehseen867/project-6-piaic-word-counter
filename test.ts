#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";

console.log(chalk.magenta('=======>>> WELLCOME TO WORDS/LETTERS COUNTER APP <<<========'))
async function word_counter() {
    let write_words = await inquirer.prompt([{
        name: 'words',
        type: 'input',
        message: chalk.blueBright('please enter your paragraph')
    }])
    let select_option = await inquirer.prompt([{
        name: 'select',
        type: 'list',
        message: chalk.green('what do you want to count ?'),
        choices: ['Words', 'Letters']
    }])
    let words_in_array = write_words.words.split(' ').filter((value: String) =>
        value !== '' && value !== '?' && value !== '!' && value !== ' ' && value !== '.' && value !== ',')

    switch (select_option.select) {
        case 'Words':
            let count_words = words_in_array.length
            console.log({ "total words": count_words })
            break;

        case 'Letters':
            if (words_in_array.length > 0) {
                let count_alphabets = words_in_array.reduce((a: string, b: string) => a + b).length
                console.log({ "total letters": count_alphabets })
            }

            else {
                console.log({ "total letters": 0 })
            }
            break;

    }
    let ask_for_retry = await inquirer.prompt([{
        name: 'try_again',
        type: 'list',
        message: chalk.yellow('want to count another ?'),
        choices: ['Yes', 'No']
    }])
    switch (ask_for_retry.try_again) {
        case 'Yes':
            word_counter()
            break;
        case 'No':
            process.exit()
    }
    
}
word_counter()




