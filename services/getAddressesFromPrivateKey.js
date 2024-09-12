import ethers from "ethers";
import fs from 'fs';
export async function generateAddressesFromPrivateKeys(privateKeysFile, outputFile) {
    try {
        const privateKeys = fs.readFileSync(privateKeysFile, 'utf-8').split('\n');
        const addresses = privateKeys.map((privateKey) => {
            const wallet = new ethers.Wallet(privateKey);
            return wallet.address;
        });
        fs.writeFileSync(outputFile, addresses.join('\n'));

        console.log('Адреса Ethereum успешно созданы и сохранены в файле:', outputFile);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}