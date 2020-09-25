import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('Project Mapper tests', () => {
  it('Should return empty project when receives a falsy value', () => {
    // Set up

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(null);

    // Assert
    expect(result).toStrictEqual(viewModel.createEmptyProject());
  });

  it('Should return a ViewModel mapped project when receives an ApiModel project', () => {
    // Set up
    const project: apiModel.Project = {
      id: '25',
      name: 'MockProject',
      isActive: false,
      employees: [
        {
          id: '4',
          employeeName: 'Daniel',
        },
      ],
    };
    const expectedResult: viewModel.Project = {
      id: 25,
      name: 'MockProject',
      isActive: false,
      employees: [
        {
          id: '4',
          employeeName: 'Daniel',
        },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
