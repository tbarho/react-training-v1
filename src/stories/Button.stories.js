import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Components|Button',
  component: Button,
};

export const normal = () => <Button onClick={action('clicked')}>Hello Button</Button>;