export class Category {
  id: string;
  name: string;
  parentCategoryId: string;

  constructor(id: string, name: string, parentCategoryId?: string) {
    this.id = id;
    this.name = name;
    this.parentCategoryId = parentCategoryId;
  }

}
