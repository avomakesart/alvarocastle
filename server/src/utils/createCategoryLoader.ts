import DataLoader from 'dataloader';
import { Categories } from '../entities';

export const createCategoryLoader = () =>
  new DataLoader<number, Categories>(async (categoryIds) => {
    const categories = await Categories.findByIds(categoryIds as number[]);
    const categoryIdToCategory: Record<number, Categories> = {};

    categories.forEach((c) => (categoryIdToCategory[c.id] = c));
    return categoryIds.map((categoryId) => categoryIdToCategory[categoryId]);
  });
