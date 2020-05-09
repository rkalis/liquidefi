export default function (camelCaseString) {
  return (
    camelCaseString
      // insert a space before all caps
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
  );
}
