/**
 * Edit file transaction
 * @param {org.example.blockchain.FileTransaction} trade
 * @transaction
 */
async function editfile(trade) {
  if (trade.node.nodeId == trade.fileN.owner.nodeId) {
  trade.fileN.encryptedHash = trade.newEncryptedHash
  trade.fileN.encryptedKey = trade.newEncryptedKey
  trade.fileN.serializedAccessPolicy = trade.newSerializedAccessPolicy
  trade.fileN.version = trade.fileN.version + 1
    return getAssetRegistry("org.example.blockchain.fileN")
      .then(assetRegistry => {
        return assetRegistry.update(trade.fileN); // Update the network registry
      })
      .then(() => {
        let event = getFactory().newEvent(
          "org.example.blockchain",
          "fileNotification"
        ); // Get a reference to the event specified in the modeling language
        event.fileN = trade.fileN;
        emit(event); // Fire off the event
      });
    } 
}

/**
 * ModifyAccessPolicy transaction
 * @param {org.example.blockchain.FileTransaction} trade
 * @transaction
 */
async function modifyAccessPolicy(trade) {
  if (trade.node.nodeId == trade.fileN.owner.nodeId) {
    trade.fileN.encryptedHash = trade.newEncryptedHash
  trade.fileN.encryptedKey = trade.newEncryptedKey
  trade.fileN.serializedAccessPolicy = trade.newSerializedAccessPolicy
  trade.fileN.version = trade.fileN.version + 1
    return getAssetRegistry("org.example.blockchain.fileN")
      .then(assetRegistry => {
        return assetRegistry.update(trade.fileN); // Update the network registry
      })
      .then(() => {
        let event = getFactory().newEvent(
          "org.example.blockchain",
          "fileNotification"
        ); // Get a reference to the event specified in the modeling language
        event.fileN = trade.fileN;
        emit(event); // Fire off the event
      });
  } 
}

/**
* Grant Attribute transaction
* @param {org.example.blockchain.AttributeTransaction} trade
* @transaction
*/

async function grantAttribute(trade) {
  if (true) { //will eventually contain logic for validating whether a node should be granted
              //an attribute
    if (trade.aAuthority.attributes.indexOf(trade.attribute) > -1) {
    trade.node.attributeKeyList.push(trade.aAuthority.aId+trade.attribute)
    return getParticipantRegistry("org.example.blockchain.Node")
    .then(participantRegistry => {
        return participantRegistry.update(trade.node); // Update the network registry
      });
  }
  }
}

/**
* Obtain File Data transaction
* @param {org.example.blockchain.GetFileTransaction} trade
* @transaction
*/

async function obtainFileData(trade) {
  return getAssetRegistry('org.example.blockchain.FileN')
  .then(function (assetRegistry) {
    return assetRegistry.get(trade.fileId);
  })
  .then(function (fileN) {
    console.log(fileN);
  })
  .catch(function (error) {
   });
  //Logic To obtain data from IPFS, decrypt it and return it.
}

