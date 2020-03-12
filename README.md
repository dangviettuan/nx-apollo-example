
# NxApolloReactExample

Start Backend: `yarn start api`.
Start Frontend: `yarn start nx-apollo`

**Generate code**

 1. Create config file: `codegen.yml`.
 2. Update generate command: `workspace.json`
 
```json
"data-access": {
	...
	"architect": {
		...
		"generate": {

			"builder": "@nrwl/workspace:run-commands",

			"options": {

			"commands": [

					{

					"command": "npx graphql-codegen --config libs/data-access/codegen.yml"

					}

				]

			}

		}

	}

}
```
 3. Run command: `nx run data-access:generate`

