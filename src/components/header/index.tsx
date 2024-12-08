import styles from "./styles.module.css";

const GlobalHeader = () => {
  return (
    <div className={styles.CorpoHeader}>
      <div className={styles.CorpoLogo}>Spotify</div>
      <div className={styles.CorpoPesquisa}>
        <div className={styles.iconHome}>50%</div>
        <div className={styles.caixaPesquisa}>caixapesquisa</div>
      </div>
      <div className={styles.CorpoLogin}>
        <div className={styles.CorpoButtons}>
          <button className={styles.Loginb1}>Inscrever-se</button>
          <button className={styles.Loginb2}>
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlobalHeader;
