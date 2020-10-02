import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup, createEmptyLookup } from 'common/models';

describe('useConfirmationDialog tests', () => {
  it('The hook should be initialized with isOpen to false and itemToDelete being an empty lookup', () => {
    // Set up
    const expectedResult: Lookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toStrictEqual(expectedResult);
  });

  it('When onOpenDialog is called, isOpen should be true and itemToDelete a mocked lookup item', () => {
    // Set up
    const mockedLookup: Lookup = {
      id: '250B',
      name: 'Test',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(mockedLookup);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(mockedLookup);
  });

  it('When onAccept is called, itemToDelete should be an empty lookup', () => {
    // Set up
    const expectedResult: Lookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(expectedResult);
  });

  it('When onClose is called, isOpen should change from true to false', () => {
    // Set up

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });
});
