# The Word Guessing Game

This project was created using React, SASS, and TypeScript

## Project Goals

- Create a game where people can guess the the hidden word
- Practice and learn more TypeScript
- Break components into separate files and keep code structured/organized
- Continue to improve CSS skills by using classnames, css modules
- Keep accessibility in mind
- Responsive and a variety of screen sizes

### Project Information

This project is another game-like application in which anyone can play by guessing the hidden word. The game allows you to spell 
out the word in the input box or click on buttons representing the alphabet which will either reveal the character or give you a strike.
The game allows you to first select a category and has the option of going back to the category select screen if you want to change the 
category. This project had a lot of JavaScript code due to the number of interactions possible.

Adding words and new categories is fairly straightforward with how the components are setup. It ensures future updates are feasible.

### Lessons Learned

I think the biggest lesson I learned here was to use a state management tool in the future like Context API or Redux due to how each
component can change the state.

I did struggle at the start with TypeScript but got more familiar with it as the project went on. I've decided to continue to use
TypeScript in any future project as it's quite helpful and widely used.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
