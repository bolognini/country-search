export const useCountryList = ({
  countryList,
  setValue,
  setAnimateArrow,
  setShouldOpen,
}) => {
  const navigateList = (event, index) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextCountry = (index + 1) % countryList.current.length;
      countryList.current[nextCountry].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevCountry =
        (index - 1 + countryList.current.length) % countryList.current.length;
      countryList.current[prevCountry].focus();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      setValue(countryList.current[index].innerHTML);
      setAnimateArrow(false);
      setShouldOpen(false);
    }
  };

  return {
    navigateList,
  };
};
