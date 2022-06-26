import { useContract, useProvider } from 'wagmi';
import CitizenV1 from '@democracy-labs/governance-sol/artifacts/contracts/CitizenV1.sol/CitizenV1.json';

export function useCitizenV1Contract(
  address: string,
): any {
    const prv = useProvider()
  return useContract(
    {
      addressOrName: address,
      contractInterface: CitizenV1.abi,
      signerOrProvider: prv
    }
  );
}

export default useCitizenV1Contract;
 