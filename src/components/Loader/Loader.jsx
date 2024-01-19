import css from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loaderOverlay}>
      <Circles
        visible={true}
        height="180"
        width="180"
        color="#154360"
        ariaLabel="circles-loading"
        wrapperStyle={{ position: 'absolute' }}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};
