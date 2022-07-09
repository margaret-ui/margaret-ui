import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import {
  injectLayoutHelpers,
  injectVisuallyHiddenHelper,
  BoxProps,
} from '../Box';

export const Text = styled.p.attrs<BoxProps>(({ theme, ...props }) => ({
  fontStyles: props.as ? props.fontStyles : props.fontStyles || 'body',
}))<BoxProps>`
  margin-top: 0;
  margin-bottom: 0;

  ${injectLayoutHelpers}
  ${injectVisuallyHiddenHelper}
`;

export const Heading: StyledComponent<
  'h2',
  DefaultTheme,
  BoxProps,
  any
> = styled(Text).attrs<BoxProps>(({ theme, ...props }) => ({
  fontStyles: props.fontStyles || theme?.defaultStylesMapping?.[props.as],
}))<BoxProps>``;

Heading.defaultProps = {
  as: 'h2',
};
