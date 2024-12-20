import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
import { countries } from 'countries-list';
import { CountryList } from './CountryList/CountryList';
import { breakpoint } from '../styles/breakpoints.style';

import type { FuseResult } from 'fuse.js';
import type { ICountry } from 'countries-list';
import { useClickOutside } from './hooks/useClickOutside';

export const CountrySearch = () => {
  const [shouldOpen, setShouldOpen] = useState<boolean>(false);
  const [isListFocused, setIsListFocused] = useState<boolean>(false);
  const [inputCountry, setInputCountry] = useState<
    FuseResult<ICountry>[] | ICountry[]
  >([]);
  const [shouldShowOriginalList, setShouldShowOriginalList] =
    useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const [animateArrow, setAnimateArrow] = useState<boolean>(false);
  const inputRef = useClickOutside({
    closeList: () => setShouldOpen(false),
    animateArrow: () => setAnimateArrow(false),
  });
  const countryList = Object.values(countries);
  const fuse = new Fuse(countryList, {
    keys: ['name'],
    includeMatches: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (localStorage.getItem('selectedCountry')) {
      setValue(localStorage.getItem('selectedCountry') || '');
    }
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const searchTerm = e.currentTarget.value;
    setValue(e.currentTarget.value);

    if (searchTerm.length > 0) {
      const filteredCountry = fuse.search(searchTerm);

      filteredCountry.length > 0 && setInputCountry(filteredCountry);
    }
  };

  return (
    <div>
      <small css={styles.tip}>Press Tab to navigate with the arrow keys</small>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          onChange={(e) => {
            setShouldShowOriginalList(false);
            handleChange(e);
          }}
          placeholder="Start typing to search for a country"
          css={styles.input}
          value={value}
          onClick={() => {
            setShouldShowOriginalList(true);
            setInputCountry(countryList);
            setAnimateArrow(true);
          }}
          ref={inputRef}
        />
        <div css={styles.arrow(animateArrow)} />
        <CountryList
          inputCountry={inputCountry}
          setValue={setValue}
          isListFocused={isListFocused}
          setAnimateArrow={setAnimateArrow}
          shouldShowOriginalList={shouldShowOriginalList}
          shouldOpen={shouldOpen}
          setShouldOpen={setShouldOpen}
        />
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: 350,
    padding: '12px 8px',
    borderRadius: '6px',
    border: '1px solid #b8b8b8',
    fontSize: 14,
    '&::placeholder': {
      opacity: 0.3,
    },
    [breakpoint.medium]: {
      width: 600,
      fontSize: 16,
    },
  },
  arrow: (animateArrow: boolean) => ({
    position: 'absolute' as const,
    top: 16,
    right: 16,
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid var(--bold)',
    transition: 'transform 200ms ease-in-out',
    transform: animateArrow ? 'rotate(180deg)' : 'unset',
    cursor: 'pointer',
  }),
  tip: {
    display: 'flex',
    justifyContent: 'center',
    color: 'var(--foreground)',
    marginBottom: 8,
  },
};
