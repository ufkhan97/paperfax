export const CONTRACT_ADDRESS = '0x1f9c88C45f11A500332584A3fD42bD20596D71fD'
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
        "internalType": "string",
        "name": "_paperURI",
        "type": "string"
      }
    ],
    "name": "paperfaxDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "paperfaxId",
        "type": "uint256"
      },
      {
        "internalType": "enum PaperfaxIndex.Verdict[]",
        "name": "verdicts",
        "type": "uint8[]"
      },
      {
        "internalType": "string[]",
        "name": "ipfsHashes",
        "type": "string[]"
      },
      {
        "internalType": "uint32[]",
        "name": "numMinorIssues",
        "type": "uint32[]"
      },
      {
        "internalType": "uint32[]",
        "name": "numMajorIssues",
        "type": "uint32[]"
      },
      {
        "internalType": "uint32[]",
        "name": "numRecommendations",
        "type": "uint32[]"
      },
      {
        "internalType": "uint32[]",
        "name": "upvotes",
        "type": "uint32[]"
      },
      {
        "internalType": "uint32[]",
        "name": "downvotes",
        "type": "uint32[]"
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
