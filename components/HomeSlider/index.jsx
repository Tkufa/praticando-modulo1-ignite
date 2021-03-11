import { useState } from 'react';
import styles from './HomeSlider.module.scss';

export default function HomeSlider() {
  const [position, setPosition] = useState(0);

  function home() {
    setPosition(0);
  }
  function about() {
    setPosition('-100%');
  }
  function products() {
    setPosition('-200%');
  }

  return (
    <>
      <section className={styles.btns}>
        <button onClick={home}>
          <img
            src='https://www.flaticon.com/svg/vstatic/svg/61/61426.svg?token=exp=1615448884~hmac=affcc47dbfec100d907f1043ebbb7ddf'
            alt=''
          />
        </button>
        <button onClick={about}>
          <img
            src='https://www.flaticon.com/svg/vstatic/svg/4293/4293726.svg?token=exp=1615449100~hmac=093c767c39eff04ffb7e4dfbf89a999b'
            alt=''
          />
        </button>
        <button onClick={products}>
          <img
            src='https://www.flaticon.com/svg/vstatic/svg/1170/1170679.svg?token=exp=1615449221~hmac=1ab8f647a0a0f272ccaf33e7a0c5868f'
            alt=''
          />
        </button>
      </section>

      <div className={styles.container} style={{ marginLeft: position }}>
        <div className={styles.home}>
          <h1>Home</h1> 
        </div>
        <div className={styles.about}>
          <h1>About</h1>
        </div>
        <div className={styles.products}>
          <h1>Products</h1>
        </div>
      </div>
    </>
  );
}
