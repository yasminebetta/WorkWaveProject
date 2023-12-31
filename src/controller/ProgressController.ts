import { Request, Response } from "express";
import { Progress } from "../model/Progress";
import { ProgressRepo } from "../repository/ProgressRepo";

class ProgressController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { IDUtilisateur, value } = req.body;
      const progress = new Progress({ IDUtilisateur, value });
      await new ProgressRepo().save(progress);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created progress entry!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const progressId = parseInt(req.params["id"]);
      await new ProgressRepo().delete(progressId);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted progress entry!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const progressId = parseInt(req.params["id"]);
      const progress = await new ProgressRepo().retrieveById(progressId);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched progress entry by ID!",
        data: progress,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const progressEntries = await new ProgressRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all progress entries!",
        data: progressEntries,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const progressId = parseInt(req.params["id"]);
      const updatedProgress = new Progress({
        id: progressId,
        IDUtilisateur: req.body.IDUtilisateur,
        value: req.body.value,
      });

      await new ProgressRepo().update(updatedProgress);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated progress entry!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  async findByUserId(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params["id"]);
      const progressEntries = await new ProgressRepo().findByUserId(userId);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched progress entries by user ID!",
        data: progressEntries,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ProgressController();
