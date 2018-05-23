exports.formatData = obj => {
  obj = JSON.parse(obj);
  const result = [];
  const keys = [1];
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i += 1) {
    if (objKeys[i] !== 'children') {
      keys.push(objKeys[i]);
    }
  }

  const values = [2];
  for (let i = 0; i < objKeys.length; i += 1) {
    if (objKeys[i] !== 'children') {
      values.push(obj[objKeys[i]]);
    }
  }

  result.push(keys, values);

  let counter = 3;
  const formatChildren = child => {
    if (child.children === undefined) {
      return;
    }
    const childValues = [counter];
    const childKeys = Object.keys(child);
    for (let i = 0; i < childKeys.length; i += 1) {
      if (childKeys[i] !== 'children') {
        childValues.push(child[childKeys[i]]);
      }
    }
    result.push(childValues);
    counter += 1;
    child.children.forEach((child) => formatChildren(child));
  };

  obj.children.forEach((child) => formatChildren(child));
  const stringResult = result.map(entry => (
    entry.join(',')
  )).join('\n');

  return stringResult;
}