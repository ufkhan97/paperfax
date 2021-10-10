export const CONTRACT_ADDRESS = '0x93181535C064fBf25591D79Ab05F88De7e96C7fD'
export const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_paperfaxId",
        "type": "uint256"
      },
      {
        "internalType": "enum PaperfaxIndex.Verdict",
        "name": "_verdict",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "_numMinorIssues",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_numMajorIssues",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_numRecommendations",
        "type": "uint32"
      }
    ],
    "name": "createAudit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "_paperURIs",
        "type": "string[]"
      }
    ],
    "name": "initializePaperfax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numAudits",
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
    "name": "numPaperfaxes",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_paperfaxId",
        "type": "uint256"
      }
    ],
    "name": "requestAudit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_auditId",
        "type": "uint256"
      },
      {
        "internalType": "enum PaperfaxIndex.Vote",
        "name": "_type",
        "type": "uint8"
      }
    ],
    "name": "upvoteAudit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "uriToPaperfaxId",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userToAudits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
