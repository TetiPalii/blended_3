import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countryByRegion, setCountryByRegion] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const hendleSubmit = query => {
    setSearchQuery({ query });
  };

  useEffect(() => {
    const query = searchQuery.get('query');
    if (!query) {
      return;
    }

    const getCountysByRegion = async () => {
      setIsLoading(true);
      try {
        const countries = await fetchByRegion(query);
        setCountryByRegion(countries);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getCountysByRegion();
  }, [searchQuery]);

  return (
    <Section>
      <Container>
        <SearchForm hendleSubmit={hendleSubmit} />
        <CountryList countries={countryByRegion} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
