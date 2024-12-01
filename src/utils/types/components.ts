import { ReactElement } from "react";
import { Invoice } from "../../redux/types/invoices";

type ElementProps = {
  children?: React.ReactNode | string;
  className?: string;
};

export type ButtonProps = ElementProps & {
  onClick: () => void;
  disabled?: boolean;
};

export type HeadingProps = ElementProps & {
  type?: string;
};

export type LabelProps = ElementProps & {
  htmlFor: string;
};

export type FlexProps = ElementProps;

type Input = {
  type: string;
  name: string;
  id: string;
  value?: string;
};

export type InputProps = ElementProps & {
  input: Input;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SplitPaneProps = {
  left: ReactElement;
  right: ReactElement;
};

export type FieldNBPProps = {
  type: string;
};

export type InvoiceFieldProps = {
  invoice: Invoice;
};

export type LinkNBPProps = {
  issue: string;
  date: string;
};
