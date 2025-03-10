# Installing Node

For this course, you will need Node installed on your machine. Here are your instructions for various operating systems.

### Do I Already Have Node?

The best way to check is to run the following command in a terminal. You "run" a command by typing it in and then hitting enter. If there are backticks around a command in the document you're reading them in, you ignore those backticks.

```
node -v
```

If it prints out a version number of 22 or higher, you have a recent version and do not need to upgrade.

If it prints out a lower version number or something along the lines of `command node not found`, then follow the directions below to install a recent version of Node.

### MacOS and Windows

To install on macOS and Windows, go to [Node's website](https://nodejs.org/en/download/prebuilt-installer).

Install Node using its prebuit installer. **Do not use the terminal commands given at the top of the download page, unless you're comfortable with terminals.**

Here's how to install with the pre-built installer:

1. Press the "macOS Installer" or "Windows Installer" button on the above page.
2. Open the downloaded file and follow the instructions.
3. Verify that you have it correctly installed using the command in "Do I Already Have Node" above.


### Linux and WSL

Install using `nvm`. Type each of these 2 lines separately into your terminal emulator, hitting enter after each one:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```
nvm install 22
```

Verify that you have it correctly installed using the command in "Do I Already Have Node" above.
