// JSON Input Data sort function
// Interprets JSON data and filters entries that have the property we are looking for
// Takes params of user selection and the JSON Data object

function sortData(selection, Data) {
  // https://www.stechies.com/unexpected-token-o-json-position-1/ - Helped to fix the JSON parsing issue for sorting data
  var data1 = JSON.stringify(Data);
  var selectionOnly = JSON.parse(data1).filter(function (entry) {
    return entry.PL === selection;
  });

  console.log(selectionOnly);
  return selectionOnly;
}

export default sortData;
