import { getCountryCode } from 'countries-list';
import { useState, useEffect, useRef } from 'react';
import { useCountryList } from './hooks/useCountryList';

const formatHighlightedMatches = ({ indices, originalValue }) => {
  const matchedCharacters = indices;

  const highlightedCharacters = matchedCharacters.reduce((acc, curr) => {
    return [...acc, originalValue.slice(curr[0], curr[1] + 1)];
  }, []);

  const formattedContent = highlightedCharacters.reduce((acc, curr) => {
    return acc.replace(curr, `<strong>${curr}</strong>`);
  }, originalValue);

  return formattedContent;
};

export const CountryList = ({
  inputCountry,
  setValue,
  isListFocused,
  setAnimateArrow,
}) => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const countryList = useRef([]);
  const { navigateList } = useCountryList({
    countryList,
    setValue,
    setAnimateArrow,
    setShouldOpen,
  });

  useEffect(() => {
    if (inputCountry.length > 0) {
      setShouldOpen(true);
    }
    if (isListFocused) {
      countryList.current[0]?.focus();
    }
  }, [inputCountry, isListFocused]);

  if (!shouldOpen) {
    return null;
  }

  return (
    <ul role="menu" css={styles.container}>
      {inputCountry.map((country, index) => {
        const formattedContent = formatHighlightedMatches({
          indices: country.matches[0].indices,
          originalValue: country.matches[0].value,
        });

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
            }}
            ref={(element) => (countryList.current[index] = element)}
            onKeyDown={(event) => navigateList(event, index)}
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          ></li>
        );
      })}
      {inputCountry.length <= 0 && (
        <li css={styles.option}>No results matched your criteria</li>
      )}
    </ul>
  );
};

const styles = {
  container: {
    maxHeight: 400,
    width: '100%',
    overflow: 'scroll',
    boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.10)',
    marginTop: 8,
    borderRadius: '6px',
    padding: 40,
    textAlign: 'center' as const,
    position: 'absolute' as const,
  },
  option: {
    listStyle: 'none',
    color: '#18004c',
    padding: 8,
    borderRadius: '6px',
    cursor: 'pointer',
    '&: focus': {
      outline: 'none',
      backgroundColor: '#f1f1f1',
    },
    '&: hover': {
      outline: 'none',
      backgroundColor: '#f1f1f1',
    },
  },
};
