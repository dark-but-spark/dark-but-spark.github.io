---
title: "1.Logic and Proofs"
date: 2024-09-16 8:00:00
categories: 离散数学
tags: [离散数学]
---

# Logic and Proofs
## Logic
Logic is the basis of all mathematical reasoning
 - syntax of statements
 - meaning of statements
 - rules of logical inference
## Propositional Logic
Proposition: a declarative statement that is either true or false(只有对和错)
* *declarative*: making an explicit statement（陈述句）
###  Compound proposition（复合命题）
A compound proposition is a proposition that is built from multiple elementary propositions using logical connectives. 用多个简单命题通过连接词构成的命题。

elementary propositions using logical connectives: 连接词

### Negation (not)
 Let $p$ be a proposition. The proposition “It is not the case that $p$.” is called the negation of $p$, denoted by $\lnot p$, and read as “not $p$”.
 #### Truth Table 
| $p$ | $\lnot p$ |
|:-:|:-:|
| T   | F |
| F   | T |
### Conjunction (and)
Let $p$ and $q$ be propositions. The conjunction of $p$ and $q$, denoted by $p \land q$, is true when both $p$ and $q$ are true and false otherwise.
#### Truth Table
| $p$ | $q$ | $p \land q$ |
|:-:|:-:|:-:|
| T   | T   | T |
| T   | F   | F |
| F   | T   | F |
| F   | F   | F |
### Disjunction (or)
Let $p$ and $q$ be propositions. The disjunction of $p$ and $q$, denoted by $p \lor q$, is true when $p$ or $q$ is true and false otherwise.
#### Truth Table
| $p$ | $q$ | $p \lor q$ |
|:-:|:-:|:-:|
| T   | T   | T |
| T   | F   | T |
| F   | T   | T |
| F   | F   | F |
### Exclusive Or (xor)
Let $p$ and $q$ be propositions. The exclusive or of $p$ and $q$, denoted by $p \oplus q$, is true when **either $p$ or $q$** is true (i.e., exactly one of $p$, $q$ is true) and false otherwise.
#### Truth Table
| $p$ | $q$ | $p \oplus q$ |
|:-:|:-:|:-:|
| T   | T   | F |
| T   | F   | T |
| F   | T   | T |
| F   | F   | F |
### Implication (if...then)
Let $p$ and $q$ be propositions. The implication (also known as conditional statement) **“if $p$, then $q$”**, denoted by $p \rightarrow q$, is false when $p$ is true and $q$ is false, and true otherwise.
- $p$ is called the **hypothesis or premise** and $q$ is called the **conclusion**
#### Truth Table
| $p$ | $q$ | $p \rightarrow q$ | $\lnot p \lor q$ |
|:-:|:-:|:-:|:-:|
| T   | T   | T | T |
| T   | F   | F | F |
| F   | T   | T | T |
| F   | F   | T | T |
- $p \rightarrow q$ is logically equivalent to $\lnot p \lor q$
#### equivalent ways
• if $p$ then $q$
• $p$ implies $q$
• $p$ is sufficient for $q$
• $q$ is necessary for $p$
• $q$ follows from $p$
• $q$ unless $\lnot p$
• $p$ only if $q$
#### converse, contrapositive and inverse
- The **converse** of $p \rightarrow q$ is $q \rightarrow p$
- The **contrapositive** of $p \rightarrow q$ is $\lnot q \rightarrow \lnot p$
- The **inverse** of $p \rightarrow q$ is $\lnot p \rightarrow \lnot q$
- $p \rightarrow q$ is logically equivalent to its contrapositive $\lnot q \rightarrow \lnot p$
### Biconditional (if and only if)
Let p and q be propositions. The biconditional statement (also known as biimplication) “p if and only if q”, denoted by p ↔ q, is 
true if p and q have the same truth values, and false otherwise.
 • the opposite of p ↔ q is exclusive or p ⊕ q