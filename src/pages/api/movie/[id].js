import {apiBase,apikey} from '../../../../lib/tmdb'

export default async (req, res) => {
    // console.log("parames",req.params)
    // console.log("query",req.query)
    // let q =req.query.q;

    // console.log("params",req.params);
    // console.log("query" ,req.query);

    const result = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apikey}&language=pt-BR`);
    const json =await result.json();

    
    res.status(200).json({
        info: json
    });
  }
  