import { useState, useEffect, useRef } from 'react';
import { FilteredList } from './FilteredList';
import { OriginalList } from './OriginalList';
import styles from './styles';

import type { List } from './type';

export const CountryList = ({
  inputCountry,
  setValue,
  isListFocused,
  setAnimateArrow,
  shouldShowOriginalList,
  shouldOpen,
  setShouldOpen,
}: List) => {
  const countryList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (inputCountry.length > 0) {
      setShouldOpen(true);
    }
    if (isListFocused) {
      countryList.current?.focus();
    }
  }, [inputCountry, isListFocused, setShouldOpen]);

  if (!shouldOpen) {
    return null;
  }

  return (
    <ul role="menu" css={styles.container} ref={countryList}>
      {shouldShowOriginalList ? (
        <OriginalList
          inputCountry={inputCountry}
          setShouldOpen={setShouldOpen}
          setAnimateArrow={setAnimateArrow}
          setValue={setValue}
        />
      ) : (
        <FilteredList
          inputCountry={inputCountry}
          setShouldOpen={setShouldOpen}
          setAnimateArrow={setAnimateArrow}
          setValue={setValue}
        />
      )}
      {inputCountry.length <= 0 && (
        <li css={styles.option}>No results matched your criteria</li>
      )}
    </ul>
  );
};
