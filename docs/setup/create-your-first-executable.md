---
sidebar_position: 3
---

# Create Your First Executable

Now that you have your C++ compiler and CMake installed, let's create your first C++ executable using CMake.

## Step 1: Create a Project Directory

Create a new directory for your project and navigate into it:

```bash
mkdir bichique-first-executable
cd bichique-first-executable
```

## Step 2: Create a Simple C++ Source File

Create a file named `main.cpp` and add the following code:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, Bichique!" << std::endl;
    return 0;
}
```

## Step 3: Create a CMakeLists.txt File

Create a file named `CMakeLists.txt` in the same directory with the following content:

```cmake
cmake_minimum_required(VERSION 3.10)
project(bichique-first-executable)

set(CMAKE_CXX_STANDARD 20)

add_executable(bichique-first-executable main.cpp)
```

## Step 4: Build the Executable

Now, create a build directory and run CMake to configure and build your project:

```bash
cmake -S . -B build
cmake --build build
```

## Step 5: Run the Executable

After the build is complete, you can run your executable:

```bash
./build/bichique-first-executable
```

You should see the output:

```plain
Hello, Bichique!
```

Congratulations! You've successfully created and run your first C++ executable using CMake. You're now ready to explore more advanced C++ topics with Bichique!
