import { useRef } from 'react';
import Markdown from 'markdown-to-jsx';
import { getCountryCode } from 'countries-list';
import { useCountryList } from '../hooks/useCountryList';
import styles from './styles';

import type { FormatHighlightedMatches, ListItem } from './type';

export const FilteredList = ({
  inputCountry,
  setShouldOpen,
  setAnimateArrow,
  setValue,
}: ListItem) => {
  const filteredList = useRef<any>([]);
  const { navigateList, saveSelectedCountry } = useCountryList({
    list: filteredList,
    setValue,
    setAnimateArrow,
    setShouldOpen,
  });

  const formatHighlightedMatches = ({
    indices,
    originalValue,
  }: FormatHighlightedMatches) => {
    const matchedCharacters = indices;
    if (!matchedCharacters) {
      return null;
    }

    const highlightedCharacters = matchedCharacters.reduce((acc, curr) => {
      return [...acc, originalValue.slice(curr[0], curr[1] + 1)];
    }, [] as string[]);

    const formattedContent = highlightedCharacters.reduce((acc, curr) => {
      return acc.replace(curr, `**${curr}**`);
    }, originalValue);

    return formattedContent;
  };

  return (
    <>
      {inputCountry.map((country: any, index) => {
        const formattedContent = formatHighlightedMatches({
          indices: country?.matches?.[0]?.indices,
          originalValue: country?.matches?.[0]?.value,
        });
        const countryName = country?.item?.name;

        return (
          <li
            key={getCountryCode(country?.item?.name) as string}
            role="menuitem"
            tabIndex={0}
            css={styles.option}
            onClick={() => {
              setShouldOpen(false);
              setAnimateArrow(false);
              setValue(country?.item?.name);
              saveSelectedCountry(country?.item?.name);
            }}
            ref={(element) => (filteredList.current[index] = element)}
            onKeyDown={(event) => navigateList(event, index, countryName)}
          >
            <Markdown>
              {formattedContent ? formattedContent : country?.name}
            </Markdown>
          </li>
        );
      })}
    </>
  );
};
