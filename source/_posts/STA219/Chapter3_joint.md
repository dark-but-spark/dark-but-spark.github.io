---
title: 工程概率与统计 3.Joint Distributions(至3.2)
date: 2025-10-14 12:00:00
tags: []
categories: [工程概率与统计]
---
# Chapter 3 - Joint Distributions
## 随机向量
随机向量（Random Vector）是由多个随机变量组成的向量。设$X_1, X_2, \ldots, X_n$为$n$个随机变量，则随机向量$\mathbf{X}$定义为：
$$\mathbf{X} = (X_1, X_2, \ldots, X_n).$$
如果$\omega \in \Omega \to (X_1(\omega), X_2(\omega), \ldots, X_n(\omega)) \in \mathbb{R}^n$，则称$\mathbf{X}$是一个$n$维随机向量。

## 联合分布
### 联合累计分布
随机向量$\mathbf{X} = (X_1, X_2, \ldots, X_n)$的联合累计分布函数（Joint Cumulative Distribution Function, Joint CDF）定义为：
$$F_{\mathbf{X}}(x_1, x_2, \ldots, x_n) = P(X_1 \leq x_1, X_2 \leq x_2, \ldots, X_n \leq x_n).$$
接下来只讨论二维随机向量$\mathbf{X} = (X, Y)$的联合累计分布函数，记为$F_{X,Y}(x,y)$。
满足以下性质：
- 非减性：若$x_1 < x_2$且$y_1 < y_2$，则$F_{X,Y}(x_1, y_1) \leq F_{X,Y}(x_2, y_2)$；
- 规范性：$F(+\infty，+\infty)=1$，$F(-\infty，y)=0$，$F(x,-\infty)=0$；
- 对任意$a < b$且$c < d$，有
$$P(a < X \leq b, c < Y \leq d) = F_{X,Y}(b,d) - F_{X,Y}(a,d) - F_{X,Y}(b,c) + F_{X,Y}(a,c).$$
- $F_X(x)=F_{X,Y}(x,\infty)$，$F_Y(y)= F_{X,Y}(\infty,y)$。
### 联合概率质量函数
对于离散型二维随机向量$\mathbf{X} = (X, Y)$，其联合概率质量函数（Joint Probability Mass Function, Joint PMF）定义为：
$$p_{X,Y}(x_i, y_j) = P(X = x_i, Y = y_j).$$
满足以下性质：
- 非负性：$p_{X,Y}(x_i, y_j) \geq 0$；
- 规范性：$\sum_{i} \sum_{j} p_{X,Y}(x_i, y_j) = 1$；
- 联合累计分布函数与联合概率质量函数的关系为：
$$F_{X,Y}(x,y) = \sum_{x_i \leq x} \sum_{y_j \leq y} p_{X,Y}(x_i, y_j).$$
- $P_{X}(x_i) = \sum_{j} P_{X,Y}(x_i, y_j)$，$P_{Y}(y_j) = \sum_{i} P_{X,Y}(x_i, y_j)$。
### 联合概率密度函数
对于连续型二维随机向量$\mathbf{X} = (X, Y)$，其联合概率密度函数（Joint Probability Density Function, Joint PDF）定义为：
$$P(a \leq X \leq b, c \leq Y \leq d) = \int_{a}^{b} \int_{c}^{d} f_{X,Y}(x,y) \, dy \, dx.$$
满足以下性质：
- 非负性：$f_{X,Y}(x,y) \geq 0$；
- 规范性：$\iint_{\mathbb{R}^2} f_{X,Y}(x,y) \, dy \, dx = 1$；
- 联合累计分布函数与联合概率密度函数的关系为：
$$F_{X,Y}(x,y) = \int_{-\infty}^{x} \int_{-\infty}^{y} f_{X,Y}(u,v) \, dv \, du.$$
$$f_{X,Y}(x,y) = \frac{\partial^2 F_{X,Y}(x,y)}{\partial x \partial y}.$$
- $f_X(x) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y) \, dy$，$f_Y(y) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y) \, dx$。
### 条件分布
#### 条件概率质量函数
对于离散型二维随机向量$\mathbf{X} = (X, Y)$，$P(Y = y_j) > 0$时，$X$在给定$Y = y_j$条件下的条件概率质量函数（Conditional Probability Mass Function, Conditional PMF）定义为：
$$p_{X|Y}(x_i | y_j) = P(X = x_i | Y = y_j) = \frac{P(X = x_i, Y = y_j)}{P(Y = y_j)} = \frac{p_{X,Y}(x_i, y_j)}{p_Y(y_j)}.$$

#### 条件概率密度函数
对于连续型二维随机向量$\mathbf{X} = (X, Y)$，$f_Y(y) > 0$时，$X$在给定$Y = y$条件下的条件概率密度函数（Conditional Probability Density Function, Conditional PDF）定义为：
$$f_{X|Y}(x | y) = f_{X,Y}(x,y) / f_Y(y).$$
## 俩个随机变量之间的关系
### 独立性
随机向量$\mathbf{X} = (x_1,x_2,\ldots,x_n)$的各个分量相互独立，当且仅当对于任意的$x_1,x_2,\ldots,x_n$，有
$$F_{X_1,X_2,\ldots,X_n}(x_1,x_2,\ldots,x_n) = F_{X_1}(x_1) F_{X_2}(x_2) \cdots F_{X_n}(x_n).$$
对于离散随机变量，有
$$p_{X_1,X_2,\ldots,X_n}(x_1,x_2,\ldots,x_n) = p_{X_1}(x_1) p_{X_2}(x_2) \cdots p_{X_n}(x_n).$$
对于连续随机变量，有
$$f_{X_1,X_2,\ldots,X_n}(x_1,x_2,\ldots,x_n) = f_{X_1}(x_1) f_{X_2}(x_2) \cdots f_{X_n}(x_n).$$
#### 性质
- 若$X$和$Y$相互独立，则$E(g(X)h(Y)) = E(g(X))E(h(Y))$。
- 若$X$和$Y$相互独立，则$Var(g(X) + h(Y)) = Var(g(X)) + Var(h(Y))$。
### 协方差
设随机变量$X$和$Y$的期望存在，则称随机变量$X$和$Y$的协方差（Covariance）为：
$$Cov(X,Y) = E[(X - E(X))(Y - E(Y))].$$
- 若$Cov(X,Y) > 0$，则称$X$和$Y$正相关；
- 若$Cov(X,Y) < 0$，则称$X$和$Y$负相关；
- 若$Cov(X,Y) = 0$，则称$X$和$Y$不相关。
- $Cov(X,Y) = E(XY) - E(X)E(Y)=\frac{Var(X+Y)-Var(X)-Var(Y)}{2}$。
- Covariance-Variance relationship: $Cov(X,X) = Var(X)$, $Var(X\pm Y) = Var(X) + Var(Y) \pm 2Cov(X,Y)$。
- Symmetry: $Cov(X,Y) = Cov(Y,X)$.
- Constants: For any constant $a$ and $b$, $Cov(aX,bY) = abCov(X,Y)$.
- Linearity: For any random variables $X$, $Y$, and $Z$, $Cov(X+Y,Z) = Cov(X,Z) + Cov(Y,Z)$.
- Constants have zero covariance: For any constant $c$, $Cov(X,c) = 0$.
- Bilinearity: For any random variables $X_1$, $X_2$, $Y_1$, and $Y_2$, and constants $a$, $b$, $c$, and $d$, $Cov(a_1X_1 + a_2X_2 + \cdots+a_n X_n, b_1Y_1 + b_2Y_2 + \cdots+b_m Y_m) = \sum_{i=1}^n \sum_{j=1}^m a_i b_j Cov(X_i, Y_j)$.
### 相关系数
设随机变量$X$和$Y$的方差均存在且不为零，则称随机变量$X$和$Y$的相关系数（Correlation Coefficient）为：
$$\rho_{X,Y} = Cor(X,Y) = E\left[\frac{(X-E(X))(Y-E(Y))}{SD(X) \cdot SD(Y)}\right]=\frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}.$$
- 相关系数的取值范围为$-1 \leq \rho_{X,Y} \leq 1$。
- 若$\rho_{X,Y} = 1$，则称$X$和$Y$完全正相关；
- 若$\rho_{X,Y} = -1$，则称$X$和$Y$完全负相关；
- 若$\rho_{X,Y} = 0$，则称$X$和$Y$不相关。
- $\rho_{X,Y}$描绘了变量间线性关系的强度和方向，但不一定表示因果关系。
#### 均方误差
假设存在一个线性估计器$\hat{Y} = aX + b$来预测随机变量$Y$的值，其中$a$和$b$是常数。均方误差（Mean Squared Error, MSE）定义为：
$$MSE = E\left[(Y - \hat{Y})^2\right] = E\left[(Y - (aX + b))^2\right].$$
- 最优线性估计器的系数$a$和$b$可以通过最小化均方误差来确定，具体为：
$$\begin{cases}
a = \frac{Cov(X,Y)}{Var(X)},\\b = E(Y) - aE(X).
\end{cases}
$$
- 最小均方误差（Minimum Mean Squared Error, MMSE）为：
$$\min_{a,b} MSE = Var(Y) - \frac{[Cov(X,Y)]^2}{Var(X)}=Var(Y)(1-\rho_{X,Y}^2).$$
### 条件期望
设随机变量$X$和$Y$的联合分布已知，则在给定$Y=y$条件下，随机变量$X$的条件期望（Conditional Expectation）定义为：
- 对于离散型随机变量，有
$$E(X|Y=y) = \sum_{i} x_i P(X=x_i | Y=y) = \sum_{i} x_i \frac{P(X=x_i, Y=y)}{P(Y=y)}.$$
- 对于连续型随机变量，有
$$E(X|Y=y) = \int_{-\infty}^{+\infty} x f_{X|Y}(x|y) dx = \int_{-\infty}^{+\infty} x \frac{f_{X,Y}(x,y)}{f_Y(y)} dx.$$
#### 全期望公式
随机变量$X$的期望可以通过条件期望来计算，称为全期望公式（Law of Total Expectation）：
$$E(x) = E[E(X|Y)].$$
具体地，
$$E(X) = E[E(X|Y)] = \sum_{j} E(X|Y=y_j) P(Y=y_j) \text{（对于离散型随机变量）}$$
$$E(X) = E[E(X|Y)] = \int_{-\infty}^{+\infty} E(X|Y=y) f_Y(y) dy \text{（对于连续型随机变量）}$$