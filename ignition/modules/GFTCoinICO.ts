// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GFTCoinICOModule = buildModule("GFTCoinICOModule", (m) => {
    const beneficiary = m.getAccount(0);

    const gftCoinICO = m.contract("GFTCoinICO", [beneficiary]);

    return { gftCoinICO };
});

export default GFTCoinICOModule;