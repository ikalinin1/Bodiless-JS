/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ComponentType } from 'react';
import { flow } from 'lodash';
import {
  withDesign,
  designable,
  DesignableComponentsProps,
  Div,
  A,
  Img,
  H2,
  StylableProps,
} from '@bodiless/fclasses';
import {
  asBodilessImage,
  asBodilessLink,
  asEditable,
} from '@bodiless/components';
import { withNode } from '@bodiless/core';

export type ToutComponents = {
  Wrapper: ComponentType<StylableProps>,
  ImageWrapper: ComponentType<StylableProps>,
  ImageLink: ComponentType<StylableProps>,
  Image: ComponentType<StylableProps>,
  ContentWrapper: ComponentType<StylableProps>,
  Title: ComponentType<StylableProps>,
  Body: ComponentType<StylableProps>,
  Link: ComponentType<StylableProps>,
};
const toutComponentStart:ToutComponents = {
  Wrapper: Div,
  ImageWrapper: Div,
  ImageLink: A,
  Image: Img,
  ContentWrapper: Div,
  Title: H2,
  Body: Div,
  Link: A,
};

type Props = DesignableComponentsProps<ToutComponents> & { };

const ToutBase: FC<Props> = ({ components }) => {
  const {
    Wrapper,
    ImageWrapper,
    Image,
    ImageLink,
    ContentWrapper,
    Title,
    Body,
    Link,
  } = components;

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageLink>
          <Image />
        </ImageLink>
      </ImageWrapper>
      <ContentWrapper>
        <Title />
        <Body />
        <Link />
      </ContentWrapper>
    </Wrapper>
  );
};

const ToutClean = flow(
  designable(toutComponentStart),
  withNode,
)(ToutBase);

const asEditableTout = withDesign({
  Image: asBodilessImage('image'),
  ImageLink: asBodilessLink('cta'),
  Title: asEditable('title', 'Tout Title Text'),
  Link: flow(
    asBodilessLink('cta'),
    asEditable('ctaText', 'Tout Button Text'),
  ),
  Body: asEditable('body', 'Tout Body Text'),
});
const Tout = asEditableTout(ToutClean);

export default Tout;
export {
  Tout,
  ToutClean,
  asEditableTout,
};
