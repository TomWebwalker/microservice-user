import { Repository } from 'typeorm';
import { PaginationInput } from './pagination.input-type';

export class EntityService<E, I> {
  constructor(private repository: Repository<E>) {}

  async query(
    pagination: PaginationInput,
  ): Promise<{ rows: E[]; count: number }> {
    const take = pagination.limit || 10;
    const skip = pagination.offset || 0;
    return this.repository
      .findAndCount({
        take,
        skip,
      })
      .then(([rows, count]) => ({ rows, count }));
  }

  async create(data: I): Promise<E> {
    return this.repository.save(data);
  }

  async update(data: I & { id: number }): Promise<E> {
    const entity = await this.repository.findOneOrFail(data.id);
    return this.repository.save({
      ...entity,
      ...data,
    });
  }

  async delete(id: number): Promise<boolean> {
    return (await this.repository.delete(id)).affected > 0;
  }
}
