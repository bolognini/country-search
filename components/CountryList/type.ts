import type { FuseResult } from 'fuse.js';
import type { ICountry } from 'countries-list';

export type InputCountry = Array<{
  item: {
    name: string;
    native: string;
  };
  matches: Array<{ indices: Array<number[]>; key: string; value: string }>;
  refIndex: number;
  name: string;
}>;

export type FormatHighlightedMatches = {
  indices: Array<number[]>;
  originalValue: string;
};

export type List = {
  inputCountry: FuseResult<ICountry>[] | ICountry[];
  setAnimateArrow: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  shouldShowOriginalList: boolean;
  isListFocused: boolean;
  shouldOpen: boolean;
  setShouldOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ListItem = Pick<
  List,
  'inputCountry' | 'setShouldOpen' | 'setAnimateArrow' | 'setValue'
>;
