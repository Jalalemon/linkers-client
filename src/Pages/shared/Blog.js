import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-8">
        <div className="mx-auto w-3/4">
          <h3 className="text-2xl text-orange-500">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <h6>
            {" "}
            data we manage in one
            or another component. Local state is most often managed in React
            using the useState hook. For example, local state would be needed to
            show or hide a modal component or to track values for a form
            component, such as form submission, when the form is disabled and
            the values of a form’s inputs. Global (UI) state – Global state is
            data we manage across multiple components. Global state is necessary
            when we want to get and update data anywhere in our app, or in
            multiple components at least. A common example of global state is
            authenticated user state. If a user is logged into our app, it is
            necessary to get and change their data throughout our application.
         
          </h6>
        </div>
        <div className="mx-auto w-3/4">
          <h3 className="text-2xl text-orange-500">
            How does prototypical inheritance work?
          </h3>
          <h6>
            prototypal inheritance includes not only prototypes inheriting from
            other prototypes but also objects inheriting from
            prototypes.JavaScript is a prototype-based, Object Oriented
            programming language. After the ES6 updates, JavaScript allowed for
            “prototypal inheritance”, meaning that objects and methods can be
            shared, extended, and copied. Sharing amid objects makes for easy
            inheritance of structure (data fields), behavior (functions /
            methods), and state (data values). JavaScript is the most common of
            the prototype-capable languages, and its capabilities are relatively
            unique. When used appropriately, prototypical inheritance in
            JavaScript is a powerful tool that can save hours of coding. Today,
            we want to get you acquainted with prototypal inheritance in
            JavaScript to get you up to date with the ES6 capabilities.
          </h6>
        </div>
        <div className="mx-auto w-3/4">
          <h3 className="text-2xl text-orange-500">
            What is a unit test? Why should we write unit tests?
          </h3>
          <h6>
            {" "}
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important.Some developers
            underestimate the importance of writing unit tests. What follows are
            five benefits of unit testing that you may want to consider before
            forming your own opinion. Any bugs are found easily and quicker Code
            covered with tests is more reliable than the code without. If a
            future change breaks something in the code, developers will be able
            to identify the root of the problem right away rather than coming
            through an unwieldy codebase to find the issue.
          </h6>
        </div>
        <div className="mx-auto w-3/4">
          <h3 className="text-2xl text-orange-500">
            React vs. Angular vs. Vue?
          </h3>
          <h6>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.React Contrary to Angular, React combines the UI and
            components behavior. For example, below is the code for a React
            Hello World element. To put it simply, the same part of the code is
            responsible for UI element creation and command of its behavior.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blog;
