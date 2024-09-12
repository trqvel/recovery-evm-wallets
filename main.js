import {generateAddressesFromPrivateKeys} from "./services/getAddressesFromPrivateKey.js";
import {generatePrivateKeys} from "./services/getPrivateKeyFromSeed.js";
import inquirer from "inquirer";

async function showMainMenu() {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenuChoice',
            message: 'Select an option:',
            choices: ['EVM', 'Exit']
        }
    ]);

    switch (answer.mainMenuChoice) {
        case 'EVM':
            await showEVMMenu();
            break;
        case 'Exit':
            break;
    }
}


async function showEVMMenu() {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'evmMenuChoice',
            message: 'Select an option:',
            choices: ['Получить приватный ключ из сид-фразы', 'Получить адресс из приватного ключа']
        }
    ]);

    switch (answer.evmMenuChoice) {
        case 'Получить приватный ключ из сид-фразы':
            await generatePrivateKeys("./data/evm/mnemonic.txt", "./output/evmprivate.txt")
            break;
        case 'Получить адресс из приватного ключа':
            await generateAddressesFromPrivateKeys("./data/evm/private_key.txt", "./output/evmaddress.txt")
            break;
    }
}

showMainMenu()