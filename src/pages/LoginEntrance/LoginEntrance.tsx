import { useState } from 'react';

import styled from 'styled-components/macro';

import HostComponent from './LoginComponent/HostComponent';
import MemberComponent from './LoginComponent/MemberComponent';

interface HostInfoProps {
  id: string;
  password: string;
}
const InitialHostInfo: HostInfoProps = {
  id: '',
  password: '',
};

interface LoginType {
  loginType: string;
}

function LoginEntrance({ loginType }: LoginType) {
  const [hostInfo, setHostInfo] = useState(InitialHostInfo);

  return (
    <LoginEntranceWrapper>
      {
        {
          host: <HostComponent hostInfo={hostInfo} setHostInfo={setHostInfo} />,
          member: <MemberComponent hostInfo={hostInfo} setHostInfo={setHostInfo} />,
        }[loginType]
      }
    </LoginEntranceWrapper>
  );
}

export default LoginEntrance;

const LoginEntranceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
