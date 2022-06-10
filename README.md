# Getting Started



## Step 1: Install NodeJS - (Add path environments variables)

- Check version with: 'node -v', 'npm -v' at CMD (Window) or Terminal (MacOS)

### On Window:
! ERROR: ['node' is not recognized as an Internal or external command, operable program or batch file]

Resolve:
1. Computer > Local disk (C) > Program Files > nodejs
2. Copy directory path (Ctrl + C)
3. Right click on Computer - Properties - Advanced system settings
4. At System Properties: select tab Advanced - Environments variables
5. At Environments Variables: double click Path in System variables table
6. At Edit environments variables: New - Paste directory path (Ctrl + V) > OK > OK > OK
7. Restart the CMD
8. Recheck node version: 'node -v'

### On MacOS:
!ERROR: [command not found: node]

Resolve:
1. Try type command in terminal: 'sudo nano /etc/paths'
2. Enter your password
3. Press [Down] key to the last line and press [Enter] key
4. Enter '/usr/local/bin'
5. Press Control + X or (Command + X)
6. Press [Y] key - Press [Enter] key
7. Restart the terminal
8. Recheck node version: 'node -v'


## Step 2: Install Ruby - (Add path environments variables)

- Usually ruby (and gem) ​​are pre-installed on MacOS.
- Check version with: 'ruby -v' , 'gem -v' at CMD (Window) or Terminal (MacOS)
### On Window:
! ERROR: ['ruby' is not recognized as an Internal or external command, operable program or batch file]

Resolve:
1. Computer - Local Disk C - Ruby - bin
2. - 8. Do the same steps as resolve with NodeJS


## Step 3: Instal SASS

- Instal sass with: 'gem instal sass'

### On MacOS:
!ERROR: [While executing gem ...(Gem:FilePermissionError). You don't have write permission for the /Library/Ruby/Gems/... directory]

Resolve:
1. Try type command in terminal: 'sudo gem instal sass'
2. Enter your password
3. If an error message appears [ERROR: Failed to build gem native extension], continue with the steps below.
4. Try type command in terminal: 'x-code-select --install'
5. Continue with x-code installation steps
7. Restart the terminal
8. Re-instal sass with: 'sudo gem instal sass'
9. Enter your password


## Step 4: Create new folder and 'npm init':

1. Copy the directory path this new folder
2. At CMD (Window) or Terminal (MacOS), type: 'cd [Paste the directory path]'
3. Type command: 'npm init'
4. Enter 'package name' (project name)
5. Can be skip the version, description, entry point, text command, git repository, keywords, author, license with [Enter] key
6. Is this OK? - [Enter] key
7. Complete this step if the 'package.json' file exists in the folder you just created


## Step 5: Install Grunt library

1. cd the project folder same like step 4.1 - 4.2
2. Run command: 'npm install --save-dev grunt'
3. Complete this step if the 'node_module' folder and the 'package-lock.json' file exists in the folder you just created

## Step 6: Install load grunt task library

1. cd the project folder same like step 4.1 - 4.2
2. Run command: 'npm install --save-dev load-grunt-tasks'

## Step 7: Copy the 'gruntfile.js' file into the folder you just created

## Step 8: Instal grunt contribute cssmin library

1. cd the folder same like step 4.1 - 4.2
2. Run command: 'npm install --save-dev grunt-contrib-cssmin'
3. Create the 'css' folder in the project folder
4. Create the 'libs' folder in the 'css' folder
5. Copy and paste any 'style.css' file in the 'css' folder
6. At CMD (Window) or Terminal (MacOS), run command: 'grunt cssmin'
7. Complete this step if the 'dest' folder file exists in the project folder and inside it, we have a file named 'stylelibs.min'

[Command 'grunt cssmin' has the effect of turning a multi-line css file into a single-line css file]

### On Window:
!ERROR: about_Execution_Policies

Resolve:
1. Open Windows Powershell with option 'Run as administrator'
2. Run command: 'Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser'
3. Press [Y] key


## Step 9: ...

## Step 10: ...








