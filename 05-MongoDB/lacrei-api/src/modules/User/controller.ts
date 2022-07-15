import { Request, Response } from "express";
import User from "../../models/Users";
import Images from "../../models/Images";

const controller = {
  async create(req: Request, res: Response) {
    const { name, email, senha, occupation, state } = req.body;

    const savedUser = await User.count({
      email,
    });

    if (savedUser) {
      return res.status(400).json("Email já cadastrado no banco");
    }

    const newUser = await User.create(req.body);

    return res.status(201).json(newUser);
  },

  async createNewImage(req: Request, res: Response) {
    const {nome, link } = req.body;

    const savedLink = await Images.count({
      link,
    });

    if (savedLink) {
      return res.status(400).json("Imagem já cadastrado no banco");
    }

    const newImage = await Images.create(req.body);

    return res.status(201).json(newImage);
  },
};

export default controller;
u