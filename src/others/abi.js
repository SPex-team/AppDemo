export default [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "manager",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "feeTo",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "feeRate",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "errorCode",
                "type": "int256"
            }
        ],
        "name": "ActorError",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ActorNotFound",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            }
        ],
        "name": "buyMiner",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            }
        ],
        "name": "cancelList",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newFeeRate",
                "type": "uint256"
            }
        ],
        "name": "changeFeeRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "newFeeTo",
                "type": "address"
            }
        ],
        "name": "changeFeeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "internalType": "uint256",
                "name": "newPrice",
                "type": "uint256"
            }
        ],
        "name": "changePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "internalType": "bytes",
                "name": "sign",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "confirmTransferMinerIntoSPex",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FailToCallActor",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "actorId",
                "type": "uint64"
            }
        ],
        "name": "InvalidActorID",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "InvalidCodec",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidResponseLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "listMiner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "NotEnoughBalance",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            }
        ],
        "name": "EventBuy",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            }
        ],
        "name": "EventCancelList",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newPrice",
                "type": "uint256"
            }
        ],
        "name": "EventChangePrice",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "EventList",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "EventMinerInContract",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "indexed": false,
                "internalType": "struct CommonTypes.FilAddress",
                "name": "newOwner",
                "type": "tuple"
            }
        ],
        "name": "EventMinerOutContract",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct CommonTypes.FilAddress",
                "name": "contractFilecoinAddress",
                "type": "tuple"
            }
        ],
        "name": "setContractFilecoinAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct CommonTypes.FilAddress",
                "name": "newOwner",
                "type": "tuple"
            }
        ],
        "name": "transferOwnerOut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractFilecoinAddress",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct CommonTypes.FilAddress",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeTo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            }
        ],
        "name": "getListMinerById",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "CommonTypes.FilActorId",
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "internalType": "address",
                        "name": "seller",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "listTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SPex.ListMiner",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinerIdList",
        "outputs": [
            {
                "internalType": "CommonTypes.FilActorId[]",
                "name": "",
                "type": "uint64[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "CommonTypes.FilActorId",
                "name": "minerId",
                "type": "uint64"
            }
        ],
        "name": "getOwnerById",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
