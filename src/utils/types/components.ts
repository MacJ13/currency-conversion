import { ReactElement } from "react";

type ElementProps = {
  children?: React.ReactNode | string;
  className?: string;
};

export type HeadingProps = ElementProps & {
  type?: string;
};

export type LabelProps = ElementProps & {
  htmlFor: string;
};

export type FlexProps = ElementProps;
