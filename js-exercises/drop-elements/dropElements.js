function dropElements(elements, predicate) {
  if (elements.length <= 0 || predicate === '') return [];
  return elements.filter(predicate);
}

export { dropElements };
