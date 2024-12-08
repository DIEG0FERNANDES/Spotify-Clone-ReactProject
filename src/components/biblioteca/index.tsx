import styles from "./styles.module.css";

const Biblioteca = () => {
  return (
    <div className={styles.conteudoEsquerda}>
      <div className={styles.headerBiblioteca}>
        <div>| | \</div>
        <span>Biblioteca</span>
        <div>+</div>
      </div>
      <div className={styles.container}>
        <div className={styles.playlist}>
          <span>Crie sua primeira playlist</span>
          <span>É facil, vamos te ajudar</span>
          <button>Crie playlist</button>
        </div>
        <div className={styles.podcast}>recomendação de podcast</div>
      </div>
      <div className={styles.Footer}>
        <div>Footer</div>
        <div>Internacionalização</div>
      </div>
    </div>
  );
};

export default Biblioteca;
