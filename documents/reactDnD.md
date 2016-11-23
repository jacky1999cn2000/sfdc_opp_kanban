# reactDnD

* [reactDnD](https://gaearon.github.io/react-dnd/)
* npm modules
  * dependencies
    * react-dnd
    * react-dnd-html5-backend
  * devDependencies
    * babel-plugin-transform-decorators-legacy (also added `"plugins":["transform-decorators-legacy"]` in .babelrc in order to use decorators in code)
* components roles
  * Board.jsx: DragDropContext
  * Stage.jsx: DropTarget
  * Opp.jsx: DragSource
* actions
  * updateOpp (sync action, only update opp in Redux)
  * updateOppInSFDC (async function, update opp in SFDC first, if successful, then dispatch updateOpp to update opp in Redux)
