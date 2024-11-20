import { useRef } from 'react';
import { getCountryCode } from 'countries-list';
import { useCountryList } from '../hooks/useCountryList';
import styles from './styles';

import type { ListItem } from './type';

export const OriginalList = ({
  inputCountry,
  setShouldOpen,
  setAnimateArrow,
  setValue,
}: ListItem) => {
  const originalList = useRef<any>([]);
  const { navigateList, saveSelectedCountry } = useCountryList({
    list: originalList,
    setValue,
    setAnimateArrow,
    setShouldOpen,
  });

  return (
    <>
      {inputCountry.map((country: any, index) => {
        const countryName = country?.name;
        return (
          <li
            key={getCountryCode(country?.name) as string}
            role="menuitem"
            tabIndex={0}
            css={styles.option}
            onClick={() => {
              setShouldOpen(false);
              setAnimateArrow(false);
              setValue(country?.name);
              saveSelectedCountry(country?.name);
            }}
            // @ts-ignore
            ref={(element) => (originalList.current[index] = element)}
            onKeyDown={(event) => navigateList(event, index, countryName)}
          >
            {country.name}
          </li>
        );
      })}
    </>
  );
};
