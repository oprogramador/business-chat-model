export default (object, anInterface) => {
  if (typeof object.getInterfaces !== 'function') {
    return false;
  }
  const interfaces = object.getInterfaces();
  if (!Array.isArray(interfaces)) {
    return false;
  }

  return interfaces.includes(anInterface);
};
