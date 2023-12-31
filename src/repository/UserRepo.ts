import { User } from "../model/User";

interface IUserRepo {
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(userid: number): Promise<void>;
  retrieveById(userId: number): Promise<User>;
  retrieveAll(): Promise<User[]>;
}

export class UserRepo implements IUserRepo {

  async save(user: User): Promise<void> {
    try {
      await User.create({
        name: User.name,
      });
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async update(user: User): Promise<void> {
    try {
      const new_category = await User.findOne({
        where: {
          id: user.id,
        },
      });
      if (!new_category) {
        throw new Error("Note not found!");
      }
      new_category.name = user.name;

      await new_category.save();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async delete(categoryId: number): Promise<void> {
    try {
      const new_category = await User.findOne({
        where: {
          id: categoryId,
        },
      });
      if (!new_category) {
        throw new Error("Note not found!");
      }

      await new_category.destroy();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async retrieveById(categoryId: number): Promise<User> {
    try {
      const new_category = await User.findOne({
        where: {
          id: categoryId,
        },
      });
      if (!new_category) {
        throw new Error("Note not found!");
      }
      return new_category;
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async retrieveAll(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }

}
