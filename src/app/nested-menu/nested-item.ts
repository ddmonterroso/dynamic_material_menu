export  interface NestedItem {
    name: string;
    parentId:number;
    id:number;
    children?: NestedItem[];
  }
  