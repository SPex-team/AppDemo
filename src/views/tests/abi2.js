export default [
{
    "inputs": [
    {
        "internalType": "bytes",
        "name": "target",
        "type": "bytes"
    }
],
    "name": "getBeneficiary",
    "outputs": [
    {
        "components": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "beneficiary",
                        "type": "bytes"
                    },
                    {
                        "components": [
                            {
                                "components": [
                                    {
                                        "internalType": "bytes",
                                        "name": "val",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bool",
                                        "name": "neg",
                                        "type": "bool"
                                    }
                                ],
                                "internalType": "struct BigInt",
                                "name": "quota",
                                "type": "tuple"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "bytes",
                                        "name": "val",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bool",
                                        "name": "neg",
                                        "type": "bool"
                                    }
                                ],
                                "internalType": "struct BigInt",
                                "name": "used_quota",
                                "type": "tuple"
                            },
                            {
                                "internalType": "uint64",
                                "name": "expiration",
                                "type": "uint64"
                            }
                        ],
                        "internalType": "struct CommonTypes.BeneficiaryTerm",
                        "name": "term",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct CommonTypes.ActiveBeneficiary",
                "name": "active",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "new_beneficiary",
                        "type": "bytes"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes",
                                "name": "val",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bool",
                                "name": "neg",
                                "type": "bool"
                            }
                        ],
                        "internalType": "struct BigInt",
                        "name": "new_quota",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint64",
                        "name": "new_expiration",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved_by_beneficiary",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved_by_nominee",
                        "type": "bool"
                    }
                ],
                "internalType": "struct CommonTypes.PendingBeneficiaryChange",
                "name": "proposed",
                "type": "tuple"
            }
        ],
        "internalType": "struct MinerTypes.GetBeneficiaryReturn",
        "name": "",
        "type": "tuple"
    }
],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "bytes",
        "name": "target",
        "type": "bytes"
    }
],
    "name": "getOwner",
    "outputs": [
    {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
    }
],
    "stateMutability": "nonpayable",
    "type": "function"
}
]
