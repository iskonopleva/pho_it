// replaces current selected text in the active tab with the passed argument
function selector(textReplace) {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(textReplace));
}

selector("Pho");