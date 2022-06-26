// @ts-nocheck
import * as React from 'react';

import classNames from 'classnames';
import useCitizenV1Contract from './useCitizenV1Contract';

import CitizenV1 from '@democracy-labs/governance-sol/deployments/localhost/CitizenV1.json';
import useCitizenV1ContractRead from './useCitizenV1ContractRead';

interface DAOStreamProps {
  className?: string;
  account?: string;
  contract: string;
}

export const DAOStream = ({
  className
}: DAOStreamProps) => {
  const classes = classNames(className, 'DAOStream');

  const {data, isError, isLoading} = useCitizenV1ContractRead(CitizenV1.address, 'getDAOStream', [])



  const [tokenData, setTokenData] = React.useState();
  React.useEffect(() => {
    if (data) {
      (async () => {
        console.log(data)
        // const dao = await contract.callStatic('getDAOStream');
        // console.log(dao, 'daodao')
      })();
    }
  }, [data]);

  return<div className=''>
  </div>
};

export default DAOStream;
