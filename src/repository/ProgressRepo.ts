import { Progress } from "../model/Progress";

interface IProgressRepo {
  save(progress: Progress): Promise<void>;
  update(progress: Progress): Promise<void>;
  delete(progressId: number): Promise<void>;
  retrieveById(progressId: number): Promise<Progress>;
  retrieveAll(): Promise<Progress[]>;
}

export class ProgressRepo implements IProgressRepo {
  async save(progress: Progress): Promise<void> {
    try {
      await Progress.create({
        IDUtilisateur: progress.IDUtilisateur,
        value: progress.value,
      });
    } catch (error) {
      throw new Error("Failed to create progress entry!");
    }
  }

  async update(progress: Progress): Promise<void> {
    try {
      const updatedProgress = await Progress.findOne({
        where: {
          id: progress.id,
        },
      });

      if (!updatedProgress) {
        throw new Error("Progress entry not found!");
      }

      updatedProgress.value = progress.value;
      await updatedProgress.save();
    } catch (error) {
      throw new Error("Failed to update progress entry!");
    }
  }

  async delete(progressId: number): Promise<void> {
    try {
      const progress = await Progress.findOne({
        where: {
          id: progressId,
        },
      });

      if (!progress) {
        throw new Error("Progress entry not found!");
      }

      await progress.destroy();
    } catch (error) {
      throw new Error("Failed to delete progress entry!");
    }
  }

  async retrieveById(progressId: number): Promise<Progress> {
    try {
      const progress = await Progress.findOne({
        where: {
          id: progressId,
        },
      });

      if (!progress) {
        throw new Error("Progress entry not found!");
      }

      return progress;
    } catch (error) {
      throw new Error("Failed to retrieve progress entry by ID!");
    }
  }

  async retrieveAll(): Promise<Progress[]> {
    try {
      return await Progress.findAll();
    } catch (error) {
      throw new Error("Failed to retrieve all progress entries!");
    }
  }
  async findByUserId(userId: number): Promise<Progress[]> {
    try {
      const progressEntries = await Progress.findAll({
        where: {
          IDUtilisateur: userId,
        },
      });
      return progressEntries;
    } catch (error) {
      throw new Error("Failed to fetch progress entries by user ID!");
    }
  }
}
