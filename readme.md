# Mean Tea

This is an exercise in leaning AngularJS. It is a shopping cart application with two major concpetual parts:

1. __Inventory__. The inventory is represented in a JSON file, which is loaded via an `$http.get` request. The user can see the inventory listed with details.

2. __Shopping Cart__. The user can add a quantity of each item to a shopping cart from the home page. The user can then edit the quantity of items and/or remove items entirely from the cart page.

## Angular Concepts

It demonstrates the following Angular concepts:

1. __Controllers__. There are two controllers.

  * `maincontroller` controls the home/inventory page, and 

  * `cartcontroller` controls the cart page.

2. __Services__. There are two services which interact closely with the controllers.

  * `teaservice` fetches and paress the JSON data. Specifically, it returns an array of _tea_ objects, and a list of tea categories.

3. __Directives__. There is one custom directive, cb-teawidget, which does little more than expand to a HTML template. But it's a custom directive and I wrote it, so that's cool. That also means there's a cb-teawidget template.

4. __Filters__ There are two custom filters. Both are incredibly minor and were just exercises in writing filters.

  * `cb_monetize` divides by 100 and prepends a '$' to a number. It takes the place of `{{ number / 100 | currency }}`.

  * `cb_assertTrue` turns a true/false value into a yes/no value.

5. __Routing__. There are two routes: _home_ and _cart_. Both have their own partial page to load.
