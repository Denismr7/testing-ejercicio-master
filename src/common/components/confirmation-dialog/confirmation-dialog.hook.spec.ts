import { renderHook } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup, createEmptyLookup } from 'common/models';

describe('useConfirmationDialog tests', () => {
  it('Expect isOpen to be false when initializing the hook', () => {
    // Set up

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('Expect itemToDelete to be an empty lookup when initializing the hook', () => {
    // Set up
    const expectedResult: Lookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.itemToDelete).toStrictEqual(expectedResult);
  });
});
