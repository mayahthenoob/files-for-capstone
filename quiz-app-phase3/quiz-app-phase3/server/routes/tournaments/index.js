
const r=require('express').Router();
let tournaments=[];
r.post('/create',(req,res)=>{ tournaments.push(req.body); res.json(tournaments); });
r.get('/',(req,res)=>res.json(tournaments));
module.exports=r;
