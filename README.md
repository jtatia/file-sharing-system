# file-sharing-system

Hyperledger Fabric Network for file sharing using Multi-Authority Attribute Based Encryption as the encryption scheme  and IPFS as the decentralised storage network

#### Table of Contents

1. [Build](#build)
   1. [Prerequisites](#prerequisites)
   2. [Local Development Tools](#dev-Tools)
   3. [Local Hyperledger Fabric runtime](#fabric-Runtime)
2. [Setup](#setup)
## Build
### Prerequisites
Check [this](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html) to get the updated list of pre-requisites. They are :-
1. Docker Engine and Docker Compose
2. Nodejs and NPM
3. Git
4. Python 2.7.x

For ubuntu  you can use:-
```bash
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
./prereqs-ubuntu.sh
```
###Dev-Tools
Run the following commands to setup dev-tools:-
```bash
npm install -g composer-cli
npm install -g composer-rest-server
npm install -g composer-playground
npm install -g yo generator-hyperledger-composer
```
###Fabric-Runtime
Run the following commands to Setup Local Hyperledger fabric Runtime:-
```bash
mkdir ~/fabric-dev-servers
cd ~/fabric-dev-servers
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
export FABRIC_VERSION=hlfv12
./downloadFabric.sh
./startFabric.sh
./createPeerAdminCard.sh
```
##Setup
1. Generating a Business Network Archive (BNA)
```bash
composer archive create --sourceType dir --sourceName .
``` 
2. Install and Deploy the BNA file
To install execute:- 
```bash
composer network install --archiveFile file-sharing-system@0.0.1.bna --card PeerAdmin@hlfv1
```
To deploy:-
```bash
composer network start --networkName file-sharing-system --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file file-sharing-admin.card
```
It then needs to be imported using:-
```bash
composer card import --file file-sharing-admin.card
```
You can check whether the network has been setup using:-
```bash
composer network ping --card admin@file-sharing-system
```

3.Setting up a Composer-Rest-Server
To setup a composer rest server run:-
```bash
composer-rest-server
``` 
specify ``admin@file-sharing-system`` , select ``never use namespaces``, and continue with the default options for the rest.

The File-Sharing-System network and rest server are up and running.

###References
1. https://medium.freecodecamp.org/how-to-build-a-blockchain-network-using-hyperledger-fabric-and-composer-e06644ff801d
