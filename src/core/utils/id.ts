export default class Id {
  static get novo(): string {
    return (
      new Date().getTime().toString(36) +
      Math.random().toString(36).substring(2, 16)
    );
  }
}
