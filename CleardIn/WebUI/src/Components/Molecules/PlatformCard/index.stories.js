import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import PlatformCard from '.';

export default {
  title: 'molecule/PlatformCard',
  component: PlatformCard,
};

export const Default = () => {
  const platformOptions = {
    Box: {
      image: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/e18e8f54-178c-406a-91f2-8b1d83f47cc0.svg',
      title: 'Box',
    },
    GoogleSuite: {
      image: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/d95b656e-2878-43df-9c4c-382f94892585-3x.png',
      title: 'Google Suite',
    },
    Docusign: {
      image: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/9e69db6f-95ca-4221-b76f-545a010ea986-3x.png',
      title: 'Docusign',
    },
    Figma: {
      image: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/55c1d662-ded6-4972-98be-454c2a085e49.svg',
      title: 'Figma',
    },
    Okta: {
      image: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/9c3444bb-6e74-41b1-80b1-e1d812153448.svg',
      title: 'Okta',
    },
    Slack: {
      image: 'https://cdn.zeplin.io/5fa102170abc4fbe7467eaa5/assets/73eb42dd-a071-48cd-af85-ead7e7c5648e.svg',
      title: 'Slack',
    },
  };
  const selectedObj = select('Platform', Object.keys(platformOptions), 'GoogleSuite');
  const title = text('Title', '');
  return (
    <PlatformCard
      title={title !== '' ? title : platformOptions[selectedObj].title}
      image={platformOptions[selectedObj].image}
    />
  );
};
