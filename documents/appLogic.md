# appLogic

* Oauth
  * Process
    * if there aren't "access_token" and "instance_url" in sessionStorage, then App component will display Login component
    * login button in Login component will redirect browser to SFDC's login page by directly changing window.location
    * after login, a prompt will ask whether to grant access to sfdc_opp_kanban (a connected app registered in org with account "liang.zhao83@gmail.com")
    * after authorization, it will redirect the browser to the connected app's registered callback url (see config.json)
    * App component's componentWillMount() method will detect query string containing "code", and it will parse the code and try to request the token
  * Take-away Notes
    * CORS
      * any call to SFDC's API from browser will have CORS problem
      * for general RESTful API calls (to fetch data, for instance), this problem can be solved by adding certain url into corresponding SFDC org's CORS whitelist (Setup|Security|CORS);
      * however, for request token & refresh token, the method above can't work (since those 2 endpoints were not associated with any specific SFDC org), so in order to make it work for the project, I deployed an backend endpoint using aws lambda function + api gateway (see config.json)
    * Token
      * users can set token's lifetime via Setup|Session Settings in their SFDC org
    * Dev v.s. Prod
      * since we can't register "localhost" as connected app's callback url, so we can't go through the entire oauth2 process during development; therefore, we need to manually add "access_token" and "instance_url" into sessionStorage

* Loading Data
  * Process
    * once we got token via requestToken() async action, we will save "access_token" and "instance_url" in cache (sessionStorage), so when react renders again, App component will display Kanban component
    * if App component found we haven't loaded data yet, it will dispatch several async actions to get the data
    * once data were fetched in async action, corresponding sync action(s) would be called, thus updating Redux's state and subsequently causing the app to re-render again
  * Take-away Notes
    * Redux
      * we used Redux to manage state, so all data loading were done via Redux's async action pattern (async action to fetch data and sync action to load data)
    * SFDC RESTful API
      * enable CORS in SFDC org (see above)
      * add Authorization header in fetch request
    * Data
      * we retrieved all Users, all OpportunityStages, and 100 Opportunities from the org, and the query surely can be more complex and customized (controlled by Redux state)
    * Dev v.s. Prod
      * since we can't add "localhost" in SFDC org's CORS whitelist, we can't dispatch async actions during development; therefore, we used mock data for development (/reducers/mock/data.js)
      * in prod mode, we will dispatch all the async actions in render(), and in dev mode, we won't do it but will dispatch all the sync actions in componentDidMount (the reason we put them in componentDidMount() is because we can only dispatch async actions in render())
      * `npm start` and `npm run build` will handle code replacement automatically (see devOps document for more info)

* Status
  * In Redux's state, we kept a status (javascript object) in appState reducer, and all the async actions will update this value after done fetching; this will make sure:
    * the app will surely get re-rendered every time some async action get data back
    * the app can do something if status containing error

* filters
  * used react-select component
  * the selected values were controlled via stageFilters reducer
  * we only filtered stage names, and surely more complex logic can be handled here
