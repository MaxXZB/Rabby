import React from 'react';
import { Skeleton } from 'antd';
import { CHAINS, CHAINS_ENUM } from 'consts';
import BalanceChange from './LoadingBalanceChange';

interface SignProps {
  chainEnum: CHAINS_ENUM;
}

const Loading = ({ chainEnum }: SignProps) => {
  const chain = CHAINS[chainEnum];

  return (
    <div className="sign">
      <p className="section-title">Sign {chain.name} transaction</p>
      <div className="gray-section-block common-detail-block">
        <div className="block-field">
          <Skeleton.Input style={{ width: 200 }} />
        </div>
        <div className="block-field">
          <Skeleton.Input style={{ width: 200 }} />
        </div>
        <div className="block-field contract">
          <Skeleton.Input style={{ width: 120 }} />
        </div>
      </div>
      <BalanceChange />
    </div>
  );
};

export default Loading;
