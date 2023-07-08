import { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import {
  MainLogoIc,
  HambergerIc,
  ExitIc,
  InputCancelIc,
  RadioCheckIc,
  RadioCheckedIc,
  BackIc,
  PlusIc,
  InputErrorIc,
  DropDownIc,
  DropUpIc,
  PasswordOpenEyeIc,
  PasswordEyeIc,
  LinkIc,
  PlaceIc,
  ClockIc,
} from 'components/Icon/icon';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

const buttonType: string[] = [
  'primaryActive',
  'primaryDisabled',
  'secondaryActive',
  'secondaryDisabled',
  'tertiaryActive',
  'tertiaryDisabled',
  'halfPrimaryActive',
  'halfTertiaryActive',
];

const textComponentsType: string[] = [
  'head2',
  'title1',
  'title2',
  'body1',
  'body2',
  'body3',
  'body4',
  'head1',
  'button1',
  'button2',
];

function ComponentTesting() {
  //TextInput component 사용시 useState 로 보내주기
  const [inputValue, setInputValue] = useState(``);

  return (
    <>
      <Wrapper>
        <CategorySection>
          <h1>SVG Component</h1>
          <MainLogoIc />
          <IconWrapper>
            <HambergerIc />
          </IconWrapper>
          <IconWrapper>
            <ExitIc />
          </IconWrapper>
          <InputCancelIc />
          <InputErrorIc />
          <RadioCheckIc />
          <RadioCheckedIc />
          <IconWrapper>
            <BackIc />
          </IconWrapper>
          <PlusIc />
          <DropDownIc />
          <DropUpIc />
          <PasswordEyeIc />
          <PasswordOpenEyeIc />
          <IconWrapper>
            <LinkIc />
          </IconWrapper>
          <PlaceIc />
          <ClockIc />
        </CategorySection>
        <CategorySection>
          <h1>ReuseComponents</h1>
          <TextInput
            value={inputValue}
            setValue={setInputValue}
            placeholder={'서비스 기획 1차 회의'}
          />
        </CategorySection>
        <CategorySection>
          <h1>ReuseButton</h1>

          {buttonType.map((type, i) => {
            return (
              <Button key={i} typeState={type} onClick={() => console.log(`${type}`)}>
                <Text font={'button2'} >
                  약속 생성하기
                </Text>
              </Button>
            );
          })}
        </CategorySection>
        <CategorySection>
          <h1>TextComponents</h1>
          {textComponentsType.map((type, i) => {
            return (
              <Text key={i} font={type} color={`${theme.colors.black}`}>
                Hello
              </Text>
            );
          })}
        </CategorySection>
      </Wrapper>
    </>
  );
}

export default ComponentTesting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  width: 100%;
  height: 80rem;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;

  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 1rem;

  height: 100%;
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12.35px 11px;
`;
