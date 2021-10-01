// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract PaperfaxIndex { // extends ERC1155?

    enum Vote {
        UP, 
        DOWN 
    }
    
    enum Verdict {
        ENDORSED,
        NEEDS REVIEW
    }

  struct Audit {
    uint paperfaxId;
    Verdict verdict; 
	string ipfsHash;
    uint32 numMinorIssues;
    uint32 numMajorIssues;
	uint32 numRecommendations;
    uint32 upvotes; // stretch?
    uint32 downvotes; // stretch?
    mapping (address => Vote) userToVote; // does solidity have enum?
  }

	struct Paperfax {
    string[] paperURIs;
	uint[] auditIds;
    address[] auditRequestedBy;
  }

  Paperfax[] paperfaxes;
  Audit[] audits;
  mapping (address => uint[]) userToAudits;

  function initializePaperfax(string[] memory paperURIs) external {
      uint[] memory _audits;
      address[] memory _requests;
      paperfaxes.push(Paperfax(paperURIs,_audits,_requests));
  }
  
   function requestAudit(uint paperfaxID) public {
     paperfaxes[paperfaxID].auditRequestedBy.push(msg.sender); 
  }

  function createAudit(uint paperfaxID, Verdict _verdict, string memory ipfshash, uint32 _numMinorIssues, uint32 _numMajorIssues, uint32 _numReccomendations) external {
      //when you submit an audit, 
      //call the IPFS API/SDK to upload the comments and get the hash, 
      //then submit the ethereum tx with that hash
      audits.push(Audit(paperfaxID, _verdict, ipfshash, _numMinorIssues, _numMajorIssues, _numReccomendations) );
      uint id = audits.length -1;
      userToAudits[msg.sender].push(id);
  }
  
  function voteForAudit(uint _auditID, Vote _type) public{
      audits[_auditID].userToVote[msg.sender] = _type;
      if(_type == UP){
          audits[_auditID].upvotes++;
      }else{
          audits[_auditID].downvotes++;
      }
  }
  
  /**
  function setVote

  function upvoteAudit(uint auditId) external { // stretch?
    // remove existing vote first
    audits[auditId].verdict = Vote.UP;
    
  }
  
  /**
  
  //    SHOW ME THE PAPERFAX
  function getPaperfax(string memory _uri) public view returns(Paperfax memory){
      for(uint i= 0; i<paperfaxes.length; i++){
          Paperfax memory p = paperfaxes[i];
          for(uint j = 0; j< p.paperURIs.length; j++){
              if(_uri == p.paperURIs[j]){
                  return p;
              }
          }
      }
      return 0;
  }
  
  
   
   function getPaperfaxID(string memory _uri) public view returns(uint _ans){
      for(uint i= 0; i<paperfaxes.length; i++){
          Paperfax memory p = paperfaxes[i];
          for(uint j = 0; j< p.paperURIs.length; j++){
              if(_uri == p.paperURIs[j]){
                  return j;
              }
          }
      }
      return 0;
  }
  
  
  function getPaperfaxIndex() external view returns(Paperfax[] memory _index){
      return paperfaxes;
  }

 */
 
  
	// other external functions
  // stretch: how to handle minds changing? retract/respond/edit/addendum?

  // ERC-1155 functions?
}