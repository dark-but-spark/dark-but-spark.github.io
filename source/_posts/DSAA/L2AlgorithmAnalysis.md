---
title: "DSAA 2 Algorithm Analysis"
date: 2025-09-16 8:00:00
categories: 数据结构与算法
tags: [DSAA, 数据结构与算法]
---
# Lecture 2 Algorithm Analysis
## Memory
- A finite sequence of cells, each cell has the same 
number of bits.
- Every cell has an address: the first cell of memory has address 0, the second cell 1, and so on.
- Store information for immediate use in a computer
- Computer hardware devices 
## Center Process Unit (CPU)
- Contains a fixed number of registers
- Basic (atomic) operations
    - Initialization
      - Set a register to a fixed values (e.g., 100, 1000, etc.)
    - Arithmetic (ALU)
      - Take integers a, b stored in two registers, calculate one of {+, -, *, /} and store the result in a register
    - Comparison / Branching
      - Take integers a, b stored in two registers, compare them, and learn which of {a<b, a=b, a>b} is true
    - Memory Access
      - Take a memory address A currently stored in a register Do the READ (i.e., load data from memory) or WRITE  (i.e., flush data to memory) operator
## Algorithm Analysis
- Cost analysis (running time): length of the sequences, i.e., the number of basic operations
- Correctness analysis: Proof your algorithm is correct, Guarantee your implementation is correct
## Worst Case Analysis
In computer science, it is an art to design algorithms with performance guarantees.
## Big-O notation
Let $f(n)$ and $g(n)$ be two functions of $n$.
We say that $f(n)$ grows asymptotically no faster than $g(n)$ if there is a constant $c_1 > 0$ such that:
$$f(n) \leq c_1 \cdot g(n)$$
holds for all $n \geq c_2$.
We denote this by $f(n) = O(g(n))$
### Example
Problem:
$$ 10000 \log_2 n=O(n)$$
$$ n \ne 10000 \log_2 n $$
Proof:
let $c_1=1,c_2=2^{20}$, so that
$$10000 \log_2 n \leq c_1 \cdot n(\forall n \geq c_2)$$
Support that are constant $c_1,c_2$ ,so that:
$$n \leq c_1 \cdot 10000 \log_2 n (\forall n \geq c_2)$$
$$\frac{n}{\log_2 n} \leq c_1 \cdot 10000(\forall n \geq c_2)$$
However, as $n$ grows, $\frac{n}{\log_2 n}$ also grows without bound, which contradicts the assumption that it is bounded by a constant.
## Worst-Case of Algorithms
|$Complexity$|$Algorithm$|
|---|---|
|$O(1)\text{ Constant}$|E.g., Compare two numbers|
|$O(\log n)\text{ Logarithmic}$|E.g., Binary search (on a sorted array)|
|$O(n)\text{ Linear}$|E.g., Linear search (on an unsorted array)|
|$O(n \log n)$|E.g., Merge sort|
|$O(n^2)\text{ Quadratic}$|E.g., Selection sort|
|$O(n^3)\text{ Cubic}$|E.g., Matrix multiplication|
|$O(2^n) \text{ Exponential}$|E.g., Brute-force search on Boolean satisfiability|
|$O(n!) \text{ Factorial}$|E.g., Brute-force search on traveling salesman|

## Big-Ω notation
Let $f(n)$ and $g(n)$ be two functions of $n$.
We say that $f(n)$ grows asymptotically no slower 
than $g(n)$ if there is a constant $c_1 > 0$ such that:
$$f(n) \geq c_1 \cdot g(n)$$
holds for all $n \geq c_2$.
We denote this by $f(n) = \Omega(g(n))$.
### Examples:
- $\log_2 n = \Omega(1)$
- $0.001n = \Omega(\sqrt{n})$

## Big-Θ notation
Let $f(n)$ and $g(n)$ be two functions of $n$.
If  $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$, then we define $$f(n) = \Theta(g(n))$$to indicate $f(n)$ grows asymptotically as fast as $g(n)$.
### Examples:
- $1000 + 30 \log n + 1.5 \sqrt{n}  = \Theta(\sqrt{n})$
