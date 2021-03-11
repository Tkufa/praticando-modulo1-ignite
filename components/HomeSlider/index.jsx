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
         <h1>HOME</h1>
        </button>
        <button onClick={about}>
          <h1>ABOUT</h1>
        </button>
        <button onClick={products}>
          <h1>PRODUTOS</h1>
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
