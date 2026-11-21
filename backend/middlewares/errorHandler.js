const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;

    let message; 

    if (status === 500){
        console.error(err);
        message = "Erreur serveur";
    }else{
        message = err.message
    }

    res.status(status).json({message});
}


export default errorHandler;
