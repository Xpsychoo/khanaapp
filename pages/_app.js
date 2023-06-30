import { Provider } from 'react-redux';
import '../styles/globals.scss'
import { store } from '../store/store';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="mainwrapper">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
export default MyApp;
