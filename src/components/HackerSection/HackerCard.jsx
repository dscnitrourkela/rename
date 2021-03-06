import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import Title from '../shared/Typography/Heading4';
import Body from '../shared/Typography/Body';
import { RegisterButton } from '../shared';

// Assets
import { hacker } from '../../../config/content';

const Card = styled.div`
  ${tw`
      bg-background-darker
      h-auto
      rounded-2xl
    `}
`;

const CardBody = styled.div`
  ${tw`
      p-6
    `}
`;

const CardImage = styled.img`
  ${tw`
      w-full
    `}
`;

const Description = styled.div`
  ${tw`
      py-1
    `}
`;

const CardCol = styled.div`
  ${tw`
      w-full
      grid
      grid-cols-track
      gap-7
      mt-10
    `}
`;

const HackerCard = () => (
  <CardCol>
    {hacker.cards.map(({ id, title, content, img, hasButton }) => (
      <Card key={id}>
        <CardImage src={img.src} alt={img.alt} />
        <CardBody>
          <Title>{title}</Title>
          <Description>
            <Body>{content}</Body>
          </Description>
          {hasButton && <RegisterButton />}
        </CardBody>
      </Card>
    ))}
  </CardCol>
);

export default HackerCard;
