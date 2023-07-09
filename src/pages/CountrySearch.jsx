import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryByRegion, setCountryByRegion] = useState([]);

  const hendleSubmit = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const getCountysByRegion = async () => {
      try {
        const countries = await fetchByRegion(searchQuery);
        setCountryByRegion(countries);
      } catch (error) {}
    };
    getCountysByRegion();
  }, [searchQuery]);

  return (
    <Section>
      <Container>
        <SearchForm hendleSubmit={hendleSubmit} />
        <CountryList countries={countryByRegion} />
      </Container>
    </Section>
  );
};
