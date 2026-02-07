---
sidebar_position: 2
---

# Install CMake

CMake is a popular cross-platform build system that simplifies the build process for C/C++ projects. Follow the instructions below to install CMake on your system.

## Windows

1. Download the CMake installer from the [official CMake website](https://cmake.org/download/).
2. Run the installer and follow the on-screen instructions.
3. During installation, make sure to select the option to add CMake to your system PATH for easier access from the command line.

## macOS

1. You can install CMake using Homebrew. If you don't have Homebrew installed, you can find instructions on the [Homebrew website](https://brew.sh/).
2. Open your terminal and run the following command:

```bash
brew install cmake
```

## Linux

1. You can install CMake using your distribution's package manager. For example, on Ubuntu or Debian-based systems, run:

```bash
sudo apt-get update
sudo apt-get install cmake
```

On Fedora-based systems, run:

```bash
sudo dnf install cmake
```

## Verify Installation

After installing CMake, you can verify that it was installed correctly by opening your terminal or command prompt and running:

```bash
cmake --version
```
