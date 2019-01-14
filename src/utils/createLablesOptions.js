const createLablesOptions = labels =>
  labels.map(label => ({
    value: label,
    label,
    color: label.toLowerCase(),
  }));

export default createLablesOptions;
