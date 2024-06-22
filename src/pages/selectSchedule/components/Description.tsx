import { formatDuration, formatPlace } from '../utils';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface DescriptionProps {
  duration: string;
  place: string;
  placeDetail: string;
}

function Description({ duration: durationOg, place: placeOg, placeDetail }: DescriptionProps) {
  const duration = formatDuration(durationOg);
  const place = formatPlace(placeOg);
  return (
    <DescriptionWrapper>
      <Texts>
        {place ? (
          <>
            <OneLine>
              <Text font="body1" color={theme.colors.grey1}>
                회의는&nbsp;
              </Text>
              <Text font="body1" color={theme.colors.sub1}>
                {duration}&nbsp;
              </Text>
              <Text font="body1" color={theme.colors.grey1}>
                {'동안'}
              </Text>
            </OneLine>
            <OneLine>
              <Text font="body1" color={theme.colors.sub1}>
                {place}
              </Text>
              {placeDetail && (
                <Text font="body1" color={theme.colors.sub1}>
                  {`(${placeDetail})`}
                </Text>
              )}
              <Text font="body1" color={theme.colors.grey1}>
                {'으로 진행될 예정이에요!'}
              </Text>
            </OneLine>
          </>
        ) : (
          <OneLine>
            <Text font="body1" color={theme.colors.grey1}>
              회의는&nbsp;
            </Text>
            <Text font="body1" color={theme.colors.sub1}>
              {duration}&nbsp;
            </Text>
            <Text font="body1" color={theme.colors.grey1}>
              {'동안 진행될 예정이에요!'}
            </Text>
          </OneLine>
        )}
      </Texts>
    </DescriptionWrapper>
  );
}

export default Description;

const DescriptionWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 2rem;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background-color: ${theme.colors.grey9};
  padding: 1.5rem 2.4rem;
  width: 33.5rem;
`;
const OneLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
