export const useCountryList = ({
  list,
  setValue,
  setAnimateArrow,
  setShouldOpen,
}) => {
  const saveSelectedCountry = (value) => {
    localStorage.setItem('selectedCountry', value);
  };

  const navigateList = (event, index, countryName) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextCountry = (index + 1) % list.current.length;
      list.current[nextCountry].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevCountry =
        (index - 1 + list.current.length) % list.current.length;
      list.current[prevCountry].focus();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      setValue(countryName);
      saveSelectedCountry(countryName);
      setAnimateArrow(false);
      setShouldOpen(false);
    }
  };

  return {
    navigateList,
    saveSelectedCountry,
  };
};
