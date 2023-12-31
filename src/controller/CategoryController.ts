import { Request, Response } from "express";
import { Category} from "../model/Category";
import { CategoryRepo } from "../repository/CategoryRepo";

class CategoryController {
  async create(req: Request, res: Response) {
    try {
      const new_note = new Category();
      new_note.name = req.body.name;

      await new CategoryRepo().save(new_note);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created Category!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new CategoryRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted note!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_note = await new CategoryRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched note by id!",
        data: new_note,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_note = await new CategoryRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all note data!",
        data: new_note,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_note = new Category();

      new_note.id = id;
      new_note.name = req.body.name;

      await new CategoryRepo().update(new_note);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated note data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  async findCategoryByName(categoryName: string): Promise<Category | null> {
    try {
      const category = await Category.findOne({
        where: {
          name: categoryName,
        },
      });

      return category;
    } catch (error) {
      console.error("Error finding category by name:", error);
      throw error;
    }
  }
}

export default new CategoryController()
