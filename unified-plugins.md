# Plugins

- Plugins can contain 2 parts:

    - attacher: function that is invoked when someone calls .use()
    - transformer: optional function invoked each time a file is processed with an AST and a virtual file.

- in order to traverse the tree, we can use the utility "units-until-visit" which finds whatever you pass match with a node, this way we can run a function for each node that matches the condition.
- "units-until-is" help us check node types
- in order to send a message/warning/whatever, we can use "file.message()" to associate a message with the file