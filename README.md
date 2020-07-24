### Setup / Run
```bash
# install all project deps
yarn
# run both client and server
yarn start
```

client: http://localhost:1234

server: http://localhost:3001

---

```
# useful scripts
yarn run:client|server
yarn test:client|server?:watch
```

---
### Project Requirements

#### Frontend

- Create a multi component React/Redux/Node app to process results from a REST service. 
- Provide ability for user to search the JSON data by title.
- Results of user search should be presented on the page
- Provide ability for user to select an entry from the results and have it populate an edit form. * Provide ability for user to type the title of an entry in the edit form and have it populate the form
- Provide ability for user to edit the entry and have it saved in the local Redux store. (the edited entry should be presented on subsequent searches until page reload)
- *bonus* Incorporate auto-complete to predict what the user will type next

#### Backend:
- Node Express Server
- The Node Express Server should provide a REST API to return JSON data that it retrieves from http://jsonplaceholder.typicode.com/posts


Notes:
> Use React, Redux and Node Express Server Include Unit Tests All dependencies should be publicly available or properly included with the project and referenced within the package.json Be creative, have fun and may the force be with you
