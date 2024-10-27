// IMPORT DES MODULES
const express = require("express")
import { Request, Response } from "express"
const cors = require("cors")

//INITIALISATION DE L'API
const app = express()

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//IMPORT DES ROUTES
app.get("/", (req: Request, res: Response) => {
  res.send("I'm oneline, weldone")
})

app.get("*", (req: Request, res: Response) => {
  res.status(501).send("What the hell are you doing !")
})

// START SERVEUR
app.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Serveur en cours d'execution sur le port ${process.env.SERVER_PORT}`
  )
)
