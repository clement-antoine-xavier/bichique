---
sidebar_position: 1
---

# Check your C/C++ Compiler

To get started with **Bichique**, ensure you have the following prerequisites set up on your development machine:

- A modern C/C++ compiler (e.g., GCC, Clang, MSVC) that supports C23/C++20 or later.
- A C/C++ build system (e.g., CMake, Make, or your preferred IDE). We use CMake in this documentation for utility and cross-platform compatibility.
- A code editor or IDE with C/C++ support (e.g., Visual Studio Code, Vim, CLion, Visual Studio). It is recommended to have syntax highlighting, code completion, and debugging capabilities for C/C++.

## Verify your C/C++ compiler

Open your terminal or command prompt and run:

- For Linux/macOS with GCC:

```bash
gcc --version
g++ --version
```

- For Linux/macOS with Clang:

```bash
clang --version
clang++ --version
```

- For Windows with MSVC, open the "Developer Command Prompt for Visual Studio" and run:

```bash
cl /version
```

Ensure that the version displayed is C/C++20 compliant or later.
