function selector() {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode("Pho"));
}

selector();