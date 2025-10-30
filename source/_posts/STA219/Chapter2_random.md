---
title: 工程概率与统计 2.Random Variables and Distributions
date: 2025-9-27 12:00:00
tags: []
categories: [工程概率与统计]
---
# Chapter 2: Random Variables and Distributions
## 随机变量
随机变量：取实数值的定义在样本空间$\Omega$上的函数$X(\omega)$，即对每个样本点$\omega\in \Omega$，随机变量$X$都对应一个实数值$x=X(\omega)$。
- 离散型随机变量：随机变量$X$的取值是可列个实数值。
- 连续型随机变量：随机变量$X$的取值是不可列个实数值。
### 概率质量函数（PMF）
离散型随机变量$X$在支撑集（support set）$S={a_1,a_2,\ldots}$上的概率质量函数（Probability Mass Function, PMF）定义为：
$$p_X(a_i)=P(X=a_i).$$
满足以下性质：
- 非负性：$p_X(a_i)\geq 0$；
- 规范性：$\sum_{i} p_X(a_i)=1$。
#### Example 
设随机变量$X$取值范围为${1,2,\ldots}$，且概率质量函数为
$$p_X(k)=\frac{c\lambda^k}{k!},k=1,2,\ldots$$。求常数$c$的值。
解：由规范性，有
$$\sum_{k=1}^{\infty} p_X(k)=\sum_{k=1}^{\infty} \frac{c\lambda^k}{k!}=c\left(e^{\lambda}-1\right)=1.$$
因此，$c=\frac{1}{e^{\lambda}-1}$。
### 概率密度函数（PDF）
连续型随机变量$X$在区间$(-\infty,+\infty)$上的概率密度函数（Probability Density Function, PDF）定义为：
$$P(a\leq X\leq b)=\int_{a}^{b} f(x)dx.$$
满足以下性质：
- 非负性：$f(x)\geq 0$；
- 规范性：$\int_{-\infty}^{+\infty} f(x)dx=1$。
- $P(X=x)=0$.
tips: 概率密度函数并不是概率，$f(x)$的值可以大于1。$f(x)$越大，表示随机变量$X$取值在$x$附近的可能性越大。$f(x)$反映了围绕$x$的概率密度。
### 累计分布函数（CDF）
随机变量$X$的累计分布函数（Cumulative Distribution Function, CDF）定义为：
$$F_X(x)=P(X\leq x).$$
满足以下性质：
- 非减性：若$x_1<x_2$，则$F_X(x_1)\leq F_X(x_2)$；
- 规范性：$\lim_{x\to -\infty} F_X(x)=0$，$\lim_{x\to +\infty} F_X(x)=1$。
- 对于离散型随机变量$X$，有
$$F_X(x)=\sum_{a_i\leq x} p_X(a_i).$$
- 对于连续型随机变量$X$，有
$$F_X(x)=\int_{-\infty}^{x} f(t)dt.$$
- 对于任意的$a<b$，有
$$P(a\leq X\leq b)=F_X(b)-F_X(a).$$
### 期望
随机变量$X$的期望（Expectation）定义为：
- 对于离散型随机变量$X$，满足$\sum_{i} |a_i| p_X(a_i) < \infty$，有
$$E(X)=\sum_{i} a_i p_X(a_i).$$
- 对于连续型随机变量$X$，满足$\int_{-\infty}^{+\infty} |x| f(x)dx < \infty$，有
$$E(X)=\int_{-\infty}^{+\infty} x f(x)dx.$$
- 更一般的，设$g(X)$是随机变量$X$的某个函数，则
    - 对于离散型随机变量$X$，有
    $$E[g(X)]=\sum_{i} g(a_i) p_X(a_i).$$
    - 对于连续型随机变量$X$，有
    $$E[g(X)]=\int_{-\infty}^{+\infty} g(x) f(x)dx.$$
#### 基本性质
- 对于任意常数$c$，有$E(c)=c$；
- 对于任意常数$a$和$b$，有$E(aX+b)=aE(X)+b$；
- 对于任意随机变量$X$和$Y$，有$E(X+Y)=E(X)+E(Y)$。
### 方差
随机变量$X$的方差（Variance）定义为：
$$Var(X)=E\left[(X-E(X))^2\right].$$
标准差（Standard Deviation）定义为：
$$SD(X)=\sqrt{Var(X)}.$$
- 对于离散型随机变量$X$，有
$$Var(X)=\sum_{i} (a_i - E(X))^2 p_X(a_i).$$
- 对于连续型随机变量$X$，有
$$Var(X)=\int_{-\infty}^{+\infty} (x - E(X))^2 f(x)dx.$$
#### 基本性质
- 对于任意常数$c$，有$Var(c)=0$；
- 对于任意常数$a$和$b$，有$Var(aX+b)=a^2 Var(X)$；
- 对于任意随机变量$X$，有$Var(X)=E(X^2)-[E(X)]^2$。
## 常见离散分布
### 伯努利分布
伯努利分布（Bernoulli Distribution）：随机变量$X$只有两个可能取值$0$和$1$，且$P(X=1)=p$，$P(X=0)=1-p$，则称随机变量$X$服从参数为$p$的伯努利分布，记为$X\sim Bernoulli(p)$。
- 概率质量函数：
$$p_X(k)=p^k(1-p)^{1-k},k=0,1.$$
- 期望：$E(X)=p$；
- 方差：$Var(X)=p(1-p)$。
### 二项分布
二项分布（Binomial Distribution）：设随机变量$X$表示$n$次独立重复的伯努利试验中成功的次数，且每次试验成功的概率为$p$，则称随机变量$X$服从参数为$n$和$p$的二项分布，记为$X\sim B(n,p)$。
独立代表每次试验的结果不受其他试验结果的影响。
重复表明每次试验的条件相同。
- 概率质量函数：
$$p_X(k)=\left( n \atop  k\right) p^k(1-p)^{n-k},k=0,1,\ldots,n.$$
- 期望：$E(X)=np$；
- 方差：$Var(X)=np(1-p)$。
### 几何分布
几何分布（Geometric Distribution）：设随机变量$X$表示进行独立重复的伯努利试验直到第一次成功所需的试验次数，且每次试验成功的概率为$p$，则称随机变量$X$服从参数为$p$的几何分布，记为$X\sim Geometric(p)$。
- 概率质量函数：
$$p_X(k)=(1-p)^{k-1}p,k=1,2,\ldots.$$
- 期望：$E(X)=\frac{1}{p}$；
- 方差：$Var(X)=\frac{1-p}{p^2}$。
- 无记忆性：对于任意的$m,n=1,2,\ldots$，有
$$P(X>m+n|X>m)=P(X>n).$$
### 泊松分布
泊松分布（Poisson Distribution）：设随机变量$X$表示在某一时间间隔或空间区域内某事件发生的次数，且该事件在该时间间隔或空间区域内发生的平均次数为$\lambda$（泊松强度 intensity），则称随机变量$X$服从参数为$\lambda$的泊松分布，记为$X\sim Poisson(\lambda)$。
- 概率质量函数：
$$p_X(k)=\frac{e^{-\lambda}\lambda^k}{k!},k=0,1,2,\ldots.$$
- 期望：$E(X)=\lambda$；
- 方差：$Var(X)=\lambda$。
#### 泊松分布与二项分布的关系
泊松分布可以看作是二项分布在$n$趋于无穷大且$p$趋于$0$时的极限情况，此时$np=\lambda$为常数。
证明：
考虑单位时间$[0,1]$的时间数量，将其划分为$n$个小时间间隔，每个小时间间隔内事件发生的概率为$p=\frac{\lambda}{n}$。则在单位时间内事件发生的总次数$X$服从参数为$n$和$p$的二项分布，即$X\sim B(n,\frac{\lambda}{n})$。有
$$P(X=k)=\left( n \atop  k\right) \left(\frac{\lambda}{n}\right)^k\left(1-\frac{\lambda}{n}\right)^{n-k}$$
令$n\to \infty$，则
$$\lim_{n\to \infty}P(X=k)=\frac{n^k}{k!}\times\frac{\lambda^k}{n^k}\times\lim_{n\to \infty}\left(1-\frac{\lambda}{n}\right)^{n}=\frac{e^{-\lambda}\lambda^k}{k!}.$$
## 常见连续分布
### 均匀分布
均匀分布（Uniform Distribution）：设随机变量$X$在区间$[a,b]$上服从均匀分布，记为$X\sim U(a,b)$，则随机变量$X$在区间$[a,b]$内的每个值出现的可能性相等。
- 概率密度函数：
$$f(x)=\begin{cases}
\frac{1}{b-a}, & a\leq x \leq b;\\
0, & \text{其他}.
\end{cases}$$
- 累计分布函数：
$$F_X(x)=\begin{cases}
0, & x<a;\\
\frac{x-a}{b-a}, & a\leq x \leq b;\\
1, & x>b.
\end{cases}$$
- 期望：$E(X)=\frac{a+b}{2}$；
- 方差：$Var(X)=\frac{(b-a)^2}{12}$。
### 指数分布
指数分布（Exponential Distribution）：设随机变量$X$表示某事件发生的时间间隔，且该事件发生的平均速率为$\lambda$，则称随机变量$X$服从参数为$\lambda$的指数分布，记为$X\sim Exponential(\lambda)$。
- 概率密度函数：
$$f(x)=\begin{cases}
\lambda e^{-\lambda x}, & x\geq 0;\\
0, & \text{其他}.
\end{cases}$$
- 累计分布函数：
$$F_X(x)=\begin{cases}
0, & x<0;\\
1-e^{-\lambda x}, & x\geq 0.
\end{cases}$$
- 期望：$E(X)=\frac{1}{\lambda}$；
- 方差：$Var(X)=\frac{1}{\lambda^2}$。
- 无记忆性：对于任意的$s,t\geq 0$，有
$$P(X>s+t|X>s)=P(X>t).$$
### 正态分布
正态分布（Normal Distribution）：设随机变量$X$服从均值为$\mu$，方差为$\sigma^2$的正态分布，记为$X\sim N(\mu,\sigma^2)$。
- 概率密度函数：
$$f(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}},-\infty<x<+\infty.$$
- 累计分布函数：
$$F_X(x)=\int_{-\infty}^{x} \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(t-\mu)^2}{2\sigma^2}}dt.$$
- 期望：$E(X)=\mu$；
- 方差：$Var(X)=\sigma^2$。
#### 标准正态分布
标准正态分布（Standard Normal Distribution）：设随机变量$Z$服从均值为$0$，方差为$1$的正态分布，记为$Z\sim N(0,1)$。
- 概率密度函数：
$$\phi(z)=\frac{1}{\sqrt{2\pi}}e^{-\frac{z^2}{2}},-\infty<z<+\infty.$$
- 累计分布函数：
$$\Phi(z)=\int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}dt.$$
- 期望：$E(Z)=0$；
- 方差：$Var(Z)=1$。

## 随机变量的变换
对于离散型随机变量$X$，设$Y=g(X)$，则随机变量$Y$的概率质量函数为：
$$p_Y(y_j)=\sum_{x_i:g(x_i)=y_j} p_X(x_i).$$
对于连续型随机变量$X$，设$Y=g(X)$，且$g$为单调可逆函数，则随机变量$Y$的概率密度函数为：
$$f_Y(y)=f_X(g^{-1}(y))\left|{d \over dy}g^{-1}(y)\right|.$$
对于连续型随机变量$X$，设$Y=g(X)$也连续并且严格单调，所以存在反函数$h(y)=g^{-1}(y)$，则随机变量$Y$的累计分布函数为：
$$F_Y(y)=|h'(y)|F_X(h(y)).(h \text{ 有定义})$$
### CDF变换与逆CDF变换
连续随机变量经过CDF变换后服从$U(0,1)$分布，即$F_X(X)\sim U(0,1)$。
证明：
设$U=F_X(X)$，则对于$0<u<1$，有
$$P(U\leq u)=P(F_X(X)\leq u)=P(X\leq F_X^{-1}(u))=F_X(F_X^{-1}(u))=u.$$
因此，$U\sim U(0,1)$。
均匀分布经逆 CDF 变换后服从目标分布。
### 期望变换与凹凸函数(Jensen不等式)
设随机变量$X$的期望存在，且$g$为凹函数，则
$$E[g(X)]\leq g(E[X]).$$
设随机变量$X$的期望存在，且$g$为凸函数，则
$$E[g(X)]\geq g(E[X]).$$
#### 特例：
设随机变量$X$的期望存在，则
$$E[X^2]\geq (E[X])^2.$$
$$E[|X|]\geq |(E[X])|.$$
$$E[|X|^p]\geq |(E[X])|^p(p\geq 1).$$
$$E[e^{X}]\geq e^{E[X]}.$$
