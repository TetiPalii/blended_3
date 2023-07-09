import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
