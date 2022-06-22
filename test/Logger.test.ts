import {expect, use} from 'chai'
import {deployContract, MockProvider, solidity} from 'ethereum-waffle'
import Logger from '../build/Logger.json'

use(solidity)

describe('Logger', () => {
  const provider = new MockProvider()
  const [mati, szymi] = provider.getWallets()
  let contract: any

  beforeEach(async () => {
    contract = await deployContract(mati, Logger, [])
  })

  it('Deploys correctly and has an address', async () => {
    expect(contract.address).to.be.properAddress
  })

  it('Returns correct owner', async () => {
    const owner = await contract.owner()
    expect(owner).to.eq(mati.address)
  })

  it('Returns correct log', async () => {
    await contract.addLog('mati', 'mati')
    const logs = await contract.getLogs('mati')
    expect(logs).to.deep.eq(['mati'])
  })

  it('Cannot overrides log', async () => {
    await contract.addLog('mati', 'mati')
    await expect(contract.addLog('mati', 'mati')).to.be.reverted
  })

  it('Returns correct snapshot', async () => {
    await contract.addSnapshot('mati', ['mati', 1, 1])
    const snapshots = await contract.getSnapshots('mati')
    expect(snapshots).to.deep.eq([['mati', 1, 1]])
  })

  it('Cannot override snapshot', async () => {
    await contract.addSnapshot('mati', ['mati', 1, 1])
    await expect(contract.addSnapshot('mati', ['mati', 1, 1])).to.be.reverted
  })

  it('Is whitelisted after adding to whitelist', async () => {
    await contract.addUser(szymi.address)
    const success = await contract.whitelist(szymi.address)
    expect(success).to.be.true
  })
})
