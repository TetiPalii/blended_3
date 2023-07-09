import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.length > 0 &&
        countries.map(({ id, country, flag }) => {
          return (
            <GridItem key={id}>
              <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location }}>
                <img src={flag} alt={country} />
              </Link>
            </GridItem>
          );
        })}
    </Grid>
  );
};
