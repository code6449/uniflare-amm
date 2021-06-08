import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1f9195FBB2d8358D1834Dd79044139bbd7B8ae8E', // TODO
  [ChainId.BSCTESTNET]: '0x1f9195FBB2d8358D1834Dd79044139bbd7B8ae8E'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
