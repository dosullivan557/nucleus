export interface DropdownProps {
  options?: string[];
  type?: DropdownType;
  className?: string;
  label?: string;
  onChange: (value: string) => void;
}

// Add a type-level check to ensure at least one of 'options' or 'type' is provided
type RequireOptionsOrType<
  T extends { options?: string[]; type?: DropdownType }
> =
  | (T & { options: string[]; type?: never })
  | (T & { options?: never; type: DropdownType });

export type StrictDropdownProps = RequireOptionsOrType<DropdownProps>;

export enum DropdownType {
  country = 'country'
}
