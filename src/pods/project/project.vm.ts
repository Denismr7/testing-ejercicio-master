export interface Project {
  id: number;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  employees: EmployeeSummary[];
}

export interface EmployeeSummary {
  id: string;
  isAssigned?: boolean;
  employeeName: string;
}

export const createEmptyProject = (): Project => ({
  id: undefined,
  name: '',
  externalId: '',
  comments: '',
  isActive: false,
  employees: [],
});
