import Biblioteca from "../../components/biblioteca";
import GlobalHeader from "../../components/header";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <>
      <GlobalHeader />
      <div className={styles.conteudoHome}>
        <Biblioteca />
        <div className={styles.conteudoDireita}>Conteudo Direita</div>
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};
export default Home;
