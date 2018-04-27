export const getSingleType = (data, type) => {
  const single = data.find(item => item.type === type);
  if (single && single.data) {
    return single.data;
  }

  return undefined;
};
