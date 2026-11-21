import app from "./app.js";
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 3000; 

const start = async () => {
    try{
        await sequelize.authenticate();
        console.log("connexion a la base reussie");

        await sequelize.sync();
        console.log("Tables synchronisees");

        app.listen(PORT, () =>{
            console.log(`API lancee sur http://localhost:${PORT}`);
        });
    }catch(err) {
        console.error(" Impossible de demarrer l'API:", err.message);
        process.exit(1);
    }
};

start();