export interface PlanData {
  date: string;
  list: Plan[];
}

export interface Plan {
  id: number;
  content: string;
  checked: boolean;
}
