# 🚀 JavaScript Array Properties & Methods Practice

A structured repository dedicated to mastering core JavaScript array manipulation, mutability behaviors, and references. This project forms part of my study and preparation workflow for the **JavaScript Certified Entry-level (JSE)** certification.

---

## 📌 Core Learning Objectives

Datatypes: primitive (or simple) + complex.
Dynamically addidng data while the program is running.
Methods.
Properties.

## 📚 Array Methods Covered

## Mutating methods

* `.push()` adds elements to the end; `.pop()` removes the last element.
* `.unshift()` adds elements to the beginning; `.shift()` removes the first element.
* `.splice()` removes or inserts elements.
* `.reverse()` reverses the array in place.
* `.sort()` sorts the array in place. Without a compare function, values are sorted as strings; use a comparator such as `(a, b) => a - b` for numbers.
  
### Non-mutating methods
These return a result without changing the original array:

* `.slice()` returns a selected portion of an array.
* `.concat()` combines arrays into a new array.
* `.includes()` checks whether an array contains a value.
* `.indexOf()` and `.lastIndexOf()` return the first or last matching index, or `-1` if not found.
* `.find()` returns the first element matching a test; `.findIndex()` returns its index.
* `.some()` checks whether at least one element passes a test; `.every()` checks whether all elements pass.
* `.filter()` returns elements that pass a test.
* `.map()` returns a new array with a function applied to each element.
* `.forEach()` runs a function for each element.
* `.reduce()` combines array elements into a single result.

### Other array concepts
* `.length` gives the array’s length.
* The spread operator (`...`) copies/spreads array elements; this is a shallow copy.
* The script also demonstrates a queue with `push()` and `shift()`, and a custom `drawRandomElement()` method added to `Array.prototype`.
---

## 🛠️ Tech Stack & Environment

*   **Runtime:** Node.js v20+ (or compatible LTS version)
*   **Development environment:** macOS (Mac Pro M5 MAX) / Visual Studio Code
*   **Package Management:** Ready for `npm` / Express.js integration

---

## 🏃‍♂️ How to Run Locally

### 1. Clone the repository
```bash
git clone <VinceHM10>
cd <Array>
```

### 2. Execute the practice script
Run the script using the Node.js runtime environment directly from your terminal:
```bash
node array.js
```

---

## 📝 Key JSE Exam Takeaways
*   **Shallow Copies:** Keep in mind that structural operations like the spread operator `[...]` only copy outer-level references. Nested arrays or objects still share a single pointer in memory.
*   **Pure Functions:** Non-mutating methods yield brand new instances, avoiding unexpected side effects in full-stack applications.
