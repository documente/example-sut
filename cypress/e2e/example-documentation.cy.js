import { CypressRunner } from '@documente/documente';
import externals from '../../documente/cypress-externals.js';

const selectorTree = `
login form:
  _selector: .login-form
  login field: input[type="text"]
  password field: input[type="password"]
  confirm button: button[type="submit"]
login error message: .error-message
welcome message: .welcome-message
new task title field: .new-task-title
add task button: .add-task-button
task with text {{text}}:
  _selector: .task[data-test-title="{{text}}"]
  title: .title
  delete button: .delete-button
task list:
  _selector: .task-list
  children: .task
`;

const testRunner = new CypressRunner(selectorTree, externals);

testRunner.add(`
In order to login:
- I visit "http://localhost:3000"
- I type "user01" on login form login field
- I type "password" on password field
- I click on login form confirm button`);

testRunner.add(`
In order to add a task with title {{title}}:
- I type "{{title}}" on new task title field
- I click on add task button`);

testRunner.add(`
for $element to have {{count}} task:
- its children should have {{count}} occurrences`);


describe('specs from example-documentation.md', () => {
  it('spec #1', () => {
    testRunner.run(`
when I visit "http://localhost:3000"
and I type "password" on login form password field
and I click on login form confirm button
then login error message should be visible
and it should have text "Please enter a username and password"`);
  });

  it('spec #2', () => {
    testRunner.run(`
when I visit "http://localhost:3000"
and I type "user01" on login form login field
and I click on login form confirm button
then login error message should be visible
and it should have text "Please enter a username and password"`);
  });

  it('spec #3', () => {
    testRunner.run(`
when I login
then welcome message should be visible
and it should have text "Welcome, user01!"
and login form should not exist`);
  });

  it('spec #4', () => {
    testRunner.run(`
given task list is empty
when I login
then task list should have 0 task`);
  });

  it('spec #5', () => {
    testRunner.run(`
given task list is empty
and I login
and I add a task with title "Buy milk"
when I click on task with text "Buy milk" delete button
then task list should have 0 task`);
  });

});
