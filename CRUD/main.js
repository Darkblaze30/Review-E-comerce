export class CRUD {
    constructor(collection) {
      this.collection = collection;
    }
    
    async createMany(dataArray) {
      const result = await this.collection.insertMany(dataArray);
      return result.insertedIds;
    }    
    
    async create(data) {
      const result = await this.collection.insertOne(data);
      return result.insertedId;
    }
  
    async read(filter = {}) {
      return await this.collection.find(filter).toArray();
    }
  
    async readOne(filter = {}) {
      return await this.collection.findOne(filter);
    }
  
    async update(filter, data) {
      const result = await this.collection.updateOne(filter, { $set: data });
      return result.modifiedCount;
    }
  
    async delete(filter) {
      const result = await this.collection.deleteOne(filter);
      return result.deletedCount;
    }
  }
  
  