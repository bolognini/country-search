import { useRef } from 'react';
import { getCountryCode } from 'countries-list';
import { useCountryList } from '../hooks/useCountryList';
import styles from './styles';

export const OriginalList = ({
  inputCountry,
  setShouldOpen,
  setAnimateArrow,
  setValue,
}) => {
  const originalList = useRef([]);
  const { navigateList, saveSelectedCountry } = useCountryList({
    list: originalList,
    setValue,
    setAnimateArrow,
    setShouldOpen,
  });

  return (
    <>
      {inputCountry.map((country, index) => {
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
