import Fuse from 'fuse.js';
import { useState } from 'react';
import { countries } from 'countries-list';
import { CountryList } from './CountryList';

export const CountrySearch = () => {
  const [isListFocused, setIsListFocused] = useState(false);
  const [inputCountry, setInputCountry] = useState([]);
  const [value, setValue] = useState('');

  const [animateArrow, setAnimateArrow] = useState(false);
  const countryList = Object.values(countries);
  const fuse = new Fuse(countryList, {
    keys: ['name'],
    includeMatches: true,
  });

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
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Select your country"
        css={styles.input}
        value={value}
        onClick={() => {
          setAnimateArrow(true);
        }}
        onBlur={() => {
          setAnimateArrow(false);
        }}
      />
      <div css={styles.arrow(animateArrow)} />
      <CountryList
        inputCountry={inputCountry}
        setValue={setValue}
        isListFocused={isListFocused}
        setAnimateArrow={setAnimateArrow}
      />
    </div>
  );
};

const styles = {
  input: {
    width: 600,
    padding: '12px 8px',
    borderRadius: '6px',
    border: '1px solid #b8b8b8',
    fontSize: 16,
    '&::placeholder': {
      opacity: 0.3,
    },
  },
  arrow: (animateArrow: boolean) =>
    ({
      position: 'absolute',
      top: 16,
      right: 16,
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid black',
      transition: 'transform 200ms ease-in-out',
      transform: animateArrow && 'rotate(180deg)',
      cursor: 'pointer',
    } as const),
};
