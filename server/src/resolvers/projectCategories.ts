import { ProjectCategories } from '../entities/ProjectCategories';
import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../types';

@ObjectType()
class PaginatedProjectCategories {
  @Field(() => [ProjectCategories])
  projectCategories: ProjectCategories[];
  @Field()
  hasMore: boolean;
}

@Resolver(ProjectCategories)
export class ProjectCategoryResolver {
  @Mutation(() => ProjectCategories)
  @UseMiddleware(isAuth)
  async createProjectCategory(
    @Arg('title') title: string
  ): Promise<ProjectCategories> {
    return ProjectCategories.create({ title }).save();
  }

  @Mutation(() => ProjectCategories, { nullable: true })
  @UseMiddleware(isAuth)
  async updateProjectCategory(
    @Arg('id', () => Int) id: number,
    @Arg('title') title: string
  ): Promise<ProjectCategories | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(ProjectCategories)
      .set({ title })
      .where('id = :id', { id })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  @Query(() => PaginatedProjectCategories)
  async projectCategories(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
    @Ctx() {}: MyContext
  ): Promise<PaginatedProjectCategories> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const projectCategories = await getConnection().query(
      `
        select c.*
        from project_categories c  
        ${cursor ? `where c."createdAt" < $2` : ''}
        order by c."createdAt" ASC
        limit $1
      `,
      replacements
    );

    return {
      projectCategories: projectCategories.slice(0, realLimit),
      hasMore: projectCategories.length === realLimitPlusOne,
    };
  }

  @Query(() => ProjectCategories, { nullable: true })
  projectCategory(
    @Arg('id', () => Int) id: number
  ): Promise<ProjectCategories | undefined> {
    return ProjectCategories.findOne(id);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteProjectCategory(
    @Arg('id', () => Int) id: number
  ): Promise<boolean> {
    await ProjectCategories.delete({ id });
    return true;
  }
}
