## Stuff I learned

* If you're using a table, you can't `tr(ng-repeat)` a custom directive as though it were a `td` element. Because of some kind of bug. You _can_ `tr(ng-repeat='f in foo' my-element='f')`, using your directive as an element on your tr tag.

  [src](http://stackoverflow.com/questions/18600710/angularjs-ng-repeat-with-custom-element-inside-a-table-is-rendering-strangely)
