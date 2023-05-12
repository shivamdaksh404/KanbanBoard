# Kanban Board (markdown)

## Folder Structure

The folder structure for the project is as follows:

- src/
  - components/
  - atom/
  - ...
  
## Installation

To install the required dependencies, run the following command:

<!-- ----------------------------------------------------------------------------------------- -->
<!-- csharp (npm install) -->

The dependencies for this project include:

- Recoil
- Material UI
- React DragNDrop / React Beautiful DnD
- Rich Text Editor
- Material Icons

## Components

### Navbar

The Navbar component is responsible for...

### Add List Button

The Add List Button component allows users to...

### Todo List

The Todo List component displays...

### Drag and Drop Functionality

The Drag and Drop functionality enables...

### Todo Task Popup

The Todo Task Popup component is used...

### Local Storage

All added tasks are stored in the local storage, allowing users to...

## Data Structure

The data structure for the Kanban board is as follows:

```javascript
List = {
  Name: "To do",
  CreatedAt: '2PM 02/02/2023',
  Tasks: [
    {
      // Task details
    },
    // Additional tasks
  ]
}

// ---------------------------------------------------------------------------------------------

// Define the initial state of the application
const initialState = {
  boards: [],
};

// Define the structure of a board
const boardSchema = {
  id: '', // Unique identifier for the board
  name: '', // Name of the board
  columns: [], // Array of columns in the board
};

// Define the structure of a column
const columnSchema = {
  id: '', // Unique identifier for the column
  name: '', // Name of the column
  tasks: [], // Array of tasks in the column
};

// Define the structure of a task
const taskSchema = {
  id: '', // Unique identifier for the task
  title: '', // Title of the task
  description: '', // Description of the task
  dueDate: '', // Due date of the task
  priority: '', // Priority level of the task
  assignee: '', // Assignee of the task
};

// Define the structure of the application state
const appSchema = {
  boards: [boardSchema], // Array of boards
};

// Sample data based on the schema
const sampleData = {
  boards: [
    {
      id: 'board1',
      name: 'Board 1',
      columns: [
        {
          id: 'column1',
          name: 'To Do',
          tasks: [
            {
              id: 'task1',
              title: 'Task 1',
              description: 'Do task 1',
              dueDate: '2023-05-15',
              priority: 'High',
              assignee: 'John',
            },
          ],
        },
        {
          id: 'column2',
          name: 'In Progress',
          tasks: [
            {
              id: 'task2',
              title: 'Task 2',
              description: 'Do task 2',
              dueDate: '2023-05-17',
              priority: 'Medium',
              assignee: 'Jane',
            },
          ],
        },
        {
          id: 'column3',
          name: 'Done',
          tasks: [
            {
              id: 'task3',
              title: 'Task 3',
              description: 'Do task 3',
              dueDate: '2023-05-20',
              priority: 'Low',
              assignee: 'John',
            },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------------------------
#Collabrators
1. Shivam Daksh-fn-nob-97TDJ
2. Shrutik Mahajan-fn-nob-36HXQ
3. Subhadip Paul-fn-nob-81MJR
4. Surajkumar Chaudhari-fn-nob-92VCH
