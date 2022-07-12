import { Request, Response } from "express";
import User from "../../models/Users";
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
};

export default controller;
