import { Hourglass } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Hourglass width="200" color="#ff6347" />
    </LoaderWrapper>
  );
};
