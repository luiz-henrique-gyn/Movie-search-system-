import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";



export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aula next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Fimes em destaque
        </h1>
        <Link href="/busca">ir para a busca</Link>
        <ul>
          {list.map(item=>(
            <li>
              <Link href={`/movie/${item.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150"/><br/>
            {item.title}
            </Link>
            </li>
          ))}
        </ul>
        <Link href="/sobre">Sobre min</Link>
      </main>
    </div>
    
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return { 
    props: {
      list: json.list
    }
  };
}
