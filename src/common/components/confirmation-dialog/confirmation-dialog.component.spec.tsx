/* eslint-disable prettier/prettier */
import { render } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import React from 'react';

describe('Confirmation dialog component specs', () => {
  it('Should display the title received by props', () => {
    // Set up
    const props = {
      isOpen: true,
      onAccept: () => {
        //
      },
      onClose: () => {
        //
      },
      title: 'Testing title',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);
    // Assert
    const element = getByText('Testing title');
    expect(element).not.toBeNull();
  });

  it('If isOpen is false the component should not be displayed', () => {
    // Set up
    const props = {
      isOpen: false,
      onAccept: () => {
        //
      },
      onClose: () => {
        //
      },
      title: 'Testing title',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
    };

    // Act
    const { queryByText } = render(<ConfirmationDialogComponent {...props} />);
    // Assert
    const element = queryByText('Testing title');
    const closeButton = queryByText('Close');
    const acceptButton = queryByText('Accept');
    expect(element).toBeNull();
    expect(closeButton).toBeNull();
    expect(acceptButton).toBeNull();
  });

  it('If isOpen is true the component should be displayed', () => {
    // Set up
    const props = {
      isOpen: true,
      onAccept: () => {
        //
      },
      onClose: () => {
        //
      },
      title: 'Testing title',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
    };

    // Act
    const { queryByText } = render(<ConfirmationDialogComponent {...props} />);
    // Assert
    const element = queryByText('Testing title');
    const closeButton = queryByText('Close');
    const acceptButton = queryByText('Accept');
    expect(element).not.toBeNull();
    expect(closeButton).not.toBeNull();
    expect(acceptButton).not.toBeNull();
  });
});
