export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const collectionFilter = collection.filter(item => item.match(/^粤A.*/));
  return collectionFilter.length;
}
