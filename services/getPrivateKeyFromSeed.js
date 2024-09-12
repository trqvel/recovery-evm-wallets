import ethers from "ethers";
import fs from 'fs';
export async function generatePrivateKeys(seedFile, outputFile) {
    try {
        const seedPhrases = fs.readFileSync(seedFile, 'utf-8').split('\n');
        const privateKeys = seedPhrases.map((seedPhrase) => {
            const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
            return wallet.privateKey;
        });
        fs.writeFileSync(outputFile, privateKeys.join('\n'));

        console.log('Приватные ключи успешно созданы и сохранены в файле:', outputFile);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}