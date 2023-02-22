describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    const user = {
      name: "Matti Luukkainen",
      username: "mluukkai",
      password: "salainen",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/users`, user);
    cy.visit("");
  });

  it.only("front page can be opened", () => {
    cy.contains("Notes");
    cy.contains(
      "Note app, Departement of Computer Science, University of Helsinki 2023"
    );
  });

  it("login form can be opened", function () {
    cy.contains("login").click();
  });

  it("user can login", function () {
    cy.contains("login").click();
    cy.get("#username").type("mluukkai");
    cy.get("#password").type("salainen");
    cy.get("#login-button").click();

    cy.contains("Matti Luukkainen logged-in");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      // cy.contains("login").click();
      // cy.get("#username").type("mluukkai");
      // cy.get("#password").type("salainen");
      // cy.get("#login-button").click();

      // cy.request("POST", "http://localhost:3001/api/login", {
      //   username: "mluukkai",
      //   password: "salainen",
      // }).then((response) => {
      //   localStorage.setItem(
      //     "loggedNoteappUser",
      //     JSON.stringify(response.body)
      //   );
      //   cy.visit("http://localhost:3000");
      // });

      cy.login({ username: "mluukkai", password: "salainen" });
    });

    describe("and several notes exist", function () {
      this.beforeEach(function () {
        cy.createNote({ content: "first note", important: false });
        cy.createNote({ content: "second note", important: false });
        cy.createNote({ content: "third note", important: false });
      });

      it("one of those can be made important", function () {
        // cy.contains("second note")
        //   .parent()
        //   .find("button")
        //   .contains("make important")
        //   .click();

        // cy.contains("second note")
        //   .parent()
        //   .find("button")
        //   .should("contain", "make not important");

        cy.contains("second note")
          .parent()
          .find("button")
          .contains("make important")
          .as("theImportantButton");
        cy.get("@theImportantButton").click();
        cy.contains("second note")
          .parent()
          .find("button")
          .contains("make not important")
          .as("theNotImportantButton");
        cy.get("@theNotImportantButton").should(
          "contain",
          "make not important"
        );
      });
    });

    it("a new note can be created", function () {
      cy.contains("New Note").click();
      cy.get("input").type("a note created by cypress");
      cy.contains("Save").click();
      cy.contains("a note created by cypress");
    });

    describe("and a note exists", function () {
      beforeEach(function () {
        // cy.contains("New Note").click();
        // cy.get("input").type("another note cypress");
        // cy.contains("Save").click();

        cy.createNote({
          content: "another note cypress",
          important: true,
        });
      });

      it("it can be made not important", function () {
        cy.contains("another note cypress")
          .parent()
          .find("button")
          .contains("make not important")
          .as("theNotImportantButton");
        cy.get("@theNotImportantButton").click();

        cy.contains("another note cypress")
          .parent()
          .find("button")
          .contains("make important")
          .as("theImportantButton");

        cy.get("@theImportantButton").should("contain", "make important");
      });
    });
  });

  it("login fails with wrong password", function () {
    cy.contains("login").click();
    cy.get("#username").type("mluukkai");
    cy.get("#password").type("wrong");
    cy.get("#login-button").click();

    cy.get(".error")
      .should("contain", "Wrong Credentials")
      .and("have.css", "color", "rgb(255, 0, 0)")
      .and("have.css", "border-style", "solid");

    cy.contains("Matti Luukkainen logged-in").should("not.exist");
  });
});
