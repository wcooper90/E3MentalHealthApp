import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-501247478-1509715072.jpg?crop=1.00xw:0.334xh;0,0.0801xh&resize=480:*",
      title: "Jenny Lawn",
      description: "Specializes in young people",
      locationText: "San Francisco",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: "data:image/jpeg;base64,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",
      title: "John Smith",
      description: "A therapist near you, ready to help with anything!",
      locationText: "San Diego",
      pricingText: "USD 50/hour",
      rating: 4.9,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Hotel Baja",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Palo Alto, CA",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Hudak Homes",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular Therapists</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
