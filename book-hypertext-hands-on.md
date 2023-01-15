# Book: Hypertext Hands-On!: An Introduction to a New Way of Organizing and Accessing Information

author: [[ben-shneiderman]], Greg Kearsley

---

## Table of Contents

- [Book: Hypertext Hands-On!: An Introduction to a New Way of Organizing and Accessing Information](#book-hypertext-hands-on-an-introduction-to-a-new-way-of-organizing-and-accessing-information)
  - [Table of Contents](#table-of-contents)
  - [Chapter 4. Implementation issues](#chapter-4-implementation-issues)
  - [Chapter 3. System Design issues](#chapter-3-system-design-issues)
  - [Quotes](#quotes)
  - [References](#references)

## Chapter 4. Implementation issues

- **Navigation**
  - getting lost on a hypertext database is a serious and common problem
  - there are two problems with navigating hypertext systems: **Not being able to find what you want** and **getting disoriented**
  - use an **alphabetical indexing** to make it easier to find Information
  - hierarchy is a form of Navigation too. and that helps to organize Information
  - **the user should be able to go to the directory or home screen from any place in the system**
  - Disorientation comes from **not having enough information of their current location relative to the overall structure of the database**
- **Collaboration**
  - There are a couple of problems that raises when we think of people collaborating on the same document, that usually you can solve by just creating a copy of the document for each author, and capturing all the changes of every author and the applies all those changes to the original copy of the document.
- **Security**
  - the original author defines the type of access possible.
  - preventing access at some levels is very contrary to the principles of Hypertext, but currently hypertext developers see this a necessity in order to keep the system from misuse.
- **Text Conversion**
  - well structure documents does not help on the task to "import" data from other digital supports like PDF.
  - OCR is good enough for text conversion
- **Compatibility**
  - Hypertext systems are like islands, they need to communicate with other hypertext systems, if not, "they will die".
  - two possible solutions:
    - Separate UI from database (Mintter, Xanadu)
    - Implement the system in multiple terminal and machines (?)
- **Rights**
  - Protect the rights of authors on paper is straightforward; in digital is a whole different story
  - not only digital rights is an issue, but what does it count as a permutation or derived work? it's just hard.
  - adding up that a hypertext system is designed for collaboration and constant change, how can we measure attribution?
- **Public Access**
  - Hypertext systems are meant to be consumed by anyone. they should be considered information utilities like water or electricity
- **Publishing**
  - most current hypertext systems have controlled access or private
  - in order to make a hypertext system publicly available, document should enable not only links to itself, but links to portions of itself too, so collaborators can disagree with any portion of the document and start discussions with other participants. Those links can be materialize as annotations visible to anyone
  - it's very important that all the sources are available too, so all the trails and references can be accessed by any reader
  - because is easy to access all the hypertext database, **FILTERING will become an essential tool for collaborators**, to specify they are, and are not, interested in.
- **Usability Evaluation**
  - this can me measured by these criteria:
    - time to learn
    - speed of performance on benchmark tasks
    - rate and distribution of errors
    - human retention over time
  - Subjective satisfaction should be high for hypertext systems because usage is often discretionary and therefore dissatisfied users will avoid using them.
  - check out QUIS (Questionnaire for User Interface Satisfaction) (link in references)

## Chapter 3. System Design issues

- **Usability/User Interface**
  - learning time must be minimal. use visible aids instead of commands and _default options_
- **Displays**
  - talks about the capabilities of a screen, but screens like the ones being discussed does not exist anymore. this point is irrelevant today I believe
- **Performance**
  - faster is better, but super fast is bad. **Response times less than 0.1s can cause confusion and may lead to disorientation**
  - keep in mind that a hypertext system will grow exponentially with the number of links and the size of the database. parallelize tasks might be a good thing to consider to keep the system performant even with large datasets
- **Exporting (Printing)**
  - because a hypertext system are non-linear, it's didficult to define the order in which data will be exported. We can use either hierarchy or **tours** which provides a means of organizing the database for output.
- **Versions**
  - there are two levels of versions: the node/link version and the whole database version
  - this enables the possibility of accessing different versions of nodes and/or multiple database versions
  - The fact that a user can access all links and nodes in all versions possible, makes a need to know what are the _new things that happened_ since the last time it was accessed. This is different from just seeing "what's new?"
- **Networks**
  - Each node on a hypertext system has its own databse.
  - This raises the problem of compatibility issues. Systems like [[Xanadu]] and [[Neptune]] attempt to overcome incompatibility **by separating machine-independen database from machine-dependend user interface**.
- **Annotation**
  - or "margin notes"
  - can be shown along with the original document or in a separate window
  - Annotations are important for authoring, Reviewers should be able to make suggestions or corrections as part of the original text.
  - Annotations are **extremely important** for hypertext when is used as a communication medium or for collaboration.
- **Integration**
  - One of the main problems of Hypertext Systems is that they are self-contained. there's little to none integration and inter-communication between two or more hypertext systems.
  - One interesting possibility is to use the hypertext system and user interface as the layer of consistency to other programs, that consumes all hypertext databases into the same user interface
- **Aliasing**
  - is important for finding the desired information.
  - most of us do remember more if we are able to assign our desired number instead of using the pre-assigned one.
- ## **Fisheye views**

## Quotes

- "The nonlinearity of hypertext documents allows several tables of contents portraying alternate organizations"
-

## References

- [Book amazon link](https://www.amazon.es/Hypertext-Hands-Introduction-Organizing-Information/dp/0201151715/ref=sr_1_1?__mk_es_ES=ÅMÅŽÕÑ&keywords=Hypertext+Hands-On%21&qid=1663330411&sr=8-1)
- [(free download 🤫)](https://en.es1lib.org/book/1168107/a65ea0)
- [HYPERTEXT '87: Proceedings of the ACM conference on Hypertext](https://dl.acm.org/doi/proceedings/10.1145/317426)
- [Questionnaire for User Interface Satisfaction (QUIS)](https://www.cs.umd.edu/hcil/quis/)
