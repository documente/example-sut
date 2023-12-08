import { CypressRunner } from '@documente/documente';

const runner = new CypressRunner({
  loginForm: {
    _selector: '.login-form',
    loginField: 'input[type="text"]',
    passwordField: 'input[type="password"]',
    confirmButton: 'button[type="submit"]',
  },
  loginErrorMessage: '.error-message',
  welcomeMessage: '.welcome-message',
  newTaskTitleField: '.new-task-title',
  addTaskButton: '.add-task-button',
  'task with text {{text}}': {
    _selector: `.task[data-test-title="{{text}}"]`,
    title: '.title',
    deleteButton: '.delete-button',
  },
  taskList: {
    _selector: '.task-list',
    children: '.task'
  },
}, {
  taskListIsEmpty() {
    // Quick and dirty way to reset the server state
    cy.request('DELETE', 'http://localhost:5000/api/all-tasks');
  }
});

const baseUrl = 'http://localhost:3000/';
const username = 'user01';
const password = 'P455w0rd';

describe('example spec', () => {
  it('should login', () => {
    runner.run(`when I visit "${baseUrl}"
           and I type "${username}" on login form login field
           and I type "${password}" on password field
           and I click login form confirm button
          then welcome message should be visible
           and it should have text "Welcome, ${username}!"
           and login form should not exist
          done
          `);
  });

  it('should show an error message when username is missing', () => {
    runner.run(`when I visit "${baseUrl}"
           and I type "${username}" on login form login field
           and I click on login form confirm button
          then login error message should be visible
           and it should have text "Please enter a username and password"
          done
          `);
  });

  it('should show an error message when password is missing', () => {
    runner.run(`When I visit "${baseUrl}"
           and I type "${password}" on login form password field
           and I click on login form confirm button
          then login error message should be visible
           and it should have text "Please enter a username and password"
          done
          `);
  });

  it('should add a task', () => {
    runner.run(`given task list is empty
            and I login
           when I type "Buy milk" on new task title field
            and I click on add task button
           then task with text "Buy milk" should exist
            and task list should have 1 task
           done
           
           In order to login:
            - I visit "${baseUrl}"
            - I type "${username}" on login form login field
            - I type "${password}" on password field
            - I click on login form confirm button
           done
           
           for $element to have {{count}} task:
           - its children should have {{count}} occurrences
           done
           `);
  });

  it('should remove a task', () => {
    runner.run(`given task list is empty
            and I login
            and I add a task with title "Buy milk"
           when I click on task with text "Buy milk" delete button
           then task list should have 0 task
           done
           
           In order to login:
            - I visit "${baseUrl}"
            - I type "${username}" on login form login field
            - I type "${password}" on password field
            - I click on login form confirm button
           done
           
           In order to add a task with title {{title}}:
            - I type "{{title}}" on new task title field
            - I click on add task button
           done
           
           for $element to have {{count}} task:
           - its children should have {{count}} occurrences
           done`);
  });
});
