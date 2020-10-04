import { Guid } from 'guid-typescript';
export interface IIdentifiable {
  id: Guid;
}
export class User implements IIdentifiable {
  id: Guid;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}

export class Community implements IIdentifiable {
  id: Guid;
  name: string;
  registrationNumber: string;
  email: string;
}

export class DBSet<T> {
  table: T[] = [];
  addEntity(entity: T): boolean {
    // const dbRecords = this.table.filter(x => (x as unknown as IIdentifiable).id === (entity as unknown as IIdentifiable).id);
    // if (dbRecords.length > 0) {
    //   throw new Error('Duplicate record');
    // }
    this.table.forEach(element => {
      const elm = element as unknown as IIdentifiable;
      if (elm.id === (entity as unknown as IIdentifiable).id) {
        throw new Error('Record does not exist');
      }
    });
    this.table.push(entity);
    return true;
  }
  updateEntity(entity: T): boolean {
    const dbRecords = this.table.filter(x => (x as unknown as IIdentifiable).id === (entity as unknown as IIdentifiable).id);
    if (dbRecords.length === 0) {
      throw new Error('Record does not exist');
    }
    dbRecords[0] = entity;
    return true;
  }



}
export class DBContext {
  Users = new DBSet<User>();
  Communities = new DBSet<Community>();
}
