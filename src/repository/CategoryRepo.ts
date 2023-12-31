import { Category } from "../model/Category";

interface ICategoryRepo {
  save(category: Category): Promise<void>;
  update(category: Category): Promise<void>;
  delete(categoryId: number): Promise<void>;
  retrieveById(categoryId: number): Promise<Category>;
  retrieveAll(): Promise<Category[]>;
}

export class CategoryRepo implements ICategoryRepo {

  async save(category: Category): Promise<void> {
    try {
      await Category.create({
        name: category.name,
      });
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async update(category: Category): Promise<void> {
    try {
      const new_category = await Category.findOne({
        where: {
          id: category.id,
        },
      });
      if (!new_category) {
        throw new Error("Note not found!");
      }
      new_category.name = category.name;

      await new_category.save();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async delete(categoryId: number): Promise<void> {
    try {
      const new_category = await Category.findOne({
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
  async retrieveById(categoryId: number): Promise<Category> {
    try {
      const new_category = await Category.findOne({
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
  async retrieveAll(): Promise<Category[]> {
    try {
      return await Category.findAll();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }

}
