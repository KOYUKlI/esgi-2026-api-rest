import { Application, Request, Response } from "express";

<<<<<<< HEAD
export const initHandler = (app: Application) => {
  app.get("/", (req, res) => {
    return res.send({
      message: "Hello World!",
    });
  });

  app.get("/products", (req: Request, res: Response) => {
    return res.send([
      { id: 1, name: "Courgette" },
      { id: 2, name: "Ail" },
      { id: 3, name: "Banane" },
    ]);
  });
};
=======
export const initHandlers = (app: Application) => {
    app.get("/", (req, res) => {
        return res.send({
            message: "Hell world"
        })
    })

    app.get("/products", (req: Request, res: Response) => {
        return res.send([
            {id: 1, name:"courgette"},
            {id: 2, name:"pomme"},
            {id: 3, name:"ail"}
        ])
    })
} 
>>>>>>> ecb1c888baafdf47f46a960f3d70b2369a972779
