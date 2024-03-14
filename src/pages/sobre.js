import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";



export default function Home({Autor}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aula next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre o sistema 
        </h1>
        O sistema foi feito em next.js
        <hr/>
        Autor:{Autor}
        <Link href="/busca">ir para a busca</Link>
      </main>
    </div>
    
  )
}

export async function getStaticProps() {
  return { 
    props: {
      Autor:"luiz henrique lopes jayme"
    }
  };
}
