export class Member {
  private id: string;

  
  constructor() {
    this.id = '';
  }
  
  setID(id: string) {
    // database 연결 로직
    // db 에서 id를 찾아서 this.id 에 할당
    // 현제는 임시로 id를 할당
    this.id = id;
  }

  // get id
  getID() {
    return this.id;
  }
}
