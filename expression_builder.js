/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/
var operatorTypes = {
  EQUALS: 0,
  NOT_EQUALS: 1,
  GREATER_THAN: 2,
  LESS_THAN: 3,
  GREATER_OR_EQUAL: 4,
  LESS_OR_EQUAL: 5

}

var expressionType = {
  IF_STATEMENT: 0,
  IF_ELSE_STATEMENT: 1,
  IF_ELSE_IF_STATEMENT: 2
}

var flowType = {
  START: 0,
  VARIABLE: 1,
  CONDITIONAL: 2,
  END: 3
}

function flowNode(type, value, inside, answer) {
  this.type = type;
  this.value= value;
  this.inside= inside;
  this.answer= answer;
}



//difficulty determines the 
var difficulty = 0;

//lvalue of a boolean expression (the variable of our equation)
var lval = Math.floor((Math.random() * 10) + 1);

//rvalue of an boolean expression
var rval = Math.floor((Math.random() * 10) + 1);

// the possible muttators are ==, !=, >=, <, <, >
var operator = Math.floor((Math.random() * 6));

//the expression type whether its an if, if else, if else if etc...
var expressionVal = Math.floor((Math.random() * difficulty));

//the else if level operator for expression checking
var elseIfOperator = Math.floor((Math.random() * 6));

//the else if level rvalue for expression checking
var elif_rval = Math.floor((Math.random() * 10) + 1);

var flowObjects = [];

buildExpression();
recalcDifficulty();

function buildExpression() {
  flowObjects = [];

  lval = Math.floor((Math.random() * 10) + 1);

  rval = Math.floor((Math.random() * 10) + 1);

  // the possible muttators are ==, !=, >=, <, <, >
  operator = Math.floor((Math.random() * 6));

  expressionVal = Math.floor((Math.random() * difficulty));

  flowObjects.push(new flowNode(flowType.START));

  flowObjects.push(new flowNode(flowType.VARIABLE, lval));

  document.clear();

  document.getElementById("variable").innerHTML = "x = " + lval;

  var operatorString = getOperatorString(operator);

  var evalString = "if( x "/*(" + lval + ") "*/ + operatorString + " " + rval + " ) { <br>"

  /*evalString += "<br>" + evaluateExpression(operator, lval, rval);*/

  flowObjects.push(new flowNode(flowType.CONDITIONAL,"x " + operatorString + " " + rval, null, evaluateExpression(operator, lval, rval)));

evalString += "<br>}";

if (expressionVal == expressionType.IF_ELSE_STATEMENT) {
  flowObjects.push(new flowNode(flowType.CONDITIONAL, null, null, !evaluateExpression(operator, lval, rval)));
evalString += " else {<br><br>}";
} else if (expressionVal == expressionType.IF_ELSE_IF_STATEMENT) {
  // the possible muttators are ==, !=, >=, <, <, >
  elseIfOperator = Math.floor((Math.random() * 6));
  elif_rval = Math.floor((Math.random() * 10) + 1);
  var elseIfString = " else if( x "/*(" + lval + ") "*/;
  switch (operator) {
    case operatorTypes.EQUALS:
      while (elseIfOperator == operatorTypes.EQUALS) {
        elseIfOperator = Math.floor((Math.random() * 6));
      }
      elseIfString += getOperatorString(elseIfOperator);
      break;
    case operatorTypes.NOT_EQUALS:
      while (elseIfOperator == operatorTypes.NOT_EQUALS) {
        elseIfOperator = Math.floor((Math.random() * 6));
      }
      elseIfString += getOperatorString(elseIfOperator);
      break;
    case operatorTypes.GREATER_THAN:
      while (elseIfOperator == operatorTypes.GREATER_THAN) {
        elseIfOperator = Math.floor((Math.random() * 6));
      }
      elseIfString += getOperatorString(elseIfOperator);
      break;
    case operatorTypes.LESS_THAN:
      while (elseIfOperator == operatorTypes.LESS_THAN) {
        elseIfOperator = Math.floor((Math.random() * 6));
      }
      elseIfString += getOperatorString(elseIfOperator);
      break;
    case operatorTypes.GREATER_OR_EQUAL:
      while (elseIfOperator == operatorTypes.GREATER_OR_EQUAL) {
        elseIfOperator = Math.floor((Math.random() * 6));
      }
      elseIfString += getOperatorString(elseIfOperator);
      break;
    case operatorTypes.LESS_OR_EQUAL:
      while (elseIfOperator == operatorTypes.LESS_OR_EQUAL) {
        elseIfOperator = Math.floor((Math.random() * 6));
      }
      elseIfString += getOperatorString(elseIfOperator);
      break;
  }
  evalString += elseIfString + " " + elif_rval + " ) {<br>";

  if (!evaluateExpression(operator, lval, rval)) {
   // evalString += "    " + evaluateExpression(elseIfOperator, lval, elif_rval);
    flowObjects.push(new flowNode(flowType.CONDITIONAL, "x " + getOperatorString(elseIfOperator) + " " + elif_rval, null, evaluateExpression(elseIfOperator, lval, elif_rval)));
} else {
  //evalString += "<br>";
  flowObjects.push(new flowNode(flowType.CONDITIONAL, "x " + getOperatorString(elseIfOperator) + " " + elif_rval, null, false));
}

evalString += "<br>}";
if (Math.floor((Math.random() * 2) >= 1)) {
  flowObjects.push(new flowNode(flowType.CONDITIONAL, null, null, !(evaluateExpression(operator, lval, rval) || evaluateExpression(elseIfOperator, lval, elif_rval))));
evalString += "else {<br><br>}";
}
}
document.getElementById("expression").innerHTML = evalString;
flowObjects.push(new flowNode(flowType.END));
}

function recalcDifficulty() {
  difficulty = 1 + Math.floor((document.getElementById("difSlider").value / 100) * 2);
  document.getElementById("difficult").innerHTML = "Difficulty: " + difficulty;
  document.getElementById("difSlider").value = difficulty / 3 * 100;
}

function printFlowLogic() {
  var logicString = "Total Nodes: " + flowObjects.length + "<br>";
  for (var o in flowObjects) {
    logicString += "" + stringFromFlowObject(flowObjects[o].type) + " " + flowObjects[o].answer + "<br>";
  }
  document.getElementById("logic").innerHTML = logicString;
}

function stringFromFlowObject(val){
  switch(val){
    case flowType.START:
      return "Start";
      break;
    case flowType.CONDITIONAL:
      return "Conditional";
      break;
    case flowType.VARIABLE:
      return "Variable";
      break;
    case flowType.END:
      return "End";
      break;
  }
}

function getOperatorString(val) {
  switch (val) {
    case operatorTypes.EQUALS:
      return "==";
      break;
    case operatorTypes.NOT_EQUALS:
      return "!=";
      break;
    case operatorTypes.GREATER_THAN:
      return ">";
      break;
    case operatorTypes.LESS_THAN:
      return "<";
      break;
    case operatorTypes.GREATER_OR_EQUAL:
      return ">=";
      break;
    case operatorTypes.LESS_OR_EQUAL:
      return "<=";
      break;
  }
}

function evaluateExpression(op, lv, rv) {
  switch (op) {
    case operatorTypes.EQUALS:
      return lv == rv;
      break;
    case operatorTypes.NOT_EQUALS:
      return lv != rv;
      break;
    case operatorTypes.GREATER_THAN:
      return lv > rv;
      break;
    case operatorTypes.LESS_THAN:
      return lv < rv;
      break;
    case operatorTypes.GREATER_OR_EQUAL:
      return lv >= rv;
      break;
    case operatorTypes.LESS_OR_EQUAL:
      return lv <= rv;
      break;
  }
}