import {apiBase,apikey} from '../../../lib/tmdb'

export default async (req, res) => {
    // console.log("parames",req.params)
    // console.log("query",req.query)
    // let q =req.query.q;

    const result = await fetch(`${apiBase}/search/movie?api_key=${apikey}&language=pt-BR&query=${req.query.q}`);
    const json =await result.json();

    
    res.status(200).json({
        list: json.results
    });
  }
  