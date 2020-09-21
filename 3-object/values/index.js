export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source)
    .map(item => parseInt(item, 10))
    .reduce((total, element) => total + element);
}
