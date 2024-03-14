import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import handler from "./api/hello";



export default function busca({list}) {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMovelList]=useState([]);

  const handlesearch = async()=>{
    if (searchText !== ''){
      const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
      const json= await result.json();
      setMovelList(json.list);

      console.log(json)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>
              <input  type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
              Termo de busca: {searchText}
              <button onClick={handlesearch}>Buscar</button>

              <hr/>
              <ul>
                {movieList.map(item=>(
                  <li>
                    <Link href={`/movie/${item.id}`}>
                      <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150"/><br/>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
      </main>
    </div>
    
  )
}

