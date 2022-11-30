const sucess = (req, res, msg, status)=>{
    res.status(status || 200).send(msg);
}

const error = ( req, res, msg, status)=>{
res.status(status || 500).send({error:msg})
}