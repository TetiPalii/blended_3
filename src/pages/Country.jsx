import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { routes } from 'routes';

export const Country = () => {
  const { id } = useParams();
  const [countryDetails, setCountryDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLink = location?.state?.from ?? routes.HOME;

  useEffect(() => {
    const addCounrtyDetails = async () => {
      setIsLoading(true);
      try {
        const oneCountry = await fetchCountry(id);
        setCountryDetails(oneCountry);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    addCounrtyDetails();
  }, [id]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={backLink}>Go back</GoBackBtn>
        <CountryInfo countryInfo={countryDetails} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
