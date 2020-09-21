export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const date = new Date().getDate();
  const date2000 = new Date(2000, 1, 1).getDate();
  const number = date - date2000;
  return collection.find(element => element.age < number).name;
}
