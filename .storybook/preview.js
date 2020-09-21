import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11Y } from '@storybook/addon-a11y';

addDecorator(withKnobs);
addDecorator(withA11Y);
