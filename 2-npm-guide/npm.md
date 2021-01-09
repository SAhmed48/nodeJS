# Node Package Manager (NPM)

In this section we see:
What is NPM?
How to install node package using node package manager?
How to install specific packages version?
how to create your own package and publish them on npm?

NPM is a command line tool as well a registry of third party libraries that we can add into node applications.
If you want to share any functionalities with other you can create your own node module and publish it on NPM.

#### Check version of NPM on machine.

-- npm -v
-- npm --version

#### Install npm globaly on machine
-- npm i -g npm@5.5.1 

#### Create package.json
Every Node application has a package.json file that includes metadata about the application. This includes the name of the application, its version, dependencies etc.

-- npm init 

Now a prompts appears and ask for each question.

If you want to avoid those questions use "--yes" flag.

-- npm init --yes

#### Install node package:

-- npm install underscore.

It will install latest version of underscorejs.

-- npm install mongoose

#### Install development dependencies only:

-- npm install jshint --save-dev

#### Publish npm package

1) Create a new directory and do npm init --yes.
2) Go to terminal and do
-- npm login
3) Login into npm using username and email.
4) npm publish <your-custom-package-name>
5) Go to any other nodeJS project and install that package.

#### Update package.
1) Add new feature or functionality.
2) Change its version using minor, major and patch.
-- npm version minor
3) Do npm publish.
4) Now it release with new version number. 


So, in this section, you learned that:

- We use NPM to download and install 3rd-party packages from NPM registry:
- All the installed packages and their dependencies are stored under
node_modules folders. This folder should be excluded from the source control.

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