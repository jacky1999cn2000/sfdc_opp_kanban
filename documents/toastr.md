# reactDnD

* [snackbar tutorial](http://www.w3schools.com/howto/howto_js_snackbar.asp)
* How it works
  * In Redux `updateOppInSFDC` async action, it will update Redux's state.appState.status when RESTful update (using SFDC RESTful API's PATCH method) was successful:
    ```
    dispatch(changeAppState(['status'], [{
        type: ActionTypes.UPDATED_OPP,
        id: id,
        stage: stage
    }]));
    ```
  * In App component, it will detect appState's status value, and if type equals `ActionTypes.UPDATED_OPP`, it will set a timer to update it back to `{}`; meanwhile, the `<Toastr status={...} />` was rendered first with animation, and after 3s when the timer update appState.status back to `{}`, it will re-render again and be invisible (Toastr component's visibility was controlled by appState.status.type value),
  ```
  if (this.props.state.appState.get('status').error) {
      console.log('error!');
      console.log(this.props.state.appState.get('status').error);
      return <Screen type='error'/>;
  } else {
      switch (this.props.state.appState.get('status').type) {
          case ActionTypes.UPDATED_OPP:
              console.log('opp updated!');
              setTimeout(() => {
                  this.props.dispatch(changeAppState(['status'], [{}]));
              }, 3000);
              break;
          default:
              console.log('everything is normal');
      }
  }

  ...

  <Toastr status={this.props.state.appState.get('status')}/>
  ```
