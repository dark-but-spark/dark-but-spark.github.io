---
title: "Lecture 3 Sorting Algorithms"
date: 2025-09-23 8:00:00
categories: 数据结构与算法
tags: [DSAA, 数据结构与算法]
---
# Lecture 3 Sorting Algorithms
## Sorting Problem
Input: A sequence of n numbers $a_1, a_2, \ldots, a_n$.
Output: A permutation $(a_{\pi(1)}, a_{\pi(2)}, \ldots, a_{\pi(n)})$ of the input sequence such that $a_{\pi(1)} \leq a_{\pi(2)} \leq \ldots \leq a_{\pi(n)}$.
## Selection Sort
Idea of a selection sort method
- Start with empty hand, all cards on table
- Pick the smallest card from table
- Insert the card into the hand
```
Selection-Sort(A)
n = A.length
for i = 1 to n-1
    minIndex = i
    for j = i+1 to n
        if A[j] < A[minIndex]
            minIndex = j
    swap A[i] and A[minIndex]
```
- total time complexity: $O(n^2)$
## Insertion Sort
Idea of a insertion sort method
- One input each iteration, growing a sorted output list
- Remove one element from input data
- Find the location it belongs within the sorted list
- Repeat until no input elements remain
```
for i=1 to n
    for j=i downto 1 with j>1
        if A[j]<A[j-1]
            swap A[j] and A[j-1]
        else
            break
```
- total time complexity: $O(n^2)$
## Bubble Sort
Idea of a bubble sort method
- For each pass
    - Compare the pair of adjacent item
    - Swap them if they are in the wrong order
- Repeat the pass through until no swaps are needed
```
Bubble-Sort(A)
for i=1 to n-1
    for j=2 to n
        if A[j]<A[j-1]
            swap A[j] and A[j-1]
```
- total time complexity: $O(n^2)$
## Merge Sort (Divide-and-Conquer)
### Divide and Conquer: an algorithmic technique
- Divide: divide the problem into smaller 
subproblems
- Conquer: solve each subproblem recursively
- Combine: combine the solution of subproblems into the solution of the original problem
### Merge Sort Algorithm
- Divide: divide the array into two subarrays of n/2 numbers each
- Conquer: sort two subarrays recursively
- Combine: merge two sorted subarrays into a sorted array
```
Merge-Sort(A, l, r)
if l < r
    mid = (l + r) / 2
    B=Merge-Sort(A, l, mid)
    C=Merge-Sort(A, mid+1, r)
    A=Merge(B,C)
    return A
Merge(B, C)
    n1 = B.length
    n2 = C.length
    n = n1 + n2
    A = new array of size n
    i = 1, j = 1, k = 1
    while i <= n1 and j <= n2
        if B[i] <= C[j]
            A[k] = B[i]
            i = i + 1
        else
            A[k] = C[j]
            j = j + 1
        k = k + 1
    while i <= n1
        A[k] = B[i]
        i = i + 1
        k = k + 1
    while j <= n2
        A[k] = C[j]
        j = j + 1
        k = k + 1
    return A
```
T(n) = 2T(n/2) + O(n)
Using the Master Theorem, we can solve this recurrence relation:
- total time complexity: $O(n \log n)$

## Master Theorem
Recurrence equation: $T(n) = a T(n/b) + f(n)$
Let $T(n)$ be a function that return a positive value for every integer $n>0$. We know that:
- $T(1)=O(1)$
- $T(n)=a T(\lceil n/b \rceil)+O(n^c)$ for($n>2$)
where $a \geq 1$ and $b > 1$ are constants, and $c \geq 0$ is a constant.
Then:
1. If $\log_b a < c$, then $T(n) = O(n^c)$.
2. If $\log_b a = c$, then $T(n) = O(n^c \log n)$.
3. If $\log_b a > c$, then $T(n) = O(n^{\log_b a})$.
### Example:
#### binary search
$$T(1)\leq c_1$$
$$T(n)\leq T(n/2) + c_2$$
$$a=1,b=2,c=0$$
$$\log_b a=0=c$$
$$T(n)=O(\log n)$$
#### merge sort
$$T(1)\leq c_1$$
$$T(n)= 2T(n/2) + c_2 n$$
$$a=2,b=2,c=1$$
$$\log_b a=1=c$$
$$T(n)=O(n \log n)$$
## Quick Sort (RAM with Randomization)
### Randomized
Randomized algorithms play an important role in computer science, they often simpler, and sometimes can be provably faster as well.
```
find0(A)
    do
        i = random(1, n)
    until A[i]=0
    return i
```
- When A are all 0, the expected time is O(1)
- When A has only one 0, the expected time is O(n)
- As before, the expected time is O(n)
### Quick Sort Algorithm
- Randomly pick an integer p in A, call it the pivot
- Re-arrange the integers in an array A’ such that
  - All the integers smaller than p are positioned before p in A’
  - All the integers larger than p are positioned after p in A’
- Sort the part of A’ before p recursively
- Sort the part of A’ after p recursively
```
Randomized-Quick-Sort(A, L, R)
if L < R
    p = random(L,R);pivot=A[p]
    l=L,r=R
    for i=L to R
        if A[i]<pivot
            B[l]=A[i]
            l++
        else
            B[r]=A[i]
            r--
    B[l]=pivot
    A[L..R]=B[L..R]
    Randomized-Quick-Sort(A, L, p-1)
    Randomized-Quick-Sort(A, p+1, R)
```
- total time complexity: $O(n \log n)$ on average, $O(n^2)$ in the worst case