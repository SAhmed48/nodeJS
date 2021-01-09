# Node Package Manager (NPM)

In this section we see:

1) What is NPM?
2) How to install a node package using the node package manager?
3) How to install specific packages version?
4) How to create your custom package and publish them on npm?

NPM is a command-line tool as well as a registry of third party libraries that we can add into node applications.
If you want to share any functionalities with others you can create your node module and publish it on NPM.

#### Check version of NPM on machine.

-- npm -v
-- npm --version

#### Install npm globally on the machine
-- npm i -g npm@5.5.1 

#### Create package.json
Every Node application has a package.json file that includes metadata about the application. This includes the name of the application, its version, dependencies, etc.

-- npm init 

Now a prompts appear and ask for each question.

If you want to avoid those questions use the "--yes" flag.

-- npm init --yes

#### Install node package:

-- npm install underscore.

It will install the latest version of underscorejs.

-- npm install mongoose

#### Install development dependencies only:

-- npm install jshint --save-dev

#### Publish npm package

1) Create a new directory and do npm init --yes.
2) Go to the terminal and do -- npm login
3) Login into npm using username and email.
4) npm publish <your-custom-package-name>
5) Go to any other node project and install that package.

#### Update package.
1) Add a new feature or functionality.
2) Change its version using minor, major, and patch. -- npm version minor
3) Do npm publish.
4) Now it's a release with a new version number. 


So, in this section, you learned that:

- We use NPM to download and install 3rd-party packages from the NPM registry:
- All the installed packages and their dependencies are stored under
node_modules folders. This folder should be excluded from source control.

- Node packages follow semantic versioning: major.minor.patch
- Useful NPM commands are:

#### Install a package
-- npm i <packageName>

#### Install a specific version of a package
-- npm i <packageName>@<version>

#### Install a package as a development dependency
-- npm i <packageName> —save-dev

#### Uninstall a package
-- npm un <packageName>

#### List installed packages
-- npm list —depth=0

#### View outdated packages
-- npm outdated

#### Update packages
-- npm update


- To install/uninstall packages globally, use -g flag.