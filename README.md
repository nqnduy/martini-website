# Getting Started


## Step 1: Install NodeJS - (Add path environments variables)

- Check version with: `node -v`, `npm -v` at CMD (Window) or Terminal (MacOS)

### On Window:
❗️ __ERROR:__

*['node' is not recognized as an Internal or external command, operable program or batch file]*

💻 Resolve:
1. **Computer** > Local disk (C) > Program Files > **nodejs**
2. Copy directory path (Ctrl + C)
3. Right click on **Computer** - Properties - **Advanced system settings**
4. At System Properties: select tab **Advanced** - **Environments variables**
5. At Environments Variables: double click Path in **System variables** table
6. At Edit environments variables: New - Paste directory path (Ctrl + V) > OK > OK > OK
7. Restart the CMD
8. Recheck node version: `node -v`

### On MacOS:
❗️ __ERROR:__

*[command not found: node]*

💻 Resolve:
1. Try type command in terminal: `sudo nano /etc/paths`
2. Enter your password
3. Press __Down__ key to the last line and press __Enter__ key
4. Enter `/usr/local/bin`
5. Press Control + X or (Command + X)
6. Press __Y__ key - Press __Enter__ key
7. Restart the terminal
8. Recheck node version: `node -v`


## Step 2: Install Ruby - (Add path environments variables)

- Usually ruby (and gem) ​​are pre-installed on MacOS.
- Check version with: `ruby -v` , `gem -v` at CMD (Window) or Terminal (MacOS)

### On Window:
❗️ __ERROR:__

*['ruby' is not recognized as an Internal or external command, operable program or batch file]*

💻 Resolve:
1. **Computer** - Local Disk C - Ruby - **bin**
2. Do the same steps as resolve with NodeJS


## Step 3: Instal SASS

- Instal sass with: `gem instal sass`

### On MacOS:
❗️ __ERROR:__

*[While executing gem ...(Gem:FilePermissionError). You don't have write permission for the /Library/Ruby/Gems/... directory]*

💻 Resolve:
1. Try type command in terminal: `sudo gem instal sass`
2. Enter your password
3. If an error message appears [__ERROR:__ Failed to build gem native extension]

   Continue with the steps below.
4. Try type command in terminal: `x-code-select --install`
5. Continue with *x-code installation steps*
7. Restart the terminal
8. Re-instal sass with: `sudo gem instal sass`
9. Enter your password


## Step 4: Create new folder and `npm init`:

1. Copy the directory path this new folder
2. At CMD (Window) or Terminal (MacOS), type: `cd [Paste the directory path]`
3. Type command: `npm init`
4. Enter '__package name__' *(project name)*
5. Can be skip the *version, description, entry point, text command, git repository, keywords, author, license* with __Enter__ key
6. Is this OK? - __Enter__ key
7. Complete this step if the 'package.json' file exists in the folder you just created


## Step 5: Install Grunt library

1. cd the project folder same like step 4.1 - 4.2
2. Run command: `npm install --save-dev grunt`
3. Complete this step if the '__node_module__' folder and the '__package-lock.json__' file exists in the folder you just created

## Step 6: Install load grunt task library

1. cd the project folder same like step 4.1 - 4.2
2. Run command: `npm install --save-dev load-grunt-tasks`

## Step 7: Copy the '__gruntfile.js__' file into the folder you just created

## Step 8: Instal grunt contribute cssmin library

1. cd the folder same like step 4.1 - 4.2
2. Run command: `npm install --save-dev grunt-contrib-cssmin`
3. Create the '__css__' folder in the project folder
4. Create the '__libs__' folder in the '__css__' folder
5. Copy and paste any '__style.css__' file in the '__css__' folder
6. At CMD (Window) or Terminal (MacOS), run command: `grunt cssmin`
7. Complete this step if the '__dest__' folder file exists in the project folder and inside it, we have a file named '__stylelibs.min__'

[Command `grunt cssmin` has the effect of turning a multi-line css file into a single-line css file]

### On Window:
❗️ __ERROR:__ about_Execution_Policies

💻 Resolve:
1. Open Windows Powershell with option *Run as administrator*
2. Run command: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Press __Y__ key


## Step 9: ...

## Step 10: ...


# Create the new project

1. Create your own copy of [GruntTemplate](https://github.com/nqnduy/grunt-template) by forking the repository. Once you have created your own fork, clone the repository to your local machine
2. Make sure to replace **YOUR_GITHUB_USERNAME** with your actual username
3. Open CMD (Window) or Terminal (MacOS), type command: `git clone https://github.com/YOUR_GITHUB_USERNAME/grunt-template YOUR_PROJECT_NAME`
4. `cd YOUR_PROJECT_NAME`
5. Finally, link your fork back to the upstream repo so you can pull the latest updates and contribute changes back.
`git remote add upstream https://github.com/nqnduy/grunt-template`
6. Open your project and enjoy 🚀



