function foo() { }
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name]     
