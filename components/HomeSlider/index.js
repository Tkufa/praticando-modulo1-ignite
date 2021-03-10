import { useState } from 'react';
import styles from './HomeSlider.module.scss';

export default function HomeSlider() {
  const [position, setPosition] = useState(0);

  const [isShowHome, setIsShowHome] = useState('initial');

  function home() {
    setPosition(0);
    setIsShowHome('initial');
  }
  function about() {
    setPosition('-100%');
    setTimeout(() => setIsShowHome('none'), 100);
  }
  function products() {
    setPosition('-200%');
    setTimeout(() => setIsShowHome('none'), 100);
  }
  return (
    <>
      <section className={styles.btns}>
        <button onClick={home}>Home</button>
        <button onClick={about}>Sobre Nós</button>
        <button onClick={products}>Produtos</button>
      </section>

      <div className={styles.container} style={{ 'margin-left': position }}>
        <div className={styles.home}>
          <div
            className={styles.homeContent}
            style={{ display: isShowHome, 'margin-left': position }}
          >
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
          </div>
        </div>
        <div className={styles.about}>About</div>
        <div className={styles.products}>Products</div>
      </div>
    </>
  );
}
